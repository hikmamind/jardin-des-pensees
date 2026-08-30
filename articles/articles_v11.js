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
    rateThanks: "Merci pour votre note de",
    likedMsg: "Merci pour votre appréciation ! ❤️",
    unlikedMsg: "Mention j'aime retirée.",
    savedMsg: "Article sauvegardé dans vos favoris ! 📌",
    unsavedMsg: "Article retiré de vos favoris.",
    copiedMsg: "✓ Lien de l'article copié dans le presse-papier !",
    commentPlaceholder: "Partagez votre avis ou une réflexion philosophique...",
    postCommentBtn: "Publier mon commentaire",
    commentsHeader: "Commentaires & Discussions",
    newCommentNotice: "Votre commentaire a été publié avec succès !",
    saveBtnLabel: "Sauvegarder",
    savedBtnLabel: "Sauvegardé",
    likeBtnLabel: "J'aime",
    likedBtnLabel: "Aimé",
    shareArticle: "Partager l'article",
    tocTitle: "Dans cet article",
    mobileTocTitle: "▾ Sommaire de l'article",
    readTime: "Temps de lecture",
    backToArticles: "← Retour aux articles",
    notFoundTitle: "Article introuvable",
    notFoundDesc: "Désolé, l'article demandé est introuvable ou a été déplacé.",
    relatedTitle: "Articles similaires",
    ctaTitle: "Vous avez aimé cet article ?",
    ctaDesc: "Découvrez d'autres réflexions sur la psychologie, la philosophie et le développement personnel.",
    ctaBtn: "Découvrir les articles →",
    newsletterTitle: "Ne manquez pas nos prochaines réflexions",
    newsletterDesc: "Recevez directement nos meilleures analyses et méditations hebdomadaires.",
    newsletterBtn: "S'inscrire",
    newsletterSuccess: "Merci pour votre inscription à la revue !",
    takeawaysTitle: "✦ Ce qu'il faut retenir",
    conclusionTitle: "Conclusion & Sérénité",
    authorLabel: "Par",
    readArticle: "Lire l'article",
    seeAll: "Voir tous",
    homeCrumb: "Accueil",
    articlesCrumb: "Articles"
  },
  en: {
    searchPlaceholder: "Search for an article...",
    noResults: "No articles found matching your search.",
    bio: "Stoicism, classical philosophy, psychology, and personal growth.",
    ratePrompt: "What did you think of this article?",
    rateThanks: "Thank you for your rating of",
    likedMsg: "Thank you for your appreciation! ❤️",
    unlikedMsg: "Like removed.",
    savedMsg: "Article saved to your reading list! 📌",
    unsavedMsg: "Article removed from reading list.",
    copiedMsg: "✓ Article link copied to clipboard!",
    commentPlaceholder: "Share your thoughts or philosophical reflections...",
    postCommentBtn: "Post Comment",
    commentsHeader: "Comments & Discussions",
    newCommentNotice: "Your comment was published successfully!",
    saveBtnLabel: "Save Article",
    savedBtnLabel: "Saved",
    likeBtnLabel: "Like",
    likedBtnLabel: "Liked",
    shareArticle: "Share Article",
    tocTitle: "In this article",
    mobileTocTitle: "▾ Table of Contents",
    readTime: "Read time",
    backToArticles: "← Back to articles",
    notFoundTitle: "Article Not Found",
    notFoundDesc: "Sorry, the requested article was not found or has been moved.",
    relatedTitle: "Related Articles",
    ctaTitle: "Enjoyed this article?",
    ctaDesc: "Explore more ideas on psychology, philosophy, and personal elevation.",
    ctaBtn: "Explore articles →",
    newsletterTitle: "Don't miss our upcoming reflections",
    newsletterDesc: "Receive our weekly insights and philosophical essays directly in your inbox.",
    newsletterBtn: "Subscribe",
    newsletterSuccess: "Thank you for subscribing to the journal!",
    takeawaysTitle: "✦ Key Takeaways",
    conclusionTitle: "Conclusion & Inner Peace",
    authorLabel: "By",
    readArticle: "Read article",
    seeAll: "See all",
    homeCrumb: "Home",
    articlesCrumb: "Articles"
  },
  ar: {
    searchPlaceholder: "ابحث عن مقال...",
    noResults: "لم يتم العثور على أي مقالات تطابق بحثك.",
    bio: "الرواقية، الفلسفة الكلاسيكية، علم النفس والتنمية الذاتية.",
    ratePrompt: "ما تقييمك لهذا المقال؟",
    rateThanks: "شكراً لتقييمك الرائع بـ",
    likedMsg: "شكراً لتفاعلك وإعجابك بالمقال! ❤️",
    unlikedMsg: "تم إلغاء الإعجاب.",
    savedMsg: "تم حفظ المقال في قائمتك للمطالعة لاحقاً! 📌",
    unsavedMsg: "تمت إزالة المقال من قائمة الحفظ.",
    copiedMsg: "✓ تم نسخ رابط المقال بنجاح!",
    commentPlaceholder: "شاركنا رأيك أو تأملاتك الفلسفية حول هذا المقال...",
    postCommentBtn: "نشر التعليق",
    commentsHeader: "التعليقات والمناقشات",
    newCommentNotice: "تمت إضافة تعليقك بنجاح!",
    saveBtnLabel: "حفظ المقال",
    savedBtnLabel: "تم الحفظ",
    likeBtnLabel: "إعجاب",
    likedBtnLabel: "معجب",
    shareArticle: "مشاركة المقال",
    tocTitle: "في هذا المقال",
    mobileTocTitle: "▾ فهرس المقال",
    readTime: "وقت القراءة",
    backToArticles: "← العودة إلى قائمة المقالات",
    notFoundTitle: "المقال غير موجود",
    notFoundDesc: "عذراً، المقال المطلوب غير موجود أو تم نقله.",
    relatedTitle: "اقرأ أيضاً",
    ctaTitle: "هل أعجبك هذا المقال؟",
    ctaDesc: "اكتشف المزيد من الأفكار والتحليلات حول علم النفس، الفلسفة وبناء السلام الداخلي.",
    ctaBtn: "اكتشف المزيد من المقالات ←",
    newsletterTitle: "لا تفوّت مقالاتنا وأفكارنا القادمة",
    newsletterDesc: "اشترك في النشرة الفلسفية لتصلك مقالات حصرية وتأملات دورية.",
    newsletterBtn: "اشترك الآن",
    newsletterSuccess: "شكراً لاشتراكك في مجلة حكمة ونور!",
    takeawaysTitle: "✦ ما يجب أن تتذكره",
    conclusionTitle: "الخلاصة والتأمل الأخير",
    authorLabel: "بقلم",
    readArticle: "اقرأ المقال",
    seeAll: "الكل",
    homeCrumb: "الرئيسية",
    articlesCrumb: "المقالات"
  }
};

