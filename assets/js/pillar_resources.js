/**
 * ============================================================
 * HIKMA & NOUR — PILLAR RESOURCES MODULE (V6 PREMIUM)
 * Compléments Audio, Quiz & Citations avec Illustrations HD
 * ============================================================
 */

export const PILLAR_RESOURCES_DATA = {
  philosophie: {
    audio: {
      status: 'available',
      bookKey: 'etranger',
      image: '../audio_etranger_cover.jpg',
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
      image: '../featured_philosopher.jpg',
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
      image: '../autumn_forest_solitude_walk.jpg',
      url: '../quotes/',
      ar: {
        badge: '📜 مختارات فلسفية',
        title: 'اقتباسات في الوجود والمعنى',
        desc: 'مجموعة من أعمق الرؤى والحكم الفلسفية حول جوهر الحياة والحرية والأخلاق.',
        btn: 'استكشف مكتبة الاقتباسات ←',
        featured: {
          text: 'في عمق الشتاء، تعلمت أخيرًا أن في داخلي صيفًا لا يُقهر.',
          author: 'ألبير كامو',
          link: null
        }
      },
      fr: {
        badge: '📜 Sélection philosophique',
        title: 'Citations sur l\'existence & la liberté',
        desc: 'Une sélection de réflexions majeures sur la condition humaine, le sens et la liberté intérieure.',
        btn: 'Explorer toutes les citations ←',
        featured: {
          text: 'Au milieu de l\'hiver, j\'ai découvert en moi un invincible été.',
          author: 'Albert Camus',
          link: null
        }
      },
      en: {
        badge: '📜 Philosophical Selection',
        title: 'Quotes on Existence & Meaning',
        desc: 'A curated selection of timeless insights into human existence, reason, and inner freedom.',
        btn: 'Explore All Quotes ←',
        featured: {
          text: 'In the depth of winter, I finally learned that within me there lay an invincible summer.',
          author: 'Albert Camus',
          link: null
        }
      }
    }
  },

  psychologie: {
    audio: {
      status: 'available',
      bookKey: 'crime_punishment',
      image: '../audio_crime_punishment_cover.jpg',
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
      image: '../carl-jung-shadow.jpg',
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
      image: '../silence_wisdom_action.jpg',
      url: '../quotes/',
      ar: {
        badge: '📜 إضاءات سيكولوجية',
        title: 'اقتباسات في النفس والسلوك',
        desc: 'حكم ملهمة تسبر أغوار العقل البشري، وتكشف أسرار التوازن العاطفي والنمو النفسي.',
        btn: 'استكشف مكتبة الاقتباسات ←',
        featured: {
          text: 'بين المثير والاستجابة توجد مساحة، وفي تلك المساحة تكمن حريتنا في الاختيار.',
          author: 'فيكتور فرانكل',
          link: '../thinkers/viktor-frankl/'
        }
      },
      fr: {
        badge: '📜 Éclairages psychologiques',
        title: 'Citations sur la psyché & les émotions',
        desc: 'Des pensées fondatrices sur les ressorts profonds de l\'esprit humain, la résilience et la liberté de choix.',
        btn: 'Explorer toutes les citations ←',
        featured: {
          text: 'Entre le stimulus et la réponse, il y a un espace où réside notre pouvoir de choisir.',
          author: 'Viktor Frankl',
          link: '../thinkers/viktor-frankl/'
        }
      },
      en: {
        badge: '📜 Psychological Insights',
        title: 'Quotes on Mind & Emotions',
        desc: 'Foundational thoughts exploring the depths of human behavior, emotional resilience, and consciousness.',
        btn: 'Explore All Quotes ←',
        featured: {
          text: 'Between stimulus and response there is a space. In that space is our power to choose.',
          author: 'Viktor Frankl',
          link: '../thinkers/viktor-frankl/'
        }
      }
    }
  },

  'developpement-personnel': {
    audio: {
      status: 'available',
      bookKey: 'alchemist',
      image: '../audio_alchemist_cover.jpg',
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
      image: '../dev_habits_hd.jpg',
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
      image: '../continue_advancing_glass_bridge.jpg',
      url: '../quotes/',
      ar: {
        badge: '📜 مبادئ النمو والانضباط',
        title: 'اقتباسات في العادات والنجاح المستدام',
        desc: 'قواعد رصينة في هندسة السلوك وبناء الاستمرارية اليومية وتجاوز التسويف والعقبات.',
        btn: 'استكشف مكتبة الاقتباسات ←',
        featured: {
          text: 'كل حياتنا، في شكلها العملي، ليست سوى كتلة من العادات المنظمة.',
          author: 'ويليام جيمس',
          link: '../thinkers/william-james/'
        }
      },
      fr: {
        badge: '📜 Principes d\'action',
        title: 'Citations sur la discipline & la constance',
        desc: 'Des clés éprouvées sur l\'ingénierie des habitudes, la persévérance quotidienne et la maîtrise de soi.',
        btn: 'Explorer toutes les citations ←',
        featured: {
          text: 'Toute notre vie, pour autant qu\'elle a une forme définie, n\'est qu\'une masse d\'habitudes.',
          author: 'William James',
          link: '../thinkers/william-james/'
        }
      },
      en: {
        badge: '📜 Principles of Growth',
        title: 'Quotes on Discipline & Consistency',
        desc: 'Actionable principles on habit architecture, daily perseverance, and long-term mastery.',
        btn: 'Explore All Quotes ←',
        featured: {
          text: 'All our life, so far as it has definite form, is but a mass of habits.',
          author: 'William James',
          link: '../thinkers/william-james/'
        }
      }
    }
  },

  sagesse: {
    audio: {
      status: 'available',
      bookKey: 'vieux',
      image: '../audio_vieux_cover.jpg',
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
      image: '../inner_peace_lake_sunrise.jpg',
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
      image: '../pillar_wisdom_hd.jpg',
      url: '../quotes/',
      ar: {
        badge: '📜 حكمة خالدة',
        title: 'اقتباسات في الصبر والسكينة',
        desc: 'تأملات عميقة في الرضا، والهدوء الداخلي، وفن العيش بسلام مع تقلبات الحياة.',
        btn: 'استكشف مكتبة الاقتباسات ←',
        featured: {
          text: 'أنت تملك السيطرة على عقلك، لا على الأحداث الخارجية؛ أدرك هذا وستجد القوة والسكينة.',
          author: 'ماركوس أوريليوس',
          link: null
        }
      },
      fr: {
        badge: '📜 Sagesse intemporelle',
        title: 'Citations sur le calme & la patience',
        desc: 'Des méditations lumineuses sur la sérénité, la patience face aux épreuves et l\'art de la paix intérieure.',
        btn: 'Explorer toutes les citations ←',
        featured: {
          text: 'Tu as le pouvoir sur ton esprit, non sur les événements extérieurs. Comprends cela, et tu trouveras la force.',
          author: 'Marc Aurèle',
          link: null
        }
      },
      en: {
        badge: '📜 Timeless Wisdom',
        title: 'Quotes on Serenity & Patience',
        desc: 'Profound reflections on inner peace, quiet endurance, and the noble art of living mindfully.',
        btn: 'Explore All Quotes ←',
        featured: {
          text: 'You have power over your mind - not outside events. Realize this, and you will find strength.',
          author: 'Marcus Aurelius',
          link: null
        }
      }
    }
  },

  islam: {
    audio: {
      status: 'coming_soon',
      image: '../islamic_thought_hd.jpg',
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
      image: '../islam_parcours_01.jpg',
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
      image: '../bookshelves_candle.jpg',
      url: '../quotes/',
      ar: {
        badge: '📜 حكم التراث الإسلامي',
        title: 'اقتباسات في المعرفة وتزكية النفس',
        desc: 'جواهر فكرية وروحية من أعلام الحضارة الإسلامية في ترسيخ العدل، ونشر العلم، وبناء النفس الإنسانية.',
        btn: 'استكشف مكتبة الاقتباسات ←',
        featured: {
          text: 'العلم بلا عمل جنون، والعمل بغير علم لا يكون.',
          author: 'أبو حامد الغزالي',
          link: null
        }
      },
      fr: {
        badge: '📜 Sagesse & Pensée islamique',
        title: 'Citations sur le savoir & la spiritualité',
        desc: 'Des joyaux de réflexion issus des grands penseurs musulmans sur la justice, l\'action féconde et l\'élévation de l\'âme.',
        btn: 'Explorer toutes les citations ←',
        featured: {
          text: 'Le savoir sans action est folie, et l\'action sans savoir est vaine.',
          author: 'Al-Ghazali',
          link: null
        }
      },
      en: {
        badge: '📜 Islamic Heritage & Wisdom',
        title: 'Quotes on Knowledge & Spirituality',
        desc: 'Timeless gems of spiritual and ethical wisdom from great Islamic scholars on justice, knowledge, and inner purpose.',
        btn: 'Explore All Quotes ←',
        featured: {
          text: 'Knowledge without action is vanity, and action without knowledge is futile.',
          author: 'Al-Ghazali',
          link: null
        }
      }
    }
  }
};

