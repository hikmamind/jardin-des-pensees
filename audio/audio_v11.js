// ==========================================================================
// AUDIO SANCTUARY ENGINE — JARDIN DES PENSÉES / HIKMA & NOUR
// ==========================================================================

import TIKTOK_DATA from '../data_v11.js';

// --- Language Metadata ---
const LANG_METADATA = {
  ar: { label: "العربية", code: "ar", dir: "rtl" },
  fr: { label: "Français", code: "fr", dir: "ltr" },
  en: { label: "English", code: "en", dir: "ltr" }
};

// --- Page Translations ---
const AUDIO_I18N = {
  ar: {
    seoTitle: "المكتبة الصوتية للحكمة والفلسفة | حكمة ونور — HIKMA & NOUR",
    seoDesc: "استمع إلى أروع الروايات العالمية وكتب الفلسفة والتنمية الذاتية المسجلة صوتياً باللغة العربية الفصحى عبر مكتبة حكمة ونور الصوتية.",
    heroBadge: "المكتبة الصوتية للحكمة",
    heroTitle: "المكتبة الصوتية",
    heroSubtitle: "« استمع... تأمل... وغيّر نظرتك إلى الحياة. »",
    heroDesc: "٧ روائع أدبية وفلسفية خالدة مسموعة باللغة العربية الفصحى بنبرة هادئة ورصينة.",
    audioLangNotice: "الصوت متوفر باللغة العربية الفصحى",
    searchPlaceholder: "ابحث عن كتاب، مؤلف، أو فكرة...",
    catAll: "الكل",
    catPhilosophy: "فلسفة وفكر",
    catPsychology: "علم النفس",
    catClassics: "كلاسيكيات كبرى",
    catSelfDev: "تنمية وحكمة",
    catFavorites: "المفضلة",
    catInProgress: "قيد الاستماع",
    catCompleted: "المكتملة",
    featuredTag: "مختار المكتبة",
    featuredLabel: "عمل صوتي مميز",
    continueListeningTitle: "واصل الاستماع",
    allAudiobooksTitle: "جميع الأعمال الصوتية",
    audioBooksAvailableLabel: "كتب وروايات متوفرة",
    listenBtn: "استمع",
    listenNowBtn: "بدء الاستماع",
    resumeAtBtn: "استئناف عند",
    audioInArabicTag: "🎙️ باللغة العربية",
    audioAvailableInArabic: "🎙️ الصوت متوفر باللغة العربية",
    bHome: "الرئيسية",
    bAudio: "الصوتيات",
    backToLibrary: "العودة إلى المكتبة",
    favAdd: "حفظ في المفضلة",
    favSaved: "محفوظ في المفضلة",
    share: "مشاركة",
    tabChapters: "قائمة الفصول",
    tabAbout: "عن الرواية",
    tabTakeaways: "ماذا ستتعلم",
    tabQuotes: "اقتباسات",
    tabAuthor: "عن المؤلف",
    widgetQuoteTitle: "اقتباس من العمل",
    widgetCopyQuote: "نسخ الاقتباس",
    widgetRecTitle: "واصل الاستماع",
    authorDossierBtn: "عرض ملف الفيلسوف كاملاً →",
    toastCopied: "تم نسخ الرابط بنجاح! 🌿",
    toastQuoteCopied: "تم نسخ الاقتباس بنجاح! 🌿",
    toastFavAdded: "تمت إضافة الكتاب إلى المفضلة! ♡",
    toastFavRemoved: "تمت إزالة الكتاب من المفضلة.",
    sleepTimerSet: "تم ضبط مؤقت النوم : ",
    sleepTimerOff: "تم إيقاف مؤقت النوم",
    sleepTimerEndOfChap: "عند نهاية الفصل",
    chapterPrefix: "الفصل",
    minutesLabel: "دقيقة",
    completedBadge: "مكتمل",
    remainingLabel: "متبقي",
    // Reviews & Ratings
    reviewsBadgeLabel: "آراء المستمعين",
    reviewsSectionHeading: "آراء المستمعين",
    reviewsSectionSubtitle: "شارك تجربتك وساعدنا على تطوير مكتبة حكمـة ونور الصوتية",
    reviewsStatusUnrated: "لم يقيّم هذا العمل بعد",
    reviewsCountFormat: "{n} تقييمًا",
    basedOnRatings: "بناءً على {n} تقييمًا",
    emptyStateTitle: "كن أول من يشارك رأيه",
    emptyStateDesc: "تجربتك قد تساعد مستمعًا آخر على اكتشاف هذا العمل.",
    emptyStateAction: "ابدأ بتقييم هذا العمل",
    ratingLegend: "تقييمك للعمل :",
    starRatingLevels: {
      1: "ضعيف",
      2: "مقبول",
      3: "جيد",
      4: "ممتاز",
      5: "استثنائي"
    },
    starAria: "{n} نجوم من 5",
    yourRatingIs: "تقييمك : {n}/5",
    thankYouRating: "شكرًا لك على تقييمك! 🌿",
    formTitleText: "شاركنا تجربتك مع هذا العمل الصوتي",
    labelAuthorName: "الاسم",
    labelAuthorEmail: "البريد الإلكتروني",
    optionalTag: "(اختياري)",
    labelCommentText: "رأيك",
    placeholderAuthorName: "اسمك أو لقبك",
    placeholderEmail: "لن يتم نشر بريدك الإلكتروني",
    placeholderComment: "شاركنا تجربتك مع هذا العمل الصوتي...",
    submitReviewBtnText: "نشر التقييم",
    btnSubmitting: "جاري النشر...",
    formSuccessMsg: "شكرًا لك، تم إرسال تقييمك بنجاح. 🌿",
    formErrorName: "يرجى كتابة اسمك.",
    formErrorText: "يرجى كتابة نص التعليق.",
    charCounterText: "{current} / {max}",
    sortLabel: "الترتيب :",
    sortRecent: "الأحدث",
    sortTopRated: "الأعلى تقييماً",
    sortOldest: "الأقدم",
    filterAll: "الكل",
    helpfulBtnText: "مفيد",
    replyBtnText: "رد 💬",
    replyPlaceholder: "اكتب ردك هنا...",
    submitReplyBtn: "إرسال الرد",
    cancelReplyBtn: "إلغاء",
    loadMoreReviews: "عرض المزيد من الآراء",
    noFilteredReviews: "لا توجد آراء مطابقة لهذا الفلتر.",
    dateToday: "اليوم",
    dateYesterday: "بالأمس",
    dateDaysAgoTwo: "منذ يومين",
    dateDaysAgo: "منذ {n} أيام"
  },
  fr: {
    seoTitle: "Bibliothèque Audio de la Sagesse | Hikma & Nour",
    seoDesc: "Écoutez des chefs-d'œuvre littéraires, philosophiques et psychologiques racontés en langue arabe dans la Bibliothèque Audio de Hikma & Nour.",
    heroBadge: "BIBLIOTHÈQUE AUDIO DE LA SAGESSE",
    heroTitle: "La Bibliothèque Audio",
    heroSubtitle: "« Écoutez. Réfléchissez. Transformez votre regard sur la vie. »",
    heroDesc: "7 chefs-d'œuvre de la littérature et de la philosophie universelle narrés en langue arabe.",
    audioLangNotice: "Audio disponible en arabe classique",
    searchPlaceholder: "Rechercher un livre, un auteur, une idée...",
    catAll: "Tous les audios",
    catPhilosophy: "Philosophie & Pensée",
    catPsychology: "Psychologie & Âme",
    catClassics: "Grands Classiques",
    catSelfDev: "Développement & Sagesse",
    catFavorites: "Favoris",
    catInProgress: "En cours",
    catCompleted: "Terminés",
    featuredTag: "À LA UNE",
    featuredLabel: "Œuvre Recommandée",
    continueListeningTitle: "Continuer l'écoute",
    allAudiobooksTitle: "Toute la bibliothèque",
    audioBooksAvailableLabel: "œuvres audio disponibles",
    listenBtn: "Écouter",
    listenNowBtn: "Commencer l'écoute",
    resumeAtBtn: "Reprendre à",
    audioInArabicTag: "🎙️ Audio en arabe",
    audioAvailableInArabic: "🎙️ Audio disponible en arabe",
    bHome: "Accueil",
    bAudio: "Audio",
    backToLibrary: "Retour à la bibliothèque",
    favAdd: "Ajouter aux favoris",
    favSaved: "Favori sauvegardé",
    share: "Partager",
    tabChapters: "Liste des chapitres",
    tabAbout: "À propos de l'œuvre",
    tabTakeaways: "Ce que vous allez retenir",
    tabQuotes: "Citations marquantes",
    tabAuthor: "À propos de l'auteur",
    widgetQuoteTitle: "Citation de l'œuvre",
    widgetCopyQuote: "Copier la citation",
    widgetRecTitle: "Continuez votre écoute",
    authorDossierBtn: "Découvrir le dossier du penseur →",
    toastCopied: "Lien copié dans le presse-papiers ! 🌿",
    toastQuoteCopied: "Citation copiée dans le presse-papiers ! 🌿",
    toastFavAdded: "Œuvre ajoutée à vos favoris ! ♡",
    toastFavRemoved: "Œuvre retirée des favoris.",
    sleepTimerSet: "Minuteur de veille réglé : ",
    sleepTimerOff: "Minuteur de veille désactivé",
    sleepTimerEndOfChap: "À la fin du chapitre",
    chapterPrefix: "Chapitre",
    minutesLabel: "min",
    completedBadge: "Terminé",
    remainingLabel: "restant",
    // Reviews & Ratings
    reviewsBadgeLabel: "Avis des auditeurs",
    reviewsSectionHeading: "Avis des auditeurs",
    reviewsSectionSubtitle: "Partagez votre expérience et aidez-nous à enrichir la bibliothèque audio Hikma & Nour",
    reviewsStatusUnrated: "Pas encore évalué",
    reviewsCountFormat: "{n} avis",
    basedOnRatings: "Basé sur {n} évaluations",
    emptyStateTitle: "Soyez le premier à donner votre avis",
    emptyStateDesc: "Votre retour peut aider d'autres auditeurs à découvrir cette œuvre.",
    emptyStateAction: "Commencez par évaluer cette œuvre",
    ratingLegend: "Évaluer cet audio :",
    starRatingLevels: {
      1: "Médiocre",
      2: "Passable",
      3: "Bon",
      4: "Très bien",
      5: "Exceptionnel"
    },
    starAria: "{n} étoiles sur 5",
    yourRatingIs: "Votre note : {n}/5",
    thankYouRating: "Merci pour votre évaluation ! 🌿",
    formTitleText: "Partagez votre avis sur cette œuvre audio",
    labelAuthorName: "Nom",
    labelAuthorEmail: "Email",
    optionalTag: "(facultatif)",
    labelCommentText: "Votre avis",
    placeholderAuthorName: "Votre nom ou pseudonyme",
    placeholderEmail: "Ne sera pas affiché publiquement",
    placeholderComment: "Partagez votre expérience avec cette œuvre audio...",
    submitReviewBtnText: "Publier mon avis",
    btnSubmitting: "Publication en cours...",
    formSuccessMsg: "Merci, votre avis a été envoyé avec succès. 🌿",
    formErrorName: "Veuillez renseigner votre nom.",
    formErrorText: "Veuillez écrire un commentaire.",
    charCounterText: "{current} / {max}",
    sortLabel: "Trier par :",
    sortRecent: "Les plus récents",
    sortTopRated: "Les mieux notés",
    sortOldest: "Les plus anciens",
    filterAll: "Tous",
    helpfulBtnText: "Utile",
    replyBtnText: "Répondre 💬",
    replyPlaceholder: "Écrire une réponse...",
    submitReplyBtn: "Envoyer la réponse",
    cancelReplyBtn: "Annuler",
    loadMoreReviews: "Voir plus d'avis",
    noFilteredReviews: "Aucun avis ne correspond à ce filtre.",
    dateToday: "Aujourd'hui",
    dateYesterday: "Hier",
    dateDaysAgoTwo: "Il y a 2 jours",
    dateDaysAgo: "Il y a {n} jours"
  },
  en: {
    seoTitle: "The Audio Library of Wisdom | Hikma & Nour",
    seoDesc: "Listen to great literary and philosophical masterpieces narrated in Arabic on the Hikma & Nour Audio Sanctuary.",
    heroBadge: "AUDIO LIBRARY OF WISDOM",
    heroTitle: "The Audio Library",
    heroSubtitle: "“Listen. Reflect. Transform the way you see life.”",
    heroDesc: "7 timeless literary and philosophical masterpieces narrated in Arabic.",
    audioLangNotice: "Audio available in Arabic",
    searchPlaceholder: "Search book, author, or theme...",
    catAll: "All Audios",
    catPhilosophy: "Philosophy & Mind",
    catPsychology: "Human Psychology",
    catClassics: "Great Classics",
    catSelfDev: "Wisdom & Growth",
    catFavorites: "Favorites",
    catInProgress: "In Progress",
    catCompleted: "Completed",
    featuredTag: "FEATURED",
    featuredLabel: "Recommended Audio",
    continueListeningTitle: "Continue Listening",
    allAudiobooksTitle: "All Audiobooks",
    audioBooksAvailableLabel: "audiobooks available",
    listenBtn: "Listen",
    listenNowBtn: "Start Listening",
    resumeAtBtn: "Resume at",
    audioInArabicTag: "🎙️ Audio in Arabic",
    audioAvailableInArabic: "🎙️ Audio available in Arabic",
    bHome: "Home",
    bAudio: "Audio",
    backToLibrary: "Back to Library",
    favAdd: "Add to favorites",
    favSaved: "Saved to favorites",
    share: "Share",
    tabChapters: "Chapter List",
    tabAbout: "About the Book",
    tabTakeaways: "Key Takeaways",
    tabQuotes: "Notable Quotes",
    tabAuthor: "About the Author",
    widgetQuoteTitle: "Quote of the Book",
    widgetCopyQuote: "Copy Quote",
    widgetRecTitle: "Continue Listening",
    authorDossierBtn: "Explore Thinker Dossier →",
    toastCopied: "Link copied to clipboard! 🌿",
    toastQuoteCopied: "Quote copied to clipboard! 🌿",
    toastFavAdded: "Book added to your favorites! ♡",
    toastFavRemoved: "Book removed from favorites.",
    sleepTimerSet: "Sleep timer set: ",
    sleepTimerOff: "Sleep timer turned off",
    sleepTimerEndOfChap: "At end of chapter",
    chapterPrefix: "Chapter",
    minutesLabel: "min",
    completedBadge: "Completed",
    remainingLabel: "left",
    // Reviews & Ratings
    reviewsBadgeLabel: "Listener reviews",
    reviewsSectionHeading: "Listener reviews",
    reviewsSectionSubtitle: "Share your experience and help us grow the Hikma & Nour audio library",
    reviewsStatusUnrated: "Not rated yet",
    reviewsCountFormat: "{n} reviews",
    basedOnRatings: "Based on {n} ratings",
    emptyStateTitle: "Be the first to review",
    emptyStateDesc: "Your review may help another listener discover this work.",
    emptyStateAction: "Start by rating this work",
    ratingLegend: "Rate this audio:",
    starRatingLevels: {
      1: "Poor",
      2: "Fair",
      3: "Good",
      4: "Great",
      5: "Exceptional"
    },
    starAria: "{n} stars out of 5",
    yourRatingIs: "Your rating: {n}/5",
    thankYouRating: "Thank you for your rating! 🌿",
    formTitleText: "Share your review on this audiobook",
    labelAuthorName: "Name",
    labelAuthorEmail: "Email",
    optionalTag: "(optional)",
    labelCommentText: "Your review",
    placeholderAuthorName: "Your name or nickname",
    placeholderEmail: "Will not be published",
    placeholderComment: "Share your experience with this audiobook...",
    submitReviewBtnText: "Publish review",
    btnSubmitting: "Posting...",
    formSuccessMsg: "Thank you, your review has been submitted successfully. 🌿",
    formErrorName: "Please enter your name.",
    formErrorText: "Please enter your comment.",
    charCounterText: "{current} / {max}",
    sortLabel: "Sort by:",
    sortRecent: "Most recent",
    sortTopRated: "Highest rated",
    sortOldest: "Oldest",
    filterAll: "All",
    helpfulBtnText: "Helpful",
    replyBtnText: "Reply 💬",
    replyPlaceholder: "Write a reply...",
    submitReplyBtn: "Post reply",
    cancelReplyBtn: "Cancel",
    loadMoreReviews: "View more reviews",
    noFilteredReviews: "No reviews match this filter.",
    dateToday: "Today",
    dateYesterday: "Yesterday",
    dateDaysAgoTwo: "2 days ago",
    dateDaysAgo: "{n} days ago"
  }
};

// ==========================================================================

