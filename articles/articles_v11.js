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


function showArticleNotFound() {
  const modal = document.getElementById('articleReaderModal');
  if (!modal) return;
  const bodyEl = document.getElementById('modalArticleBody');
  if (bodyEl) {
    const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
    bodyEl.innerHTML = `
      <div class="article-not-found" style="text-align: center; padding: 60px 20px;">
        <h2 style="font-size: 2rem; color: var(--accent-gold); margin-bottom: 20px;">404</h2>
        <p style="font-size: 1.2rem; margin-bottom: 30px;">${t.noResults || "Article introuvable"}</p>
        <button onclick="closeArticleReader()" style="background: var(--accent-gold); color: #060606; font-weight: 700; border: none; padding: 12px 24px; border-radius: 30px; cursor: pointer;">
          ← ${currentLang === 'ar' ? 'العودة للمقالات' : (currentLang === 'fr' ? 'Retour aux articles' : 'Back to articles')}
        </button>
      </div>
    `;
    const hero = document.querySelector('.reader-hero-section');
    if (hero) hero.style.display = 'none';
    const sidebar = document.querySelector('.reader-sidebar');
    if (sidebar) sidebar.style.display = 'none';
    const breadcrumbs = document.querySelector('.reader-breadcrumbs');
    if (breadcrumbs) breadcrumbs.style.display = 'none';
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
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
    const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
    
    // SEO Update
    document.title = article.title + " | Hikma & Nour";
    const ogTitle = document.getElementById('ogTitle');
    if (ogTitle) ogTitle.content = article.title;
    const ogDesc = document.getElementById('ogDesc');
    if (ogDesc) ogDesc.content = article.desc;
    const canonical = document.getElementById('canonicalUrl');
    if (canonical) canonical.href = window.location.href.split('?')[0] + '?article=' + article.file;
    
    // Structured Data JSON-LD
    let ldJson = document.getElementById('articleJsonLd');
    if (!ldJson) {
      ldJson = document.createElement('script');
      ldJson.id = 'articleJsonLd';
      ldJson.type = 'application/ld+json';
      document.head.appendChild(ldJson);
    }
    ldJson.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.desc,
      "datePublished": article.date || "2026",
      "author": { "@type": "Organization", "name": "Hikma & Nour" }
    });

    let contentHtml = `<div class="article-content-flow" style="font-family: inherit; font-size: 1.15rem; line-height: 2;">`;

    // Summary block
    contentHtml += `
      <div class="article-summary-card" style="background: rgba(22, 31, 25, 0.85); border: 1.5px solid rgba(223, 177, 91, 0.3); border-right: 4px solid var(--accent-gold); padding: 25px 30px; border-radius: 16px; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
        <strong style="color: var(--accent-gold-bright); font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          ${currentLang === 'ar' ? 'ملخص المقال' : (currentLang === 'fr' ? 'Résumé de l\'article' : 'Article Summary')}
        </strong>
        <p style="margin: 12px 0 0; color: var(--text-main); font-weight: 500;">${article.desc}</p>
      </div>
    `;

    const paragraphs = (article.body && Array.isArray(article.body)) ? article.body : [article.desc];
    let sectionIdx = 1;
    
    paragraphs.forEach((p, idx) => {
      let pHtml = `<p style="margin-bottom: 24px; color: var(--text-sub);">${p}</p>`;
      if (typeof p === 'object') {
        pHtml = `
          <h2 id="sec-${idx}" class="observer-section" style="font-size: 1.7rem; font-weight: 800; color: var(--accent-gold-bright); margin: 50px 0 20px; padding-bottom: 10px; border-bottom: 1px solid rgba(223, 177, 91, 0.2); font-family: 'Noto Naskh Arabic', serif;">
            <span style="color: var(--accent-gold); opacity: 0.5; margin-inline-end: 10px; font-size: 1.4rem;">0${sectionIdx++}</span> ${p.title}
          </h2>
        `;
        if (p.content) {
          p.content.forEach(sub => {
            pHtml += `<p style="margin-bottom: 24px; color: var(--text-sub);">${sub}</p>`;
          });
        }
      }
      contentHtml += `<div id="sec-block-${idx}" class="article-reading-section observer-section">${pHtml}</div>`;
      
      if (idx === 1 && article.quote) {
        contentHtml += `
          <div class="quote-box" style="position: relative; padding: 30px 40px; background: rgba(22, 31, 25, 0.85); border-right: 4px solid var(--accent-gold); border-radius: 16px; margin: 45px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
            <span style="position: absolute; top: 10px; right: 20px; font-size: 3rem; color: rgba(223, 177, 91, 0.2); line-height: 1; font-family: serif;">❝</span>
            <p style="font-size: 1.35rem; font-weight: 700; color: var(--text-main); font-family: 'Noto Naskh Arabic', serif; margin-bottom: 12px; position: relative; z-index: 2; text-align: center;">${article.quote}</p>
            <div style="text-align: center; color: var(--accent-gold); font-size: 0.95rem; font-weight: 600;">${article.quoteAuthor || '— Hikma & Nour'}</div>
          </div>
        `;
      }
    });

    if (article.inBrief) {
      contentHtml += `
        <div style="margin: 50px 0; padding: 30px; background: rgba(223, 177, 91, 0.05); border: 1px solid rgba(223, 177, 91, 0.2); border-radius: 20px;">
          <h3 style="font-size: 1.3rem; color: var(--accent-gold); margin-bottom: 20px; font-weight: 800;">
            ✦ ${currentLang === 'ar' ? 'ما يجب أن تتذكره' : (currentLang === 'fr' ? 'À retenir' : 'Key Takeaways')}
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${article.inBrief.map(item => `<li style="margin-bottom: 14px; display: flex; gap: 12px; color: var(--text-main); align-items: flex-start;"><span style="color: var(--accent-gold); font-size: 1.2rem; line-height: 1.2;">•</span><span style="line-height: 1.6;">${item}</span></li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (article.conclusion) {
      contentHtml += `
        <h2 id="sec-conclusion" class="observer-section" style="font-size: 1.7rem; font-weight: 800; color: var(--accent-gold-bright); margin: 50px 0 20px; padding-bottom: 10px; border-bottom: 1px solid rgba(223, 177, 91, 0.2); font-family: 'Noto Naskh Arabic', serif;">
          ${currentLang === 'ar' ? 'الخلاصة' : (currentLang === 'fr' ? 'Conclusion' : 'Conclusion')}
        </h2>
        <p style="margin-bottom: 24px; color: var(--text-sub);">${article.conclusion}</p>
      `;
    }

    // CTA
    contentHtml += `
      <div style="text-align: center; margin: 60px 0; padding: 40px 20px; background: rgba(22, 31, 25, 0.85); border-radius: 24px; border: 1px solid rgba(223, 177, 91, 0.2);">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 16px;">${currentLang === 'ar' ? 'هل أعجبك هذا المقال؟' : (currentLang === 'fr' ? 'Vous avez aimé cet article ?' : 'Enjoyed this article?')}</h3>
        <p style="color: var(--text-muted); margin-bottom: 24px; font-size: 0.95rem;">${currentLang === 'ar' ? 'اكتشف المزيد من الأفكار حول علم النفس، الفلسفة وتطوير الذات.' : (currentLang === 'fr' ? 'Découvrez d\'autres réflexions sur la psychologie et la philosophie.' : 'Discover more ideas about psychology and philosophy.')}</p>
        <button onclick="closeArticleReader(); setTimeout(() => document.getElementById('globalSearchBtn').click(), 100);" style="background: var(--accent-gold); color: #060606; font-weight: 800; border: none; padding: 14px 30px; border-radius: 30px; cursor: pointer; transition: transform 0.2s; font-size: 1.05rem;">
          ${currentLang === 'ar' ? 'اكتشف المزيد من المقالات ←' : (currentLang === 'fr' ? 'Découvrir les articles →' : 'Explore more articles →')}
        </button>
      </div>
    `;

    // Social/Comments
    contentHtml += `
      <div class="article-interactive-hub" style="margin-top: 40px; padding: 25px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 18px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <span style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">${t.ratePrompt}</span>
          <div class="star-rating-widget" style="display: flex; gap: 6px; font-size: 1.5rem; color: var(--accent-gold); cursor: pointer;">
            <span onclick="window.rateArticle(1)">★</span><span onclick="window.rateArticle(2)">★</span><span onclick="window.rateArticle(3)">★</span><span onclick="window.rateArticle(4)">★</span><span onclick="window.rateArticle(5)">★</span>
          </div>
        </div>
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

    const commentsList = (article.comments && Array.isArray(article.comments)) ? article.comments : [];
    contentHtml += `
      <section class="article-comments-section" style="margin-top: 45px;">
        <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span>💬</span> ${t.commentsHeader} (${commentsList.length})
        </h3>
        <div id="commentsListContainer" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
          ${commentsList.map(c => `<div class="comment-item" style="background: rgba(255,255,255,0.02); border: 1px solid var(--card-border); padding: 16px 20px; border-radius: 14px;"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;"><span style="font-weight: 700; color: var(--accent-gold); font-size: 0.95rem;">${c.author}</span><span style="font-size: 0.8rem; color: var(--text-secondary);">${c.time}</span></div><p style="color: var(--text-primary); margin: 0; font-size: 0.95rem; line-height: 1.6;">${c.text}</p></div>`).join('')}
        </div>
        <form id="articleCommentForm" onsubmit="window.submitComment(event)" style="background: var(--card-bg); border: 1px solid var(--card-border); padding: 20px; border-radius: 16px;">
          <textarea id="commentTextInput" placeholder="${t.commentPlaceholder}" required style="width: 100%; min-height: 90px; padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: rgba(0,0,0,0.2); color: #fff; font-family: inherit; font-size: 0.95rem; box-sizing: border-box; resize: vertical; margin-bottom: 12px;"></textarea>
          <button type="submit" style="background: var(--accent-gold); color: #060606; font-weight: 700; border: none; padding: 10px 22px; border-radius: 10px; cursor: pointer;">${t.postCommentBtn}</button>
        </form>
      </section>
    `;

    const allArts = TIKTOK_DATA.content[currentLang].articles;
    const related = allArts.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
    if (related.length > 0) {
      contentHtml += `
        <div class="related-articles" style="margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.08);">
          <h3 style="font-size: 1.5rem; color: var(--accent-gold-bright); margin-bottom: 24px; font-weight: 800;">
            ${currentLang === 'ar' ? 'اقرأ أيضاً' : (currentLang === 'fr' ? 'Articles similaires' : 'Related articles')}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
            ${related.map(r => `
              <div onclick="openArticleReader('${r.id}')" style="cursor: pointer; background: rgba(22, 31, 25, 0.85); border: 1px solid rgba(223, 177, 91, 0.15); border-radius: 16px; overflow: hidden;">
                <img src="${r.image ? (r.image.startsWith('../') ? r.image : '../' + r.image) : '../main_home_hd_bg.jpg'}" style="width: 100%; height: 140px; object-fit: cover;">
                <div style="padding: 16px;">
                  <div style="color: var(--accent-gold); font-size: 0.75rem; font-weight: 700; margin-bottom: 6px;">${r.categoryName || r.category}</div>
                  <h4 style="color: var(--text-main); font-size: 0.95rem; font-weight: 700; margin-bottom: 8px; line-height: 1.4;">${r.title}</h4>
                  <div style="color: var(--text-muted); font-size: 0.8rem;">${r.readTime}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    contentHtml += `</div>`;
    bodyEl.innerHTML = contentHtml;
    buildDynamicTOC(paragraphs);
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

function buildDynamicTOC(paragraphs) {
  const tocList = document.querySelector('.toc-list');
  if (!tocList) return;
  let tocHtml = '';
  let tocIdx = 0;
  paragraphs.forEach((p, idx) => {
    if (typeof p === 'object') {
      tocHtml += `<li class="${tocIdx === 0 ? 'active' : ''}"><a href="#sec-${idx}" onclick="event.preventDefault(); document.getElementById('sec-${idx}')?.scrollIntoView({behavior:'smooth', block: 'start'});" style="transition: color 0.2s;">${p.title}</a></li>`;
      tocIdx++;
    }
  });
  if (tocHtml !== '') {
    tocHtml += `<li><a href="#sec-conclusion" onclick="event.preventDefault(); document.getElementById('sec-conclusion')?.scrollIntoView({behavior:'smooth', block: 'start'});" style="transition: color 0.2s;">${currentLang === 'ar' ? 'الخلاصة' : (currentLang === 'fr' ? 'Conclusion' : 'Conclusion')}</a></li>`;
    tocList.innerHTML = tocHtml;
  }
  setupScrollSpy();
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('.observer-section');
  const navItems = document.querySelectorAll('.toc-list li');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(li => li.classList.remove('active'));
        const id = entry.target.id;
        const activeLink = document.querySelector(`.toc-list a[href="#${id}"]`);
        if (activeLink) activeLink.parentElement.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  sections.forEach(sec => observer.observe(sec));
  
  const scrollContainer = document.querySelector('.reader-scroll-container');
  const progressBar = document.getElementById('readingProgressBar');
  if (scrollContainer && progressBar) {
    scrollContainer.addEventListener('scroll', () => {
      const progress = (scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight)) * 100;
      progressBar.style.width = progress + '%';
    });
  }
}
