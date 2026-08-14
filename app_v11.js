import TIKTOK_DATA from './data_v11.js';

// --- Icon SVG Templates ---
const ICONS = {
  'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
  'headphones': '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
  'mail': '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
  'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
  'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
  'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  'brain': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
};

// Language Metadata
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
let currentQuoteIndex = -1;

// --- Language/Translation Engine ---
function setLanguage(lang) {
  if (!['ar', 'fr', 'en'].includes(lang)) lang = 'ar';
  currentLang = lang;
  saveLanguage(lang);
  
  // Set document attributes for direction & lang
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update active language selector button representation
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = (LANG_METADATA[lang] && LANG_METADATA[lang].label) || "العربية";

  // Update active state in dropdown options
  const langOptions = document.querySelectorAll('.lang-opt');
  langOptions.forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Translate static labels marked with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      if (key === 'schopenhauerThoughtList') {
        el.innerHTML = TIKTOK_DATA.ui[lang][key];
      } else {
        el.textContent = TIKTOK_DATA.ui[lang][key];
      }
    }
  });

  // Dynamic Article Counter update
  const count = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].articles) ? TIKTOK_DATA.content[lang].articles.length : 11;
  const countEl = document.getElementById('totalArticlesCount');
  if (countEl) countEl.textContent = count;
  const countLabel = document.getElementById('allArticlesCountLabel');
  if (countLabel) {
    countLabel.textContent = lang === 'ar' ? `عرض كافة المقالات (${count}) ←` : 
                             lang === 'fr' ? `Voir tous les articles (${count}) →` : 
                             `View all articles (${count}) →`;
  }

  // Translate input placeholders
  updatePlaceholders();

  // Re-populate all dynamic components with the active language content
  renderWisdomQuote(false);
  populateProfile();
  populateNavbarDropdown();
  populateThinkers();
  populateRecentArticlesHome();
  populateAudioHome();
  populateFaq();
}

function updatePlaceholders() {
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const searchInput = document.getElementById('globalSearchInput') || document.getElementById('searchInput');
  
  if (nameInput) nameInput.placeholder = TIKTOK_DATA.ui[currentLang].placeholderName;
  if (emailInput) emailInput.placeholder = TIKTOK_DATA.ui[currentLang].placeholderEmail;
  if (messageInput) messageInput.placeholder = TIKTOK_DATA.ui[currentLang].placeholderMessage;
  if (searchInput) searchInput.placeholder = TIKTOK_DATA.ui[currentLang].search || "بحث...";
}

function initLanguageSelector() {
  const langBtn = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  if (langBtn && dropdown) {
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });

    // Language option selection
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

// --- Theme Switcher Logic ---
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

// --- Statistics Counters Logic ---
function parseStatValue(statStr) {
  const match = statStr.match(/^([\d.]+)([KM]?)$/i);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  const unit = match[2].toUpperCase();
  if (unit === 'K') return num * 1000;
  if (unit === 'M') return num * 1000000;
  return num;
}

// Format stats value
function formatStatValue(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return Math.floor(num).toString();
}

function animateCounter(elementId, targetStr) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const targetVal = parseStatValue(targetStr);
  const duration = 2000; // 2 seconds
  const startVal = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
    const currentVal = startVal + (targetVal - startVal) * easeProgress;
    
    el.textContent = formatStatValue(currentVal);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetStr;
    }
  }
  requestAnimationFrame(update);
}

// --- Dynamic Rendering of Sections ---
function populateProfile() {
  const content = TIKTOK_DATA.content[currentLang];
  if (!content) return;
  const nameEl = document.getElementById('displayName');
  if (nameEl) nameEl.textContent = content.displayName;
  const bioEl = document.getElementById('bio');
  if (bioEl) bioEl.textContent = content.bio;

  const followersCountEl = document.getElementById('followersCount');
  if (followersCountEl && followersCountEl.textContent === "0") {
    animateCounter('followersCount', TIKTOK_DATA.stats.followers);
    animateCounter('likesCount', TIKTOK_DATA.stats.likes);
    animateCounter('viewsCount', TIKTOK_DATA.stats.views);
  }
}

