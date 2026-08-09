import TIKTOK_DATA from '../data_v11.js';

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
let activeTheme = localStorage.getItem('theme') || 'dark';

let currentQuoteIndex = -1;
let activeQuoteIndex = null;

// Initialize Theme
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

// Setup theme toggle listener
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener('click', () => {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', activeTheme);
    initTheme();
  });
}

// Setup Hamburger Menu
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

// Initialize Languages & translations
function initLanguageSelector() {
  const activeLangName = document.getElementById('activeLangName');
  const langDropdown = document.getElementById('langDropdown');
  const langBtn = document.getElementById('langBtn');
  
  if (activeLangName) activeLangName.textContent = (LANG_METADATA[currentLang] && LANG_METADATA[currentLang].label) || "العربية";
  
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });
    
    const langOpts = langDropdown.querySelectorAll('.lang-opt');
    langOpts.forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedLang = opt.getAttribute('data-lang');
        currentLang = selectedLang;
        saveLanguage(currentLang);
        if (activeLangName) activeLangName.textContent = (LANG_METADATA[currentLang] && LANG_METADATA[currentLang].label) || "العربية";
        
        // Update active class
        langOpts.forEach(o => {
          if (o.getAttribute('data-lang') === currentLang) {
            o.classList.add('active');
          } else {
            o.classList.remove('active');
          }
        });
        
        // Apply document direction
        if (currentLang === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl');
          document.documentElement.setAttribute('lang', 'ar');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
          document.documentElement.setAttribute('lang', currentLang);
        }
        
        translatePage();
        displayNewWisdom(true);
        renderAllQuotes();

        // If quote modal is open, re-render in newly selected language!
        const modal = document.getElementById('quoteModal');
        if (modal && modal.classList.contains('active') && activeQuoteIndex !== null) {
          openQuoteModal(activeQuoteIndex);
        }
      });
    });
  }
  
  // Set initial direction
  if (currentLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }
  
  // Update active class on initial load
  if (langDropdown) {
    const langOpts = langDropdown.querySelectorAll('.lang-opt');
    langOpts.forEach(o => {
      if (o.getAttribute('data-lang') === currentLang) {
        o.classList.add('active');
      } else {
        o.classList.remove('active');
      }
    });
  }
  
  translatePage();
}

function translatePage() {
  const ui = TIKTOK_DATA.ui[currentLang];
  
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (ui[key]) {
      el.textContent = ui[key];
    }
  });

  const breadcrumbHome = document.getElementById('breadcrumbHome');
  if (breadcrumbHome) {
    breadcrumbHome.textContent = currentLang === 'ar' ? 'الرئيسية' : currentLang === 'en' ? 'Home' : 'Accueil';
  }
}

// --- Dynamic Wisdom generator ---
function displayNewWisdom(immediate = false) {
  const textEl = document.getElementById('wisdomText');
  const authorEl = document.getElementById('wisdomAuthor');
  if (!textEl || !authorEl) return;

  const quotes = TIKTOK_DATA.content[currentLang].quotes;
  if (!quotes || quotes.length === 0) return;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * quotes.length);
  } while (nextIndex === currentQuoteIndex && quotes.length > 1);

  currentQuoteIndex = nextIndex;
  const quote = quotes[currentQuoteIndex];

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
    }, 300);
  }
}

// --- Render All Quotes ---

