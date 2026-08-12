import TIKTOK_DATA from '../data_v11.js';

// --- Language Engine & Metadata ---
const LANG_METADATA = {
  ar: { label: "العربية", code: "ar", dir: "rtl" },
  fr: { label: "Français", code: "fr", dir: "ltr" },
  en: { label: "English", code: "en", dir: "ltr" }
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
let currentSearch = '';
let activeThinkerId = null;

// Page specific translations
const THINKERS_PAGE_TRANSLATIONS = {
  fr: {
    pageTitle: "Penseurs & Philosophes | Hikma & Nour",
    pageDesc: "Explorez la vie, les œuvres et la sagesse des plus grands philosophes et penseurs de l'histoire.",
    searchPlaceholder: "Rechercher un philosophe, une école, une idée...",
    noResults: "Aucun philosophe ne correspond à votre recherche.",
    seeAll: "Tous les philosophes",
    readBio: "Lire la biographie",
    featured: "En vedette",
    breadcrumbHome: "Accueil",
    breadcrumbThinkers: "Penseurs",
    tocTitle: "Dans cette biographie",
    secIntro: "Introduction",
    secBio: "Parcours et vie",
    secContext: "Contexte historique",
    secIdeas: "Grandes idées",
    secConcepts: "Concepts essentiels",
    secWorks: "Œuvres majeures",
    secInfluence: "Influence & Héritage",
    secQuotes: "Citations marquantes",
    secTrivia: "Le saviez-vous ?",
    secReflection: "Question de réflexion",
    secLessons: "Ce que cette pensée nous apprend",
    secTimeline: "Repères chronologiques",
    secRelated: "Contenus recommandés",
    shareToast: "Lien de la biographie copié !",
    saveToast: "Biographie sauvegardée dans vos favoris !"
  },
  en: {
    pageTitle: "Thinkers & Philosophers | Hikma & Nour",
    pageDesc: "Explore the lives, works, and wisdom of history's greatest philosophers and thinkers.",
    searchPlaceholder: "Search for a philosopher, school, or idea...",
    noResults: "No thinkers found matching your search.",
    seeAll: "All Thinkers",
    readBio: "Read Biography",
    featured: "Featured",
    breadcrumbHome: "Home",
    breadcrumbThinkers: "Thinkers",
    tocTitle: "In this biography",
    secIntro: "Introduction",
    secBio: "Life & Journey",
    secContext: "Historical Context",
    secIdeas: "Great Ideas",
    secConcepts: "Key Concepts",
    secWorks: "Major Works",
    secInfluence: "Influence & Legacy",
    secQuotes: "Notable Quotes",
    secTrivia: "Did you know?",
    secReflection: "Reflection Question",
    secLessons: "What we can learn from this thinker",
    secTimeline: "Chronological Milestones",
    secRelated: "Recommended Content",
    shareToast: "Biography link copied to clipboard!",
    saveToast: "Biography saved to your bookmarks!"
  },
  ar: {
    pageTitle: "حكمة ونور | كبار الفلاسفة والمفكرين",
    pageDesc: "استكشف سير كبار الفلاسفة عبر التاريخ، مدارسهم الفكرية، تعاليمهم، واقتباساتهم الخالدة.",
    searchPlaceholder: "ابحث عن فيلسوف، مدرسة فكرية، أو مفهوم...",
    noResults: "لم يتم العثور على أي فيلسوف يطابق بحثك.",
    seeAll: "جميع الفلاسفة",
    readBio: "اقرأ السيرة الذاتية",
    featured: "مفكر مميز",
    breadcrumbHome: "الرئيسية",
    breadcrumbThinkers: "المفكرون",
    tocTitle: "محتويات السيرة",
    secIntro: "مقدمة تعريفية",
    secBio: "المسيرة والنشأة",
    secContext: "السياق التاريخي",
    secIdeas: "أهم الأفكار والرؤى",
    secConcepts: "المفاهيم الجوهرية",
    secWorks: "أشهر المؤلفات",
    secInfluence: "التأثير والإرث الفكري",
    secQuotes: "أقوال واقتباسات خالدة",
    secTrivia: "هل تعلم؟",
    secReflection: "سؤال للتأمل والتدبر",
    secLessons: "ماذا تعلمنا هذه الفلسفة اليوم؟",
    secTimeline: "المحطات الزمنية الكبرى",
    secRelated: "محتويات ومقالات مقترحة",
    shareToast: "تم نسخ رابط السيرة بنجاح!",
    saveToast: "تم حفظ السيرة في قائمة المفضلة!"
  }
};

// --- Language Switching Function ---
export function setLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);
  
  document.documentElement.lang = lang;
  document.documentElement.dir = (LANG_METADATA[lang] && LANG_METADATA[lang].dir) || (lang === 'ar' ? 'rtl' : 'ltr');

  // Update navbar active language label
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = (LANG_METADATA[lang] && LANG_METADATA[lang].label) || "العربية";

  // Update active dropdown item
  const options = document.querySelectorAll('.lang-opt');
  options.forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Translate static UI elements
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  // Localized Search Placeholder & No Results
  const searchInput = document.getElementById('searchInput');
  if (searchInput && THINKERS_PAGE_TRANSLATIONS[lang]) {
    searchInput.placeholder = THINKERS_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  }
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl && THINKERS_PAGE_TRANSLATIONS[lang]) {
    noResultsEl.textContent = THINKERS_PAGE_TRANSLATIONS[lang].noResults;
  }

  // Update title if modal is closed
  if (!activeThinkerId) {
    document.title = THINKERS_PAGE_TRANSLATIONS[lang].pageTitle;
  }

  // Re-populate dropdowns, filters, and gallery
  populateNavbarDropdown();
  populateFilterTags();
  populateThinkers(currentCategory, currentSearch);

  // If a thinker modal is currently open, instantly re-render in the newly selected language!
  const modal = document.getElementById('thinkerModal');
  if (modal && modal.classList.contains('active') && activeThinkerId) {
    openThinkerModalById(activeThinkerId);
  }
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

