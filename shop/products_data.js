/**
 * HIKMA & NOUR — Centralized Product Catalogue
 * All shop products with full trilingual data (AR / FR / EN)
 * Import this file from shop_v2.js and product page JS.
 */

export const SHOP_PRODUCTS = [
  {
    id: 'prod_audio',
    slug: 'audio-sanctuary',
    type: 'digital',
    isFree: true,
    price: 0.00,
    fileUrl: '/audio/',
    image: '../../audio_sanctuary_hero.jpg',
    imageAlt: {
      ar: 'الاستوديو الصوتي — أجواء رواقية للتأمل',
      fr: 'Studio Audio — Ambiances stoïciennes',
      en: 'Audio Sanctuary — Stoic Soundscapes'
    },
    title: {
      ar: 'الاستوديو الصوتي والقلعة الداخلية',
      fr: 'Studio Audio & Citadelle Intérieure',
      en: 'Audio Sanctuary & Inner Citadel'
    },
    shortDesc: {
      ar: 'خافق الأجواء الرواقية للتركيز والتأمل — مجاني.',
      fr: 'Mixeur d\'ambiances stoïciennes pour se concentrer et méditer — Gratuit.',
      en: 'Stoic ambient soundscape mixer for focus and meditation — Free.'
    },
    longDesc: {
      ar: 'يجمع الاستوديو الصوتي بين أجواء الطبيعة الهادئة وحكمة الفلاسفة العظماء في تجربة تأمل فريدة. يمكنك اختيار أصوات الأمطار، النار، موجات 432Hz، ثم الاستماع إلى اقتباسات فلسفية مختارة تساعدك على الهدوء والتركيز. مثالي للدراسة، العمل العميق، أو التأمل اليومي.',
      fr: 'Le Studio Audio réunit des ambiances naturelles apaisantes et la sagesse des grands philosophes pour une expérience de méditation unique. Choisissez parmi la pluie, le feu, les fréquences 432Hz, puis écoutez des citations philosophiques soigneusement sélectionnées pour vous aider à vous concentrer et vous calmer. Idéal pour l\'étude, le travail profond ou la méditation quotidienne.',
      en: 'The Audio Sanctuary combines soothing natural ambiances with the wisdom of great philosophers for a unique meditation experience. Choose rain, fire, 432Hz frequencies, then listen to carefully selected philosophical quotes to help you find focus and calm. Perfect for studying, deep work, or daily meditation.'
    },
    format: 'Web App',
    pages: null,
    language: {
      ar: 'عربي / Français / English',
      fr: 'Arabe / Français / Anglais',
      en: 'Arabic / French / English'
    },
    category: 'digital',
    features: {
      ar: [
        'تجربة صوتية غامرة وهادئة',
        'خلط أجواء متعددة (مطر، نار، 432Hz)',
        'اقتباسات فلسفية مختارة من كبار المفكرين',
        'مجاني وغير محدود الاستخدام',
        'يعمل على الموبايل والكمبيوتر',
        'لا تسجيل مطلوب'
      ],
      fr: [
        'Expérience audio immersive et apaisante',
        'Mélange d\'ambiances multiples (pluie, feu, 432Hz)',
        'Citations philosophiques choisies parmi les grands penseurs',
        'Gratuit et sans limitation d\'utilisation',
        'Fonctionne sur mobile et ordinateur',
        'Aucune inscription requise'
      ],
      en: [
        'Immersive and calming audio experience',
        'Multiple soundscape mixing (Rain, Fire, 432Hz)',
        'Philosophical quotes from the greatest thinkers',
        'Free and unlimited use',
        'Works on mobile and desktop',
        'No registration required'
      ]
    },
    relatedIds: ['prod_calendar', 'prod_guide', 'prod_marc_aurele_pdf'],
    internalUrl: '../../audio/',
    seoTitle: {
      ar: 'الاستوديو الصوتي الرواقي | حكمة ونور',
      fr: 'Studio Audio Stoïcien | Hikma & Nour',
      en: 'Stoic Audio Sanctuary | Hikma & Nour'
    },
    seoDesc: {
      ar: 'اكتشف الاستوديو الصوتي الرواقي — أجواء هادئة وحكمة فلسفية للتأمل والتركيز. مجاني تمامًا.',
      fr: 'Découvrez le Studio Audio Stoïcien — ambiances apaisantes et sagesse philosophique pour méditer et se concentrer. Entièrement gratuit.',
      en: 'Discover the Stoic Audio Sanctuary — calming soundscapes and philosophical wisdom for focus and meditation. Completely free.'
    }
  },
  {
    id: 'prod_calendar',
    slug: 'philosophical-calendar',
    type: 'digital',
    isFree: true,
    price: 0.00,
    fileUrl: '/calendar/',
    image: '../../philosophical_calendar_hero.jpg',
    imageAlt: {
      ar: 'التقويم الفلسفي اليومي — ٣٦٥ يوماً من الحكمة',
      fr: 'Calendrier Philosophique — 365 jours de sagesse',
      en: 'Philosophical Calendar — 365 days of wisdom'
    },
    title: {
      ar: 'التقويم الفلسفي اليومي (٣٦٥ يوماً)',
      fr: 'Calendrier Philosophique (365 Jours)',
      en: 'Philosophical Calendar (365 Days)'
    },
    shortDesc: {
      ar: '٣٦٥ يوماً من الحكمة الرواقية للتأمل اليومي — مجاني.',
      fr: '365 jours de sagesse stoïcienne pour nourrir votre esprit au quotidien — Gratuit.',
      en: '365 days of stoic wisdom to nourish your mind daily — Free.'
    },
    longDesc: {
      ar: 'التقويم الفلسفي هو مرافقك اليومي للحكمة. ٣٦٥ يوماً من الأفكار العميقة والمقتطفات الفلسفية المختارة من سقراط، أرسطو، ماركوس أوريليوس، إبيكتيتوس، سينيكا وغيرهم. كل يوم فكرة تساعدك على رؤية العالم بعيون أعمق وبناء قدرتك على الهدوء والحكمة.',
      fr: 'Le Calendrier Philosophique est votre compagnon quotidien de sagesse. 365 jours de réflexions profondes et de citations philosophiques soigneusement choisies parmi Socrate, Aristote, Marc Aurèle, Épictète, Sénèque et bien d\'autres. Chaque jour, une pensée qui vous aide à voir le monde avec plus de profondeur et à construire votre sérénité intérieure.',
      en: 'The Philosophical Calendar is your daily companion of wisdom. 365 days of deep reflections and philosophical quotes carefully chosen from Socrates, Aristotle, Marcus Aurelius, Epictetus, Seneca and more. Each day, a thought that helps you see the world with greater depth and build your inner calm.'
    },
    format: 'PDF + Web',
    pages: 365,
    language: {
      ar: 'عربي',
      fr: 'Arabe / Français',
      en: 'Arabic / French'
    },
    category: 'digital',
    features: {
      ar: [
        '٣٦٥ اقتباساً فلسفياً مختاراً بعناية',
        'تغطية شاملة لكبار الفلاسفة الغربيين',
        'قابل للطباعة بصيغة PDF',
        'مجاني تمامًا',
        'مثالي للتأمل الصباحي اليومي',
        'تصميم أنيق ومقروء'
      ],
      fr: [
        '365 citations philosophiques soigneusement choisies',
        'Couverture complète des grands philosophes occidentaux',
        'Imprimable en PDF',
        'Entièrement gratuit',
        'Idéal pour la méditation matinale quotidienne',
        'Design élégant et lisible'
      ],
      en: [
        '365 carefully chosen philosophical quotes',
        'Full coverage of the greatest Western philosophers',
        'Printable in PDF format',
        'Completely free',
        'Ideal for daily morning reflection',
        'Elegant and readable design'
      ]
    },
    relatedIds: ['prod_audio', 'prod_marc_aurele_pdf', 'prod_guide'],
    internalUrl: '../../calendar/',
    seoTitle: {
      ar: 'التقويم الفلسفي اليومي ٣٦٥ | حكمة ونور',
      fr: 'Calendrier Philosophique 365 Jours | Hikma & Nour',
      en: 'Philosophical Calendar 365 Days | Hikma & Nour'
    },
    seoDesc: {
      ar: 'تقويم فلسفي يومي مجاني — ٣٦٥ يوماً من حكمة سقراط، ماركوس أوريليوس، إبيكتيتوس وغيرهم.',
      fr: 'Calendrier philosophique quotidien gratuit — 365 jours de sagesse de Socrate, Marc Aurèle, Épictète et bien d\'autres.',
      en: 'Free daily philosophical calendar — 365 days of wisdom from Socrates, Marcus Aurelius, Epictetus and more.'
    }
  },
  {
    id: 'prod_7_habits',
    slug: '7-habits-potential',
    type: 'digital',
    isFree: true,
    price: 0.00,
    fileUrl: '/articles/7-habits/',
    image: '../../habits_library_hero.jpg',
    imageAlt: {
      ar: '٧ عادات تدمر إمكانياتك — مقال فلسفي',
      fr: '7 Habitudes qui Détruisent votre Potentiel — Article',
      en: '7 Habits That Destroy Your Potential — Article'
    },
    title: {
      ar: '٧ عادات تدمر إمكانياتك دون أن تشعر',
      fr: '7 Habitudes qui Détruisent votre Potentiel',
      en: '7 Habits That Destroy Your Potential'
    },
    shortDesc: {
      ar: 'كيف تكسر العادات السيئة بحكمة الفلاسفة العظماء — مقال مجاني.',
      fr: 'Comment surpasser vos mauvaises habitudes grâce à la sagesse des grands penseurs — Article gratuit.',
      en: 'How to break bad habits through the wisdom of the greatest thinkers — Free article.'
    },
    longDesc: {
      ar: 'يستكشف هذا المقال المعمق ٧ عادات شائعة تدمر الإمكانات البشرية دون أن يشعر بها أصحابها. من سرقة التشتت والتسويف إلى الخوف من الفشل والمقارنة المستمرة، يحلل المقال كل عادة من منظور فلسفي عميق ويقدم بدائل عملية مستوحاة من الرواقية وكبار علماء النفس.',
      fr: 'Cet article approfondi explore 7 habitudes courantes qui détruisent le potentiel humain sans que leurs porteurs s\'en rendent compte. De la distraction constante et la procrastination à la peur de l\'échec et la comparaison chronique, l\'article analyse chaque habitude d\'un point de vue philosophique profond et propose des alternatives pratiques inspirées du stoïcisme et des grands psychologues.',
      en: 'This in-depth article explores 7 common habits that silently destroy human potential. From constant distraction and procrastination to fear of failure and chronic comparison, each habit is analyzed through a deep philosophical lens with practical alternatives inspired by Stoicism and the greatest psychologists.'
    },
    format: 'Article illustré',
    pages: 12,
    language: {
      ar: 'عربي',
      fr: 'Arabe',
      en: 'Arabic'
    },
    category: 'digital',
    features: {
      ar: [
        'تحليل فلسفي ونفسي معمق',
        'أمثلة من حياة الفلاسفة والمفكرين الكبار',
        'بدائل عملية قابلة للتطبيق الفوري',
        'مجاني تمامًا',
        'أكثر من 12 صفحة من المحتوى الأصيل',
        'مصوّر بجودة عالية'
      ],
      fr: [
        'Analyse philosophique et psychologique approfondie',
        'Exemples tirés de la vie des grands philosophes',
        'Alternatives pratiques applicables immédiatement',
        'Entièrement gratuit',
        'Plus de 12 pages de contenu original',
        'Illustré avec soin'
      ],
      en: [
        'Deep philosophical and psychological analysis',
        'Examples from the lives of great philosophers',
        'Practical alternatives for immediate application',
        'Completely free',
        'Over 12 pages of original content',
        'Carefully illustrated'
      ]
    },
    relatedIds: ['prod_guide', 'prod_marc_aurele_pdf', 'prod_schopenhauer'],
    internalUrl: '../../articles/7-habits/',
    seoTitle: {
      ar: '٧ عادات تدمر إمكانياتك | حكمة ونور',
      fr: '7 Habitudes qui Détruisent votre Potentiel | Hikma & Nour',
      en: '7 Habits That Destroy Your Potential | Hikma & Nour'
    },
    seoDesc: {
      ar: 'مقال فلسفي مجاني يكشف ٧ عادات تدمر إمكانياتك — تحليل عميق وبدائل عملية من الرواقية وعلم النفس.',
      fr: 'Article philosophique gratuit révélant 7 habitudes destructrices — analyse approfondie et alternatives pratiques inspirées du stoïcisme.',
      en: 'Free philosophical article revealing 7 destructive habits — deep analysis and practical alternatives inspired by Stoicism.'
    }
  },
  {
    id: 'prod_marc_aurele_pdf',
    slug: 'marcus-aurelius-ebook',
    type: 'digital',
    isFree: true,
    price: 0.00,
    fileUrl: '/files/e-book-marc-aurele.pdf',
    image: '../../marc_aurelius_writing.jpg',
    imageAlt: {
      ar: 'ماركوس أوريليوس — دليل الرواقية PDF',
      fr: 'Marc Aurèle — Guide Stoïcien PDF',
      en: 'Marcus Aurelius — Stoic Guide PDF'
    },
    title: {
      ar: 'كتاب ماركوس أوريليوس الإلكتروني (PDF)',
      fr: 'E-book Marc Aurèle — Guide Stoïcien (PDF)',
      en: 'Marcus Aurelius E-book — Stoic Guide (PDF)'
    },
    shortDesc: {
      ar: 'دليل الرواقية الكامل مع تأملات ماركوس أوريليوس وتمارين تطبيقية — مجاني.',
      fr: 'Guide stoïcien complet avec les Pensées de Marc Aurèle et exercices pratiques — Gratuit.',
      en: 'Complete stoic guide with Marcus Aurelius\'s Meditations and practical exercises — Free.'
    },
    longDesc: {
      ar: 'يضم هذا الكتاب الإلكتروني مختارات من تأملات ماركوس أوريليوس بأسلوب معاصر وقابل للتطبيق في الحياة اليومية. يتناول المواضيع الكبرى كالتحكم في الذات، ومواجهة الفناء، وحب الأقدار، والتعامل مع الآخرين، مع تمارين رواقية عملية لكل باب. مثالي لمن يريد اكتشاف الفلسفة الرواقية بعمق.',
      fr: 'Ce livre numérique rassemble des extraits des Pensées de Marc Aurèle dans un style contemporain et applicable à la vie quotidienne. Il aborde les grands thèmes comme la maîtrise de soi, l\'acceptation de la mort, l\'amour du destin et les relations avec autrui, avec des exercices stoïciens pratiques pour chaque chapitre. Idéal pour qui souhaite découvrir la philosophie stoïcienne en profondeur.',
      en: 'This digital book gathers excerpts from Marcus Aurelius\'s Meditations in a contemporary style applicable to daily life. It covers major themes like self-mastery, acceptance of mortality, love of fate, and relationships with others, with practical Stoic exercises for each chapter. Ideal for those wishing to discover Stoic philosophy in depth.'
    },
    format: 'PDF',
    pages: 48,
    language: {
      ar: 'عربي / Français',
      fr: 'Arabe / Français',
      en: 'Arabic / French'
    },
    category: 'digital',
    features: {
      ar: [
        '48 صفحة من المحتوى الفلسفي الأصيل',
        'مختارات من تأملات ماركوس أوريليوس',
        'شرح معاصر قابل للتطبيق اليومي',
        'تمارين رواقية عملية',
        'تصميم أنيق قابل للطباعة',
        'مجاني تمامًا'
      ],
      fr: [
        '48 pages de contenu philosophique original',
        'Extraits des Pensées de Marc Aurèle',
        'Explication contemporaine applicable au quotidien',
        'Exercices stoïciens pratiques',
        'Design élégant et imprimable',
        'Entièrement gratuit'
      ],
      en: [
        '48 pages of original philosophical content',
        'Excerpts from Marcus Aurelius\'s Meditations',
        'Contemporary explanation applicable to daily life',
        'Practical Stoic exercises',
        'Elegant and printable design',
        'Completely free'
      ]
    },
    relatedIds: ['prod_guide', 'prod_schopenhauer', 'prod_calendar'],
    seoTitle: {
      ar: 'كتاب ماركوس أوريليوس الإلكتروني PDF | حكمة ونور',
      fr: 'E-book Marc Aurèle PDF | Hikma & Nour',
      en: 'Marcus Aurelius E-book PDF | Hikma & Nour'
    },
    seoDesc: {
      ar: 'كتاب إلكتروني مجاني — مختارات من تأملات ماركوس أوريليوس مع الشرح والتمارين الرواقية. 48 صفحة.',
      fr: 'Ebook gratuit — extraits des Pensées de Marc Aurèle avec explications et exercices stoïciens. 48 pages.',
      en: 'Free ebook — excerpts from Marcus Aurelius\'s Meditations with explanations and Stoic exercises. 48 pages.'
    }
  },
  {
    id: 'prod_schopenhauer',
    slug: 'schopenhauer-quotes',
    type: 'digital',
    isFree: true,
    price: 0.00,
    fileUrl: '/files/20-citations-schopenhauer.html',
    image: '../../schopenhauer_library_portrait.jpg',
    imageAlt: {
      ar: '20 اقتباساً لآرثر شوبنهاور — كتاب إلكتروني',
      fr: '20 Citations de Schopenhauer — E-book',
      en: '20 Quotes by Schopenhauer — Ebook'
    },
    title: {
      ar: '20 اقتباساً لآرثر شوبنهاور',
      fr: '20 Citations de Schopenhauer',
      en: '20 Quotes by Schopenhauer'
    },
    shortDesc: {
      ar: '20 اقتباساً مضيئاً مع الشرح العميق والتأمل — مجاني.',
      fr: '20 citations éclairantes avec analyses approfondies et réflexions — Gratuit.',
      en: '20 illuminating quotes with deep analysis and reflections — Free.'
    },
    longDesc: {
      ar: 'يجمع هذا الكتاب الإلكتروني أكثر 20 اقتباساً تأثيراً لآرثر شوبنهاور، أحد أعمق الفلاسفة وأكثرهم صراحةً. يُرفق كل اقتباس بتحليل معمق وسياق فلسفي ودرس عملي يمكن تطبيقه في الحياة اليومية، إضافةً إلى سؤال للتأمل والتفكير الذاتي.',
      fr: 'Ce livre numérique rassemble les 20 citations les plus influentes d\'Arthur Schopenhauer, l\'un des philosophes les plus profonds et les plus directs. Chaque citation est accompagnée d\'une analyse approfondie, d\'un contexte philosophique et d\'une leçon pratique applicable au quotidien, ainsi qu\'une question de réflexion personnelle.',
      en: 'This ebook gathers the 20 most influential quotes by Arthur Schopenhauer, one of the most profound and direct philosophers. Each quote is accompanied by an in-depth analysis, philosophical context, and a practical lesson applicable to daily life, plus a personal reflection question.'
    },
    format: 'PDF',
    pages: 32,
    language: {
      ar: 'عربي',
      fr: 'Arabe',
      en: 'Arabic'
    },
    category: 'digital',
    features: {
      ar: [
        '20 اقتباساً فلسفياً مختاراً بعناية',
        'تحليل معمق لكل اقتباس',
        'سياق فلسفي وتاريخي',
        'درس عملي قابل للتطبيق',
        'أسئلة للتأمل الذاتي',
        'مجاني تمامًا'
      ],
      fr: [
        '20 citations philosophiques soigneusement sélectionnées',
        'Analyse approfondie de chaque citation',
        'Contexte philosophique et historique',
        'Leçon pratique et applicable',
        'Questions de réflexion personnelle',
        'Entièrement gratuit'
      ],
      en: [
        '20 carefully selected philosophical quotes',
        'In-depth analysis of each quote',
        'Philosophical and historical context',
        'Practical and applicable lesson',
        'Personal reflection questions',
        'Completely free'
      ]
    },
    relatedIds: ['prod_marc_aurele_pdf', 'prod_guide', 'prod_7_habits'],
    seoTitle: {
      ar: '20 اقتباساً لشوبنهاور | حكمة ونور',
      fr: '20 Citations de Schopenhauer | Hikma & Nour',
      en: '20 Quotes by Schopenhauer | Hikma & Nour'
    },
    seoDesc: {
      ar: 'كتاب إلكتروني مجاني — 20 اقتباساً مضيئاً لشوبنهاور مع الشرح والتحليل والتأمل.',
      fr: 'Ebook gratuit — 20 citations éclairantes de Schopenhauer avec analyses, contexte et réflexions.',
      en: 'Free ebook — 20 illuminating Schopenhauer quotes with analysis, context, and reflection.'
    }
  },
  {
    id: 'prod_guide',
    slug: 'stoic-guide',
    type: 'digital',
    isFree: true,
    price: 0.00,
    fileUrl: '/files/stoicisme-force-calme.html',
    image: '../../stoicisme-modern.jpg',
    imageAlt: {
      ar: 'دليل الرواقية الكامل — حكمة ونور',
      fr: 'Guide Stoïcien Complet — Hikma & Nour',
      en: 'Complete Stoic Guide — Hikma & Nour'
    },
    title: {
      ar: 'دليل الرواقية الكامل',
      fr: 'Guide Stoïcien Complet',
      en: 'Complete Stoic Guide'
    },
    shortDesc: {
      ar: 'دليل شامل من 50 صفحة لبناء قلعة عقلك ومواجهة المخاوف — مجاني.',
      fr: 'Guide complet de 50 pages pour bâtir votre citadelle intérieure et maîtriser vos peurs — Gratuit.',
      en: 'Comprehensive 50-page guide for building your inner citadel and conquering your fears — Free.'
    },
    longDesc: {
      ar: 'الدليل الرواقي الكامل هو رحلة عميقة في تعاليم إبيكتيتوس، ماركوس أوريليوس وسينيكا. يتناول ٨ محاور أساسية: التحكم في المشاعر، قبول الأقدار، بناء الانضباط، مواجهة الخوف، السلام الداخلي، قوة الحاضر، العلاقات الفلسفية، والهدوء تحت الضغط. مع تمارين يومية وأسئلة تطبيقية.',
      fr: 'Le Guide Stoïcien Complet est un voyage profond dans les enseignements d\'Épictète, Marc Aurèle et Sénèque. Il couvre 8 axes fondamentaux : la maîtrise des émotions, l\'acceptation du destin, la construction de la discipline, l\'affrontement de la peur, la paix intérieure, la puissance du présent, les relations philosophiques, et la sérénité sous pression. Avec des exercices quotidiens et des questions d\'application.',
      en: 'The Complete Stoic Guide is a deep journey through the teachings of Epictetus, Marcus Aurelius, and Seneca. It covers 8 fundamental areas: mastering emotions, accepting fate, building discipline, facing fear, inner peace, the power of the present, philosophical relationships, and serenity under pressure. With daily exercises and application questions.'
    },
    format: 'PDF',
    pages: 50,
    language: {
      ar: 'عربي',
      fr: 'Arabe',
      en: 'Arabic'
    },
    category: 'digital',
    features: {
      ar: [
        '50 صفحة من الفلسفة الرواقية العملية',
        '٨ محاور أساسية للتطور الشخصي',
        'تمارين يومية قابلة للتطبيق',
        'أسئلة للتأمل والتطبيق',
        'يستند إلى إبيكتيتوس، ماركوس أوريليوس وسينيكا',
        'مجاني تمامًا'
      ],
      fr: [
        '50 pages de philosophie stoïcienne pratique',
        '8 axes fondamentaux de développement personnel',
        'Exercices quotidiens applicables',
        'Questions de réflexion et d\'application',
        'Basé sur Épictète, Marc Aurèle et Sénèque',
        'Entièrement gratuit'
      ],
      en: [
        '50 pages of practical Stoic philosophy',
        '8 fundamental axes of personal development',
        'Daily applicable exercises',
        'Reflection and application questions',
        'Based on Epictetus, Marcus Aurelius, and Seneca',
        'Completely free'
      ]
    },
    relatedIds: ['prod_marc_aurele_pdf', 'prod_calendar', 'prod_schopenhauer'],
    seoTitle: {
      ar: 'دليل الرواقية الكامل | حكمة ونور',
      fr: 'Guide Stoïcien Complet | Hikma & Nour',
      en: 'Complete Stoic Guide | Hikma & Nour'
    },
    seoDesc: {
      ar: 'دليل الرواقية الكامل — 50 صفحة من الحكمة العملية مستوحاة من إبيكتيتوس، ماركوس أوريليوس وسينيكا. مجاني.',
      fr: 'Guide Stoïcien Complet — 50 pages de sagesse pratique inspirées d\'Épictète, Marc Aurèle et Sénèque. Gratuit.',
      en: 'Complete Stoic Guide — 50 pages of practical wisdom inspired by Epictetus, Marcus Aurelius, and Seneca. Free.'
    }
  }
];

/**
 * Get product by slug
 * @param {string} slug
 * @returns {Object|null}
 */
export function getProductBySlug(slug) {
  return SHOP_PRODUCTS.find(p => p.slug === slug) || null;
}

/**
 * Get product by ID
 * @param {string} id
 * @returns {Object|null}
 */
export function getProductById(id) {
  return SHOP_PRODUCTS.find(p => p.id === id) || null;
}

/**
 * Get related products for a product
 * @param {Object} product
 * @returns {Array}
 */
export function getRelatedProducts(product) {
  if (!product || !product.relatedIds) return [];
  return product.relatedIds
    .map(id => SHOP_PRODUCTS.find(p => p.id === id))
    .filter(Boolean);
}

export default SHOP_PRODUCTS;