// --- Toast Feedback Helper ---
function showToast(msg) {
  let toast = document.getElementById('magazineToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'magazineToast';
    toast.className = 'mag-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// --- LocalStorage State Helpers ---
function getSavedArticlesList() {
  try {
    return JSON.parse(localStorage.getItem('hikma_saved_articles') || '[]');
  } catch (e) {
    return [];
  }
}

function isArticleSaved(id) {
  return getSavedArticlesList().includes(id);
}

function toggleArticleSaveState(id) {
  let list = getSavedArticlesList();
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  let isSaved = false;
  if (list.includes(id)) {
    list = list.filter(item => item !== id);
    showToast(t.unsavedMsg);
  } else {
    list.push(id);
    showToast(t.savedMsg);
    isSaved = true;
  }
  localStorage.setItem('hikma_saved_articles', JSON.stringify(list));
  return isSaved;
}

function getLikedArticlesList() {
  try {
    return JSON.parse(localStorage.getItem('hikma_liked_articles') || '[]');
  } catch (e) {
    return [];
  }
}

function isArticleLiked(id) {
  return getLikedArticlesList().includes(id);
}

function toggleArticleLikeState(id) {
  let list = getLikedArticlesList();
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  let isLiked = false;
  if (list.includes(id)) {
    list = list.filter(item => item !== id);
    showToast(t.unlikedMsg);
  } else {
    list.push(id);
    showToast(t.likedMsg);
    isLiked = true;
  }
  localStorage.setItem('hikma_liked_articles', JSON.stringify(list));
  return isLiked;
}

function getArticleRating(id) {
  return localStorage.getItem('hikma_rating_' + id) || '0';
}

function setArticleRating(id, rating) {
  localStorage.setItem('hikma_rating_' + id, rating);
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  showToast(t.rateThanks + ' ' + rating + '/5 ★');
}

function getArticleCustomComments(id) {
  try {
    return JSON.parse(localStorage.getItem('hikma_comments_' + id) || '[]');
  } catch (e) {
    return [];
  }
}

function addArticleCustomComment(id, commentObj) {
  const list = getArticleCustomComments(id);
  list.unshift(commentObj);
  localStorage.setItem('hikma_comments_' + id, JSON.stringify(list));
  return list;
}

// Clean slug safely without regex escaping issues
function cleanArticleSlug(str) {
  if (!str) return '';
  let s = str.toString().trim().toLowerCase();
  while (s.startsWith('./') || s.startsWith('../') || s.startsWith('articles/')) {
    if (s.startsWith('./')) s = s.slice(2);
    else if (s.startsWith('../')) s = s.slice(3);
    else if (s.startsWith('articles/')) s = s.slice(9);
  }
  if (s.endsWith('.html')) {
    s = s.slice(0, -5);
  }
  return s.trim();
}

// --- Bulletproof Article Finder ---
function findArticleBySlugOrFile(slugOrFile, lang) {
  if (!slugOrFile) return null;
  const articles = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].articles) || [];
  const clean = cleanArticleSlug(slugOrFile);

  // 1. Direct match in active language
  let found = articles.find(a => {
    const aId = cleanArticleSlug(a.id);
    const aFile = cleanArticleSlug(a.file);
    return aId === clean || aFile === clean;
  });

  if (found) return found;

  // 2. Cross-language canonical lookup
  const allLangs = ['ar', 'fr', 'en'];
  for (const l of allLangs) {
    const list = (TIKTOK_DATA.content[l] && TIKTOK_DATA.content[l].articles) || [];
    const match = list.find(a => {
      const aId = cleanArticleSlug(a.id);
      const aFile = cleanArticleSlug(a.file);
      return aId === clean || aFile === clean;
    });
    if (match) {
      return articles.find(a => a.id === match.id) || match;
    }
  }

  return null;
}

// --- Language Engine ---
function setLanguage(lang) {
  currentLang = lang;
  saveLanguage(lang);
  
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  const activeName = document.getElementById('activeLangName');
  if (activeName) activeName.textContent = (LANG_METADATA[lang] && LANG_METADATA[lang].label) || "العربية";

  const options = document.querySelectorAll('.lang-opt');
  options.forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang][key]) {
      el.textContent = TIKTOK_DATA.ui[lang][key];
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput && ARTICLES_PAGE_TRANSLATIONS[lang]) {
    searchInput.placeholder = ARTICLES_PAGE_TRANSLATIONS[lang].searchPlaceholder;
  }
  
  const noResultsEl = document.getElementById('noResults');
  if (noResultsEl && ARTICLES_PAGE_TRANSLATIONS[lang]) {
    noResultsEl.textContent = ARTICLES_PAGE_TRANSLATIONS[lang].noResults;
  }

  populateNavbarDropdown();
  populateArticles(currentCategory, currentSearch);

  // If reader modal is active, re-render it in new language smoothly
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

function populateNavbarDropdown() {
  const subMenu = document.getElementById('thinkersSubMenu');
  if (!subMenu) return;
  
  const thinkers = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].thinkers) || [];
  const seeAllLabel = (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].seeAllThinkers) || "Tous les philosophes →";
  
  let html = thinkers.map(t => {
    return '<a href="../thinkers/?thinker=' + t.id + '" class="sub-link" data-thinker="' + t.id + '">' + t.name + '</a>';
  }).join('');
  
  html += '<a href="../thinkers/?thinker=all" class="sub-link see-all" data-thinker="all">' + seeAllLabel + '</a>';
  subMenu.innerHTML = html;
}

function initNavbarScroll() {
  const header = document.querySelector('.navbar-header');
  if (!header) return;
  
  const updateScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  updateScroll();
  window.addEventListener('scroll', updateScroll);
}

