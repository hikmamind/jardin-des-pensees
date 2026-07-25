import TIKTOK_DATA from '../data_v2.js';

// --- Shared Icon templates ---
const ICONS = {
  'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
};

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
let currentThinkerId = 'all';
let currentSearch = '';

// Page specific translations
const THINKERS_PAGE_TRANSLATIONS = {
  fr: {
    searchPlaceholder: "Rechercher un penseur...",
    noResults: "Aucun penseur ne correspond à votre recherche.",
    bio: "L'histoire de la pensée humaine à travers ses plus illustres représentants."
  },
  en: {
    searchPlaceholder: "Search for a thinker...",
    noResults: "No thinkers match your search.",
    bio: "The history of human thought through its most illustrious representatives."
  },
  ar: {
    searchPlaceholder: "ابحث عن مفكر...",
    noResults: "لم يتم العثور على أي مفكر يطابق بحثك.",
    bio: "تاريخ الفكر البشري من خلال أبرز ممثليه ورموزه."
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

  // Update active flags in navbar
  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = LANG_METADATA[lang].label;

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
  if (searchInput) searchInput.placeholder = THINKERS_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl) noResultsEl.textContent = THINKERS_PAGE_TRANSLATIONS[lang].noResults;

  // Populate dynamic cards
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

// Handle thinker selection change
function handleThinkerChange(thinkerId) {
  currentThinkerId = thinkerId;
  
  // Update URL parameters
  const url = new URL(window.location.href);
  url.searchParams.set('thinker', thinkerId);
  window.history.pushState({}, '', url);

  updateActiveTag(thinkerId);
  populateThinkers(thinkerId, currentSearch);
}

// --- Page Listeners Setup ---
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
      if (link.id !== 'thinkersNavLink') {
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
      const thinkerId = tag.getAttribute('data-thinker');
      handleThinkerChange(thinkerId);
    });
  });

  // 2. Navbar sublinks click listeners
  subLinks.forEach(link => {
    const thinkerId = link.getAttribute('data-thinker');
    if (thinkerId) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        handleThinkerChange(thinkerId);
        
        // Close mobile menu
        if (hamburger && menu) {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
        }
      });
    }
  });

  // 3. Search keyup input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      populateThinkers(currentThinkerId, currentSearch);
    });
  }

  // 4. Initial thinker load from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialThinker = urlParams.get('thinker') || 'all';
  currentThinkerId = initialThinker;
  updateActiveTag(initialThinker);
}

// --- DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguageSelector(); // Sets language & calls initial populateThinkers
  initNavbarScroll();
  initPageLogic();
});
