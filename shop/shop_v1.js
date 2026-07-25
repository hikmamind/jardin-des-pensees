import TIKTOK_DATA from '../data_v10.js';

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
  fr: { label: "FR" },
  en: { label: "EN" },
  ar: { label: "AR" }
};

// Force Arabic on first load of this version
if (!localStorage.getItem('lang_force_ar_v4')) {
  localStorage.setItem('lang', 'ar');
  localStorage.setItem('lang_force_ar_v4', 'true');
}

let currentLang = localStorage.getItem('lang') || 'ar';
let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('stoic_shop_cart')) || [];

// --- Language Engine ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Set document direction & lang
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update active language label in navbar
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = LANG_METADATA[lang].label;

  // Translate all elements with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  // Re-populate elements
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

  setLanguage(currentLang);
}

// --- Theme Switcher ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

// --- Populate Products Catalog ---
function populateProducts(category = 'all') {
  const container = document.getElementById('productsList');
  let products = TIKTOK_DATA.content[currentLang].products;
  const addLabel = TIKTOK_DATA.ui[currentLang].addToCart || "Ajouter";

  if (!container || !products) return;

  if (category !== 'all') {
    products = products.filter(p => p.category === category);
  }

  container.innerHTML = products.map((prod) => {
    const iconSvg = ICONS[prod.icon] || ICONS['book-open'];
    const badgeText = prod.category === 'digital' ? TIKTOK_DATA.ui[currentLang].filterDigital : TIKTOK_DATA.ui[currentLang].filterPhysical;
    const cleanBadgeText = badgeText.replace("Produits ", "").replace("المنتجات ", "").replace("Objects ", "").replace("Products ", "");
    
    return `
      <div class="product-card">
        <span class="product-badge ${prod.category}">${cleanBadgeText}</span>
        <div class="product-icon-container">
          ${iconSvg}
        </div>
        <h3 class="product-title">${prod.title}</h3>
        <span class="product-price">${prod.formattedPrice}</span>
        <p class="product-desc">${prod.desc}</p>
        <button class="product-btn" data-id="${prod.id}">
          ${ICONS['shopping-cart']}
          <span>${addLabel}</span>
        </button>
      </div>
    `;
  }).join('');

  // Setup click listeners for add buttons
  const addBtns = container.querySelectorAll('.product-btn');
  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });
}

// --- Shopping Cart Management Logic ---
function addToCart(productId) {
  const productList = TIKTOK_DATA.content[currentLang].products;
  const product = productList.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      formattedPrice: product.formattedPrice,
      qty: 1
    });
  }

  saveCart();
  openCartDrawer();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function saveCart() {
  localStorage.setItem('stoic_shop_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cartBadgeCount');
  const container = document.getElementById('cartItemsList');
  const totalValEl = document.getElementById('cartTotalVal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (!container || !badge || !totalValEl || !checkoutBtn) return;

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Update badge count
  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.style.display = 'flex';
    checkoutBtn.disabled = false;
  } else {
    badge.style.display = 'none';
    checkoutBtn.disabled = true;
  }

  // Populate items
  if (cart.length === 0) {
    const emptyMsg = TIKTOK_DATA.ui[currentLang].cartEmpty || "Votre panier est vide.";
    container.innerHTML = `<p class="cart-empty-message">${emptyMsg}</p>`;
  } else {
    container.innerHTML = cart.map(item => {
      // Find translated title from active lang data source
      const productList = TIKTOK_DATA.content[currentLang].products;
      const originalProd = productList.find(p => p.id === item.id);
      const title = originalProd ? originalProd.title : item.title;
      
      const currencySymbol = currentLang === 'ar' ? ' $' : ' €';
      const formattedPrice = (item.price * item.qty).toFixed(2) + currencySymbol;

      return `
        <div class="cart-item">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${title}</h4>
            <span class="cart-item-price">${formattedPrice}</span>
            <div class="cart-item-controls">
              <button class="qty-btn" data-id="${item.id}" data-action="minus">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" data-id="${item.id}" data-action="plus">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-id="${item.id}" aria-label="Supprimer l'article">
            ${ICONS['trash']}
          </button>
        </div>
      `;
    }).join('');

    // Setup action listeners inside cart
    container.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const action = btn.getAttribute('data-action');
        updateCartQty(id, action === 'plus' ? 1 : -1);
      });
    });

    container.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        removeFromCart(id);
      });
    });
  }

  // Update total value text
  const totalCurrencySymbol = currentLang === 'ar' ? ' $' : ' €';
  totalValEl.textContent = totalPrice.toFixed(2) + totalCurrencySymbol;
}

// --- Cart Drawer Interface togglers ---
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

// --- Checkout Simulation Modal Engine ---
function setupCheckoutSimulator() {
  const modal = document.getElementById('checkoutModal');
  const closeBtn = document.getElementById('checkoutModalCloseBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const form = document.getElementById('checkoutForm');
  const feedback = document.getElementById('checkoutFeedback');
  const submitBtn = document.getElementById('checkoutSubmitBtn');

  // Credit card preview displays
  const cardNumDisplay = document.getElementById('cardNumDisplay');
  const cardHolderDisplay = document.getElementById('cardHolderDisplay');
  const cardHolderInput = document.getElementById('cardHolderInput');
  const cardNumberInput = document.getElementById('cardNumberInput');

  if (!modal || !closeBtn || !checkoutBtn || !form || !feedback || !submitBtn) return;

  // Open checkout
  checkoutBtn.addEventListener('click', () => {
    closeCartDrawer();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset displays
    cardNumDisplay.textContent = '•••• •••• •••• ••••';
    cardHolderDisplay.textContent = currentLang === 'ar' ? 'اسم حامل البطاقة' : 'NOM DU TITULAIRE';
    feedback.style.display = 'none';
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    form.reset();
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Card preview live sync
  if (cardHolderInput) {
    cardHolderInput.addEventListener('input', (e) => {
      const val = e.target.value.trim().toUpperCase();
      cardHolderDisplay.textContent = val || (currentLang === 'ar' ? 'اسم حامل البطاقة' : 'NOM DU TITULAIRE');
    });
  }

  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let matches = val.match(/\d{4,16}/g);
      let match = (matches && matches[0]) || '';
      let parts = [];

      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }

      if (parts.length > 0) {
        cardNumberInput.value = parts.join(' ');
        cardNumDisplay.textContent = parts.join(' ');
      } else {
        cardNumberInput.value = val;
        cardNumDisplay.textContent = val || '•••• •••• •••• ••••';
      }
    });
  }

  // Handle Mock Payment Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    feedback.className = 'form-feedback';
    feedback.style.display = 'none';

    // Mock validation
    const name = cardHolderInput.value.trim();
    const cardNum = cardNumberInput.value.replace(/\s+/g, '');

    if (!name || cardNum.length < 16) {
      feedback.textContent = currentLang === 'ar' ? 'يرجى التحقق من صحة البيانات المدخلة.' : 'Veuillez vérifier les informations de paiement.';
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }

    // Trigger simulation transition
    submitBtn.disabled = true;
    const origText = submitBtn.innerHTML;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري التحقق...' : 'Vérification en cours...';

    setTimeout(() => {
      // Success feedback animation
      feedback.textContent = TIKTOK_DATA.ui[currentLang].checkoutSuccess || "Commande validée avec succès ! 🌿✨";
      feedback.classList.add('success');
      feedback.style.display = 'block';
      
      // Empty local cart
      cart = [];
      saveCart();

      setTimeout(() => {
        closeModal();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }, 2500);
    }, 2000);
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