// --- Navbar Dropdown Builder ---
function populateNavbarDropdown() {
  const subMenu = document.getElementById('thinkersSubMenu');
  if (!subMenu) return;
  
  const thinkers = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].thinkers) || [];
  const seeAllLabel = (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].seeAllThinkers) || "Tous les philosophes →";
  
  let html = thinkers.slice(0, 12).map(t => {
    return `<a href="?thinker=${t.id}" class="sub-link" data-thinker="${t.id}" onclick="event.preventDefault(); window.openThinkerModalById('${t.id}');">${t.name}</a>`;
  }).join('');
  
  html += `<a href="?thinker=all" class="sub-link see-all" data-thinker="all" onclick="event.preventDefault(); window.handleCategoryChange('all');">${seeAllLabel}</a>`;
  
  subMenu.innerHTML = html;
}

// --- Filter Pills Builder ---
function populateFilterTags() {
  const container = document.getElementById('tagsContainer');
  if (!container) return;
  
  const thinkers = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].thinkers) || [];
  const seeAllLabel = (THINKERS_PAGE_TRANSLATIONS[currentLang] && THINKERS_PAGE_TRANSLATIONS[currentLang].seeAll) || "Tous les philosophes";
  
  // Extract unique schools
  const schools = Array.from(new Set(thinkers.map(t => t.school).filter(Boolean))).slice(0, 7);

  let html = `<button class="tag-btn ${currentCategory === 'all' ? 'active' : ''}" data-category="all" onclick="window.handleCategoryChange('all')">${seeAllLabel}</button>`;
  
  schools.forEach(school => {
    const isActive = currentCategory === school ? 'active' : '';
    html += `<button class="tag-btn ${isActive}" data-category="${school}" onclick="window.handleCategoryChange('${school}')">${school}</button>`;
  });
  
  container.innerHTML = html;
}

window.handleCategoryChange = function(category) {
  currentCategory = category;
  
  const tags = document.querySelectorAll('.tag-btn');
  tags.forEach(tag => {
    if (tag.getAttribute('data-category') === category) {
      tag.classList.add('active');
    } else {
      tag.classList.remove('active');
    }
  });

  populateThinkers(currentCategory, currentSearch);
};

// --- Gallery Grid Populator ---
function populateThinkers(category = 'all', keyword = '') {
  const container = document.getElementById('thinkersList');
  const noResultsEl = document.getElementById('noResults');
  let thinkers = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].thinkers) || [];
  
  const readLabel = (THINKERS_PAGE_TRANSLATIONS[currentLang] && THINKERS_PAGE_TRANSLATIONS[currentLang].readBio) || "Lire la biographie";
  const featuredLabel = (THINKERS_PAGE_TRANSLATIONS[currentLang] && THINKERS_PAGE_TRANSLATIONS[currentLang].featured) || "En vedette";

  if (!container || !thinkers) return;

  let filtered = [...thinkers];

  // 1. Filter by category (school)
  if (category && category !== 'all') {
    filtered = filtered.filter(t => t.school === category || t.id === category);
  }

  // 2. Filter by search keyword
  if (keyword && keyword.trim() !== '') {
    const term = keyword.toLowerCase().trim();
    filtered = filtered.filter(t => 
      (t.name && t.name.toLowerCase().includes(term)) || 
      (t.bio && t.bio.toLowerCase().includes(term)) ||
      (t.school && t.school.toLowerCase().includes(term)) ||
      (t.keyConcept && t.keyConcept.toLowerCase().includes(term))
    );
  }

  // 3. Handle empty state
  if (filtered.length === 0) {
    container.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    container.style.display = 'grid';
    if (noResultsEl) noResultsEl.style.display = 'none';

    container.innerHTML = filtered.map(thinker => {
      const badgeHtml = thinker.featured ? `<span class="card-featured-badge">${featuredLabel}</span>` : "";
      const imgSrc = thinker.image ? (thinker.image.startsWith('../') ? thinker.image : `../${thinker.image}`) : '../featured_philosopher.jpg';

      return `
        <div class="thinker-card" style="cursor: pointer;" onclick="window.openThinkerModalById('${thinker.id}')">
          <div class="thinker-image-container">
            ${badgeHtml}
            <img src="${imgSrc}" alt="${thinker.name}" class="thinker-image" loading="lazy" onerror="this.src='../featured_philosopher.jpg'">
          </div>
          <div class="card-meta-row">
            <span>${thinker.era}</span>
            <span class="card-meta-dot">•</span>
            <span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">${thinker.school}</span>
          </div>
          <h3 class="thinker-name">${thinker.name}</h3>
          <p class="thinker-bio">${thinker.bio}</p>
          <div class="card-action-link" style="margin-top: auto; padding-top: 10px; display: inline-flex; align-items: center; gap: 6px; color: var(--accent-gold); font-weight: 700;">
            <span>${readLabel}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="${currentLang === 'ar' ? '19' : '5'}" y1="12" x2="${currentLang === 'ar' ? '5' : '19'}" y2="12"></line>
              <polyline points="${currentLang === 'ar' ? '12 19 5 12 12 5' : '12 5 19 12 12 19'}"></polyline>
            </svg>
          </div>
        </div>
      `;
    }).join('');
  }
}