// --- Grid Populator ---
function populateArticles(category, keyword) {
  category = category || 'all';
  keyword = keyword || '';
  
  const container = document.getElementById('articlesList');
  const featuredContainer = document.getElementById('featuredArticleSection');
  const noResultsEl = document.getElementById('noResults');
  
  let articles = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].articles) 
    ? TIKTOK_DATA.content[currentLang].articles 
    : (TIKTOK_DATA.content['ar'] ? TIKTOK_DATA.content['ar'].articles : []);

  const readLabel = (ARTICLES_PAGE_TRANSLATIONS[currentLang] && ARTICLES_PAGE_TRANSLATIONS[currentLang].readArticle) 
    || (currentLang === 'ar' ? "اقرأ المقال" : currentLang === 'fr' ? "Lire l'article" : "Read article");

  const featuredLabel = (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].featured) 
    || (currentLang === 'ar' ? "مقال مميز" : currentLang === 'fr' ? "À la une" : "Featured");

  if (!container || !articles) return;

  let filtered = [...articles];

  if (category && category !== 'all') {
    filtered = filtered.filter(art => art.category === category);
  }

  if (keyword && keyword.trim() !== '') {
    const term = keyword.toLowerCase().trim();
    filtered = filtered.filter(art => 
      (art.title && art.title.toLowerCase().includes(term)) || 
      (art.desc && art.desc.toLowerCase().includes(term))
    );
  }

  if (filtered.length === 0) {
    if (featuredContainer) featuredContainer.style.display = 'none';
    container.style.display = 'none';
    if (noResultsEl) noResultsEl.style.display = 'block';
  } else {
    if (noResultsEl) noResultsEl.style.display = 'none';

    // Check if we should render Featured Article at the top (when on 'all' and no search filter)
    let gridArticles = filtered;
    if (featuredContainer && category === 'all' && (!keyword || keyword.trim() === '')) {
      const featuredArt = filtered.find(a => a.id === 'discipline-sans-epuisement' || a.featured) || filtered[0];
      if (featuredArt) {
        featuredContainer.style.display = 'block';
        const catLabel = featuredArt.categoryName || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang][featuredArt.category]) || featuredArt.category;
        const fImgSrc = featuredArt.image ? (featuredArt.image.startsWith('../') ? featuredArt.image : '../' + featuredArt.image) : '../main_home_hd_bg.jpg';
        const fTarget = featuredArt.file || featuredArt.id;

        featuredContainer.innerHTML = '<div class="featured-headline-card" style="background: linear-gradient(135deg, rgba(16, 26, 20, 0.95) 0%, rgba(26, 38, 30, 0.9) 100%); border: 1.5px solid rgba(223, 177, 91, 0.45); border-radius: 26px; padding: 32px; box-shadow: 0 16px 45px rgba(0,0,0,0.6); position: relative; overflow: hidden; backdrop-filter: blur(16px);">' +
            '<div style="display: grid; grid-template-columns: 1fr 340px; gap: 32px; align-items: center;" class="featured-article-grid">' +
              '<div>' +
                '<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;">' +
                  '<span style="background: rgba(223, 177, 91, 0.18); border: 1px solid rgba(223, 177, 91, 0.45); color: #F5D98A; font-weight: 800; font-size: 0.82rem; padding: 4px 14px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px;">' +
                    '🌿 ' + featuredLabel +
                  '</span>' +
                  '<span style="background: rgba(52, 211, 153, 0.15); color: #34D399; font-size: 0.8rem; font-weight: 700; padding: 4px 12px; border-radius: 14px;">' +
                    catLabel +
                  '</span>' +
                  '<span style="color: rgba(250, 246, 239, 0.6); font-size: 0.85rem;">⏱️ ' + featuredArt.readTime + '</span>' +
                '</div>' +
                '<h2 class="serif-title" style="font-size: 1.85rem; color: #FFFDF8; line-height: 1.35; margin: 0 0 14px; font-weight: 800; cursor: pointer;" onclick="openArticleReader(\'' + fTarget + '\')">' +
                  featuredArt.title +
                '</h2>' +
                '<p style="font-size: 1.02rem; color: rgba(250, 246, 239, 0.88); line-height: 1.75; margin: 0 0 24px;">' +
                  featuredArt.desc +
                '</p>' +
                '<button type="button" class="quiz-btn" onclick="openArticleReader(\'' + fTarget + '\')" style="padding: 12px 28px; display: inline-flex; align-items: center; gap: 10px; font-weight: 800; font-size: 0.95rem; border-radius: 14px; cursor: pointer;">' +
                  '<span>' + readLabel + '</span>' +
                '</button>' +
              '</div>' +
              '<div style="text-align: center; cursor: pointer;" onclick="openArticleReader(\'' + fTarget + '\')">' +
                '<img src="' + fImgSrc + '" alt="' + (featuredArt.imageAlt || featuredArt.title) + '" loading="eager" style="width: 100%; height: 230px; object-fit: cover; border-radius: 20px; border: 2px solid rgba(223, 177, 91, 0.4); box-shadow: 0 12px 35px rgba(0,0,0,0.6); transition: transform 0.3s ease;" onerror="this.src=\'../main_home_hd_bg.jpg\';">' +
              '</div>' +
            '</div>' +
          '</div>';

        // Render remaining articles in grid
        gridArticles = filtered.filter(a => a.id !== featuredArt.id);
      }
    } else if (featuredContainer) {
      featuredContainer.style.display = 'none';
    }

    container.style.display = 'grid';
    container.innerHTML = gridArticles.map(art => {
      const badgeHtml = art.featured ? '<span class="card-featured-badge">' + featuredLabel + '</span>' : '';
      const categoryLabel = art.categoryName || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang][art.category]) || art.category;
      
      const imageSrc = art.image ? (art.image.startsWith('../') ? art.image : '../' + art.image) : '../main_home_hd_bg.jpg';
      const imageAlt = art.imageAlt || art.title;
      const targetFile = art.file || art.id;

      return '<div class="article-card" style="cursor: pointer;" data-file="' + targetFile + '" onclick="openArticleReader(\'' + targetFile + '\')">' +
          '<div class="article-image-container">' +
            badgeHtml +
            '<img src="' + imageSrc + '" alt="' + imageAlt + '" class="article-image" loading="lazy" onerror="this.src=\'../main_home_hd_bg.jpg\';">' +
          '</div>' +
          '<div class="card-meta-row">' +
            '<span style="color: var(--accent-green); font-weight: 600; text-transform: uppercase;">' + categoryLabel + '</span>' +
            '<span class="card-meta-dot">•</span>' +
            '<span style="display: inline-flex; align-items: center; gap: 4px;">' +
              '<svg class="card-meta-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>' +
              art.readTime +
            '</span>' +
          '</div>' +
          '<h3 class="article-title" style="margin-top: 10px;">' + art.title + '</h3>' +
          '<p class="article-desc">' + art.desc + '</p>' +
          '<div class="article-actions" style="margin-top: auto; padding-top: 15px; display: flex; gap: 15px; align-items: center;">' +
            '<button class="card-action-link" type="button" style="background:none; border:none; padding:0; cursor:pointer; color: var(--accent-gold); font-weight:700; display:inline-flex; align-items:center; gap:6px;">' +
              '<span>' + readLabel + '</span>' +
              '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<line x1="' + (currentLang === 'ar' ? '19' : '5') + '" y1="12" x2="' + (currentLang === 'ar' ? '5' : '19') + '" y2="12"></line>' +
                '<polyline points="' + (currentLang === 'ar' ? '12 19 5 12 12 5' : '12 5 19 12 12 19') + '"></polyline>' +
              '</svg>' +
            '</button>' +
          '</div>' +
        '</div>';
    }).join('');

    setupArticleModalListeners();
  }
}

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

