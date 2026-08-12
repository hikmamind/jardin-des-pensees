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
let activeTheme = localStorage.getItem('theme') || 'dark';
let currentWisdomIndex = -1;
let activeQuoteId = null;

// Localized UI Dictionary for Quotes
const QUOTES_PAGE_TRANSLATIONS = {
  fr: {
    pageTitle: "Citations & Pensées Philosophiques | Hikma & Nour",
    pageDesc: "Explorez les plus grandes citations et méditations philosophiques d'Épictète, Nietzsche, Marc Aurèle, Socrate et bien d'autres.",
    breadcrumbHome: "Accueil",
    breadcrumbQuotes: "Citations",
    meaningTitle: "Signification de la citation",
    philosophyTitle: "Interprétation philosophique",
    lessonsTitle: "Ce qu'il faut retenir",
    applicationTitle: "Comment appliquer cette pensée aujourd'hui ?",
    reflectionTitle: "Question pour méditer",
    similarQuoteTitle: "Citation similaire",
    moreQuotesByAuthor: "Autres pensées du même auteur",
    authorHubDiscover: "Découvrir la pensée de",
    authorHubDesc: "Explorez sa biographie complète, ses grandes œuvres et son système philosophique.",
    authorHubBtn: "Voir la fiche du penseur →",
    navPrev: "← Citation précédente",
    navNext: "Citation suivante →",
    navRandom: "🎲 Citation aléatoire",
    calendarTitle: "365 Jours de Sagesse",
    calendarDesc: "Découvrez notre calendrier philosophique quotidien complet.",
    calendarBtn: "Ouvrir le calendrier →",
    relatedArticlesTitle: "Articles liés à cette pensée",
    readArticleBtn: "Lire l'article →",
    shareToast: "Citation copiée dans le presse-papier !",
    saveToast: "Citation enregistrée dans vos favoris !",
    copyBtn: "Copier la citation",
    shareBtn: "Partager",
    saveBtn: "Enregistrer"
  },
  en: {
    pageTitle: "Quotes & Philosophical Thoughts | Hikma & Nour",
    pageDesc: "Explore timeless quotes and meditations from Epictetus, Nietzsche, Marcus Aurelius, Socrates, and more.",
    breadcrumbHome: "Home",
    breadcrumbQuotes: "Quotes",
    meaningTitle: "Meaning of the Quote",
    philosophyTitle: "Philosophical Interpretation",
    lessonsTitle: "Key Takeaways",
    applicationTitle: "How to Apply This Wisdom Today?",
    reflectionTitle: "Question for Reflection",
    similarQuoteTitle: "Similar Quote",
    moreQuotesByAuthor: "More thoughts by this thinker",
    authorHubDiscover: "Discover the philosophy of",
    authorHubDesc: "Explore their full biography, major works, and philosophical system.",
    authorHubBtn: "View Thinker Dossier →",
    navPrev: "← Previous Quote",
    navNext: "Next Quote →",
    navRandom: "🎲 Random Quote",
    calendarTitle: "365 Days of Wisdom",
    calendarDesc: "Discover our comprehensive daily philosophical calendar.",
    calendarBtn: "Open Calendar →",
    relatedArticlesTitle: "Articles Related to This Insight",
    readArticleBtn: "Read Article →",
    shareToast: "Quote copied to clipboard!",
    saveToast: "Quote saved to bookmarks!",
    copyBtn: "Copy Quote",
    shareBtn: "Share",
    saveBtn: "Save"
  },
  ar: {
    pageTitle: "حكمة ونور | درر الاقتباسات وحكم الفلاسفة الخالدة",
    pageDesc: "استكشف أعمق الأقوال والاقتباسات الفلسفية لإبيكتيتوس، نيتشه، ماركوس أوريليوس، سقراط، وغيرهم من كبار الحكماء.",
    breadcrumbHome: "الرئيسية",
    breadcrumbQuotes: "اقتباسات",
    meaningTitle: "معنى الاقتباس وجوهره",
    philosophyTitle: "التفسير والرؤية الفلسفية",
    lessonsTitle: "ماذا نتعلم من هذه الحكمة؟",
    applicationTitle: "كيف تطبق هذه الفكرة في حياتك اليومية؟",
    reflectionTitle: "سؤال للتأمل والتدبر الداخلي",
    similarQuoteTitle: "اقتباس ذو صلة",
    moreQuotesByAuthor: "أقوال أخرى لنفس المفكر",
    authorHubDiscover: "اكتشف فلسفة وفكر",
    authorHubDesc: "اقرأ السيرة الفكرية الكاملة، مؤلفاته الخالدة، ومدرسته الفلسفية.",
    authorHubBtn: "قراءة سيرة الفيلسوف ←",
    navPrev: "← الاقتباس السابق",
    navNext: "الاقتباس التالي →",
    navRandom: "🎲 حكمة عشوائية",
    calendarTitle: "365 يوماً من الحكمة اليومية",
    calendarDesc: "اكتشف تقويم الحكمة الفلسفي وتأمل كل يوم فكرة تنير دربك.",
    calendarBtn: "استكشف التقويم الكامل ←",
    relatedArticlesTitle: "مقالات فلسفية مرتبطة بهذه الفكرة",
    readArticleBtn: "قراءة المقال ←",
    shareToast: "تم نسخ الاقتباس بنجاح!",
    saveToast: "تم حفظ الاقتباس في المفضلة!",
    copyBtn: "نسخ الاقتباس",
    shareBtn: "مشاركة",
    saveBtn: "حفظ"
  }
};

