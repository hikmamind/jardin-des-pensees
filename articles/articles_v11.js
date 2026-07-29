import TIKTOK_DATA from '../data_v11.js';

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
if (!localStorage.getItem('lang_force_ar_v11')) {
  localStorage.setItem('lang', 'ar');
  localStorage.setItem('lang_force_ar_v11', 'true');
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
            <a href="${filePath}" download target="_blank" class="article-download-link" style="color: var(--accent-gold); text-decoration: none; font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 5px; transition: all var(--transition-speed); cursor: pointer; margin-left: auto;">
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
  const titleEl = document.getElementById('modalArticleTitle');
  const descEl = document.getElementById('modalArticleDesc');
  const badgeEl = document.getElementById('modalArticleCategoryBadge');
  const breadcrumbCatEl = document.getElementById('modalArticleCategoryBreadcrumb');
  const breadcrumbTitleEl = document.getElementById('modalArticleTitleBreadcrumb');
  const dateEl = document.getElementById('modalArticleDate');
  const readTimeEl = document.getElementById('modalArticleReadTime');
  const imgEl = document.getElementById('modalArticleImage');
  
  const quoteEl = document.getElementById('modalSidebarQuote');
  const quoteAuthorEl = document.getElementById('modalSidebarQuoteAuthor');
  const bodyEl = document.getElementById('modalArticleBody');
  const downloadBtn = document.getElementById('modalDownloadBtn');
  
  const cards = document.querySelectorAll('.article-card');
  
  if (!modal || !closeBtn || !titleEl || !bodyEl || !downloadBtn) return;
  
  function openArticleModal(index) {
    const art = articles[index];
    if (!art) return;
    
    // Localized labels
    const LOCALIZED_READER_LABELS = {
      fr: {
        home: "Accueil",
        psychology: "Psychologie",
        philosophy: "Philosophie",
        development: "Développement personnel",
        toc: "Dans cet article",
        toc1: "1. Concept de base",
        toc2: "2. Pourquoi cela arrive ?",
        toc3: "3. Types & Variantes",
        toc4: "4. Guide pratique",
        intro: "Introduction",
        quickSummary: "Résumé rapide",
        readMore: "Lire plus dans l'article",
        saveLater: "Enregistrer",
        share: "Partager",
        dontMiss: "Ne manquez pas nos prochains articles",
        emailPlaceholder: "Votre adresse email...",
        subscribe: "S'abonner",
        privacyText: "Nous respectons votre vie privée.",
        authorName: "Hikma & Nour",
        cause1: "Témoignages",
        cause2: "Comparaison",
        cause3: "Attentes",
        cause4: "Futur",
        cause5: "Pressions",
        type1: "Performance",
        type2: "Futur",
        type3: "Santé",
        type4: "Généralisé",
        type5: "Social"
      },
      en: {
        home: "Home",
        psychology: "Psychology",
        philosophy: "Philosophy",
        development: "Self-Development",
        toc: "In this article",
        toc1: "1. Core Concept",
        toc2: "2. Why does it happen?",
        toc3: "3. Types & Forms",
        toc4: "4. Practical Guide",
        intro: "Introduction",
        quickSummary: "Quick Summary",
        readMore: "Read more in the article",
        saveLater: "Save",
        share: "Share",
        dontMiss: "Don't miss our next articles",
        emailPlaceholder: "Your email address...",
        subscribe: "Subscribe",
        privacyText: "We respect your privacy.",
        authorName: "Hikma & Nour",
        cause1: "Experiences",
        cause2: "Comparison",
        cause3: "Expectations",
        cause4: "Future Fear",
        cause5: "Pressures",
        type1: "Performance",
        type2: "Anticipatory",
        type3: "Health & Body",
        type4: "Generalized",
        type5: "Social Relation"
      },
      ar: {
        home: "الرئيسية",
        psychology: "علم النفس",
        philosophy: "فلسفة",
        development: "تطوير الذات",
        toc: "في هذا المقال",
        toc1: "١. المفهوم الأساسي",
        toc2: "٢. لماذا يحدث ذلك؟",
        toc3: "٣. الأنواع والأشكال",
        toc4: "٤. خطوات عملية",
        intro: "مقدمة",
        quickSummary: "ملخص سريع",
        readMore: "اقرأ المزيد في المقال",
        saveLater: "حفظ للمطالعة لاحقاً",
        share: "مشاركة المقال",
        dontMiss: "لا تفوت مقالاتنا القادمة",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك الآن",
        privacyText: "نحن نحترم خصوصيتك ولن نشارك بياناتك مع أي أحد.",
        authorName: "Hikma & Nour",
        cause1: "تجارب سابقة",
        cause2: "المقارنة مع الآخرين",
        cause3: "توقع الكمال",
        cause4: "الخوف من المستقبل",
        cause5: "ضغوط العمل",
        type1: "قلق الأداء",
        type2: "قلق مستقبلي",
        type3: "قلق صحي",
        type4: "قلق عام",
        type5: "قلق اجتماعي"
      }
    };

    const labels = LOCALIZED_READER_LABELS[currentLang] || LOCALIZED_READER_LABELS.fr;
    const categoryLabel = TIKTOK_DATA.ui[currentLang][art.category] || labels.psychology;
    
    if (titleEl) titleEl.textContent = art.title;
    if (descEl) descEl.textContent = art.desc;
    if (badgeEl) {
      badgeEl.textContent = categoryLabel;
      badgeEl.className = `reader-hero-badge category-${art.category}`;
    }
    if (breadcrumbCatEl) breadcrumbCatEl.textContent = categoryLabel;
    if (breadcrumbTitleEl) breadcrumbTitleEl.textContent = art.title.slice(0, 32) + "...";
    if (dateEl) dateEl.textContent = art.date || "20 mai 2024";
    if (readTimeEl) readTimeEl.textContent = art.readTime;
    if (imgEl && art.image) imgEl.src = `../${art.image}`;

    const p1 = art.body[0] || "";
    const p2 = art.body[1] || "";
    const p3 = art.body[2] || "";
    const p4 = art.body[3] || "";
    const p5 = art.body[4] || "";
    const p6 = art.body[5] || "";

    if (quoteEl) quoteEl.textContent = p4 ? `${p4.split('.')[0]}...` : `${art.desc}`;
    if (quoteAuthorEl) {
      quoteAuthorEl.textContent = "— " + (art.title.includes('Sartre') ? 'Jean-Paul Sartre' : art.title.includes('Camus') ? 'Albert Camus' : art.title.includes('Nietzsche') ? 'Friedrich Nietzsche' : 'Hikma & Nour');
    }

    const mainHtml = `
      <!-- Introduction Box (Split) -->
      <section id="sec-intro" class="reader-content-section section-intro-box">
        <div class="intro-box-grid">
          <div class="intro-box-left">
            <h3 class="section-part-title">
              <span class="part-title-icon">🌿</span>
              ${labels.intro}
            </h3>
            <p>${p1}</p>
          </div>
          <div class="intro-box-right">
            <h3 class="section-part-title">
              <span class="part-title-icon">💡</span>
              ${labels.quickSummary}
            </h3>
            <div class="quick-summary-card">
              <p>${art.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 1 : Concept de base -->
      <section id="sec-1" class="reader-content-section">
        <h3 class="section-part-title">
          <span class="part-title-circle">🧠</span>
          ${labels.toc1}
        </h3>
        <p>${p2 || p1}</p>
        
        <!-- Highlight Quote Box -->
        <div class="content-highlight-box">
          <span class="highlight-icon">🌿</span>
          <p class="highlight-text">"${p2 ? p2.split('.')[0] : art.desc}"</p>
        </div>
      </section>

      <!-- Section 2 : Pourquoi cela arrive ? -->
      <section id="sec-2" class="reader-content-section">
        <h3 class="section-part-title">
          <span class="part-title-circle">👤</span>
          ${labels.toc2}
        </h3>
        <p>${p3 || p2}</p>
        
        <!-- Causes Grid (5 Columns) -->
        <div class="causes-flex-row">
          <div class="cause-grid-item">
            <span class="cause-icon">🌧️</span>
            <span class="cause-name">${labels.cause1}</span>
          </div>
          <div class="cause-grid-item">
            <span class="cause-icon">👥</span>
            <span class="cause-name">${labels.cause2}</span>
          </div>
          <div class="cause-grid-item">
            <span class="cause-icon">🎯</span>
            <span class="cause-name">${labels.cause3}</span>
          </div>
          <div class="cause-grid-item">
            <span class="cause-icon">⏳</span>
            <span class="cause-name">${labels.cause4}</span>
          </div>
          <div class="cause-grid-item">
            <span class="cause-icon">💼</span>
            <span class="cause-name">${labels.cause5}</span>
          </div>
        </div>

        <!-- Read more button below grid -->
        <div style="text-align: center; margin: 25px 0 10px;">
          <button class="btn-read-more-grid" onclick="document.getElementById('sec-3').scrollIntoView({behavior:'smooth'});">
            <span class="btn-grid-icon">▼</span>
            <span>${labels.readMore}</span>
          </button>
        </div>
      </section>

      <!-- Section 3 : Types et formes -->
      <section id="sec-3" class="reader-content-section">
        <h3 class="section-part-title">
          <span class="part-title-circle">🌾</span>
          ${labels.toc3}
        </h3>
        <p>${p4 || p3}</p>
        
        <!-- Types Grid (5 Cards) -->
        <div class="types-cards-row">
          <div class="type-card-item">
            <span class="type-card-icon">📈</span>
            <h4 class="type-card-heading">${labels.type1}</h4>
          </div>
          <div class="type-card-item">
            <span class="type-card-icon">🔭</span>
            <h4 class="type-card-heading">${labels.type2}</h4>
          </div>
          <div class="type-card-item">
            <span class="type-card-icon">💖</span>
            <h4 class="type-card-heading">${labels.type3}</h4>
          </div>
          <div class="type-card-item">
            <span class="type-card-icon">🧠</span>
            <h4 class="type-card-heading">${labels.type4}</h4>
          </div>
          <div class="type-card-item">
            <span class="type-card-icon">👥</span>
            <h4 class="type-card-heading">${labels.type5}</h4>
          </div>
        </div>
      </section>

      <!-- Section 4 : Guide pratique -->
      <section id="sec-4" class="reader-content-section">
        <h3 class="section-part-title">
          <span class="part-title-circle">📝</span>
          ${labels.toc4}
        </h3>
        <p>${p5 || p3}</p>
        ${p6 ? `<p>${p6}</p>` : ""}
      </section>
    `;

    if (bodyEl) bodyEl.innerHTML = mainHtml;

    if (downloadBtn) {
      downloadBtn.href = `../files/${art.file}`;
      downloadBtn.target = "_blank";
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Auto-scroll modal to top
    const scrollContainer = modal.querySelector('.reader-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }

  cards.forEach(card => {
    const clickables = card.querySelectorAll('[data-index]');
    clickables.forEach(c => {
      c.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const index = parseInt(c.getAttribute('data-index'), 10);
        openArticleModal(index);
      });
    });
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

  // Close on backdrop click (if clicking outside main content)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}