function setupArticleModalListeners() {
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    card.onclick = function(e) {
      e.preventDefault();
      const file = card.getAttribute('data-file');
      if (file) {
        openArticleReader(file);
      }
    };
  });
}

// --- 404 View Generator ---
function renderArticle404(slug) {
  const modal = document.getElementById('articleReaderModal');
  const root = document.getElementById('magazineArticleRoot');
  if (!modal || !root) return;

  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];

  root.innerHTML = '<div style="text-align: center; padding: 90px 20px; max-width: 600px; margin: 0 auto;">' +
      '<span style="font-size: 4rem; display: block; margin-bottom: 10px; color: var(--accent-gold); opacity: 0.6; font-family: \'Playfair Display\', serif;">404</span>' +
      '<h2 style="font-size: 2rem; color: #FFFDF8; font-weight: 800; margin-bottom: 16px;">' + t.notFoundTitle + '</h2>' +
      '<p style="font-size: 1.1rem; color: #D1C5B4; line-height: 1.8; margin-bottom: 35px;">' + t.notFoundDesc + '</p>' +
      '<button onclick="closeArticleReader()" style="background: #DFB15B; color: #070A08; font-weight: 800; font-size: 1rem; border: none; padding: 14px 34px; border-radius: 30px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 8px 25px rgba(223, 177, 91, 0.4);">' +
        t.backToArticles +
      '</button>' +
    '</div>';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// --- Magazine Article Reader Engine V3 ---
