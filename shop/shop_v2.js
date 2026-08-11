import TIKTOK_DATA from '../data_v11.js';

// --- Shared SVG Icons Map ---
const ICONS = {
  'book-open': '<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
  'book': '<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  'image': '<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
  'film': '<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
  'award': '<svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  'plus': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
  'shopping-cart': '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
  'trash': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>'
};

const LANG_METADATA = {
  ar: { label: "العربية", code: "ar" },
  fr: { label: "Français", code: "fr" },
  en: { label: "English", code: "en" }
};

function getSavedLanguage() {
  const saved = localStorage.getItem('site_lang_v1') || localStorage.getItem('lang') || localStorage.getItem('preferredLang');
  if (saved && (saved === 'ar' || saved === 'fr' || saved === 'en')) {
    return saved;
  }
  return 'ar';
}

function saveLanguage(lang) {
  localStorage.setItem('site_lang_v1', lang);
  localStorage.setItem('lang', lang);
  localStorage.setItem('preferredLang', lang);
}

let currentLang = getSavedLanguage();
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('stoic_shop_cart')) || [];

// --- Language Engine ---
function setLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);
  
  // Set document direction & lang
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update active language label in navbar
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = (LANG_METADATA[lang] && LANG_METADATA[lang].label) || "العربية";

  // Update active dropdown options
  const options = document.querySelectorAll('.lang-opt');
  options.forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Translate all elements with data-i18n
  const ui = TIKTOK_DATA.ui[lang] || TIKTOK_DATA.ui.ar;
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (ui[key]) {
      if (key === 'footerBrandDesc') {
        el.innerHTML = ui[key];
      } else {
        el.textContent = ui[key];
      }
    }
  });

  // Update Placeholders in Checkout Modal
  const cardHolderInput = document.getElementById('cardHolderInput');
  if (cardHolderInput && ui.placeholderName) {
    cardHolderInput.placeholder = ui.placeholderName;
  }
  const checkoutEmailInput = document.getElementById('checkoutEmailInput');
  if (checkoutEmailInput && ui.placeholderEmail) {
    checkoutEmailInput.placeholder = ui.placeholderEmail;
  }

  // Re-populate products and cart UI
  populateProducts(currentCategory);
  updateCartUI();
}

function initLanguageSelector() {
  const langBtn = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  if (langBtn && dropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });

    const options = dropdown.querySelectorAll('.lang-opt');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }

  // Set initial language
  setLanguage(currentLang);
}

// --- Theme Switcher ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcons(newTheme);
    });
  }
}

function updateThemeIcons(theme) {
  const sun = document.querySelector('#themeToggleBtn .sun-icon');
  const moon = document.querySelector('#themeToggleBtn .moon-icon');
  if (sun && moon) {
    sun.style.display = theme === 'light' ? 'block' : 'none';
    moon.style.display = theme === 'dark' ? 'block' : 'none';
  }
}

// --- Products Data Setup ---
// Slug map: matches products_data.js slugs for routing to /shop/product/?slug=...
const PRODUCT_SLUGS = {
  'prod_audio':          'audio-sanctuary',
  'prod_calendar':       'philosophical-calendar',
  'prod_7_habits':       '7-habits-potential',
  'prod_marc_aurele_pdf':'marcus-aurelius-ebook',
  'prod_schopenhauer':   'schopenhauer-quotes',
  'prod_guide':          'stoic-guide'
};