const PILLAR_HEADERS = {
  ar: {
    eyebrow: '✨ موارد إضافية',
    title: 'استكشف بطرق أخرى',
    intro: 'تعمق في هذا الركن الفكري عبر الوسائط الصوتية، والاختبارات التفاعلية، والاقتباسات الخالدة.'
  },
  fr: {
    eyebrow: '✨ Ressources complémentaires',
    title: 'Explorer autrement',
    intro: 'Approfondissez ce pilier grâce aux formats audio, aux quiz interactifs et aux citations inspirantes.'
  },
  en: {
    eyebrow: '✨ Additional Resources',
    title: 'Explore Further',
    intro: 'Deepen your journey into this pillar through audiobooks, interactive quizzes, and timeless quotes.'
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
  <div class="pillar-resources-container section-container">
    <header class="pillar-resources-header">
      <span class="pillar-resources-eyebrow" id="pillarResEyebrow">${header.eyebrow}</span>
      <h2 class="pillar-resources-title" id="pillarResourcesTitle">${header.title}</h2>
      <p class="pillar-resources-intro" id="pillarResIntro">${header.intro}</p>
    </header>

    <div class="pillar-resources-grid">
      <!-- 1. CARTE AUDIO -->
      <article class="pillar-resource-card pillar-resource-audio ${audio.status === 'coming_soon' ? 'is-coming-soon' : ''}">
        ${audio.image ? `
          <div class="pillar-card-img-box">
            <img src="${audio.image}" alt="${audioContent.title}" class="pillar-card-img" loading="lazy" />
          </div>
        ` : ''}
        ${audio.status === 'coming_soon' ? `
          <div class="pillar-coming-soon-body">
            <span class="pillar-card-badge">${audioContent.badge}</span>
            <h3 class="pillar-card-title">${audioContent.title}</h3>
            <p class="pillar-card-desc">${audioContent.desc}</p>
            <span class="pillar-resource-status">${audioContent.statusLabel || 'قريبًا ⏳'}</span>
          </div>
        ` : `
          <div>
            <span class="pillar-card-badge">${audioContent.badge}</span>
            <h3 class="pillar-card-title">${audioContent.title}</h3>
            <p class="pillar-card-desc">${audioContent.desc}</p>
            <div class="pillar-card-meta">${audioContent.meta}</div>
          </div>
          <a href="${audio.url}" class="pillar-card-btn" aria-label="${audioContent.btn}">${audioContent.btn}</a>
        `}
      </article>

      <!-- 2. CARTE QUIZ -->
      <article class="pillar-resource-card pillar-resource-quiz ${quiz.status === 'coming_soon' ? 'is-coming-soon' : ''}">
        ${quiz.image ? `
          <div class="pillar-card-img-box">
            <img src="${quiz.image}" alt="${quizContent.title}" class="pillar-card-img" loading="lazy" />
          </div>
        ` : ''}
        ${quiz.status === 'coming_soon' ? `
          <div class="pillar-coming-soon-body">
            <span class="pillar-card-badge">${quizContent.badge}</span>
            <h3 class="pillar-card-title">${quizContent.title}</h3>
            <p class="pillar-card-desc">${quizContent.desc}</p>
            <span class="pillar-resource-status">${quizContent.statusLabel || 'قريبًا ⏳'}</span>
          </div>
        ` : `
          <div>
            <span class="pillar-card-badge">${quizContent.badge}</span>
            <h3 class="pillar-card-title">${quizContent.title}</h3>
            <p class="pillar-card-desc">${quizContent.desc}</p>
            <div class="pillar-card-meta">${quizContent.meta}</div>
          </div>
          <a href="${quiz.url}" class="pillar-card-btn" aria-label="${quizContent.btn}">${quizContent.btn}</a>
        `}
      </article>

      <!-- 3. CARTE CITATIONS -->
      <article class="pillar-resource-card pillar-resource-quotes ${quotes.status === 'coming_soon' ? 'is-coming-soon' : ''}">
        ${quotes.image ? `
          <div class="pillar-card-img-box">
            <img src="${quotes.image}" alt="${quotesContent.title}" class="pillar-card-img" loading="lazy" />
          </div>
        ` : ''}
        <div>
          <span class="pillar-card-badge">${quotesContent.badge}</span>
          <h3 class="pillar-card-title">${quotesContent.title}</h3>
          <p class="pillar-card-desc">${quotesContent.desc}</p>
          <div class="pillar-quote-featured">
            <p class="pillar-quote-featured-text">« ${quotesContent.featured.text} »</p>
            <div class="pillar-quote-featured-author">
              ${quotesContent.featured.link ? `<a href="${quotesContent.featured.link}">— ${quotesContent.featured.author}</a>` : `<span>— ${quotesContent.featured.author}</span>`}
            </div>
          </div>
        </div>
        <a href="${quotes.url}" class="pillar-card-btn" aria-label="${quotesContent.btn}">${quotesContent.btn}</a>
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
