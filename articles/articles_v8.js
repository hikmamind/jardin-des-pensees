import TIKTOK_DATA from '../data_v8.js';

// --- Shared Icon templates ---
const ICONS = {
  'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
};

const LANG_METADATA = {
  fr: { label: "FR" },
  en: { label: "EN" },
  ar: { label: "AR" }
};

// Force Arabic on first load of this version to override old localStorage values
if (!localStorage.getItem('lang_force_ar_v8')) {
  localStorage.setItem('lang', 'ar');
  localStorage.setItem('lang_force_ar_v8', 'true');
}

let currentLang = localStorage.getItem('lang') || 'ar';
let currentCategory = 'all';
let currentSearch = '';

// Translations specific to this page
const ARTICLES_PAGE_TRANSLATIONS = {
  fr: {
    searchPlaceholder: "Rechercher un article...",
    noResults: "Aucun article ne correspond à votre recherche.",
    bio: "Stoïcisme, philosophie classique, psychologie et croissance personnelle."
  },
  en: {
    searchPlaceholder: "Search articles...",
    noResults: "No articles match your search.",
    bio: "Stoicism, classical philosophy, psychology, and personal growth."
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
  localStorage.setItem('lang', lang);
  
  // Set document direction & lang
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update navbar language label
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = LANG_METADATA[lang].label;

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
  if (searchInput) searchInput.placeholder = ARTICLES_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl) noResultsEl.textContent = ARTICLES_PAGE_TRANSLATIONS[lang].noResults;

  // Re-populate dynamic parts
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
  const readLabel = TIKTOK_DATA.ui[currentLang].readArticle || "Lire l'article";
  const featuredLabel = TIKTOK_DATA.ui[currentLang].featured || "En vedette";

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

    const downloadLabel = TIKTOK_DATA.ui[currentLang].downloadWord || "Word";
    container.innerHTML = articles.map((art, index) => {
      const filePath = `../files/${art.file}`;
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
        <div class="article-card" style="cursor: pointer;">
          <div class="article-image-container" data-index="${index}">
            ${badgeHtml}
            ${imageHtml}
          </div>
          <div class="card-meta-row" data-index="${index}">
            <span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">${categoryLabel}</span>
            <span class="card-meta-dot">•</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;">
              <svg class="card-meta-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${art.readTime}
            </span>
          </div>
          <h3 class="article-title" data-index="${index}">${art.title}</h3>
          <p class="article-desc" data-index="${index}">${art.desc}</p>
          <div class="article-actions" style="margin-top: auto; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
            <a class="card-action-link" data-index="${index}" style="margin-top: 0;">
              <span>${readLabel}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="${filePath}" download class="article-download-link" style="color: var(--accent-gold); text-decoration: none; font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 5px; transition: all var(--transition-speed); cursor: pointer; margin-left: auto;">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>${downloadLabel}</span>
            </a>
          </div>
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
}

// --- DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguageSelector(); // Sets language & calls initial populateArticles
  initNavbarScroll();
  initPageLogic();
});

// --- Article Modal Logic ---
function setupArticleModal(articles) {
  const modal = document.getElementById('articleModal');
  const closeBtn = document.getElementById('articleModalCloseBtn');
  const metaEl = document.getElementById('modalArticleMeta');
  const titleEl = document.getElementById('modalArticleTitle');
  const bodyEl = document.getElementById('modalArticleBody');
  const downloadBtn = document.getElementById('modalDownloadBtn');
  
  const modalImgContainer = document.getElementById('modalArticleImageContainer');
  const modalImg = document.getElementById('modalArticleImage');
  
  const cards = document.querySelectorAll('.article-card');
  
  if (!modal || !closeBtn || !metaEl || !titleEl || !bodyEl || !downloadBtn) return;
  
  function openArticleModal(index) {
    const art = articles[index];
    if (art) {
      metaEl.textContent = art.readTime;
      titleEl.textContent = art.title;
      
      // Setup image in modal if present
      if (art.image && modalImg && modalImgContainer) {
        modalImg.src = `../${art.image}`;
        modalImgContainer.style.display = 'block';
      } else if (modalImgContainer) {
        modalImgContainer.style.display = 'none';
      }
      
      // Generate paragraphs
      if (art.body && Array.isArray(art.body)) {
        bodyEl.innerHTML = art.body.map(para => `<p style="margin-bottom: 15px;">${para}</p>`).join('');
      } else {
        bodyEl.innerHTML = `<p>${art.desc}</p>`;
      }
      
      // Setup download button link
      downloadBtn.href = `../files/${art.file}`;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  
  cards.forEach(card => {
    // clicking anywhere that is data-index targets the modal
    const clickables = card.querySelectorAll('[data-index]');
    clickables.forEach(c => {
      c.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const index = parseInt(c.getAttribute('data-index'), 10);
        openArticleModal(index);
      });
    });
    // Fallback: clicking card body anywhere opens modal
    card.addEventListener('click', (e) => {
      if (e.target.closest('.article-download-link')) return;
      const readBtn = card.querySelector('.card-action-link');
      if (readBtn) {
        const index = parseInt(readBtn.getAttribute('data-index'), 10);
        openArticleModal(index);
      }
    });
  });
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  closeBtn.addEventListener('click', closeModal);
  
  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}