// --- Theme Manager ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', activeTheme);
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (activeTheme === 'light') {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  } else {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  }
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener('click', () => {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', activeTheme);
    initTheme();
  });
}

// --- Navigation Hamburger ---
function setupHamburger() {
  const hamburger = document.getElementById('navHamburger');
  const navMenu = document.getElementById('navMenu');
  let navOverlay = document.getElementById('navOverlay');

  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.id = 'navOverlay';
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
  }

  if (!hamburger || !navMenu) return;

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isActive = navMenu.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      hamburger.classList.add('active');
      navMenu.classList.add('active');
      if (navOverlay) navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  hamburger.onclick = function(e) {
    e.stopPropagation();
    toggleMenu();
  };

  if (navOverlay) {
    navOverlay.onclick = closeMenu;
  }

  const links = navMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// --- Language Controller ---
export function setLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = (LANG_METADATA[lang] && LANG_METADATA[lang].dir) || (lang === 'ar' ? 'rtl' : 'ltr');

  const activeLangName = document.getElementById('activeLangName');
  if (activeLangName) activeLangName.textContent = (LANG_METADATA[lang] && LANG_METADATA[lang].label) || "العربية";

  const options = document.querySelectorAll('.lang-opt');
  options.forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Static strings translation
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  const breadcrumbHome = document.getElementById('breadcrumbHome');
  if (breadcrumbHome) {
    breadcrumbHome.textContent = lang === 'ar' ? 'الرئيسية' : lang === 'en' ? 'Home' : 'Accueil';
  }

  // Refresh page gallery & wisdom card
  displayNewWisdom(true);
  renderAllQuotes();

  // If a quote modal is currently open, instantly re-render in the target language!
  const modal = document.getElementById('quoteModal');
  if (modal && modal.classList.contains('active') && activeQuoteId) {
    openQuoteModal(activeQuoteId);
  } else if (!modal || !modal.classList.contains('active')) {
    document.title = (QUOTES_PAGE_TRANSLATIONS[lang] && QUOTES_PAGE_TRANSLATIONS[lang].pageTitle) || "Citations | Hikma & Nour";
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

// --- Toast Notification Helper ---
function showToast(msg) {
  let toast = document.getElementById('magazineToast') || document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'magazineToast';
    toast.className = 'mag-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.remove('active');
  }, 2800);
}

// --- Dynamic Wisdom generator ---
function displayNewWisdom(immediate = false) {
  const textEl = document.getElementById('wisdomText');
  const authorEl = document.getElementById('wisdomAuthor');
  if (!textEl || !authorEl) return;

  const quotes = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].quotes) || [];
  if (quotes.length === 0) return;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * quotes.length);
  } while (nextIndex === currentWisdomIndex && quotes.length > 1);

  currentWisdomIndex = nextIndex;
  const quote = quotes[currentWisdomIndex];

  if (immediate) {
    textEl.textContent = `"${quote.text}"`;
    authorEl.textContent = `— ${quote.author}`;
  } else {
    textEl.style.opacity = '0';
    authorEl.style.opacity = '0';
    setTimeout(() => {
      textEl.textContent = `"${quote.text}"`;
      authorEl.textContent = `— ${quote.author}`;
      textEl.style.opacity = '1';
      authorEl.style.opacity = '1';
    }, 250);
  }
}

