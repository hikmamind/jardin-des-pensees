import TIKTOK_DATA from '../../data_v11.js';

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
let activeMonthIndex = new Date().getMonth();
let currentModalQuoteData = null;

const MONTHS_DATA = {
  ar: [
    { name: "يناير", days: 31, img: "../../calendar/images/month_01.jpg", theme: "العزيمة والصمود الرواقي", sub: "استقبل السنة بتأملات العزيمة والصمود الرواقي وتهذيب النفس." },
    { name: "فبراير", days: 28, img: "../../calendar/images/month_02.jpg", theme: "التأمل العميق وتصفية الذهن", sub: "رحلة في غياهب الفكر الهادئ لضبط البوصلة وتصفية الذهن من المشتتات." },
    { name: "مارس", days: 31, img: "../../calendar/images/month_03.jpg", theme: "التجدد والنمو الفكري", sub: "تفتُّح الأفكار الكبيرة والوعي بالقدرات الإنسانية الكامنة." },
    { name: "أبريل", days: 30, img: "../../calendar/images/month_04.jpg", theme: "بناء قلعة العقل الداخلية", sub: "كيف تحمي سلامك الداخلي من تقلبات العالم والظروف الخارجية." },
    { name: "مايو", days: 31, img: "../../calendar/images/month_05.jpg", theme: "الإشراق وحكمة الطبيعة", sub: "العيش بالتوافق مع قوانين الطبيعة وفهم الانسجام الإنساني." },
    { name: "يونيو", days: 30, img: "../../calendar/images/month_06.jpg", theme: "قمة التركيز والسيطرة على الذات", sub: "التغلب على الشهوات والمشتتات لتحقيق الإنجازات العظيمة." },
    { name: "يوليو", days: 31, img: "../../calendar/images/month_07.jpg", theme: "السكينة والهدوء النفسي", sub: "تأملات ساحلية في طمأنينة الروح والتصالح مع الذات." },
    { name: "أغسطس", days: 31, img: "../../calendar/images/month_08.jpg", theme: "الوضوح والتغلب على الوهم", sub: "الرؤية النافذة لما هو حقيقي وما هو مجرد مخاوف وهمية." },
    { name: "سبتمبر", days: 30, img: "../../calendar/images/month_09.jpg", theme: "التعمق في المعرفة والحكمة", sub: "القراءة الواعية والغوص في كتب وثمار عقول كبار المفكرين." },
    { name: "أكتوبر", days: 31, img: "../../calendar/images/month_10.jpg", theme: "التوازن ومواجهة المشتتات", sub: "استعادة السيطرة على الانتباه والتركيز في الأهداف الجوهرية." },
    { name: "نوفمبر", days: 30, img: "../../calendar/images/month_11.jpg", theme: "الخلوة الفكرية وتهذيب النفس", sub: "لحظات الهدوء الدافئة أمام ذاتك للتقييم والتعديل." },
    { name: "ديسمبر", days: 31, img: "../../calendar/images/month_12.jpg", theme: "حصاد السنة والحكمة الخالدة", sub: "مراجعة عاداتك وإنجازاتك استعداداً لبداية أكثر حكمة وصبر." }
  ],
  fr: [
    { name: "Janvier", days: 31, img: "../../calendar/images/month_01.jpg", theme: "Volonté & Résilience Stoïcienne", sub: "Commencez l'année avec des réflexions sur la discipline et la maîtrise de soi." },
    { name: "Février", days: 28, img: "../../calendar/images/month_02.jpg", theme: "Méditation & Clarté Mentale", sub: "Un voyage dans la pensée calme pour recentrer son esprit et éliminer le superflu." },
    { name: "Mars", days: 31, img: "../../calendar/images/month_03.jpg", theme: "Renouveau & Éveil Philosophique", sub: "L'éclosion des grandes idées et la prise de conscience de son potentiel intérieur." },
    { name: "Avril", days: 30, img: "../../calendar/images/month_04.jpg", theme: "La Citadelle Intérieure", sub: "Protéger sa sérénité face aux aléas du monde et aux tumultes extérieurs." },
    { name: "Mai", days: 31, img: "../../calendar/images/month_05.jpg", theme: "Harmonie & Sagesse de la Nature", sub: "Vivre en accord avec les lois de la nature et cultiver la bienveillance." },
    { name: "Juin", days: 30, img: "../../calendar/images/month_06.jpg", theme: "Focus & Maîtrise des Passions", sub: "Surmonter les distractions quotidiennes pour accomplir des œuvres durables." },
    { name: "Juillet", days: 31, img: "../../calendar/images/month_07.jpg", theme: "Sérénité & Paix de l'Âme", sub: "Méditations estivales sur la tranquillité de l'esprit et la paix avec soi-même." },
    { name: "Août", days: 31, img: "../../calendar/images/month_08.jpg", theme: "Discernement & Lucidité", sub: "Distinguer ce qui dépend de nous de ce qui n'en dépend pas." },
    { name: "Septembre", days: 30, img: "../../calendar/images/month_09.jpg", theme: "Immersion dans le Savoir", sub: "Lecture attentive et exploration des grands esprits de la philosophie." },
    { name: "Octobre", days: 31, img: "../../calendar/images/month_10.jpg", theme: "Équilibre & Présence", sub: "Reprendre le contrôle de son attention et se concentrer sur l'essentiel." },
    { name: "Novembre", days: 30, img: "../../calendar/images/month_11.jpg", theme: "Solitude Féconde & Introspection", sub: "Moments d'introspection chaleureux pour évaluer et enrichir sa vie intérieure." },
    { name: "Décembre", days: 31, img: "../../calendar/images/month_12.jpg", theme: "Bilan & Sagesse Intemporelle", sub: "Réflexion sur l'année écoulée et préparation sereine d'un nouveau cycle." }
  ],
  en: [
    { name: "January", days: 31, img: "../../calendar/images/month_01.jpg", theme: "Willpower & Stoic Resilience", sub: "Start the year with thoughts on self-mastery, discipline, and purpose." },
    { name: "February", days: 28, img: "../../calendar/images/month_02.jpg", theme: "Deep Meditation & Mental Clarity", sub: "A journey into quiet thought to eliminate distractions and refocus." },
    { name: "March", days: 31, img: "../../calendar/images/month_03.jpg", theme: "Renewal & Intellectual Growth", sub: "The blossoming of profound ideas and realization of human potential." },
    { name: "April", days: 30, img: "../../calendar/images/month_04.jpg", theme: "The Inner Citadel", sub: "Shielding your peace of mind from external chaos and uncertainty." },
    { name: "May", days: 31, img: "../../calendar/images/month_05.jpg", theme: "Harmony & Nature's Wisdom", sub: "Living in accord with nature's laws and cultivating universal kinship." },
    { name: "June", days: 30, img: "../../calendar/images/month_06.jpg", theme: "Focus & Self-Mastery", sub: "Overcoming passions and distractions to build meaningful achievements." },
    { name: "July", days: 31, img: "../../calendar/images/month_07.jpg", theme: "Serenity & Inner Peace", sub: "Summer reflections on soul tranquility and reconciliation with oneself." },
    { name: "August", days: 31, img: "../../calendar/images/month_08.jpg", theme: "Discernment & Clarity", sub: "Seeing through illusions to grasp what is truly real and within control." },
    { name: "September", days: 30, img: "../../calendar/images/month_09.jpg", theme: "Deep Wisdom & Knowledge", sub: "Mindful reading and deep diving into the classics of great thinkers." },
    { name: "October", days: 31, img: "../../calendar/images/month_10.jpg", theme: "Balance & Presence", sub: "Regaining control over attention and focusing on core objectives." },
    { name: "November", days: 30, img: "../../calendar/images/month_11.jpg", theme: "Quiet Reflection & Self-Refinement", sub: "Warm contemplative moments to examine and refine your habits." },
    { name: "December", days: 31, img: "../../calendar/images/month_12.jpg", theme: "Annual Harvest & Timeless Wisdom", sub: "Reviewing accomplishments and preparing for a wiser, patient future." }
  ]
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

// Setup theme toggle
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

  if (navOverlay) navOverlay.onclick = closeMenu;

  const links = navMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

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

// Initialize Language Selector
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
        
        langOpts.forEach(o => {
          if (o.getAttribute('data-lang') === currentLang) {
            o.classList.add('active');
          } else {
            o.classList.remove('active');
          }
        });
        
        applyLanguageDirection();
        translatePage();
        renderCalendar();
      });
    });
  }
  
  applyLanguageDirection();
  translatePage();
}