// --- 1. Wisdom of the Day (Quote Carousel & Cycling Engine) ---
const HOMEPAGE_WISDOM_QUOTES = [
  {
    quote: {
      ar: "« لا تزعج الأشياءُ الناسَ، بل الأحكام التي يطلقونها عليها. »",
      fr: "« Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses. »",
      en: "« Men are disturbed not by things, but by the view which they take of them. »"
    },
    author: {
      ar: "إبيكتيتوس — الفلسفة الرواقية",
      fr: "Épictète — Stoïcisme",
      en: "Epictetus — Stoic Philosophy"
    },
    tag: {
      ar: "الرواقية والسيطرة على العقل",
      fr: "Stoïcisme & Maîtrise de soi",
      en: "Stoicism & Self-Mastery"
    }
  },
  {
    quote: {
      ar: "« من يمتلك سبباً يعيش من أجله، يمكنه أن يتحمل تقريباً أي كيفية. »",
      fr: "« Celui qui a un pourquoi qui lui tient lieu de but peut supporter presque tous les comment. »",
      en: "« He who has a why to live can bear almost any how. »"
    },
    author: {
      ar: "فريدريش نيتشه — فيلسوف الإرادة",
      fr: "Friedrich Nietzsche — Philosophie de la Volonté",
      en: "Friedrich Nietzsche — Will to Power"
    },
    tag: {
      ar: "المعنى والإرادة",
      fr: "Sens & Volonté",
      en: "Meaning & Purpose"
    }
  },
  {
    quote: {
      ar: "« في منتصف الشتاء، اكتشفت أخيراً أن في داخلي صيفاً لا يقهر. »",
      fr: "« Au milieu de l'hiver, j'ai découvert en moi un invincible été. »",
      en: "« In the midst of winter, I found there was, within me, an invincible summer. »"
    },
    author: {
      ar: "ألبير كامو — فلسفة التمرد والأمل",
      fr: "Albert Camus — Philosophie de la Révolte",
      en: "Albert Camus — Lucid Hope"
    },
    tag: {
      ar: "القوة الداخلية والأمل",
      fr: "Force Intérieure & Espoir",
      en: "Inner Strength & Resilience"
    }
  },
  {
    quote: {
      ar: "« تخلَّص من ظنك أنك قد آذيت، وسيزول الأذى نفسه. »",
      fr: "« Supprime le jugement, et tu supprimes la plainte : 'On m'a fait du tort'. Supprime la plainte, et le tort est supprimé. »",
      en: "« Reject your sense of injury and the injury itself disappears. »"
    },
    author: {
      ar: "ماركوس أوريليوس — التأملات",
      fr: "Marc Aurèle — Pensées pour moi-même",
      en: "Marcus Aurelius — Meditations"
    },
    tag: {
      ar: "السكينة والسلام الداخلي",
      fr: "Paix intérieure & Sagesse",
      en: "Inner Peace & Clarity"
    }
  },
  {
    quote: {
      ar: "« السعادة الحقيقية هي الاستمتاع بالحاضر دون قلق مشؤوم بشأن المستقبل. »",
      fr: "« Le vrai bonheur est de jouir du présent, sans dépendre anxieusement de l'avenir. »",
      en: "« True happiness is to enjoy the present, without anxious dependence upon the future. »"
    },
    author: {
      ar: "سينيكا — رسائل إلى لوسيليوس",
      fr: "Sénèque — Lettres à Lucilius",
      en: "Seneca — Letters from a Stoic"
    },
    tag: {
      ar: "فن العيش في الحاضر",
      fr: "L'art de vivre l'instant",
      en: "Living in the Present"
    }
  },
  {
    quote: {
      ar: "« الحياة تتأرجح كالبندول بين الألم والملل، والسكينة تكمن في التقليل من الرغبات. »",
      fr: "« La vie oscille comme un pendule, de droite à gauche, de la souffrance à l'ennui. »",
      en: "« Life swings like a pendulum backward and forward between pain and boredom. »"
    },
    author: {
      ar: "آرثر شوبنهاور — حكمة فن العيش",
      fr: "Arthur Schopenhauer — Aphorismes sur la sagesse",
      en: "Arthur Schopenhauer — Wisdom of Life"
    },
    tag: {
      ar: "الوضوح الذهني والتأمل",
      fr: "Lucidité & Apaisement",
      en: "Mental Clarity & Wisdom"
    }
  }
];

let wisdomQuoteIdx = 0;

function renderWisdomQuote(animate = false) {
  const quoteTextEl = document.getElementById('wisdomQuoteText');
  const quoteAuthorEl = document.getElementById('wisdomQuoteAuthor');
  const quoteTagEl = document.getElementById('wisdomQuoteTag');
  const quoteBody = document.getElementById('wisdomQuoteBody');
  if (!quoteTextEl || !quoteAuthorEl) return;

  const item = HOMEPAGE_WISDOM_QUOTES[wisdomQuoteIdx];
  const lang = currentLang;

  if (animate && quoteBody) {
    quoteBody.style.opacity = '0';
    setTimeout(() => {
      quoteTextEl.textContent = (item.quote && item.quote[lang]) || item.quote.ar;
      quoteAuthorEl.textContent = (item.author && item.author[lang]) || item.author.ar;
      if (quoteTagEl) quoteTagEl.textContent = (item.tag && item.tag[lang]) || item.tag.ar;
      quoteBody.style.opacity = '1';
    }, 200);
  } else {
    quoteTextEl.textContent = (item.quote && item.quote[lang]) || item.quote.ar;
    quoteAuthorEl.textContent = (item.author && item.author[lang]) || item.author.ar;
    if (quoteTagEl) quoteTagEl.textContent = (item.tag && item.tag[lang]) || item.tag.ar;
  }
}