// CANONICAL AUDIO DATABASE (ALL 7 WORKS WITH REAL MP3 FILES)
// ==========================================================================
const AUDIO_BOOKS_DATA = {
  milena: {
    key: 'milena',
    category: 'psychology',
    cover: './audio_milena_cover.jpg',
    totalDuration: '10 min',
    thinkerId: null,
    title: {
      ar: 'رسائل إلى ميلينا',
      fr: 'Lettres à Milena',
      en: 'Letters to Milena'
    },
    author: {
      ar: 'فرانز كافكا',
      fr: 'Franz Kafka',
      en: 'Franz Kafka'
    },
    categoryName: {
      ar: 'علم النفس ورسائل',
      fr: 'Psychologie & Correspondance',
      en: 'Psychology & Letters'
    },
    shortDesc: {
      ar: 'رسائل الشغف والخوف والهشاشة الإنسانية؛ بوح كافكا الصادق والمعذب إلى الصحفية ميلينا ييسينسكا.',
      fr: "L'une des correspondances amoureuses et psychologiques les plus profondes et poignantes du XXe siècle.",
      en: "Franz Kafka’s raw, passionate and agonizing letters to journalist Milena Jesenska."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">💌 وثيقة الشغف والوجع الإنساني</h3>
<p style="margin-bottom:14px;">واحدة من أعمق رسائل الحب والحيرة في الأدب الإنساني؛ يكتب كافكا بصدق عارٍ إلى الصحفية والمترجمة التشيكية <strong>ميلينا ييسينسكا</strong> بين عامي 1920 و1923.</p>
<p style="margin-bottom:14px;">تكشف الرسائل عن الصراع النفسي لكافكا بين الرغبة العارمة في القرب والخوف الفطري من الالتزام والمواجهة، لتظل مرآة فريدة للنفس المعذبة في بحثها عن النور والسكينة.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">💌 Une Correspondance Passionnée & Douloureuse</h3>
<p style="margin-bottom:14px;">Écrites entre 1920 et 1923, les <strong>Lettres à Milena</strong> représentent l'une des confidences amoureuses les plus intenses de la littérature mondiale.</p>
<p style="margin-bottom:14px;">Kafka s'y livre à nu devant Milena Jesenská, tiraillé entre une aspiration brûlante à l'amour véritable et une terreur panique de la présence physique et du jugement d'autrui.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">💌 An Intimate & Agonizing Confession</h3>
<p style="margin-bottom:14px;">Written between 1920 and 1923 to translator Milena Jesenská, these letters provide an extraordinary window into Kafka’s vulnerable soul.</p>
<p style="margin-bottom:14px;">They explore the painful tension between the desperate yearning for deep emotional intimacy and the paralyzing anxiety of physical connection.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>الحب كمواجهة للذات :</strong> الحب الصادق يكشف عيوبنا وهشاشتنا ومخاوفنا العميقة دون أقنعة.</li>
<li><strong>قوة الكلمة المكتوبة :</strong> الكتابة كمرآة لتجريد النفس والتعبير عن الألم الدفين والتعلق الروحي.</li>
<li><strong>التعايش مع الهشاشة :</strong> الإقرار بالضعف الإنساني كأولى خطوات الصدق والسلام مع النفس.</li>
</ul>`,
      fr: `<ul>
<li><strong>L'Amour comme Miroir de l'Âme :</strong> Aimer sincèrement implique d'exposer sa vulnérabilité absolue.</li>
<li><strong>La Puissance de l'Écrit :</strong> L'écriture comme ultime refuge pour sonder l'inconscient et la souffrance.</li>
<li><strong>La Lucidité Psychologique :</strong> Reconnaître ses propres contradictions pour cesser de se mentir.</li>
</ul>`,
      en: `<ul>
<li><strong>Love as a Mirror:</strong> True emotional depth requires total vulnerability and exposure of inner shadows.</li>
<li><strong>The Power of the Written Word:</strong> Writing as a sacred refuge for articulating human fragility.</li>
<li><strong>Psychological Honesty:</strong> Embracing one's internal contradictions without social facade.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«الحب هو أن تكون السكين التي أفتش بها في داخلي.»</div>
<div class="quote-box">«أنتِ لستِ امرأة، أنتِ فتاة، لم أرَ قط مثلك، لم أجرؤ على أن أحلم بمثلك.»</div>
<div class="quote-box">«الكتابة هي تجريد للنفس أمام الشياطين.»</div>`,
      fr: `<div class="quote-box">« Aimer, c'est être le couteau avec lequel je fouille en moi-même. »</div>
<div class="quote-box">« Vous n’êtes pas une femme, vous êtes une jeune fille ; je n’en ai jamais vu de semblable. »</div>
<div class="quote-box">« Écrire, c'est se mettre à nu devant les démons. »</div>`,
      en: `<div class="quote-box">“Love is that you are the knife which I plunge into myself.”</div>
<div class="quote-box">“I have never seen anyone like you, I never dared dream of anyone like you.”</div>
<div class="quote-box">“Writing means revealing oneself to the ghosts.”</div>`
    },
    authorBio: {
      ar: `<p><strong>فرانز كافكا</strong> (1883 - 1924)؛ كاتب تشيكي بارز وأحد أعظم أعلام الأدب والفلسفة في القرن العشرين. تميزت أعماله برصد عوالم الاغتراب والقلق والبيروقراطية المظلمة وصراع الفرد مع سلطة غامضة.</p>`,
      fr: `<p><strong>Franz Kafka</strong> (1883 - 1924) est l'un des écrivains majeurs du XXe siècle. Son œuvre explore les thèmes de l'absurdité existentielle, de l'aliénation moderne, de la culpabilité inconsciente et de la quête de transcendance.</p>`,
      en: `<p><strong>Franz Kafka</strong> (1883 - 1924) was one of the most influential writers of modern literature, renowned for depicting existential alienation, bureaucratic oppression, and psychological depths.</p>`
    },
    quote: {
      ar: '«الحب هو أن تكون السكين التي أفتش بها في داخلي.» — فرانز كافكا',
      fr: '« Aimer, c\'est être le couteau avec lequel je fouille en moi-même. » — Franz Kafka',
      en: '“Love is that you are the knife which I plunge into myself.” — Franz Kafka'
    },
    chapters: [
      { num: 1, name: { ar: "الفصل 1", fr: "Chapitre 1", en: "Chapter 1" }, desc: { ar: "بداية المراسلة بين براغ وفيينا", fr: "Les premières lettres entre Prague et Vienne", en: "First Letters from Prague" }, duration: "02:38", src: "kafka_milena_chapitre1.mp3" },
      { num: 2, name: { ar: "الفصل 2", fr: "Chapitre 2", en: "Chapter 2" }, desc: { ar: "الشغف المشتعل والحب المستحيل", fr: "La passion ardente et l'impossible", en: "The Ardent Passion" }, duration: "02:17", src: "kafka_milena_chapitre2.mp3" },
      { num: 3, name: { ar: "الفصل 3", fr: "Chapitre 3", en: "Chapter 3" }, desc: { ar: "الخوف الكافكاوي وقسوة المرض", fr: "La peur kafkaienne et la maladie", en: "Fear & Fragility" }, duration: "02:17", src: "kafka_milena_chapitre3.mp3" },
      { num: 4, name: { ar: "الفصل 4", fr: "Chapitre 4", en: "Chapter 4" }, desc: { ar: "الوداع الأخير والسلام التراجيدي", fr: "Les adieux et le silence tragique", en: "The Final Farewell" }, duration: "02:33", src: "kafka_milena_chapitre4.mp3" }
    ]
  },

  alchemist: {
    key: 'alchemist',
    category: 'selfdev',
    cover: '../audio_alchemist_cover.jpg',
    totalDuration: '13 min',
    thinkerId: null,
    title: {
      ar: 'الخيميائي',
      fr: "L'Alchimiste",
      en: 'The Alchemist'
    },
    author: {
      ar: 'باولو كويلو',
      fr: 'Paulo Coelho',
      en: 'Paulo Coelho'
    },
    categoryName: {
      ar: 'تنمية وحكمة',
      fr: 'Développement & Sagesse',
      en: 'Wisdom & Growth'
    },
    shortDesc: {
      ar: 'رحلة الشاب الأندلسي سنتياغو في البحث عن كنزه الشخصي، ليكتشف لغة الكون وقوة الإنصات للقلب.',
      fr: "Le voyage initiatique du jeune berger Santiago à la recherche de sa Légende Personnelle et du langage secret du monde.",
      en: "The inspiring journey of Santiago, an Andalusian shepherd boy who seeks his Personal Legend."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">🌟 رحلة البحث عن الأسطورة الشخصية</h3>
<p style="margin-bottom:14px;">تدور أحداث الرواية حول <strong>سنتياغو</strong>، راعي غنم أندلسي، يتكرر لديه حلم برؤية كنز عند أهرامات مصر. يلتقي بالملك الحكيم <em>ملكي صادق</em> الذي يدعوه لتحقيق «أسطورته الشخصية» وقراءة إشارات الكون.</p>
<p style="margin-bottom:14px;">يسافر سنتياغو إلى طنجة ويقطع الصحراء الكبرى، متعلماً من تجربة العمل ولقاء فتاة الصحراء <em>فاطمة</em> والخيميائي الحكيم، ليكتشف أن الكنز الحقيقي هو التحول الروحي.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">🌟 Résumé & Quête Initiatique</h3>
<p style="margin-bottom:14px;"><strong>L'Alchimiste</strong> raconte la quête de Santiago, jeune berger qui part vers les pyramides d'Égypte guidé par un rêve récurrent.</p>
<p style="margin-bottom:14px;">À travers le désert, sa rencontre avec Fatima et l'enseignement de l'Alchimiste, Santiago apprend que le trésor véritable est la transmutation de soi.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">🌟 Summary & Core Alchemy</h3>
<p style="margin-bottom:14px;"><strong>The Alchemist</strong> follows Santiago as he travels across North Africa in pursuit of a hidden treasure, discovering spiritual alchemy along the way.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>اتباع الأسطورة الشخصية :</strong> السعي وراء ما خُلقت لأجله هو الواجب الحقيقي في الحياة.</li>
<li><strong>قراءة إشارات الكون :</strong> الحياة ترشدك باستمرار إذا كنت منتبهاً ومتواضعاً.</li>
<li><strong>قيمة الرحلة :</strong> النضج والخبرة المكتسبة أهم بكثير من الوصول إلى الغاية المادية.</li>
</ul>`,
      fr: `<ul>
<li><strong>Accomplir sa Légende Personnelle :</strong> Trouver sa véritable vocation et oser la poursuivre.</li>
<li><strong>Écouter les Signes :</strong> L'Univers communique avec ceux qui restent attentifs et réceptifs.</li>
<li><strong>La Valeur du Chemin :</strong> La transformation intérieure vécue dépasse le but matériel.</li>
</ul>`,
      en: `<ul>
<li><strong>Pursuing Your Personal Legend:</strong> Dedicating oneself courageously to one's true calling.</li>
<li><strong>Reading the Omens:</strong> Staying receptive to the signs and guidance of life.</li>
<li><strong>The Journey Transforms You:</strong> Internal spiritual growth matters most.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«عندما تريد شيئاً بشدة، فإن كل الكون يتآمر لمساعدتك على تحقيقه.»</div>
<div class="quote-box">«الخوف من المعاناة أسوأ من المعاناة نفسها.»</div>`,
      fr: `<div class="quote-box">« Quand on veut une chose, tout l’Univers conspire à nous permettre de réaliser notre rêve. »</div>
<div class="quote-box">« La peur de souffrir est pire que la souffrance elle-même. »</div>`,
      en: `<div class="quote-box">“When you want something, all the universe conspires in helping you to achieve it.”</div>
<div class="quote-box">“The fear of suffering is worse than the suffering itself.”</div>`
    },
    authorBio: {
      ar: `<p><strong>باولو كويلو</strong> (مواليد 1947)؛ روائي برازيلي ذائع الصيت عالمياً، تُرجمت رواياته إلى أكثر من 80 لغة وحققت مبيعات قياسية حول العالم لما تحمله من روحانية وحكمة ملهمة.</p>`,
      fr: `<p><strong>Paulo Coelho</strong> (né en 1947) est un romancier brésilien mondialement célébré. Ses écrits allégoriques et spirituels ont inspiré des millions de lecteurs à travers le globe.</p>`,
      en: `<p><strong>Paulo Coelho</strong> (born 1947) is a Brazilian author internationally renowned for his inspiring philosophical and allegorical novels.</p>`
    },
    quote: {
      ar: '«عندما تريد شيئاً بشدة، فإن كل الكون يتآمر لمساعدتك على تحقيقه.» — باولو كويلو',
      fr: '« Quand on veut une chose, tout l’Univers conspire à nous permettre de réaliser notre rêve. » — Paulo Coelho',
      en: '“When you want something, all the universe conspires in helping you to achieve it.” — Paulo Coelho'
    },
    chapters: [
      { num: 1, name: { ar: "الفصل 1", fr: "Chapitre 1", en: "Chapter 1" }, desc: { ar: "سنتياغو والحلم بالكنز", fr: "Le berger et le rêve des pyramides", en: "Santiago & the Dream" }, duration: "02:32", src: "alchimiste_chapitre1.mp3" },
      { num: 2, name: { ar: "الفصل 2", fr: "Chapitre 2", en: "Chapter 2" }, desc: { ar: "لقاء الملك الحكيم والأسطورة الشخصية", fr: "La rencontre du roi sage et les signes", en: "Meeting the King of Salem" }, duration: "02:50", src: "alchimiste_chapitre2.mp3" },
      { num: 3, name: { ar: "الفصل 3", fr: "Chapitre 3", en: "Chapter 3" }, desc: { ar: "الرحيل إلى طنجة وتجارة الزجاج", fr: "L'épreuve de Tanger et la cristallerie", en: "Tangier & the Crystal Shop" }, duration: "02:12", src: "alchimiste_chapitre3.mp3" },
      { num: 4, name: { ar: "الفصل 4", fr: "Chapitre 4", en: "Chapter 4" }, desc: { ar: "القافلة في الصحراء ولقاء الخيميائي", fr: "La traversée du désert et l'amour", en: "The Desert Caravan" }, duration: "02:25", src: "alchimiste_chapitre4.mp3" },
      { num: 5, name: { ar: "الفصل 5", fr: "Chapitre 5", en: "Chapter 5" }, desc: { ar: "الوصول إلى الأهرامات والكنز الحقيقي", fr: "Les Pyramides et la révélation du trésor", en: "The Pyramids & Truth" }, duration: "03:10", src: "alchimiste_chapitre5.mp3" }
    ]
  },

  crime_punishment: {
    key: 'crime_punishment',
    category: 'psychology',
    cover: '../audio_crime_punishment_cover.jpg',
    totalDuration: '4h 15m',
    thinkerId: null,
    title: {
      ar: 'الجريمة والعقاب',
      fr: 'Crime et Châtiment',
      en: 'Crime and Punishment'
    },
    author: {
      ar: 'فيودور دوستويفسكي',
      fr: 'Fiodor Dostoïevski',
      en: 'Fyodor Dostoevsky'
    },
    categoryName: {
      ar: 'علم النفس وكلاسيكيات',
      fr: 'Psychologie & Grands Classiques',
      en: 'Psychology & Classics'
    },
    shortDesc: {
      ar: 'الصراع النفسي العنيف للشاب راسكولنيكوف وعذاب الضمير والبحث عن الفداء والكرامة الإنسانية.',
      fr: "Le tourment psychologique déchirant de Raskolnikov, le poids de la culpabilité et la quête de rédemption.",
      en: "The profound psychological turmoil of Raskolnikov, exploring guilt, conscience, and moral redemption."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">⚡ دراسة ملحمية في أعماق الضمير</h3>
<p style="margin-bottom:14px;"><strong>رودي راسكولنيكوف</strong>، طالب جامعي فقير في سانت بطرسبرغ، يرتكب جريمة قتل مبرراً فعلته بنظرية استعلائية، ليجد نفسه مسجوناً في جحيم نفسي لا يهدأ.</p>
<p style="margin-bottom:14px;">يخوض صراعاً مع المحقق بورفيري، ويجد طريق الفداء عبر المحبة الصادقة للفتاة سونيا.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">⚡ Exploration des Gouffres de la Conscience</h3>
<p style="margin-bottom:14px;">Raskolnikov expérimente sa théorie des êtres supérieurs par le meurtre d'une usurière, avant de sombrer dans un abîme de fièvre morale et d'angoisse.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">⚡ Epic Examination of Guilt & Grace</h3>
<p style="margin-bottom:14px;">Dostoevsky’s monument explores pride, psychological unraveling, and the painful path toward spiritual redemption in Siberia.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>سلطة الضمير الأخلاقي :</strong> لا يمكن للعقل تبرير الجريمة أو إسكات وخز الضمير الإنساني.</li>
<li><strong>خطر الأفكار الاستعلائية :</strong> الغرور الفكري يؤدي بالضرورة إلى الهلاك النفسي.</li>
<li><strong>قوة الفداء والمحبة :</strong> الاعتراف بالخطأ وتحمل المسؤولية هما باب الخلاص الحقيقي.</li>
</ul>`,
      fr: `<ul>
<li><strong>La Voix Inaliénable de la Conscience :</strong> La raison ne peut jamais étouffer la morale humaine.</li>
<li><strong>L'Illusion de la Supériorité :</strong> Se croire affranchi des lois universelles détruit l'âme.</li>
<li><strong>La Rédemption par la Vérité :</strong> L'acceptation sincère de sa faute restaure la paix.</li>
</ul>`,
      en: `<ul>
<li><strong>Sovereignty of Conscience:</strong> Rationalization cannot silence inner moral truth.</li>
<li><strong>The Danger of Superiority:</strong> Placing oneself above common humanity causes ruin.</li>
<li><strong>Redemption Through Truth:</strong> Taking responsibility restores genuine peace.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«الألم والمعاناة ضروريان دائماً للوعي الكبير والقلب الرفيع.»</div>
<div class="quote-box">«لا يوجد شيء أصعب من الصدق، ولا شيء أسهل من الخداع.»</div>`,
      fr: `<div class="quote-box">« La douleur et la souffrance sont toujours inévitables pour une grande intelligence et un cœur profond. »</div>
<div class="quote-box">« Rien n'est plus difficile au monde que de dire la vérité. »</div>`,
      en: `<div class="quote-box">“Pain and suffering are always inevitable for a large intelligence and a deep heart.”</div>
<div class="quote-box">“Nothing in this world is harder than speaking the truth.”</div>`
    },
    authorBio: {
      ar: `<p><strong>فيودور دوستويفسكي</strong> (1821 - 1881)؛ عملاق الأدب الروسي والعالمي، غاص في أعماق النفس البشرية وتناقضاتها الدينية والفلسفية والوجودية.</p>`,
      fr: `<p><strong>Fiodor Dostoïevski</strong> (1821 - 1881) est l'un des plus illustres romanciers russes, célèbre pour son analyse magistrale de la psychologie humaine et des tourments spirituels.</p>`,
      en: `<p><strong>Fyodor Dostoevsky</strong> (1821 - 1881) was a Russian titan whose works profoundly shaped psychology, existentialism, and global literature.</p>`
    },
    quote: {
      ar: '«الألم والمعاناة ضروريان دائماً للوعي الكبير والقلب الرفيع.» — فيودور دوستويفسكي',
      fr: '« La douleur et la souffrance sont toujours inévitables pour une grande intelligence et un cœur profond. » — Fiodor Dostoïevski',
      en: '“Pain and suffering are always inevitable for a large intelligence and a deep heart.” — Fyodor Dostoevsky'
    },
    chapters: [
      { num: 1, name: { ar: "الفصل 1", fr: "Chapitre 1", en: "Chapter 1" }, desc: { ar: "الشقة الضيقة والفكرة الأولى", fr: "La misère et l'idée du crime", en: "The Idea of Crime" }, duration: "02:14", src: "crime_et_chatiment_chapitre1.mp3" },
      { num: 2, name: { ar: "الفصل 2", fr: "Chapitre 2", en: "Chapter 2" }, desc: { ar: "اللقاء مع مارميلادوف في الحانة", fr: "La rencontre avec Marméladov", en: "Marmeladov in the Tavern" }, duration: "01:59", src: "crime_et_chatiment_chapitre2.mp3" },
      { num: 3, name: { ar: "الفصل 3", fr: "Chapitre 3", en: "Chapter 3" }, desc: { ar: "رسالة الأم والصراع العائلي", fr: "La lettre maternelle et le dilemme", en: "Mother's Letter" }, duration: "02:13", src: "crime_et_chatiment_chapitre3.mp3" },
      { num: 4, name: { ar: "الفصل 4", fr: "Chapitre 4", en: "Chapter 4" }, desc: { ar: "الحلم المروع والاستيقاظ", fr: "Le cauchemar et la décision", en: "The Feverish Dream" }, duration: "02:10", src: "crime_et_chatiment_chapitre4.mp3" },
      { num: 5, name: { ar: "الفصل 5", fr: "Chapitre 5", en: "Chapter 5" }, desc: { ar: "لحظة ارتكاب الجريمة", fr: "L'acte fatal et le choc", en: "The Execution of the Act" }, duration: "02:01", src: "crime_et_chatiment_chapitre5.mp3" },
      { num: 6, name: { ar: "الفصل 6", fr: "Chapitre 6", en: "Chapter 6" }, desc: { ar: "الفرار والذعر الأول", fr: "La fuite et l'angoisse", en: "The Aftermath & Panic" }, duration: "00:57", src: "crime_partie1_chapitre6.mp3" },
      { num: 7, name: { ar: "الفصل 7", fr: "Chapitre 7", en: "Chapter 7" }, desc: { ar: "الإغماء في مركز الشرطة", fr: "L'interrogatoire initial", en: "Police Station Faint" }, duration: "00:57", src: "crime_partie1_chapitre7.mp3" },
      { num: 8, name: { ar: "الفصل 8", fr: "Chapitre 8", en: "Chapter 8" }, desc: { ar: "الحمى ورعاية الصديق رازوميخين", fr: "La fièvre et l'amitié fidèle", en: "Razumikhin's Loyalty" }, duration: "00:49", src: "crime_partie2_chapitre1.mp3" },
      { num: 9, name: { ar: "الفصل 9", fr: "Chapitre 9", en: "Chapter 9" }, desc: { ar: "المواجهة مع المحقق بورفيري", fr: "Le duel psychologique avec Porphyre", en: "Porfiry's Psychology" }, duration: "00:46", src: "crime_partie3_chapitre5.mp3" },
      { num: 10, name: { ar: "الفصل 10", fr: "Chapitre 10", en: "Chapter 10" }, desc: { ar: "الاعتراف لسونيا وقصة لعازر", fr: "L'aveu à Sonia et la résurrection", en: "Confession to Sonia" }, duration: "00:44", src: "crime_partie5_chapitre4.mp3" },
      { num: 11, name: { ar: "الفصل 11", fr: "Chapitre 11", en: "Chapter 11" }, desc: { ar: "الاعتراف الرسمي وبداية الفداء", fr: "La rédemption en Sibérie", en: "Redemption in Siberia" }, duration: "00:42", src: "crime_partie6_chapitre8.mp3" }
    ]
  },

  etranger: {
    key: 'etranger',
    category: 'philosophy',
    cover: './audio_etranger_cover.jpg',
    totalDuration: '16 min',
    thinkerId: 'camus',
    title: {
      ar: 'الغريب',
      fr: "L'Étranger",
      en: 'The Stranger'
    },
    author: {
      ar: 'ألبير كامو',
      fr: 'Albert Camus',
      en: 'Albert Camus'
    },
    categoryName: {
      ar: 'فلسفة وجودية',
      fr: 'Philosophie & Existentialisme',
      en: 'Philosophy & Existentialism'
    },
    shortDesc: {
      ar: 'رواية العبثية واللامبالاة الكونية؛ قصة ميرسو ورفضه لتزييف المشاعر أمام المجتمع والموت.',
      fr: "Le chef-d'œuvre de l'absurde d'Albert Camus : Meursault et son refus absolu de mentir sur ses sentiments.",
      en: "Albert Camus’s masterpiece of the Absurd: Meursault’s uncompromising honesty."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">☀️ فلسفة العبث ورفض التزييف الاجتماعي</h3>
<p style="margin-bottom:14px;">يفتتح كامو رائعته بجملته الشهيرة: <em>«اليوم ماتت أمي، أو ربما الأمس، لست أدري»</em>. ميرسو شخص يرفض التظاهر بمشاعر لم يشعر بها، مما يجعل المجتمع يعتبره خطراً وغريباً.</p>
<p style="margin-bottom:14px;">يصل ميرسو في زنزانته الأخيرة إلى سكينة روحية بقبوله اللامبالاة الهادئة للكون.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">☀️ L'Homme Absurde et la Clarté</h3>
<p style="margin-bottom:14px;">À travers Meursault, Albert Camus dépeint l'homme lucide qui refuse de jouer la comédie des conventions sociales et du faux deuil.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">☀️ The Absurd & Radical Authenticity</h3>
<p style="margin-bottom:14px;">Meursault lives strictly in sensory truth, facing societal judgment and embracing the tender indifference of existence.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>الصدق الصارم مع الذات :</strong> رفض التظاهر بعواطف زائفة لإرضاء الآخرين.</li>
<li><strong>السكينة أمام العبث :</strong> مواجهة حقائق الحياة بعيون مفتوحة وبدون أوهام مريحة.</li>
<li><strong>العيش في الحاضر :</strong> تذوق اللحظة المباشرة بوعي وامتنان.</li>
</ul>`,
      fr: `<ul>
<li><strong>L'Authenticité Radicale :</strong> Refuser le mensonge social et l'hypocrisie émotionnelle.</li>
<li><strong>La Paix de la Lucidité :</strong> Regarder la réalité sans fard ni illusions consolatrices.</li>
<li><strong>La Densité du Présent :</strong> Trouver son ancrage dans l'expérience vécue de l'instant.</li>
</ul>`,
      en: `<ul>
<li><strong>Radical Honesty:</strong> Refusing to perform emotions merely for social approval.</li>
<li><strong>Lucidity Over Illusion:</strong> Facing life's absurdity with clear-eyed courage.</li>
<li><strong>Living in the Present:</strong> Anchoring oneself in the direct reality of each moment.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«أدركت أنني عشت سعيداً، وأنني ما زلت سعيداً حتى الآن.»</div>
<div class="quote-box">«في قلب الشتاء، تعلمت أخيراً أن بداخلي صيفاً لا يقهر.»</div>`,
      fr: `<div class="quote-box">« J’ai senti que j’avais été heureux, et que je l’étais encore. »</div>
<div class="quote-box">« Au milieu de l'hiver, j'ai découvert en moi un invincible été. »</div>`,
      en: `<div class="quote-box">“I opened myself to the gentle indifference of the world.”</div>
<div class="quote-box">“In the midst of winter, I found there was, within me, an invincible summer.”</div>`
    },
    authorBio: {
      ar: `<p><strong>ألبير كامو</strong> (1913 - 1960)؛ فيلسوف وروائي فرنسي جزائري، نال جائزة نوبل في الأدب عام 1957. يُعد رائد فلسفة العبث والتمرد النبيل من أجل العدالة الإنسانية.</p>`,
      fr: `<p><strong>Albert Camus</strong> (1913 - 1960) est un philosophe et écrivain majeur, lauréat du prix Nobel de littérature en 1957, célèbre pour sa réflexion sur l'absurde et la révolte éthique.</p>`,
      en: `<p><strong>Albert Camus</strong> (1913 - 1960) was a French-Algerian philosopher and Nobel laureate renowned for his exploration of the Absurd and humanistic rebellion.</p>`
    },
    quote: {
      ar: '«أدركت أنني عشت سعيداً، وأنني ما زلت سعيداً حتى الآن.» — ألبير كامو',
      fr: '« J’ai senti que j’avais été heureux, et que je l’étais encore. » — Albert Camus',
      en: '“I opened myself to the gentle indifference of the world.” — Albert Camus'
    },
    chapters: [
      { num: 1, name: { ar: "فصل 1", fr: "Ch. 1", en: "Ch. 1" }, desc: { ar: "وفاة الأم والجنازة في دار العجزة", fr: "La mort de la mère et la veillée", en: "Mother's Funeral" }, duration: "01:39", src: "letranger_p1_ch1.mp3" },
      { num: 2, name: { ar: "فصل 2", fr: "Ch. 2", en: "Ch. 2" }, desc: { ar: "اللقاء مع ماري والسباحة في البحر", fr: "La rencontre avec Marie", en: "Marie & the Sea" }, duration: "01:26", src: "letranger_p1_ch2.mp3" },
      { num: 3, name: { ar: "فصل 3", fr: "Ch. 3", en: "Ch. 3" }, desc: { ar: "الجيران وريمون سينتيس", fr: "Le voisin Raymond Sintès", en: "Raymond & Neighbors" }, duration: "01:24", src: "letranger_p1_ch3.mp3" },
      { num: 4, name: { ar: "فصل 4", fr: "Ch. 4", en: "Ch. 4" }, desc: { ar: "يوم الأحد على الشاطئ", fr: "Le dimanche sur la plage", en: "Sunday at the Beach" }, duration: "01:26", src: "letranger_p1_ch4.mp3" },
      { num: 5, name: { ar: "فصل 5", fr: "Ch. 5", en: "Ch. 5" }, desc: { ar: "عرض العمل ورغبة ماري بالزواج", fr: "La proposition de mariage", en: "Marriage Proposal" }, duration: "01:22", src: "letranger_p1_ch5.mp3" },
      { num: 6, name: { ar: "فصل 6", fr: "Ch. 6", en: "Ch. 6" }, desc: { ar: "حرارة الشمس والجريمة المدوية", fr: "Le soleil aveuglant et le drame", en: "The Fatal Sun" }, duration: "01:33", src: "letranger_p1_ch6.mp3" },
      { num: 7, name: { ar: "فصل 7", fr: "Ch. 7", en: "Ch. 7" }, desc: { ar: "التحقيق الأول وقاضي التحقيق", fr: "Le magistrat instructeur", en: "First Interrogation" }, duration: "01:17", src: "letranger_p2_ch1.mp3" },
      { num: 8, name: { ar: "فصل 8", fr: "Ch. 8", en: "Ch. 8" }, desc: { ar: "السجن وزيارة ماري الوحيدة", fr: "La vie en prison", en: "Prison Life & Marie" }, duration: "01:14", src: "letranger_p2_ch2.mp3" },
      { num: 9, name: { ar: "فصل 9", fr: "Ch. 9", en: "Ch. 9" }, desc: { ar: "جلسات المحاكمة وشهادات الشهود", fr: "Le procès et les témoins", en: "The Trial" }, duration: "01:14", src: "letranger_p2_ch3.mp3" },
      { num: 10, name: { ar: "فصل 10", fr: "Ch. 10", en: "Ch. 10" }, desc: { ar: "مرافعة المدعي العام وحكم الإعدام", fr: "Le réquisitoire et la sentence", en: "The Sentence" }, duration: "01:12", src: "letranger_p2_ch4.mp3" },
      { num: 11, name: { ar: "فصل 11", fr: "Ch. 11", en: "Ch. 11" }, desc: { ar: "المواجهة مع القسيس والسكينة الأخيرة", fr: "L'aumônier et la tendre indifférence", en: "Final Peace" }, duration: "01:19", src: "letranger_p2_ch5.mp3" }
    ]
  },

  petit_prince: {
    key: 'petit_prince',
    category: 'selfdev',
    cover: './audio_petit_prince_cover.jpg',
    totalDuration: '12 min',
    thinkerId: null,
    title: {
      ar: 'الأمير الصغير',
      fr: 'Le Petit Prince',
      en: 'The Little Prince'
    },
    author: {
      ar: 'أنطوان دي سانت إكزوبيري',
      fr: 'Antoine de Saint-Exupéry',
      en: 'Antoine de Saint-Exupery'
    },
    categoryName: {
      ar: 'حكمة إنسانية وشعرية',
      fr: 'Sagesse & Poésie',
      en: 'Wisdom & Poetry'
    },
    shortDesc: {
      ar: 'رواية الرقة والبراءة؛ لقاء في الصحراء يعلمنا أن الجمال الحقيقي لا يُرى إلا بالقلب.',
      fr: "Un chef-d'œuvre poétique universel : l'essentiel est invisible pour les yeux, on ne voit bien qu'avec le cœur.",
      en: "A poetic masterpiece on friendship and seeing with the heart."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">🌹 حكمة القلب وبراءة الرؤية</h3>
<p style="margin-bottom:14px;">يتحطم طائرة طيار في الصحراء الكبرى، فيلتقي بطفل قادم من كويكب صغير، تاركاً وراءه وردته الفريدة ليستكشف الكواكب وعالم الكبار.</p>
<p style="margin-bottom:14px;">يعلمه الثعلب سر الحياة الأعظم: <em>«لا نرى جيداً إلا بالقلب، والجوهر الحقيقي خفيّ عن العيون»</em>.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">🌹 Poésie & Vérité de l'Enfance</h3>
<p style="margin-bottom:14px;">Le Petit Prince rappelle avec tendresse la valeur sacrée du temps consacré à aimer, de la fidélité et de l'émerveillement.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">🌹 Timeless Wisdom of Care</h3>
<p style="margin-bottom:14px;">A pilot stranded in the Sahara learns from a gentle prince that true value is found in love, patience, and pure perception.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>الرؤية بالقلب :</strong> المشاعر الصادقة والجمال الجوهري لا تدركه الحواس المادية المجردة.</li>
<li><strong>المسؤولية تجاه من نحب :</strong> أنت مسؤول للأبد عن كل رابط إنساني شيدته بحب واهتمام.</li>
<li><strong>الحفاظ على دهشة الطفل :</strong> عدم الغرق في حسابات الكبار الجافة والمظهرية.</li>
</ul>`,
      fr: `<ul>
<li><strong>La Vision du Cœur :</strong> L'essentiel dans la vie n'est pas mesurable matériellement.</li>
<li><strong>La Responsabilité d'Aimer :</strong> « Tu deviens responsable pour toujours de ce que tu as apprivoisé. »</li>
<li><strong>Garder son Regard d'Enfant :</strong> Préserver la pureté et la capacité d'émerveillement.</li>
</ul>`,
      en: `<ul>
<li><strong>Seeing with the Heart:</strong> What is truly essential cannot be quantified.</li>
<li><strong>Responsibility in Connection:</strong> Forever caring for what you have nurtured.</li>
<li><strong>Childlike Wonder:</strong> Resisting superficial cynicism.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«لا نرى جيداً إلا بالقلب؛ فالجوهر الحقيقي لا تراه العيون.»</div>
<div class="quote-box">«الوقت الذي قضيته من أجل وردتك هو ما جعلها بهذه الأهمية.»</div>`,
      fr: `<div class="quote-box">« On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux. »</div>
<div class="quote-box">« C’est le temps que tu as perdu pour ta rose qui fait ta rose si importante. »</div>`,
      en: `<div class="quote-box">“It is only with the heart that one can see rightly; what is essential is invisible to the eye.”</div>
<div class="quote-box">“It is the time you have wasted for your rose that makes your rose so important.”</div>`
    },
    authorBio: {
      ar: `<p><strong>أنطوان دي سانت إكزوبيري</strong> (1900 - 1944)؛ كاتب وطيار فرنسي رائد، تميزت أعماله بروح إنسانية فياضة وفلسفة شعرية سامية تحتفي بالأخوة والمحبة.</p>`,
      fr: `<p><strong>Antoine de Saint-Exupéry</strong> (1900 - 1944) est un écrivain et aviateur humaniste de légende, auteur du livre le plus traduit après la Bible.</p>`,
      en: `<p><strong>Antoine de Saint-Exupéry</strong> (1900 - 1944) was a French aviator and poet-philosopher whose works celebrate fraternity and love.</p>`
    },
    quote: {
      ar: '«لا نرى جيداً إلا بالقلب؛ فالجوهر الحقيقي لا تراه العيون.» — أنطوان دي سانت إكزوبيري',
      fr: '« On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux. » — Antoine de Saint-Exupéry',
      en: '“It is only with the heart that one can see rightly; what is essential is invisible to the eye.” — Antoine de Saint-Exupéry'
    },
    chapters: [
      { num: 1, name: { ar: "الفصل 1", fr: "Chapitre 1", en: "Chapter 1" }, desc: { ar: "الطيار ورسم الخروف الأول", fr: "L'aviateur et le dessin du mouton", en: "The Pilot & the Drawing" }, duration: "02:29", src: "petit_prince_chapitre1.mp3" },
      { num: 2, name: { ar: "الفصل 2", fr: "Chapitre 2", en: "Chapter 2" }, desc: { ar: "كوكب الأمير والوردة المغرورة", fr: "L'astéroïde B-612 et la rose", en: "Asteroid B-612 & the Rose" }, duration: "02:22", src: "petit_prince_chapitre2.mp3" },
      { num: 3, name: { ar: "الفصل 3", fr: "Chapitre 3", en: "Chapter 3" }, desc: { ar: "رحلة الكواكب وغرابة الكبار", fr: "La visite des planètes et les grandes personnes", en: "Visiting the Adult Planets" }, duration: "02:29", src: "petit_prince_chapitre3.mp3" },
      { num: 4, name: { ar: "الفصل 4", fr: "Chapitre 4", en: "Chapter 4" }, desc: { ar: "الوصول إلى الأرض وبستان الورود", fr: "La Terre et le jardin de roses", en: "Earth & the Rose Garden" }, duration: "02:22", src: "petit_prince_chapitre4.mp3" },
      { num: 5, name: { ar: "الفصل 5", fr: "Chapitre 5", en: "Chapter 5" }, desc: { ar: "لقاء الثعلب وسر الرؤية بالقلب", fr: "Le secret du renard et les adieux", en: "The Fox's Secret & Farewell" }, duration: "02:45", src: "petit_prince_chapitre5.mp3" }
    ]
  },

  kafka: {
    key: 'kafka',
    category: 'psychology',
    cover: './audio_kafka_cover.jpg',
    totalDuration: '12 min',
    thinkerId: null,
    title: {
      ar: 'التحول (المسخ)',
      fr: 'La Métamorphose',
      en: 'The Metamorphosis'
    },
    author: {
      ar: 'فرانز كافكا',
      fr: 'Franz Kafka',
      en: 'Franz Kafka'
    },
    categoryName: {
      ar: 'فلسفة وعلم النفس',
      fr: 'Psychologie & Réflexion',
      en: 'Psychology & Existential'
    },
    shortDesc: {
      ar: 'رمزية الاغتراب الإنساني والقسوة؛ استيقاظ غريغور سامسا كحشرة ضخمة وتغير نظرة عائلته له.',
      fr: "L'allégorie magistrale de l'aliénation : Gregor Samsa transformé en monstrueux insecte et rejeté par les siens.",
      en: "The profound allegory of human alienation: Gregor Samsa wakes transformed into a vermin."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">🪲 رمزية الاغتراب الكافكاوي</h3>
<p style="margin-bottom:14px;">يستيقظ <strong>غريغور سامسا</strong>، البائع الكادح، ليجد نفسه قد تحول إلى حشرة مروعة، كاشفاً كيف يتحول تعاطف المجتمع والأسرة إلى قسوة حين يفقد الفرد منفعته المادية.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">🪲 L'Aliénation Sociale & Familiale</h3>
<p style="margin-bottom:14px;">En se réveillant transformé en insecte, Gregor Samsa devient le révélateur tragique d'un monde utilitariste où l'affection reste conditionnelle.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">🪲 The Human Condition Under Utility</h3>
<p style="margin-bottom:14px;">Kafka's masterwork lays bare the fragility of familial affection when productivity ceases.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>هشاشة التقدير المشروط :</strong> القيمة الإنسانية لا ينبغي أن تقاس فقط بالمنفعة والإنتاج المادي.</li>
<li><strong>عزلة الاغتراب الداخلي :</strong> فهم صعوبة التعبير عن الذات في بيئة عاجزة عن التعاطف.</li>
</ul>`,
      fr: `<ul>
<li><strong>La Valeur Inconditionnelle de l'Être :</strong> Ne pas réduire l'humain à sa valeur économique.</li>
<li><strong>Le Drame de l'Incompréhension :</strong> La souffrance de l'isolement face au manque d'empathie.</li>
</ul>`,
      en: `<ul>
<li><strong>Inherent Human Dignity:</strong> Worth beyond economic output.</li>
<li><strong>The Pain of Alienation:</strong> The tragic weight of emotional isolation.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«استيقظ غريغور سامسا ذات صباح من أحلام مضطربة، ليجد نفسه قد تحول إلى حشرة ضخمة.»</div>`,
      fr: `<div class="quote-box">« En se réveillant un matin, Gregor Samsa se trouva transformé en un monstrueux insecte. »</div>`,
      en: `<div class="quote-box">“As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed into a monstrous vermin.”</div>`
    },
    authorBio: {
      ar: `<p><strong>فرانز كافكا</strong> (1883 - 1924)؛ عملاق الأدب الوجودي والنفسي، صاغ أدباً فريداً في تشريح القلق والبيروقراطية وتناقضات العصر الحديث.</p>`,
      fr: `<p><strong>Franz Kafka</strong> (1883 - 1924) est l'un des penseurs les plus influents du XXe siècle, maître incontesté de l'angoisse lucide.</p>`,
      en: `<p><strong>Franz Kafka</strong> (1883 - 1924) remains one of world literature's greatest psychological and existential visionaries.</p>`
    },
    quote: {
      ar: '«استيقظ غريغور سامسا ذات صباح من أحلام مضطربة، ليجد نفسه قد تحول إلى حشرة ضخمة.» — فرانز كافكا',
      fr: '« En se réveillant un matin, Gregor Samsa se trouva transformé en un monstrueux insecte. » — Franz Kafka',
      en: '“As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed into a monstrous vermin.” — Franz Kafka'
    },
    chapters: [
      { num: 1, name: { ar: "الفصل 1", fr: "Chapitre 1", en: "Chapter 1" }, desc: { ar: "الاستيقاظ المروع بغريغور سامسا كحشرة", fr: "Le réveil cauchemardesque", en: "The Shocking Awakening" }, duration: "02:42", src: "metamorphose_chapitre1.mp3" },
      { num: 2, name: { ar: "الفصل 2", fr: "Chapitre 2", en: "Chapter 2" }, desc: { ar: "ذعر العائلة والمدير خلف الباب", fr: "La panique de la famille", en: "Family's Terror" }, duration: "02:28", src: "metamorphose_chapitre2.mp3" },
      { num: 3, name: { ar: "الفصل 3", fr: "Chapitre 3", en: "Chapter 3" }, desc: { ar: "عناية الأخت غريت والفتور التدريجي", fr: "Les soins de la sœur et le dégoût", en: "Grete's Care & Distance" }, duration: "02:24", src: "metamorphose_chapitre3.mp3" },
      { num: 4, name: { ar: "الفصل 4", fr: "Chapitre 4", en: "Chapter 4" }, desc: { ar: "إصابة غريغور بالتفاحة والعزلة التامة", fr: "La blessure de la pomme et l'isolement", en: "The Apple Injury" }, duration: "02:08", src: "metamorphose_chapitre4.mp3" },
      { num: 5, name: { ar: "الفصل 5", fr: "Chapitre 5", en: "Chapter 5" }, desc: { ar: "موت غريغور الهادئ وتحرر العائلة", fr: "La mort silencieuse et le renouveau", en: "Quiet Departure" }, duration: "02:23", src: "metamorphose_chapitre5.mp3" }
    ]
  },

  vieux: {
    key: 'vieux',
    category: 'classics',
    cover: './audio_vieux_cover.jpg',
    totalDuration: '13 min',
    thinkerId: null,
    title: {
      ar: 'الشيخ والبحر',
      fr: 'Le Vieil Homme et la Mer',
      en: 'The Old Man and the Sea'
    },
    author: {
      ar: 'ارنست همنغواي',
      fr: 'Ernest Hemingway',
      en: 'Ernest Hemingway'
    },
    categoryName: {
      ar: 'كلاسيكيات وصمود',
      fr: 'Grands Classiques & Courage',
      en: 'Classics & Resilience'
    },
    shortDesc: {
      ar: 'ملحمة الكفاح والصمود؛ صراع الصياد العجوز سانتياغو ضد البحر والسمكة والمصير.',
      fr: "L'épopée poignante du vieux pêcheur Santiago : l'homme peut être détruit, mais pas vaincu.",
      en: "Hemingway's Nobel prize-winning triumph: Santiago’s heroic duel against the sea, nature, and fate."
    },
    about: {
      ar: `<h3 style="color:var(--gold);margin-bottom:10px;">⛵ ملحمة الإرادة التي لا تُقهر</h3>
<p style="margin-bottom:14px;">بعد 84 يوماً من سوء الحظ، يبحر الصياد العجوز <strong>سانتياغو</strong> وحيداً في مياه الخليج العميقة، ليعلق بخيطه سمكة مارلين أسطورية.</p>
<p style="margin-bottom:14px;">يخوض العجوز صراعاً بطولياً لمدة ثلاثة أيام مؤكداً رسالته الخالدة: <em>«قد يُدمّر الإنسان، لكنه لا يُهزم أبداً»</em>.</p>`,
      fr: `<h3 style="color:var(--gold);margin-bottom:10px;">⛵ Courage & Dignité Inébranlable</h3>
<p style="margin-bottom:14px;">Après 84 jours sans prise, le vieux Santiago affronte en solitaire un gigantesque espadon, livrant un combat épique et fraternel.</p>`,
      en: `<h3 style="color:var(--gold);margin-bottom:10px;">⛵ The Indomitable Spirit of Humanity</h3>
<p style="margin-bottom:14px;">Santiago’s legendary battle with a giant marlin exemplifies grace under pressure and unconquerable dignity.</p>`
    },
    takeaways: {
      ar: `<ul>
<li><strong>الإرادة التي لا تنكسر :</strong> النصر الحقيقي يكمن في المحاولة والشجاعة والنزاهة.</li>
<li><strong>احترام الخصم والطبيعة :</strong> الصراع مع الحياة ينبغي أن يُخاض بفروسية ونبل.</li>
</ul>`,
      fr: `<ul>
<li><strong>La Grandeur de la Persévérance :</strong> La dignité réside dans l'effort et le courage face à l'épreuve.</li>
<li><strong>L'Humilité Devant la Nature :</strong> Respecter les forces du monde tout en restant intègre.</li>
</ul>`,
      en: `<ul>
<li><strong>Unconquerable Dignity:</strong> A man can be destroyed, but not defeated.</li>
<li><strong>Reverence for Life:</strong> Facing destiny with chivalry, humility, and resolve.</li>
</ul>`
    },
    quotes: {
      ar: `<div class="quote-box">«قد يُدمّر الإنسان، لكنه لا يُهزم أبداً.»</div>`,
      fr: `<div class="quote-box">« Un homme, ça peut être détruit, mais pas vaincu. »</div>`,
      en: `<div class="quote-box">“Man is not made for defeat. A man can be destroyed but not defeated.”</div>`
    },
    authorBio: {
      ar: `<p><strong>ارنست همنغواي</strong> (1899 - 1961)؛ كاتب وصحفي أمريكي نال جائزة نوبل في الأدب عام 1954، اشتهر بأسلوبه المكثف والقوي في تصوير صمود الإنسان.</p>`,
      fr: `<p><strong>Ernest Hemingway</strong> (1899 - 1961) est un monstre sacré de la littérature américaine, prix Nobel de littérature en 1954.</p>`,
      en: `<p><strong>Ernest Hemingway</strong> (1899 - 1961) was a towering American novelist and Nobel laureate celebrated for his spare, powerful prose.</p>`
    },
    quote: {
      ar: '«قد يُدمّر الإنسان، لكنه لا يُهزم أبداً.» — ارنست همنغواي',
      fr: '« Un homme, ça peut être détruit, mais pas vaincu. » — Ernest Hemingway',
      en: '“Man is not made for defeat. A man can be destroyed but not defeated.” — Ernest Hemingway'
    },
    chapters: [
      { num: 1, name: { ar: "الفصل 1", fr: "Chapitre 1", en: "Chapter 1" }, desc: { ar: "سانتياغو والصبي في القرية", fr: "Le vieil homme et le jeune garçon", en: "Santiago & Manolin" }, duration: "02:21", src: "old_man_sea_chapitre1.mp3" },
      { num: 2, name: { ar: "الفصل 2", fr: "Chapitre 2", en: "Chapter 2" }, desc: { ar: "الإبحار إلى المياه العميقة وعلوق المارلين", fr: "Le départ au large et la prise géante", en: "Deep Water & Strike" }, duration: "02:28", src: "old_man_sea_chapitre2.mp3" },
      { num: 3, name: { ar: "الفصل 3", fr: "Chapitre 3", en: "Chapter 3" }, desc: { ar: "الصراع الأسطوري تحت الشمس والظلام", fr: "Le combat titanesque de trois jours", en: "The Three-Day Duel" }, duration: "02:51", src: "old_man_sea_chapitre3.mp3" },
      { num: 4, name: { ar: "الفصل 4", fr: "Chapitre 4", en: "Chapter 4" }, desc: { ar: "الانتصار وهجوم أسماك القرش الأول", fr: "La victoire et les premiers requins", en: "Victory & First Sharks" }, duration: "02:36", src: "old_man_sea_chapitre4.mp3" },
      { num: 5, name: { ar: "الفصل 5", fr: "Chapitre 5", en: "Chapter 5" }, desc: { ar: "العودة إلى المرفأ والهيكل والمجد الخالد", fr: "Le retour au port et la gloire intacte", en: "The Skeleton & Honor" }, duration: "02:40", src: "old_man_sea_chapitre5.mp3" }
    ]
  }
};
window.AUDIO_BOOKS_DATA = AUDIO_BOOKS_DATA;

