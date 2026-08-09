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
let currentThinkerId = 'all';
let currentSearch = '';

// Page specific translations
const THINKERS_PAGE_TRANSLATIONS = {
  fr: {
    searchPlaceholder: "Rechercher un philosophe...",
    noResults: "Aucun philosophe ne correspond à votre recherche.",
    bio: "L'histoire de la pensée humaine à travers ses plus illustres représentants."
  },
  ar: {
    searchPlaceholder: "ابحث عن فيلسوف...",
    noResults: "لم يتم العثور على أي فيلسوف يطابق بحثك.",
    bio: "تاريخ الفكر البشري من خلال أبرز ممثليه ورموزه."
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

  // Update active flags in navbar
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

  // Translate static data-i18n items
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  // Localized placeholders
  const searchInput = document.getElementById('searchInput');
  if (searchInput && THINKERS_PAGE_TRANSLATIONS[lang]) {
    searchInput.placeholder = THINKERS_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  }
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl && THINKERS_PAGE_TRANSLATIONS[lang]) {
    noResultsEl.textContent = THINKERS_PAGE_TRANSLATIONS[lang].noResults;
  }

  // Populate dynamic cards and menus
  populateNavbarDropdown();
  populateFilterTags();
  populateThinkers(currentThinkerId, currentSearch);
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

  // Bind sublinks event listeners to filter locally without reload!
  const subLinks = subMenu.querySelectorAll('.sub-link');
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('navMenu');
  subLinks.forEach(link => {
    const thinkerId = link.getAttribute('data-thinker');
    if (thinkerId) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        handleThinkerChange(thinkerId);
        if (hamburger && menu) {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
        }
      });
    }
  });
}

// --- Dynamic Filter Pills Builder ---
function populateFilterTags() {
  const container = document.getElementById('tagsContainer');
  if (!container) return;
  const thinkers = TIKTOK_DATA.content[currentLang].thinkers;
  const seeAllLabel = TIKTOK_DATA.ui[currentLang].seeAllThinkers || "Tous les philosophes";
  
  let html = `<button class="tag-btn ${currentThinkerId === 'all' ? 'active' : ''}" data-thinker="all">${seeAllLabel}</button>`;
  
  html += thinkers.map(t => {
    const isActive = currentThinkerId === t.id ? 'active' : '';
    return `<button class="tag-btn ${isActive}" data-thinker="${t.id}">${t.name}</button>`;
  }).join('');
  
  container.innerHTML = html;
  
  // Re-bind click listeners on the newly created pills
  const tags = container.querySelectorAll('.tag-btn');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const thinkerId = tag.getAttribute('data-thinker');
      handleThinkerChange(thinkerId);
    });
  });
}

// --- Navbar scroll opacity ---
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

// --- Populate Thinkers Grid ---
function populateThinkers(thinkerId = 'all', keyword = '') {
  const container = document.getElementById('thinkersList');
  const noResultsEl = document.getElementById('noResults');
  let thinkers = TIKTOK_DATA.content[currentLang].thinkers;
  const readLabel = TIKTOK_DATA.ui[currentLang].readBio || "Lire la biographie";
  const featuredLabel = TIKTOK_DATA.ui[currentLang].featured || "En vedette";

  if (!container || !thinkers) return;

  // 1. Filter by thinkerId
  if (thinkerId !== 'all') {
    thinkers = thinkers.filter(t => t.id === thinkerId);
  }

  // 2. Filter by search keyword
  if (keyword.trim() !== '') {
    const term = keyword.toLowerCase().trim();
    thinkers = thinkers.filter(t => 
      t.name.toLowerCase().includes(term) || 
      t.bio.toLowerCase().includes(term) ||
      t.school.toLowerCase().includes(term)
    );
  }

  // 3. Handle empty state
  if (thinkers.length === 0) {
    container.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    container.style.display = 'grid';
    if (noResultsEl) noResultsEl.style.display = 'none';

    container.innerHTML = thinkers.map((thinker, index) => {
      const badgeHtml = thinker.featured ? `<span class="card-featured-badge">${featuredLabel}</span>` : "";
      return `
        <div class="thinker-card" style="cursor: pointer;">
          <div class="thinker-image-container" data-index="${index}">
            ${badgeHtml}
            <img src="../${thinker.image}" alt="${thinker.name}" class="thinker-image">
          </div>
          <div class="card-meta-row" data-index="${index}">
            <span>${thinker.era}</span>
            <span class="card-meta-dot">•</span>
            <span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">${thinker.school}</span>
          </div>
          <h3 class="thinker-name" data-index="${index}">${thinker.name}</h3>
          <p class="thinker-bio" data-index="${index}">${thinker.bio}</p>
          <a class="card-action-link" data-index="${index}">
            <span>${readLabel}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      `;
    }).join('');

    setupThinkerModal(thinkers);
  }
}