// --- Quotes Grid Populator ---
function renderAllQuotes() {
  const container = document.getElementById('quotesGridContainer');
  if (!container) return;

  const quotes = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].quotes) || [];
  if (quotes.length === 0) return;

  const html = quotes.map((q, index) => {
    const authorImg = q.image ? (q.image.startsWith('../') ? q.image : `../${q.image}`) : '../featured_philosopher.jpg';
    const quoteKey = q.id || index;

    return `
      <div class="quote-item-card" data-quote-ref="${quoteKey}" style="cursor: pointer;" onclick="window.openQuoteModal('${quoteKey}')">
        <span class="quote-card-ornament">❝</span>
        <p class="quote-item-text">"${q.text}"</p>
        <div class="quote-item-footer">
          <div class="quote-author-info">
            <img src="${authorImg}" class="quote-author-img" alt="${q.author}" loading="lazy" onerror="this.src='../featured_philosopher.jpg'">
            <span class="quote-author-name">${q.author}</span>
          </div>
          <div class="quote-actions">
            <button type="button" class="quote-action-btn copy-btn" title="${currentLang === 'ar' ? 'نسخ الاقتباس' : 'Copier la citation'}" onclick="event.stopPropagation(); window.handleCopyQuote('${quoteKey}');">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
            <button type="button" class="quote-action-btn share-btn" title="${currentLang === 'ar' ? 'مشاركة الاقتباس' : 'Partager la citation'}" onclick="event.stopPropagation(); window.handleShareQuote('${quoteKey}');">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

// ==========================================================================
// CENTRAL QUOTE RESOLVER
// ==========================================================================

export function findQuoteByIndexOrId(value, language = currentLang) {
  if (value === null || value === undefined) return null;

  const quotes = (TIKTOK_DATA.content[language] && TIKTOK_DATA.content[language].quotes) || [];
  if (quotes.length === 0) return null;

  const strValue = String(value).trim().toLowerCase();

  // 1. Numeric index match
  if (/^\d+$/.test(strValue)) {
    const idx = parseInt(strValue, 10);
    if (idx >= 0 && idx < quotes.length) {
      return { quote: quotes[idx], index: idx };
    }
  }

  // 2. Canonical ID match in current language
  let foundIndex = quotes.findIndex(q => q.id && q.id.toLowerCase() === strValue);
  if (foundIndex !== -1) {
    return { quote: quotes[foundIndex], index: foundIndex };
  }

  // 3. Fallback: Search across all languages to find matching canonical ID then resolve in current language
  const allLangs = ['ar', 'fr', 'en'];
  for (const l of allLangs) {
    const otherQuotes = (TIKTOK_DATA.content[l] && TIKTOK_DATA.content[l].quotes) || [];
    const idxInOther = otherQuotes.findIndex(q => q.id && q.id.toLowerCase() === strValue);
    if (idxInOther !== -1) {
      // If found in another language, map by index or ID to current language
      if (idxInOther < quotes.length) {
        return { quote: quotes[idxInOther], index: idxInOther };
      }
    }
  }

  return null;
}

// ==========================================================================
// MODULAR RENDER FUNCTIONS FOR QUOTES PREMIUM READER
// ==========================================================================

function renderQuoteBreadcrumb(quote, index, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const authorNameOnly = quote.author.split('(')[0].trim();
  
  return `
    <nav class="reader-breadcrumbs" aria-label="Fil d’Ariane">
      <a href="../" style="color: inherit; text-decoration: none;">${t.breadcrumbHome}</a> &rsaquo; 
      <a href="./" style="color: inherit; text-decoration: none;" onclick="window.closeQuoteModal();">${t.breadcrumbQuotes}</a> &rsaquo; 
      <span style="color: var(--accent-gold); font-weight: 700;">${authorNameOnly}</span>
    </nav>
  `;
}

function renderQuoteHero(quote, index, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const authorImg = quote.image ? (quote.image.startsWith('../') ? quote.image : `../${quote.image}`) : '../featured_philosopher.jpg';
  
  // Parse author and school
  const parts = quote.author.split('(');
  const authorName = parts[0].trim();
  const schoolName = parts[1] ? parts[1].replace(')', '').trim() : '';

  const quoteKey = quote.id || index;

  return `
    <div class="quote-premium-hero">
      <div class="quote-premium-portrait-wrap">
        <img src="${authorImg}" alt="${quote.author}" class="quote-premium-portrait-img" loading="lazy" onerror="this.src='../featured_philosopher.jpg'">
      </div>
      <div class="quote-premium-quote-content">
        <span class="quote-premium-symbol">❝</span>
        <h1 class="quote-premium-text">"${quote.text}"</h1>
        
        <div class="quote-premium-author-bar">
          <span class="quote-premium-author-name">— ${authorName}</span>
          ${schoolName ? `<span class="quote-premium-badge">🏛️ ${schoolName}</span>` : ''}
        </div>

        <div class="quote-premium-actions">
          <button type="button" class="btn-save-later" onclick="window.handleSaveQuote('${quoteKey}');" aria-label="${t.saveBtn}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            <span>${t.saveBtn}</span>
          </button>
          <button type="button" class="btn-save-later" onclick="window.handleCopyQuote('${quoteKey}');" aria-label="${t.copyBtn}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>${t.copyBtn}</span>
          </button>
          <button type="button" class="btn-save-later" onclick="window.handleShareQuote('${quoteKey}');" aria-label="${t.shareBtn}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            <span>${t.shareBtn}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderQuoteMeaningAndPhilosophy(quote, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const meaning = quote.meaning || (lang === 'ar' ? 'تأمل رصين في المعنى العميق والحكمة من وراء هذه الكلمات.' : 'Réflexion profonde sur la portée et le sens de ces paroles.');
  const philosophy = quote.philosophy || quote.explanation || (lang === 'ar' ? 'تستند هذه الرؤية إلى المبادئ الفلسفية الكبرى للارتقاء بالعقل وتحقيق التوازن النفسي.' : 'Cette maxime repose sur les fondements éthiques et rationnels de la tradition philosophique.');

  return `
    <div class="quote-premium-grid-2col">
      <div class="quote-premium-section" style="margin-bottom: 0;">
        <div class="quote-premium-section-header">
          <span class="quote-premium-section-icon">💡</span>
          <h2 class="quote-premium-section-title">${t.meaningTitle}</h2>
        </div>
        <p class="quote-premium-prose">${meaning}</p>
      </div>

      <div class="quote-premium-section" style="margin-bottom: 0;">
        <div class="quote-premium-section-header">
          <span class="quote-premium-section-icon">📖</span>
          <h2 class="quote-premium-section-title">${t.philosophyTitle}</h2>
        </div>
        <p class="quote-premium-prose">${philosophy}</p>
      </div>
    </div>
  `;
}

function renderQuoteLessons(quote, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  let lessons = quote.lessons;

  if (!lessons || lessons.length === 0) {
    lessons = [
      lang === 'ar' ? 'تحمل المسؤولية الكاملة عن أفكارك واستجاباتك.' : 'Assumer la pleine responsabilité de ses jugements et réactions.',
      lang === 'ar' ? 'البحث عن الحكمة والهدوء الداخلي في مواجهة التحديات.' : 'Cultiver la sérénité et la maîtrise de soi.',
      lang === 'ar' ? 'التركيز على ما يخضع لسيطرتك وإرادتك الحرة.' : 'Se concentrer uniquement sur ce qui dépend de notre volonté.',
      lang === 'ar' ? 'تطبيق الفلسفة كمنهاج حياة يومي وليس مجرد نظريات.' : 'Faire de la philosophie une pratique quotidienne vivante.'
    ];
  }

  const itemsHtml = lessons.map(lesson => `
    <li class="quote-premium-lesson-item">
      <span class="quote-premium-lesson-check">✓</span>
      <span>${lesson}</span>
    </li>
  `).join('');

  return `
    <section class="quote-premium-section">
      <div class="quote-premium-section-header">
        <span class="quote-premium-section-icon">🌱</span>
        <h2 class="quote-premium-section-title">${t.lessonsTitle}</h2>
      </div>
      <ul class="quote-premium-lessons-list">
        ${itemsHtml}
      </ul>
    </section>
  `;
}

function renderQuoteApplicationAndReflection(quote, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const appText = quote.application || (lang === 'ar' 
    ? 'توقف لدقيقة واحدة قبل اتخاذ أي رد فعل متسرع، وتذكر أن هدوءك الداخلي هو أثمن ما تملك.' 
    : 'Prenez un instant de recul face aux aléas quotidiens et demandez-vous comment agir avec sagesse.');
    
  const refText = quote.reflection || quote.reflectionQuestion || (lang === 'ar'
    ? 'كيف يمكنك تطبيق هذا المعنى اليوم لإعادة ترتيب أولوياتك والتحرر من الضغوط غير المجدية؟'
    : 'Comment cette pensée peut-elle vous aider à surmonter les obstacles actuels ?');

  return `
    <div class="quote-premium-grid-2col">
      <div class="quote-premium-section" style="margin-bottom: 0;">
        <div class="quote-premium-section-header">
          <span class="quote-premium-section-icon">🧠</span>
          <h2 class="quote-premium-section-title" style="font-size: 1.25rem;">${t.applicationTitle}</h2>
        </div>
        <p class="quote-premium-prose" style="font-size: 0.96rem;">${appText}</p>
      </div>

      <div class="quote-premium-section" style="margin-bottom: 0;">
        <div class="quote-premium-section-header">
          <span class="quote-premium-section-icon">❓</span>
          <h2 class="quote-premium-section-title" style="font-size: 1.25rem;">${t.reflectionTitle}</h2>
        </div>
        <p class="quote-premium-prose" style="font-size: 0.96rem;">${refText}</p>
      </div>
    </div>
  `;
}

function renderQuoteSimilar(quote, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  if (!quote.similarQuote || !quote.similarQuote.text) return '';

  const sim = quote.similarQuote;
  const quotesList = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].quotes) || [];
  
  // Find matching quote in DB if exists
  const matched = quotesList.find(q => 
    q.text.toLowerCase().includes(sim.text.toLowerCase().substring(0, 20)) ||
    sim.text.toLowerCase().includes(q.text.toLowerCase().substring(0, 20))
  );

  const clickAction = matched ? `onclick="window.openQuoteModal('${matched.id || quotesList.indexOf(matched)}');"` : '';
  const cursorStyle = matched ? 'style="cursor: pointer;"' : '';

  return `
    <section class="quote-premium-section" ${cursorStyle} ${clickAction}>
      <div class="quote-premium-section-header">
        <span class="quote-premium-section-icon">🔗</span>
        <h2 class="quote-premium-section-title">${t.similarQuoteTitle}</h2>
      </div>
      <div class="thinker-premium-hero-quote" style="margin-bottom: 0;">
        "${sim.text}"
        <div style="font-size: 0.88rem; font-weight: 700; color: #DFB15B; margin-top: 8px; font-style: normal;">— ${sim.author}</div>
      </div>
    </section>
  `;
}