// --- Toast Helper ---
function showToast(message) {
  let toast = document.getElementById('magazineToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'magazineToast';
    toast.className = 'mag-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==========================================================================
// MODULAR RENDER FUNCTIONS FOR THINKERS PREMIUM DOSSIER
// ==========================================================================

function renderThinkerBreadcrumb(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  return `
    <nav class="reader-breadcrumbs" aria-label="Breadcrumb">
      <a href="../" style="color: inherit; text-decoration: none;">${t.breadcrumbHome}</a> &rsaquo; 
      <a href="./" style="color: inherit; text-decoration: none;" onclick="window.closeThinkerModal();">${t.breadcrumbThinkers}</a> &rsaquo; 
      <span style="color: var(--accent-gold); font-weight: 700;">${thinker.name}</span>
    </nav>
  `;
}

function renderThinkerHero(thinker, lang) {
  const imgSrc = thinker.image ? (thinker.image.startsWith('../') ? thinker.image : `../${thinker.image}`) : '../featured_philosopher.jpg';
  const origNameHtml = thinker.originalName ? `<span class="thinker-premium-orig-name">${thinker.originalName}</span>` : '';
  const countryName = thinker.country || (lang === 'ar' ? 'اليونان القديمة' : lang === 'fr' ? 'Grèce antique' : 'Ancient Greece');
  const flagIcon = thinker.flag || '🏛️';
  const subTitle = thinker.subName || (lang === 'ar' ? `فيلسوف من مدرسة ${thinker.school}` : `${thinker.school} Philosopher`);
  
  // Hero quote fallback
  let heroQuote = thinker.heroQuote || thinker.famousQuote;
  if (!heroQuote) {
    heroQuote = `« ${thinker.bio} »`;
  }

  const shareLabel = lang === 'ar' ? 'مشاركة' : lang === 'fr' ? 'Partager' : 'Share';
  const saveLabel = lang === 'ar' ? 'حفظ' : lang === 'fr' ? 'Enregistrer' : 'Save';

  return `
    <div class="thinker-premium-hero-card" id="sec-hero">
      <div class="thinker-premium-hero-grid">
        <div class="thinker-premium-portrait-wrap">
          <img src="${imgSrc}" alt="${thinker.name}" class="thinker-premium-portrait-img" onerror="this.src='../featured_philosopher.jpg'">
        </div>
        <div>
          <div class="thinker-premium-title-row">
            <h1 class="thinker-premium-name">${thinker.name}</h1>
            ${origNameHtml}
          </div>
          <p class="thinker-premium-subtitle">${subTitle}</p>
          
          <div class="thinker-premium-badges-row">
            <span class="thinker-premium-badge">${flagIcon} ${countryName}</span>
            <span class="thinker-premium-badge">⏳ ${thinker.era}</span>
            <span class="thinker-premium-badge">🏛️ ${thinker.school}</span>
          </div>

          <div class="thinker-premium-hero-quote">
            ${heroQuote}
          </div>

          <div class="thinker-premium-actions">
            <button type="button" class="btn-save-later" onclick="window.handleShareThinker('${thinker.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              <span>${shareLabel}</span>
            </button>
            <button type="button" class="btn-save-later" onclick="window.handleSaveThinker('${thinker.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              <span>${saveLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderThinkerToc(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const sections = [
    { id: 'sec-intro', label: t.secIntro },
    { id: 'sec-bio', label: t.secBio },
    { id: 'sec-context', label: t.secContext },
    { id: 'sec-ideas', label: t.secIdeas },
    { id: 'sec-concepts', label: t.secConcepts },
    { id: 'sec-works', label: t.secWorks },
    { id: 'sec-influence', label: t.secInfluence },
    { id: 'sec-quotes', label: t.secQuotes },
    { id: 'sec-trivia', label: t.secTrivia },
    { id: 'sec-lessons', label: t.secLessons },
    { id: 'sec-timeline', label: t.secTimeline },
    { id: 'sec-related', label: t.secRelated }
  ];

  const linksHtml = sections.map(s => `
    <li><a href="#${s.id}" class="thinker-premium-nav-link">${s.label}</a></li>
  `).join('');

  return `
    <aside class="thinker-premium-sidebar" aria-label="${t.tocTitle}">
      <h4 class="thinker-premium-sidebar-title">
        <span>📜</span>
        <span>${t.tocTitle}</span>
      </h4>
      <ul class="thinker-premium-nav-list">
        ${linksHtml}
      </ul>
    </aside>
  `;
}

function renderThinkerMobileToc(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const sections = [
    { id: 'sec-intro', label: t.secIntro },
    { id: 'sec-bio', label: t.secBio },
    { id: 'sec-ideas', label: t.secIdeas },
    { id: 'sec-works', label: t.secWorks },
    { id: 'sec-influence', label: t.secInfluence },
    { id: 'sec-timeline', label: t.secTimeline }
  ];

  return `
    <div class="thinker-premium-mobile-toc">
      <details>
        <summary>
          <span>📜 ${t.tocTitle}</span>
          <span>▼</span>
        </summary>
        <ul class="thinker-premium-mobile-toc-list">
          ${sections.map(s => `<li><a href="#${s.id}">${s.label}</a></li>`).join('')}
        </ul>
      </details>
    </div>
  `;
}

function renderThinkerIntro(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const introText = thinker.intro || thinker.bio;

  return `
    <section class="thinker-premium-section" id="sec-intro">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">📖</span>
        <h2 class="thinker-premium-section-title">${t.secIntro}</h2>
      </div>
      <div class="thinker-premium-prose" style="font-size: 1.08rem; color: #FFFDF8; font-weight: 500;">
        <p>${introText}</p>
      </div>
    </section>
  `;
}

function renderThinkerBiography(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const bioDetails = thinker.bioDetails || {};
  const bodyParas = thinker.body || [thinker.bio];

  const upText = bioDetails.upbringing || bodyParas[0] || "...";
  const stText = bioDetails.studies || bodyParas[1] || "...";
  const lfText = bioDetails.life || bodyParas[2] || "...";

  const upTitle = lang === 'ar' ? 'النشأة والبدايات' : lang === 'fr' ? 'Origines et jeunesse' : 'Upbringing & Origins';
  const stTitle = lang === 'ar' ? 'التكوين والدراسة' : lang === 'fr' ? 'Formation et mentors' : 'Studies & Mentorship';
  const lfTitle = lang === 'ar' ? 'المسيرة والنضج الفكري' : lang === 'fr' ? 'Maturité et vie intellectuelle' : 'Life & Philosophical Journey';

  return `
    <section class="thinker-premium-section" id="sec-bio">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">⏳</span>
        <h2 class="thinker-premium-section-title">${t.secBio}</h2>
      </div>
      <div class="thinker-premium-ideas-list">
        <div class="thinker-premium-idea-card">
          <div class="thinker-premium-idea-head">
            <span class="thinker-premium-idea-num">🌱</span>
            <h3 class="thinker-premium-idea-title">${upTitle}</h3>
          </div>
          <p class="thinker-premium-idea-text">${upText}</p>
        </div>

        <div class="thinker-premium-idea-card">
          <div class="thinker-premium-idea-head">
            <span class="thinker-premium-idea-num">🎓</span>
            <h3 class="thinker-premium-idea-title">${stTitle}</h3>
          </div>
          <p class="thinker-premium-idea-text">${stText}</p>
        </div>

        <div class="thinker-premium-idea-card">
          <div class="thinker-premium-idea-head">
            <span class="thinker-premium-idea-num">🏛️</span>
            <h3 class="thinker-premium-idea-title">${lfTitle}</h3>
          </div>
          <p class="thinker-premium-idea-text">${lfText}</p>
        </div>
      </div>
    </section>
  `;
}

function renderThinkerHistoricalContext(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const contextText = thinker.historicalContext || (lang === 'ar' 
    ? `تأثرت فلسفته بالتحولات السياسية والفكرية الكبرى لعصره في ${thinker.country || 'اليونان القديمة'}، حيث سعى لمعالجة أزمات مجتمعه وبناء رؤية متماسكة للوجود.`
    : `Sa pensée s'est forgée au cœur des grands bouleversements intellectuels et politiques de son époque (${thinker.era}), cherchant à apporter des réponses pérennes aux dilemmes humains.`);

  return `
    <section class="thinker-premium-section" id="sec-context">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">🌍</span>
        <h2 class="thinker-premium-section-title">${t.secContext}</h2>
      </div>
      <div class="thinker-premium-prose">
        <p>${contextText}</p>
      </div>
    </section>
  `;
}

function renderThinkerIdeas(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  let ideas = thinker.mainIdeas;
  
  if (!ideas || ideas.length === 0) {
    const rawConcepts = (thinker.keyConcept || "").split(',').map(c => c.trim()).filter(Boolean);
    ideas = rawConcepts.map((concept, i) => ({
      num: `0${i + 1}`,
      title: concept,
      text: lang === 'ar' ? `مفهوم فلسفي محوري يشكل ركيزة أساسية في نسق الفيلسوف الفكري.` : `Concept fondamental au cœur de la réflexion et de l'œuvre philosophique.`
    }));
    if (ideas.length === 0) {
      ideas = [{
        num: "01",
        title: lang === 'ar' ? 'البحث عن الحقيقة والحكمة' : 'Quête de vérité et de sagesse',
        text: thinker.bio
      }];
    }
  }

  const ideasHtml = ideas.map(idea => `
    <div class="thinker-premium-idea-card">
      <div class="thinker-premium-idea-head">
        <span class="thinker-premium-idea-num">${idea.num || '✦'}</span>
        <h3 class="thinker-premium-idea-title">${idea.title}</h3>
      </div>
      <p class="thinker-premium-idea-text">${idea.text}</p>
    </div>
  `).join('');

  return `
    <section class="thinker-premium-section" id="sec-ideas">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">💡</span>
        <h2 class="thinker-premium-section-title">${t.secIdeas}</h2>
      </div>
      <div class="thinker-premium-ideas-list">
        ${ideasHtml}
      </div>
    </section>
  `;
}

function renderThinkerConcepts(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  let concepts = thinker.keyConcepts;
  
  if (!concepts || concepts.length === 0) {
    const raw = (thinker.keyConcept || "").split(',').map(c => c.trim()).filter(Boolean);
    concepts = raw.map(c => ({
      name: c,
      desc: lang === 'ar' ? 'ركيزة فلسفية أساسية لفهم أفكار هذا الفيلسوف.' : 'Pilier conceptuel fondamental pour comprendre sa philosophie.'
    }));
  }

  if (concepts.length === 0) return '';

  const cardsHtml = concepts.map(c => `
    <div class="thinker-premium-concept-card">
      <span class="thinker-premium-card-tag">Concept</span>
      <h4 class="thinker-premium-card-title">${c.name}</h4>
      <p class="thinker-premium-card-desc">${c.desc}</p>
    </div>
  `).join('');

  return `
    <section class="thinker-premium-section" id="sec-concepts">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">🧩</span>
        <h2 class="thinker-premium-section-title">${t.secConcepts}</h2>
      </div>
      <div class="thinker-premium-cards-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderThinkerWorks(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  let works = thinker.works;
  
  if (!works || works.length === 0) {
    const raw = (thinker.keyWorks || "").split(',').map(w => w.trim()).filter(Boolean);
    works = raw.map(w => ({
      title: w,
      period: thinker.era,
      desc: lang === 'ar' ? 'من أمهات الكتب والمؤلفات الفلسفية الأكثر تأثيراً.' : 'Ouvrage majeur ayant marqué l\'histoire des idées.'
    }));
  }

  if (works.length === 0) return '';

  const worksHtml = works.slice(0, 4).map(w => `
    <div class="thinker-premium-work-card">
      <span class="thinker-premium-card-tag">📘 ${w.period || ''}</span>
      <h4 class="thinker-premium-card-title">${w.title}</h4>
      <p class="thinker-premium-card-desc">${w.desc}</p>
    </div>
  `).join('');

  return `
    <section class="thinker-premium-section" id="sec-works">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">📚</span>
        <h2 class="thinker-premium-section-title">${t.secWorks}</h2>
      </div>
      <div class="thinker-premium-cards-grid">
        ${worksHtml}
      </div>
    </section>
  `;
}

function renderThinkerInfluence(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const influenceData = thinker.influence || {
    names: ["Socrate", "Platon", "Aristote", "Kant", "Nietzsche"],
    summary: lang === 'ar' ? 'ترك بصمة لا تُمحى على تطور الفلسفة والعلوم الإنسانية عبر القرون.' : 'A exercé une influence déterminante sur l\'histoire de la philosophie.'
  };

  const allThinkers = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].thinkers) || [];

  const avatarsHtml = influenceData.names.map(name => {
    let targetImg = '../featured_philosopher.jpg';
    let targetId = null;

    const matchedThinker = allThinkers.find(th => 
      th.name.toLowerCase().includes(name.toLowerCase()) || 
      name.toLowerCase().includes(th.name.toLowerCase()) ||
      th.id.toLowerCase() === name.toLowerCase()
    );

    if (matchedThinker) {
      targetImg = matchedThinker.image ? (matchedThinker.image.startsWith('../') ? matchedThinker.image : `../${matchedThinker.image}`) : '../featured_philosopher.jpg';
      targetId = matchedThinker.id;
    }

    const clickAction = targetId ? `onclick="window.openThinkerModalById('${targetId}')"` : '';

    return `
      <a class="thinker-premium-avatar-item" ${clickAction}>
        <img src="${targetImg}" alt="${name}" class="thinker-premium-avatar-img" onerror="this.src='../featured_philosopher.jpg'">
        <span class="thinker-premium-avatar-name">${name}</span>
      </a>
    `;
  }).join('');

  return `
    <section class="thinker-premium-section" id="sec-influence">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">🌟</span>
        <h2 class="thinker-premium-section-title">${t.secInfluence}</h2>
      </div>
      <div class="thinker-premium-prose" style="margin-bottom: 16px;">
        <p>${influenceData.summary}</p>
      </div>
      <div class="thinker-premium-influence-grid">
        ${avatarsHtml}
      </div>
    </section>
  `;
}

function renderThinkerQuotes(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  let quotes = thinker.quotes;
  
  if (!quotes || quotes.length === 0) {
    if (thinker.famousQuote) {
      quotes = [thinker.famousQuote];
    } else {
      quotes = [`« ${thinker.bio} »`];
    }
  }

  const quotesHtml = quotes.map(q => `
    <div class="thinker-premium-quote-item">
      ${q}
    </div>
  `).join('');

  return `
    <section class="thinker-premium-section" id="sec-quotes">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">❝</span>
        <h2 class="thinker-premium-section-title">${t.secQuotes}</h2>
      </div>
      <div class="thinker-premium-quotes-list">
        ${quotesHtml}
      </div>
    </section>
  `;
}

function renderThinkerTriviaAndReflection(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const triviaText = thinker.didYouKnow || (lang === 'ar' 
    ? 'كان يكرس وقته اليومي للقراءة والتأمل المعمق والكتابة دفاعاً عن آرائه الفلسفية.'
    : 'Consacrait une grande partie de sa vie à l\'écriture et à la méditation philosophique.');
    
  const reflectText = thinker.reflectionQuestion || (lang === 'ar'
    ? 'كيف يمكنك تطبيق هذه الرؤية الفلسفية في حياتك اليومية لتجاوز التحديات وتحقيق السلام الداخلي؟'
    : 'Comment appliquer les principes de ce penseur à nos défis contemporains ?');

  return `
    <div class="thinker-premium-split-2col" id="sec-trivia">
      <div class="thinker-premium-section" style="margin-bottom: 0;">
        <div class="thinker-premium-section-header">
          <span class="thinker-premium-section-icon">💡</span>
          <h2 class="thinker-premium-section-title" style="font-size: 1.25rem;">${t.secTrivia}</h2>
        </div>
        <p class="thinker-premium-prose" style="font-size: 0.95rem;">${triviaText}</p>
      </div>

      <div class="thinker-premium-section" style="margin-bottom: 0;">
        <div class="thinker-premium-section-header">
          <span class="thinker-premium-section-icon">❓</span>
          <h2 class="thinker-premium-section-title" style="font-size: 1.25rem;">${t.secReflection}</h2>
        </div>
        <p class="thinker-premium-prose" style="font-size: 0.95rem;">${reflectText}</p>
      </div>
    </div>
  `;
}

function renderThinkerLessons(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  let lessons = thinker.lessons;
  
  if (!lessons || lessons.length === 0) {
    lessons = [
      lang === 'ar' ? 'فحص الأفكار والمعتقدات باستمرار دون تسليم أعمى.' : 'Examiner lucidement ses jugements et ses croyances.',
      lang === 'ar' ? 'السعي وراء الفضيلة والعدالة في القرارات اليومية.' : 'Rechercher la justice et la vertu dans ses actions quotidiennes.',
      lang === 'ar' ? 'بناء السلام الداخلي عبر السيادة على النفس والانفعالات.' : 'Bâtir la souveraineté sur ses propres émotions.',
      lang === 'ar' ? 'التعلم المستمر والانفتاح على الحكمة الإنسانية.' : 'Cultiver l\'apprentissage continu et la curiosité d\'esprit.'
    ];
  }

  const listHtml = lessons.map(lesson => `
    <li style="display: flex; align-items: baseline; gap: 12px; font-size: 0.98rem; color: #E6DFD5; line-height: 1.65;">
      <span style="color: #DFB15B; font-weight: 800;">✓</span>
      <span>${lesson}</span>
    </li>
  `).join('');

  return `
    <section class="thinker-premium-section" id="sec-lessons">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">🌱</span>
        <h2 class="thinker-premium-section-title">${t.secLessons}</h2>
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
        ${listHtml}
      </ul>
    </section>
  `;
}

function renderThinkerTimeline(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  let timeline = thinker.timeline;
  
  if (!timeline || timeline.length === 0) {
    timeline = [
      { year: thinker.era?.split('-')[0]?.trim() || "...", desc: lang === 'ar' ? 'الميلاد والنشأة الأولى.' : 'Naissance et premières années.' },
      { year: "...", desc: lang === 'ar' ? 'بداية الإنتاج المعرفي والمؤلفات الكبرى.' : 'Période majeure de création philosophique.' },
      { year: thinker.era?.split('-')[1]?.trim() || "...", desc: lang === 'ar' ? 'الوفاة وخلود الأثر الفكري.' : 'Disparition et transmission de l\'héritage.' }
    ];
  }

  const nodesHtml = timeline.map(node => `
    <div class="thinker-premium-timeline-node">
      <span class="thinker-premium-timeline-year">${node.year}</span>
      <p class="thinker-premium-timeline-desc">${node.desc}</p>
    </div>
  `).join('');

  return `
    <section class="thinker-premium-section" id="sec-timeline">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">📅</span>
        <h2 class="thinker-premium-section-title">${t.secTimeline}</h2>
      </div>
      <div class="thinker-premium-timeline">
        ${nodesHtml}
      </div>
    </section>
  `;
}

function renderThinkerRecommendations(thinker, lang) {
  const t = THINKERS_PAGE_TRANSLATIONS[lang] || THINKERS_PAGE_TRANSLATIONS['fr'];
  const allArticles = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].articles) || [];
  const allThinkers = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].thinkers) || [];

  // Pick 3 related articles
  const relatedArticles = allArticles.slice(0, 3);
  
  // Pick 3 related thinkers (excluding current thinker)
  const relatedThinkers = allThinkers.filter(th => th.id !== thinker.id).slice(0, 3);

  const articlesHtml = relatedArticles.map(art => {
    const artImg = art.image ? (art.image.startsWith('../') ? art.image : `../${art.image}`) : '../main_home_hd_bg.jpg';
    return `
      <a href="../articles/?article=${art.file || art.id}" class="magazine-related-card" style="text-decoration: none;">
        <img src="${artImg}" alt="${art.title}" class="magazine-related-card-img" onerror="this.src='../main_home_hd_bg.jpg'">
        <div class="magazine-related-card-content">
          <span style="color: var(--accent-green); font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">${art.categoryName || art.category}</span>
          <h4 class="magazine-related-card-title">${art.title}</h4>
          <span class="magazine-related-card-meta">⏱️ ${art.readTime || '5 min'}</span>
        </div>
      </a>
    `;
  }).join('');

  const thinkersHtml = relatedThinkers.map(th => {
    const thImg = th.image ? (th.image.startsWith('../') ? th.image : `../${th.image}`) : '../featured_philosopher.jpg';
    return `
      <div class="thinker-premium-concept-card" style="cursor: pointer;" onclick="window.openThinkerModalById('${th.id}')">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <img src="${thImg}" alt="${th.name}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--accent-gold);" onerror="this.src='../featured_philosopher.jpg'">
          <div>
            <h4 class="thinker-premium-card-title" style="margin: 0;">${th.name}</h4>
            <span class="thinker-premium-card-tag">${th.school}</span>
          </div>
        </div>
        <p class="thinker-premium-card-desc" style="margin: 0;">${th.bio.substring(0, 85)}...</p>
      </div>
    `;
  }).join('');

  return `
    <section class="thinker-premium-section" id="sec-related">
      <div class="thinker-premium-section-header">
        <span class="thinker-premium-section-icon">🔗</span>
        <h2 class="thinker-premium-section-title">${t.secRelated}</h2>
      </div>
      
      <h3 style="color: #DFB15B; font-size: 1.1rem; font-weight: 700; margin: 0 0 16px;">📚 ${lang === 'ar' ? 'مقالات فلسفية مرتبطة' : 'Articles liés'}</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; margin-bottom: 30px;">
        ${articlesHtml}
      </div>

      <h3 style="color: #DFB15B; font-size: 1.1rem; font-weight: 700; margin: 0 0 16px;">👥 ${lang === 'ar' ? 'مفكرون وفلاسفة مقترحون' : 'Penseurs similaires'}</h3>
      <div class="thinker-premium-cards-grid">
        ${thinkersHtml}
      </div>
    </section>
  `;
}

// --- SEO Updater ---
function updateThinkerSeo(thinker, lang) {
  const pageTitle = `${thinker.name} — ${thinker.school} | Hikma & Nour`;
  const metaDesc = thinker.bio;
  const canonicalUrl = `https://jardin-des-pensees.onrender.com/thinkers/?thinker=${thinker.id}`;
  const imgUrl = `https://jardin-des-pensees.onrender.com/${thinker.image}`;

  document.title = pageTitle;

  // Meta Description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.name = "description";
    document.head.appendChild(descTag);
  }
  descTag.content = metaDesc;

  // Canonical
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.href = canonicalUrl;

  // JSON-LD Person & BreadcrumbList
  const oldJsonLd = document.getElementById('thinkerJsonLd');
  if (oldJsonLd) oldJsonLd.remove();

  const script = document.createElement('script');
  script.id = 'thinkerJsonLd';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": thinker.name,
        "description": thinker.bio,
        "image": imgUrl,
        "nationality": thinker.country,
        "birthDate": thinker.era?.split('-')[0]?.trim() || "",
        "deathDate": thinker.era?.split('-')[1]?.trim() || "",
        "sameAs": [canonicalUrl]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": lang === 'ar' ? 'الرئيسية' : 'Accueil',
            "item": "https://jardin-des-pensees.onrender.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": lang === 'ar' ? 'المفكرون' : 'Penseurs',
            "item": "https://jardin-des-pensees.onrender.com/thinkers/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": thinker.name,
            "item": canonicalUrl
          }
        ]
      }
    ]
  });
  document.head.appendChild(script);
}