window.cycleWisdomQuote = function() {
  wisdomQuoteIdx = (wisdomQuoteIdx + 1) % HOMEPAGE_WISDOM_QUOTES.length;
  renderWisdomQuote(true);
};

// --- 2. Thinkers Section V4 ---
function populateThinkers() {
  const container = document.getElementById('thinkersList');
  if (!container) return;
  const readBioLabel = (currentLang === 'ar') ? 'عرض المزيد ←' : (currentLang === 'fr') ? 'Découvrir le penseur →' : 'Discover Thinker →';

  const thinkersV4Data = (currentLang === 'ar') ? [
    {
      id: 'socrate',
      name: 'سقراط',
      era: '470 – 399 ق.م · أثينا',
      school: 'أبو الفلسفة والتفكير النقدي',
      bio: '«اعرف نفسك بنفسك». حكيم أثينا الذي جعل من فحص الحياة والضمير الإنساني أسمى غايات الفكر.',
      image: 'thinkers/images/socrate.jpg'
    },
    {
      id: 'platon',
      name: 'أفلاطون',
      era: '428 – 348 ق.م · أثينا',
      school: 'فلسفة المُثُل والمعرفة',
      bio: 'مؤسس الأكاديمية وصاحب أسطورة الكهف، وجّه العقل البشري نحو البحث عن الحق والجمال الخالص.',
      image: 'thinkers/images/platon.jpg'
    },
    {
      id: 'nietzsche',
      name: 'فريدريش نيتشه',
      era: '1844 – 1900 · ألمانيا',
      school: 'الوجودية وإرادة القوة',
      bio: 'فيلسوف تجاوز الذات ومفهوم حب القدر (Amor Fati)، يدعو لاحتضان الحياة بشجاعة.',
      image: 'thinkers/images/nietzsche.jpg'
    },
    {
      id: 'camus',
      name: 'ألبير كامو',
      era: '1913 – 1960 · فرنسا',
      school: 'فلسفة العبث والتمرد',
      bio: 'أديب نوبل وفيلسوف الحرية، يدعو إلى التمرد الواعي والشغف بالحياة والجمال في عالم عبثي.',
      image: 'thinkers/images/camus.jpg'
    },
    {
      id: 'schopenhauer',
      name: 'آرثر شوبنهاور',
      era: '1788 – 1860 · ألمانيا',
      school: 'فلسفة الإرادة والوضوح',
      bio: 'فيلسوف الصراحة العقلية، شرح طبيعة الرغبة الإنسانية وكيفية بلوغ السلام النفسي بالاستغناء.',
      image: 'thinkers/images/schopenhauer.jpg'
    },
    {
      id: 'marcaurele',
      name: 'ماركوس أوريليوس',
      era: '121 – 180 م · روما',
      school: 'الفلسفة الرواقية',
      bio: 'الإمبراطور الفيلسوف صاحب "التأملات"، المرشد الخالد في الانضباط الذاتي والقلعة الداخلية.',
      image: 'thinkers/images/marcaurele.jpg'
    }
  ] : (currentLang === 'fr') ? [
    {
      id: 'socrate',
      name: 'Socrate',
      era: '470 – 399 av. J.-C. · Athènes',
      school: 'Père de la Philosophie',
      bio: '« Connais-toi toi-même ». Le sage qui a placé l\'examen de l\'âme au cœur de la pensée.',
      image: 'thinkers/images/socrate.jpg'
    },
    {
      id: 'platon',
      name: 'Platon',
      era: '428 – 348 av. J.-C. · Athènes',
      school: 'Théorie des Idées & Idéalisme',
      bio: 'Fondateur de l\'Académie et penseur de l\'Allégorie de la caverne, quête de vérité pure.',
      image: 'thinkers/images/platon.jpg'
    },
    {
      id: 'nietzsche',
      name: 'Friedrich Nietzsche',
      era: '1844 – 1900 · Allemagne',
      school: 'Volonté & Amor Fati',
      bio: 'Penseur du dépassement de soi et de la grandeur d\'âme face aux défis de l\'existence.',
      image: 'thinkers/images/nietzsche.jpg'
    },
    {
      id: 'camus',
      name: 'Albert Camus',
      era: '1913 – 1960 · France',
      school: 'L\'Absurde & La Révolte',
      bio: 'Écrivain de la lucidité et de la révolte créatrice, chantre de la beauté et de la liberté.',
      image: 'thinkers/images/camus.jpg'
    },
    {
      id: 'schopenhauer',
      name: 'Arthur Schopenhauer',
      era: '1788 – 1860 · Allemagne',
      school: 'Philosophie de la Volonté',
      bio: 'Le maître de la lucidité psychologique, explorateur du désir et de la paix de l\'esprit.',
      image: 'thinkers/images/schopenhauer.jpg'
    },
    {
      id: 'marcaurele',
      name: 'Marc Aurèle',
      era: '121 – 180 ap. J.-C. · Rome',
      school: 'Stoïcisme Impérial',
      bio: 'L\'empereur philosophe, auteur des Pensées pour moi-même, maître de la citadelle intérieure.',
      image: 'thinkers/images/marcaurele.jpg'
    }
  ] : [
    {
      id: 'socrate',
      name: 'Socrates',
      era: '470 – 399 BC · Athens',
      school: 'Father of Philosophy',
      bio: '« Know thyself ». The Athenian sage who placed the examined life above all else.',
      image: 'thinkers/images/socrate.jpg'
    },
    {
      id: 'platon',
      name: 'Plato',
      era: '428 – 348 BC · Athens',
      school: 'Theory of Forms & Idealism',
      bio: 'Founder of the Academy and thinker behind the Allegory of the Cave.',
      image: 'thinkers/images/platon.jpg'
    },
    {
      id: 'nietzsche',
      name: 'Friedrich Nietzsche',
      era: '1844 – 1900 · Germany',
      school: 'Will to Power & Amor Fati',
      bio: 'Philosopher of self-overcoming and living life with unyielding courage.',
      image: 'thinkers/images/nietzsche.jpg'
    },
    {
      id: 'camus',
      name: 'Albert Camus',
      era: '1913 – 1960 · France',
      school: 'The Absurd & Lucid Revolt',
      bio: 'Nobel laureate and philosopher of freedom, finding invincible summer in dark winters.',
      image: 'thinkers/images/camus.jpg'
    },
    {
      id: 'schopenhauer',
      name: 'Arthur Schopenhauer',
      era: '1788 – 1860 · Germany',
      school: 'Philosophy of Will',
      bio: 'Master of psychological honesty, dissecting human desires and the path to peace.',
      image: 'thinkers/images/schopenhauer.jpg'
    },
    {
      id: 'marcaurele',
      name: 'Marcus Aurelius',
      era: '121 – 180 AD · Rome',
      school: 'Stoic Philosophy',
      bio: 'The philosopher-emperor and author of Meditations, guide to the inner citadel.',
      image: 'thinkers/images/marcaurele.jpg'
    }
  ];

  container.className = 'thinkers-v4-grid';
  container.innerHTML = thinkersV4Data.map(thinker => `
    <article class="thinker-v4-card" onclick="window.location.href='./thinkers/?thinker=${thinker.id}'" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.location.href='./thinkers/?thinker=${thinker.id}';}">
      <div class="thinker-v4-portrait-box">
        <img src="${thinker.image}" alt="${thinker.name}" loading="lazy" class="thinker-v4-portrait-img" onerror="this.src='brand_logo_official.png'">
      </div>
      <div>
        <h3 class="thinker-v4-name">${thinker.name}</h3>
        <div class="thinker-v4-school">${thinker.school}</div>
      </div>
      <p class="thinker-v4-bio">${thinker.bio}</p>
      <a href="./thinkers/?thinker=${thinker.id}" class="thinker-v4-btn" onclick="event.stopPropagation()">
        <span>${readBioLabel}</span>
      </a>
    </article>
  `).join('');
}