function openArticleReader(slugOrFile) {
  const article = findArticleBySlugOrFile(slugOrFile, currentLang);
  const modal = document.getElementById('articleReaderModal');
  const root = document.getElementById('magazineArticleRoot');

  if (!article) {
    renderArticle404(slugOrFile);
    return;
  }

  if (article && article.file && (
    article.file.includes('stop-overthinking') ||
    article.file.includes('discipline-sans-epuisement') ||
    article.file.includes('redevenir-constant-apres-abandon') ||
    article.file.includes('nouvel-essor-apres-difficultes') ||
    article.file.includes('reprendre-habitude-apres-interruption') ||
    article.file.includes('petites-habitudes-grande-decision') ||
    article.file.includes('discipline-vs-motivation') ||
    article.file.includes('construire-une-habitude-durable')
  )) {
    window.location.href = '../files/' + (article.file.endsWith('.html') ? article.file : article.file + '.html');
    return;
  }

  activeArticleFile = article.file || article.id;
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  const categoryName = article.categoryName || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang][article.category]) || article.category;
  const imgSrc = article.image ? (article.image.startsWith('../') ? article.image : '../' + article.image) : '../main_home_hd_bg.jpg';
  const imgAlt = article.imageAlt || article.title;
  const isSaved = isArticleSaved(article.id);
  const isLiked = isArticleLiked(article.id);
  const userRating = getArticleRating(article.id);

  // 1. Dynamic SEO updates
  document.title = article.title + ' | Hikma & Nour';
  const ogTitle = document.getElementById('ogTitle');
  if (ogTitle) ogTitle.content = article.title;
  const ogDesc = document.getElementById('ogDesc');
  if (ogDesc) ogDesc.content = article.desc;
  const ogImage = document.getElementById('ogImage');
  if (ogImage) ogImage.content = imgSrc;
  const canonical = document.getElementById('canonicalUrl');
  if (canonical) canonical.href = 'https://jardin-des-pensees.onrender.com/articles/?article=' + (article.file || article.id);

  // 2. Structured JSON-LD
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
    "image": [imgSrc],
    "datePublished": article.date || "2026-05-20",
    "author": {
      "@type": "Organization",
      "name": "Hikma & Nour | حكمة ونور",
      "url": "https://jardin-des-pensees.onrender.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hikma & Nour",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jardin-des-pensees.onrender.com/brand_logo_official.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": 'https://jardin-des-pensees.onrender.com/articles/?article=' + (article.file || article.id)
    }
  });

  // 3. Build Table of Contents data
  const tocEntries = [];
  if (article.sections && Array.isArray(article.sections)) {
    article.sections.forEach((sec, idx) => {
      if (sec.title && sec.type !== 'insight' && sec.type !== 'practical') {
        tocEntries.push({ id: 'sec-' + idx, title: sec.title });
      } else if (sec.type === 'practical' && sec.title) {
        tocEntries.push({ id: 'sec-practical', title: sec.title });
      }
    });
  } else if (article.body && Array.isArray(article.body)) {
    article.body.forEach((item, idx) => {
      if (typeof item === 'object' && item.title) {
        tocEntries.push({ id: 'sec-' + idx, title: item.title });
      }
    });
  }

  if (article.inBrief) {
    tocEntries.push({ id: 'sec-takeaways', title: t.takeawaysTitle });
  }
  if (article.conclusion) {
    tocEntries.push({ id: 'sec-conclusion', title: t.conclusionTitle });
  }

  // 4. Generate Main Content HTML
  let contentHtml = '';

  // Breadcrumbs
  const truncatedTitle = article.title.length > 40 ? article.title.slice(0, 40) + '...' : article.title;
  contentHtml += '<nav class="reader-breadcrumbs" aria-label="Fil d\'Ariane">' +
      '<a href="../" class="crumb-link">' + t.homeCrumb + '</a>' +
      '<span class="crumb-sep">›</span>' +
      '<span class="crumb-link" onclick="closeArticleReader()">' + t.articlesCrumb + '</span>' +
      '<span class="crumb-sep">›</span>' +
      '<span class="crumb-link" onclick="closeArticleReader(); handleCategoryChange(\'' + article.category + '\')">' + categoryName + '</span>' +
      '<span class="crumb-sep">›</span>' +
      '<span class="crumb-current">' + truncatedTitle + '</span>' +
    '</nav>';

  // Magazine Hero
  const chapoText = article.chapo || article.desc;
  const authorName = article.author || 'Hikma & Nour | حكمة ونور';
  const articleDate = article.date || '20 Mai 2026';
  const saveIcon = isSaved ? '♥' : '♡';
  const saveLabel = isSaved ? t.savedBtnLabel : t.saveBtnLabel;
  const likeIcon = isLiked ? '❤️' : '🤍';
  const likeLabel = isLiked ? t.likedBtnLabel : t.likeBtnLabel;
  const saveActive = isSaved ? ' active' : '';
  const likeActive = isLiked ? ' active' : '';

  contentHtml += '<header class="magazine-hero">' +
      '<div class="magazine-hero-top">' +
        '<span class="magazine-category-badge">' + categoryName + '</span>' +
      '</div>' +
      '<h1 class="magazine-hero-title">' + article.title + '</h1>' +
      '<p class="magazine-hero-chapo">' + chapoText + '</p>' +
      '<div class="magazine-meta-bar">' +
        '<div class="magazine-meta-left">' +
          '<div class="magazine-meta-author">' +
            '<img src="../brand_logo_official.png" alt="Hikma & Nour">' +
            '<span>' + authorName + '</span>' +
          '</div>' +
          '<span class="meta-divider">•</span>' +
          '<span class="magazine-meta-item">📅 ' + articleDate + '</span>' +
          '<span class="meta-divider">•</span>' +
          '<span class="magazine-meta-item">⏱️ ' + article.readTime + '</span>' +
        '</div>' +
        '<div class="magazine-actions-group">' +
          '<button type="button" class="btn-mag-action' + saveActive + '" id="btnMagSave" onclick="window.handleMagazineSave(\'' + article.id + '\')" aria-label="' + saveLabel + '">' +
            '<span>' + saveIcon + '</span>' +
            '<span id="txtMagSave">' + saveLabel + '</span>' +
          '</button>' +
          '<button type="button" class="btn-mag-action' + likeActive + '" id="btnMagLike" onclick="window.handleMagazineLike(\'' + article.id + '\')" aria-label="' + likeLabel + '">' +
            '<span>' + likeIcon + '</span>' +
            '<span id="txtMagLike">' + likeLabel + '</span>' +
          '</button>' +
          '<button type="button" class="btn-mag-action" onclick="window.handleMagazineShare(\'copy\')" title="' + t.shareArticle + '">' +
            '<span>↗</span>' +
            '<span>' + t.shareArticle + '</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="magazine-cover-wrapper">' +
        '<img src="' + imgSrc + '" alt="' + imgAlt + '" loading="eager" onerror="this.src=\'../main_home_hd_bg.jpg\';">' +
      '</div>' +
    '</header>';

  // Mobile Collapsible TOC
  if (tocEntries.length > 0) {
    contentHtml += '<div class="magazine-mobile-toc" id="magMobileToc">' +
        '<div class="magazine-mobile-toc-header" onclick="document.getElementById(\'magMobileToc\').classList.toggle(\'open\')">' +
          '<span>' + t.mobileTocTitle + '</span>' +
          '<span>▾</span>' +
        '</div>' +
        '<div class="magazine-mobile-toc-content">' +
          '<ul class="magazine-toc-list">' +
            tocEntries.map(e => '<li><a href="#' + e.id + '" onclick="event.preventDefault(); document.getElementById(\'' + e.id + '\')?.scrollIntoView({behavior:\'smooth\', block:\'start\'}); document.getElementById(\'magMobileToc\').classList.remove(\'open\');">' + e.title + '</a></li>').join('') +
          '</ul>' +
        '</div>' +
      '</div>';
  }

  // Split Grid Container
  contentHtml += '<div class="magazine-split-grid">';

  // Left Sticky Sidebar
  const sidebarQuote = article.quote || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang].featuredQuote) || "الحكمة في الهدوء الداخلي.";
  const sidebarQuoteAuthor = article.quoteAuthor || "— Hikma & Nour";

  contentHtml += '<aside class="magazine-sidebar">' +
      (tocEntries.length > 0 ? (
        '<div class="magazine-sidebar-card">' +
          '<h4 class="magazine-sidebar-title">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>' +
            t.tocTitle +
          '</h4>' +
          '<ul class="magazine-toc-list" id="magTocDesktop">' +
            tocEntries.map((e, idx) => '<li class="' + (idx === 0 ? 'active' : '') + '"><a href="#' + e.id + '" onclick="event.preventDefault(); document.getElementById(\'' + e.id + '\')?.scrollIntoView({behavior:\'smooth\', block:\'start\'});">' + e.title + '</a></li>').join('') +
          '</ul>' +
        '</div>'
      ) : '') +
      '<div class="magazine-sidebar-card" style="text-align: center;">' +
        '<span class="magazine-quote-icon">❝</span>' +
        '<p style="font-size: 1.05rem; font-style: italic; color: #FFFDF8; line-height: 1.6; font-family: \'Noto Naskh Arabic\', \'Playfair Display\', serif; margin: 0 0 10px;">' +
          sidebarQuote +
        '</p>' +
        '<span style="font-size: 0.8rem; font-weight: 800; color: #DFB15B; text-transform: uppercase;">' +
          sidebarQuoteAuthor +
        '</span>' +
      '</div>' +
      '<div class="magazine-sidebar-card" style="text-align: center;">' +
        '<h4 class="magazine-sidebar-title" style="justify-content: center; border: none; padding-bottom: 0;">' + t.newsletterTitle + '</h4>' +
        '<p style="font-size: 0.85rem; color: #998D7D; line-height: 1.5; margin-bottom: 14px;">' + t.newsletterDesc + '</p>' +
        '<form onsubmit="event.preventDefault(); window.handleNewsletterSubscribe(event);" style="display: flex; flex-direction: column; gap: 10px;">' +
          '<input type="email" placeholder="email@example.com" required style="padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(223, 177, 91, 0.25); background: rgba(0,0,0,0.3); color: #fff; text-align: center; outline: none; font-size: 0.88rem;">' +
          '<button type="submit" style="background: #DFB15B; color: #070A08; font-weight: 800; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-size: 0.88rem;">' + t.newsletterBtn + '</button>' +
        '</form>' +
      '</div>' +
    '</aside>';

  // Right Main Reading Stream
  contentHtml += '<article class="magazine-reading-stream">';

  // Summary / "À retenir" Box
  if (article.summaryBox) {
    const sumTitle = article.summaryBox.title || t.takeawaysTitle;
    contentHtml += '<div class="magazine-summary-card">' +
        '<div class="magazine-summary-title">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' +
          sumTitle +
        '</div>' +
        '<p class="magazine-summary-text">' + article.summaryBox.summary + '</p>' +
        (article.summaryBox.question ? ('<p class="magazine-summary-question">💭 ' + article.summaryBox.question + '</p>') : '') +
      '</div>';
  }

  // Render Structured Sections or Body
  if (article.sections && Array.isArray(article.sections)) {
    article.sections.forEach((sec, idx) => {
      if (sec.type === 'insight') {
        contentHtml += '<div class="magazine-insight-card">' +
            '<span class="magazine-insight-badge">' + (sec.badge || '🧠 Idée Clé') + '</span>' +
            '<h3 class="magazine-insight-title">' + sec.title + '</h3>' +
            '<p class="magazine-insight-text">' + sec.text + '</p>' +
          '</div>';
      } else if (sec.type === 'practical') {
        contentHtml += '<div class="magazine-practical-card" id="sec-practical">' +
            '<h3 class="magazine-practical-title">🎯 ' + sec.title + '</h3>' +
            (sec.desc ? ('<p class="magazine-practical-desc">' + sec.desc + '</p>') : '') +
            '<div class="practical-tips-list">' +
              sec.tips.map(tip => '<div class="practical-tip-item">' +
                '<div class="practical-tip-num">' + tip.num + '</div>' +
                '<div class="practical-tip-body">' +
                  '<h4>' + tip.title + '</h4>' +
                  '<p>' + tip.text + '</p>' +
                '</div>' +
              '</div>').join('') +
            '</div>' +
          '</div>';
      } else {
        const secNum = sec.num || ('0' + (idx + 1));
        contentHtml += '<div class="magazine-section-block" id="sec-' + idx + '">' +
            '<div class="magazine-section-header">' +
              '<span class="magazine-section-num">' + secNum + '</span>' +
              '<h2 class="magazine-section-title">' + sec.title + '</h2>' +
            '</div>' +
            '<div class="magazine-section-body">' +
              sec.content.map(p => '<p>' + p + '</p>').join('') +
            '</div>' +
          '</div>';
      }

      // Mid-article Quote placement
      if (idx === 1 && article.quote) {
        contentHtml += '<div class="magazine-quote-box">' +
            '<span class="magazine-quote-icon">❝</span>' +
            '<p class="magazine-quote-text">« ' + article.quote + ' »</p>' +
            '<span class="magazine-quote-author">' + (article.quoteAuthor || '— Hikma & Nour') + '</span>' +
          '</div>';
      }
    });
  } else if (article.body && Array.isArray(article.body)) {
    article.body.forEach((item, idx) => {
      if (typeof item === 'object') {
        contentHtml += '<div class="magazine-section-block" id="sec-' + idx + '">' +
            '<div class="magazine-section-header">' +
              '<span class="magazine-section-num">0' + (idx + 1) + '</span>' +
              '<h2 class="magazine-section-title">' + item.title + '</h2>' +
            '</div>' +
            '<div class="magazine-section-body">' +
              (Array.isArray(item.content) ? item.content.map(p => '<p>' + p + '</p>').join('') : ('<p>' + item.content + '</p>')) +
            '</div>' +
          '</div>';
      } else {
        contentHtml += '<p>' + item + '</p>';
      }
      
      if (idx === 1 && article.quote) {
        contentHtml += '<div class="magazine-quote-box">' +
            '<span class="magazine-quote-icon">❝</span>' +
            '<p class="magazine-quote-text">« ' + article.quote + ' »</p>' +
            '<span class="magazine-quote-author">' + (article.quoteAuthor || '— Hikma & Nour') + '</span>' +
          '</div>';
      }
    });
  }

  // Key Takeaways Card
  if (article.inBrief && Array.isArray(article.inBrief)) {
    contentHtml += '<div class="magazine-takeaways-card" id="sec-takeaways">' +
        '<h3 class="magazine-takeaways-title">' + t.takeawaysTitle + '</h3>' +
        '<ul class="magazine-takeaways-list">' +
          article.inBrief.map(b => '<li><span class="dot">•</span><span>' + b + '</span></li>').join('') +
        '</ul>' +
      '</div>';
  }

  // Conclusion
  if (article.conclusion) {
    contentHtml += '<div class="magazine-section-block" id="sec-conclusion">' +
        '<div class="magazine-section-header">' +
          '<span class="magazine-section-num">✦</span>' +
          '<h2 class="magazine-section-title">' + t.conclusionTitle + '</h2>' +
        '</div>' +
        '<p style="font-size: 1.15rem; line-height: 1.95; color: #D1C5B4;">' + article.conclusion + '</p>' +
      '</div>';
  }

  // Final Memorable Quote
  if (article.finalQuote) {
    contentHtml += '<div class="magazine-final-quote-card">' +
        '<p>' + article.finalQuote + '</p>' +
        '<span style="font-size: 0.9rem; font-weight: 800; color: #DFB15B;">' + (article.finalQuoteAuthor || '— Hikma & Nour | حكمة ونور') + '</span>' +
      '</div>';
  }

  // CTA Box
  contentHtml += '<div class="magazine-cta-card">' +
      '<h3>' + t.ctaTitle + '</h3>' +
      '<p>' + t.ctaDesc + '</p>' +
      '<button type="button" class="magazine-cta-btn" onclick="closeArticleReader(); setTimeout(() => { document.getElementById(\'globalSearchBtn\')?.click(); }, 150);">' +
        t.ctaBtn +
      '</button>' +
    '</div>';

  // Interactive Hub (Rating & Social Share)
  contentHtml += '<div class="magazine-hub-card">' +
      '<div class="magazine-rating-row">' +
        '<span style="font-weight: 700; font-size: 1.05rem; color: #FFFDF8;">' + t.ratePrompt + '</span>' +
        '<div class="star-rating-mag" id="magStarRating">' +
          '<span onclick="window.handleMagazineRate(\'' + article.id + '\', 1)">★</span>' +
          '<span onclick="window.handleMagazineRate(\'' + article.id + '\', 2)">★</span>' +
          '<span onclick="window.handleMagazineRate(\'' + article.id + '\', 3)">★</span>' +
          '<span onclick="window.handleMagazineRate(\'' + article.id + '\', 4)">★</span>' +
          '<span onclick="window.handleMagazineRate(\'' + article.id + '\', 5)">★</span>' +
        '</div>' +
      '</div>' +
      '<div class="magazine-share-row">' +
        '<span style="font-weight: 600; font-size: 0.92rem; color: #998D7D;">' + t.shareArticle + ' :</span>' +
        '<div class="magazine-share-buttons">' +
          '<button type="button" class="share-btn-pill whatsapp" onclick="window.handleMagazineShare(\'whatsapp\')">WhatsApp</button>' +
          '<button type="button" class="share-btn-pill twitter" onclick="window.handleMagazineShare(\'twitter\')">X / Twitter</button>' +
          '<button type="button" class="share-btn-pill facebook" onclick="window.handleMagazineShare(\'facebook\')">Facebook</button>' +
          '<button type="button" class="share-btn-pill copy" onclick="window.handleMagazineShare(\'copy\')">📋 ' + (currentLang === 'ar' ? 'نسخ الرابط' : currentLang === 'fr' ? 'Copier le lien' : 'Copy link') + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  // Comments Section
  const staticComments = (article.comments && Array.isArray(article.comments)) ? article.comments : [];
  const customComments = getArticleCustomComments(article.id);
  const allComments = [...customComments, ...staticComments];

  contentHtml += '<section class="magazine-comments-section" style="margin-top: 50px;">' +
      '<h3 style="font-size: 1.35rem; font-weight: 800; color: #FFFDF8; margin-bottom: 24px; display: flex; align-items: center; gap: 10px;">' +
        '<span>💬</span> ' + t.commentsHeader + ' (' + allComments.length + ')' +
      '</h3>' +
      '<div id="magCommentsList" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">' +
        allComments.map(c => '<div style="background: rgba(22, 31, 25, 0.85); border: 1px solid rgba(223, 177, 91, 0.18); padding: 18px 22px; border-radius: 16px;">' +
          '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
            '<span style="font-weight: 800; color: #F0C775; font-size: 0.95rem;">' + c.author + '</span>' +
            '<span style="font-size: 0.8rem; color: #998D7D;">' + c.time + '</span>' +
          '</div>' +
          '<p style="color: #D1C5B4; margin: 0; font-size: 0.98rem; line-height: 1.65;">' + c.text + '</p>' +
        '</div>').join('') +
      '</div>' +
      '<form id="magCommentForm" onsubmit="window.handleMagazineCommentSubmit(event, \'' + article.id + '\')" style="background: rgba(22, 31, 25, 0.85); border: 1.5px solid rgba(223, 177, 91, 0.2); padding: 22px; border-radius: 18px;">' +
        '<textarea id="magCommentInput" placeholder="' + t.commentPlaceholder + '" required style="width: 100%; min-height: 95px; padding: 14px; border-radius: 12px; border: 1px solid rgba(223, 177, 91, 0.2); background: rgba(0,0,0,0.3); color: #fff; font-family: inherit; font-size: 0.98rem; box-sizing: border-box; resize: vertical; margin-bottom: 12px; outline: none;"></textarea>' +
        '<button type="submit" style="background: #DFB15B; color: #070A08; font-weight: 800; border: none; padding: 11px 26px; border-radius: 30px; cursor: pointer; transition: all 0.2s;">' + t.postCommentBtn + '</button>' +
      '</form>' +
    '</section>';

  // Related Articles (3 cards)
  const allArts = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].articles) || [];
  const related = allArts.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : allArts.filter(a => a.id !== article.id).slice(0, 3);

  if (fallbackRelated.length > 0) {
    contentHtml += '<section class="magazine-related-section">' +
        '<h3 class="magazine-related-title">' + t.relatedTitle + '</h3>' +
        '<div class="magazine-related-grid">' +
          fallbackRelated.map(r => {
            const rImg = r.image ? (r.image.startsWith('../') ? r.image : '../' + r.image) : '../main_home_hd_bg.jpg';
            const rCat = r.categoryName || (TIKTOK_DATA.ui[currentLang] && TIKTOK_DATA.ui[currentLang][r.category]) || r.category;
            const rTarget = r.file || r.id;
            return '<div class="magazine-related-card" onclick="openArticleReader(\'' + rTarget + '\')">' +
                '<img src="' + rImg + '" alt="' + r.title + '" loading="lazy" onerror="this.src=\'../main_home_hd_bg.jpg\';">' +
                '<div class="magazine-related-card-body">' +
                  '<span class="magazine-related-card-category">' + rCat + '</span>' +
                  '<h4 class="magazine-related-card-title">' + r.title + '</h4>' +
                  '<div class="magazine-related-card-meta">⏱️ ' + r.readTime + '</div>' +
                '</div>' +
              '</div>';
          }).join('') +
        '</div>' +
      '</section>';
  }

  contentHtml += '</article>'; // End reading stream
  contentHtml += '</div>'; // End split grid

  // 5. Inject HTML into Modal Root
  root.innerHTML = contentHtml;

  // 6. Update URL query parameter without page reload
  const url = new URL(window.location.href);
  url.searchParams.set('article', article.file || article.id);
  window.history.pushState({}, '', url);

  // 7. Show Modal & Lock Body Scroll
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const scrollContainer = document.getElementById('readerScrollContainer');
  if (scrollContainer) scrollContainer.scrollTop = 0;

  // 8. Initialize Scrollspy & Progress Bar
  setupMagazineScrollSpy();
}