function renderQuoteAuthorHub(quote, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const allThinkers = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].thinkers) || [];
  
  const rawAuthor = quote.author.split('(')[0].trim().toLowerCase();
  
  // Find matching thinker in thinkers list
  const thinker = allThinkers.find(th => 
    th.name.toLowerCase().includes(rawAuthor) ||
    rawAuthor.includes(th.name.toLowerCase()) ||
    th.id.toLowerCase() === rawAuthor
  );

  if (!thinker) return '';

  const thinkerImg = thinker.image ? (thinker.image.startsWith('../') ? thinker.image : `../${thinker.image}`) : '../featured_philosopher.jpg';

  return `
    <div class="quote-premium-author-hub">
      <div class="quote-premium-author-hub-left">
        <img src="${thinkerImg}" alt="${thinker.name}" class="quote-premium-author-hub-avatar" onerror="this.src='../featured_philosopher.jpg'">
        <div>
          <h3 class="quote-premium-author-hub-title">${t.authorHubDiscover} ${thinker.name}</h3>
          <p class="quote-premium-author-hub-desc">${thinker.bio}</p>
        </div>
      </div>
      <a href="../thinkers/?thinker=${thinker.id}" class="quote-premium-author-hub-btn">
        <span>${t.authorHubBtn}</span>
      </a>
    </div>
  `;
}

