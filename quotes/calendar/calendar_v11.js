import TIKTOK_DATA from '../../data_v11.js';

// --- Language Metadata ---
const LANG_METADATA = {
  ar: { label: "العربية", code: "ar", dir: "rtl" },
  fr: { label: "Français", code: "fr", dir: "ltr" },
  en: { label: "English", code: "en", dir: "ltr" }
};

const DAYS_OF_WEEK = {
  ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  fr: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};

// Page Specific Translations & Content
const CALENDAR_PAGE_TRANSLATIONS = {
  fr: {
    seoTitle: "Le Calendrier de la Sagesse | Hikma & Nour — Une pensée par jour",
    seoDesc: "Découvrez une pensée par jour pour nourrir l'esprit avec le Calendrier de la Sagesse de Hikma & Nour. 365 jours de méditations et d'inspiration.",
    breadcrumbHome: "Accueil",
    breadcrumbQuotes: "Citations",
    breadcrumbCalendar: "Le Calendrier de la Sagesse",
    backToQuotes: "Retour aux citations",
    backToQuotesArrow: "←",
    heroBadge: "📅 LE CALENDRIER DE LA SAGESSE",
    heroTitle: "Le Calendrier de la Sagesse",
    heroSubtitle: "« Une pensée par jour pour nourrir l'esprit. »",
    heroPoetic: "Une pensée. Un instant. Une nouvelle façon de regarder le monde.",
    todayLiveLabel: "AUJOURD'HUI",
    todayBadge: "✦ PENSÉE DU JOUR",
    todayReflectionPrefix: "💡 Méditation du jour : ",
    copyBtn: "Copier",
    shareBtn: "Partager",
    favBtnAdd: "Ajouter aux favoris",
    favBtnSaved: "Favori sauvegardé",
    discoverThinkerBtn: "Découvrir le penseur →",
    weekBadge: "✨ CETTE SEMAINE",
    weekTitle: "Les 7 pensées de la semaine",
    weekSubtitle: "Une réflexion quotidienne pour accompagner votre semaine avec sérénité.",
    weekTodayTag: "Aujourd'hui",
    weekReadBtn: "Lire →",
    monthArtworkTitleSuffix: "— Méditations du mois",
    prevMonth: "← Mois précédent",
    nextMonth: "Mois suivant →",
    todayBtn: "Aujourd'hui",
    monthsGalleryTitle: "Galerie artistique des 12 mois de sagesse",
    exploreBadge: "🧭 EXPLOREZ LA SAGESSE",
    exploreTitle: "Poursuivez votre exploration",
    exploreSubtitle: "Découvrez nos autres espaces dédiés à la pensée, la philosophie et la sérénité.",
    expThinkersTitle: "Grands Penseurs",
    expThinkersDesc: "Explorez la vie, les œuvres et la doctrine des plus grands maîtres de l'histoire.",
    expThinkersLink: "Découvrir les penseurs →",
    expQuotesTitle: "Toutes les Citations",
    expQuotesDesc: "Accédez à notre répertoire complet de maximes, sagesses et pensées intemporelles.",
    expQuotesLink: "Voir les citations →",
    expArticlesTitle: "Articles & Essais",
    expArticlesDesc: "Des analyses approfondies en philosophie, psychologie et développement personnel.",
    expArticlesLink: "Lire les articles →",
    expAudioTitle: "Studio Audio",
    expAudioDesc: "Écoutez des livres audio, récits philosophiques et méditations guidées.",
    expAudioLink: "Écouter les audios →",
    toastCopied: "Citation copiée dans le presse-papiers ! 🌿",
    toastShared: "Lien de partage prêt !",
    toastFavAdded: "Pensée ajoutée à vos favoris ! ♡",
    toastFavRemoved: "Pensée retirée des favoris.",
    modalCopy: "Copier",
    modalShare: "Partager",
    modalFav: "Favoris",
    modalThinker: "Découvrir le penseur →"
  },
  en: {
    seoTitle: "The Wisdom Calendar | Hikma & Nour — One thought a day",
    seoDesc: "Discover one thought a day to nourish the mind with the Wisdom Calendar by Hikma & Nour. 365 days of daily meditations and timeless reflections.",
    breadcrumbHome: "Home",
    breadcrumbQuotes: "Quotes",
    breadcrumbCalendar: "The Wisdom Calendar",
    backToQuotes: "Back to quotes",
    backToQuotesArrow: "←",
    heroBadge: "📅 THE WISDOM CALENDAR",
    heroTitle: "The Wisdom Calendar",
    heroSubtitle: "“One thought a day to nourish the mind.”",
    heroPoetic: "One thought. One moment. A new way to look at the world.",
    todayLiveLabel: "TODAY",
    todayBadge: "✦ THOUGHT OF THE DAY",
    todayReflectionPrefix: "💡 Today's Reflection: ",
    copyBtn: "Copy",
    shareBtn: "Share",
    favBtnAdd: "Add to favorites",
    favBtnSaved: "Saved to favorites",
    discoverThinkerBtn: "Discover Thinker →",
    weekBadge: "✨ THIS WEEK",
    weekTitle: "7 Thoughts of the Week",
    weekSubtitle: "A daily reflection to guide your week with clarity and tranquility.",
    weekTodayTag: "Today",
    weekReadBtn: "Read →",
    monthArtworkTitleSuffix: "— Monthly Meditations",
    prevMonth: "← Previous Month",
    nextMonth: "Next Month →",
    todayBtn: "Today",
    monthsGalleryTitle: "Art Gallery of the 12 Months of Wisdom",
    exploreBadge: "🧭 EXPLORE WISDOM",
    exploreTitle: "Continue Your Journey",
    exploreSubtitle: "Discover our other dedicated spaces for philosophy, psychology, and inner peace.",
    expThinkersTitle: "Great Thinkers",
    expThinkersDesc: "Explore the lives, major works, and doctrines of history's greatest philosophers.",
    expThinkersLink: "Explore thinkers →",
    expQuotesTitle: "All Quotes",
    expQuotesDesc: "Access our comprehensive library of timeless maxims, quotes, and wisdom.",
    expQuotesLink: "Browse quotes →",
    expArticlesTitle: "Articles & Essays",
    expArticlesDesc: "Deep in-depth analyses in philosophy, cognitive psychology, and personal growth.",
    expArticlesLink: "Read articles →",
    expAudioTitle: "Audio Studio",
    expAudioDesc: "Listen to audiobooks, philosophical reflections, and soothing mindfulness stories.",
    expAudioLink: "Listen now →",
    toastCopied: "Quote copied to clipboard! 🌿",
    toastShared: "Share text copied to clipboard!",
    toastFavAdded: "Thought added to your favorites! ♡",
    toastFavRemoved: "Thought removed from favorites.",
    modalCopy: "Copy",
    modalShare: "Share",
    modalFav: "Favorite",
    modalThinker: "Discover Thinker →"
  },
  ar: {
    seoTitle: "تقويم الحكمة | حكمة ونور — فكرة كل يوم لتغذية العقل والروح",
    seoDesc: "اكتشف حكمة وتأملاً فلسفياً جديداً لكل يوم من السنة مع تقويم الحكمة من حكمة ونور. ٣٦٥ يوماً لبناء القوة الذهنية والهدوء الداخلي.",
    breadcrumbHome: "الرئيسية",
    breadcrumbQuotes: "اقتباسات",
    breadcrumbCalendar: "تقويم الحكمة",
    backToQuotes: "العودة إلى الاقتباسات",
    backToQuotesArrow: "←",
    heroBadge: "📅 تقويم الحكمة اليومي",
    heroTitle: "تقويم الحكمة",
    heroSubtitle: "« فكرة كل يوم لتغذية العقل والروح. »",
    heroPoetic: "فكرة واحدة. لحظة تأمل. نظرة جديدة إلى العالم والحياة.",
    todayLiveLabel: "اليوم",
    todayBadge: "✦ حكمة وتأمل اليوم",
    todayReflectionPrefix: "💡 تأمل اليوم : ",
    copyBtn: "نسخ",
    shareBtn: "مشاركة",
    favBtnAdd: "حفظ في المفضلة",
    favBtnSaved: "محفوظ في المفضلة",
    discoverThinkerBtn: "اكتشف الفيلسوف ←",
    weekBadge: "✨ تأملات الأسبوع",
    weekTitle: "هذا الأسبوع في رحاب الحكمة",
    weekSubtitle: "سبع حكم وتأملات لمرافقة أيامك طوال هذا الأسبوع بالهدوء والسكينة.",
    weekTodayTag: "اليوم",
    weekReadBtn: "اقرأ ←",
    monthArtworkTitleSuffix: "— تأملات الشهر",
    prevMonth: "← الشهر السابق",
    nextMonth: "الشهر التالي ←",
    todayBtn: "اليوم",
    monthsGalleryTitle: "لوحات أشهر السنة الاثني عشر",
    exploreBadge: "🧭 استكشف عوالم الحكمة",
    exploreTitle: "تعمّق أكثر في حديقة الأفكار",
    exploreSubtitle: "واصل رحلتك الفكرية واستكشف الأقسام الرئيسية في الموقع.",
    expThinkersTitle: "كبار الفلاسفة والمفكرين",
    expThinkersDesc: "استكشف سير كبار الفلاسفة، مدارسهم الفكرية، مؤلفاتهم وأهم مبادئهم في الحياة.",
    expThinkersLink: "استكشف الفلاسفة ←",
    expQuotesTitle: "موسوعة الاقتباسات",
    expQuotesDesc: "مكتبة ثرية تضم مئات الحكم والأقوال الخالدة مع شرح معانيها وتطبيقاتها المعاصرة.",
    expQuotesLink: "تصفح الاقتباسات ←",
    expArticlesTitle: "المقالات والدراسات",
    expArticlesDesc: "تحليلات وقراءات معمقة في الفلسفة، علم النفس، الهدوء الداخلي وتطوير الذات.",
    expArticlesLink: "اقرأ المقالات ←",
    expAudioTitle: "الاستوديو الصوتي",
    expAudioDesc: "استمع إلى ملخصات الكتب، السير الفلسفية، وجلسات التأمل وبناء السلام الداخلي.",
    expAudioLink: "استمع الآن ←",
    toastCopied: "تم نسخ الاقتباس بنجاح! 🌿",
    toastShared: "تم نسخ نص المشاركة بنجاح!",
    toastFavAdded: "تمت إضافة الحكمة إلى المفضلة! ♡",
    toastFavRemoved: "تمت إزالة الحكمة من المفضلة.",
    modalCopy: "نسخ",
    modalShare: "مشاركة",
    modalFav: "المفضلة",
    modalThinker: "اكتشف الفيلسوف ←"
  }
};

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

