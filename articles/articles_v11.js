import TIKTOK_DATA from '../data_v11.js';

// --- Shared Icon templates ---
const ICONS = {
  'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
};

const LANG_METADATA = {
  ar: { label: "العربية", code: "ar" },
  fr: { label: "Français", code: "fr" }
};

function getSavedLanguage() {
  return localStorage.getItem('site_lang_v1') || localStorage.getItem('lang') || localStorage.getItem('preferredLang') || 'ar';
}

function saveLanguage(lang) {
  localStorage.setItem('site_lang_v1', lang);
  localStorage.setItem('lang', lang);
  localStorage.setItem('preferredLang', lang);
}

let currentLang = getSavedLanguage();
let currentCategory = 'all';
let currentSearch = '';

// Translations specific to this page
const ARTICLES_PAGE_TRANSLATIONS = {
  fr: {
    searchPlaceholder: "Rechercher un article...",
    noResults: "Aucun article ne correspond à votre recherche.",
    bio: "Stoïcisme, philosophie classique, psychologie et croissance personnelle."
  },
  ar: {
    searchPlaceholder: "ابحث عن مقال...",
    noResults: "لم يتم العثور على أي مقالات تطابق بحثك.",
    bio: "الرواقية، الفلسفة الكلاسيكية، علم النفس والتنمية الذاتية."
  }
};

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

  // Update navbar language label
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

  // Translate all static keys marked with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  // Localized placeholders & details
  const searchInput = document.getElementById('searchInput');
  if (searchInput && ARTICLES_PAGE_TRANSLATIONS[lang]) {
    searchInput.placeholder = ARTICLES_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  }
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl && ARTICLES_PAGE_TRANSLATIONS[lang]) {
    noResultsEl.textContent = ARTICLES_PAGE_TRANSLATIONS[lang].noResults;
  }

  // Re-populate dynamic parts
  populateNavbarDropdown();
  populateArticles(currentCategory, currentSearch);
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

