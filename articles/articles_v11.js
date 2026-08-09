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
let currentCategory = 'all';
let currentSearch = '';
let activeArticleFile = null;

const ARTICLES_PAGE_TRANSLATIONS = {
  fr: {
    searchPlaceholder: "Rechercher un article...",
    noResults: "Aucun article ne correspond à votre recherche.",
    bio: "Stoïcisme, philosophie classique, psychologie et croissance personnelle.",
    ratePrompt: "Qu'avez-vous pensé de cet article ?",
    likedMsg: "Merci pour votre appréciation ! ❤️",
    savedMsg: "Article sauvegardé dans vos favoris ! 📌",
    copiedMsg: "Lien de l'article copié dans le presse-papier ! 📋",
    commentPlaceholder: "Partagez votre avis ou une réflexion...",
    postCommentBtn: "Publier mon commentaire",
    commentsHeader: "Commentaires & Discussions",
    newCommentNotice: "Votre commentaire a été publié avec succès !"
  },
  en: {
    searchPlaceholder: "Search for an article...",
    noResults: "No articles found matching your search.",
    bio: "Stoicism, classical philosophy, psychology, and personal growth.",
    ratePrompt: "What did you think of this article?",
    likedMsg: "Thank you for your appreciation! ❤️",
    savedMsg: "Article saved to your reading list! 📌",
    copiedMsg: "Article link copied to clipboard! 📋",
    commentPlaceholder: "Share your thoughts or reflections...",
    postCommentBtn: "Post Comment",
    commentsHeader: "Comments & Discussions",
    newCommentNotice: "Your comment was published successfully!"
  },
  ar: {
    searchPlaceholder: "ابحث عن مقال...",
    noResults: "لم يتم العثور على أي مقالات تطابق بحثك.",
    bio: "الرواقية، الفلسفة الكلاسيكية، علم النفس والتنمية الذاتية.",
    ratePrompt: "ما رأيك في هذا المقال؟",
    likedMsg: "شكراً لتفاعلك وإعجابك بالمقال! ❤️",
    savedMsg: "تم حفظ المقال في قائمتك للمطالعة لاحقاً! 📌",
    copiedMsg: "تم نسخ رابط المقال بنجاح! 📋",
    commentPlaceholder: "شاركنا رأيك أو تأملاتك حول هذا المقال...",
    postCommentBtn: "نشر التعليق",
    commentsHeader: "التعليقات والمناقشات",
    newCommentNotice: "تمت إضافة تعليقك بنجاح!"
  }
};

function getArticleUrl(file) {
  if (!file) return './why-people-respect-silent-person.html';
  const filesInFilesDir = ['self-discipline.html', 'stop-overthinking.html', 'stoicisme-force-calme.html', 'absurde-camus.html'];
  if (filesInFilesDir.includes(file)) {
    return `../files/${file}`;
  }
  return `./${file}`;
}

// --- Language Engine ---
function setLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);
  
  // Set document direction & lang
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Update navbar language label
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

  // Translate all static keys marked with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  // Localized search & empty state
  const searchInput = document.getElementById('searchInput');
  if (searchInput && ARTICLES_PAGE_TRANSLATIONS[lang]) {
    searchInput.placeholder = ARTICLES_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  }
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl && ARTICLES_PAGE_TRANSLATIONS[lang]) {
    noResultsEl.textContent = ARTICLES_PAGE_TRANSLATIONS[lang].noResults;
  }

  // Re-populate navbar dropdown and grid
  populateNavbarDropdown();
  populateArticles(currentCategory, currentSearch);

  // If reader modal is currently open, re-render it in the newly selected language!
  const modal = document.getElementById('articleReaderModal');
  if (modal && modal.classList.contains('active') && activeArticleFile) {
    openArticleReader(activeArticleFile);
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
  
  const thinkers = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].thinkers) || [];
  const seeAllLabel = (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].seeAllThinkers) || "Tous les philosophes →";
  
  let html = thinkers.map(t => {
    return `<a href="../thinkers/?thinker=${t.id}" class="sub-link" data-thinker="${t.id}">${t.name}</a>`;
  }).join('');
  
  html += `<a href="../thinkers/?thinker=all" class="sub-link see-all" data-thinker="all">${seeAllLabel}</a>`;
  subMenu.innerHTML = html;
}

// --- Navbar scroll opacity toggler ---
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