// Thinkers Slug Map
const THINKERS_SLUG_MAP = {
  "marcus": "marcaurele",
  "aurelius": "marcaurele",
  "aurele": "marcaurele",
  "ماركوس": "marcaurele",
  "أوريليوس": "marcaurele",
  "epictetus": "epictete",
  "epictete": "epictete",
  "إبيكتيتوس": "epictete",
  "ابكتيتوس": "epictete",
  "seneca": "seneque",
  "seneque": "seneque",
  "سينيكا": "seneque",
  "سنيكا": "seneque",
  "socrates": "socrate",
  "socrate": "socrate",
  "سقراط": "socrate",
  "plato": "platon",
  "platon": "platon",
  "أفلاطون": "platon",
  "افلاطون": "platon",
  "nietzsche": "nietzsche",
  "نيتشه": "nietzsche",
  "schopenhauer": "schopenhauer",
  "شوبنهاور": "schopenhauer",
  "camus": "camus",
  "كامو": "camus",
  "kant": "kant",
  "كانط": "kant",
  "descartes": "descartes",
  "ديكارت": "descartes",
  "spinoza": "spinoza",
  "سبينوزا": "spinoza",
  "confucius": "confucius",
  "كونفوشيوس": "confucius",
  "lao": "laotseu",
  "tseu": "laotseu",
  "لاو": "laotseu",
  "jung": "jung",
  "يونغ": "jung",
  "يونج": "jung",
  "freud": "freud",
  "فرويد": "freud",
  "kierkegaard": "kierkegaard",
  "كيركغور": "kierkegaard",
  "machiavel": "machiavel",
  "machiavelli": "machiavel",
  "ميكافيلي": "machiavel",
  "rousseau": "rousseau",
  "روسو": "rousseau",
  "pascal": "pascal",
  "باسكال": "pascal",
  "voltaire": "voltaire",
  "فولتير": "voltaire",
  "hobbes": "hobbes",
  "هوبز": "hobbes",
  "locke": "locke",
  "لوك": "locke",
  "beauvoir": "beauvoir",
  "بوفوار": "beauvoir",
  "sartre": "sartre",
  "سارتر": "sartre",
  "adler": "adler",
  "أدلر": "adler",
  "hegel": "hegel",
  "هيغل": "hegel",
  "هيجل": "hegel",
  "aristote": "aristote",
  "aristotle": "aristote",
  "أرسطو": "aristote"
};