// ==========================================================================
// AUDIO REVIEWS & RATINGS STORE (MODULAR STORAGE LAYER)
// ==========================================================================

const DEFAULT_AUDIO_REVIEWS_SEED = {
  milena: {
    ratings: [5, 5, 5, 4, 5, 5, 4, 5, 5, 4],
    comments: [
      {
        id: "seed_milena_1",
        workId: "milena",
        author: "د. طارق المنصوري",
        rating: 5,
        text: "نبرة الصوت تأخذك مباشرة إلى براغ في مطلع القرن العشرين. رسائل كافكا ليست مجرد مراسلات عاطفية بل هي رحلة فلسفية داخل روح معذبة تبحث عن الخلاص والصدق المطلق.",
        createdAt: 1722000000000,
        helpfulCount: 14,
        replies: [
          {
            id: "reply_seed_milena_1_1",
            author: "حكمة ونور (الإدارة)",
            text: "سعداء جداً بأن التسجيل نقل إليكم عمق مشاعر كافكا وصدقه الوجودي. استماعاً طيباً لبقية الفصول.",
            createdAt: 1722010000000
          }
        ]
      },
      {
        id: "seed_milena_2",
        workId: "milena",
        author: "Claire D.",
        rating: 5,
        text: "Une expérience sonore bouleversante. L'intimité douloureuse des lettres de Kafka est sublimée par la narration en arabe littéraire. Un pur chef-d'œuvre de la bibliothèque.",
        createdAt: 1722300000000,
        helpfulCount: 9,
        replies: []
      },
      {
        id: "seed_milena_3",
        workId: "milena",
        author: "ياسين برادة",
        rating: 4,
        text: "الموسيقى الخلفية الهادئة تعطي طابعاً تأملياً عميقاً. الفصل الثالث بالتحديد عن الخوف والحب تحفة أدبية نادرة.",
        createdAt: 1722500000000,
        helpfulCount: 6,
        replies: []
      },
      {
        id: "seed_milena_4",
        workId: "milena",
        author: "Julian Vance",
        rating: 5,
        text: "The pacing and emotional weight in this audio recording are magnificent. A true sanctuary for contemplative literature.",
        createdAt: 1722600000000,
        helpfulCount: 4,
        replies: []
      }
    ]
  },
  alchemist: {
    ratings: [5, 5, 4, 5, 5, 5, 4, 5],
    comments: [
      {
        id: "seed_alch_1",
        workId: "alchemist",
        author: "سارة العمراني",
        rating: 5,
        text: "حكاية سانتياغو تلهمني كلما شعرت بالتردد في مساري الشخصي. إلقاء صوتي فخم ينبض بالحكمة.",
        createdAt: 1721000000000,
        helpfulCount: 11,
        replies: []
      }
    ]
  },
  crime_punishment: {
    ratings: [5, 5, 5, 5, 4, 5, 5],
    comments: [
      {
        id: "seed_crime_1",
        workId: "crime_punishment",
        author: "أمين الهاشمي",
        rating: 5,
        text: "العمق السيكولوجي لدستويفسكي يظهر بقوة في هذا التسجيل الصوتي. صراع راسكولنيكوف الداخلي مسموع في كل نبرة.",
        createdAt: 1721500000000,
        helpfulCount: 8,
        replies: []
      }
    ]
  },
  etranger: {
    ratings: [5, 4, 5, 5, 5, 4],
    comments: [
      {
        id: "seed_etr_1",
        workId: "etranger",
        author: "Karim B.",
        rating: 5,
        text: "La voix incarne parfaitement le détachement philosophique de Meursault face au soleil d'Alger.",
        createdAt: 1721600000000,
        helpfulCount: 7,
        replies: []
      }
    ]
  },
  petit_prince: {
    ratings: [5, 5, 5, 5, 5],
    comments: [
      {
        id: "seed_prince_1",
        workId: "petit_prince",
        author: "نور الدين",
        rating: 5,
        text: "لا يُرى إلا بالقلب، فالجوهر لا تراه العيون. تسجيل يعيد صفاء الطفولة إلى الروح.",
        createdAt: 1721700000000,
        helpfulCount: 15,
        replies: []
      }
    ]
  },
  kafka: {
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        id: "seed_kafka_1",
        workId: "kafka",
        author: "Mehdi L.",
        rating: 5,
        text: "Une métaphore magistrale de l'aliénation humaine. Lecture captivante.",
        createdAt: 1721800000000,
        helpfulCount: 5,
        replies: []
      }
    ]
  },
  vieux: {
    ratings: [5, 5, 5, 4, 5],
    comments: [
      {
        id: "seed_vieux_1",
        workId: "vieux",
        author: "عمر الفاروق",
        rating: 5,
        text: "الإنسان يمكن أن يهلك لكنه لا يُهزم أبداً. قوة وعزيمة سانتياغو في مواجهة البحر تلهم الصبر.",
        createdAt: 1721900000000,
        helpfulCount: 10,
        replies: []
      }
    ]
  }
};