function getProducts() {
  return [
    { id: 'prod_audio',          type: 'digital', price: 0.00, icon: 'book-open', image: '../audio_sanctuary_hero.jpg',         titleFr: 'Studio Audio & Citadelle Intérieure',          titleEn: 'Audio Studio & Inner Citadel',                  titleAr: 'الاستوديو الصوتي والقلعة الداخلية',       descFr: 'Mixeur d\'ambiances stoïciennes (Pluie, Feu, 432Hz) et lecteur de sagesses philosophiques. Gratuit.', descEn: 'Stoic ambient soundscape mixer (Rain, Fire, 432Hz) and philosophical wisdom narrator. Free.', descAr: 'خافق الأجواء الرواقية (أصوات الأمطار، النار، 432Hz) وقارئ الحكمة الصوتي للتركيز والتأمل. مجاني.' },
    { id: 'prod_calendar',       type: 'digital', price: 0.00, icon: 'book-open', image: '../philosophical_calendar_hero.jpg',   titleFr: 'Calendrier Philosophique (365 Jours)',          titleEn: 'Philosophical Calendar (365 Days)',              titleAr: 'التقويم الفلسفي اليومي (٣٦٥ يوماً)',       descFr: '365 jours de sagesse stoïcienne et de pensées quotidiennes pour faire grandir votre esprit. Gratuit et imprimable.', descEn: '365 days of stoic wisdom and daily thoughts to elevate your mind. Free & printable.', descAr: '٣٦٥ يوماً من الحكمة والرواقية لتأمل وتطوير الذات يومياً. مجاني وقابل للطباعة PDF.' },
    { id: 'prod_7_habits',       type: 'digital', price: 0.00, icon: 'book-open', image: '../habits_library_hero.jpg',           titleFr: '7 Habitudes qui Détruisent votre Potentiel',   titleEn: '7 Habits That Destroy Your Potential',         titleAr: '٧ عادات تدمر إمكانياتك دون أن تشعر',     descFr: 'Comment dépasser vos mauvaises habitudes selon la sagesse des plus grands penseurs. Article illustré gratuit.', descEn: 'How to overcome bad habits according to the wisdom of the greatest thinkers. Free illustrated article.', descAr: 'كيف تتجاوز عاداتك السيئة وفقاً لحكمة أعظم المفكرين. مقال مجاني مصوّر بجودة عالية.' },
    { id: 'prod_marc_aurele_pdf',type: 'digital', price: 0.00, icon: 'book-open', image: '../marc_aurelius_writing.jpg',         titleFr: 'E-book Marc Aurèle (PDF)',                     titleEn: 'Marcus Aurelius E-book (PDF)',                  titleAr: 'كتاب ماركوس أوريليوس (PDF)',              descFr: 'Le livre PDF complet de Marc Aurèle avec le guide stoïcien et les exercices pratiques.', descEn: 'The complete PDF book of Marcus Aurelius with the Stoic guide and practical exercises.', descAr: 'كتاب إلكتروني كامل بصيغة PDF يحتوي على دليل الرواقية الكامل والتمارين التطبيقية لماركوس أوريليوس.' },
    { id: 'prod_schopenhauer',   type: 'digital', price: 0.00, icon: 'book-open', image: '../thinkers/images/schopenhauer.jpg', titleFr: '20 Citations de Schopenhauer',                 titleEn: '20 Quotes of Schopenhauer',                    titleAr: '20 اقتباساً لآرثر شوبنهاور',             descFr: 'E-book contenant 20 citations phares avec explications détaillées, leçons et questions de réflexion.', descEn: 'Ebook containing 20 key quotes with detailed explanations, lessons, and reflection questions.', descAr: 'كتاب إلكتروني يحتوي على 20 اقتباساً مختارة مع الشرح والدروس وأسئلة التأمل.' },
    { id: 'prod_guide',          type: 'digital', price: 0.00, icon: 'book-open', image: '../stoicisme-modern.jpg',              titleFr: 'Guide Stoïcien Complet',                       titleEn: 'Complete Stoic Guide',                         titleAr: 'دليل الرواقية الكامل',                    descFr: 'Un guide de 50 pages sur l\'art de la citadelle intérieure et la maîtrise des peurs.', descEn: 'A 50-page guide on the art of the inner citadel and conquering fears.', descAr: 'دليل شامل من 50 صفحة عن فن بناء قلعة العقل والتغلب على المخاوف.' }
  ];
}