// --- Language Storage & State ---
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
let activeModalDayData = null; // { day, monthIdx, quoteObj }

// --- Favorites in localStorage ---
function getSavedFavorites() {
  try {
    return JSON.parse(localStorage.getItem('saved_calendar_quotes') || '[]');
  } catch (e) {
    return [];
  }
}

function isQuoteFavorite(quoteKey) {
  const favs = getSavedFavorites();
  return favs.includes(quoteKey);
}

function toggleQuoteFavorite(quoteKey) {
  let favs = getSavedFavorites();
  let added = false;
  if (favs.includes(quoteKey)) {
    favs = favs.filter(k => k !== quoteKey);
    added = false;
  } else {
    favs.push(quoteKey);
    added = true;
  }
  localStorage.setItem('saved_calendar_quotes', JSON.stringify(favs));
  return added;
}

// --- Thinker Link Resolver ---
function getThinkerSlugFromAuthor(authorStr) {
  if (!authorStr) return null;
  const clean = authorStr.toLowerCase();
  for (const [key, slug] of Object.entries(THINKERS_SLUG_MAP)) {
    if (clean.includes(key)) {
      return slug;
    }
  }
  return null;
}

// --- Date Formatter ---
function getFormattedTodayDate(lang) {
  const now = new Date();
  const dayName = (DAYS_OF_WEEK[lang] || DAYS_OF_WEEK.ar)[now.getDay()];
  const months = MONTHS_DATA[lang] || MONTHS_DATA.ar;
  const monthName = months[now.getMonth()].name;
  const dayNum = now.getDate();
  const year = now.getFullYear();

  if (lang === 'ar') {
    return `${dayName} ${dayNum} ${monthName} ${year}`;
  } else if (lang === 'en') {
    return `${dayName}, ${monthName} ${dayNum}, ${year}`;
  } else {
    return `${dayName} ${dayNum} ${monthName} ${year}`;
  }
}