// ==========================================================================
// THINKER MODAL CONTROLLER
// ==========================================================================

window.openThinkerModalById = function(idOrSlug) {
  if (!idOrSlug) return;
  
  const cleanId = idOrSlug.replace(/\.html$/i, '').trim().toLowerCase();
  const thinkersList = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].thinkers) || [];
  
  const thinker = thinkersList.find(t => t.id.toLowerCase() === cleanId || t.name.toLowerCase() === cleanId) || thinkersList[0];
  if (!thinker) return;

  activeThinkerId = thinker.id;

  const modal = document.getElementById('thinkerModal');
  const root = document.getElementById('magazineThinkerRoot');
  if (!modal || !root) return;

  // Build complete editorial HTML
  root.innerHTML = `
    ${renderThinkerBreadcrumb(thinker, currentLang)}
    ${renderThinkerHero(thinker, currentLang)}
    ${renderThinkerMobileToc(thinker, currentLang)}
    
    <div class="thinker-premium-layout">
      ${renderThinkerToc(thinker, currentLang)}
      <main class="thinker-premium-main-content">
        ${renderThinkerIntro(thinker, currentLang)}
        ${renderThinkerBiography(thinker, currentLang)}
        ${renderThinkerHistoricalContext(thinker, currentLang)}
        ${renderThinkerIdeas(thinker, currentLang)}
        ${renderThinkerConcepts(thinker, currentLang)}
        ${renderThinkerWorks(thinker, currentLang)}
        ${renderThinkerInfluence(thinker, currentLang)}
        ${renderThinkerQuotes(thinker, currentLang)}
        ${renderThinkerTriviaAndReflection(thinker, currentLang)}
        ${renderThinkerLessons(thinker, currentLang)}
        ${renderThinkerTimeline(thinker, currentLang)}
        ${renderThinkerRecommendations(thinker, currentLang)}
      </main>
    </div>
  `;

  // Update URL search parameters without page reload
  const url = new URL(window.location.href);
  url.searchParams.set('thinker', thinker.id);
  url.searchParams.delete('bio');
  url.searchParams.delete('id');
  window.history.pushState({}, '', url);

  // Update Dynamic SEO
  updateThinkerSeo(thinker, currentLang);

  // Open Modal & Reset Scroll
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  const scrollContainer = modal.querySelector('.reader-scroll-container');
  if (scrollContainer) scrollContainer.scrollTop = 0;

  // Setup TOC Active Spy
  setupTocSpy(scrollContainer);
};