function closeArticleReader() {
  const modal = document.getElementById('articleReaderModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  activeArticleFile = null;

  const url = new URL(window.location.href);
  url.searchParams.delete('article');
  window.history.pushState({}, '', url);
}

// --- Scrollspy & Reading Progress ---
function setupMagazineScrollSpy() {
  const sections = document.querySelectorAll('.magazine-section-block, .magazine-practical-card, .magazine-takeaways-card');
  const navItems = document.querySelectorAll('#magTocDesktop li');
  
  if (sections.length > 0 && navItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(li => li.classList.remove('active'));
          const id = entry.target.id;
          const activeLink = document.querySelector('#magTocDesktop a[href="#' + id + '"]');
          if (activeLink) {
            activeLink.parentElement.classList.add('active');
          }
        }
      });
    }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
  }

  // Progress Bar Listener
  const scrollContainer = document.getElementById('readerScrollContainer');
  const progressBar = document.getElementById('readingProgressBar');
  if (scrollContainer && progressBar) {
    scrollContainer.onscroll = () => {
      const max = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = max > 0 ? (scrollContainer.scrollTop / max) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    };
  }
}

// --- Global Handlers for In-Reader Actions ---
window.handleMagazineSave = function(id) {
  const isSaved = toggleArticleSaveState(id);
  const btn = document.getElementById('btnMagSave');
  const txt = document.getElementById('txtMagSave');
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  if (btn && txt) {
    if (isSaved) {
      btn.classList.add('active');
      btn.querySelector('span').textContent = '♥';
      txt.textContent = t.savedBtnLabel;
    } else {
      btn.classList.remove('active');
      btn.querySelector('span').textContent = '♡';
      txt.textContent = t.saveBtnLabel;
    }
  }
};