function renderMoreQuotesByAuthor(quote, currentIndex, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const quotesList = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].quotes) || [];
  
  const rawAuthor = quote.author.split('(')[0].trim().toLowerCase();

  // Find other quotes by same author (excluding current)
  const others = quotesList
    .map((q, idx) => ({ quote: q, index: idx }))
    .filter(item => {
      const itemAuthor = item.quote.author.split('(')[0].trim().toLowerCase();
      return (itemAuthor.includes(rawAuthor) || rawAuthor.includes(itemAuthor)) && item.index !== currentIndex;
    })
    .slice(0, 3);

  if (others.length === 0) return '';

  const cardsHtml = others.map(item => `
    <div class="quote-premium-mini-card" onclick="window.openQuoteModal('${item.quote.id || item.index}')">
      <p class="quote-premium-mini-text">"${item.quote.text}"</p>
      <span class="quote-premium-mini-author">— ${item.quote.author}</span>
    </div>
  `).join('');

  return `
    <section class="quote-premium-section">
      <div class="quote-premium-section-header">
        <span class="quote-premium-section-icon">📜</span>
        <h2 class="quote-premium-section-title">${t.moreQuotesByAuthor}</h2>
      </div>
      <div class="quote-premium-more-grid">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderQuoteNavigation(currentIndex, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const quotesList = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].quotes) || [];
  const total = quotesList.length;

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : total - 1;
  const nextIndex = currentIndex < total - 1 ? currentIndex + 1 : 0;
  
  const prevQuote = quotesList[prevIndex];
  const nextQuote = quotesList[nextIndex];

  const prevKey = prevQuote ? (prevQuote.id || prevIndex) : prevIndex;
  const nextKey = nextQuote ? (nextQuote.id || nextIndex) : nextIndex;

  return `
    <div class="quote-premium-nav-bar">
      <button type="button" class="quote-premium-nav-btn" onclick="window.openQuoteModal('${prevKey}')" aria-label="${t.navPrev}">
        <span>${t.navPrev}</span>
      </button>

      <button type="button" class="quote-premium-nav-btn random-btn" onclick="window.openRandomQuote();" aria-label="${t.navRandom}">
        <span>${t.navRandom}</span>
      </button>

      <button type="button" class="quote-premium-nav-btn" onclick="window.openQuoteModal('${nextKey}')" aria-label="${t.navNext}">
        <span>${t.navNext}</span>
      </button>
    </div>
  `;
}

function renderQuoteCalendarCta(lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];

  return `
    <div class="quotes-calendar-cta" style="margin: 25px 0 35px; background: linear-gradient(135deg, rgba(223, 177, 91, 0.12), rgba(18, 26, 21, 0.95)); border: 1px solid var(--accent-gold); border-radius: 20px; padding: 26px 22px; box-shadow: 0 10px 30px var(--shadow-color); text-align: center;">
      <div style="max-width: 650px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <span style="font-size: 0.82rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">📅 ${t.calendarTitle}</span>
        <h3 style="font-size: 1.35rem; font-family: 'Playfair Display', 'Amiri', serif; color: var(--text-primary); margin: 0;">${t.calendarTitle}</h3>
        <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">${t.calendarDesc}</p>
        <a href="calendar/" style="margin-top: 8px; background: linear-gradient(135deg, var(--accent-gold), #B38A3C); color: #0D1410; padding: 9px 24px; border-radius: 24px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-size: 0.9rem;">
          <span>${t.calendarBtn}</span>
        </a>
      </div>
    </div>
  `;
}

function renderQuoteRelatedArticles(quote, lang) {
  const t = QUOTES_PAGE_TRANSLATIONS[lang] || QUOTES_PAGE_TRANSLATIONS['fr'];
  const allArticles = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].articles) || [];
  
  if (allArticles.length === 0) return '';

  const rawAuthor = quote.author.split('(')[0].trim().toLowerCase();
  
  // Sort articles prioritizing author match
  const sortedArticles = [...allArticles].sort((a, b) => {
    const aMatch = (a.title + a.category).toLowerCase().includes(rawAuthor);
    const bMatch = (b.title + b.category).toLowerCase().includes(rawAuthor);
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });

  const selected = sortedArticles.slice(0, 3);

  const articlesHtml = selected.map(art => {
    const artImg = art.image ? (art.image.startsWith('../') ? art.image : `../${art.image}`) : '../main_home_hd_bg.jpg';
    return `
      <a href="../articles/?article=${art.file || art.id}" class="magazine-related-card" style="text-decoration: none;">
        <img src="${artImg}" alt="${art.title}" class="magazine-related-card-img" onerror="this.src='../main_home_hd_bg.jpg'">
        <div class="magazine-related-card-content">
          <span style="color: var(--accent-green); font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">${art.categoryName || art.category}</span>
          <h4 class="magazine-related-card-title">${art.title}</h4>
          <span class="magazine-related-card-meta">${t.readArticleBtn}</span>
        </div>
      </a>
    `;
  }).join('');

  return `
    <section class="quote-premium-section">
      <div class="quote-premium-section-header">
        <span class="quote-premium-section-icon">📚</span>
        <h2 class="quote-premium-section-title">${t.relatedArticlesTitle}</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px;">
        ${articlesHtml}
      </div>
    </section>
  `;
}

// --- Dynamic SEO Updater ---
function updateQuoteSeo(quote, lang) {
  const shortText = quote.text.length > 55 ? `${quote.text.substring(0, 55)}...` : quote.text;
  const authorClean = quote.author.split('(')[0].trim();
  const pageTitle = `« ${shortText} » — ${authorClean} | Hikma & Nour`;
  const metaDesc = quote.meaning || quote.philosophy || quote.text;
  const canonicalId = quote.id || '0';
  const canonicalUrl = `https://jardin-des-pensees.onrender.com/quotes/?quote=${canonicalId}`;
  const imgUrl = quote.image ? `https://jardin-des-pensees.onrender.com/${quote.image}` : `https://jardin-des-pensees.onrender.com/brand_logo_official.png`;

  document.title = pageTitle;

  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.name = "description";
    document.head.appendChild(descTag);
  }
  descTag.content = metaDesc;

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.href = canonicalUrl;

  // JSON-LD Quotation & BreadcrumbList
  const oldJsonLd = document.getElementById('quoteJsonLd');
  if (oldJsonLd) oldJsonLd.remove();

  const script = document.createElement('script');
  script.id = 'quoteJsonLd';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Quotation",
        "text": quote.text,
        "creator": {
          "@type": "Person",
          "name": authorClean,
          "image": imgUrl
        },
        "inLanguage": lang,
        "url": canonicalUrl
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
            "name": lang === 'ar' ? 'اقتباسات' : 'Citations',
            "item": "https://jardin-des-pensees.onrender.com/quotes/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": authorClean,
            "item": canonicalUrl
          }
        ]
      }
    ]
  });
  document.head.appendChild(script);
}