// --- Active States and Tag synchronizations ---
function updateActiveTag(thinkerId) {
  const tags = document.querySelectorAll('.tag-btn');
  tags.forEach(tag => {
    tag.classList.remove('active');
    if (tag.getAttribute('data-thinker') === thinkerId) {
      tag.classList.add('active');
    }
  });
}

// Handle thinker selection changes
function handleThinkerChange(thinkerId) {
  currentThinkerId = thinkerId;
  
  // Update URL search parameters without page reload
  const url = new URL(window.location.href);
  url.searchParams.set('thinker', thinkerId);
  window.history.pushState({}, '', url);

  updateActiveTag(thinkerId);
  populateThinkers(thinkerId, currentSearch);
}

// --- Page & Dropdown Listeners Setup ---
function initPageLogic() {
  const searchInput = document.getElementById('searchInput');
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
      if (link.id !== 'thinkersNavLink') {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
        });
      }
    });
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      populateThinkers(currentThinkerId, currentSearch);
    });
  }

  // Initial thinker load from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialThinker = urlParams.get('thinker') || 'all';
  currentThinkerId = initialThinker;
  updateActiveTag(initialThinker);
}

// --- Thinker Biography Modal Logic ---

function setupThinkerModal(thinkers) {
  const modal = document.getElementById('thinkerModal');
  const closeBtn = document.getElementById('thinkerModalCloseBtn');
  const cards = document.querySelectorAll('.thinker-card');
  
  if (!modal || !closeBtn) return;
  
  function openThinkerModal(index) {
    const thinker = thinkers[index];
    if (!thinker) return;

    // Localize simple static text headers based on language
    document.getElementById('overviewTitle').textContent = currentLang === 'ar' ? 'نبذة سريعة' : currentLang === 'en' ? 'Quick Overview' : 'Aperçu rapide';
    document.getElementById('biographyTitle').textContent = currentLang === 'ar' ? 'السيرة الذاتية' : currentLang === 'en' ? 'Biography' : 'Biographie';
    document.getElementById('upbringingTitle').textContent = currentLang === 'ar' ? 'النشأة' : currentLang === 'en' ? 'Upbringing' : 'Origines';
    document.getElementById('studiesTitle').textContent = currentLang === 'ar' ? 'الدراسة' : currentLang === 'en' ? 'Studies' : 'Études';
    document.getElementById('lifeTitle').textContent = currentLang === 'ar' ? 'حياته' : currentLang === 'en' ? 'His Life' : 'Sa Vie';
    document.getElementById('ideasTitle').textContent = currentLang === 'ar' ? 'أفكاره الرئيسية' : currentLang === 'en' ? 'Main Ideas' : 'Idées principales';
    document.getElementById('worksTitle').textContent = currentLang === 'ar' ? 'أشهر مؤلفاته' : currentLang === 'en' ? 'Famous Works' : 'Œuvres majeures';
    document.getElementById('influenceTitle').textContent = currentLang === 'ar' ? 'تأثيره وإرثه' : currentLang === 'en' ? 'Influence & Legacy' : 'Influence & Héritage';
    document.getElementById('famousQuoteBannerTitle').textContent = currentLang === 'ar' ? 'أشهر اقتباس' : currentLang === 'en' ? 'Famous Quote' : 'Citation célèbre';
    document.getElementById('didYouKnowTitle').textContent = currentLang === 'ar' ? 'هل تعلم؟' : currentLang === 'en' ? 'Did You Know?' : 'Le saviez-vous ?';
    document.getElementById('reflectHeading').textContent = currentLang === 'ar' ? 'سؤال للتأمل' : currentLang === 'en' ? 'Question for Reflection' : 'Question pour méditer';
    document.getElementById('modalThinkerReflectionBtn').textContent = currentLang === 'ar' ? 'شارك إجابتك في التعليقات' : currentLang === 'en' ? 'Share your response in comments' : 'Partagez votre avis en commentaires';
    document.getElementById('learnTitle').textContent = currentLang === 'ar' ? 'ماذا يمكن أن نتعلم منه؟' : currentLang === 'en' ? 'What can we learn from him?' : 'Que pouvons-nous apprendre de lui ?';
    document.getElementById('timelineTitle').textContent = currentLang === 'ar' ? 'الجدول الزمني لحياته' : currentLang === 'en' ? 'Life Timeline' : 'Chronologie de sa vie';

    // Breadcrumb name
    document.getElementById('modalThinkerNameBreadcrumb').textContent = thinker.name;

    // Hero section values
    document.getElementById('modalThinkerImg').src = `../${thinker.image}`;
    document.getElementById('modalThinkerImg').alt = thinker.name;
    document.getElementById('modalThinkerName').textContent = thinker.name;
    
    // SubName
    document.getElementById('modalThinkerSubtitle').textContent = thinker.subName || (currentLang === 'ar' ? `فيلسوف من المدرسة ${thinker.school}` : `${thinker.school} Philosopher`);

    // Flag & Country
    document.getElementById('modalThinkerFlag').textContent = thinker.flag || "🌍";
    document.getElementById('modalThinkerCountry').textContent = thinker.country || (currentLang === 'ar' ? "العالم القديم" : "Ancient World");

    document.getElementById('modalThinkerEra').textContent = thinker.era;
    document.getElementById('modalThinkerSchool').textContent = thinker.school;

    // Find a quote from the database by this thinker for the hero quote card, or fallback
    let heroQuoteText = thinker.heroQuote;
    if (!heroQuoteText) {
      const allQuotes = TIKTOK_DATA.content[currentLang].quotes || [];
      const matchingQuote = allQuotes.find(q => q.author.includes(thinker.name) || q.author.includes(thinker.id));
      if (matchingQuote) {
        heroQuoteText = `"${matchingQuote.text}"`;
      } else {
        heroQuoteText = `"${thinker.bio}"`;
      }
    }
    document.getElementById('modalThinkerHeroQuote').textContent = heroQuoteText;

    // Column 1: Quick Overview
    document.getElementById('modalThinkerQuickOverview').textContent = thinker.quickOverview || thinker.bio;

    // Column 2: Biography Details
    const bodyParag = thinker.body || [thinker.bio];
    document.getElementById('modalThinkerUpbringing').textContent = (thinker.bioDetails && thinker.bioDetails.upbringing) || bodyParag[0] || "...";
    document.getElementById('modalThinkerStudies').textContent = (thinker.bioDetails && thinker.bioDetails.studies) || bodyParag[1] || (currentLang === 'ar' ? "تابع دراساته وأبحاثه الفلسفية بتعمق." : "Pursued deep philosophical studies.");
    document.getElementById('modalThinkerLife').textContent = (thinker.bioDetails && thinker.bioDetails.life) || bodyParag[2] || (currentLang === 'ar' ? "عاش حياة مكرسة للبحث الفلسفي ونشر المعرفة." : "Lived a life dedicated to research and sharing knowledge.");

    // Column 3: Main Ideas
    const ideasContainer = document.getElementById('modalThinkerIdeas');
    let ideasList = thinker.mainIdeas;
    if (!ideasList) {
      ideasList = (thinker.keyConcept || "").split(',').map(c => c.trim()).filter(Boolean).map(c => {
        return currentLang === 'ar' ? `${c}: مفهوم فلسفي أساسي في فكره.` : `${c}: Key philosophical concept.`;
      });
    }
    if (ideasList.length === 0) {
      ideasList = [currentLang === 'ar' ? "البحث عن الحقيقة والمعنى في الحياة." : "Seeking truth and meaning in life."];
    }
    ideasContainer.innerHTML = ideasList.map(idea => `
      <li class="thinker-ideas-item">${idea}</li>
    `).join('');

    // Works Grid
    const worksContainer = document.getElementById('modalThinkerWorks');
    let worksList = thinker.works;
    if (!worksList) {
      const parsedWorks = (thinker.keyWorks || "").split(',').map(w => w.trim()).filter(Boolean);
      worksList = parsedWorks.map(w => {
        return {
          title: w,
          desc: currentLang === 'ar' ? `من أشهر مؤلفات الفيلسوف وأكثرها انتشاراً.` : `One of the most famous and widely read works of the philosopher.`
        };
      });
    }
    if (worksList.length === 0) {
      worksList = [{
        title: currentLang === 'ar' ? "مؤلفات ضائعة أو مقالات متفرقة" : "Lost works or scattered essays",
        desc: currentLang === 'ar' ? "كتابات ورسائل فلسفية تعبر عن فكره." : "Philosophical letters and writings."
      }];
    }
    worksContainer.innerHTML = worksList.slice(0, 4).map(w => `
      <div class="thinker-work-card">
        <div class="thinker-work-icon-box">📘</div>
        <h5 class="thinker-work-title">${w.title}</h5>
        <p class="thinker-work-desc">${w.desc}</p>
      </div>
    `).join('');

    // Influence Avatars Card
    const influenceAvatarsContainer = document.getElementById('modalThinkerInfluenceAvatars');
    let influenceData = thinker.influence;
    if (!influenceData) {
      influenceData = {
        names: currentLang === 'ar' ? ["سقراط", "أفلاطون", "أرسطو", "نيتشه", "سارتر", "كامو"] : ["Socrates", "Plato", "Aristotle", "Nietzsche", "Sartre", "Camus"],
        summary: currentLang === 'ar' ? "أثر بشكل كبير على مسار الفلسفة والفكر الإنساني." : "Greatly influenced the course of human philosophy and thought."
      };
    }
    
    const availableAvatars = {
      "نيتشه": "../thinkers/images/nietzsche.jpg",
      "Nietzsche": "../thinkers/images/nietzsche.jpg",
      "سقراط": "../thinkers/images/socrate.jpg",
      "Socrates": "../thinkers/images/socrate.jpg",
      "أفلاطون": "../thinkers/images/platon.jpg",
      "Plato": "../thinkers/images/platon.jpg",
      "أرسطو": "../thinkers/images/aristote.jpg",
      "Aristotle": "../thinkers/images/aristote.jpg",
      "فرويد": "../thinkers/images/freud.jpg",
      "Freud": "../thinkers/images/freud.jpg",
      "شوبنهاور": "../thinkers/images/schopenhauer.jpg",
      "Schopenhauer": "../thinkers/images/schopenhauer.jpg"
    };

    influenceAvatarsContainer.innerHTML = influenceData.names.map(name => {
      let avatarImgSrc = "../featured_philosopher.jpg";
      const matchingT = TIKTOK_DATA.content[currentLang].thinkers.find(t => t.name.includes(name) || name.includes(t.name));
      if (matchingT) {
        avatarImgSrc = `../${matchingT.image}`;
      } else if (availableAvatars[name]) {
        avatarImgSrc = availableAvatars[name];
      }
      return `
        <div class="influence-avatar-item">
          <img src="${avatarImgSrc}" class="influence-avatar-img" alt="${name}">
          <span class="influence-avatar-name">${name}</span>
        </div>
      `;
    }).join('');

    document.getElementById('modalThinkerInfluenceSummary').textContent = influenceData.summary;

    // Famous Quote Banner
    let famousQuoteText = thinker.famousQuote;
    if (!famousQuoteText) {
      famousQuoteText = heroQuoteText;
    }
    document.getElementById('modalThinkerFamousQuote').textContent = famousQuoteText;

    // Bottom Grid: Did You Know, Reflection, Lessons
    document.getElementById('modalThinkerDidYouKnow').textContent = thinker.didYouKnow || (currentLang === 'ar' ? `كان الفيلسوف يكرس حياته اليومية للتفكير والتأمل والكتابة دفاعاً عن قناعاته الفكرية العميقة.` : `The philosopher dedicated his life to deep thinking, meditation, and writing in defense of his core convictions.`);
    document.getElementById('modalThinkerReflection').textContent = thinker.reflectionQuestion || (currentLang === 'ar' ? `كيف يمكننا تطبيق أفكار هذا الفيلسوف في حياتنا المعاصرة لتجاوز الضغوط والقلق؟` : `How can we apply this philosopher's insights to our modern lives to overcome daily anxiety?`);

    // Lessons checklist
    const lessonsContainer = document.getElementById('modalThinkerLessons');
    let lessonsList = thinker.lessons;
    if (!lessonsList) {
      lessonsList = [
        currentLang === 'ar' ? "الانضباط الذاتي والتحكم في رغباتك." : "Self-discipline and mastery of desires.",
        currentLang === 'ar' ? "التأمل الهادئ والبحث عن السلام الداخلي." : "Calm meditation and inner peace search.",
        currentLang === 'ar' ? "فحص أفكارك ومعتقداتك باستمرار." : "Constant examination of your thoughts.",
        currentLang === 'ar' ? "التواضع المعرفي ومواصلة التعلم." : "Intellectual humility and lifelong learning."
      ];
    }
    lessonsContainer.innerHTML = lessonsList.map(lesson => `
      <li class="quote-detail-list-item">${lesson}</li>
    `).join('');

    // Timeline Axis
    const timelineContainer = document.getElementById('modalThinkerTimeline');
    let timelineList = thinker.timeline;
    if (!timelineList) {
      const birthYear = thinker.era.split('-')[0].trim();
      const deathYear = thinker.era.split('-')[1]?.trim() || "???";
      timelineList = [
        { year: birthYear, desc: currentLang === 'ar' ? "الميلاد وبداية النشأة." : "Birth and early life." },
        { year: "...", desc: currentLang === 'ar' ? "بداية الإنتاج المعرفي والفلسفي." : "Early studies and writing." },
        { year: "...", desc: currentLang === 'ar' ? "نشر أهم مؤلفاته وتأثيره." : "Publishing major works." },
        { year: deathYear, desc: currentLang === 'ar' ? "الوفاة وإرثه الخالد." : "Death and legacy." }
      ];
    }
    timelineContainer.innerHTML = timelineList.map(node => `
      <div class="thinker-timeline-node">
        <div class="timeline-dot"></div>
        <span class="timeline-year">${node.year}</span>
        <p class="timeline-desc">${node.desc}</p>
      </div>
    `).join('');

    // Read Also Articles (3 items)
    const readAlsoContainer = document.getElementById('modalThinkerReadAlso');
    const articles = TIKTOK_DATA.content[currentLang].articles.slice(0, 3);
    readAlsoContainer.innerHTML = articles.map(art => {
      const artImg = `../${art.image}` || '../tree_sunset_field.jpg';
      return `
        <a href="../articles/?article=${art.file || ('category=' + art.category)}" class="read-also-item" target="_blank" rel="noopener">
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

    // Show Modal & Disable Background Scroll
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Close actions
    const closeBtn = document.getElementById('thinkerModalCloseBtn');
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };
    
    closeBtn.onclick = closeModal;
    
    // Close on outer click
    modal.onclick = (e) => {
      if (e.target === modal || e.target.classList.contains('reader-scroll-container')) {
        closeModal();
      }
    };
  }

  // Bind Card Click to open reader modal
  cards.forEach(card => {
    const clickables = card.querySelectorAll('[data-index]');
    clickables.forEach(c => {
      c.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const index = parseInt(c.getAttribute('data-index'), 10);
        openThinkerModal(index);
      });
    });
    // Fallback: clicking card body anywhere opens modal
    card.addEventListener('click', () => {
      const readBtn = card.querySelector('.card-action-link');
      if (readBtn) {
        const index = parseInt(readBtn.getAttribute('data-index'), 10);
        openThinkerModal(index);
      }
    });
  });
}

// --- DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  initLanguageSelector(); // Sets language & calls initial populateThinkers
  initNavbarScroll();
  initPageLogic();
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