// Helper to get weekday name for a day in month
function getWeekdayName(day, monthIdx) {
  const year = new Date().getFullYear();
  const date = new Date(year, monthIdx, day);
  const dayIdx = date.getDay();
  return (DAYS_OF_WEEK[currentLang] || DAYS_OF_WEEK.ar)[dayIdx];
}

// --- Quote Source Engine ---
function getQuoteForDay(day, monthIdx) {
  const quotes = (TIKTOK_DATA.content[currentLang] && TIKTOK_DATA.content[currentLang].quotes) || [];
  if (quotes.length === 0) {
    return {
      text: currentLang === 'ar' ? 'الحكمة تبدأ بالمعرفة والهدوء.' : currentLang === 'en' ? 'Wisdom begins with knowledge and calm.' : 'La sagesse commence par la connaissance et la sérénité.',
      author: currentLang === 'ar' ? 'ماركوس أوريليوس (الرواقية)' : currentLang === 'en' ? 'Marcus Aurelius (Stoicism)' : 'Marc Aurèle (Stoïcisme)',
      reflection: currentLang === 'ar' ? 'تأمل اليوم في بناء السلام الداخلي والتركيز على ما في وسعك فقط.' : currentLang === 'en' ? 'Reflect today on cultivating inner calm and focusing only on what is in your control.' : 'Méditez aujourd\'hui sur la paix intérieure et la distinction entre ce qui dépend de vous et le reste.',
      category: currentLang === 'ar' ? '🏛️ الرواقية' : currentLang === 'en' ? '🏛️ Stoicism' : '🏛️ Stoïcisme',
      image: '../../thinkers/images/epictete.jpg',
      key: `quote-${monthIdx}-${day}`
    };
  }

  const quoteIndex = (day + monthIdx * 7) % quotes.length;
  const q = quotes[quoteIndex];

  // Extract author cleanly and category
  let authorRaw = q.author || "Hikma & Nour";
  let categoryTag = currentLang === 'ar' ? '🏛️ حكمة فلسفية' : currentLang === 'en' ? '🏛️ Philosophy & Wisdom' : '🏛️ Philosophie & Sagesse';

  if (authorRaw.includes('(') && authorRaw.includes(')')) {
    const parts = authorRaw.split('(');
    const catInside = parts[1].replace(')', '').trim();
    if (catInside) categoryTag = `🏛️ ${catInside}`;
  }

  const reflectionText = q.reflection || q.reflectionQuestion || (currentLang === 'ar'
    ? `تأمل اليوم: كيف تجعل من هذا المعنى دليلاً عملياً في قراراتك وتعاملك مع الآخرين اليوم؟`
    : currentLang === 'en'
    ? `Today's reflection: How can you apply this insight to guide your choices and interactions today?`
    : `Méditation du jour : Comment faire de cette pensée un guide pratique dans vos choix aujourd'hui ?`);

  // Ensure thinker image path is correct relative to quotes/calendar/
  let imgPath = q.image || 'thinkers/images/epictete.jpg';
  if (!imgPath.startsWith('../../') && !imgPath.startsWith('http')) {
    imgPath = `../../${imgPath.replace(/^(\.\.\/)+/, '')}`;
  }

  return {
    text: q.text,
    author: q.author,
    cleanAuthor: authorRaw.split('(')[0].trim(),
    category: categoryTag,
    reflection: reflectionText,
    image: imgPath,
    thinkerSlug: getThinkerSlugFromAuthor(authorRaw),
    key: q.id || `quote-${monthIdx}-${day}`
  };
}

// --- Theme Initialization ---
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

function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  
  toggleBtn.addEventListener('click', () => {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', activeTheme);
    initTheme();
  });
}