window.handleMagazineLike = function(id) {
  const isLiked = toggleArticleLikeState(id);
  const btn = document.getElementById('btnMagLike');
  const txt = document.getElementById('txtMagLike');
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  if (btn && txt) {
    if (isLiked) {
      btn.classList.add('active');
      btn.querySelector('span').textContent = '❤️';
      txt.textContent = t.likedBtnLabel;
    } else {
      btn.classList.remove('active');
      btn.querySelector('span').textContent = '🤍';
      txt.textContent = t.likeBtnLabel;
    }
  }
};

window.handleMagazineRate = function(id, rating) {
  setArticleRating(id, rating);
  const starContainer = document.getElementById('magStarRating');
  if (starContainer) {
    const stars = starContainer.querySelectorAll('span');
    stars.forEach((s, idx) => {
      s.style.color = (idx < rating) ? '#DFB15B' : 'rgba(223, 177, 91, 0.3)';
    });
  }
};

window.handleMagazineShare = function(platform) {
  const shareUrl = window.location.href;
  const shareTitle = document.title;
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];

  if (platform === 'whatsapp') {
    window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent(shareTitle + ' ' + shareUrl), '_blank');
  } else if (platform === 'twitter') {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareTitle) + '&url=' + encodeURIComponent(shareUrl), '_blank');
  } else if (platform === 'facebook') {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), '_blank');
  } else {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast(t.copiedMsg);
      }).catch(() => {
        showToast(t.copiedMsg);
      });
    } else {
      showToast(t.copiedMsg);
    }
  }
};