// --- Populate Articles with Filter & Search ---
function populateArticles(category = 'all', keyword = '') {
  const container = document.getElementById('articlesList');
  const noResultsEl = document.getElementById('noResults');
  let articles = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].articles) 
    ? TIKTOK_DATA.content[currentLang].articles 
    : (TIKTOK_DATA.content['ar'] ? TIKTOK_DATA.content['ar'].articles : []);

  const readLabel = (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].readArticle) 
    ? TIKTOK_DATA.ui[currentLang].readArticle 
    : (currentLang === 'ar' ? "اقرأ المقال" : currentLang === 'fr' ? "Lire l'article" : "Read article");

  const featuredLabel = (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].featured) 
    ? TIKTOK_DATA.ui[currentLang].featured 
    : (currentLang === 'ar' ? "مميز" : currentLang === 'fr' ? "En vedette" : "Featured");

  if (!container || !articles) return;

  // 1. Filter by category
  if (category && category !== 'all') {
    articles = articles.filter(art => art.category === category);
  }

  // 2. Filter by search keyword
  if (keyword && keyword.trim() !== '') {
    const term = keyword.toLowerCase().trim();
    articles = articles.filter(art => 
      (art.title && art.title.toLowerCase().includes(term)) || 
      (art.desc && art.desc.toLowerCase().includes(term))
    );
  }

  // 3. Handle empty state
  if (articles.length === 0) {
    container.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    container.style.display = 'grid';
    if (noResultsEl) noResultsEl.style.display = 'none';

    container.innerHTML = articles.map((art) => {
      const badgeHtml = art.featured ? `<span class="card-featured-badge">${featuredLabel}</span>` : "";
      const categoryLabel = art.categoryName || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang][art.category]) || art.category;
      
      const imageSrc = art.image ? (art.image.startsWith('../') ? art.image : `../${art.image}`) : '../main_home_hd_bg.jpg';
      const imageAlt = art.imageAlt || art.title;

      return `
        <div class="article-card" style="cursor: pointer;" data-file="${art.file}">
          <div class="article-image-container">
            ${badgeHtml}
            <img src="${imageSrc}" alt="${imageAlt}" class="article-image" onerror="this.src='../main_home_hd_bg.jpg';">
          </div>
          <div class="card-meta-row">
            <span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">${categoryLabel}</span>
            <span class="card-meta-dot">•</span>
            <span style="display: inline-flex; align-items: center; gap: 4px;">
              <svg class="card-meta-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${art.readTime}
            </span>
          </div>
          <h3 class="article-title" style="margin-top: 10px;">${art.title}</h3>
          <p class="article-desc">${art.desc}</p>
          <div class="article-actions" style="margin-top: auto; padding-top: 15px; display: flex; gap: 15px; align-items: center;">
            <button class="card-action-link" type="button" style="background:none; border:none; padding:0; cursor:pointer; color: var(--accent-gold); font-weight:700; display:inline-flex; align-items:center; gap:6px;">
              <span>${readLabel}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="${currentLang === 'ar' ? '19' : '5'}" y1="12" x2="${currentLang === 'ar' ? '5' : '19'}" y2="12"></line>
                <polyline points="${currentLang === 'ar' ? '12 19 5 12 12 5' : '12 5 19 12 12 19'}"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join('');

    setupArticleModalListeners();
  }
}

// --- Active States and Tag synchronizations ---
function updateActiveTag(category) {
  const tags = document.querySelectorAll('.tag-btn');
  tags.forEach(tag => {
    tag.classList.remove('active');
    if (tag.getAttribute('data-category') === category) {
      tag.classList.add('active');
    }
  });
}

function handleCategoryChange(category) {
  currentCategory = category;
  
  const url = new URL(window.location.href);
  url.searchParams.set('category', category);
  window.history.pushState({}, '', url);

  updateActiveTag(category);
  populateArticles(category, currentSearch);
}

// --- Article Reader Modal Controller ---
function setupArticleModalListeners() {
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const file = card.getAttribute('data-file');
      if (file) {
        openArticleReader(file);
      }
    });
  });
}

function openArticleReader(file) {
  activeArticleFile = file;
  const articles = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].articles) || [];
  const article = articles.find(a => a.file === file) || articles[0];
  if (!article) return;

  const modal = document.getElementById('articleReaderModal');
  if (!modal) return;

  // 1. Breadcrumbs & Badges
  const catBadge = document.getElementById('modalArticleCategoryBadge');
  const catBreadcrumb = document.getElementById('modalArticleCategoryBreadcrumb');
  const titleBreadcrumb = document.getElementById('modalArticleTitleBreadcrumb');
  const titleEl = document.getElementById('modalArticleTitle');
  const descEl = document.getElementById('modalArticleDesc');
  const dateEl = document.getElementById('modalArticleDate');
  const timeEl = document.getElementById('modalArticleReadTime');
  const coverImg = document.getElementById('modalArticleImage');
  const quoteEl = document.getElementById('modalSidebarQuote');
  const quoteAuthorEl = document.getElementById('modalSidebarQuoteAuthor');
  const bodyEl = document.getElementById('modalArticleBody');
  const tocList = document.querySelector('.toc-list');

  const categoryName = article.categoryName || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang][article.category]) || article.category;

  if (catBadge) catBadge.textContent = categoryName;
  if (catBreadcrumb) catBreadcrumb.textContent = categoryName;
  if (titleBreadcrumb) titleBreadcrumb.textContent = article.title;
  if (titleEl) titleEl.textContent = article.title;
  if (descEl) descEl.textContent = article.desc;
  if (dateEl) dateEl.textContent = article.date || "2026";
  if (timeEl) timeEl.textContent = article.readTime;

  // 2. Cover Image with real src and localized alt (never 'Cover')
  if (coverImg) {
    const imgSrc = article.image ? (article.image.startsWith('../') ? article.image : `../${article.image}`) : '../main_home_hd_bg.jpg';
    coverImg.src = imgSrc;
    coverImg.alt = article.imageAlt || article.title;
    coverImg.onerror = function() {
      this.src = '../main_home_hd_bg.jpg';
      this.alt = article.title;
    };
  }

  // 3. Sidebar Quote
  if (quoteEl) quoteEl.textContent = article.quote || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].featuredQuote) || "الحكمة في الهدوء الداخلي.";
  if (quoteAuthorEl) quoteAuthorEl.textContent = article.quoteAuthor || "— Hikma & Nour";

  // 4. Table of Contents
  if (tocList) {
    const tocItems = article.toc && Array.isArray(article.toc) ? article.toc : [
      currentLang === 'ar' ? "المقدمة" : currentLang === 'fr' ? "Introduction" : "Introduction",
      currentLang === 'ar' ? "الأفكار الرئيسية" : currentLang === 'fr' ? "Points clés" : "Key Takeaways",
      currentLang === 'ar' ? "الخاتمة والتطبيق" : currentLang === 'fr' ? "Conclusion" : "Conclusion"
    ];

    tocList.innerHTML = tocItems.map((item, idx) => `
      <li class="${idx === 0 ? 'active' : ''}">
        <a href="#sec-${idx}" onclick="event.preventDefault(); document.getElementById('sec-${idx}')?.scrollIntoView({behavior:'smooth'});">${item}</a>
      </li>
    `).join('');
  }

  // 5. Body Paragraphs & Sections
  if (bodyEl) {
    const paragraphs = (article.body && Array.isArray(article.body)) ? article.body : [article.desc];
    const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];

    let contentHtml = `
      <div class="article-content-flow">
        <div class="article-summary-card" style="background: rgba(223, 177, 91, 0.06); border-right: 4px solid var(--accent-gold); border-left: 4px solid var(--accent-gold); padding: 20px 24px; border-radius: 12px; margin-bottom: 30px; font-size: 1.05rem; line-height: 1.8;">
          <strong>💡 ${currentLang === 'ar' ? 'ملخص المقال' : currentLang === 'fr' ? 'Résumé essentiel' : 'Key Summary'}:</strong>
          <p style="margin: 8px 0 0;">${article.desc}</p>
        </div>
    `;

    paragraphs.forEach((p, idx) => {
      contentHtml += `
        <div id="sec-${idx}" class="article-reading-section" style="margin-bottom: 24px;">
          <p style="font-size: 1.12rem; line-height: 1.9; color: var(--text-primary); margin-bottom: 16px;">${p}</p>
        </div>
      `;
    });

    // Highlight Quote Callout inside body
    if (article.quote) {
      contentHtml += `
        <div class="article-highlight-quote" style="margin: 35px 0; padding: 25px 30px; background: rgba(13, 20, 16, 0.85); border: 1px solid rgba(223, 177, 91, 0.3); border-radius: 16px; text-align: center; position: relative;">
          <span style="font-size: 2.2rem; color: var(--accent-gold); line-height: 1; display: block; margin-bottom: 8px;">❝</span>
          <p style="font-size: 1.25rem; font-family: 'Amiri', serif; font-weight: 700; color: #FFFDF8; line-height: 1.8; margin-bottom: 10px;">${article.quote}</p>
          <span style="color: var(--accent-gold); font-size: 0.95rem;">${article.quoteAuthor || '— Hikma & Nour'}</span>
        </div>
      `;
    }

    // 6. Interactive Social Actions & Rating Box
    contentHtml += `
      <div class="article-interactive-hub" style="margin-top: 40px; padding: 25px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 18px;">
        
        <!-- Rating Row -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <span style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">${t.ratePrompt}</span>
          <div class="star-rating-widget" style="display: flex; gap: 6px; font-size: 1.5rem; color: var(--accent-gold); cursor: pointer;">
            <span onclick="window.rateArticle(1)">★</span>
            <span onclick="window.rateArticle(2)">★</span>
            <span onclick="window.rateArticle(3)">★</span>
            <span onclick="window.rateArticle(4)">★</span>
            <span onclick="window.rateArticle(5)">★</span>
          </div>
        </div>

        <!-- Social Actions Bar -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 20px;">
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button type="button" class="social-btn" onclick="window.likeArticle()" style="background: rgba(223, 177, 91, 0.08); border: 1px solid rgba(223, 177, 91, 0.3); color: var(--accent-gold); padding: 8px 16px; border-radius: 10px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              <span>❤️</span> <span>${currentLang === 'ar' ? 'إعجاب' : currentLang === 'fr' ? "J'aime" : 'Like'}</span>
            </button>
            <button type="button" class="social-btn" onclick="window.saveArticle()" style="background: rgba(223, 177, 91, 0.08); border: 1px solid rgba(223, 177, 91, 0.3); color: var(--accent-gold); padding: 8px 16px; border-radius: 10px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              <span>📌</span> <span>${TIKTOK_DATA.ui[currentLang]?.saveLater || 'حفظ'}</span>
            </button>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button type="button" onclick="window.shareArticle('whatsapp')" style="background: rgba(37, 211, 102, 0.15); border: 1px solid rgba(37, 211, 102, 0.3); color: #25D366; padding: 8px 14px; border-radius: 10px; cursor: pointer; font-weight: 600;">WhatsApp</button>
            <button type="button" onclick="window.shareArticle('twitter')" style="background: rgba(29, 161, 242, 0.15); border: 1px solid rgba(29, 161, 242, 0.3); color: #1DA1F2; padding: 8px 14px; border-radius: 10px; cursor: pointer; font-weight: 600;">X</button>
            <button type="button" onclick="window.shareArticle('copy')" style="background: rgba(223, 177, 91, 0.15); border: 1px solid var(--accent-gold); color: var(--accent-gold); padding: 8px 14px; border-radius: 10px; cursor: pointer; font-weight: 600;">📋 ${currentLang === 'ar' ? 'نسخ الرابط' : currentLang === 'fr' ? 'Copier' : 'Copy'}</button>
          </div>
        </div>

      </div>
    `;

    // 7. Comments Section
    const commentsList = (article.comments && Array.isArray(article.comments)) ? article.comments : [];
    contentHtml += `
      <section class="article-comments-section" style="margin-top: 45px;">
        <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span>💬</span> ${t.commentsHeader} (${commentsList.length})
        </h3>

        <!-- Existing comments -->
        <div id="commentsListContainer" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
          ${commentsList.map(c => `
            <div class="comment-item" style="background: rgba(255,255,255,0.02); border: 1px solid var(--card-border); padding: 16px 20px; border-radius: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: 700; color: var(--accent-gold); font-size: 0.95rem;">${c.author}</span>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">${c.time}</span>
              </div>
              <p style="color: var(--text-primary); margin: 0; font-size: 0.95rem; line-height: 1.6;">${c.text}</p>
            </div>
          `).join('')}
        </div>

        <!-- Add Comment Form -->
        <form id="articleCommentForm" onsubmit="window.submitComment(event)" style="background: var(--card-bg); border: 1px solid var(--card-border); padding: 20px; border-radius: 16px;">
          <textarea id="commentTextInput" placeholder="${t.commentPlaceholder}" required style="width: 100%; min-height: 90px; padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: rgba(0,0,0,0.2); color: #fff; font-family: inherit; font-size: 0.95rem; box-sizing: border-box; resize: vertical; margin-bottom: 12px;"></textarea>
          <button type="submit" style="background: var(--accent-gold); color: #060606; font-weight: 700; border: none; padding: 10px 22px; border-radius: 10px; cursor: pointer; transition: transform 0.2s;">${t.postCommentBtn}</button>
        </form>
      </section>
    `;

    contentHtml += `</div>`;
    bodyEl.innerHTML = contentHtml;
  }

  // Update browser URL query param
  const url = new URL(window.location.href);
  url.searchParams.set('article', file);
  window.history.pushState({}, '', url);

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll reader container to top
  const scrollContainer = modal.querySelector('.reader-scroll-container');
  if (scrollContainer) scrollContainer.scrollTop = 0;
}

function closeArticleReader() {
  const modal = document.getElementById('articleReaderModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  activeArticleFile = null;

  // Clear URL param without reload
  const url = new URL(window.location.href);
  url.searchParams.delete('article');
  window.history.pushState({}, '', url);
}

// Global helpers attached to window for inline onclick handlers
window.rateArticle = function(stars) {
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  alert(`${t.likedMsg} (★★★★★ ${stars}/5)`);
};

window.likeArticle = function() {
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  alert(t.likedMsg);
};

window.saveArticle = function() {
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  alert(t.savedMsg);
};

window.shareArticle = function(platform) {
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  const shareUrl = window.location.href;
  if (platform === 'whatsapp') {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`, '_blank');
  } else if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank');
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert(t.copiedMsg);
    }).catch(() => {
      alert(t.copiedMsg);
    });
  }
};