// --- Toast Notification ---
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

// --- Setup Hamburger Mobile Menu ---
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

// --- Language Engine & Direction ---
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
  const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;
  const ui = (TIKTOK_DATA.ui && TIKTOK_DATA.ui[currentLang]) || {};

  // SEO tags
  const seoTitle = document.getElementById('seoTitle');
  const seoDesc = document.getElementById('seoDesc');
  if (seoTitle) seoTitle.textContent = t.seoTitle;
  if (seoDesc) seoDesc.content = t.seoDesc;

  // Static Breadcrumb & Back button
  const bHome = document.getElementById('breadcrumbHome');
  const bCal = document.getElementById('breadcrumbCalendar');
  const backBtnText = document.getElementById('backToQuotesText');
  const backBtnArrow = document.getElementById('backToQuotesArrow');
  if (bHome) bHome.textContent = t.breadcrumbHome;
  if (bCal) bCal.textContent = t.breadcrumbCalendar;
  if (backBtnText) backBtnText.textContent = t.backToQuotes;
  if (backBtnArrow) backBtnArrow.textContent = currentLang === 'ar' ? '←' : '←';

  // Hero section
  const hBadgeText = document.getElementById('heroBadgeText');
  const hTitle = document.getElementById('calendarHeroTitle');
  const hSubtitle = document.getElementById('calendarHeroSubtitle');
  const hPoetic = document.getElementById('calendarHeroPoetic');
  const liveLabel = document.getElementById('todayLiveLabel');
  const liveDate = document.getElementById('todayLiveDate');

  if (hBadgeText) hBadgeText.textContent = t.heroBadge.replace('📅 ', '');
  if (hTitle) hTitle.textContent = t.heroTitle;
  if (hSubtitle) hSubtitle.textContent = t.heroSubtitle;
  if (hPoetic) hPoetic.textContent = t.heroPoetic;
  if (liveLabel) liveLabel.textContent = t.todayLiveLabel;
  if (liveDate) liveDate.textContent = getFormattedTodayDate(currentLang);

  // Today Card Buttons
  const cardBadge = document.getElementById('todayCardBadgeText');
  const reflPrefix = document.getElementById('todayReflectionPrefix');
  const copyBtnText = document.getElementById('todayCopyBtnText');
  const shareBtnText = document.getElementById('todayShareBtnText');
  if (cardBadge) cardBadge.textContent = t.todayBadge.replace('✦ ', '');
  if (reflPrefix) reflPrefix.textContent = t.todayReflectionPrefix;
  if (copyBtnText) copyBtnText.textContent = t.copyBtn;
  if (shareBtnText) shareBtnText.textContent = t.shareBtn;

  // This Week Section
  const wBadge = document.getElementById('weekSectionBadge');
  const wTitle = document.getElementById('weekSectionTitle');
  const wSubtitle = document.getElementById('weekSectionSubtitle');
  if (wBadge) wBadge.textContent = t.weekBadge.replace('✨ ', '');
  if (wTitle) wTitle.textContent = t.weekTitle;
  if (wSubtitle) wSubtitle.textContent = t.weekSubtitle;

  // Explore Section
  const expBadge = document.getElementById('exploreBadgeText');
  const expTitle = document.getElementById('exploreSectionTitle');
  const expSub = document.getElementById('exploreSectionSubtitle');
  if (expBadge) expBadge.textContent = t.exploreBadge.replace('🧭 ', '');
  if (expTitle) expTitle.textContent = t.exploreTitle;
  if (expSub) expSub.textContent = t.exploreSubtitle;

  const expThTitle = document.getElementById('expThinkersTitle');
  const expThDesc = document.getElementById('expThinkersDesc');
  const expThLink = document.getElementById('expThinkersLink');
  if (expThTitle) expThTitle.textContent = t.expThinkersTitle;
  if (expThDesc) expThDesc.textContent = t.expThinkersDesc;
  if (expThLink) expThLink.textContent = t.expThinkersLink;

  const expQTitle = document.getElementById('expQuotesTitle');
  const expQDesc = document.getElementById('expQuotesDesc');
  const expQLink = document.getElementById('expQuotesLink');
  if (expQTitle) expQTitle.textContent = t.expQuotesTitle;
  if (expQDesc) expQDesc.textContent = t.expQuotesDesc;
  if (expQLink) expQLink.textContent = t.expQuotesLink;

  const expArtTitle = document.getElementById('expArticlesTitle');
  const expArtDesc = document.getElementById('expArticlesDesc');
  const expArtLink = document.getElementById('expArticlesLink');
  if (expArtTitle) expArtTitle.textContent = t.expArticlesTitle;
  if (expArtDesc) expArtDesc.textContent = t.expArticlesDesc;
  if (expArtLink) expArtLink.textContent = t.expArticlesLink;

  const expAudTitle = document.getElementById('expAudioTitle');
  const expAudDesc = document.getElementById('expAudioDesc');
  const expAudLink = document.getElementById('expAudioLink');
  if (expAudTitle) expAudTitle.textContent = t.expAudioTitle;
  if (expAudDesc) expAudDesc.textContent = t.expAudioDesc;
  if (expAudLink) expAudLink.textContent = t.expAudioLink;

  // Common UI data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (ui[key]) {
      el.textContent = ui[key];
    }
  });

  // Modal Buttons
  const mCopyText = document.getElementById('modalCopyBtnText');
  const mShareText = document.getElementById('modalShareBtnText');
  const mFavText = document.getElementById('modalFavText');
  const mThinkerText = document.getElementById('modalThinkerBtnText');
  if (mCopyText) mCopyText.textContent = t.modalCopy;
  if (mShareText) mShareText.textContent = t.modalShare;
  if (mFavText) mFavText.textContent = t.modalFav;
  if (mThinkerText) mThinkerText.textContent = t.modalThinker;
}