function applyLanguageDirection() {
  if (currentLang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
  }
}

function translatePage() {
  const ui = TIKTOK_DATA.ui[currentLang];
  if (!ui) return;
  
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

  // SEO tags
  const seoTitle = document.getElementById('seoTitle');
  const seoDesc = document.getElementById('seoDesc');
  if (seoTitle) {
    seoTitle.textContent = currentLang === 'ar'
      ? 'التقويم الفلسفي اليومي | حكمة ونور'
      : currentLang === 'en'
      ? 'Daily Philosophical Calendar | Hikma & Nour'
      : 'Calendrier philosophique quotidien | Hikma & Nour';
  }
  if (seoDesc) {
    seoDesc.content = currentLang === 'ar'
      ? 'اكتشف حكمة وتأملاً فلسفياً جديداً لكل يوم من السنة مع التقويم الفلسفي اليومي من حكمة ونور.'
      : currentLang === 'en'
      ? 'Discover a philosophical thought and reflection for every day of the year.'
      : 'Découvrez une pensée philosophique et une nouvelle réflexion pour chaque jour de l\'année.';
  }

  const modalCopyBtnText = document.getElementById('modalCopyBtnText');
  if (modalCopyBtnText) {
    modalCopyBtnText.textContent = currentLang === 'ar' ? 'نسخ' : currentLang === 'en' ? 'Copy' : 'Copier';
  }

  const modalShareBtnText = document.getElementById('modalShareBtnText');
  if (modalShareBtnText) {
    modalShareBtnText.textContent = currentLang === 'ar' ? 'مشاركة' : currentLang === 'en' ? 'Share' : 'Partager';
  }
}