// --- 3. Featured Articles V4 ---
function populateRecentArticlesHome() {
  const container = document.getElementById('recentArticlesGrid');
  if (!container) return;

  const readLabel = (currentLang === 'ar') ? 'اقرأ المقال ←' : (currentLang === 'fr') ? 'Lire l\'article →' : 'Read article →';

  const articlesData = (currentLang === 'ar') ? [
    {
      title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟',
      category: '🧠 الفلسفة',
      readTime: '⏱️ 8 دقائق',
      desc: 'دراسة فلسفية ونفسية في فلسفة الإرادة عند شوبنهاور: كيف نتحرر من بندول الألم والملل ونصل للسكينة.',
      image: 'schopenhauer_happiness_illusion_hero.jpg',
      url: './articles/schopenhauer-happiness-illusion.html'
    },
    {
      title: 'الرواقية: فلسفة القوة والهدوء الداخلي',
      category: '🏛️ الرواقية',
      readTime: '⏱️ 6 دقائق',
      desc: 'دليل عملي لتطبيق ثنائية التحكم، وحب القدر، وبناء قلعة داخلية حصينة في مواجهة تقلبات الحياة.',
      image: 'marc_aurelius_writing.jpg',
      url: './files/stoicisme-force-calme.html'
    },
    {
      title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟',
      category: 'Ψ علم النفس',
      readTime: '⏱️ 5 دقائق',
      desc: 'أساليب نفسية وعقلية مجربة لكسر حلقة الاجترار الفكري واستعادة السكينة والهدوء في الحاضر.',
      image: 'overthinking_calm.jpg',
      url: './files/stop-overthinking.html'
    }
  ] : (currentLang === 'fr') ? [
    {
      title: 'Pourquoi Schopenhauer considérait-il le bonheur comme une illusion ?',
      category: '🧠 Philosophie',
      readTime: '⏱️ 8 min',
      desc: 'Une analyse philosophique sur la Volonté chez Schopenhauer et les clés pour atteindre la paix de l\'âme.',
      image: 'schopenhauer_happiness_illusion_hero.jpg',
      url: './articles/schopenhauer-happiness-illusion.html'
    },
    {
      title: 'Le Stoïcisme : Philosophie de la Force et du Calme',
      category: '🏛️ Stoïcisme',
      readTime: '⏱️ 6 min',
      desc: 'Un guide pratique pour appliquer la dichotomie du contrôle, l\'amor fati et bâtir une forteresse intérieure.',
      image: 'marc_aurelius_writing.jpg',
      url: './files/stoicisme-force-calme.html'
    },
    {
      title: 'Comment Stopper les Pensées Obsédantes et l\'Anxiété ?',
      category: 'Ψ Psychologie',
      readTime: '⏱️ 5 min',
      desc: 'Des méthodes éprouvées pour briser le cycle des ruminations mentales et retrouver la sérénité du présent.',
      image: 'overthinking_calm.jpg',
      url: './files/stop-overthinking.html'
    }
  ] : [
    {
      title: 'Why Did Schopenhauer Consider Happiness an Illusion?',
      category: '🧠 Philosophy',
      readTime: '⏱️ 8 min',
      desc: 'A philosophical inquiry into Schopenhauer\'s Will and how to find serenity beyond pain and boredom.',
      image: 'schopenhauer_happiness_illusion_hero.jpg',
      url: './articles/schopenhauer-happiness-illusion.html'
    },
    {
      title: 'Stoicism: A Philosophy of Strength and Inner Calm',
      category: '🏛️ Stoicism',
      readTime: '⏱️ 6 min',
      desc: 'A practical guide to applying the dichotomy of control, Amor Fati, and building an inner fortress.',
      image: 'marc_aurelius_writing.jpg',
      url: './files/stoicisme-force-calme.html'
    },
    {
      title: 'How to Stop Overthinking and Continuous Anxiety?',
      category: 'Ψ Psychology',
      readTime: '⏱️ 5 min',
      desc: 'Proven psychological strategies to break mental ruminations and regain peace in the present.',
      image: 'overthinking_calm.jpg',
      url: './files/stop-overthinking.html'
    }
  ];

  container.className = 'articles-v4-grid';
  container.innerHTML = articlesData.map(art => `
    <article class="article-v4-card" onclick="window.location.href='${art.url}'" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.location.href='${art.url}';}">
      <div class="article-v4-cover-wrapper">
        <img src="${art.image}" alt="${art.title}" loading="lazy" class="article-v4-cover-img" onerror="this.src='schopenhauer_happiness_illusion_hero.jpg'">
        <span class="article-v4-cat-pill">${art.category}</span>
      </div>
      <div class="article-v4-body">
        <div>
          <div class="article-v4-meta-row">
            <span>${art.readTime}</span>
            <span style="color: #DFB15B;">✦ Hikma & Nour</span>
          </div>
          <h3 class="article-v4-title" style="margin-top: 8px;">${art.title}</h3>
          <p class="article-v4-desc" style="margin-top: 8px;">${art.desc}</p>
        </div>
        <a href="${art.url}" class="article-v4-cta-link" onclick="event.stopPropagation()">
          <span>${readLabel}</span>
        </a>
      </div>
    </article>
  `).join('');
}