// --- Language Selector Setup ---
function initLanguageSelector() {
  const activeLangName = document.getElementById('activeLangName');
  const langDropdown = document.getElementById('langDropdown');
  const langBtn = document.getElementById('langBtn');

  if (activeLangName) {
    activeLangName.textContent = (LANG_METADATA[currentLang] && LANG_METADATA[currentLang].label) || "العربية";
  }

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

        if (activeLangName) {
          activeLangName.textContent = (LANG_METADATA[currentLang] && LANG_METADATA[currentLang].label) || "العربية";
        }

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

        if (activeModalDayData) {
          openDayModal(activeModalDayData.day, activeModalDayData.monthIdx);
        }
      });
    });
  }

  applyLanguageDirection();
  translatePage();
}

// ==========================================================================
// RENDERING FUNCTIONS
// ==========================================================================

function renderCalendar() {
  renderTodayHighlight();
  renderThisWeekSection();
  renderMonthTabs();
  renderMonthBanner(activeMonthIndex);
  renderDaysGrid(activeMonthIndex);
  renderMonthsGallery();
}

// 1. Render Today's Big Wisdom Card
function renderTodayHighlight() {
  const today = new Date();
  const todayQuote = getQuoteForDay(today.getDate(), today.getMonth());
  const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;

  const quoteEl = document.getElementById('todayQuoteText');
  const authorEl = document.getElementById('todayAuthorText');
  const avatarEl = document.getElementById('todayAuthorAvatar');
  const catEl = document.getElementById('todayCategoryTag');
  const reflEl = document.getElementById('todayReflectionText');
  const thinkerBtn = document.getElementById('todayThinkerBtn');
  const favIcon = document.getElementById('todayFavIcon');
  const favText = document.getElementById('todayFavText');

  if (quoteEl) quoteEl.textContent = `« ${todayQuote.text} »`;
  if (authorEl) authorEl.textContent = `— ${todayQuote.author}`;
  if (avatarEl) {
    avatarEl.src = todayQuote.image;
    avatarEl.alt = todayQuote.cleanAuthor;
  }
  if (catEl) catEl.textContent = todayQuote.category;
  if (reflEl) reflEl.textContent = todayQuote.reflection;

  // Thinker Profile Link
  if (thinkerBtn) {
    if (todayQuote.thinkerSlug) {
      thinkerBtn.href = `../../thinkers/?thinker=${todayQuote.thinkerSlug}`;
      thinkerBtn.style.display = 'inline-flex';
      const thName = todayQuote.cleanAuthor || '';
      document.getElementById('todayThinkerBtnText').textContent = currentLang === 'ar'
        ? `اكتشف ${thName} ←`
        : currentLang === 'en'
        ? `Discover ${thName} →`
        : `Découvrir ${thName} →`;
    } else {
      thinkerBtn.href = `../../thinkers/`;
      document.getElementById('todayThinkerBtnText').textContent = t.discoverThinkerBtn;
    }
  }

  // Favorite button status
  const isFav = isQuoteFavorite(todayQuote.key);
  if (favIcon) favIcon.textContent = isFav ? '♥' : '♡';
  if (favText) favText.textContent = isFav ? t.favBtnSaved : t.favBtnAdd;

  // Wire up Actions for Today's Card
  const copyBtn = document.getElementById('todayCopyBtn');
  if (copyBtn) {
    copyBtn.onclick = () => {
      const textToCopy = `« ${todayQuote.text} » — ${todayQuote.author}\n${t.todayReflectionPrefix}${todayQuote.reflection}\n\nHikma & Nour: https://jardin-des-pensees.onrender.com/quotes/calendar/`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(t.toastCopied);
      }).catch(() => {
        showToast(t.toastCopied);
      });
    };
  }

  const shareBtn = document.getElementById('todayShareBtn');
  if (shareBtn) {
    shareBtn.onclick = () => {
      const shareData = {
        title: `${todayQuote.author} | Hikma & Nour`,
        text: `« ${todayQuote.text} » — ${todayQuote.author}`,
        url: window.location.href
      };
      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`).then(() => {
          showToast(t.toastShared);
        });
      }
    };
  }

  const favBtn = document.getElementById('todayFavBtn');
  if (favBtn) {
    favBtn.onclick = () => {
      const added = toggleQuoteFavorite(todayQuote.key);
      if (favIcon) favIcon.textContent = added ? '♥' : '♡';
      if (favText) favText.textContent = added ? t.favBtnSaved : t.favBtnAdd;
      showToast(added ? t.toastFavAdded : t.toastFavRemoved);
    };
  }
}

// 2. Render Section "Cette Semaine" (7 Jours)
function renderThisWeekSection() {
  const container = document.getElementById('weekGridContainer');
  if (!container) return;
  const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;
  const today = new Date();
  const currentDayOfWeek = today.getDay(); // 0 = Dimanche, 1 = Lundi...
  
  // Calculate Start of Week (Lundi or Dimanche)
  // Let's create a 7-day window centered on the current week
  const weekQuotes = [];
  const startOffset = currentLang === 'ar' ? currentDayOfWeek : (currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek);

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - (currentLang === 'ar' ? currentDayOfWeek - i : (currentDayOfWeek === 0 ? 6 - i : currentDayOfWeek - 1 - i)));
    
    const dayNum = d.getDate();
    const mIdx = d.getMonth();
    const isToday = (d.getDate() === today.getDate() && d.getMonth() === today.getMonth());
    const quoteObj = getQuoteForDay(dayNum, mIdx);
    const weekday = (DAYS_OF_WEEK[currentLang] || DAYS_OF_WEEK.ar)[d.getDay()];

    weekQuotes.push({
      dateObj: d,
      dayNum,
      mIdx,
      isToday,
      weekday,
      quoteObj
    });
  }

  container.innerHTML = weekQuotes.map(item => `
    <div class="week-day-card ${item.isToday ? 'is-today' : ''}" data-week-day="${item.dayNum}" data-week-month="${item.mIdx}">
      <div class="week-day-header">
        <span class="week-day-name">${item.weekday} ${item.dayNum}</span>
        ${item.isToday ? `<span class="week-day-today-tag">${t.weekTodayTag}</span>` : ''}
      </div>
      <div class="week-day-quote">« ${item.quoteObj.text} »</div>
      <div class="week-day-footer">
        <span class="week-day-author">${item.quoteObj.cleanAuthor}</span>
        <span class="week-day-read-btn">${t.weekReadBtn}</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.week-day-card').forEach(card => {
    card.addEventListener('click', () => {
      const d = parseInt(card.getAttribute('data-week-day'), 10);
      const m = parseInt(card.getAttribute('data-week-month'), 10);
      openDayModal(d, m);
    });
  });
}