// Render Calendar System
function renderCalendar() {
  renderMonthTabs();
  renderMonthBanner(activeMonthIndex);
  renderDaysGrid(activeMonthIndex);
  renderTodayHighlight();
  renderMonthsGallery();
}

function renderMonthTabs() {
  const container = document.getElementById('monthTabsBar');
  if (!container) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;
  
  container.innerHTML = months.map((m, idx) => `
    <button class="month-tab-btn ${idx === activeMonthIndex ? 'active' : ''}" data-month-index="${idx}">
      ${m.name}
    </button>
  `).join('');

  container.querySelectorAll('.month-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-month-index'), 10);
      selectMonth(idx);
    });
  });
}

function selectMonth(idx) {
  activeMonthIndex = idx;
  renderMonthTabs();
  renderMonthBanner(idx);
  renderDaysGrid(idx);
}

function renderMonthBanner(idx) {
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;
  const month = months[idx];
  const imgEl = document.getElementById('monthBannerImg');
  const titleEl = document.getElementById('monthBannerTitle');
  const subEl = document.getElementById('monthBannerSubtitle');
  
  if (imgEl) {
    imgEl.src = month.img;
    imgEl.alt = month.name;
  }
  if (titleEl) {
    titleEl.textContent = currentLang === 'ar'
      ? `شهر ${month.name} — ${month.theme}`
      : `${month.name} — ${month.theme}`;
  }
  if (subEl) {
    subEl.textContent = month.sub;
  }
}

function getQuoteForDay(day, monthIdx) {
  const quotes = TIKTOK_DATA.content[currentLang].quotes || [];
  if (quotes.length === 0) return { text: "...", author: "...", reflection: "..." };
  const quoteIndex = (day + monthIdx * 7) % quotes.length;
  const q = quotes[quoteIndex];
  
  const reflectionText = q.reflection || (currentLang === 'ar'
    ? `تأمل اليوم: كيف تجعل من هذا المعنى دليلاً عملياً في قراراتك وتعاملك مع الآخرين اليوم؟`
    : currentLang === 'en'
    ? `Today's reflection: How can you apply this insight to guide your choices and interactions today?`
    : `Méditation du jour : Comment faire de cette pensée un guide pratique dans vos choix aujourd'hui ?`);

  return {
    text: q.text,
    author: q.author,
    reflection: reflectionText,
    image: q.image
  };
}

function renderDaysGrid(monthIdx) {
  const grid = document.getElementById('daysGridContainer');
  if (!grid) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;
  const month = months[monthIdx];
  const today = new Date();

  let html = '';
  for (let day = 1; day <= month.days; day++) {
    const quoteObj = getQuoteForDay(day, monthIdx);
    const isToday = (monthIdx === today.getMonth() && day === today.getDate());
    const dayLabel = currentLang === 'ar'
      ? `اليوم ${day} — ${month.name}`
      : currentLang === 'en'
      ? `${month.name} ${day}`
      : `${day} ${month.name}`;

    html += `
      <div class="day-item-card ${isToday ? 'is-today' : ''}" data-day="${day}" data-month="${monthIdx}">
        <div>
          <div class="day-card-number">${dayLabel}</div>
          <div class="day-card-snippet">"${quoteObj.text}"</div>
        </div>
        <div class="day-card-author">— ${quoteObj.author}</div>
      </div>
    `;
  }

  grid.innerHTML = html;

  grid.querySelectorAll('.day-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const d = parseInt(card.getAttribute('data-day'), 10);
      const m = parseInt(card.getAttribute('data-month'), 10);
      openDayModal(d, m);
    });
  });
}