// ==========================================================================
// QUOTE READER MODAL CONTROLLER
// ==========================================================================

window.openQuoteModal = function(indexOrId) {
  const resolved = findQuoteByIndexOrId(indexOrId, currentLang);
  if (!resolved) {
    console.warn(`Quote not found for ref: ${indexOrId}`);
    return;
  }

  const { quote, index } = resolved;
  activeQuoteId = quote.id || index;

  const modal = document.getElementById('quoteModal');
  const root = document.getElementById('magazineQuoteRoot');
  if (!modal || !root) return;

  // Render complete premium template
  root.innerHTML = `
    ${renderQuoteBreadcrumb(quote, index, currentLang)}
    ${renderQuoteHero(quote, index, currentLang)}
    ${renderQuoteMeaningAndPhilosophy(quote, currentLang)}
    ${renderQuoteLessons(quote, currentLang)}
    ${renderQuoteApplicationAndReflection(quote, currentLang)}
    ${renderQuoteSimilar(quote, currentLang)}
    ${renderQuoteAuthorHub(quote, currentLang)}
    ${renderMoreQuotesByAuthor(quote, index, currentLang)}
    ${renderQuoteNavigation(index, currentLang)}
    ${renderQuoteRelatedArticles(quote, currentLang)}
    ${renderQuoteCalendarCta(currentLang)}
  `;

  // Update browser URL query parameter with stable canonical ID
  const url = new URL(window.location.href);
  url.searchParams.set('quote', quote.id || index);
  window.history.pushState({}, '', url);

  // Update Dynamic SEO
  updateQuoteSeo(quote, currentLang);

  // Show Modal & Disable Background Scroll
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const scrollContainer = modal.querySelector('.reader-scroll-container');
  if (scrollContainer) scrollContainer.scrollTop = 0;
};