function renderAllQuotes() {
  const container = document.getElementById('quotesGridContainer');
  if (!container) return;

  const quotes = TIKTOK_DATA.content[currentLang].quotes;
  if (!quotes || quotes.length === 0) return;

  const html = quotes.map((q, index) => {
    const authorImg = `../${q.image}` || '../thinkers/images/nietzsche.jpg';
    return `
      <div class="quote-item-card" data-quote-index="${index}" style="cursor: pointer;">
        <span class="quote-card-ornament">❝</span>
        <p class="quote-item-text">"${q.text}"</p>
        <div class="quote-item-footer">
          <div class="quote-author-info">
            <img src="${authorImg}" class="quote-author-img" alt="${q.author}">
            <span class="quote-author-name">${q.author}</span>
          </div>
          <div class="quote-actions">
            <button class="quote-action-btn copy-btn" data-index="${index}" title="${currentLang === 'ar' ? 'نسخ الاقتباس' : 'Copier la citation'}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
            <button class="quote-action-btn share-btn" data-index="${index}" title="${currentLang === 'ar' ? 'مشاركة الاقتباس' : 'Partager la citation'}">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  // Bind Card Click to open reader modal
  const cards = container.querySelectorAll('.quote-item-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.copy-btn') || e.target.closest('.share-btn')) {
        return;
      }
      const idx = parseInt(card.getAttribute('data-quote-index'), 10);
      openQuoteModal(idx);
    });
  });

  // Toast notification helper
  function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2500);
  }

  // Bind Copy Actions
  const copyButtons = container.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const q = quotes[idx];
      const textToCopy = `« ${q.text} » — ${q.author}`;
      const toastMsg = currentLang === 'ar' ? 'تم نسخ الاقتباس بنجاح!' : currentLang === 'en' ? 'Quote copied!' : 'Citation copiée !';
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(toastMsg);
      }).catch(err => {
        console.error("Clipboard copy failed: ", err);
      });
    });
  });

  // Bind Share Actions
  const shareButtons = container.querySelectorAll('.share-btn');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const q = quotes[idx];
      const shareText = `"${q.text}" — ${q.author}`;
      
      if (navigator.share) {
        navigator.share({
          title: q.author,
          text: shareText,
          url: window.location.href
        }).catch(err => console.log(err));
      } else {
        alert(shareText);
      }
    });
  });
}

// --- Quote Detail Modal Logic ---
function openQuoteModal(idx) {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const quotes = TIKTOK_DATA.content[currentLang].quotes;
  const quote = quotes[idx];
  if (!quote) return;

  // Fill in content with robust fallbacks
  document.getElementById('modalQuoteAuthorBreadcrumb').textContent = quote.author;
  document.getElementById('modalQuoteAuthorImage').src = quote.image ? `../${quote.image}` : '../brand_logo_official.png';
  document.getElementById('modalQuoteAuthorImage').alt = quote.author;
  document.getElementById('modalQuoteText').textContent = quote.text;
  document.getElementById('modalQuoteAuthor').textContent = `— ${quote.author}`;

  // Meaning
  const meaningText = quote.meaning || (currentLang === 'ar'
    ? `تأمل رصين في قول ${quote.author}: يذكرنا هذا المعنى بالحكمة الجوهرية والبحث عن السلام الداخلي والارتقاء بالنفس.`
    : currentLang === 'en'
    ? `A profound reflection on ${quote.author}'s wisdom, highlighting inner strength and intellectual clarity.`
    : `Une réflexion profonde sur la pensée de ${quote.author}, soulignant la sérénité et la clarté d'esprit.`);
  document.getElementById('modalQuoteMeaning').textContent = meaningText;

  // Philosophy / Interpretation
  const philosophyText = quote.philosophy || quote.explanation || (currentLang === 'ar'
    ? `تندرج هذه المقولة ضمن التراث الفلسفي الذي يدعو للتحكم في الانفعالات والتركيز على العقل والمنطق بدلاً من الانسياق وراء العواطف العابرة.`
    : currentLang === 'en'
    ? `This quote stems from philosophical traditions advocating rational control over emotional impulses and cultivation of virtue.`
    : `Cette citation s'inscrit dans la tradition philosophique prônant la maîtrise des impulsions et le développement de la vertu.`);
  document.getElementById('modalQuotePhilosophy').textContent = philosophyText;

  // Lessons list mapping
  const lessonsArray = (quote.lessons && quote.lessons.length > 0) ? quote.lessons : [
    currentLang === 'ar' ? 'التحكم في الاستجابة الذهنية للأحداث.' : currentLang === 'en' ? 'Mastery of your mental response.' : 'Maîtrise de la réaction mentale.',
    currentLang === 'ar' ? 'البحث عن السلام الداخلي والسكينة.' : currentLang === 'en' ? 'Cultivating inner peace and serenity.' : 'Recherche de la sérénité intérieure.',
    currentLang === 'ar' ? 'التواضع الفكري والتعلم المستمر.' : currentLang === 'en' ? 'Intellectual humility and lifelong learning.' : 'Humilité intellectuelle et apprentissage.',
    currentLang === 'ar' ? 'التركيز على ما يخضع لسيطرتك المباشرة.' : currentLang === 'en' ? 'Focusing exclusively on what is in your control.' : 'Focus sur ce qui dépend de soi.'
  ];
  const lessonsContainer = document.getElementById('modalQuoteLessons');
  lessonsContainer.innerHTML = lessonsArray.map(lesson => `
    <li class="quote-detail-list-item">${lesson}</li>
  `).join('');

  // Application
  const applicationText = quote.application || (currentLang === 'ar'
    ? `طبق هذه الحكمة يومياً بالتوقف لمدة دقيقة عند مواجهة الضغوط، واسأل نفسك: هل هذا الأمر تحت سيطرتي الكاملة؟`
    : currentLang === 'en'
    ? `Apply this wisdom daily by pausing whenever faced with stress and asking: Is this within my direct control?`
    : `Appliquez cette sagesse au quotidien en faisant une pause face au stress pour vous demander : cela dépend-il de moi ?`);
  document.getElementById('modalQuoteApplication').textContent = applicationText;

  // Reflection
  const reflectionText = quote.reflection || quote.reflectionQuestion || (currentLang === 'ar'
    ? `كيف يمكن لهذه الفكرة أن تغير نظرتك بالتحديد للتحديات والضغوط التي تواجهها اليوم؟`
    : currentLang === 'en'
    ? `How can this specific insight transform your approach to current challenges and daily stress?`
    : `Comment cette pensée peut-elle transformer votre regard sur les difficultés actuelles ?`);
  document.getElementById('modalQuoteReflection').textContent = reflectionText;

  // Similar quote safely handled
  const similarQuoteObj = quote.similarQuote || quotes[(idx + 1) % quotes.length];
  if (similarQuoteObj) {
    const simTextEl = document.getElementById('modalQuoteSimilarText');
    const simAuthEl = document.getElementById('modalQuoteSimilarAuthor');
    if (simTextEl) simTextEl.textContent = `"${similarQuoteObj.text}"`;
    if (simAuthEl) simAuthEl.textContent = `— ${similarQuoteObj.author}`;
  }

  // Localized headers translations
  document.getElementById('meaningTitle').textContent = currentLang === 'ar' ? 'معنى الاقتباس' : currentLang === 'en' ? 'Meaning of the Quote' : 'Signification de la citation';
  document.getElementById('philosophyTitle').textContent = currentLang === 'ar' ? 'التفسير الفلسفي' : currentLang === 'en' ? 'Philosophical Interpretation' : 'Interprétation philosophique';
  document.getElementById('lessonsTitle').textContent = currentLang === 'ar' ? 'ماذا نتعلم؟' : currentLang === 'en' ? 'What do we learn?' : 'Que découvrons-nous ?';
  document.getElementById('applicationTitle').textContent = currentLang === 'ar' ? 'تطبيق عملي' : currentLang === 'en' ? 'Practical Application' : 'Application pratique';
  document.getElementById('reflectionTitle').textContent = currentLang === 'ar' ? 'سؤال للتأمل' : currentLang === 'en' ? 'Question for Reflection' : 'Question pour méditer';
  document.getElementById('readAlsoTitle').textContent = currentLang === 'ar' ? 'اقرأ أيضاً' : currentLang === 'en' ? 'Read Also' : 'À lire aussi';
  document.getElementById('similarQuoteTitle').textContent = currentLang === 'ar' ? 'اقتباس مشابه' : currentLang === 'en' ? 'Similar Quote' : 'Citation similaire';
  document.getElementById('reflectionBtn').textContent = currentLang === 'ar' ? 'شارك إجابتك في التعليقات' : currentLang === 'en' ? 'Share your response in comments' : 'Partagez votre avis en commentaires';

  // Read also articles (3 items)
  const readAlsoContainer = document.getElementById('modalQuoteReadAlso');
  const articles = TIKTOK_DATA.content[currentLang].articles.slice(0, 3);
  readAlsoContainer.innerHTML = articles.map(art => {
    const artImg = `../${art.image}` || '../tree_sunset_field.jpg';
    return `
      <a href="../articles/?article=${art.file || ('category=' + art.category)}" class="read-also-item">
        <div class="read-also-thumb">
          <img src="${artImg}" alt="${art.title}">
        </div>
        <div class="read-also-info">
          <h5 class="read-also-item-title">${art.title}</h5>
          <span class="read-also-item-link">${currentLang === 'ar' ? 'قراءة المقال ←' : currentLang === 'en' ? 'Read Article ←' : 'Lire l\'article ←'}</span>
        </div>
      </a>
    `;
  }).join('');

  // Scroll reader container to top!
  const scrollContainer = modal.querySelector('.reader-scroll-container');
  if (scrollContainer) scrollContainer.scrollTop = 0;

  // Track active quote index & update URL query param
  activeQuoteIndex = idx;
  const url = new URL(window.location.href);
  url.searchParams.set('quote', idx);
  window.history.pushState({}, '', url);

  // Show Modal & Disable Background Scroll
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Close actions
  const closeBtn = document.getElementById('quoteModalCloseBtn');
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    activeQuoteIndex = null;

    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete('quote');
    window.history.pushState({}, '', cleanUrl);
  };
  
  closeBtn.onclick = closeModal;
  
  // Close on outer click
  modal.onclick = (e) => {
    if (e.target === modal || e.target.classList.contains('reader-scroll-container')) {
      closeModal();
    }
  };
}

// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  setupThemeToggle();
  setupHamburger();
  initLanguageSelector();
  displayNewWisdom(true);
  renderAllQuotes();

  const nextWisdomBtn = document.getElementById('nextWisdomBtn');
  if (nextWisdomBtn) {
    nextWisdomBtn.addEventListener('click', () => displayNewWisdom(false));
  }

  // Initial quote modal load from URL parameters if present
  const urlParams = new URLSearchParams(window.location.search);
  const quoteParam = urlParams.get('quote');
  if (quoteParam !== null) {
    const qIdx = parseInt(quoteParam, 10);
    if (!isNaN(qIdx)) {
      setTimeout(() => openQuoteModal(qIdx), 150);
    }
  }
});


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