// 3. Render Month Selector Tabs
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

// 4. Render Active Month Banner
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

// 5. Render Monthly Days Grid
function renderDaysGrid(monthIdx) {
  const grid = document.getElementById('daysGridContainer');
  if (!grid) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;
  const month = months[monthIdx];
  const today = new Date();
  const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;

  let html = '';
  for (let day = 1; day <= month.days; day++) {
    const quoteObj = getQuoteForDay(day, monthIdx);
    const isToday = (monthIdx === today.getMonth() && day === today.getDate());
    const weekday = getWeekdayName(day, monthIdx);

    const dayLabel = currentLang === 'ar'
      ? `${weekday} ${day}`
      : currentLang === 'en'
      ? `${weekday}, ${month.name} ${day}`
      : `${weekday} ${day} ${month.name}`;

    html += `
      <div class="day-item-card ${isToday ? 'is-today' : ''}" data-day="${day}" data-month="${monthIdx}">
        <div>
          <div class="day-card-header-row">
            <span class="day-card-number">${dayLabel}</span>
            ${isToday ? `<span class="day-card-today-badge">${t.weekTodayTag}</span>` : ''}
          </div>
          <div class="day-card-snippet">« ${quoteObj.text} »</div>
        </div>
        <div class="day-card-author">— ${quoteObj.cleanAuthor}</div>
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

// 6. Render 12 Months Gallery
function renderMonthsGallery() {
  const container = document.getElementById('monthsGalleryContainer');
  if (!container) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;

  container.innerHTML = months.map((m, idx) => `
    <div class="month-gallery-card" data-gallery-month="${idx}">
      <img src="${m.img}" alt="${m.name}" loading="lazy">
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

// ==========================================================================
// MODAL DIALOG ENGINE
// ==========================================================================

function openDayModal(day, monthIdx) {
  const modal = document.getElementById('dayQuoteModal');
  if (!modal) return;
  const months = MONTHS_DATA[currentLang] || MONTHS_DATA.ar;
  const month = months[monthIdx];
  const quoteObj = getQuoteForDay(day, monthIdx);
  const weekday = getWeekdayName(day, monthIdx);
  const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;

  activeModalDayData = { day, monthIdx, quoteObj };

  const dayLabel = currentLang === 'ar'
    ? `${weekday} ${day} — شهر ${month.name}`
    : currentLang === 'en'
    ? `${weekday}, ${month.name} ${day}`
    : `${weekday} ${day} ${month.name}`;

  document.getElementById('modalDayDate').textContent = dayLabel;
  document.getElementById('modalDayQuote').textContent = `« ${quoteObj.text} »`;
  document.getElementById('modalDayAuthor').textContent = `— ${quoteObj.author}`;
  document.getElementById('modalDayReflection').textContent = `${t.todayReflectionPrefix}${quoteObj.reflection}`;

  // Thinker link in modal
  const thinkerBtn = document.getElementById('modalThinkerBtn');
  if (thinkerBtn) {
    if (quoteObj.thinkerSlug) {
      thinkerBtn.href = `../../thinkers/?thinker=${quoteObj.thinkerSlug}`;
      thinkerBtn.style.display = 'inline-flex';
      const thName = quoteObj.cleanAuthor || '';
      document.getElementById('modalThinkerBtnText').textContent = currentLang === 'ar'
        ? `اكتشف ${thName} ←`
        : currentLang === 'en'
        ? `Discover ${thName} →`
        : `Découvrir ${thName} →`;
    } else {
      thinkerBtn.href = `../../thinkers/`;
      document.getElementById('modalThinkerBtnText').textContent = t.modalThinker;
    }
  }

  // Favorite button state
  const isFav = isQuoteFavorite(quoteObj.key);
  const favIcon = document.getElementById('modalFavIcon');
  const favText = document.getElementById('modalFavText');
  if (favIcon) favIcon.textContent = isFav ? '♥' : '♡';
  if (favText) favText.textContent = isFav ? t.favBtnSaved : t.modalFav;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDayModal() {
  const modal = document.getElementById('dayQuoteModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  activeModalDayData = null;
}

// ==========================================================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupThemeToggle();
  setupHamburger();
  initLanguageSelector();
  renderCalendar();

  // Navigation Month Buttons
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

  // Modal Close Listeners
  const closeBtn = document.getElementById('dayModalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeDayModal);

  const modalOverlay = document.getElementById('dayQuoteModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeDayModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDayModal();
  });

  // Modal Copy
  const copyBtn = document.getElementById('modalCopyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!activeModalDayData || !activeModalDayData.quoteObj) return;
      const q = activeModalDayData.quoteObj;
      const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;
      const textToCopy = `« ${q.text} » — ${q.author}\n${t.todayReflectionPrefix}${q.reflection}`;
      
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(t.toastCopied);
      }).catch(() => {
        showToast(t.toastCopied);
      });
    });
  }

  // Modal Share
  const shareBtn = document.getElementById('modalShareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!activeModalDayData || !activeModalDayData.quoteObj) return;
      const q = activeModalDayData.quoteObj;
      const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;
      const shareData = {
        title: `${q.author} | Hikma & Nour`,
        text: `« ${q.text} » — ${q.author}`,
        url: window.location.href
      };
      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`).then(() => {
          showToast(t.toastShared);
        });
      }
    });
  }

  // Modal Favorite
  const favBtn = document.getElementById('modalFavBtn');
  if (favBtn) {
    favBtn.addEventListener('click', () => {
      if (!activeModalDayData || !activeModalDayData.quoteObj) return;
      const q = activeModalDayData.quoteObj;
      const t = CALENDAR_PAGE_TRANSLATIONS[currentLang] || CALENDAR_PAGE_TRANSLATIONS.ar;
      const added = toggleQuoteFavorite(q.key);
      const favIcon = document.getElementById('modalFavIcon');
      const favText = document.getElementById('modalFavText');
      if (favIcon) favIcon.textContent = added ? '♥' : '♡';
      if (favText) favText.textContent = added ? t.favBtnSaved : t.modalFav;
      showToast(added ? t.toastFavAdded : t.toastFavRemoved);
    });
  }
});