window.closeQuoteModal = function() {
  const modal = document.getElementById('quoteModal');
  if (modal) modal.classList.remove('active');

  document.body.style.overflow = '';
  activeQuoteId = null;

  // Clean URL
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete('quote');
  window.history.pushState({}, '', cleanUrl);

  // Restore Default Title
  document.title = (QUOTES_PAGE_TRANSLATIONS[currentLang] && QUOTES_PAGE_TRANSLATIONS[currentLang].pageTitle) || "Citations | Hikma & Nour";
};

window.openRandomQuote = function() {
  const quotesList = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].quotes) || [];
  if (quotesList.length === 0) return;
  const randIdx = Math.floor(Math.random() * quotesList.length);
  const q = quotesList[randIdx];
  window.openQuoteModal(q.id || randIdx);
};

// User Actions Handlers
window.handleCopyQuote = function(quoteRef) {
  const resolved = findQuoteByIndexOrId(quoteRef, currentLang);
  if (!resolved) return;
  const { quote } = resolved;
  
  const shareUrl = `${window.location.origin}/quotes/?quote=${quote.id || resolved.index}`;
  const textToCopy = `« ${quote.text} » — ${quote.author}\n\n${shareUrl}`;
  const toastMsg = (QUOTES_PAGE_TRANSLATIONS[currentLang] && QUOTES_PAGE_TRANSLATIONS[currentLang].shareToast) || "Copié !";

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(toastMsg);
    }).catch(() => {
      showToast(toastMsg);
    });
  } else {
    showToast(toastMsg);
  }
};

