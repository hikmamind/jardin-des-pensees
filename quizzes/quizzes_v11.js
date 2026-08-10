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

// State management
let quizState = {
  selectedQuizId: null,
  currentScreen: 'list', // 'list', 'start', 'question', 'results'
  currentQuestionIndex: 0,
  answers: []
};

// Cover mapping for each quiz
const QUIZ_COVERS = {
  personality: '../quiz_personality.jpg',
  ancient_philosopher: '../quiz_greek_philosopher.jpg',
  true_stoic: '../quiz_true_stoic.jpg',
  emotional_intelligence: '../quiz_emotional_intelligence.jpg'
};

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
        renderQuizScreen();
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
  
  // Translate nodes with data-i18n
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

  // Breadcrumbs specific translations
  const breadcrumbHome = document.getElementById('breadcrumbHome');
  if (breadcrumbHome) {
    breadcrumbHome.textContent = currentLang === 'ar' ? 'الرئيسية' : currentLang === 'en' ? 'Home' : 'Accueil';
  }
}

// --- Quiz Engine ---
function renderQuizScreen() {
  const container = document.getElementById('quizScreenContainer');
  const progressBar = document.getElementById('quizProgressBar');
  if (!container) return;

  const ui = TIKTOK_DATA.ui[currentLang];
  
  if (quizState.currentScreen === 'list') {
    if (progressBar) progressBar.style.width = '0%';
    const quizzes = TIKTOK_DATA.content[currentLang].quizzes;
    
    const listHtml = quizzes.map(q => {
      let coverImage = '../quiz_philosopher_hero.jpg';
      if (q.image) {
        coverImage = q.image.startsWith('../') ? q.image : '../' + q.image;
      } else if (q.id && QUIZ_COVERS[q.id]) {
        coverImage = QUIZ_COVERS[q.id];
      }
      const subtitleText = q.desc || q.subtitle || '';
      return `
        <div class="quiz-card-premium">
          <div class="quiz-card-img-wrapper">
            <img src="${coverImage}" alt="${q.title}">
          </div>
          <div class="quiz-card-body">
            <span class="quiz-card-badge">${ui.quiz || "Quiz"}</span>
            <h4 class="quiz-card-title">${q.title}</h4>
            <p class="quiz-card-subtitle">${subtitleText}</p>
            <button class="quiz-btn select-quiz-btn" data-quiz-id="${q.id || ''}" data-quiz-file="${q.file || ''}" style="width: 100%; margin-top: 10px;">
              <span>${ui.quizChooseBtn || (currentLang === 'ar' ? 'ابدأ الاختبار' : 'Choisir ce test')}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="quiz-screen">
        <div class="quizzes-premium-grid">
          ${listHtml}
        </div>
      </div>
    `;
    
    // Bind buttons
    const selectButtons = container.querySelectorAll('.select-quiz-btn');
    selectButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const quizFile = btn.getAttribute('data-quiz-file');
        if (quizFile && quizFile.length > 0) {
          window.location.href = quizFile;
          return;
        }
        const quizId = btn.getAttribute('data-quiz-id');
        quizState.selectedQuizId = quizId;
        quizState.currentScreen = 'start';
        quizState.currentQuestionIndex = 0;
        quizState.answers = [];
        renderQuizScreen();
      });
    });
  } else {
    // If a quiz is selected
    const quizzes = TIKTOK_DATA.content[currentLang].quizzes;
    const data = quizzes.find(q => q.id === quizState.selectedQuizId);
    if (!data) return;

    if (quizState.currentScreen === 'start') {
      if (progressBar) progressBar.style.width = '0%';
      container.innerHTML = `
        <div class="quiz-screen" style="max-width: 650px; margin: 0 auto; padding: 20px 0;">
          <button class="quiz-back-list-btn" id="quizBackListBtn" style="background: transparent; border: none; color: var(--accent-gold); cursor: pointer; display: flex; align-items: center; gap: 8px; margin-bottom: 25px; font-size: 0.95rem; padding: 0; font-family: inherit;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            <span>${ui.quizBackBtn || "Retour aux tests"}</span>
          </button>
          <h3 class="quiz-title" style="font-size: 1.8rem; line-height: 1.3; font-family: 'Playfair Display', 'Amiri', serif; font-weight: 700; margin-bottom: 15px;">${data.title}</h3>
          <p class="quiz-subtitle" style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 30px;">${data.subtitle}</p>
          <button class="quiz-btn" id="startQuizBtn" style="padding: 12px 30px;">
            <span>${ui.quizStartBtn}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      `;
      
      document.getElementById('quizBackListBtn').addEventListener('click', () => {
        quizState.selectedQuizId = null;
        quizState.currentScreen = 'list';
        renderQuizScreen();
      });

      document.getElementById('startQuizBtn').addEventListener('click', () => {
        transitionQuizScreen('question', 0);
      });
    } else if (quizState.currentScreen === 'question') {
      const qIndex = quizState.currentQuestionIndex;
      const question = data.questions[qIndex];
      const progressPercent = ((qIndex) / data.questions.length) * 100;
      if (progressBar) progressBar.style.width = `${progressPercent}%`;

      const optionsHtml = question.options.map((opt, oIdx) => {
        const letter = String.fromCharCode(65 + oIdx); // A, B, C, D
        const isSelected = quizState.answers[qIndex] === opt.profile ? 'selected' : '';
        return `
          <button class="quiz-option ${isSelected}" data-profile="${opt.profile}">
            <span class="quiz-option-letter">${letter}</span>
            <span class="quiz-option-text">${opt.text}</span>
          </button>
        `;
      }).join('');

      container.innerHTML = `
        <div class="quiz-screen" style="max-width: 650px; margin: 0 auto;">
          <div class="quiz-question-number" style="font-size: 0.9rem; font-weight: 700; color: var(--accent-gold); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">
            ${currentLang === 'ar' ? 'السؤال' : 'Question'} ${qIndex + 1} / ${data.questions.length}
          </div>
          <h3 class="quiz-question-text" style="font-size: 1.5rem; font-weight: 700; line-height: 1.4; color: var(--text-primary); margin-bottom: 30px; font-family: 'Playfair Display', 'Amiri', serif;">
            ${question.question}
          </h3>
          <div class="quiz-options-container" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 35px;">
            ${optionsHtml}
          </div>
          <button class="quiz-btn" id="nextQuizBtn" disabled style="padding: 12px 30px; align-self: flex-start;">
            <span>${ui.quizNextBtn}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      `;

      // Bind option click
      const options = container.querySelectorAll('.quiz-option');
      let selectedProfile = quizState.answers[qIndex] || null;
      const nextBtn = document.getElementById('nextQuizBtn');
      
      if (selectedProfile && nextBtn) {
        nextBtn.disabled = false;
      }

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          options.forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          selectedProfile = opt.getAttribute('data-profile');
          if (nextBtn) nextBtn.disabled = false;
        });
      });

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          quizState.answers[qIndex] = selectedProfile;
          if (qIndex + 1 < data.questions.length) {
            transitionQuizScreen('question', qIndex + 1);
          } else {
            transitionQuizScreen('results');
          }
        });
      }
    } else if (quizState.currentScreen === 'results') {
      if (progressBar) progressBar.style.width = '100%';
      
      // Calculate profile percentages
      const counts = {};
      data.questions.forEach(q => {
        q.options.forEach(opt => {
          counts[opt.profile] = 0;
        });
      });
      
      quizState.answers.forEach(p => {
        if (counts[p] !== undefined) counts[p]++;
      });
      
      const total = quizState.answers.length;
      
      // Determine dominant profile
      let dominant = Object.keys(counts)[0];
      let maxVal = counts[dominant];
      Object.keys(counts).forEach(p => {
        if (counts[p] > maxVal) {
          dominant = p;
          maxVal = counts[p];
        }
      });

      const dominantProfile = data.profiles[dominant] || { title: "Inconnu", desc: "Profil non identifié." };
      
      // Generate scores HTML
      const scoreRowsHtml = Object.keys(counts).map(pKey => {
        const pPercent = Math.round((counts[pKey] / total) * 100);
        const pProfile = data.profiles[pKey];
        const pName = pProfile ? pProfile.title : pKey;
        
        let colorClass = 'stoic';
        if (pKey === 'absurd') colorClass = 'absurd';
        if (pKey === 'existential') colorClass = 'existential';

        return `
          <div class="quiz-score-row">
            <div class="quiz-score-info">
              <span>${pName}</span>
              <span>${pPercent}%</span>
            </div>
            <div class="quiz-score-track">
              <div class="quiz-score-fill ${colorClass}" data-percent="${pPercent}" style="width: 0%;"></div>
            </div>
          </div>
        `;
      }).join('');

      // Generate recommended items
      const recomThinkers = (dominantProfile.recomThinkers || []).map(tId => {
        const thinker = TIKTOK_DATA.content[currentLang].thinkers.find(t => t.id === tId);
        if (!thinker) return '';
        return `
          <a href="../thinkers/?thinker=${thinker.id}" class="quiz-recom-item">
            <span class="quiz-recom-type">${currentLang === 'ar' ? 'فيلسوف' : currentLang === 'en' ? 'Philosopher' : 'Philosophe'}</span>
            <h4 class="quiz-recom-name">${thinker.name}</h4>
            <p class="quiz-recom-desc">${thinker.bio}</p>
            <span class="quiz-recom-link">
              <span>${ui.readBio}</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </a>
        `;
      }).join('');

      const articles = TIKTOK_DATA.content[currentLang].articles.filter(a => a.category === dominantProfile.recomCategory);
      const recomArticles = articles.map(art => {
        return `
          <a href="../articles/?category=${art.category}" class="quiz-recom-item">
            <span class="quiz-recom-type">${currentLang === 'ar' ? 'مقال' : currentLang === 'en' ? 'Article' : 'Article'}</span>
            <h4 class="quiz-recom-name">${art.title}</h4>
            <p class="quiz-recom-desc">${art.desc}</p>
            <span class="quiz-recom-link">
              <span>${ui.readArticle || "Lire l'article"}</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </a>
        `;
      }).join('');

      container.innerHTML = `
        <div class="quiz-screen quiz-results-container">
          <h3 class="quiz-result-title">${ui.quizScoreTitle || "Votre Score / Profil Dominant"}</h3>
          <div class="quiz-result-profile-name">${dominantProfile.title}</div>
          <p class="quiz-result-description">${dominantProfile.desc}</p>
          
          <!-- Scores grid -->
          <div class="quiz-results-scores">
            ${scoreRowsHtml}
          </div>

          <!-- Recommendations -->
          <div class="quiz-recommendations">
            <h3 class="quiz-recom-title">${ui.quizRecomTitle}</h3>
            <div class="quiz-recom-grid">
              ${recomThinkers}
              ${recomArticles}
            </div>
          </div>

          <button class="quiz-btn" id="restartQuizBtn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: scaleX(-1);">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
            </svg>
            <span>${ui.quizBackBtn || "Retour aux tests"}</span>
          </button>
        </div>
      `;

      // Animate score bars fill
      setTimeout(() => {
        const fills = container.querySelectorAll('.quiz-score-fill');
        fills.forEach(fill => {
          const targetPercent = fill.getAttribute('data-percent');
          fill.style.width = `${targetPercent}%`;
        });
      }, 100);

      document.getElementById('restartQuizBtn').addEventListener('click', () => {
        quizState = {
          selectedQuizId: null,
          currentScreen: 'list',
          currentQuestionIndex: 0,
          answers: []
        };
        transitionQuizScreen('list');
      });
    }
  }
}

function transitionQuizScreen(screen, index = 0) {
  const container = document.getElementById('quizScreenContainer');
  if (!container) return;
  
  const activeScreen = container.querySelector('.quiz-screen');
  if (activeScreen) {
    activeScreen.classList.add('fade');
    setTimeout(() => {
      quizState.currentScreen = screen;
      quizState.currentQuestionIndex = index;
      renderQuizScreen();
    }, 300);
  } else {
    quizState.currentScreen = screen;
    quizState.currentQuestionIndex = index;
    renderQuizScreen();
  }
}

// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  setupThemeToggle();
  setupHamburger();
  initLanguageSelector();
  renderQuizScreen();
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

