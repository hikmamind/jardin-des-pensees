import TIKTOK_DATA from './data_v2.js';

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

// Language Flags and Names map
// Language Names map (without flag emojis to avoid Windows rendering bugs)
const LANG_METADATA = {
  fr: { label: "FR" },
  en: { label: "EN" },
  ar: { label: "AR" }
};

// Force Arabic on first load of this version to override old French localStorage values
if (!localStorage.getItem('lang_force_ar_v2')) {
  localStorage.setItem('lang', 'ar');
  localStorage.setItem('lang_force_ar_v2', 'true');
}

let currentLang = localStorage.getItem('lang') || 'ar';
let currentQuoteIndex = -1;

// --- Language/Translation Engine ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  // Set document attributes for direction & lang
  document.documentElement.lang = lang;
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  // Update active language selector button representation
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = LANG_METADATA[lang].label;

  // Translate static labels marked with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  // Translate input placeholders
  updatePlaceholders();

  // Re-populate all dynamic components with the active language content
  populateProfile();
  populateThinkers();
  populateArticles();
  populateAdvices();
  populateLinks();
  populateVideos();
  displayNewWisdom(true);
}

function updatePlaceholders() {
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  
  if (nameInput) nameInput.placeholder = TIKTOK_DATA.ui[currentLang].placeholderName;
  if (emailInput) emailInput.placeholder = TIKTOK_DATA.ui[currentLang].placeholderEmail;
  if (messageInput) messageInput.placeholder = TIKTOK_DATA.ui[currentLang].placeholderMessage;
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

// --- Wisdom Generator Logic ---
function displayNewWisdom(isInitial = false) {
  const textEl = document.getElementById('wisdomText');
  const transEl = document.getElementById('wisdomTranslation');
  const authorEl = document.getElementById('wisdomAuthor');

  const quotesList = TIKTOK_DATA.content[currentLang].quotes;
  if (!textEl || !transEl || !authorEl || !quotesList || !quotesList.length) return;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * quotesList.length);
  } while (nextIndex === currentQuoteIndex && quotesList.length > 1);

  currentQuoteIndex = nextIndex;
  const quote = quotesList[currentQuoteIndex];

  let primaryText = `"${quote.text}"`;
  let secondaryText = "";

  if (currentLang === 'ar') {
    const frenchQuote = TIKTOK_DATA.content.fr.quotes.find(q => q.author === quote.author || q.author.includes(quote.author));
    secondaryText = frenchQuote ? `"${frenchQuote.text}"` : "";
  } else {
    const arQuote = TIKTOK_DATA.content.ar.quotes.find(q => q.author === quote.author || quote.author.includes(q.author));
    secondaryText = arQuote ? `"${arQuote.text}"` : "";
  }

  if (isInitial) {
    textEl.textContent = primaryText;
    transEl.textContent = secondaryText;
    authorEl.textContent = quote.author;
  } else {
    textEl.classList.add('fade-out');
    transEl.classList.add('fade-out');
    authorEl.classList.add('fade-out');

    setTimeout(() => {
      textEl.textContent = primaryText;
      transEl.textContent = secondaryText;
      authorEl.textContent = quote.author;

      textEl.classList.remove('fade-out');
      transEl.classList.remove('fade-out');
      authorEl.classList.remove('fade-out');
    }, 400);
  }
}

// --- Dynamic Rendering of Sections ---
function populateProfile() {
  const content = TIKTOK_DATA.content[currentLang];
  document.getElementById('displayName').textContent = content.displayName;
  document.getElementById('bio').textContent = content.bio;

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

  container.innerHTML = thinkers.map(thinker => {
    return `
      <div class="thinker-card">
        <div class="thinker-header">
          <div class="thinker-avatar-placeholder">
            <svg viewBox="0 0 24 24">${ICONS['user']}</svg>
          </div>
          <div class="thinker-meta">
            <span class="thinker-name">${thinker.name}</span>
            <span class="thinker-era">${thinker.era}</span>
            <span class="thinker-school">${thinker.school}</span>
          </div>
        </div>
        <p class="thinker-bio">${thinker.bio}</p>
      </div>
    `;
  }).join('');
}

function populateArticles(filterCategory = 'all') {
  const container = document.getElementById('articlesList');
  if (!container) return;
  let articles = TIKTOK_DATA.content[currentLang].articles;
  const readLabel = TIKTOK_DATA.ui[currentLang].readMore;
  if (!articles) return;

  // Filter by category if needed
  if (filterCategory !== 'all') {
    articles = articles.filter(art => art.category === filterCategory);
  }

  container.innerHTML = articles.map(art => {
    return `
      <div class="article-card">
        <span class="article-meta">${art.readTime}</span>
        <h3 class="article-title">${art.title}</h3>
        <p class="article-desc">${art.desc}</p>
        <a href="#" class="article-link">
          <span>${readLabel}</span>
          <svg viewBox="0 0 24 24" width="14" height="14">
            <polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
          </svg>
        </a>
      </div>
    `;
  }).join('');
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
  initTheme();
  initLanguageSelector(); // sets and translates page elements
  initNavigation();
  initNavbarScroll();
  setupContactForm();

  const nextWisdomBtn = document.getElementById('nextWisdomBtn');
  if (nextWisdomBtn) {
    nextWisdomBtn.addEventListener('click', () => displayNewWisdom(false));
  }
});