window.handleMagazineCommentSubmit = function(e, id) {
  e.preventDefault();
  const input = document.getElementById('magCommentInput');
  if (!input || !input.value.trim()) return;

  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  const author = (currentLang === 'ar') ? "قارئ حكمة ونور" : (currentLang === 'fr') ? "Lecteur Hikma & Nour" : "Reader";
  const time = (currentLang === 'ar') ? "الآن" : (currentLang === 'fr') ? "À l'instant" : "Just now";

  const commentObj = {
    author: author,
    time: time,
    text: input.value.trim()
  };

  addArticleCustomComment(id, commentObj);

  const list = document.getElementById('magCommentsList');
  if (list) {
    const newEl = document.createElement('div');
    newEl.style.cssText = 'background: rgba(223, 177, 91, 0.08); border: 1.5px solid rgba(223, 177, 91, 0.35); padding: 18px 22px; border-radius: 16px; animation: fadeIn 0.3s ease;';
    newEl.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
        '<span style="font-weight: 800; color: #F0C775; font-size: 0.95rem;">' + commentObj.author + '</span>' +
        '<span style="font-size: 0.8rem; color: #998D7D;">' + commentObj.time + '</span>' +
      '</div>' +
      '<p style="color: #FFFDF8; margin: 0; font-size: 0.98rem; line-height: 1.65;">' + commentObj.text + '</p>';
    list.prepend(newEl);
  }

  input.value = '';
  showToast(t.newCommentNotice);
};

window.handleNewsletterSubscribe = function(e) {
  e.preventDefault();
  const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
  showToast(t.newsletterSuccess);
  e.target.reset();
};

// Global expose
window.openArticleReader = openArticleReader;
window.closeArticleReader = closeArticleReader;

// --- Page & Modal Init ---
function initPageLogic() {
  const searchInput = document.getElementById('searchInput');
  const tags = document.querySelectorAll('.tag-btn');
  const subLinks = document.querySelectorAll('.sub-link');
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('navMenu');

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

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      const category = tag.getAttribute('data-category');
      handleCategoryChange(category);
    });
  });

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

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      populateArticles(currentCategory, currentSearch);
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  currentCategory = initialCategory;
  updateActiveTag(initialCategory);
  populateArticles(currentCategory, currentSearch);

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

  // Auto-open article from URL parameter
  const articleParam = urlParams.get('article');
  if (articleParam) {
    setTimeout(() => {
      openArticleReader(articleParam);
    }, 150);
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

function initializeArticlesApp() {
  setupMobileNavOverlay();
  initTheme();
  initLanguageSelector();
  initNavbarScroll();
  initPageLogic();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeArticlesApp);
} else {
  initializeArticlesApp();
}