// --- 4. Audio Library Section V4 ---
function populateAudioHome() {
  const container = document.getElementById('audioCardsGrid');
  if (!container) return;

  const listenLabel = (currentLang === 'ar') ? 'ابدأ الاستماع ▶' : (currentLang === 'fr') ? 'Commencer l\'écoute ▶' : 'Start listening ▶';

  const audioData = (currentLang === 'ar') ? [
    {
      key: 'milena',
      title: 'رسائل إلى ميلينا',
      author: 'فرانز كافكا',
      duration: '⏱️ 10 دقائق',
      chapters: '📖 4 فصول',
      desc: 'مراسلات وجدانية وفلسفية عميقة حول الحب الإنساني، والخوف، والبحث عن الصدق المطلق.',
      image: 'audio_milena_cover.jpg'
    },
    {
      key: 'etranger',
      title: 'الغريب',
      author: 'ألبير كامو',
      duration: '⏱️ 16 دقيقة',
      chapters: '📖 6 فصول',
      desc: 'تحفة كامو الأدبية الخالدة حول عبثية الوجود والصدق المتناهي مع الذات.',
      image: 'audio_etranger_cover.jpg'
    },
    {
      key: 'alchemist',
      title: 'الخيميائي',
      author: 'باولو كويلو',
      duration: '⏱️ 13 دقيقة',
      chapters: '📖 6 فصول',
      desc: 'رحلة ملهمة لراعٍ أندلسي يبحث عن أسطورته الذاتية وتحقيق غايته الحقيقية في الحياة.',
      image: 'audio_alchemist_cover.jpg'
    }
  ] : (currentLang === 'fr') ? [
    {
      key: 'milena',
      title: 'Lettres à Milena',
      author: 'Franz Kafka',
      duration: '⏱️ 10 min',
      chapters: '📖 4 chapitres',
      desc: 'Une correspondance intime et philosophique sur l\'amour, l\'angoisse et la quête de vérité.',
      image: 'audio_milena_cover.jpg'
    },
    {
      key: 'etranger',
      title: 'L\'Étranger',
      author: 'Albert Camus',
      duration: '⏱️ 16 min',
      chapters: '📖 6 chapitres',
      desc: 'Le chef-d\'œuvre de Camus sur l\'absurdité de l\'existence et la lucidité absolue.',
      image: 'audio_etranger_cover.jpg'
    },
    {
      key: 'alchemist',
      title: 'L\'Alchimiste',
      author: 'Paulo Coelho',
      duration: '⏱️ 13 min',
      chapters: '📖 6 chapitres',
      desc: 'La quête initiatique d\'un berger à la recherche de sa Légende Personnelle.',
      image: 'audio_alchemist_cover.jpg'
    }
  ] : [
    {
      key: 'milena',
      title: 'Letters to Milena',
      author: 'Franz Kafka',
      duration: '⏱️ 10 min',
      chapters: '📖 4 chapters',
      desc: 'An intimate and philosophical correspondence exploring human love, fear, and emotional truth.',
      image: 'audio_milena_cover.jpg'
    },
    {
      key: 'etranger',
      title: 'The Stranger',
      author: 'Albert Camus',
      duration: '⏱️ 16 min',
      chapters: '📖 6 chapters',
      desc: 'Camus\' masterpiece exploring existential absurdity, emotional truth, and personal honesty.',
      image: 'audio_etranger_cover.jpg'
    },
    {
      key: 'alchemist',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      duration: '⏱️ 13 min',
      chapters: '📖 6 chapters',
      desc: 'The inspiring journey of an Andalusian shepherd boy seeking his Personal Legend.',
      image: 'audio_alchemist_cover.jpg'
    }
  ];

  container.className = 'audio-v4-grid';
  container.innerHTML = audioData.map(item => `
    <article class="audio-v4-card" onclick="window.location.href='./audio/?book=${item.key}'" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.location.href='./audio/?book=${item.key}';}">
      <div class="audio-v4-cover-wrapper">
        <img src="${item.image}" alt="${item.title} - ${item.author}" loading="lazy" class="audio-v4-cover-img" onerror="this.src='brand_logo_official.png'">
        <span class="audio-v4-badge-tag">🎧 AUDIO</span>
      </div>
      <div class="audio-v4-body">
        <div>
          <div class="audio-v4-meta-pills">
            <span>${item.chapters}</span>
            <span>•</span>
            <span>${item.duration}</span>
          </div>
          <h3 class="audio-v4-title" style="margin-top: 8px;">${item.title}</h3>
          <p class="audio-v4-author" style="margin-top: 4px;">${item.author}</p>
          <p class="audio-v4-desc" style="margin-top: 8px;">${item.desc}</p>
        </div>
        <a href="./audio/?book=${item.key}" class="audio-v4-play-btn" onclick="event.stopPropagation()">
          <span>${listenLabel}</span>
        </a>
      </div>
    </article>
  `).join('');
}

