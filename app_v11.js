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
let currentQuoteIndex = -1;

// --- Language/Translation Engine ---
function setLanguage(lang) {
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
    countLabel.textContent = lang === 'ar' ? `عرض كافة المقالات (${count})` : `Voir tous les articles (${count})`;
  }

  // Translate input placeholders
  updatePlaceholders();

  // Re-populate all dynamic components with the active language content
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

function populateThinkers() {
  const container = document.getElementById('thinkersList');
  if (!container) return;
  const thinkers = TIKTOK_DATA.content[currentLang].thinkers;
  if (!thinkers) return;
  const readBioLabel = TIKTOK_DATA.ui[currentLang].discoverThinker || "Découvrir →";
  const featuredLabel = TIKTOK_DATA.ui[currentLang].featured || "En vedette";

  // Display exactly the 4 requested major thinkers: Nietzsche, Marc Aurèle, Sénèque, Camus
  const targetIds = ['nietzsche', 'marcaurele', 'seneque', 'camus'];
  const homeThinkers = [];
  targetIds.forEach(id => {
    const found = thinkers.find(t => t.id === id);
    if (found) homeThinkers.push(found);
  });

  const displayThinkers = homeThinkers.length === 4 ? homeThinkers : thinkers.slice(0, 4);

  container.innerHTML = displayThinkers.map(thinker => {
    const badgeHtml = thinker.featured ? `<span class="card-featured-badge">${featuredLabel}</span>` : "";
    return `
      <div class="thinker-card" data-thinker-id="${thinker.id}" style="cursor: pointer;">
        <div class="thinker-image-container">
          ${badgeHtml}
          <img src="${thinker.image}" alt="${thinker.name}" class="thinker-image">
        </div>
        <div class="card-meta-row">
          <span>${thinker.era}</span>
          <span class="card-meta-dot">•</span>
          <span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">${thinker.school}</span>
        </div>
        <h3 class="thinker-name">${thinker.name}</h3>
        <p class="thinker-bio">${thinker.bio}</p>
        <a class="card-action-link" style="pointer-events: none;">
          <span>${readBioLabel}</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;
  }).join('');

  // Bind click redirect
  const cards = container.querySelectorAll('.thinker-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-thinker-id');
      window.location.href = `./thinkers/?thinker=${id}`;
    });
  });
}

function populateRecentArticlesHome() {
  const container = document.getElementById('recentArticlesGrid');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const readLabel = isAr ? 'اقرأ المقال ←' : 'Lire l\'article →';

  const articlesData = isAr ? [
    {
      title: 'الرواقية: فلسفة القوة والهدوء الداخلي',
      category: 'الرواقية',
      categoryColor: '#34D399',
      categoryBg: 'rgba(52, 211, 153, 0.15)',
      readTime: '⏱️ 6 دقائق',
      desc: 'دليل عملي لتطبيق ثنائية التحكم، وحب القدر، وبناء قلعة داخلية حصينة في مواجهة تقلبات الحياة.',
      url: './files/stoicisme-force-calme.html'
    },
    {
      title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟',
      category: 'علم النفس',
      categoryColor: '#60A5FA',
      categoryBg: 'rgba(96, 165, 250, 0.15)',
      readTime: '⏱️ 5 دقائق',
      desc: 'أساليب نفسية وعقلية مجربة لكسر حلقة الاجترار الفكري واستعادة السكينة والهدوء في الحاضر.',
      url: './files/stop-overthinking.html'
    },
    {
      title: 'الانضباط الذاتي وقوة الإرادة عند الفلاسفة القدماء',
      category: 'تطوير الذات',
      categoryColor: '#FBBF24',
      categoryBg: 'rgba(251, 191, 36, 0.15)',
      readTime: '⏱️ 7 دقائق',
      desc: 'تعاليم ماركوس أوريليوس وسينيكا للتحكم في النزوات العشوائية وبناء عادات يومية صلبة وواعية.',
      url: './files/self-discipline.html'
    },
    {
      title: 'العبث والحرية عند ألبير كامو',
      category: 'الوجودية',
      categoryColor: '#A78BFA',
      categoryBg: 'rgba(167, 139, 250, 0.15)',
      readTime: '⏱️ 6 دقائق',
      desc: 'كيف تصنع المعنى والتمرد الواعي في عالم صامت؟ الفلسفة الملهمة لكامو في حب الحياة والحرية.',
      url: './files/absurde-camus.html'
    },
    {
      title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟',
      category: 'علم النفس',
      categoryColor: '#60A5FA',
      categoryBg: 'rgba(96, 165, 250, 0.15)',
      readTime: '⏱️ 5 دقائق',
      desc: 'قوة الصمت والهدوء والغموض في بناء الهيبة والكاريزما والاحترام الذاتي الحقيقي.',
      url: './articles/why-people-respect-silent-person.html'
    },
    {
      title: 'لماذا يبتعد الناس عنك عندما تنجح؟',
      category: 'علم النفس',
      categoryColor: '#60A5FA',
      categoryBg: 'rgba(96, 165, 250, 0.15)',
      readTime: '⏱️ 6 دقائق',
      desc: 'التحليل النفسي لسلوك المحيطين عند تحقيق النجاح، وديناميكيات الحسد، وكيف تحافظ على سلامك الداخلي.',
      url: './articles/why-people-distance-when-you-succeed.html'
    }
  ] : [
    {
      title: 'Le Stoïcisme : Philosophie de la Force et du Calme',
      category: 'Stoïcisme',
      categoryColor: '#34D399',
      categoryBg: 'rgba(52, 211, 153, 0.15)',
      readTime: '⏱️ 6 min',
      desc: 'Un guide pratique pour appliquer la dichotomie du contrôle, l\'amor fati et bâtir une forteresse intérieure solide.',
      url: './files/stoicisme-force-calme.html'
    },
    {
      title: 'Comment Stopper les Pensées Obsédantes et l\'Anxiété ?',
      category: 'Psychologie',
      categoryColor: '#60A5FA',
      categoryBg: 'rgba(96, 165, 250, 0.15)',
      readTime: '⏱️ 5 min',
      desc: 'Des méthodes éprouvées pour briser le cycle des ruminations mentales et retrouver la sérénité du moment présent.',
      url: './files/stop-overthinking.html'
    },
    {
      title: 'L\'Autodiscipline et la Volonté selon les Anciens',
      category: 'Développement',
      categoryColor: '#FBBF24',
      categoryBg: 'rgba(251, 191, 36, 0.15)',
      readTime: '⏱️ 7 min',
      desc: 'Les enseignements de Marc Aurèle et Sénèque pour dominer ses pulsions et maîtriser ses habitudes quotidiennes.',
      url: './files/self-discipline.html'
    },
    {
      title: 'L\'Absurde et la Liberté chez Albert Camus',
      category: 'Existentialisme',
      categoryColor: '#A78BFA',
      categoryBg: 'rgba(167, 139, 250, 0.15)',
      readTime: '⏱️ 6 min',
      desc: 'Comment forger du sens et une révolte lucide dans un monde silencieux ? La philosophie vivifiante de Camus.',
      url: './files/absurde-camus.html'
    },
    {
      title: 'Pourquoi les gens respectent une personne silencieuse ?',
      category: 'Psychologie',
      categoryColor: '#60A5FA',
      categoryBg: 'rgba(96, 165, 250, 0.15)',
      readTime: '⏱️ 5 min',
      desc: 'La puissance de la retenue, du mystère et de la maîtrise de soi pour forger un respect authentique.',
      url: './articles/why-people-respect-silent-person.html'
    },
    {
      title: 'Pourquoi les gens s\'éloignent quand vous réussissez ?',
      category: 'Psychologie',
      categoryColor: '#60A5FA',
      categoryBg: 'rgba(96, 165, 250, 0.15)',
      readTime: '⏱️ 6 min',
      desc: 'Comprendre les dynamiques de l\'envie, la projection psychologique et comment préserver sa paix intérieure.',
      url: './articles/why-people-distance-when-you-succeed.html'
    }
  ];

  container.innerHTML = articlesData.map(item => `
    <div class="article-card" style="background: rgba(18, 28, 22, 0.85); border: 1px solid rgba(223, 177, 91, 0.25); border-radius: 18px; padding: 22px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.25s, border-color 0.25s;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <span style="background: ${item.categoryBg}; color: ${item.categoryColor}; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 12px;">${item.category}</span>
          <span style="color: var(--text-muted); font-size: 0.8rem;">${item.readTime}</span>
        </div>
        <h3 style="font-size: 1.15rem; color: #FFFDF8; margin: 0 0 10px; font-weight: 700; line-height: 1.4;">${item.title}</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin: 0 0 18px;">${item.desc}</p>
      </div>
      <a href="${item.url}" class="social-btn" style="text-decoration: none; justify-content: center; width: 100%; padding: 10px;">
        <span>${readLabel}</span>
      </a>
    </div>
  `).join('');
}

function populateAudioHome() {
  const container = document.getElementById('audioCardsGrid');
  if (!container) return;

  const isAr = currentLang === 'ar';
  const listenLabel = isAr ? '▶ استمع الآن' : '▶ Écouter';

  const audioData = isAr ? [
    {
      title: 'الغريب',
      author: 'ألبير كامو',
      duration: '⏱️ 16 دقيقة',
      desc: 'تحفة كامو الأدبية حول عبثية الوجود والصدق المطلق مع الذات.',
      image: 'audio_etranger_cover.jpg'
    },
    {
      title: 'الأمير الصغير',
      author: 'أنطوان دو سانت إكزوبيري',
      duration: '⏱️ 12 دقيقة',
      desc: 'قصة فلسفية وشاعرية عالمية حول جوهر الأشياء الذي لا يُرى إلا بالقلب.',
      image: 'audio_petit_prince_cover.jpg'
    },
    {
      title: 'الخيميائي',
      author: 'باولو كويلو',
      duration: '⏱️ 13 دقيقة',
      desc: 'رحلة ملهمة لراعٍ أندلسي يبحث عن أسطورته الذاتية وتحقيق غايته في الحياة.',
      image: 'audio_alchemist_cover.jpg'
    }
  ] : [
    {
      title: 'L\'Étranger',
      author: 'Albert Camus',
      duration: '⏱️ 16 min',
      desc: 'Le chef-d\'œuvre de Camus sur l\'absurdité de l\'existence et la sincérité absolue.',
      image: 'audio_etranger_cover.jpg'
    },
    {
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      duration: '⏱️ 12 min',
      desc: 'Un conte poétique et philosophique universel sur l\'essentiel invisible pour les yeux.',
      image: 'audio_petit_prince_cover.jpg'
    },
    {
      title: 'L\'Alchimiste',
      author: 'Paulo Coelho',
      duration: '⏱️ 13 min',
      desc: 'La quête initiatique d\'un berger à la recherche de sa Légende Personnelle.',
      image: 'audio_alchemist_cover.jpg'
    }
  ];

  container.innerHTML = audioData.map(item => `
    <div class="article-card" style="background: rgba(18, 28, 22, 0.85); border: 1px solid rgba(223, 177, 91, 0.25); border-radius: 18px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.25s, border-color 0.25s;">
      <div>
        <div style="width: 100%; height: 180px; border-radius: 14px; overflow: hidden; margin-bottom: 14px; position: relative;">
          <img src="${item.image}" alt="${item.title} - ${item.author}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.75); color: #FFF; font-size: 0.75rem; padding: 3px 8px; border-radius: 8px; font-weight: 600;">${item.duration}</span>
        </div>
        <h3 style="font-size: 1.12rem; color: #FFFDF8; margin: 0 0 6px; font-weight: 700;">${item.title}</h3>
        <p style="font-size: 0.82rem; color: var(--accent-gold); margin: 0 0 8px; font-weight: 600;">${item.author}</p>
        <p style="font-size: 0.86rem; color: var(--text-secondary); line-height: 1.5; margin: 0 0 14px;">${item.desc}</p>
      </div>
      <a href="./audio/" class="quiz-btn" style="text-decoration: none; padding: 8px 16px; font-size: 0.85rem; font-weight: 700; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; gap: 6px;">
        <span>${listenLabel}</span>
      </a>
    </div>
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

// --- Initialize Page ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  initLanguageSelector(); // sets and translates page elements
  initNavigation();
  initNavbarScroll();
  setupContactForm();
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