// --- Populate Products List ---
function populateProducts(category = 'all') {
  const container = document.getElementById('productsList');
  if (!container) return;

  let products = getProducts();
  if (category !== 'all') {
    products = products.filter(p => p.type === category);
  }

  const ui = TIKTOK_DATA.ui[currentLang] || TIKTOK_DATA.ui.ar;
  const addLabel    = ui.addToCart    || (currentLang === 'ar' ? 'أضف إلى السلة' : currentLang === 'en' ? 'Add to cart'  : 'Ajouter au panier');
  const viewLabel   = ui.viewProduct  || (currentLang === 'ar' ? 'عرض المنتج'    : currentLang === 'en' ? 'View product' : 'Voir le produit');
  const downloadLabel = ui.downloadBtn || (currentLang === 'ar' ? 'تحميل'         : currentLang === 'en' ? 'Download'     : 'Télécharger');
  const freeLabel   = ui.freeLabel    || (currentLang === 'ar' ? 'مجاني'         : currentLang === 'en' ? 'Free'         : 'Gratuit');

  container.innerHTML = products.map(prod => {
    const title       = currentLang === 'ar' ? prod.titleAr : currentLang === 'en' ? prod.titleEn : prod.titleFr;
    const desc        = currentLang === 'ar' ? prod.descAr  : currentLang === 'en' ? prod.descEn  : prod.descFr;
    const priceStr    = prod.price === 0 ? freeLabel : `${prod.price.toFixed(2)} €`;
    const iconSvg     = ICONS[prod.icon];
    const categoryLabel = ui[prod.type === 'digital' ? 'filterDigital' : 'filterPhysical'] || prod.type;
    const productSlug = PRODUCT_SLUGS[prod.id] || prod.id;
    const productUrl  = `product/?slug=${productSlug}`;

    const isDirectDownload = prod.price === 0 && prod.type === 'digital';
    const btnLabel = isDirectDownload ? downloadLabel : addLabel;
    const btnIcon  = isDirectDownload ? ICONS['book-open'] : ICONS['plus'];
    const btnClass = isDirectDownload ? 'direct-download-btn' : 'add-to-cart-btn';

    // File mapping (kept for direct-download logic)
    const fileMap = {
      'prod_audio':          '../audio/index.html',
      'prod_calendar':       '../calendar/index.html',
      'prod_7_habits':       '../articles/7-habits/index.html',
      'prod_marc_aurele_pdf':'e-book-marc-aurele.pdf',
      'prod_schopenhauer':   '20-citations-schopenhauer.html',
      'prod_guide':          'stoicisme-force-calme.html'
    };
    const fileName = fileMap[prod.id] || 'readme.txt';

    return `
      <div class="product-card" style="position:relative;">
        <!-- Clickable overlay: image + title → product page -->
        <a href="${productUrl}"
           class="product-card-link"
           aria-label="${viewLabel}: ${title}"
           style="display:block;text-decoration:none;color:inherit;">
          <div class="product-icon-container">
            ${prod.image ? `<img src="${prod.image}" alt="${title}" class="product-image">` : iconSvg}
            <span class="product-badge ${prod.type}">${categoryLabel}</span>
          </div>
          <h3 class="product-title" style="color:var(--text-primary);">${title}</h3>
        </a>
        <p class="product-desc">${desc}</p>
        <div class="product-footer-row" style="margin-top:auto;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;width:100%;gap:8px;">
          <span class="product-price">${priceStr}</span>
          <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
            <!-- View Product button → product detail page -->
            <a href="${productUrl}" class="product-btn view-product-btn"
               style="background:transparent;border:1px solid var(--accent-gold);color:var(--accent-gold);padding:8px 14px;border-radius:50px;font-size:0.78rem;font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:5px;white-space:nowrap;transition:all 0.2s;"
               aria-label="${viewLabel}: ${title}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              ${viewLabel}
            </a>
            <!-- Main action button (add to cart / download) -->
            <button class="product-btn ${btnClass}" data-id="${prod.id}" data-file="${fileName}" style="white-space:nowrap;">
              ${btnIcon}
              <span>${btnLabel}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Bind clicks to newly created add-to-cart buttons
  const addBtns = container.querySelectorAll('.add-to-cart-btn');
  addBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-id');
      addToCart(prodId);
    });
  });

  const downloadBtns = container.querySelectorAll('.direct-download-btn');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const fileName = btn.getAttribute('data-file');
      window.open(`../files/${fileName}`, '_blank');
    });
  });
}

// --- Cart Drawer Actions ---
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Save & Sync Cart to LocalStorage
function saveCart() {
  localStorage.setItem('stoic_shop_cart', JSON.stringify(cart));
  updateCartUI();
}

// Add Item to Cart
function addToCart(prodId) {
  const products = getProducts();
  const prod = products.find(p => p.id === prodId);
  if (!prod) return;

  const existing = cart.find(item => item.id === prodId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: prodId, qty: 1 });
  }

  saveCart();
  openCartDrawer();
}

// Remove/Subtract Item from Cart
function removeFromCart(prodId, forceAll = false) {
  const existing = cart.find(item => item.id === prodId);
  if (!existing) return;

  if (forceAll || existing.qty <= 1) {
    cart = cart.filter(item => item.id !== prodId);
  } else {
    existing.qty -= 1;
  }
  saveCart();
}

// Update Cart Count, Badges and Items Drawer rendering
function updateCartUI() {
  const badge = document.getElementById('cartBadgeCount');
  const listContainer = document.getElementById('cartItemsList');
  const totalAmountEl = document.getElementById('cartTotalVal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  const products = getProducts();
  const ui = TIKTOK_DATA.ui[currentLang] || TIKTOK_DATA.ui.ar;
  
  // Calculate total count
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }

  if (totalCount === 0) {
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="cart-empty-state" style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1" style="margin-bottom: 12px; opacity: 0.6;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p style="margin: 0; font-size: 0.95rem;">${ui.cartEmpty || 'سلة المشتريات فارغة حالياً.'}</p>
        </div>
      `;
    }
    if (totalAmountEl) totalAmountEl.textContent = '0.00 €';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let totalSum = 0;
  let itemsHtml = '';

  const freeLabel = ui.freeLabel || (currentLang === 'ar' ? 'مجاني' : currentLang === 'en' ? 'Free' : 'Gratuit');

  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (!prod) return;

    const title = currentLang === 'ar' ? prod.titleAr : currentLang === 'en' ? prod.titleEn : prod.titleFr;
    const priceSum = prod.price * item.qty;
    totalSum += priceSum;
    
    const displayPrice = prod.price === 0 ? freeLabel : `${prod.price.toFixed(2)} €`;

    itemsHtml += `
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div class="cart-item-info" style="flex: 1; padding-inline-end: 12px;">
          <h4 class="cart-item-title" style="margin: 0 0 4px; font-size: 0.95rem; color: var(--text-primary);">${title}</h4>
          <span class="cart-item-price" style="font-size: 0.85rem; color: var(--accent-gold); font-weight: 700;">${displayPrice} x ${item.qty}</span>
        </div>
        <div class="cart-item-actions" style="display: flex; align-items: center; gap: 8px;">
          <div class="qty-controls" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.06); border-radius: 8px; padding: 2px 6px;">
            <button class="qty-btn minus" data-id="${prod.id}" style="background: none; border: none; color: var(--text-primary); cursor: pointer; font-size: 1rem; padding: 2px 6px;">-</button>
            <span class="qty-num" style="font-size: 0.85rem; font-weight: 700;">${item.qty}</span>
            <button class="qty-btn plus" data-id="${prod.id}" style="background: none; border: none; color: var(--text-primary); cursor: pointer; font-size: 1rem; padding: 2px 6px;">+</button>
          </div>
          <button class="cart-remove-btn" data-id="${prod.id}" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; padding: 6px; transition: color 0.2s;" title="Supprimer">
            ${ICONS['trash']}
          </button>
        </div>
      </div>
    `;
  });

  if (listContainer) listContainer.innerHTML = itemsHtml;
  if (totalAmountEl) totalAmountEl.textContent = `${totalSum.toFixed(2)} €`;

  // Bind cart events
  const minusBtns = listContainer.querySelectorAll('.qty-controls .minus');
  const plusBtns = listContainer.querySelectorAll('.qty-controls .plus');
  const trashBtns = listContainer.querySelectorAll('.cart-remove-btn');

  minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeFromCart(id);
    });
  });

  plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });

  trashBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      removeFromCart(id, true);
    });
  });
}