function populateArticles(filterCategory = 'all') {
  const container = document.getElementById('articlesList');
  if (!container) return;
  let articles = TIKTOK_DATA.content[currentLang].articles;
  const readLabel = TIKTOK_DATA.ui[currentLang].readArticle || "Lire l'article";
  const featuredLabel = TIKTOK_DATA.ui[currentLang].featured || "En vedette";
  if (!articles) return;

  if (filterCategory !== 'all') {
    articles = articles.filter(art => art.category === filterCategory);
  }

  const homeArticles = articles.slice(0, 3);

  container.innerHTML = homeArticles.map(art => {
    const badgeHtml = art.featured ? `<span class="card-featured-badge">${featuredLabel}</span>` : "";
    const categoryLabel = TIKTOK_DATA.ui[currentLang][art.category] || art.category;
    
    const imageHtml = art.image ? `
      <img src="${art.image}" alt="${art.title}" class="article-image">
    ` : `
      <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.02)">
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="var(--accent-gold)" fill="none" stroke-width="1.5" style="opacity: 0.3;">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </div>
    `;

    return `
      <div class="article-card" data-category="${art.category}" style="cursor: pointer;">
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
        <h3 class="article-title">${art.title}</h3>
        <p class="article-desc">${art.desc}</p>
        <a class="card-action-link" style="pointer-events: none;">
          <span>${readLabel}</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;
  }).join('');

  // Bind click redirect
  const cards = container.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      window.location.href = `./articles/?category=${cat}`;
    });
  });
}

function populateAdvices() {
  const container = document.getElementById('advicesList');
  const advices = TIKTOK_DATA.content[currentLang].advices;
  if (!container || !advices) return;

  container.innerHTML = advices.map(advice => {
    const iconSvg = ICONS[advice.icon] || ICONS['external-link'];
    const thinkerLabel = currentLang === 'ar' ? `بإلهام من: ${advice.thinker}` : 
                         currentLang === 'en' ? `Inspired by: ${advice.thinker}` : 
                         `Inspiré de : ${advice.thinker}`;

    return `
      <div class="advice-card">
        <div class="advice-icon-wrapper">
          <svg viewBox="0 0 24 24">${iconSvg}</svg>
        </div>
        <div class="advice-content">
          <div class="advice-header">
            <span class="advice-category">${advice.category}</span>
            <span class="advice-thinker">${thinkerLabel}</span>
          </div>
          <h3 class="advice-title">${advice.title}</h3>
          <p class="advice-desc">${advice.desc}</p>
        </div>
      </div>
    `;
  }).join('');
}

function populateLinks() {
  const container = document.getElementById('linksList');
  const links = TIKTOK_DATA.content[currentLang].links;
  if (!container || !links) return;

  container.innerHTML = links.map(link => {
    const iconSvg = ICONS[link.icon] || ICONS['external-link'];
    const featuredClass = link.featured ? 'featured' : '';
    
    return `
      <a href="${link.url}" target="_blank" class="link-card ${featuredClass}">
        <div class="link-icon-container">
          <svg viewBox="0 0 24 24">${iconSvg}</svg>
        </div>
        <span class="link-title">${link.title}</span>
        <svg class="link-arrow" viewBox="0 0 24 24" width="16" height="16">
          <polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
        </svg>
      </a>
    `;
  }).join('');
}

function populateVideos() {
  const container = document.getElementById('videoGrid');
  const videos = TIKTOK_DATA.content[currentLang].videos;
  if (!container || !videos) return;

  container.innerHTML = videos.map(video => {
    const tagsHtml = video.tags.map(tag => `<span class="video-tag">${tag}</span>`).join('');
    
    return `
      <div class="video-card" data-youtube-id="${video.youtubeId}">
        <div class="video-thumbnail-container">
          <div class="video-thumbnail-placeholder">
            <svg class="zen-icon" viewBox="0 0 24 24">
              <path d="M12 2c0 0-4 6-4 9s2 5 4 5 4-2 4-5-4-9-4-9z"></path>
              <path d="M12 8c0 0-6 2-6 5s3.5 4 6 4 6-1 6-4-6-5-6-5z"></path>
              <path d="M12 11c0 0-8 1-8 4s5 3 8 3 8 0 8-3-8-4-8-4z"></path>
            </svg>
            <span class="video-duration">${video.duration}</span>
            <div class="play-badge">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>
        <div class="video-info">
          <h3 class="video-title">${video.title}</h3>
          <div class="video-tags">${tagsHtml}</div>
          <div class="video-stats">
            <div class="video-stat">
              <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              <span>${video.views}</span>
            </div>
            <div class="video-stat">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span>${video.likes}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Setup video modal actions
  setupVideoModal();
}

// --- Video Modal Setup ---
function setupVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  const closeBtn = document.getElementById('modalCloseBtn');
  const videoCards = document.querySelectorAll('.video-card');

  if (!modal || !iframe || !closeBtn) return;

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const youtubeId = card.getAttribute('data-youtube-id');
      if (youtubeId) {
        iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// --- FAQ Accordion populate & binding ---
function populateFaq() {
  const container = document.getElementById('faqList');
  if (!container) return;
  const faq = TIKTOK_DATA.content[currentLang].faq;
  if (!faq) return;
  
  container.innerHTML = faq.map((item, index) => {
    return `
      <div class="faq-item" data-index="${index}">
        <button class="faq-question">
          <span>${item.q}</span>
          <svg class="faq-chevron" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            ${item.a}
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  bindFaqAccordion();
}

function bindFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });
      
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}





// --- Navigation scrollspy and mobile menu toggler ---
function initNavigation() {
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.scroll-section');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }

  // Scrollspy logic
  window.addEventListener('scroll', () => {
    let currentSectionId = "";
    
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop;
      const sectionHeight = sec.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

function initNavbarScroll() {
  const header = document.querySelector('.navbar-header');
  if (!header) return;
  
  // Set initial state
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

// --- Contact Form Handling ---
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (!form || !feedback || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    feedback.className = 'form-feedback';
    feedback.style.display = 'none';

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      feedback.textContent = TIKTOK_DATA.ui[currentLang].errorFields;
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = TIKTOK_DATA.ui[currentLang].errorEmail;
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }

    // Simulate sending
    submitBtn.disabled = true;
    submitBtn.textContent = TIKTOK_DATA.ui[currentLang].sending;

    setTimeout(() => {
      feedback.textContent = TIKTOK_DATA.ui[currentLang].successMsg;
      feedback.classList.add('success');
      feedback.style.display = 'block';

      form.reset();

      submitBtn.disabled = false;
      
      const submitTextSpan = document.createElement('span');
      submitTextSpan.setAttribute('data-i18n', 'submitBtn');
      submitTextSpan.textContent = TIKTOK_DATA.ui[currentLang].submitBtn;
      submitBtn.innerHTML = '';
      submitBtn.appendChild(submitTextSpan);
      
      const btnSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      btnSvg.setAttribute('viewBox', '0 0 24 24');
      btnSvg.innerHTML = '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>';
      submitBtn.appendChild(btnSvg);
      
    }, 1500);
  });
}

// --- Newsletter Form Handling V4 ---
function setupNewsletterForm() {
  const form = document.getElementById('homepageNewsletterForm');
  const input = document.getElementById('homepageNewsletterEmail');
  const feedback = document.getElementById('homepageNewsletterFeedback');
  const submitBtn = document.getElementById('homepageNewsletterBtn');
  if (!form || !input || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      feedback.style.color = '#EF4444';
      feedback.textContent = currentLang === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح.' :
                             currentLang === 'fr' ? 'Veuillez saisir une adresse email valide.' :
                             'Please enter a valid email address.';
      feedback.style.display = 'block';
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'ar' ? 'جاري الاشتراك...' : currentLang === 'fr' ? 'Inscription...' : 'Subscribing...';
    }

    setTimeout(() => {
      try {
        const list = JSON.parse(localStorage.getItem('hikma_newsletter_subscribers') || '[]');
        if (!list.includes(email)) list.push(email);
        localStorage.setItem('hikma_newsletter_subscribers', JSON.stringify(list));
      } catch (err) {}

      feedback.style.color = '#34D399';
      feedback.textContent = currentLang === 'ar' ? 'شكراً لاشتراكك في حكمة ونور! أهلاً بك في رحلتنا الفكرية. 🌿✨' :
                             currentLang === 'fr' ? 'Merci pour votre inscription à Hikma & Nour ! Bienvenue dans notre voyage intellectuel. 🌿✨' :
                             'Thank you for subscribing to Hikma & Nour! Welcome to our intellectual journey. 🌿✨';
      feedback.style.display = 'block';
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'ar' ? 'اشترك الآن' : currentLang === 'fr' ? 'S\'abonner' : 'Subscribe';
      }
    }, 700);
  });
}

// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  initLanguageSelector(); // sets and translates page elements
  initNavigation();
  initNavbarScroll();
  setupContactForm();
  setupNewsletterForm();
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

