/**
 * HIKMA & NOUR — Product Detail Page JS
 * Reads slug from URL, renders product info in AR / FR / EN
 * Route: /shop/product/?slug=SLUG
 * Clean URL fallback: /shop/product/SLUG/
 */

import TIKTOK_DATA from '../../data_v11.js';
import { getProductBySlug, getRelatedProducts, SHOP_PRODUCTS } from '../products_data.js';

// ─── Language ────────────────────────────────────────────────────────────────
const LANG_METADATA = {
  ar: { label: 'العربية', code: 'ar' },
  fr: { label: 'Français', code: 'fr' },
  en: { label: 'English', code: 'en' }
};

function getSavedLanguage() {
  const saved = localStorage.getItem('site_lang_v1')
    || localStorage.getItem('lang')
    || localStorage.getItem('preferredLang');
  return (saved && ['ar', 'fr', 'en'].includes(saved)) ? saved : 'ar';
}
function saveLanguage(lang) {
  ['site_lang_v1', 'lang', 'preferredLang'].forEach(k => localStorage.setItem(k, lang));
}

let currentLang = getSavedLanguage();

// ─── Cart ────────────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('stoic_shop_cart')) || [];

function saveCart() {
  localStorage.setItem('stoic_shop_cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const prod = SHOP_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
  showCartConfirmation();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadgeCount');
  if (!badge) return;
  const total = cart.reduce((acc, c) => acc + (c.qty || 1), 0);
  if (total > 0) {
    badge.style.display = 'flex';
    badge.textContent = total;
  } else {
    badge.style.display = 'none';
  }
}

function showCartConfirmation() {
  const confirm = document.getElementById('cartAddedConfirm');
  if (!confirm) return;
  confirm.style.display = 'flex';
  setTimeout(() => { confirm.style.display = 'none'; }, 3500);
}

function renderCartItems() {
  const list = document.getElementById('cartItemsList');
  if (!list) return;
  const ui = TIKTOK_DATA.ui[currentLang] || TIKTOK_DATA.ui.ar;
  if (cart.length === 0) {
    list.innerHTML = `<p style="padding:24px;text-align:center;color:var(--text-secondary);font-size:0.9rem;">${ui.cartEmpty || 'سلة المشتريات فارغة.'}</p>`;
    const total = document.getElementById('cartTotalVal');
    if (total) total.textContent = '0.00 €';
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let totalPrice = 0;
  list.innerHTML = cart.map(item => {
    const prod = SHOP_PRODUCTS.find(p => p.id === item.id);
    if (!prod) return '';
    const title = prod.title[currentLang] || prod.title.ar;
    const price = prod.price === 0 ? (ui.freeLabel || 'Gratuit') : `${prod.price.toFixed(2)} €`;
    if (prod.price > 0) totalPrice += prod.price * (item.qty || 1);
    return `
      <div class="cart-item" style="display:flex;align-items:center;gap:14px;padding:16px;border-bottom:1px solid var(--card-border);">
        <img src="${prod.image}" alt="${title}" style="width:52px;height:52px;object-fit:cover;border-radius:10px;flex-shrink:0;">
        <div style="flex:1;min-width:0;">
          <p style="margin:0;font-size:0.9rem;font-weight:700;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${title}</p>
          <p style="margin:4px 0 0;font-size:0.82rem;color:var(--accent-gold);">${price}</p>
        </div>
        <button onclick="window._removeFromCart('${prod.id}')" style="background:transparent;border:none;color:var(--text-secondary);cursor:pointer;font-size:1.2rem;padding:4px;">&times;</button>
      </div>
    `;
  }).join('');

  const total = document.getElementById('cartTotalVal');
  if (total) total.textContent = totalPrice === 0 ? (ui.freeLabel || 'Gratuit') : `${totalPrice.toFixed(2)} €`;
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

window._removeFromCart = function(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartBadge();
  renderCartItems();
};

// ─── Slug detection ───────────────────────────────────────────────────────────
function getSlugFromURL() {
  // Try URL params first: ?slug=XXX
  const params = new URLSearchParams(window.location.search);
  if (params.get('slug')) return params.get('slug');

  // Try hash: #alchemist
  if (window.location.hash) return window.location.hash.replace('#', '');

  // Try pathname: /shop/product/alchemist/
  const parts = window.location.pathname.split('/').filter(Boolean);
  // parts = ['shop', 'product', 'alchemist']
  const idx = parts.indexOf('product');
  if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];

  return null;
}

// ─── Language Engine ──────────────────────────────────────────────────────────
function setLanguage(lang, product) {
  currentLang = lang;
  saveLanguage(lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = LANG_METADATA[lang]?.label || 'العربية';

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Translate static data-i18n keys
  const ui = TIKTOK_DATA.ui[lang] || TIKTOK_DATA.ui.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (ui[key]) {
      if (key === 'footerBrandDesc') el.innerHTML = ui[key];
      else el.textContent = ui[key];
    }
  });

  // Re-render product content if product is loaded
  if (product) renderProductContent(product);
  renderCartItems();
  updateCartBadge();

  // Update SEO dynamically
  if (product) updateSEO(product, lang);
}

// ─── SEO ──────────────────────────────────────────────────────────────────────
function updateSEO(product, lang) {
  const title = product.seoTitle?.[lang] || product.title[lang] || product.title.ar;
  const desc = product.seoDesc?.[lang] || product.shortDesc[lang] || product.shortDesc.ar;
  document.title = title;
  const metaDesc = document.getElementById('pageMetaDesc');
  if (metaDesc) metaDesc.content = desc;
}

// ─── Render Product ───────────────────────────────────────────────────────────
function renderProductContent(product) {
  const wrap = document.getElementById('productPageWrap');
  if (!wrap) return;

  const ui = TIKTOK_DATA.ui[currentLang] || TIKTOK_DATA.ui.ar;
  const lang = currentLang;

  const title = product.title[lang] || product.title.ar;
  const shortDesc = product.shortDesc[lang] || product.shortDesc.ar;
  const longDesc = product.longDesc[lang] || product.longDesc.ar;
  const features = product.features[lang] || product.features.ar;
  const imgSrc = product.image;
  const imgAlt = product.imageAlt?.[lang] || title;
  const priceStr = product.price === 0
    ? (ui.freeLabel || (lang === 'ar' ? 'مجاني' : lang === 'fr' ? 'Gratuit' : 'Free'))
    : `${product.price.toFixed(2)} €`;

  // i18n labels
  const T = {
    home: lang === 'ar' ? 'الرئيسية' : lang === 'fr' ? 'Accueil' : 'Home',
    shop: lang === 'ar' ? 'المتجر' : lang === 'fr' ? 'Boutique' : 'Shop',
    productDetails: lang === 'ar' ? 'تفاصيل المنتج' : lang === 'fr' ? 'Détails du produit' : 'Product Details',
    addToCart: lang === 'ar' ? 'أضف إلى السلة' : lang === 'fr' ? 'Ajouter au panier' : 'Add to cart',
    backToShop: lang === 'ar' ? 'العودة إلى المتجر' : lang === 'fr' ? 'Retour à la boutique' : 'Back to shop',
    about: lang === 'ar' ? 'عن هذا المنتج' : lang === 'fr' ? 'À propos du produit' : 'About this product',
    whatYouGet: lang === 'ar' ? 'ماذا ستحصل عليه' : lang === 'fr' ? 'Ce que vous allez recevoir' : 'What you will receive',
    details: lang === 'ar' ? 'معلومات المنتج' : lang === 'fr' ? 'Informations' : 'Information',
    related: lang === 'ar' ? 'منتجات مشابهة' : lang === 'fr' ? 'Produits similaires' : 'Related products',
    format: lang === 'ar' ? 'الصيغة' : lang === 'fr' ? 'Format' : 'Format',
    pages: lang === 'ar' ? 'الصفحات' : lang === 'fr' ? 'Pages' : 'Pages',
    language: lang === 'ar' ? 'اللغة' : lang === 'fr' ? 'Langue' : 'Language',
    category: lang === 'ar' ? 'الفئة' : lang === 'fr' ? 'Catégorie' : 'Category',
    digital: lang === 'ar' ? 'منتج رقمي' : lang === 'fr' ? 'Produit numérique' : 'Digital product',
    physical: lang === 'ar' ? 'منتج مادي' : lang === 'fr' ? 'Produit physique' : 'Physical product',
    free: lang === 'ar' ? 'مجاني' : lang === 'fr' ? 'Gratuit' : 'Free',
    addedToCart: lang === 'ar' ? '✓ تمت الإضافة إلى السلة' : lang === 'fr' ? '✓ Ajouté au panier' : '✓ Added to cart',
    viewProduct: lang === 'ar' ? 'عرض المنتج' : lang === 'fr' ? 'Voir le produit' : 'View product',
  };

  // Related products
  const related = getRelatedProducts(product);
  const relatedHTML = related.length ? `
    <section aria-labelledby="relatedHeading" style="margin-top:50px;">
      <h2 id="relatedHeading" class="product-section-heading" style="font-size:1.2rem;margin-bottom:24px;">
        <span>🔗</span> ${T.related}
      </h2>
      <div class="related-products-grid">
        ${related.map(r => {
          const rTitle = r.title[lang] || r.title.ar;
          const rPrice = r.price === 0 ? T.free : `${r.price.toFixed(2)} €`;
          return `
            <a href="?slug=${r.slug}" class="related-product-card" aria-label="${rTitle}">
              <img class="related-card-img" src="${r.image}" alt="${r.imageAlt?.[lang] || rTitle}" loading="lazy">
              <div class="related-card-body">
                <h3 class="related-card-title">${rTitle}</h3>
                <p class="related-card-price">${rPrice}</p>
              </div>
            </a>
          `;
        }).join('')}
      </div>
    </section>
  ` : '';

  // Pages meta
  const pagesLine = product.pages ? `
    <tr>
      <td>${T.pages}</td>
      <td><strong>${product.pages}</strong></td>
    </tr>
  ` : '';

  const categoryTypeLabel = product.type === 'digital' ? T.digital : T.physical;
  const langLabel = product.language?.[lang] || product.language?.ar || '—';

  wrap.innerHTML = `
    <!-- Breadcrumb -->
    <nav class="product-breadcrumb" aria-label="Breadcrumb">
      <a href="../../">${T.home}</a>
      <span class="sep">/</span>
      <a href="../">${T.shop}</a>
      <span class="sep">/</span>
      <span class="current">${title}</span>
    </nav>

    <!-- Main grid -->
    <div class="product-main-grid">

      <!-- Left / Image -->
      <div class="product-image-side">
        <div class="product-cover-frame">
          <img src="${imgSrc}" alt="${imgAlt}" loading="eager">
        </div>
        <div class="product-type-badge-wrap">
          <span class="product-type-badge ${product.type}">${categoryTypeLabel}</span>
          ${product.price === 0 ? `<span class="product-type-badge digital" style="background:rgba(52,211,153,0.08);border-color:rgba(52,211,153,0.4);color:#34D399;">${T.free}</span>` : ''}
        </div>
      </div>

      <!-- Right / Info -->
      <div class="product-info-side">
        <h1 class="product-page-title">${title}</h1>
        <p class="product-page-short-desc">${shortDesc}</p>

        <div class="product-price-tag">
          ${product.price === 0
            ? `<span class="free-badge">${T.free}</span>`
            : `${product.price.toFixed(2)} <small style="font-size:1rem;">€</small>`
          }
        </div>

        <!-- Meta pills -->
        <div class="product-meta-pills">
          <div class="meta-pill">
            <span>📄</span>
            <span>${T.format}: <strong>${product.format || 'PDF'}</strong></span>
          </div>
          ${product.pages ? `<div class="meta-pill"><span>📖</span><span>${T.pages}: <strong>${product.pages}</strong></span></div>` : ''}
          <div class="meta-pill">
            <span>🌐</span>
            <span>${T.language}: <strong>${langLabel}</strong></span>
          </div>
        </div>

        <!-- CTA -->
        <div class="product-cta-area">
          <button class="btn-add-to-cart-page" id="addToCartBtn" aria-label="${T.addToCart}">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            ${T.addToCart}
          </button>
          <div class="cart-added-confirm" id="cartAddedConfirm" role="status">${T.addedToCart}</div>
          <a href="../" class="btn-back-to-shop">
            ← ${T.backToShop}
          </a>
        </div>
      </div>
    </div>

    <!-- About section -->
    <div class="product-section-card">
      <h2 class="product-section-heading">
        <span>📜</span> ${T.about}
      </h2>
      <p class="product-long-desc">${longDesc}</p>
    </div>

    <!-- Features -->
    <div class="product-section-card">
      <h2 class="product-section-heading">
        <span>✨</span> ${T.whatYouGet}
      </h2>
      <ul class="product-features-list">
        ${features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <!-- Details table -->
    <div class="product-section-card">
      <h2 class="product-section-heading">
        <span>📋</span> ${T.details}
      </h2>
      <table class="product-details-table">
        <tbody>
          <tr>
            <td>${T.format}</td>
            <td><strong>${product.format || 'PDF'}</strong></td>
          </tr>
          ${pagesLine}
          <tr>
            <td>${T.language}</td>
            <td><strong>${langLabel}</strong></td>
          </tr>
          <tr>
            <td>${T.category}</td>
            <td><strong>${categoryTypeLabel}</strong></td>
          </tr>
          <tr>
            <td>${lang === 'ar' ? 'السعر' : lang === 'fr' ? 'Prix' : 'Price'}</td>
            <td><strong>${priceStr}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Related Products -->
    ${relatedHTML}
  `;

  // Bind Add to Cart button
  const addBtn = document.getElementById('addToCartBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => addToCart(product.id));
  }
}

// ─── 404 Page ─────────────────────────────────────────────────────────────────
function renderNotFound() {
  const wrap = document.getElementById('productPageWrap');
  if (!wrap) return;
  const lang = currentLang;

  const T = {
    title: lang === 'ar' ? 'المنتج غير موجود' : lang === 'fr' ? 'Produit introuvable' : 'Product not found',
    desc: lang === 'ar' ? 'لم نجد المنتج الذي تبحث عنه. يرجى العودة إلى المتجر.' : lang === 'fr' ? 'Nous n\'avons pas trouvé le produit que vous recherchez. Revenez à la boutique.' : 'We could not find the product you are looking for. Return to the shop.',
    backToShop: lang === 'ar' ? 'العودة إلى المتجر' : lang === 'fr' ? 'Retour à la boutique' : 'Back to shop',
    home: lang === 'ar' ? 'الرئيسية' : lang === 'fr' ? 'Accueil' : 'Home',
    shop: lang === 'ar' ? 'المتجر' : lang === 'fr' ? 'Boutique' : 'Shop',
  };

  document.title = T.title + ' | Hikma & Nour';
  wrap.innerHTML = `
    <nav class="product-breadcrumb" aria-label="Breadcrumb">
      <a href="../../">${T.home}</a>
      <span class="sep">/</span>
      <a href="../">${T.shop}</a>
      <span class="sep">/</span>
      <span class="current">404</span>
    </nav>
    <div class="product-not-found">
      <div style="font-size:4rem;margin-bottom:20px;">📦</div>
      <h1>${T.title}</h1>
      <p>${T.desc}</p>
      <a href="../" class="btn-add-to-cart-page" style="max-width:300px;display:inline-flex;margin:0 auto;text-decoration:none;">
        ← ${T.backToShop}
      </a>
    </div>
  `;
}

// ─── Navbar Hamburger ─────────────────────────────────────────────────────────
function initNavbar() {
  const hamburger = document.getElementById('navHamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
}

// ─── Theme ────────────────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcons(saved);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcons(next);
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

// ─── Cart Drawer ──────────────────────────────────────────────────────────────
function initCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  const openBtn = document.getElementById('cartToggleBtn');
  const closeBtn = document.getElementById('cartCloseBtn');

  function openCart() {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
  }
  function closeCart() {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }
  openBtn?.addEventListener('click', openCart);
  closeBtn?.addEventListener('click', closeCart);
  overlay?.addEventListener('click', closeCart);
}

// ─── Language Switcher ────────────────────────────────────────────────────────
function initLangSwitcher(product) {
  const langBtn = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  langBtn?.addEventListener('click', e => {
    e.stopPropagation();
    dropdown?.classList.toggle('active');
  });
  document.addEventListener('click', () => dropdown?.classList.remove('active'));

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      setLanguage(lang, product);
    });
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initCartDrawer();

  const slug = getSlugFromURL();
  const product = slug ? getProductBySlug(slug) : null;

  if (product) {
    setLanguage(currentLang, product);
    updateSEO(product, currentLang);
  } else {
    setLanguage(currentLang, null);
    renderNotFound();
  }

  initLangSwitcher(product);
  updateCartBadge();
  renderCartItems();
});