window.closeThinkerModal = function() {
  const modal = document.getElementById('thinkerModal');
  if (modal) modal.classList.remove('active');
  
  document.body.style.overflow = '';
  activeThinkerId = null;

  // Reset URL
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete('thinker');
  cleanUrl.searchParams.delete('bio');
  cleanUrl.searchParams.delete('id');
  window.history.pushState({}, '', cleanUrl);

  // Restore Title
  document.title = (THINKERS_PAGE_TRANSLATIONS[currentLang] && THINKERS_PAGE_TRANSLATIONS[currentLang].pageTitle) || "Penseurs & Philosophes";
};

// Sticky Table of Contents Active Section Spy
function setupTocSpy(scrollContainer) {
  if (!scrollContainer) return;
  
  const links = document.querySelectorAll('.thinker-premium-nav-link');
  const sections = document.querySelectorAll('.thinker-premium-section, .thinker-premium-hero-card, .thinker-premium-split-2col');
  
  scrollContainer.addEventListener('scroll', () => {
    let currentId = '';
    const containerTop = scrollContainer.getBoundingClientRect().top;

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top - containerTop <= 180 && rect.bottom - containerTop >= 50) {
        currentId = sec.id;
      }
    });

    if (currentId) {
      links.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

// User Actions Handlers
window.handleShareThinker = function(thinkerId) {
  const shareUrl = `${window.location.origin}/thinkers/?thinker=${thinkerId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      const msg = (THINKERS_PAGE_TRANSLATIONS[currentLang] && THINKERS_PAGE_TRANSLATIONS[currentLang].shareToast) || "Lien copié !";
      showToast(msg);
    });
  } else {
    showToast(shareUrl);
  }
};

window.handleSaveThinker = function(thinkerId) {
  try {
    const saved = JSON.parse(localStorage.getItem('saved_thinkers') || '[]');
    if (!saved.includes(thinkerId)) {
      saved.push(thinkerId);
      localStorage.setItem('saved_thinkers', JSON.stringify(saved));
    }
    const msg = (THINKERS_PAGE_TRANSLATIONS[currentLang] && THINKERS_PAGE_TRANSLATIONS[currentLang].saveToast) || "Enregistré !";
    showToast(msg);
  } catch (e) {
    showToast("Enregistré !");
  }
};

// --- Initialization ---
function initThinkersApp() {
  initTheme();
  initLanguageSelector(); // calls setLanguage & populateThinkers

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      populateThinkers(currentCategory, currentSearch);
    });
  }

  // Modal Close Listeners
  const closeBtn = document.getElementById('thinkerModalCloseBtn');
  if (closeBtn) closeBtn.onclick = window.closeThinkerModal;

  const modal = document.getElementById('thinkerModal');
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal || e.target.classList.contains('reader-scroll-container')) {
        window.closeThinkerModal();
      }
    };
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      window.closeThinkerModal();
    }
  });

  // Check URL parameters on initial load
  const urlParams = new URLSearchParams(window.location.search);
  const initialParam = urlParams.get('thinker') || urlParams.get('bio') || urlParams.get('id');

  if (initialParam && initialParam.toLowerCase() !== 'all') {
    setTimeout(() => {
      window.openThinkerModalById(initialParam);
    }, 100);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThinkersApp);
} else {
  initThinkersApp();
}