// --- Navbar scroll opacity toggler ---
function initNavbarScroll() {
  const header = document.querySelector('.navbar-header');
  if (!header) return;
  
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Populate Articles with Filter & Search ---
function populateArticles(category = 'all', keyword = '') {
  const container = document.getElementById('articlesList');
  const noResultsEl = document.getElementById('noResults');
  let articles = TIKTOK_DATA.content[currentLang].articles;
  const readLabel = TIKTOK_DATA.ui[currentLang].readArticle || (currentLang === 'ar' ? "اقرأ المقال" : "Lire l'article");
  const featuredLabel = TIKTOK_DATA.ui[currentLang].featured || (currentLang === 'ar' ? "مميز" : "En vedette");

  if (!container || !articles) return;

  // 1. Filter by category
  if (category !== 'all') {
    articles = articles.filter(art => art.category === category);
  }

  // 2. Filter by search keyword
  if (keyword.trim() !== '') {
    const term = keyword.toLowerCase().trim();
    articles = articles.filter(art => 
      art.title.toLowerCase().includes(term) || 
      art.desc.toLowerCase().includes(term)
    );
  }

  // 3. Handle empty state
  if (articles.length === 0) {
    container.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    container.style.display = 'grid';
    if (noResultsEl) noResultsEl.style.display = 'none';

    container.innerHTML = articles.map((art) => {
      const targetUrl = art.file ? art.file : `../files/${art.file || 'stop-overthinking.html'}`;
      const badgeHtml = art.featured ? `<span class="card-featured-badge">${featuredLabel}</span>` : "";
      const categoryLabel = TIKTOK_DATA.ui[currentLang][art.category] || art.category;
      
      const imageHtml = art.image ? `
        <img src="../${art.image}" alt="${art.title}" class="article-image">
      ` : `
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.02)">
          <svg viewBox="0 0 24 24" width="32" height="32" stroke="var(--accent-gold)" fill="none" stroke-width="1.5" style="opacity: 0.3;">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
      `;
      
      return `
        <div class="article-card" style="cursor: pointer;" data-target="${targetUrl}">
          <a href="${targetUrl}" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; height:100%;">
            <div class="article-image-container">
              ${badgeHtml}
              ${imageHtml}
            </div>
            <div class="card-meta-row">
              <span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">${categoryLabel}</span>
              <span class="card-meta-dot">•</span>
              <span style="display: inline-flex; align-items: center; gap: 4px;">
                <svg class="card-meta-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${art.readTime}
              </span>
            </div>
            <h3 class="article-title" style="margin-top: 10px;">${art.title}</h3>
            <p class="article-desc">${art.desc}</p>
            <div class="article-actions" style="margin-top: auto; padding-top: 15px; display: flex; gap: 15px; align-items: center;">
              <span class="card-action-link" style="margin-top: 0; color: var(--accent-gold); font-weight:700; display:inline-flex; align-items:center; gap:6px;">
                <span>${readLabel}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="${currentLang === 'ar' ? '19' : '5'}" y1="12" x2="${currentLang === 'ar' ? '5' : '19'}" y2="12"></line>
                  <polyline points="${currentLang === 'ar' ? '12 19 5 12 12 5' : '12 5 19 12 12 19'}"></polyline>
                </svg>
              </span>
            </div>
          </a>
        </div>
      `;
    }).join('');

    setupArticleModal(articles);
  }
}

// --- Active States and Tag synchronizations ---
function updateActiveTag(category) {
  const tags = document.querySelectorAll('.tag-btn');
  tags.forEach(tag => {
    tag.classList.remove('active');
    if (tag.getAttribute('data-category') === category) {
      tag.classList.add('active');
    }
  });
}

function handleCategoryChange(category) {
  currentCategory = category;
  
  // Update URL search parameters without page reload
  const url = new URL(window.location.href);
  url.searchParams.set('category', category);
  window.history.pushState({}, '', url);

  updateActiveTag(category);
  populateArticles(category, currentSearch);
}

// --- Page & Dropdown Listeners Setup ---
function initPageLogic() {
  const searchInput = document.getElementById('searchInput');
  const tags = document.querySelectorAll('.tag-btn');
  const subLinks = document.querySelectorAll('.sub-link');
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
      if (link.id !== 'articlesNavLink') {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
        });
      }
    });
  }

  // 1. Tag buttons click listeners
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const category = tag.getAttribute('data-category');
      handleCategoryChange(category);
    });
  });

  // 2. Navbar sublinks click listeners (prevents reload when clicking sub-menu items on this page!)
  subLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');
      handleCategoryChange(category);
      
      // Close dropdown & mobile menu
      if (hamburger && menu) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  });

  // 3. Search keyup input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      populateArticles(currentCategory, currentSearch);
    });
  }

  // 4. Initial category load from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  currentCategory = initialCategory;
  updateActiveTag(initialCategory);

  // 5. Auto-open specific article from URL param (?article=filename.html)
  const articleParam = urlParams.get('article');
  if (articleParam) {
    setTimeout(() => {
      const allArticles = TIKTOK_DATA.content[currentLang].articles;
      const matchIdx = allArticles.findIndex(a => a.file === articleParam);
      if (matchIdx !== -1) {
        const cards = document.querySelectorAll('.article-card');
        if (cards[matchIdx]) {
          const readBtn = cards[matchIdx].querySelector('.card-action-link');
          if (readBtn) readBtn.click();
        }
      }
    }, 300);
  }
}

// --- DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  initLanguageSelector(); // Sets language & calls initial populateArticles
  initNavbarScroll();
  initPageLogic();
});

// --- Article Modal Logic ---
function setupArticleModal(articles) {
  const cards = document.querySelectorAll('.article-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-target');
      if (target) {
        window.location.href = target;
      }
    });
  });
}

function setupMobileNavOverlay() {
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('navMenu');
  let overlay = document.getElementById('navOverlay');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'navOverlay';
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  if (hamburger && menu) {
    function closeMobileMenu() {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    hamburger.onclick = function(e) {
      e.stopPropagation();
      const isActive = menu.classList.contains('active');
      if (isActive) {
        closeMobileMenu();
      } else {
        hamburger.classList.add('active');
        menu.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    if (overlay) {
      overlay.onclick = closeMobileMenu;
    }

    const allMenuLinks = menu.querySelectorAll('a');
    allMenuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
}
