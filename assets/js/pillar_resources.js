/**
 * ============================================================
 * HIKMA & NOUR — PILLAR RESOURCES MODULE (V6 PREMIUM)
 * Compléments Audio, Quiz & Citations pour toutes les pages piliers
 * ============================================================
 */

export const PILLAR_RESOURCES_DATA = {
  philosophie: {
    audio: {
      status: 'available',
      bookKey: 'etranger',
      url: '../audio/?book=etranger',
      ar: {
        badge: '🎧 كتاب صوتي فلسفي',
        title: 'الغريب — ألبير كامو',
        desc: 'استمع إلى رواية «الغريب» لكامو، رحلة فلسفية عميقة في عبثية الوجود والوعي الإنساني والحرية الداخلية.',
        meta: '⏱️ 16 دقيقة • 11 فصلاً',
        btn: 'استمع إلى التسجيل الصوتي 🎧'
      },
      fr: {
        badge: '🎧 Livre audio philosophique',
        title: 'L\'Étranger — Albert Camus',
        desc: 'Écoutez « L\'Étranger » de Camus, une exploration philosophique majeure de l\'absurde, du sentiment d\'étrangeté et de la liberté.',
        meta: '⏱️ 16 min • 11 chapitres',
        btn: 'Écouter le livre audio 🎧'
      },
      en: {
        badge: '🎧 Philosophical Audiobook',
        title: 'The Stranger — Albert Camus',
        desc: 'Listen to Albert Camus\'s "The Stranger", a profound journey into the absurd, existential freedom, and the human condition.',
        meta: '⏱️ 16 min • 11 chapters',
        btn: 'Listen to the Audiobook 🎧'
      }
    },
    quiz: {
      status: 'available',
      url: '../quizzes/which-philosopher-are-you.html',
      ar: {
        badge: '🧩 اختبار تفاعلي',
        title: 'أي فيلسوف يشبه شخصيتك؟',
        desc: 'اكتشف الفيلسوف الأقرب إلى نمط تفكيرك ورؤيتك للحياة والقرارات اليومية من خلال هذا الاختبار الممتع.',
        meta: '❓ 5 أسئلة تأملية',
        btn: 'ابدأ الاختبار الفلسفي ←'
      },
      fr: {
        badge: '🧩 Quiz interactif',
        title: 'Quel philosophe correspond à votre personnalité ?',
        desc: 'Découvrez la figure philosophique la plus proche de votre manière de penser et d\'appréhender le monde.',
        meta: '❓ 5 questions réflexives',
        btn: 'Commencer le quiz ←'
      },
      en: {
        badge: '🧩 Interactive Quiz',
        title: 'Which Philosopher Matches Your Personality?',
        desc: 'Discover which iconic philosophical figure most closely reflects your worldview and thought process.',
        meta: '❓ 5 reflective questions',
        btn: 'Start the Quiz ←'
      }
    },
    quotes: {
      status: 'available',
      url: '../quotes/',
      ar: {
        badge: '📜 مختارات فلسفية',
        title: 'اقتباسات في الوجود والمعنى',
        btn: 'استكشف مكتبة الاقتباسات ←',
        items: [
          {
            text: 'في عمق الشتاء، تعلمت أخيرًا أن في داخلي صيفًا لا يُقهر.',
            author: 'ألبير كامو',
            link: null
          },
          {
            text: 'من يملك "لماذا" يعيش من أجلها، يمكنه تحمل أي "كيف" تقريبًا.',
            author: 'فريدريك نيتشه',
            link: null
          },
          {
            text: 'الحياة التي لا تُفحص لا تستحق أن تُعاش.',
            author: 'سقراط',
            link: null
          }
        ]
      },
      fr: {
        badge: '📜 Sélection philosophique',
        title: 'Citations sur l\'existence & la liberté',
        btn: 'Explorer toutes les citations ←',
        items: [
          {
            text: 'Au milieu de l\'hiver, j\'ai découvert en moi un invincible été.',
            author: 'Albert Camus',
            link: null
          },
          {
            text: 'Celui qui a un pourquoi qui lui tient lieu de but peut s\'accommoder de presque tous les comment.',
            author: 'Friedrich Nietzsche',
            link: null
          },
          {
            text: 'Une vie sans examen ne vaut pas la peine d\'être vécue.',
            author: 'Socrate',
            link: null
          }
        ]
      },
      en: {
        badge: '📜 Philosophical Selection',
        title: 'Quotes on Existence & Meaning',
        btn: 'Explore All Quotes ←',
        items: [
          {
            text: 'In the depth of winter, I finally learned that within me there lay an invincible summer.',
            author: 'Albert Camus',
            link: null
          },
          {
            text: 'He who has a why to live can bear almost any how.',
            author: 'Friedrich Nietzsche',
            link: null
          },
          {
            text: 'The unexamined life is not worth living.',
            author: 'Socrates',
            link: null
          }
        ]
      }
    }
  },

  psychologie: {
    audio: {
      status: 'available',
      bookKey: 'crime_punishment',
      url: '../audio/?book=crime_punishment',
      ar: {
        badge: '🎧 كتاب صوتي سيكولوجي',
        title: 'الجريمة والعقاب — دوستويفسكي',
        desc: 'استمع إلى رائعة دوستويفسكي، دراسة سيكولوجية عميقة في دوافع النفس البشرية والصراع الأخلاقي والضمير.',
        meta: '⏱️ ملخص شامل • 11 فصلاً',
        btn: 'استمع إلى التسجيل الصوتي 🎧'
      },
      fr: {
        badge: '🎧 Livre audio psychologique',
        title: 'Crime et Châtiment — Dostoïevski',
        desc: 'Écoutez l\'analyse psychologique de Dostoïevski sur la culpabilité, le conflit moral et la conscience humaine.',
        meta: '⏱️ Version complète • 11 chapitres',
        btn: 'Écouter le livre audio 🎧'
      },
      en: {
        badge: '🎧 Psychological Audiobook',
        title: 'Crime and Punishment — Dostoevsky',
        desc: 'Listen to Dostoevsky\'s masterpiece on human motives, moral conscience, and inner turmoil.',
        meta: '⏱️ Comprehensive edition • 11 chapters',
        btn: 'Listen to the Audiobook 🎧'
      }
    },
    quiz: {
      status: 'coming_soon',
      ar: {
        badge: '🧩 اختبار سيكولوجي',
        title: 'اختبارات علم النفس',
        desc: 'نماذج تقييم واختبارات تفاعلية في الذكاء العاطفي، والأنماط السلوكية، وإدارة الضغوط قيد الإعداد والإطلاق.',
        statusLabel: 'الاختبار قريبًا ⏳'
      },
      fr: {
        badge: '🧩 Quiz psychologique',
        title: 'Tests de Psychologie',
        desc: 'Des évaluations interactives sur l\'intelligence émotionnelle, les dynamiques relationnelles et la gestion du stress arrivent prochainement.',
        statusLabel: 'Quiz à venir ⏳'
      },
      en: {
        badge: '🧩 Psychological Quiz',
        title: 'Psychology Assessments',
        desc: 'Interactive assessments on emotional intelligence, behavioral patterns, and stress resilience are currently in development.',
        statusLabel: 'Quiz Coming Soon ⏳'
      }
    },
    quotes: {
      status: 'available',
      url: '../quotes/',
      ar: {
        badge: '📜 إضاءات سيكولوجية',
        title: 'اقتباسات في النفس والسلوك',
        btn: 'استكشف مكتبة الاقتباسات ←',
        items: [
          {
            text: 'من ينظر إلى الخارج يحلم، ومن ينظر إلى الداخل يستيقظ.',
            author: 'كارل يونغ',
            link: null
          },
          {
            text: 'من مواطن ضعفك ستخرج قوتك الأعمق.',
            author: 'سيغموند فرويد',
            link: null
          },
          {
            text: 'بين المثير والاستجابة توجد مساحة، وفي تلك المساحة تكمن حريتنا في الاختيار.',
            author: 'فيكتور فرانكل',
            link: '../thinkers/viktor-frankl/'
          }
        ]
      },
      fr: {
        badge: '📜 Éclairages psychologiques',
        title: 'Citations sur la psyché & les émotions',
        btn: 'Explorer toutes les citations ←',
        items: [
          {
            text: 'Celui qui regarde à l\'extérieur rêve, celui qui regarde à l\'intérieur s\'éveille.',
            author: 'Carl Jung',
            link: null
          },
          {
            text: 'C\'est de vos vulnérabilités que sortira votre force.',
            author: 'Sigmund Freud',
            link: null
          },
          {
            text: 'Entre le stimulus et la réponse, il y a un espace où réside notre pouvoir de choisir.',
            author: 'Viktor Frankl',
            link: '../thinkers/viktor-frankl/'
          }
        ]
      },
      en: {
        badge: '📜 Psychological Insights',
        title: 'Quotes on Mind & Emotions',
        btn: 'Explore All Quotes ←',
        items: [
          {
            text: 'Who looks outside, dreams; who looks inside, awakes.',
            author: 'Carl Jung',
            link: null
          },
          {
            text: 'Out of your vulnerabilities will come your strength.',
            author: 'Sigmund Freud',
            link: null
          },
          {
            text: 'Between stimulus and response there is a space. In that space is our power to choose.',
            author: 'Viktor Frankl',
            link: '../thinkers/viktor-frankl/'
          }
        ]
      }
    }
  },

  'developpement-personnel': {
    audio: {
      status: 'available',
      bookKey: 'alchemist',
      url: '../audio/?book=alchemist',
      ar: {
        badge: '🎧 كتاب صوتي ملهم',
        title: 'الخيميائي — باولو كويلو',
        desc: 'استمع إلى «الخيميائي»، رحلة رمزية خالدة في الانضباط الذاتي واليقظة والاستمرار في تحقيق الهدف والأسطورة الشخصية.',
        meta: '⏱️ 13 دقيقة • 5 فصول',
        btn: 'استمع إلى التسجيل الصوتي 🎧'
      },
      fr: {
        badge: '🎧 Livre audio inspirant',
        title: 'L\'Alchimiste — Paulo Coelho',
        desc: 'Écoutez « L\'Alchimiste », une œuvre majeure sur la persévérance, la clarté d\'intention et la construction de sa destinée.',
        meta: '⏱️ 13 min • 5 chapitres',
        btn: 'Écouter le livre audio 🎧'
      },
      en: {
        badge: '🎧 Inspiring Audiobook',
        title: 'The Alchemist — Paulo Coelho',
        desc: 'Listen to Paulo Coelho\'s "The Alchemist", a timeless tale of self-discipline, perseverance, and following one\'s personal legend.',
        meta: '⏱️ 13 min • 5 chapters',
        btn: 'Listen to the Audiobook 🎧'
      }
    },
    quiz: {
      status: 'coming_soon',
      ar: {
        badge: '🧩 اختبار العادات والإنتاجية',
        title: 'اختبارات الانضباط والعادات',
        desc: 'أدوات تشخيصية واختبارات لتقييم مستويات التركيز، وقوة العادات اليومية، ومقاومة التسويف قيد التطوير.',
        statusLabel: 'الاختبار قريبًا ⏳'
      },
      fr: {
        badge: '🧩 Quiz discipline & habitudes',
        title: 'Tests d\'Habitudes & Clarté',
        desc: 'Des outils d\'auto-évaluation sur la régularité, la gestion du temps et les routines quotidiennes arrivent très prochainement.',
        statusLabel: 'Quiz à venir ⏳'
      },
      en: {
        badge: '🧩 Habits & Focus Quiz',
        title: 'Habits & Discipline Tests',
        desc: 'Interactive assessments on habit building, daily consistency, and focus management are currently in preparation.',
        statusLabel: 'Quiz Coming Soon ⏳'
      }
    },
    quotes: {
      status: 'available',
      url: '../quotes/',
      ar: {
        badge: '📜 مبادئ النمو والانضباط',
        title: 'اقتباسات في العادات والنجاح المستدام',
        btn: 'استكشف مكتبة الاقتباسات ←',
        items: [
          {
            text: 'كل حياتنا، في شكلها العملي، ليست سوى كتلة من العادات المنظمة.',
            author: 'ويليام جيمس',
            link: '../thinkers/william-james/'
          },
          {
            text: 'الإيمان بقدرتك على النجاح هو المحرك الأساسي لتحقيق الأهداف وتجاوز الصعاب.',
            author: 'ألبرت باندورا',
            link: '../thinkers/albert-bandura/'
          },
          {
            text: 'الحماس شائع، لكن العزيمة والجلد هما العملة النادرة للنجاح المستدام.',
            author: 'أنجيلا داكورث',
            link: '../thinkers/angela-duckworth/'
          }
        ]
      },
      fr: {
        badge: '📜 Principes d\'action',
        title: 'Citations sur la discipline & la constance',
        btn: 'Explorer toutes les citations ←',
        items: [
          {
            text: 'Toute notre vie, pour autant qu\'elle a une forme définie, n\'est qu\'une masse d\'habitudes.',
            author: 'William James',
            link: '../thinkers/william-james/'
          },
          {
            text: 'La croyance en sa propre efficacité détermine la façon dont les individus pensent et agissent.',
            author: 'Albert Bandura',
            link: '../thinkers/albert-bandura/'
          },
          {
            text: 'L\'enthousiasme est courant. La persévérance et la ténacité sont rares.',
            author: 'Angela Duckworth',
            link: '../thinkers/angela-duckworth/'
          }
        ]
      },
      en: {
        badge: '📜 Principles of Growth',
        title: 'Quotes on Discipline & Consistency',
        btn: 'Explore All Quotes ←',
        items: [
          {
            text: 'All our life, so far as it has definite form, is but a mass of habits.',
            author: 'William James',
            link: '../thinkers/william-james/'
          },
          {
            text: 'Self-belief does not ensure success, but self-disbelief assuredly spawns failure.',
            author: 'Albert Bandura',
            link: '../thinkers/albert-bandura/'
          },
          {
            text: 'Enthusiasm is common. Endurance is rare.',
            author: 'Angela Duckworth',
            link: '../thinkers/angela-duckworth/'
          }
        ]
      }
    }
  },

  sagesse: {
    audio: {
      status: 'available',
      bookKey: 'vieux',
      url: '../audio/?book=vieux',
      ar: {
        badge: '🎧 قصة صوتية تأملية',
        title: 'الشيخ والبحر — إرنست همنغواي',
        desc: 'استمع إلى رائعة همنغواي، ملحمة إنسانية خالدة في الصبر، والكرامة الداخلية، والسكينة أمام تقلبات الزمن.',
        meta: '⏱️ 13 دقيقة • 5 فصول',
        btn: 'استمع إلى التسجيل الصوتي 🎧'
      },
      fr: {
        badge: '🎧 Récit audio méditatif',
        title: 'Le Vieil Homme et la Mer — Hemingway',
        desc: 'Écoutez le chef-d\'œuvre d\'Hemingway sur la persévérance, la dignité face à l\'épreuve et la paix intérieure.',
        meta: '⏱️ 13 min • 5 chapitres',
        btn: 'Écouter le livre audio 🎧'
      },
      en: {
        badge: '🎧 Contemplative Audiobook',
        title: 'The Old Man and the Sea — Hemingway',
        desc: 'Listen to Hemingway\'s classic on endurance, human dignity, and quiet strength amidst life\'s storms.',
        meta: '⏱️ 13 min • 5 chapters',
        btn: 'Listen to the Audiobook 🎧'
      }
    },
    quiz: {
      status: 'available',
      url: '../quizzes/inner-peace-level.html',
      ar: {
        badge: '🧩 اختبار السلام الداخلي',
        title: 'ما مستوى سلامك الداخلي؟',
        desc: 'قِس درجة اتزانك النفسي وقدرتك على الحفاظ على الهدوء والسكينة وسط ضغوط وتحديات الحياة اليومية.',
        meta: '❓ 5 أسئلة استكشافية',
        btn: 'ابدأ اختبار السلام الداخلي ←'
      },
      fr: {
        badge: '🧩 Quiz sérénité',
        title: 'Quel est votre niveau de paix intérieure ?',
        desc: 'Évaluez votre équilibre émotionnel et votre capacité à préserver le calme face aux aléas du quotidien.',
        meta: '❓ 5 questions d\'exploration',
        btn: 'Commencer le quiz ←'
      },
      en: {
        badge: '🧩 Inner Peace Quiz',
        title: 'What is Your Level of Inner Peace?',
        desc: 'Measure your psychological harmony and your ability to maintain calm through daily challenges.',
        meta: '❓ 5 insightful questions',
        btn: 'Start the Quiz ←'
      }
    },
    quotes: {
      status: 'available',
      url: '../quotes/',
      ar: {
        badge: '📜 حكمة خالدة',
        title: 'اقتباسات في الصبر والسكينة',
        btn: 'استكشف مكتبة الاقتباسات ←',
        items: [
          {
            text: 'أنت تملك السيطرة على عقلك، لا على الأحداث الخارجية؛ أدرك هذا وستجد القوة والسكينة.',
            author: 'ماركوس أوريليوس',
            link: null
          },
          {
            text: 'رحلة الألف ميل تبدأ بخطوة واحدة.',
            author: 'لاوتسو',
            link: null
          },
          {
            text: 'الصمت صديق مخلص لا يخون أبدًا.',
            author: 'كونفوشيوس',
            link: null
          }
        ]
      },
      fr: {
        badge: '📜 Sagesse intemporelle',
        title: 'Citations sur le calme & la patience',
        btn: 'Explorer toutes les citations ←',
        items: [
          {
            text: 'Tu as le pouvoir sur ton esprit, non sur les événements extérieurs. Comprends cela, et tu trouveras la force.',
            author: 'Marc Aurèle',
            link: null
          },
          {
            text: 'Un voyage de mille lieues commence toujours par un premier pas.',
            author: 'Lao Tseu',
            link: null
          },
          {
            text: 'Le silence est un ami qui ne trahit jamais.',
            author: 'Confucius',
            link: null
          }
        ]
      },
      en: {
        badge: '📜 Timeless Wisdom',
        title: 'Quotes on Serenity & Patience',
        btn: 'Explore All Quotes ←',
        items: [
          {
            text: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
            author: 'Marcus Aurelius',
            link: null
          },
          {
            text: 'A journey of a thousand miles begins with a single step.',
            author: 'Lao Tzu',
            link: null
          },
          {
            text: 'Silence is a true friend who never betrays.',
            author: 'Confucius',
            link: null
          }
        ]
      }
    }
  },

  islam: {
    audio: {
      status: 'coming_soon',
      ar: {
        badge: '🎧 صوتيات روحية',
        title: 'الصوتيات الروحية والفكرية',
        desc: 'تسجيلات صوتية وقراءات تأملية في روائع التراث والتربية الروحية قيد التسجيل والإنتاج.',
        statusLabel: 'الصوت قريبًا ⏳'
      },
      fr: {
        badge: '🎧 Audio spirituel',
        title: 'Méditations & Écoutes spirituelles',
        desc: 'Des lectures et réflexions audio sur les textes majeurs de la pensée et de la spiritualité islamique sont en cours de préparation.',
        statusLabel: 'Audio à venir ⏳'
      },
      en: {
        badge: '🎧 Spiritual Audio',
        title: 'Spiritual & Intellectual Audio',
        desc: 'Reflective audio readings on classic spiritual wisdom and Islamic thought are currently in production.',
        statusLabel: 'Audio Coming Soon ⏳'
      }
    },
    quiz: {
      status: 'coming_soon',
      ar: {
        badge: '🧩 اختبارات الفكر الإسلامي',
        title: 'اختبار المعرفة والحكمة',
        desc: 'اختبارات تفاعلية في محطات الفكر الإسلامي ومعالم الحضارة والتزكية النفسية قيد الإعداد.',
        statusLabel: 'الاختبار قريبًا ⏳'
      },
      fr: {
        badge: '🧩 Quiz pensée islamique',
        title: 'Quiz de Connaissance & Sagesse',
        desc: 'Des quiz éducatifs sur les grands penseurs, l\'éthique et la civilisation islamique arrivent bientôt.',
        statusLabel: 'Quiz à venir ⏳'
      },
      en: {
        badge: '🧩 Islamic Thought Quiz',
        title: 'Knowledge & Wisdom Quizzes',
        desc: 'Educational quizzes on key thinkers, ethics, and intellectual heritage will be available soon.',
        statusLabel: 'Quiz Coming Soon ⏳'
      }
    },
    quotes: {
      status: 'available',
      url: '../quotes/',
      ar: {
        badge: '📜 حكم التراث الإسلامي',
        title: 'اقتباسات في المعرفة وتزكية النفس',
        btn: 'استكشف مكتبة الاقتباسات ←',
        items: [
          {
            text: 'العلم بلا عمل جنون، والعمل بغير علم لا يكون.',
            author: 'أبو حامد الغزالي',
            link: null
          },
          {
            text: 'العدل أساس العمران، والظلم مؤذن بخراب البنيان.',
            author: 'ابن خلدون',
            link: null
          },
          {
            text: 'الوهم نصف الداء، والاطمئنان نصف الدواء، والصبر أول خطوات الشفاء.',
            author: 'ابن سينا',
            link: null
          }
        ]
      },
      fr: {
        badge: '📜 Sagesse & Pensée islamique',
        title: 'Citations sur le savoir & la spiritualité',
        btn: 'Explorer toutes les citations ←',
        items: [
          {
            text: 'Le savoir sans action est folie, et l\'action sans savoir est vaine.',
            author: 'Al-Ghazali',
            link: null
          },
          {
            text: 'La justice est le fondement de la civilisation, et l\'injustice annonce son déclin.',
            author: 'Ibn Khaldoun',
            link: null
          },
          {
            text: 'L\'illusion est la moitié du mal, la quiétude est la moitié du remède, et la patience est le premier pas vers la guérison.',
            author: 'Ibn Sina (Avicenne)',
            link: null
          }
        ]
      },
      en: {
        badge: '📜 Islamic Heritage & Wisdom',
        title: 'Quotes on Knowledge & Spirituality',
        btn: 'Explore All Quotes ←',
        items: [
          {
            text: 'Knowledge without action is vanity, and action without knowledge is futile.',
            author: 'Al-Ghazali',
            link: null
          },
          {
            text: 'Justice is the foundation of civilization, and injustice heralds its ruin.',
            author: 'Ibn Khaldun',
            link: null
          },
          {
            text: 'Illusion is half the disease, tranquility is half the cure, and patience is the first step toward healing.',
            author: 'Ibn Sina (Avicenna)',
            link: null
          }
        ]
      }
    }
  }
};

