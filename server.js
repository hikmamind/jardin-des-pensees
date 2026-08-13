import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { SHOP_PRODUCTS } from './shop/products_data.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_for_downloads';
const DOMAIN = process.env.DOMAIN_URL || `http://localhost:${PORT}`;

// We will store confirmed orders in memory for this iteration.
// In production, this should be a database.
const orders = new Map();

// --- Middleware ---
// Use raw body for Stripe webhooks
app.use('/api/webhook', express.raw({ type: 'application/json' }));

app.use(cors());
app.use(express.json());

// Block direct access to secure-files
app.use('/secure-files', (req, res) => {
  res.status(403).send('Access denied.');
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// --- API Endpoints ---

// 1. Create Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, lang = 'ar' } = req.body;
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Le panier est vide.' });
    }

    const lineItems = [];
    
    for (const item of items) {
      const product = SHOP_PRODUCTS.find(p => p.id === item.id);
      if (!product) {
        return res.status(400).json({ error: `Produit introuvable: ${item.id}` });
      }
      
      // We don't charge for free items via Stripe Checkout, they should be handled directly.
      if (product.price === 0) continue;
      
      const title = product.title[lang] || product.title.ar;
      const desc = product.shortDesc[lang] || product.shortDesc.ar;
      
      lineItems.push({
        price_data: {
          currency: 'eur', // Or get from env/product
          product_data: {
            name: title,
            description: desc,
          },
          unit_amount: Math.round(product.price * 100), // Stripe expects cents
        },
        quantity: item.qty || 1,
      });
    }

    if (lineItems.length === 0) {
      return res.status(400).json({ error: 'Aucun produit payant dans le panier.' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: `${DOMAIN}/shop/success.html?session_id={CHECKOUT_SESSION_ID}&lang=${lang}`,
      cancel_url: `${DOMAIN}/shop/cancel.html?lang=${lang}`,
      metadata: {
        product_ids: JSON.stringify(items.map(i => i.id)),
        lang: lang
      }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Erreur Checkout:', error);
    res.status(500).json({ error: 'Erreur lors de la création de la session de paiement.' });
  }
});

// 2. Stripe Webhook
app.post('/api/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || 'whsec_placeholder'
    );
  } catch (err) {
    console.error(`⚠️  Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Save order status
    const productIds = JSON.parse(session.metadata.product_ids || '[]');
    
    // Generate a secure download token
    const token = jwt.sign(
      { 
        sessionId: session.id,
        products: productIds 
      }, 
      JWT_SECRET, 
      { expiresIn: '24h' } // Token expires in 24 hours
    );

    orders.set(session.id, {
      status: 'paid',
      products: productIds,
      token: token,
      amount: session.amount_total,
      currency: session.currency
    });
    
    console.log(`✅ Commande ${session.id} payée avec succès !`);
  }

  res.send();
});

// 3. Get Order Status (for success page)
app.get('/api/order/status/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const order = orders.get(sessionId);
  
  if (!order) {
    return res.status(404).json({ error: 'Commande introuvable ou en cours de traitement.' });
  }
  
  res.json({
    status: order.status,
    download_token: order.token,
    products: order.products
  });
});

// 4. Secure Download Endpoint
app.get('/api/download/:token', (req, res) => {
  const { token } = req.params;
  const productId = req.query.productId; // The specific product to download

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    if (!productId || !decoded.products.includes(productId)) {
      return res.status(403).send("Accès refusé pour ce produit.");
    }

    // Map product IDs to their secure file paths
    // We will place files in a non-public folder called 'secure-files'
    const fileMap = {
      'prod_marc_aurele_pdf': 'e-book-marc-aurele.pdf',
      'prod_schopenhauer': '20-citations-schopenhauer.html',
      'prod_guide': 'stoicisme-force-calme.html'
    };

    const fileName = fileMap[productId];
    if (!fileName) {
      return res.status(404).send("Fichier non trouvé.");
    }

    const filePath = path.join(__dirname, 'secure-files', fileName);
    
    if (!fs.existsSync(filePath)) {
      console.error(`Fichier manquant: ${filePath}`);
      return res.status(404).send("Le fichier demandé n'est pas disponible sur le serveur.");
    }

    // Trigger download using stream for maximum compatibility
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    if (fileName.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
    }
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send("Le lien de téléchargement a expiré (limite de 24h).");
    }
    return res.status(401).send("Lien de téléchargement invalide.");
  }
});

// --- Audio Reviews & Ratings API ---
const audioRatingsStore = new Map();
const audioCommentsStore = new Map();

app.get('/api/audio/:workId/reviews', (req, res) => {
  const { workId } = req.params;
  const ratings = audioRatingsStore.get(workId) || [];
  const comments = audioCommentsStore.get(workId) || [];

  const totalRatings = ratings.length;
  const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
  const average = totalRatings > 0 ? parseFloat((sum / totalRatings).toFixed(1)) : 0;

  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  ratings.forEach(r => {
    if (r.rating >= 1 && r.rating <= 5) distribution[r.rating]++;
  });

  const percentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  if (totalRatings > 0) {
    for (let i = 1; i <= 5; i++) {
      percentages[i] = Math.round((distribution[i] / totalRatings) * 100);
    }
  }

  res.json({
    workId,
    summary: {
      totalCount: totalRatings,
      average,
      distribution,
      percentages
    },
    comments
  });
});

app.post('/api/audio/:workId/rating', (req, res) => {
  const { workId } = req.params;
  const { rating, clientId } = req.body;
  const numRating = parseInt(rating, 10);

  if (isNaN(numRating) || numRating < 1 || numRating > 5) {
    return res.status(400).json({ error: 'Note invalide (doit être entre 1 et 5).' });
  }

  if (!audioRatingsStore.has(workId)) {
    audioRatingsStore.set(workId, []);
  }

  const ratings = audioRatingsStore.get(workId);
  const clientKey = clientId || req.ip;
  const existingIdx = ratings.findIndex(r => r.clientKey === clientKey);

  if (existingIdx >= 0) {
    ratings[existingIdx].rating = numRating;
    ratings[existingIdx].updatedAt = Date.now();
  } else {
    ratings.push({ clientKey, rating: numRating, createdAt: Date.now() });
  }

  const totalRatings = ratings.length;
  const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
  const average = totalRatings > 0 ? parseFloat((sum / totalRatings).toFixed(1)) : 0;

  res.json({
    success: true,
    workId,
    userRating: numRating,
    average,
    totalCount: totalRatings
  });
});

app.post('/api/audio/:workId/comments', (req, res) => {
  const { workId } = req.params;
  const { author, text, rating, parentId } = req.body;

  const cleanAuthor = (author || '').trim().slice(0, 80);
  const cleanText = (text || '').trim().slice(0, 1500);

  if (!cleanAuthor) {
    return res.status(400).json({ error: 'Le nom est obligatoire.' });
  }
  if (!cleanText) {
    return res.status(400).json({ error: 'Le commentaire ne peut pas être vide.' });
  }

  if (!audioCommentsStore.has(workId)) {
    audioCommentsStore.set(workId, []);
  }

  const comments = audioCommentsStore.get(workId);

  if (parentId) {
    const parent = comments.find(c => c.id === parentId);
    if (!parent) {
      return res.status(404).json({ error: 'Commentaire parent introuvable.' });
    }
    if (!parent.replies) parent.replies = [];
    const newReply = {
      id: `reply_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      author: cleanAuthor,
      text: cleanText,
      createdAt: Date.now()
    };
    parent.replies.push(newReply);
    return res.json({ success: true, reply: newReply });
  }

  const newComment = {
    id: `comm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    workId,
    author: cleanAuthor,
    text: cleanText,
    rating: (rating >= 1 && rating <= 5) ? rating : null,
    createdAt: Date.now(),
    replies: []
  };

  comments.unshift(newComment);
  res.json({ success: true, comment: newComment });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