window.handleSaveQuote = function(quoteRef) {
  const resolved = findQuoteByIndexOrId(quoteRef, currentLang);
  if (!resolved) return;
  const { quote } = resolved;
  const key = quote.id || String(resolved.index);

  try {
    const saved = JSON.parse(localStorage.getItem('hikma_saved_quotes') || '[]');
    if (!saved.includes(key)) {
      saved.push(key);
      localStorage.setItem('hikma_saved_quotes', JSON.stringify(saved));
    }
    const toastMsg = (QUOTES_PAGE_TRANSLATIONS[currentLang] && QUOTES_PAGE_TRANSLATIONS[currentLang].saveToast) || "Enregistré !";
    showToast(toastMsg);
  } catch (e) {
    showToast("Enregistré !");
  }
};

window.handleShareQuote = function(quoteRef) {
  const resolved = findQuoteByIndexOrId(quoteRef, currentLang);
  if (!resolved) return;
  const { quote } = resolved;
  const shareUrl = `${window.location.origin}/quotes/?quote=${quote.id || resolved.index}`;
  const shareText = `« ${quote.text} » — ${quote.author}`;

  if (navigator.share) {
    navigator.share({
      title: quote.author,
      text: shareText,
      url: shareUrl
    }).catch(() => {});
  } else {
    window.handleCopyQuote(quoteRef);
  }
};

// --- Initialization ---
function initQuotesApp() {
  setupHamburger();
  initTheme();
  setupThemeToggle();
  initLanguageSelector(); // calls setLanguage, displayNewWisdom & renderAllQuotes

  const nextWisdomBtn = document.getElementById('nextWisdomBtn');
  if (nextWisdomBtn) {
    nextWisdomBtn.onclick = () => displayNewWisdom(false);
  }

  // Modal Close Listeners
  const closeBtn = document.getElementById('quoteModalCloseBtn');
  if (closeBtn) closeBtn.onclick = window.closeQuoteModal;

  const modal = document.getElementById('quoteModal');
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) {
        window.closeQuoteModal();
      }
    };
  }

  // Escape Key to Close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      window.closeQuoteModal();
    }
  });

  // Popstate Listener for browser Back/Forward navigation
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get('quote');
    if (param !== null && param.trim() !== '') {
      window.openQuoteModal(param);
    } else {
      window.closeQuoteModal();
    }
  });

  // Check URL parameter on initial load (?quote=0, ?quote=epictetus-things-and-judgments, etc.)
  const urlParams = new URLSearchParams(window.location.search);
  const quoteParam = urlParams.get('quote');
  if (quoteParam !== null && quoteParam.trim() !== '') {
    window.openQuoteModal(quoteParam);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuotesApp);
} else {
  initQuotesApp();
}