const PILLAR_HEADERS = {
  ar: {
    eyebrow: 'موارد إضافية',
    title: 'استكشف بطرق أخرى',
    intro: 'تعمق في هذا الركن الفكري عبر الوسائط الصوتية، والاختبارات التفاعلية، والاقتباسات الخالدة.'
  },
  fr: {
    eyebrow: 'Ressources complémentaires',
    title: 'Explorer autrement',
    intro: 'Approfondissez ce pilier grâce aux formats audio, aux quiz et aux citations.'
  },
  en: {
    eyebrow: 'Additional Resources',
    title: 'Explore Further',
    intro: 'Deepen this pillar through audio formats, interactive quizzes, and timeless quotes.'
  }
};

/**
 * Render or update the Pillar Resources section in the DOM
 * @param {string|HTMLElement} container - Selector or Element containing or to become the section
 * @param {string} pillarKey - 'philosophie' | 'psychologie' | 'developpement-personnel' | 'sagesse' | 'islam'
 * @param {string} lang - 'ar' | 'fr' | 'en'
 */
export function renderPillarResources(container, pillarKey, lang = 'ar') {
  const normKey = (pillarKey || '').replace('_', '-');
  const pData = PILLAR_RESOURCES_DATA[normKey] || PILLAR_RESOURCES_DATA['philosophie'];
  const validLang = ['ar', 'fr', 'en'].includes(lang) ? lang : 'ar';
  const header = PILLAR_HEADERS[validLang] || PILLAR_HEADERS['ar'];

  const el = typeof container === 'string' ? document.querySelector(container) : container;
  if (!el) return;

  const audio = pData.audio;
  const audioContent = audio[validLang] || audio['ar'];
  const quiz = pData.quiz;
  const quizContent = quiz[validLang] || quiz['ar'];
  const quotes = pData.quotes;
  const quotesContent = quotes[validLang] || quotes['ar'];

  el.innerHTML = `
  <div class="pillar-resources-container">
    <header class="pillar-resources-header">
      <span class="pillar-resources-eyebrow" id="pillarResEyebrow">${header.eyebrow}</span>
      <h2 class="pillar-resources-title" id="pillarResourcesTitle">${header.title}</h2>
      <p class="pillar-resources-intro" id="pillarResIntro">${header.intro}</p>
    </header>

    <div class="pillar-resources-grid">
      <!-- 1. CARTE AUDIO -->
      <article class="pillar-resource-card pillar-resource-audio ${audio.status === 'coming_soon' ? 'is-coming-soon' : ''}">
        <div>
          <span class="pillar-card-badge">${audioContent.badge}</span>
          <h3 class="pillar-card-title">${audioContent.title}</h3>
          <p class="pillar-card-desc">${audioContent.desc}</p>
          ${audio.status === 'available' ? `<div class="pillar-card-meta">${audioContent.meta}</div>` : ''}
        </div>
        ${audio.status === 'available' ?
          `<a href="${audio.url}" class="pillar-card-btn" aria-label="${audioContent.btn}">${audioContent.btn}</a>` :
          `<span class="pillar-resource-status">${audioContent.statusLabel || 'قريبًا ⏳'}</span>`
        }
      </article>

      <!-- 2. CARTE QUIZ -->
      <article class="pillar-resource-card pillar-resource-quiz ${quiz.status === 'coming_soon' ? 'is-coming-soon' : ''}">
        <div>
          <span class="pillar-card-badge">${quizContent.badge}</span>
          <h3 class="pillar-card-title">${quizContent.title}</h3>
          <p class="pillar-card-desc">${quizContent.desc}</p>
          ${quiz.status === 'available' ? `<div class="pillar-card-meta">${quizContent.meta}</div>` : ''}
        </div>
        ${quiz.status === 'available' ?
          `<a href="${quiz.url}" class="pillar-card-btn" aria-label="${quizContent.btn}">${quizContent.btn}</a>` :
          `<span class="pillar-resource-status">${quizContent.statusLabel || 'قريبًا ⏳'}</span>`
        }
      </article>

      <!-- 3. CARTE CITATIONS -->
      <article class="pillar-resource-card pillar-resource-quotes ${quotes.status === 'coming_soon' ? 'is-coming-soon' : ''}">
        <div>
          <span class="pillar-card-badge">${quotesContent.badge}</span>
          <h3 class="pillar-card-title">${quotesContent.title}</h3>
          <div class="pillar-quotes-list">
            ${quotesContent.items.map(item => `
              <div class="pillar-quote-item">
                <p class="pillar-quote-text">« ${item.text} »</p>
                <div class="pillar-quote-author">
                  ${item.link ? `<a href="${item.link}">— ${item.author}</a>` : `<span>— ${item.author}</span>`}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ${quotes.status === 'available' ?
          `<a href="${quotes.url}" class="pillar-card-btn" aria-label="${quotesContent.btn}">${quotesContent.btn}</a>` :
          `<span class="pillar-resource-status">${quotesContent.statusLabel || 'قريبًا ⏳'}</span>`
        }
      </article>
    </div>
  </div>
  `;
}

if (typeof window !== 'undefined') {
  window.renderPillarResources = renderPillarResources;
  window.PILLAR_RESOURCES_DATA = PILLAR_RESOURCES_DATA;
}

export default {
  PILLAR_RESOURCES_DATA,
  renderPillarResources
};
