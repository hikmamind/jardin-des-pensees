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
  fr: { label: "FR" },
  en: { label: "EN" },
  ar: { label: "AR" }
};

// Force Arabic on first load of this version to override old localStorage values
if (!localStorage.getItem('lang_force_ar_v11')) {
  localStorage.setItem('lang', 'ar');
  localStorage.setItem('lang_force_ar_v11', 'true');
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
  populateNavbarDropdown();
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

// --- Dynamic Navbar Dropdown Builder ---
function populateNavbarDropdown() {
  const subMenu = document.getElementById('thinkersSubMenu');
  if (!subMenu) return;
  
  const thinkers = TIKTOK_DATA.content[currentLang].thinkers;
  const seeAllLabel = TIKTOK_DATA.ui[currentLang].seeAllThinkers || "Tous les philosophes →";
  
  let html = thinkers.map(t => {
    const basePath = window.location.pathname.includes('/articles/') || 
                     window.location.pathname.includes('/thinkers/') || 
                     window.location.pathname.includes('/shop/') ? '../thinkers/' : './thinkers/';
    return `<a href="${basePath}?thinker=${t.id}" class="sub-link" data-thinker="${t.id}">${t.name}</a>`;
  }).join('');
  
  const seeAllPath = window.location.pathname.includes('/articles/') || 
                     window.location.pathname.includes('/thinkers/') || 
                     window.location.pathname.includes('/shop/') ? '../thinkers/?thinker=all' : './thinkers/?thinker=all';
                     
  html += `<a href="${seeAllPath}" class="sub-link see-all" data-thinker="all">${seeAllLabel}</a>`;
  
  subMenu.innerHTML = html;
}

// --- Products Data Setup ---
function getProducts() {
  return [
    { id: 'prod_audio', type: 'digital', price: 0.00, icon: 'book-open', image: '../audio_sanctuary_hero.jpg', titleFr: 'Studio Audio & Citadelle Intérieure', titleEn: 'Audio Studio & Inner Citadel', titleAr: 'الاستوديو الصوتي والقلعة الداخلية', descFr: 'Mixeur d\'ambiances stoïciennes (Pluie, Feu, 432Hz) et lecteur de sagesses philosophiques. Gratuit.', descEn: 'Stoic ambient soundscape mixer (Rain, Fire, 432Hz) and philosophical wisdom narrator. Free.', descAr: 'خافق الأجواء الرواقية (أصوات الأمطار، النار، 432Hz) وقارئ الحكمة الصوتي للتركيز والتأمل. مجاني.' },
    { id: 'prod_calendar', type: 'digital', price: 0.00, icon: 'book-open', image: '../philosophical_calendar_hero.jpg', titleFr: 'Calendrier Philosophique (365 Jours)', titleEn: 'Philosophical Calendar (365 Days)', titleAr: 'التقويم الفلسفي اليومي (٣٦٥ يوماً)', descFr: '365 jours de sagesse stoïcienne et de pensées quotidiennes pour faire grandir votre esprit. Gratuit et imprimable.', descEn: '365 days of stoic wisdom and daily thoughts to elevate your mind. Free & printable.', descAr: '٣٦٥ يوماً من الحكمة والرواقية لتأمل وتطوير الذات يومياً. مجاني وقابل للطباعة PDF.' },
    { id: 'prod_7_habits', type: 'digital', price: 0.00, icon: 'book-open', image: '../habits_library_hero.jpg', titleFr: '7 Habitudes qui Détruisent votre Potentiel', titleEn: '7 Habits That Destroy Your Potential', titleAr: '٧ عادات تدمر إمكانياتك دون أن تشعر', descFr: 'Comment dépasser vos mauvaises habitudes selon la sagesse des plus grands penseurs. Article illustré gratuit.', descEn: 'How to overcome bad habits according to the wisdom of the greatest thinkers. Free illustrated article.', descAr: 'كيف تتجاوز عاداتك السيئة وفقاً لحكمة أعظم المفكرين. مقال مجاني مصوّر بجودة عالية.' },
    { id: 'prod_marc_aurele_pdf', type: 'digital', price: 0.00, icon: 'book-open', image: '../marc_aurelius_writing.jpg', titleFr: 'E-book Marc Aurèle (PDF)', titleEn: 'Marcus Aurelius E-book (PDF)', titleAr: 'كتاب ماركوس أوريليوس (PDF)', descFr: 'Le livre PDF complet de Marc Aurèle avec le guide stoïcien et les exercices pratiques.', descEn: 'The complete PDF book of Marcus Aurelius with the Stoic guide and practical exercises.', descAr: 'كتاب إلكتروني كامل بصيغة PDF يحتوي على دليل الرواقية الكامل والتمارين التطبيقية لماركوس أوريليوس.' },
    { id: 'prod_schopenhauer', type: 'digital', price: 0.00, icon: 'book-open', image: '../thinkers/images/schopenhauer.jpg', titleFr: '20 Citations de Schopenhauer', titleEn: '20 Quotes of Schopenhauer', titleAr: '20 اقتباساً لآرثر شوبنهاور', descFr: 'E-book contenant 20 citations phares avec explications détaillées, leçons et questions de réflexion.', descEn: 'Ebook containing 20 key quotes with detailed explanations, lessons, and reflection questions.', descAr: 'كتاب إلكتروني يحتوي على 20 اقتباساً مختارة مع الشرح والدروس وأسئلة التأمل.' },
    { id: 'prod_guide', type: 'digital', price: 0.00, icon: 'book-open', image: '../stoicisme-modern.jpg', titleFr: 'Guide Stoïcien Complet', titleEn: 'Complete Stoic Guide', titleAr: 'دليل الرواقية الكامل', descFr: 'Un guide de 50 pages sur l\'art de la citadelle intérieure et la maîtrise des peurs.', descEn: 'A 50-page guide on the art of the inner citadel and conquering fears.', descAr: 'دليل شامل من 50 صفحة عن فن بناء قلعة العقل والتغلب على المخاوف.' }
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

  const addLabel = TIKTOK_DATA.ui[currentLang].addToCart || "Ajouter au panier";

  container.innerHTML = products.map(prod => {
    const title = currentLang === 'ar' ? prod.titleAr : currentLang === 'en' ? prod.titleEn : prod.titleFr;
    const desc = currentLang === 'ar' ? prod.descAr : currentLang === 'en' ? prod.descEn : prod.descFr;
    const priceStr = prod.price === 0 ? (currentLang === 'ar' ? 'مجاني' : 'Gratuit') : `${prod.price.toFixed(2)} €`;
    const iconSvg = ICONS[prod.icon];
    const categoryLabel = TIKTOK_DATA.ui[currentLang][prod.type === 'digital' ? 'filterDigital' : 'filterPhysical'] || prod.type;

    const isDirectDownload = prod.price === 0 && prod.type === 'digital';
    const btnLabel = isDirectDownload 
      ? (currentLang === 'ar' ? 'تحميل' : currentLang === 'en' ? 'Download' : 'Télécharger') 
      : addLabel;
    const btnIcon = isDirectDownload ? ICONS['book-open'] : ICONS['plus'];
    const btnClass = isDirectDownload ? 'direct-download-btn' : 'add-to-cart-btn';

    // File mapping
    const fileMap = {
      'prod_audio': '../audio/index.html',
      'prod_calendar': '../calendar/index.html',
      'prod_7_habits': '../articles/7-habits/index.html',
      'prod_marc_aurele_pdf': 'e-book-marc-aurele.pdf',
      'prod_schopenhauer': '20-citations-schopenhauer.html',
      'prod_guide': 'stoicisme-force-calme.html'
    };
    const fileName = fileMap[prod.id] || 'readme.txt';

    return `
      <div class="product-card">
        <div class="product-icon-container">
          ${prod.image ? `<img src="${prod.image}" alt="${title}" class="product-image">` : iconSvg}
          <span class="product-badge ${prod.type}">${categoryLabel}</span>
        </div>
        <h3 class="product-title">${title}</h3>
        <p class="product-desc">${desc}</p>
        <div class="product-footer-row" style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <span class="product-price">${priceStr}</span>
          <button class="product-btn ${btnClass}" data-id="${prod.id}" data-file="${fileName}">
            ${btnIcon}
            <span>${btnLabel}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Bind clicks to newly created buttons
  const addBtns = container.querySelectorAll('.add-to-cart-btn');
  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-id');
      addToCart(prodId);
    });
  });

  const downloadBtns = container.querySelectorAll('.direct-download-btn');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
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
  const badge = document.getElementById('cartCountBadge');
  const listContainer = document.getElementById('cartItemsList');
  const totalAmountEl = document.getElementById('cartTotalAmount');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  
  const products = getProducts();
  
  // Calculate total count
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }

  if (totalCount === 0) {
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p data-i18n="cartEmpty">${TIKTOK_DATA.ui[currentLang].cartEmpty}</p>
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

  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (!prod) return;

    const title = currentLang === 'ar' ? prod.titleAr : currentLang === 'en' ? prod.titleEn : prod.titleFr;
    const priceSum = prod.price * item.qty;
    totalSum += priceSum;
    
    const displayPrice = prod.price === 0 ? (currentLang === 'ar' ? 'مجاني' : 'Gratuit') : `${prod.price.toFixed(2)} €`;

    itemsHtml += `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${title}</h4>
          <span class="cart-item-price">${displayPrice} x ${item.qty}</span>
        </div>
        <div class="cart-item-actions">
          <div class="qty-controls">
            <button class="qty-btn minus" data-id="${prod.id}">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn plus" data-id="${prod.id}">+</button>
          </div>
          <button class="cart-remove-btn" data-id="${prod.id}">
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

// --- Visa/Card payment Simulator ---
function setupCheckoutSimulator() {
  const modal = document.getElementById('checkoutModal');
  const closeBtn = document.getElementById('checkoutModalCloseBtn');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');
  const form = document.getElementById('checkoutForm');
  const feedback = document.getElementById('checkoutFeedback');
  const submitBtn = document.getElementById('checkoutSubmitBtn');

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

    // Check for digital items in cart before emptying it
    const digitalItems = cart.filter(item => {
      const prod = products.find(p => p.id === item.id);
      return prod && prod.type === 'digital';
    });

    const fileMap = {
      'prod_audio': { name: '../audio/index.html', labelFr: 'Ouvrir le Studio Audio', labelAr: 'دخول الاستوديو الصوتي', labelEn: 'Open Audio Studio' },
      'prod_calendar': { name: '../calendar/index.html', labelFr: 'Ouvrir le Calendrier Philosophique', labelAr: 'فتح التقويم الفلسفي', labelEn: 'Open Philosophical Calendar' },
      'prod_7_habits': { name: '../articles/7-habits/index.html', labelFr: 'Lire l\'article 7 Habitudes', labelAr: 'قراءة مقال ٧ عادات', labelEn: 'Read 7 Habits Article' },
      'prod_marc_aurele_pdf': { name: 'e-book-marc-aurele.pdf', labelFr: 'Télécharger E-book Marc Aurèle (PDF)', labelAr: 'تحميل كتاب ماركوس أوريليوس (PDF)', labelEn: 'Download Marcus Aurelius Ebook (PDF)' },
      'prod_schopenhauer': { name: '20-citations-schopenhauer.html', labelFr: 'Lire l\'E-book Schopenhauer', labelAr: 'قراءة كتاب شوبنهاور', labelEn: 'Read Schopenhauer Ebook' },
      'prod_guide': { name: 'stoicisme-force-calme.html', labelFr: 'Lire le Guide Stoïcien', labelAr: 'قراءة دليل الرواقية', labelEn: 'Read Stoic Guide' },
      'prod_notion': { name: 'readme.txt', labelFr: 'Instructions Notion', labelAr: 'تعليمات مفكرة Notion', labelEn: 'Notion Instructions' },
      'prod_wallpaper': { name: 'readme.txt', labelFr: 'Télécharger les Fonds d\'écran', labelAr: 'تحميل خلفيات الشاشة', labelEn: 'Download Wallpapers' }
    };

    // Trigger simulation transition
    submitBtn.disabled = true;
    const origText = submitBtn.innerHTML;
    submitBtn.textContent = currentLang === 'ar' ? 'جاري التحقق...' : 'Vérification en cours...';

    setTimeout(() => {
      // Success feedback animation
      let successMsg = TIKTOK_DATA.ui[currentLang].checkoutSuccess || "Commande validée avec succès ! 🌿✨";
      
      if (digitalItems.length > 0) {
        successMsg += `<div style="margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 15px; text-align: right;">`;
        successMsg += `<p style="font-weight: bold; margin-bottom: 12px; color: var(--accent-gold);">${currentLang === 'ar' ? 'روابط تحميل الكتب والمنتجات الرقمية:' : 'Liens de téléchargement :'}</p>`;
        digitalItems.forEach(item => {
          const map = fileMap[item.id];
          if (map) {
            const label = currentLang === 'ar' ? map.labelAr : currentLang === 'en' ? map.labelEn : map.labelFr;
            successMsg += `<a href="../files/${map.name}" download target="_blank" class="btn-primary-outline" style="display: block; margin-bottom: 8px; text-align: center; font-size: 0.9rem; padding: 8px 15px; text-decoration: none; border-radius: 6px;">${label}</a>`;
          }
        });
        successMsg += `</div>`;
      }
      
      feedback.innerHTML = successMsg;
      feedback.classList.add('success');
      feedback.style.display = 'block';
      
      // Empty local cart
      cart = [];
      saveCart();
      updateCartUI();

      if (digitalItems.length === 0) {
        setTimeout(() => {
          closeModal();
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }, 2500);
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'ar' ? 'إغلاق' : 'Fermer';
        
        // Remove standard form submit behavior and turn button into a simple close trigger
        const closeHandler = (evt) => {
          evt.preventDefault();
          closeModal();
          submitBtn.innerHTML = origText;
          submitBtn.removeEventListener('click', closeHandler);
        };
        submitBtn.addEventListener('click', closeHandler);
      }
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