// --- Digital Order Checkout Simulator ---
// --- Real Stripe Checkout ---
function setupCheckoutSimulator() {
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (!checkoutBtn) return;

  checkoutBtn.addEventListener('click', async () => {
    // Check if cart is empty
    if (cart.length === 0) return;

    // Filter paid products (free products don't go to stripe)
    const paidItems = [];
    const products = getProducts();
    cart.forEach(item => {
      const p = products.find(prod => prod.id === item.id);
      if (p && p.price > 0) paidItems.push(item);
    });

    if (paidItems.length === 0) {
      alert(currentLang === 'ar' ? 'السلة تحتوي على منتجات مجانية فقط.' : 'Le panier ne contient que des produits gratuits.');
      return;
    }

    checkoutBtn.disabled = true;
    const origText = checkoutBtn.innerHTML;
    checkoutBtn.innerHTML = currentLang === 'ar' ? 'جاري التحويل...' : (currentLang === 'en' ? 'Redirecting...' : 'Redirection...');

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: paidItems,
          lang: currentLang
        })
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Erreur lors de la création de la session');
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = origText;
      }
    } catch (err) {
      console.error(err);
      alert('Erreur serveur.');
      checkoutBtn.disabled = false;
      checkoutBtn.innerHTML = origText;
    }
  });
}

// --- Navigation scroll spy & menu control ---
function initPageControls() {
  const filterBtns = document.querySelectorAll('#categoryFilters .tag-btn');
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('navMenu');

  // Mobile menu close triggers
  const navLinks = document.querySelectorAll('.nav-link');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-category');
      currentCategory = category;
      populateProducts(category);
    });
  });

  // Cart open/close triggers
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
}

// --- DOM Initial Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguageSelector(); // sets lang & renders products & updates cart
  initPageControls();
  setupCheckoutSimulator();
});