window.submitComment = function(e) {
  e.preventDefault();
  const input = document.getElementById('commentTextInput');
  if (!input || !input.value.trim()) return;

  const list = document.getElementById('commentsListContainer');
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  const author = (currentLang === 'ar') ? "قارئ حكمة ونور" : (currentLang === 'fr') ? "Lecteur Hikma & Nour" : "Reader";
  const time = (currentLang === 'ar') ? "الآن" : (currentLang === 'fr') ? "À l'instant" : "Just now";

  if (list) {
    const newEl = document.createElement('div');
    newEl.className = 'comment-item';
    newEl.style.cssText = 'background: rgba(223, 177, 91, 0.08); border: 1px solid rgba(223, 177, 91, 0.3); padding: 16px 20px; border-radius: 14px; animation: fadeIn 0.3s ease;';
    newEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-weight: 700; color: var(--accent-gold); font-size: 0.95rem;">${author}</span>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">${time}</span>
      </div>
      <p style="color: var(--text-primary); margin: 0; font-size: 0.95rem; line-height: 1.6;">${input.value.trim()}</p>
    `;
    list.prepend(newEl);
    input.value = '';
    alert(t.newCommentNotice);
  }
};

// --- Page & Dropdown Listeners Setup ---
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
      if (link.id !== 'articlesNavLink') {
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
      const category = tag.getAttribute('data-category');
      handleCategoryChange(category);
    });
  });

  // 2. Navbar sublinks click listeners
  subLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');
      handleCategoryChange(category);
      
      if (hamburger && menu) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  });

  // 3. Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      populateArticles(currentCategory, currentSearch);
    });
  }

  // 4. Initial category load from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  currentCategory = initialCategory;
  updateActiveTag(initialCategory);
  populateArticles(currentCategory, currentSearch);

  // 5. Modal close buttons & listeners
  const closeBtn = document.getElementById('articleReaderCloseBtn');
  const modal = document.getElementById('articleReaderModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeArticleReader);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeArticleReader();
      }
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeArticleReader();
    }
  });

  // 6. Auto-open article from URL param (?article=filename.html)
  const articleParam = urlParams.get('article');
  if (articleParam) {
    setTimeout(() => {
      openArticleReader(articleParam);
    }, 200);
  }
}

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

// --- DOM Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNavOverlay();
  initTheme();
  initLanguageSelector();
  initNavbarScroll();
  initPageLogic();
});