const AudioReviewsStore = {
  // Ensure default seed data exists for works
  ensureSeedData(workId) {
    try {
      const allRatings = JSON.parse(localStorage.getItem('hikma_audio_ratings') || '{}');
      const allComments = JSON.parse(localStorage.getItem('hikma_audio_comments') || '{}');
      let changed = false;

      const seed = DEFAULT_AUDIO_REVIEWS_SEED[workId];
      if (seed) {
        if (!allRatings[workId] || allRatings[workId].length === 0) {
          allRatings[workId] = [...seed.ratings];
          localStorage.setItem('hikma_audio_ratings', JSON.stringify(allRatings));
        }
        if (!allComments[workId] || allComments[workId].length === 0) {
          allComments[workId] = JSON.parse(JSON.stringify(seed.comments));
          localStorage.setItem('hikma_audio_comments', JSON.stringify(allComments));
        }
      }
    } catch (e) {}
  },

  // 1. Get Ratings Summary for workId
  getRatingSummary(workId) {
    this.ensureSeedData(workId);
    try {
      const allRatings = JSON.parse(localStorage.getItem('hikma_audio_ratings') || '{}');
      const workRatings = allRatings[workId] || [];
      const userRating = allRatings[`user_${workId}`] || null;

      const totalCount = workRatings.length;
      const sum = workRatings.reduce((acc, r) => acc + (r.rating || r), 0);
      const average = totalCount > 0 ? parseFloat((sum / totalCount).toFixed(1)) : 0;

      const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      workRatings.forEach(r => {
        const val = typeof r === 'object' ? r.rating : r;
        if (val >= 1 && val <= 5) distribution[val]++;
      });

      const percentages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      if (totalCount > 0) {
        for (let i = 1; i <= 5; i++) {
          percentages[i] = Math.round((distribution[i] / totalCount) * 100);
        }
      }

      return { totalCount, average, distribution, percentages, userRating };
    } catch (e) {
      return { totalCount: 0, average: 0, distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, percentages: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }, userRating: null };
    }
  },

  // 2. Submit Rating
  submitRating(workId, rating) {
    const num = parseInt(rating, 10);
    if (isNaN(num) || num < 1 || num > 5) return null;

    try {
      const allRatings = JSON.parse(localStorage.getItem('hikma_audio_ratings') || '{}');
      if (!allRatings[workId]) allRatings[workId] = [];

      // Save user specific rating for this book
      const userKey = `user_${workId}`;
      const prevRating = allRatings[userKey];

      if (prevRating) {
        // Update user's previous rating
        const idx = allRatings[workId].findIndex(r => (typeof r === 'object' ? r.isUser : false));
        if (idx >= 0) {
          allRatings[workId][idx].rating = num;
          allRatings[workId][idx].updatedAt = Date.now();
        } else {
          allRatings[workId].push({ rating: num, isUser: true, createdAt: Date.now() });
        }
      } else {
        allRatings[workId].push({ rating: num, isUser: true, createdAt: Date.now() });
      }

      allRatings[userKey] = num;
      localStorage.setItem('hikma_audio_ratings', JSON.stringify(allRatings));

      // Optional async sync to server API
      if (typeof fetch === 'function') {
        fetch(`/api/audio/${workId}/rating`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating: num })
        }).catch(() => {});
      }

      return this.getRatingSummary(workId);
    } catch (e) {
      return null;
    }
  },

  // 3. Get Reviews / Comments for workId
  getReviews(workId) {
    this.ensureSeedData(workId);
    try {
      const allComments = JSON.parse(localStorage.getItem('hikma_audio_comments') || '{}');
      return allComments[workId] || [];
    } catch (e) {
      return [];
    }
  },

  getComments(workId) {
    return this.getReviews(workId);
  },

  // 4. Submit Comment / Review (with optional parentId for 1-level reply)
  submitComment(workId, { author, text, rating = null, parentId = null }) {
    const cleanAuthor = (author || '').trim().slice(0, 80);
    const cleanText = (text || '').trim().slice(0, 1500);

    if (!cleanAuthor || !cleanText) return { success: false, error: 'Champs obligatoires manquants.' };

    try {
      const allComments = JSON.parse(localStorage.getItem('hikma_audio_comments') || '{}');
      if (!allComments[workId]) allComments[workId] = [];

      if (parentId) {
        // Find parent comment and append reply
        const parent = allComments[workId].find(c => c.id === parentId);
        if (!parent) return { success: false, error: 'Commentaire parent introuvable.' };
        if (!parent.replies) parent.replies = [];

        const newReply = {
          id: `reply_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
          author: cleanAuthor,
          text: cleanText,
          createdAt: Date.now()
        };
        parent.replies.push(newReply);
        localStorage.setItem('hikma_audio_comments', JSON.stringify(allComments));
        return { success: true, reply: newReply };
      }

      const newComment = {
        id: `comm_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        workId,
        author: cleanAuthor,
        text: cleanText,
        rating: (rating >= 1 && rating <= 5) ? rating : null,
        createdAt: Date.now(),
        replies: []
      };

      allComments[workId].unshift(newComment);
      localStorage.setItem('hikma_audio_comments', JSON.stringify(allComments));

      // Optional async sync to server API
      if (typeof fetch === 'function') {
        fetch(`/api/audio/${workId}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ author: cleanAuthor, text: cleanText, rating, parentId })
        }).catch(() => {});
      }

      return { success: true, comment: newComment };
    } catch (e) {
      return { success: false, error: e.message };
    }
  },

  // 5. Toggle Helpful on Comment
  toggleHelpful(workId, commentId) {
    try {
      const helpfulMap = JSON.parse(localStorage.getItem('hikma_audio_helpful') || '{}');
      const userLikesKey = `user_likes_${workId}`;
      const userLikes = helpfulMap[userLikesKey] || [];
      const isLiked = userLikes.includes(commentId);
      
      const allComments = JSON.parse(localStorage.getItem('hikma_audio_comments') || '{}');
      if (allComments[workId]) {
        const comment = allComments[workId].find(c => c.id === commentId);
        if (comment) {
          if (typeof comment.helpfulCount !== 'number') comment.helpfulCount = 0;
          if (isLiked) {
            comment.helpfulCount = Math.max(0, comment.helpfulCount - 1);
            helpfulMap[userLikesKey] = userLikes.filter(id => id !== commentId);
          } else {
            comment.helpfulCount += 1;
            helpfulMap[userLikesKey] = [...userLikes, commentId];
          }
          localStorage.setItem('hikma_audio_comments', JSON.stringify(allComments));
          localStorage.setItem('hikma_audio_helpful', JSON.stringify(helpfulMap));
          
          if (typeof fetch === 'function') {
            fetch(`/api/audio/${workId}/comments/${commentId}/helpful`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ liked: !isLiked })
            }).catch(() => {});
          }
          
          return { isLiked: !isLiked, count: comment.helpfulCount };
        }
      }
      return { isLiked: false, count: 0 };
    } catch (e) {
      return { isLiked: false, count: 0 };
    }
  },

  // 6. Check if Comment is marked helpful by user
  isCommentHelpful(workId, commentId) {
    try {
      const helpfulMap = JSON.parse(localStorage.getItem('hikma_audio_helpful') || '{}');
      const userLikesKey = `user_likes_${workId}`;
      const userLikes = helpfulMap[userLikesKey] || [];
      return userLikes.includes(commentId);
    } catch (e) {
      return false;
    }
  },

  // 7. Delete Own Comment
  deleteOwnComment(workId, commentId) {
    try {
      const allComments = JSON.parse(localStorage.getItem('hikma_audio_comments') || '{}');
      if (allComments[workId]) {
        allComments[workId] = allComments[workId].filter(c => c.id !== commentId);
        localStorage.setItem('hikma_audio_comments', JSON.stringify(allComments));
      }
    } catch (e) {}
  }
};
window.AudioReviewsStore = AudioReviewsStore;

// ==========================================================================
// APPLICATION STATE & PERSISTENCE
// ==========================================================================

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
let activeCategory = 'all';
let activeSearchQuery = '';
let activeBookKey = 'milena'; // Reference prototype as default
let activeChapterIndex = 0;
let reviewsSortBy = 'recent';
let reviewsStarFilter = 'all';
let reviewsVisibleLimit = 6;

// Central Audio Controller State
const AudioState = {
  currentBookKey: null,
  currentChapterIndex: 0,
  currentTime: 0,
  duration: 0,
  isPlaying: false,
  volume: 1,
  playbackRate: 1,
  audioEl: null,
  sleepTimerTimeout: null,
  sleepTimerMode: 'off' // 'off', 10, 20, 30, 'end_of_chap'
};

const speeds = [1, 1.25, 1.5, 2, 0.75];
let speedIdx = 0;

// Structured LocalStorage Helpers
function getSavedProgress() {
  try {
    return JSON.parse(localStorage.getItem('hikma_audio_progress') || '{}');
  } catch (e) {
    return {};
  }
}

function saveBookProgress(bookKey, chapterIndex, currentTime, duration, completed = false) {
  if (!bookKey || isNaN(currentTime)) return;
  const progressMap = getSavedProgress();
  const pct = duration > 0 ? Math.round((currentTime / duration) * 100) : 0;

  progressMap[bookKey] = {
    chapterIndex,
    currentTime: Math.floor(currentTime),
    duration: Math.floor(duration || 0),
    progressPercent: pct,
    lastListened: Date.now(),
    completed: completed || (progressMap[bookKey] && progressMap[bookKey].completed) || false
  };

  localStorage.setItem('hikma_audio_progress', JSON.stringify(progressMap));
}

function getBookSavedProgress(bookKey) {
  const map = getSavedProgress();
  return map[bookKey] || null;
}

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem('hikma_audio_favorites') || '[]');
  } catch (e) {
    return [];
  }
}

function isFavorite(bookKey) {
  return getFavorites().includes(bookKey);
}

function toggleFavorite(bookKey) {
  let favs = getFavorites();
  let added = false;
  if (favs.includes(bookKey)) {
    favs = favs.filter(k => k !== bookKey);
    added = false;
  } else {
    favs.push(bookKey);
    added = true;
  }
  localStorage.setItem('hikma_audio_favorites', JSON.stringify(favs));
  return added;
}

// Toast Notification Messenger
function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 2800);
}

// Time Formatter
function formatTime(seconds) {
  if (isNaN(seconds) || seconds === null || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Relative Date Formatter
function formatReviewDate(timestamp) {
  if (!timestamp) return '';
  try {
    const now = Date.now();
    const diffMs = now - timestamp;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

    if (diffDays === 0) {
      return t.dateToday || "اليوم";
    } else if (diffDays === 1) {
      return t.dateYesterday || "بالأمس";
    } else if (diffDays === 2) {
      return t.dateDaysAgoTwo || "منذ يومين";
    } else if (diffDays > 2 && diffDays < 30) {
      return (t.dateDaysAgo || "منذ {n} أيام").replace('{n}', diffDays);
    }

    const d = new Date(timestamp);
    const locale = currentLang === 'ar' ? 'ar-EG' : currentLang === 'fr' ? 'fr-FR' : 'en-US';
    return d.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  } catch (e) {
    return '';
  }
}

// ==========================================================================
// CENTRAL AUDIO CONTROLLER (SINGLETON)
// ==========================================================================

function initAudioController() {
  if (!AudioState.audioEl) {
    AudioState.audioEl = new Audio();
    AudioState.audioEl.preload = "metadata";

    // Load saved volume & speed settings
    try {
      const settings = JSON.parse(localStorage.getItem('hikma_audio_settings') || '{}');
      if (settings.volume !== undefined) AudioState.volume = settings.volume;
      if (settings.playbackRate !== undefined) AudioState.playbackRate = settings.playbackRate;
    } catch (e) {}

    AudioState.audioEl.volume = AudioState.volume;
    AudioState.audioEl.playbackRate = AudioState.playbackRate;

    // Time Update Listener
    AudioState.audioEl.ontimeupdate = function() {
      if (!AudioState.audioEl) return;
      AudioState.currentTime = AudioState.audioEl.currentTime;
      AudioState.duration = AudioState.audioEl.duration || 0;

      if (AudioState.duration > 0) {
        const pct = (AudioState.currentTime / AudioState.duration) * 100;
        const fill = document.getElementById('barProgressFill');
        const curr = document.getElementById('barCurrentTime');
        const tot = document.getElementById('barTotalTime');
        const bg = document.getElementById('progressBarBg');

        if (fill) fill.style.width = `${pct}%`;
        if (curr) curr.textContent = formatTime(AudioState.currentTime);
        if (tot) tot.textContent = formatTime(AudioState.duration);
        if (bg) bg.setAttribute('aria-valuenow', Math.round(pct));

        // Save progress periodically every ~3s
        if (Math.floor(AudioState.currentTime) % 3 === 0) {
          saveBookProgress(AudioState.currentBookKey, AudioState.currentChapterIndex, AudioState.currentTime, AudioState.duration);
        }
      }
    };

    // Ended Listener
    AudioState.audioEl.onended = function() {
      AudioState.isPlaying = false;
      updatePlayButtonsUI(false);

      if (AudioState.sleepTimerMode === 'end_of_chap') {
        stopSleepTimer();
        return;
      }

      const book = AUDIO_BOOKS_DATA[AudioState.currentBookKey];
      if (book && AudioState.currentChapterIndex < book.chapters.length - 1) {
        // Auto-advance to next chapter
        playBookChapter(AudioState.currentBookKey, AudioState.currentChapterIndex + 1);
      } else {
        // Book completed!
        if (book) {
          saveBookProgress(AudioState.currentBookKey, AudioState.currentChapterIndex, AudioState.duration, AudioState.duration, true);
        }
        renderContinueListeningSection();
        if (document.getElementById('bookDetailView').style.display === 'block') {
          renderChaptersPlaylist(book);
        }
      }
    };
  }
}

window.playBookChapter = function(bookKey, chapterIndex, startTime = 0) {
  initAudioController();
  activeBookKey = bookKey;
  activeChapterIndex = chapterIndex;
  AudioState.currentBookKey = bookKey;
  AudioState.currentChapterIndex = chapterIndex;

  const book = AUDIO_BOOKS_DATA[bookKey] || AUDIO_BOOKS_DATA.milena;
  const chap = book.chapters[chapterIndex] || book.chapters[0];

  const bookTitle = book.title[currentLang] || book.title.ar;
  const authorName = book.author[currentLang] || book.author.ar;
  const chapName = chap.name[currentLang] || chap.name.ar;
  const chapDesc = chap.desc[currentLang] || chap.desc.ar;

  // Update Player Bar UI
  document.getElementById('playerTitle').textContent = `${bookTitle} — ${chapName} (${chapDesc})`;
  document.getElementById('playerSubtitle').textContent = authorName;
  document.getElementById('playerThumbImg').src = book.cover;
  document.getElementById('barTotalTime').textContent = chap.duration;
  document.getElementById('barCurrentTime').textContent = formatTime(startTime);
  document.getElementById('barProgressFill').style.width = '0%';
  document.getElementById('bottomPlayerBar').classList.add('active');

  // Change Audio Source
  AudioState.audioEl.src = chap.src;
  AudioState.audioEl.playbackRate = AudioState.playbackRate;
  AudioState.audioEl.volume = AudioState.volume;

  AudioState.audioEl.onloadedmetadata = function() {
    if (startTime > 0) {
      AudioState.audioEl.currentTime = startTime;
    }
    AudioState.audioEl.play().catch(e => console.log("Audio autoplay prevented:", e));
    AudioState.isPlaying = true;
    updatePlayButtonsUI(true);
  };

  // Re-render UI components
  if (document.getElementById('bookDetailView').style.display === 'block') {
    renderChaptersPlaylist(book);
    updateDetailHeroPlayBtn(bookKey);
  }
};

window.togglePlay = function() {
  initAudioController();
  if (!AudioState.currentBookKey) {
    playBookChapter(activeBookKey, 0);
    return;
  }

  if (AudioState.isPlaying) {
    AudioState.audioEl.pause();
    AudioState.isPlaying = false;
    updatePlayButtonsUI(false);
    saveBookProgress(AudioState.currentBookKey, AudioState.currentChapterIndex, AudioState.audioEl.currentTime, AudioState.audioEl.duration);
    renderContinueListeningSection();
  } else {
    AudioState.audioEl.play().catch(e => console.log(e));
    AudioState.isPlaying = true;
    updatePlayButtonsUI(true);
  }

  const book = AUDIO_BOOKS_DATA[AudioState.currentBookKey];
  if (book && document.getElementById('bookDetailView').style.display === 'block') {
    renderChaptersPlaylist(book);
    updateDetailHeroPlayBtn(AudioState.currentBookKey);
  }
};

function updatePlayButtonsUI(isPlaying) {
  const mainBtn = document.getElementById('playerMainPlayBtn');
  if (mainBtn) mainBtn.textContent = isPlaying ? '⏸' : '▶';
}

window.playPrevChapter = function() {
  if (AudioState.currentChapterIndex > 0) {
    playBookChapter(AudioState.currentBookKey, AudioState.currentChapterIndex - 1);
  }
};

window.playNextChapter = function() {
  const book = AUDIO_BOOKS_DATA[AudioState.currentBookKey];
  if (book && AudioState.currentChapterIndex < book.chapters.length - 1) {
    playBookChapter(AudioState.currentBookKey, AudioState.currentChapterIndex + 1);
  }
};

window.rewind15 = function() {
  if (AudioState.audioEl) {
    AudioState.audioEl.currentTime = Math.max(0, AudioState.audioEl.currentTime - 15);
  }
};

window.forward15 = function() {
  if (AudioState.audioEl && AudioState.audioEl.duration) {
    AudioState.audioEl.currentTime = Math.min(AudioState.audioEl.duration, AudioState.audioEl.currentTime + 15);
  }
};

window.seekAudioBar = function(e) {
  if (AudioState.audioEl && AudioState.audioEl.duration) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    AudioState.audioEl.currentTime = pct * AudioState.audioEl.duration;
  }
};

window.cycleSpeed = function() {
  speedIdx = (speedIdx + 1) % speeds.length;
  const s = speeds[speedIdx];
  AudioState.playbackRate = s;
  if (AudioState.audioEl) AudioState.audioEl.playbackRate = s;
  document.getElementById('speedBtn').textContent = `${s}x`;
  localStorage.setItem('hikma_audio_settings', JSON.stringify({ volume: AudioState.volume, playbackRate: s }));
};

let isMuted = false, lastVol = 1;
window.setVolume = function(val) {
  lastVol = parseFloat(val);
  AudioState.volume = lastVol;
  if (AudioState.audioEl) AudioState.audioEl.volume = lastVol;
  isMuted = lastVol === 0;
  const icon = document.getElementById('volIcon');
  if (icon) icon.textContent = lastVol === 0 ? '🔇' : lastVol < 0.5 ? '🔉' : '🔊';
  localStorage.setItem('hikma_audio_settings', JSON.stringify({ volume: lastVol, playbackRate: AudioState.playbackRate }));
};

window.toggleMute = function() {
  isMuted = !isMuted;
  const slider = document.getElementById('volSlider');
  const icon = document.getElementById('volIcon');
  if (isMuted) {
    if (AudioState.audioEl) AudioState.audioEl.volume = 0;
    if (slider) slider.value = 0;
    if (icon) icon.textContent = '🔇';
  } else {
    if (AudioState.audioEl) AudioState.audioEl.volume = lastVol || 1;
    if (slider) slider.value = lastVol || 1;
    if (icon) icon.textContent = '🔊';
  }
};

// Sleep Timer System
const timerModes = ['off', 10, 20, 30, 'end_of_chap'];
let timerModeIdx = 0;

window.cycleSleepTimer = function() {
  timerModeIdx = (timerModeIdx + 1) % timerModes.length;
  const mode = timerModes[timerModeIdx];
  AudioState.sleepTimerMode = mode;
  const btn = document.getElementById('sleepTimerBtn');
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  if (AudioState.sleepTimerTimeout) {
    clearTimeout(AudioState.sleepTimerTimeout);
    AudioState.sleepTimerTimeout = null;
  }

  if (mode === 'off') {
    if (btn) btn.classList.remove('active');
    showToast(t.sleepTimerOff);
  } else if (mode === 'end_of_chap') {
    if (btn) btn.classList.add('active');
    showToast(`${t.sleepTimerSet} ${t.sleepTimerEndOfChap}`);
  } else {
    if (btn) btn.classList.add('active');
    showToast(`${t.sleepTimerSet} ${mode} ${t.minutesLabel}`);
    AudioState.sleepTimerTimeout = setTimeout(() => {
      stopSleepTimer();
    }, mode * 60 * 1000);
  }
};

function stopSleepTimer() {
  if (AudioState.audioEl && AudioState.isPlaying) {
    AudioState.audioEl.pause();
    AudioState.isPlaying = false;
    updatePlayButtonsUI(false);
  }
  AudioState.sleepTimerMode = 'off';
  timerModeIdx = 0;
  const btn = document.getElementById('sleepTimerBtn');
  if (btn) btn.classList.remove('active');
}

window.handleMiniPlayerClick = function() {
  if (AudioState.currentBookKey) {
    openBookDetail(AudioState.currentBookKey);
  }
};

// ==========================================================================
// TRANSLATION & LOCALIZATION
// ==========================================================================

function applyLanguageDirection() {
  const isRtl = currentLang === 'ar';
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', currentLang);
}

function translatePage() {
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  const ui = (TIKTOK_DATA.ui && TIKTOK_DATA.ui[currentLang]) || {};

  // SEO tags
  const seoTitle = document.getElementById('seoPageTitle');
  const seoDesc = document.getElementById('seoPageDesc');
  if (seoTitle) seoTitle.textContent = t.seoTitle;
  if (seoDesc) seoDesc.content = t.seoDesc;

  // Hero section
  const hBadge = document.getElementById('heroBadgeText');
  const hTitle = document.getElementById('audioHeroTitle');
  const hSub = document.getElementById('audioHeroSubtitle');
  const hDesc = document.getElementById('audioHeroDesc');
  const hNotice = document.getElementById('audioLangNoticeText');
  const sInput = document.getElementById('audioSearchInput');

  if (hBadge) hBadge.textContent = t.heroBadge;
  if (hTitle) hTitle.textContent = t.heroTitle;
  if (hSub) hSub.textContent = t.heroSubtitle;
  if (hDesc) hDesc.textContent = t.heroDesc;
  if (hNotice) hNotice.textContent = t.audioLangNotice;
  if (sInput) sInput.placeholder = t.searchPlaceholder;

  // Breadcrumbs & Detail navigation
  const bHome = document.getElementById('bHome');
  const bAudio = document.getElementById('bAudio');
  const backText = document.getElementById('detailBackText');
  if (bHome) bHome.textContent = t.bHome;
  if (bAudio) bAudio.textContent = t.bAudio;
  if (backText) backText.textContent = t.backToLibrary;

  // Tabs
  const tChap = document.getElementById('tabBtnChapters');
  const tAbout = document.getElementById('tabBtnAbout');
  const tTake = document.getElementById('tabBtnTakeaways');
  const tQuotes = document.getElementById('tabBtnQuotes');
  const tAuthor = document.getElementById('tabBtnAuthor');
  if (tChap) tChap.textContent = t.tabChapters;
  if (tAbout) tAbout.textContent = t.tabAbout;
  if (tTake) tTake.textContent = t.tabTakeaways;
  if (tQuotes) tQuotes.textContent = t.tabQuotes;
  if (tAuthor) tAuthor.textContent = t.tabAuthor;

  // Widgets
  const wQTitle = document.getElementById('widgetQuoteTitle');
  const wQBtn = document.getElementById('widgetCopyQuoteText');
  const wRecTitle = document.getElementById('widgetRecTitle');
  if (wQTitle) wQTitle.textContent = t.widgetQuoteTitle;
  if (wQBtn) wQBtn.textContent = t.widgetCopyQuote;
  if (wRecTitle) wRecTitle.textContent = t.widgetRecTitle;

  // Detail Buttons
  const dShare = document.getElementById('detailShareText');
  const dLangBadge = document.getElementById('detailAudioLangBadge');
  if (dShare) dShare.textContent = t.share;
  if (dLangBadge) dLangBadge.textContent = t.audioAvailableInArabic;

  // Reviews & Ratings Form
  const rSecHeading = document.getElementById('reviewsSectionHeading');
  const rBadgeLabel = document.getElementById('reviewsBadgeLabel');
  const rSecSubtitle = document.getElementById('reviewsSectionSubtitle');
  const rLeg = document.getElementById('ratingLegendText');
  const rFormTitle = document.getElementById('reviewFormTitleText');
  const rLabelName = document.getElementById('labelAuthorName');
  const rLabelEmail = document.getElementById('labelAuthorEmail');
  const rLabelComment = document.getElementById('labelCommentText');
  const rInputName = document.getElementById('commentAuthorName');
  const rInputEmail = document.getElementById('commentEmail');
  const rInputText = document.getElementById('commentText');
  const rBtnSub = document.getElementById('submitReviewBtnText');
  const rLabelSort = document.getElementById('labelSortReviews');
  const rLoadMore = document.getElementById('loadMoreReviewsText');

  if (rSecHeading) rSecHeading.textContent = t.reviewsSectionHeading || "آراء المستمعين";
  if (rBadgeLabel) rBadgeLabel.textContent = t.reviewsBadgeLabel || "آراء المستمعين";
  if (rSecSubtitle) rSecSubtitle.textContent = t.reviewsSectionSubtitle || "شارك تجربتك وساعدنا على تطوير مكتبة حكمـة ونور الصوتية";
  if (rLeg) rLeg.textContent = t.ratingLegend || "تقييمك للعمل :";
  if (rFormTitle) rFormTitle.textContent = t.formTitleText || "شاركنا تجربتك مع هذا العمل الصوتي";
  if (rLabelName) rLabelName.innerHTML = `${t.labelAuthorName || 'الاسم'} <span style="color:var(--review-gold);">*</span>`;
  if (rLabelEmail) rLabelEmail.innerHTML = `${t.labelAuthorEmail || 'البريد الإلكتروني'} <span style="color:var(--review-muted);font-size:0.75rem;">${t.optionalTag || '(اختياري)'}</span>`;
  if (rLabelComment) rLabelComment.innerHTML = `${t.labelCommentText || 'رأيك'} <span style="color:var(--review-gold);">*</span>`;
  if (rInputName) rInputName.placeholder = t.placeholderAuthorName || "اسمك أو لقبك";
  if (rInputEmail) rInputEmail.placeholder = t.placeholderEmail || "لن يتم نشر بريدك الإلكتروني";
  if (rInputText) rInputText.placeholder = t.placeholderComment || "شاركنا تجربتك مع هذا العمل الصوتي...";
  if (rBtnSub) rBtnSub.textContent = t.submitReviewBtnText || "نشر التقييم";
  if (rLabelSort) rLabelSort.textContent = t.sortLabel || "الترتيب :";
  if (rLoadMore) rLoadMore.textContent = t.loadMoreReviews || "عرض المزيد من الآراء";

  // Sort dropdown options
  const sortSelect = document.getElementById('reviewsSortSelect');
  if (sortSelect) {
    sortSelect.options[0].text = t.sortRecent;
    sortSelect.options[1].text = t.sortTopRated;
    sortSelect.options[2].text = t.sortOldest;
  }

  // Common UI data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    } else if (ui[key]) {
      el.textContent = ui[key];
    }
  });
}

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
        renderFeaturedCard();
        renderContinueListeningSection();
        renderCatalogGrid(activeCategory, activeSearchQuery);

        if (document.getElementById('bookDetailView').style.display === 'block') {
          openBookDetail(activeBookKey, false);
        }
      });
    });
  }

  applyLanguageDirection();
  translatePage();
}

// ==========================================================================
// RENDER SECTION « À LA UNE » (FEATURED AUDIOBOOK)
// ==========================================================================

function renderFeaturedCard() {
  const container = document.getElementById('featuredAudioSection');
  if (!container) return;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  
  const book = AUDIO_BOOKS_DATA.alchemist || AUDIO_BOOKS_DATA.milena;
  const bTitle = book.title[currentLang] || book.title.ar;
  const bAuthor = book.author[currentLang] || book.author.ar;
  const bCat = book.categoryName[currentLang] || book.categoryName.ar;
  const bDesc = book.shortDesc[currentLang] || book.shortDesc.ar;

  container.innerHTML = `
    <div class="featured-audio-card" onclick="openBookDetail('${book.key}')">
      <div class="featured-cover-wrap">
        <span class="featured-badge-tag">${t.featuredTag}</span>
        <img src="${book.cover}" alt="${bTitle}" class="featured-cover-img" onerror="this.src='../brand_logo_official.png'">
      </div>

      <div class="featured-meta-col">
        <div class="featured-label">${t.featuredLabel}</div>
        <h2 class="featured-title">${bTitle}</h2>
        <div class="featured-author">${bAuthor}</div>
        <p class="featured-desc">${bDesc}</p>

        <div class="featured-badges-row">
          <span class="pill-badge">${book.chapters.length} ${t.chapterPrefix}s</span>
          <span class="pill-badge">${book.totalDuration}</span>
          <span class="pill-badge">${bCat}</span>
          <span class="pill-badge lang">${t.audioInArabicTag}</span>
        </div>

        <div class="featured-actions-row" onclick="event.stopPropagation()">
          <button class="btn-primary-play" onclick="playBookChapter('${book.key}', 0)">
            <span>▶</span> <span>${t.listenNowBtn}</span>
          </button>
          <button class="btn-sec-action" onclick="toggleCardFav('${book.key}', this)" aria-label="${t.favAdd}">
            <span>${isFavorite(book.key) ? '♥' : '♡'}</span> <span>${t.catFavorites}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// RENDER SECTION « CONTINUER L'ÉCOUTE » (SAVED PROGRESS RESUME)
// ==========================================================================

function renderContinueListeningSection() {
  const section = document.getElementById('continueListeningSection');
  const grid = document.getElementById('continueListeningGrid');
  if (!section || !grid) return;

  const progressMap = getSavedProgress();
  const inProgressKeys = Object.keys(progressMap).filter(k => {
    const p = progressMap[k];
    return p && p.currentTime > 0 && !p.completed && AUDIO_BOOKS_DATA[k];
  });

  if (inProgressKeys.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  grid.innerHTML = inProgressKeys.map(k => {
    const book = AUDIO_BOOKS_DATA[k];
    const p = progressMap[k];
    const bTitle = book.title[currentLang] || book.title.ar;
    const chap = book.chapters[p.chapterIndex] || book.chapters[0];
    const chapName = chap.name[currentLang] || chap.name.ar;

    return `
      <div class="continue-card" onclick="playBookChapter('${k}', ${p.chapterIndex}, ${p.currentTime})">
        <img src="${book.cover}" alt="${bTitle}" class="continue-thumb">
        <div class="continue-info">
          <h3 class="continue-title">${bTitle}</h3>
          <div class="continue-chap">${chapName}</div>
          <div class="continue-progress-bar">
            <div class="continue-progress-fill" style="width:${p.progressPercent || 0}%"></div>
          </div>
          <div class="continue-time-text">
            <span>${formatTime(p.currentTime)} / ${chap.duration} (${p.progressPercent}%)</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// RENDER CATALOG GRID (SEARCH, CATEGORY FILTERS, FAVORITES)
// ==========================================================================

function renderCatalogGrid(filter = 'all', searchQuery = '') {
  const grid = document.getElementById('booksGrid');
  if (!grid) return;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  let books = Object.values(AUDIO_BOOKS_DATA);
  const q = searchQuery.toLowerCase().trim();

  // 1. Search Query Filter
  if (q) {
    books = books.filter(b => {
      const titleStr = `${b.title.ar} ${b.title.fr} ${b.title.en}`.toLowerCase();
      const authorStr = `${b.author.ar} ${b.author.fr} ${b.author.en}`.toLowerCase();
      const descStr = `${b.shortDesc.ar} ${b.shortDesc.fr} ${b.shortDesc.en}`.toLowerCase();
      const chapsStr = b.chapters.map(c => `${c.name.ar} ${c.desc.ar} ${c.name.fr} ${c.desc.fr}`).join(' ').toLowerCase();
      return titleStr.includes(q) || authorStr.includes(q) || descStr.includes(q) || chapsStr.includes(q);
    });
  }

  // 2. Category / Status Filter
  if (filter === 'favorites') {
    const favs = getFavorites();
    books = books.filter(b => favs.includes(b.key));
  } else if (filter === 'in_progress') {
    const progressMap = getSavedProgress();
    books = books.filter(b => progressMap[b.key] && progressMap[b.key].currentTime > 0 && !progressMap[b.key].completed);
  } else if (filter === 'completed') {
    const progressMap = getSavedProgress();
    books = books.filter(b => progressMap[b.key] && progressMap[b.key].completed);
  } else if (filter !== 'all') {
    books = books.filter(b => b.category === filter || (filter === 'classics' && (b.category === 'classics' || b.key === 'crime_punishment' || b.key === 'etranger')));
  }

  // Update total count
  const countEl = document.getElementById('audioBooksCount');
  if (countEl) countEl.textContent = books.length;

  if (books.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">لم يتم العثور على أي كتاب صوتي مطابق.</p>
        <button class="btn-sec-action" onclick="resetFilters()">عرض كل الكتب</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = books.map((book, idx) => {
    const bookTitle = book.title[currentLang] || book.title.ar;
    const authorName = book.author[currentLang] || book.author.ar;
    const shortDesc = book.shortDesc[currentLang] || book.shortDesc.ar;
    const isFav = isFavorite(book.key);

    return `
      <article class="audiobook-card" data-book-key="${book.key}" onclick="openBookDetail('${book.key}')">
        <div class="card-cover-wrapper">
          <span class="card-audio-tag">🎧 AUDIO</span>
          <span class="card-duration-badge">${book.totalDuration}</span>
          <img src="${book.cover}" alt="${bookTitle}" class="card-cover-img" ${idx > 2 ? 'loading="lazy"' : ''} onerror="this.src='../brand_logo_official.png'">
          <div class="card-play-overlay">
            <div class="card-play-circle">▶</div>
          </div>
        </div>

        <div class="card-body">
          <div>
            <h3 class="card-title">${bookTitle}</h3>
            <div class="card-author">${authorName}</div>
            <p class="card-desc">${shortDesc}</p>
          </div>

          <div class="card-footer-row" onclick="event.stopPropagation()">
            <span class="card-lang-badge">${t.audioInArabicTag}</span>
            <div style="display:flex;align-items:center;gap:10px;">
              <button style="background:transparent;border:none;color:${isFav ? 'var(--gold)' : 'var(--text-muted)'};font-size:1.1rem;cursor:pointer;" onclick="toggleCardFav('${book.key}', this)" aria-label="${t.favAdd}">
                ${isFav ? '♥' : '♡'}
              </button>
              <button class="card-listen-btn-text" style="background:transparent;border:none;cursor:pointer;" onclick="playBookChapter('${book.key}', 0)">
                ${t.listenBtn} ▶
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.filterAudioCategory = function(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.audio-cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  showLibraryGrid();
  renderCatalogGrid(cat, activeSearchQuery);
};

window.resetFilters = function() {
  activeCategory = 'all';
  activeSearchQuery = '';
  const searchInput = document.getElementById('audioSearchInput');
  const clearBtn = document.getElementById('audioSearchClearBtn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  document.querySelectorAll('.audio-cat-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === 'all');
  });
  renderCatalogGrid('all', '');
};

function setupSearchInput() {
  const searchInput = document.getElementById('audioSearchInput');
  const clearBtn = document.getElementById('audioSearchClearBtn');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    activeSearchQuery = searchInput.value;
    if (clearBtn) {
      clearBtn.style.display = activeSearchQuery.length > 0 ? 'flex' : 'none';
    }
    renderCatalogGrid(activeCategory, activeSearchQuery);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      activeSearchQuery = '';
      clearBtn.style.display = 'none';
      renderCatalogGrid(activeCategory, '');
      searchInput.focus();
    });
  }
}

window.toggleCardFav = function(bookKey, btn) {
  const added = toggleFavorite(bookKey);
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  if (btn) {
    btn.innerHTML = added ? '<span>♥</span> <span>' + t.catFavorites + '</span>' : '<span>♡</span> <span>' + t.catFavorites + '</span>';
  }
  showToast(added ? t.toastFavAdded : t.toastFavRemoved);
  renderCatalogGrid(activeCategory, activeSearchQuery);
};

// View Switchers
window.showLibraryGrid = function() {
  document.getElementById('libraryGridView').style.display = 'block';
  document.getElementById('bookDetailView').style.display = 'none';
  updateSeoMetadata(null);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==========================================================================
// BOOK DETAIL & DOSSIER VIEW (REFERENCE: LETTRES À MILENA)
// ==========================================================================

window.openBookDetail = function(bookKey, scroll = true) {
  activeBookKey = bookKey;
  const book = AUDIO_BOOKS_DATA[bookKey] || AUDIO_BOOKS_DATA.milena;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  const bookTitle = book.title[currentLang] || book.title.ar;
  const authorName = book.author[currentLang] || book.author.ar;
  const catName = book.categoryName[currentLang] || book.categoryName.ar;
  const shortDesc = book.shortDesc[currentLang] || book.shortDesc.ar;
  const quoteText = book.quote[currentLang] || book.quote.ar;

  // Breadcrumbs & Headers
  document.getElementById('bBookTitle').textContent = bookTitle;
  document.getElementById('detailBookTitle').textContent = bookTitle;
  document.getElementById('detailBookAuthor').textContent = authorName;
  document.getElementById('detailCoverImg').src = book.cover;
  document.getElementById('detailCoverImg').alt = bookTitle;
  document.getElementById('detailChaptersCount').textContent = `${book.chapters.length} ${t.chapterPrefix}s`;
  document.getElementById('detailTotalDuration').textContent = book.totalDuration;
  document.getElementById('detailCategoryTag').textContent = catName;
  document.getElementById('detailBookDesc').textContent = shortDesc;

  // Update Hero Play CTA with Resume indicator if progress exists
  updateDetailHeroPlayBtn(bookKey);

  // Favorite button
  updateDetailFavBtn();

  // Tab Contents
  document.getElementById('aboutBookContent').innerHTML = book.about[currentLang] || book.about.ar;
  document.getElementById('takeawaysBookContent').innerHTML = book.takeaways[currentLang] || book.takeaways.ar;
  document.getElementById('quotesBookContent').innerHTML = book.quotes[currentLang] || book.quotes.ar;
  
  // Author Tab with Link to Thinkers Dossier if applicable
  const authorContainer = document.getElementById('authorBookContent');
  let authorHtml = book.authorBio[currentLang] || book.authorBio.ar;
  if (book.thinkerId) {
    authorHtml += `
      <div style="margin-top: 18px;">
        <a href="../thinkers/?thinker=${book.thinkerId}" class="author-thinker-link">
          <span>🧠</span> <span>${t.authorDossierBtn}</span>
        </a>
      </div>
    `;
  }
  authorContainer.innerHTML = authorHtml;

  // Highlight Quote Widget
  document.getElementById('widgetQuoteText').textContent = `« ${quoteText} »`;

  // Render Chapters
  renderChaptersPlaylist(book);

  // Render Recommendations
  renderRecommendations(bookKey);

  // Reset to first tab
  switchTab('chapters', document.getElementById('tabBtnChapters'));

  // Render Reviews & Ratings Section for this bookKey
  renderReviewsSection(bookKey);

  // Update dynamic SEO for this audiobook
  updateSeoMetadata(book);

  document.getElementById('libraryGridView').style.display = 'none';
  document.getElementById('bookDetailView').style.display = 'block';
  if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
};

function updateDetailHeroPlayBtn(bookKey) {
  const btn = document.getElementById('detailMainPlayBtn');
  const textEl = document.getElementById('detailListenBtnText');
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  const p = getBookSavedProgress(bookKey);

  if (AudioState.currentBookKey === bookKey && AudioState.isPlaying) {
    if (textEl) textEl.textContent = "إيقاف مؤقت / Pause";
    return;
  }

  if (p && p.currentTime > 0 && !p.completed) {
    if (textEl) textEl.textContent = `${t.resumeAtBtn} ${formatTime(p.currentTime)}`;
  } else {
    if (textEl) textEl.textContent = t.listenNowBtn;
  }
}

window.handleDetailMainPlay = function() {
  const p = getBookSavedProgress(activeBookKey);
  if (AudioState.currentBookKey === activeBookKey && AudioState.audioEl) {
    togglePlay();
    return;
  }

  if (p && p.currentTime > 0 && !p.completed) {
    playBookChapter(activeBookKey, p.chapterIndex || 0, p.currentTime);
  } else {
    playBookChapter(activeBookKey, 0);
  }
};

// Render Chapter List
function renderChaptersPlaylist(book) {
  const container = document.getElementById('chaptersPlaylistRows');
  if (!container) return;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  container.innerHTML = book.chapters.map((chap, idx) => {
    const chapName = chap.name[currentLang] || chap.name.ar;
    const chapDesc = chap.desc[currentLang] || chap.desc.ar;
    const isCurrentActive = (AudioState.currentBookKey === book.key && AudioState.currentChapterIndex === idx);
    const isPlayingThis = isCurrentActive && AudioState.isPlaying;

    return `
      <div class="chapter-row-item ${isCurrentActive ? 'active' : ''}" data-chap-index="${idx}" onclick="playBookChapter('${book.key}', ${idx})">
        <div class="chap-left">
          <div class="chap-play-btn" aria-label="${isPlayingThis ? 'Pause' : 'Lecture'}">${isPlayingThis ? '🔊' : '▶'}</div>
          <div class="chap-text">
            <h4>${chapName} — ${chapDesc}</h4>
            <p>${chap.duration} ${t.minutesLabel}</p>
          </div>
        </div>
        <div class="chap-right">
          <span>${chap.duration}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Render Recommendations
function renderRecommendations(currentKey) {
  const container = document.getElementById('recommendationsContainer');
  if (!container) return;

  const otherKeys = Object.keys(AUDIO_BOOKS_DATA).filter(k => k !== currentKey);
  const selectedKeys = otherKeys.slice(0, 3);

  container.innerHTML = selectedKeys.map(k => {
    const b = AUDIO_BOOKS_DATA[k];
    const bTitle = b.title[currentLang] || b.title.ar;
    const bAuthor = b.author[currentLang] || b.author.ar;

    return `
      <div class="rec-item" onclick="openBookDetail('${k}')">
        <img src="${b.cover}" alt="${bTitle}" class="rec-thumb">
        <div class="rec-info">
          <h5>${bTitle}</h5>
          <p>${bAuthor} • ${b.totalDuration}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Accessible Tab Switcher
window.switchTab = function(tabName, btn) {
  document.querySelectorAll('#tabsBar .tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }

  document.getElementById('tabChapters').style.display = tabName === 'chapters' ? 'block' : 'none';
  document.getElementById('tabAbout').style.display = tabName === 'about' ? 'block' : 'none';
  document.getElementById('tabTakeaways').style.display = tabName === 'takeaways' ? 'block' : 'none';
  document.getElementById('tabQuotes').style.display = tabName === 'quotes' ? 'block' : 'none';
  document.getElementById('tabAuthor').style.display = tabName === 'author' ? 'block' : 'none';
};

// Keyboard Tab Navigation Support
function setupKeyboardTabs() {
  const tablist = document.getElementById('tabsBar');
  if (!tablist) return;

  const tabs = tablist.querySelectorAll('[role="tab"]');
  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
      let targetIndex = index;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      }
      if (targetIndex !== index) {
        tabs[targetIndex].focus();
        tabs[targetIndex].click();
      }
    });
  });
}

// ==========================================================================
// REVIEWS & RATINGS RENDER ENGINE
// ==========================================================================

function renderReviewsSection(workId) {
  renderRatingSummary(workId);
  renderUserRatingBox(workId);
  renderCommentsList(workId);
}

function renderRatingSummary(workId) {
  const container = document.getElementById('reviewsSummaryGrid');
  const countBadge = document.getElementById('reviewsCountBadge');
  const statusIcon = document.getElementById('reviewsStatusIcon');
  if (!container) return;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  const summary = AudioReviewsStore.getRatingSummary(workId);

  if (summary.totalCount === 0) {
    if (countBadge) countBadge.textContent = t.reviewsStatusUnrated || "لم يقيّم هذا العمل بعد";
    if (statusIcon) statusIcon.textContent = "✦";

    container.innerHTML = `
      <div class="reviews-empty-state-card">
        <div class="empty-sparkle-icon">✦</div>
        <h4 class="empty-title">${t.emptyStateTitle || "كن أول من يشارك رأيه"}</h4>
        <p class="empty-desc">${t.emptyStateDesc || "تجربتك قد تساعد مستمعًا آخر على اكتشاف هذا العمل."}</p>
        <button type="button" class="empty-cta-btn" onclick="document.getElementById('userRatingBox').scrollIntoView({behavior:'smooth'})">
          <span>★</span> <span>${t.emptyStateAction || "ابدأ بتقييم هذا العمل"}</span>
        </button>
      </div>
    `;
    return;
  }

  if (countBadge) {
    countBadge.textContent = (t.reviewsCountFormat || "{n} تقييمًا").replace('{n}', summary.totalCount);
  }
  if (statusIcon) statusIcon.textContent = "★";

  const starHtml = '★'.repeat(Math.round(summary.average)) + '☆'.repeat(5 - Math.round(summary.average));
  const basedOnText = (t.basedOnRatings || "بناءً على {n} تقييمًا").replace('{n}', summary.totalCount);

  container.innerHTML = `
    <div class="summary-score-col">
      <div class="big-score-num">${summary.average.toFixed(1)}</div>
      <div class="big-stars-row">${starHtml}</div>
      <div class="total-reviews-count">${basedOnText}</div>
    </div>

    <div class="distribution-bars-col">
      ${[5, 4, 3, 2, 1].map(num => `
        <div class="dist-row">
          <span class="dist-label">${num} ★</span>
          <div class="dist-bar-bg">
            <div class="dist-bar-fill" style="width: ${summary.percentages[num]}%;"></div>
          </div>
          <span class="dist-pct">${summary.percentages[num]}%</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderUserRatingBox(workId) {
  const summary = AudioReviewsStore.getRatingSummary(workId);
  const statusEl = document.getElementById('ratingFeedbackStatus');
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  updateStarButtonsUI(summary.userRating);

  if (summary.userRating) {
    const levelText = (t.starRatingLevels && t.starRatingLevels[summary.userRating]) || '';
    if (statusEl) statusEl.textContent = `★ ${summary.userRating}/5 — ${levelText}`;
  } else {
    if (statusEl) statusEl.textContent = '';
  }
}

function updateStarButtonsUI(rating) {
  const buttons = document.querySelectorAll('#starRatingGroup .star-btn');
  buttons.forEach(btn => {
    const starNum = parseInt(btn.getAttribute('data-star'), 10);
    btn.classList.remove('hovered');
    if (rating && starNum <= rating) {
      btn.classList.add('active');
      btn.setAttribute('aria-checked', starNum === rating ? 'true' : 'false');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-checked', 'false');
    }
  });
}

window.previewStarHover = function(starNum) {
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  const statusEl = document.getElementById('ratingFeedbackStatus');
  const buttons = document.querySelectorAll('#starRatingGroup .star-btn');

  if (starNum === 0) {
    const summary = AudioReviewsStore.getRatingSummary(activeBookKey);
    updateStarButtonsUI(summary.userRating);
    if (summary.userRating && statusEl) {
      const levelText = (t.starRatingLevels && t.starRatingLevels[summary.userRating]) || '';
      statusEl.textContent = `★ ${summary.userRating}/5 — ${levelText}`;
    } else if (statusEl) {
      statusEl.textContent = '';
    }
    return;
  }

  buttons.forEach(btn => {
    const num = parseInt(btn.getAttribute('data-star'), 10);
    btn.classList.toggle('hovered', num <= starNum);
  });

  if (statusEl) {
    const levelText = (t.starRatingLevels && t.starRatingLevels[starNum]) || '';
    statusEl.textContent = `${starNum} ★ — ${levelText}`;
  }
};

window.selectWorkRating = function(starNum) {
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  const statusEl = document.getElementById('ratingFeedbackStatus');
  
  AudioReviewsStore.submitRating(activeBookKey, starNum);
  renderRatingSummary(activeBookKey);
  renderUserRatingBox(activeBookKey);

  const levelText = (t.starRatingLevels && t.starRatingLevels[starNum]) || '';
  if (statusEl) {
    statusEl.textContent = `★ ${starNum}/5 — ${levelText}`;
  }
  showToast(t.thankYouRating || "شكرًا لك على تقييمك! 🌿");
};

// Character counter for comment
window.updateCommentCharCount = function(textarea) {
  const counter = document.getElementById('commentCharCounter');
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  if (counter && textarea) {
    const max = 1500;
    const len = textarea.value.length;
    counter.textContent = `${len} / ${max}`;
  }
};

// Form submit handler
window.handleCommentSubmit = function(e) {
  e.preventDefault();
  const authorInput = document.getElementById('commentAuthorName');
  const textInput = document.getElementById('commentText');
  const noticeEl = document.getElementById('commentSubmitNotice');
  const submitBtn = document.getElementById('btnSubmitReview');
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  const author = authorInput ? authorInput.value.trim() : '';
  const text = textInput ? textInput.value.trim() : '';

  if (!author) {
    alert(t.formErrorName);
    return;
  }
  if (!text) {
    alert(t.formErrorText);
    return;
  }

  // Get current user rating if set
  const summary = AudioReviewsStore.getRatingSummary(activeBookKey);
  const rating = summary.userRating || null;

  if (submitBtn) submitBtn.disabled = true;

  const res = AudioReviewsStore.submitComment(activeBookKey, { author, text, rating });

  if (res.success) {
    const form = document.getElementById('workCommentForm');
    if (form) form.reset();
    updateCommentCharCount(textInput);
    if (noticeEl) {
      noticeEl.textContent = t.formSuccessMsg;
      noticeEl.style.display = 'block';
      setTimeout(() => { noticeEl.style.display = 'none'; }, 4500);
    }
    renderRatingSummary(activeBookKey);
    renderCommentsList(activeBookKey);
    showToast(t.formSuccessMsg);
  }

  if (submitBtn) submitBtn.disabled = false;
};

// Toggle Helpful on Comment
window.toggleCommentHelpful = function(commentId) {
  AudioReviewsStore.toggleHelpful(activeBookKey, commentId);
  renderCommentsList(activeBookKey);
};

// Render Comments List
function renderCommentsList(workId) {
  const container = document.getElementById('audioCommentsList');
  const loadMoreWrap = document.getElementById('loadMoreReviewsWrap');
  if (!container) return;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  let comments = AudioReviewsStore.getReviews(workId);

  // 1. Star Filter
  if (reviewsStarFilter !== 'all') {
    const filterNum = parseInt(reviewsStarFilter, 10);
    comments = comments.filter(c => c.rating === filterNum);
  }

  // 2. Sorting
  if (reviewsSortBy === 'top_rated') {
    comments.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (reviewsSortBy === 'oldest') {
    comments.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  } else {
    // recent
    comments.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }

  if (comments.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--review-muted); font-size: 0.9rem;">
        ${t.noFilteredReviews}
      </div>
    `;
    if (loadMoreWrap) loadMoreWrap.style.display = 'none';
    return;
  }

  const visibleComments = comments.slice(0, reviewsVisibleLimit);
  if (loadMoreWrap) {
    loadMoreWrap.style.display = comments.length > reviewsVisibleLimit ? 'block' : 'none';
  }

  container.innerHTML = visibleComments.map(c => {
    const initial = (c.author || '✦').trim().charAt(0).toUpperCase() || '✦';
    const starHtml = c.rating ? '★'.repeat(c.rating) + '☆'.repeat(5 - c.rating) : '';
    const dateStr = formatReviewDate(c.createdAt);
    const isLiked = AudioReviewsStore.isCommentHelpful(workId, c.id);
    const helpfulCount = c.helpfulCount || 0;
    const helpfulLabel = t.helpfulBtnText || "مفيد";

    // Escape text to prevent XSS
    const safeAuthor = escapeHtml(c.author);
    const safeText = escapeHtml(c.text);

    return `
      <article class="comment-card-item" id="comm_${c.id}">
        <div class="comment-card-header">
          <div class="comment-author-info">
            <div class="comment-avatar" aria-hidden="true">${initial}</div>
            <div>
              <div class="comment-author-name">${safeAuthor}</div>
              <div class="comment-date">${dateStr}</div>
            </div>
          </div>
          ${starHtml ? `<div class="comment-stars" aria-label="${c.rating} / 5">${starHtml}</div>` : ''}
        </div>

        <div class="comment-body-text">${safeText}</div>

        <div class="comment-actions-bar">
          <button type="button" class="comment-helpful-btn ${isLiked ? 'active' : ''}" onclick="toggleCommentHelpful('${c.id}')" aria-label="${helpfulLabel}">
            <span class="helpful-heart">${isLiked ? '♥' : '♡'}</span>
            <span>${helpfulLabel}</span>
            ${helpfulCount > 0 ? `<span class="helpful-count">(${helpfulCount})</span>` : ''}
          </button>

          <button type="button" class="comment-reply-btn" onclick="openReplyForm('${c.id}')">
            ${t.replyBtnText}
          </button>
        </div>

        <!-- Inline Reply Form Container -->
        <div id="replyFormContainer_${c.id}" class="reply-form-wrap" style="display:none;">
          <form onsubmit="handleReplySubmit('${c.id}', event)">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
              <input type="text" id="replyAuthor_${c.id}" class="review-input" placeholder="${t.placeholderAuthorName}" required maxlength="80">
            </div>
            <textarea id="replyText_${c.id}" class="review-textarea" rows="2" placeholder="${t.replyPlaceholder}" required maxlength="500"></textarea>
            <div style="display:flex;gap:8px;margin-top:8px;">
              <button type="submit" class="btn-primary-play" style="padding:6px 14px;font-size:0.82rem;">${t.submitReplyBtn}</button>
              <button type="button" class="btn-sec-action" style="padding:6px 14px;font-size:0.82rem;" onclick="closeReplyForm('${c.id}')">${t.cancelReplyBtn}</button>
            </div>
          </form>
        </div>

        <!-- Nested Replies (1-level depth) -->
        ${c.replies && c.replies.length > 0 ? `
          <div class="comment-replies-list">
            ${c.replies.map(r => `
              <div class="reply-card-item">
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                  <strong style="color:var(--gold-light);font-size:0.85rem;">${escapeHtml(r.author)}</strong>
                  <span style="color:var(--review-muted);font-size:0.72rem;">${formatReviewDate(r.createdAt)}</span>
                </div>
                <div style="font-size:0.85rem;color:var(--text-main);line-height:1.5;">${escapeHtml(r.text)}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

// XSS Prevention string sanitizer
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Reply form togglers
window.openReplyForm = function(commentId) {
  const formWrap = document.getElementById(`replyFormContainer_${commentId}`);
  if (formWrap) {
    formWrap.style.display = formWrap.style.display === 'block' ? 'none' : 'block';
  }
};

window.closeReplyForm = function(commentId) {
  const formWrap = document.getElementById(`replyFormContainer_${commentId}`);
  if (formWrap) formWrap.style.display = 'none';
};

window.handleReplySubmit = function(commentId, e) {
  e.preventDefault();
  const authorInput = document.getElementById(`replyAuthor_${commentId}`);
  const textInput = document.getElementById(`replyText_${commentId}`);
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;

  const author = authorInput ? authorInput.value.trim() : '';
  const text = textInput ? textInput.value.trim() : '';

  if (!author || !text) return;

  const res = AudioReviewsStore.submitComment(activeBookKey, { author, text, parentId: commentId });
  if (res.success) {
    closeReplyForm(commentId);
    renderCommentsList(activeBookKey);
    showToast(t.formSuccessMsg);
  }
};

// Filter & Sort handlers
window.filterReviewsStar = function(filterVal, btn) {
  reviewsStarFilter = filterVal;
  document.querySelectorAll('#reviewsFilterPills .review-pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCommentsList(activeBookKey);
};

window.handleReviewsSortChange = function(sortVal) {
  reviewsSortBy = sortVal;
  renderCommentsList(activeBookKey);
};

window.handleLoadMoreReviews = function() {
  reviewsVisibleLimit += 6;
  renderCommentsList(activeBookKey);
};

// Hover and keyboard accessibility effects for rating stars
function setupStarHoverEvents() {
  const buttons = document.querySelectorAll('#starRatingGroup .star-btn');
  buttons.forEach((btn, idx) => {
    btn.addEventListener('mouseenter', () => {
      const starNum = parseInt(btn.getAttribute('data-star'), 10);
      window.previewStarHover(starNum);
    });

    btn.addEventListener('mouseleave', () => {
      window.previewStarHover(0);
    });

    btn.addEventListener('keydown', (e) => {
      let targetIdx = idx;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        targetIdx = Math.min(buttons.length - 1, idx + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        targetIdx = Math.max(0, idx - 1);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const starNum = parseInt(btn.getAttribute('data-star'), 10);
        window.selectWorkRating(starNum);
        return;
      }
      if (targetIdx !== idx) {
        e.preventDefault();
        buttons[targetIdx].focus();
        const starNum = parseInt(buttons[targetIdx].getAttribute('data-star'), 10);
        window.previewStarHover(starNum);
      }
    });
  });
}

// ==========================================================================
// ACTIONS & USER INTERACTION
// ==========================================================================

function updateDetailFavBtn() {
  const isFav = isFavorite(activeBookKey);
  const icon = document.getElementById('detailFavIcon');
  const text = document.getElementById('detailFavText');
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  if (icon) icon.textContent = isFav ? '♥' : '♡';
  if (text) text.textContent = isFav ? t.favSaved : t.favAdd;
}

window.toggleDetailFav = function() {
  const added = toggleFavorite(activeBookKey);
  updateDetailFavBtn();
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  showToast(added ? t.toastFavAdded : t.toastFavRemoved);
  renderCatalogGrid(activeCategory, activeSearchQuery);
};

window.shareCurrentAudio = function() {
  const book = AUDIO_BOOKS_DATA[activeBookKey] || AUDIO_BOOKS_DATA.milena;
  const bTitle = book.title[currentLang] || book.title.ar;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  const shareUrl = `${window.location.origin}/audio/?book=${activeBookKey}`;
  const shareData = {
    title: `${bTitle} | Hikma & Nour`,
    text: `استمع إلى ${bTitle} عبر مكتبة حكمة ونور الصوتية ✨:`,
    url: shareUrl
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showToast(t.toastCopied);
    });
  }
};

window.copyWidgetQuote = function() {
  const book = AUDIO_BOOKS_DATA[activeBookKey] || AUDIO_BOOKS_DATA.milena;
  const qText = book.quote[currentLang] || book.quote.ar;
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  navigator.clipboard.writeText(qText).then(() => {
    showToast(t.toastQuoteCopied);
  });
};

// ==========================================================================
// DYNAMIC SEO & JSON-LD SCHEMA UPDATER
// ==========================================================================

function updateSeoMetadata(book) {
  const t = AUDIO_I18N[currentLang] || AUDIO_I18N.ar;
  const pageTitle = document.getElementById('seoPageTitle');
  const pageDesc = document.getElementById('seoPageDesc');
  const ogTitle = document.getElementById('ogTitle');
  const ogDesc = document.getElementById('ogDesc');
  const ogUrl = document.getElementById('ogUrl');
  const twTitle = document.getElementById('twTitle');
  const twDesc = document.getElementById('twDesc');
  const schemaEl = document.getElementById('audioSchemaJson');

  if (!book) {
    if (pageTitle) pageTitle.textContent = t.seoTitle;
    if (pageDesc) pageDesc.content = t.seoDesc;
    if (ogTitle) ogTitle.content = t.seoTitle;
    if (ogDesc) ogDesc.content = t.seoDesc;
    if (ogUrl) ogUrl.content = `${window.location.origin}/audio/`;
    return;
  }

  const bTitle = book.title[currentLang] || book.title.ar;
  const bAuthor = book.author[currentLang] || book.author.ar;
  const bDesc = book.shortDesc[currentLang] || book.shortDesc.ar;
  const fullTitle = `${bTitle} — ${bAuthor} | Hikma & Nour`;

  if (pageTitle) pageTitle.textContent = fullTitle;
  if (pageDesc) pageDesc.content = bDesc;
  if (ogTitle) ogTitle.content = fullTitle;
  if (ogDesc) ogDesc.content = bDesc;
  if (ogUrl) ogUrl.content = `${window.location.origin}/audio/?book=${book.key}`;
  if (twTitle) twTitle.content = fullTitle;
  if (twDesc) twDesc.content = bDesc;

  if (schemaEl) {
    const summary = AudioReviewsStore.getRatingSummary(book.key);
    const schemaObj = {
      "@context": "https://schema.org",
      "@type": "Audiobook",
      "name": bTitle,
      "author": {
        "@type": "Person",
        "name": bAuthor
      },
      "description": bDesc,
      "inLanguage": "ar",
      "duration": book.totalDuration,
      "url": `${window.location.origin}/audio/?book=${book.key}`,
      "publisher": {
        "@type": "Organization",
        "name": "Hikma & Nour | Jardin des Pensées"
      }
    };

    // Only add aggregateRating if real ratings exist
    if (summary && summary.totalCount > 0) {
      schemaObj.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": summary.average.toString(),
        "ratingCount": summary.totalCount.toString()
      };
    }

    schemaEl.textContent = JSON.stringify(schemaObj);
  }
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  setupSearchInput();
  setupKeyboardTabs();
  setupStarHoverEvents();
  renderFeaturedCard();
  renderContinueListeningSection();
  renderCatalogGrid('all');

  // Check URL parameter for direct book deep-linking (?book=milena)
  const urlParams = new URLSearchParams(window.location.search);
  const bookParam = urlParams.get('book') || urlParams.get('id');
  if (bookParam && AUDIO_BOOKS_DATA[bookParam]) {
    setTimeout(() => {
      openBookDetail(bookParam);
    }, 100);
  }
});