function renderTodayHighlight() {
  const today = new Date();
  const todayQuote = getQuoteForDay(today.getDate(), today.getMonth());
  
  const qEl = document.getElementById('todayQuoteText');
  const aEl = document.getElementById('todayAuthorText');
  const rEl = document.getElementById('todayReflectionText');
  
  if (qEl) qEl.textContent = `"${todayQuote.text}"`;
  if (aEl) aEl.textContent = `— ${todayQuote.author}`;
  if (rEl) {
    const prefix = currentLang === 'ar' ? 'تأمل اليوم: ' : currentLang === 'en' ? "Today's Reflection: " : 'Méditation du jour : ';
    rEl.textContent = `${prefix}${todayQuote.reflection}`;
  }
}

function renderMonthsGallery() {
  const container = document.getElementById('monthsGalleryContainer');
  if (!container) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;

  container.innerHTML = months.map((m, idx) => `
    <div class="month-gallery-card" data-gallery-month="${idx}">
      <img src="${m.img}" alt="${m.name}">
      <div class="month-gallery-card-overlay">
        <div class="month-gallery-card-name">${m.name}</div>
        <div class="month-gallery-card-theme">${m.theme}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.month-gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-gallery-month'), 10);
      selectMonth(idx);
      const banner = document.getElementById('monthArtworkBanner');
      if (banner) banner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function openDayModal(day, monthIdx) {
  const modal = document.getElementById('dayQuoteModal');
  if (!modal) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;
  const month = months[monthIdx];
  const quoteObj = getQuoteForDay(day, monthIdx);

  currentModalQuoteData = quoteObj;

  const dayLabel = currentLang === 'ar'
    ? `اليوم ${day} — شهر ${month.name}`
    : currentLang === 'en'
    ? `${month.name} ${day} — Daily Meditation`
    : `Jour ${day} — ${month.name}`;

  document.getElementById('modalDayDate').textContent = dayLabel;
  document.getElementById('modalDayQuote').textContent = `"${quoteObj.text}"`;
  document.getElementById('modalDayAuthor').textContent = `— ${quoteObj.author}`;
  document.getElementById('modalDayReflection').textContent = `💡 ${quoteObj.reflection}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDayModal() {
  const modal = document.getElementById('dayQuoteModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Navigation & Actions Wireup
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  setupThemeToggle();
  setupHamburger();
  initLanguageSelector();
  renderCalendar();

  // Navigation controls
  const prevBtn = document.getElementById('prevMonthBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeMonthIndex = (activeMonthIndex - 1 + 12) % 12;
      selectMonth(activeMonthIndex);
    });
  }

  const currentBtn = document.getElementById('currentMonthBtn');
  if (currentBtn) {
    currentBtn.addEventListener('click', () => {
      activeMonthIndex = new Date().getMonth();
      selectMonth(activeMonthIndex);
    });
  }

  const nextBtn = document.getElementById('nextMonthBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeMonthIndex = (activeMonthIndex + 1) % 12;
      selectMonth(activeMonthIndex);
    });
  }

  // Modal close
  const closeBtn = document.getElementById('dayModalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeDayModal);

  const modalOverlay = document.getElementById('dayQuoteModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeDayModal();
    });
  }

  // Modal Copy
  const copyBtn = document.getElementById('modalCopyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!currentModalQuoteData) return;
      const textToCopy = `« ${currentModalQuoteData.text} » — ${currentModalQuoteData.author}`;
      const toastMsg = currentLang === 'ar' ? 'تم نسخ الاقتباس بنجاح!' : currentLang === 'en' ? 'Quote copied!' : 'Citation copiée !';
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(toastMsg);
      }).catch(err => {
        console.error("Copy failed: ", err);
      });
    });
  }

  // Modal Share
  const shareBtn = document.getElementById('modalShareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!currentModalQuoteData) return;
      const shareText = `"${currentModalQuoteData.text}" — ${currentModalQuoteData.author}`;
      if (navigator.share) {
        navigator.share({
          title: currentModalQuoteData.author,
          text: shareText,
          url: window.location.href
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(shareText).then(() => {
          showToast(currentLang === 'ar' ? 'تم نسخ نص المشاركة!' : currentLang === 'en' ? 'Share text copied!' : 'Texte de partage copié !');
        });
      }
    });
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
