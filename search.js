/**
 * HIKMA & NOUR — Global Interactive Search Engine
 */

(function () {
  // Comprehensive Global Search Index
  const searchIndex = [
    // 🎧 Audiobooks
    {
      title: "الخيميائي",
      author: "باولو كويلو",
      type: "audio",
      typeName: "كتاب صوتي",
      url: "./audio/?book=alchemist",
      img: "./audio_alchemist_cover.jpg",
      desc: "رحلة راعي الغنم سنتياغو في اتباع حلمه والإنصات لصوت القلب والبحث عن الكنز.",
      keywords: ["الخيميائي", "الكمياء", "باولو كويلو", "alchemist", "coelho", "صوتي", "audio"]
    },
    {
      title: "الجريمة والعقاب",
      author: "فيودور دوستويفسكي",
      type: "audio",
      typeName: "كتاب صوتي",
      url: "./audio/?book=crime_punishment",
      img: "./audio_crime_punishment_cover.jpg",
      desc: "شاهكار دوستويفسكي النفسية عن راسكولنيكوف والجريمة والضمير والخلاص.",
      keywords: ["الجريمة والعقاب", "دوستويفسكي", "dostoevsky", "راسكولنيكوف", "صوتي", "audio"]
    },
    {
      title: "الغريب (L'Étranger)",
      author: "ألبير كامو",
      type: "audio",
      typeName: "كتاب صوتي",
      url: "./audio/?book=etranger",
      img: "./audio_etranger_cover.jpg",
      desc: "تحفة ألبير كامو الفلسفية الخالدة عن العبثية واللامبالاة تجاه مصير الإنسان.",
      keywords: ["الغريب", "كامو", "ألبير كامو", "camus", "letranger", "عبثية", "صوتي"]
    },
    {
      title: "الأمير الصغير (Le Petit Prince)",
      author: "أنطوان دي سانت إكزوبيري",
      type: "audio",
      typeName: "كتاب صوتي",
      url: "./audio/?book=petit_prince",
      img: "./audio_petit_prince_cover.jpg",
      desc: "تحفة شاعريّة عن الحب والصداقة ومعنى الحياة كما يراها قلب الطفل.",
      keywords: ["الأمير الصغير", "سانت إكزوبيري", "petit prince", "exupery", "وردة", "ثعلب", "صوتي"]
    },
    {
      title: "التحول / المسخ (La Métamorphose)",
      author: "فرانز كافكا",
      type: "audio",
      typeName: "كتاب صوتي",
      url: "./audio/?book=kafka",
      img: "./audio_kafka_cover.jpg",
      desc: "قصة غريغور سامسا والتحول المروع إلى حشرة ضخمة والاغتراب الكافكاوي.",
      keywords: ["التحول", "المسخ", "كافكا", "kafka", "metamorphosis", "حشرة", "صوتي"]
    },
    {
      title: "الشيخ والبحر (Le Vieil Homme et la Mer)",
      author: "ارنست همنغواي",
      type: "audio",
      typeName: "كتاب صوتي",
      url: "./audio/?book=vieux",
      img: "./audio_vieux_cover.jpg",
      desc: "صراع الصياد العجوز سانتياغو الملحمي مع البحر وسمكة المارلين الحائز على نوبل.",
      keywords: ["الشيخ والبحر", "همنغواي", "ارنست همنغواي", "hemingway", "vieux", "old man sea", "مارلين", "صوتي"]
    },

    // ✍️ Articles
    {
      title: "وهم السعادة عند شوبنهاور: كيف تعيش بسلام دون أوهام؟",
      author: "شوبنهاور",
      type: "article",
      typeName: "مقال فلسفة",
      url: "./articles/schopenhauer-happiness-illusion.html",
      img: "./schopenhauer_happiness_illusion_hero.jpg",
      desc: "السعادة ليست في الجري وراء الملذات بل في تجنب المعاناة والطمأنينة.",
      keywords: ["شوبنهاور", "السعادة", "فلسفة", "schopenhauer", "معاناة", "هدوء"]
    },
    {
      title: "لماذا يحترم الناس الشخص الصامت؟ قوة الصمت والهدوء النفسي",
      author: "علم النفس",
      type: "article",
      typeName: "مقال علم النفس",
      url: "./articles/why-people-respect-silent-person.html",
      img: "./silence_respect_hero.jpg",
      desc: "التفسير النفسي لهيبة الصمت ولماذا يُظهر الشخص الصامت عمقاً وقوة شخصية.",
      keywords: ["الصمت", "الشخص الصامت", "هيبة", "احترام", "علم النفس", "psychology"]
    },
    {
      title: "قوة القوة النفسية عند نيتشه: كيف تتغلب على الصعاب؟",
      author: "نيتشه",
      type: "article",
      typeName: "مقال فلسفة",
      url: "./articles/nietzsche-psychological-strength.html",
      img: "./nietzsche_psychological_strength_hero.jpg",
      desc: "فلسفة نيتشه في تحويل المعاناة إلى قوة وإرادة صلبة.",
      keywords: ["نيتشه", "nietzsche", "قوة", "صلابة", "معاناة", "فلسفة"]
    },
    {
      title: "العزلة: هل هي نعمة أم نقمة؟ كيف تحول عزلتك إلى قوة؟",
      author: "تطوير الذات",
      type: "article",
      typeName: "تطوير الذات",
      url: "./articles/solitude-blessing-or-curse.html",
      img: "./solitude_blessing_curse_hero.jpg",
      desc: "كيف تستفيد من العزلة لبناء ذاتك واكتشاف سلامك الداخلي.",
      keywords: ["العزلة", "وحدة", "solitude", "سلام", "تطوير الذات"]
    },
    {
      title: "لماذا يبتعد الناس عنك عندما تنجح؟ التفسير النفسي والاجتماعي",
      author: "علم النفس",
      type: "article",
      typeName: "علم النفس",
      url: "./articles/why-people-distance-when-you-succeed.html",
      img: "./why_people_distance_hero_ai.jpg",
      desc: "التفسير النفسي للحسد والغيرة ومشاعر الناس عند نجاح الآخرين.",
      keywords: ["نجاح", "غيرة", "حسد", "ابتعاد", "علم النفس"]
    },
    {
      title: "7 عادات تجعلك إنساناً أقوى وأكثر حكمة",
      author: "تطوير الذات",
      type: "article",
      typeName: "تطوير الذات",
      url: "./articles/7-habits/",
      img: "./habits_library_hero.jpg",
      desc: "عادات يومية عملية لبناء الحكمة وتطوير الشخصية.",
      keywords: ["عادات", "7 عادات", "habits", "تطوير الذات", "نجاح"]
    },
    {
      title: "البحث عن السعادة في المكان الخاطئ: أخطاء نمارسها يومياً",
      author: "تطوير الذات",
      type: "article",
      typeName: "تطوير الذات",
      url: "./articles/happiness-in-wrong-place.html",
      img: "./happiness_wrong_place_hero.jpg",
      desc: "أخطاء تفكير مألوفة تبعدنا عن السلام الداخلي والسعادة الواقعية.",
      keywords: ["سعادة", "أخطاء", "راحة", "سلام", "تطوير الذات"]
    },
    {
      title: "كيف تبني ثقة حقيقية بنفسك من الداخل؟",
      author: "علم النفس",
      type: "article",
      typeName: "علم النفس",
      url: "./articles/true-confidence-inside.html",
      img: "./overthinking_calm.jpg",
      desc: "خطوات نفسية لبناء ثقة ذاتية راسخة بعيداً عن التظاهر والتمثيل.",
      keywords: ["ثقة", "نفس", "confidence", "تقدير الذات", "علم النفس"]
    },
    {
      title: "20 اقتباسة فلسفية عميقة من عظماء الفكر والحكمة",
      author: "حكمة ونور",
      type: "article",
      typeName: "اقتباسات",
      url: "./articles/hikma-citations-philosophiques.html",
      img: "./quotes_article_hero.jpg",
      desc: "مجموعة من أعمق الحكم الفلسفية المؤثرة عبر التاريخ.",
      keywords: ["اقتباسات", "حكم", "quotes", "فلسفة", "عظماء"]
    },
    {
      title: "7 أخطاء تمنع عقلك من النمو وتعيق نجاحك",
      author: "تطوير الذات",
      type: "article",
      typeName: "تطوير الذات",
      url: "./articles/7-errors-mind-growth.html",
      img: "./mind_growth_errors_hero.jpg",
      desc: "أنماط التفكير السلبية التي تعيق التطور النفسي والفكري.",
      keywords: ["نمو", "أخطاء", "عقل", "تفكير", "تطوير الذات"]
    },

    // 👤 Thinkers
    {
      title: "آرثر شوبنهاور",
      author: "فيلسوف المعاناة والطمأنينة",
      type: "thinker",
      typeName: "مفكر",
      url: "./thinkers/?thinker=schopenhauer",
      img: "./schopenhauer_portrait.jpg",
      desc: "فيلسوف الإرادة والتشاؤم العميق ومؤسس فلسفة الهدوء والسلام الداخلي.",
      keywords: ["شوبنهاور", "schopenhauer", "فيلسوف", "تشاؤم", "إرادة"]
    },
    {
      title: "فريدريش نيتشه",
      author: "فيلسوف إرادة القوة",
      type: "thinker",
      typeName: "مفكر",
      url: "./thinkers/?thinker=nietzsche",
      img: "./nietzsche_portrait.jpg",
      desc: "فيلسوف القوة، الإنسان الأعلى وتجاوز الذات والصعاب.",
      keywords: ["نيتشه", "nietzsche", "إنسان أعلى", "قوة", "فيلسوف"]
    },
    {
      title: "ألبير كامو",
      author: "فيلسوف العبث والمواجهة",
      type: "thinker",
      typeName: "مفكر",
      url: "./thinkers/?thinker=camus",
      img: "./camus_portrait.jpg",
      desc: "كاتب وفيلسوف وجودي صاحب روايتي الغريب والطاعون وفلسفة العبث.",
      keywords: ["كامو", "ألبير كامو", "camus", "عبث", "فيلسوف"]
    },
    {
      title: "ماركوس أوريليوس",
      author: "الإمبراطور الرواقي",
      type: "thinker",
      typeName: "مفكر",
      url: "./thinkers/?thinker=marcaurele",
      img: "./marcaurele_portrait.jpg",
      desc: "إمبراطور روما وفيلسوف الرواقية صاحب كتاب التأملات الخالد.",
      keywords: ["ماركوس أوريليوس", "رواقية", "تأملات", "aurelius", "فيلسوف"]
    },

    // 🧠 Quizzes & Quotes
    {
      title: "اختبار النمط الفلسفي والذكاء العاطفي",
      author: "حكمة ونور",
      type: "quiz",
      typeName: "اختبار",
      url: "./quizzes/",
      img: "./quiz_philosopher_hero.jpg",
      desc: "اكتشف المدرسة الفلسفية والنمط الفكري الأقرب لجوهرك.",
      keywords: ["اختبار", "quiz", "شخصية", "نمط", "ذكاء عاطفي"]
    },
    {
      title: "مولد الحكم والاقتباسات اليومية",
      author: "حكمة ونور",
      type: "quiz",
      typeName: "اقتباسات",
      url: "./quotes/",
      img: "./quotes_hero_banner.jpg",
      desc: "استكشف مئات الاقتباسات الموثوقة للفلاسفة والمفكرين.",
      keywords: ["حكمة", "اقتباس", "مولد", "quotes", "يومي"]
    }
  ];

  let currentCategory = 'all';

  // Inject Self-Contained Styles (Guarantees Perfect Display on Every Page)
  function injectSearchModalStyles() {
    if (document.getElementById('globalSearchStyles')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'globalSearchStyles';
    styleEl.textContent = `
      .global-search-btn-nav {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        background: rgba(223, 177, 91, 0.08) !important;
        border: 1px solid rgba(223, 177, 91, 0.3) !important;
        color: #F5D98A !important;
        padding: 7px 14px !important;
        border-radius: 24px !important;
        font-size: 0.82rem !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        backdrop-filter: blur(10px) !important;
      }
      .global-search-btn-nav:hover {
        background: rgba(223, 177, 91, 0.22) !important;
        border-color: #F5D98A !important;
        box-shadow: 0 0 18px rgba(223, 177, 91, 0.4) !important;
        transform: translateY(-1px) scale(1.03) !important;
      }
      .search-btn-kbd {
        font-family: inherit !important;
        font-size: 0.68rem !important;
        background: rgba(0, 0, 0, 0.4) !important;
        border: 1px solid rgba(223, 177, 91, 0.4) !important;
        color: rgba(250, 246, 239, 0.8) !important;
        padding: 2px 6px !important;
        border-radius: 6px !important;
        letter-spacing: 0.5px !important;
      }
      @media (max-width: 768px) {
        .search-btn-text, .search-btn-kbd { display: none !important; }
        .global-search-btn-nav { padding: 8px !important; border-radius: 50% !important; }
      }
      .global-search-overlay {
        position: fixed !important;
        top: 0 !important; left: 0 !important;
        width: 100vw !important; height: 100vh !important;
        background: rgba(4, 7, 5, 0.88) !important;
        backdrop-filter: blur(20px) saturate(140%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(140%) !important;
        z-index: 200000 !important;
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        padding: 60px 20px 20px !important;
        opacity: 0 !important;
        visibility: hidden !important;
        transition: opacity 0.3s ease, visibility 0.3s ease !important;
        pointer-events: none !important;
        box-sizing: border-box !important;
      }
      .global-search-overlay.active {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
      .global-search-modal {
        background: rgba(10, 16, 12, 0.96) !important;
        border: 1.5px solid rgba(223, 177, 91, 0.4) !important;
        border-radius: 24px !important;
        width: 100% !important;
        max-width: 720px !important;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(223, 177, 91, 0.2) !important;
        overflow: hidden !important;
        transform: translateY(-20px) scale(0.96) !important;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
        direction: rtl !important;
        box-sizing: border-box !important;
      }
      .global-search-overlay.active .global-search-modal {
        transform: translateY(0) scale(1) !important;
      }
      .search-modal-header {
        padding: 20px 24px !important;
        border-bottom: 1px solid rgba(223, 177, 91, 0.2) !important;
        display: flex !important;
        align-items: center !important;
        gap: 14px !important;
        position: relative !important;
        background: rgba(0, 0, 0, 0.3) !important;
        box-sizing: border-box !important;
      }
      .search-modal-input-icon {
        color: #DFB15B !important;
        flex-shrink: 0 !important;
        width: 22px !important; height: 22px !important;
        min-width: 22px !important; min-height: 22px !important;
        max-width: 22px !important; max-height: 22px !important;
      }
      .search-modal-input {
        width: 100% !important;
        background: transparent !important;
        border: none !important;
        outline: none !important;
        font-size: 1.15rem !important;
        font-family: inherit !important;
        color: #FFFDF8 !important;
        font-weight: 600 !important;
        box-shadow: none !important;
      }
      .search-modal-input::placeholder {
        color: rgba(250, 246, 239, 0.4) !important;
      }
      .search-modal-close-btn {
        background: rgba(255, 255, 255, 0.06) !important;
        border: 1px solid rgba(255, 255, 255, 0.15) !important;
        color: rgba(250, 246, 239, 0.8) !important;
        border-radius: 50% !important;
        width: 32px !important; height: 32px !important;
        display: flex !important; align-items: center !important; justify-content: center !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        flex-shrink: 0 !important;
        font-size: 0.9rem !important;
      }
      .search-modal-close-btn:hover {
        background: rgba(223, 177, 91, 0.2) !important;
        border-color: #F5D98A !important;
        color: #F5D98A !important;
      }
      .search-modal-tags {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        padding: 14px 24px !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
        overflow-x: auto !important;
        white-space: nowrap !important;
        box-sizing: border-box !important;
      }
      .search-tag-pill {
        background: rgba(255, 255, 255, 0.04) !important;
        border: 1px solid rgba(255, 255, 255, 0.12) !important;
        color: rgba(250, 246, 239, 0.75) !important;
        padding: 6px 14px !important;
        border-radius: 18px !important;
        font-size: 0.8rem !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
      }
      .search-tag-pill:hover, .search-tag-pill.active {
        background: rgba(223, 177, 91, 0.2) !important;
        border-color: #F5D98A !important;
        color: #F5D98A !important;
      }
      .search-modal-results {
        max-height: 440px !important;
        overflow-y: auto !important;
        padding: 16px 24px 24px !important;
        box-sizing: border-box !important;
      }
      .search-result-item {
        display: flex !important;
        align-items: center !important;
        gap: 16px !important;
        padding: 14px !important;
        border-radius: 14px !important;
        border: 1px solid transparent !important;
        text-decoration: none !important;
        transition: all 0.25s ease !important;
        margin-bottom: 8px !important;
        box-sizing: border-box !important;
      }
      .search-result-item:hover {
        background: rgba(223, 177, 91, 0.1) !important;
        border-color: rgba(223, 177, 91, 0.35) !important;
        transform: translateX(-4px) !important;
      }
      [dir="ltr"] .search-result-item:hover {
        transform: translateX(4px) !important;
      }
      .search-result-thumb {
        width: 48px !important; height: 48px !important;
        border-radius: 12px !important;
        object-fit: cover !important;
        border: 1px solid rgba(223, 177, 91, 0.4) !important;
        flex-shrink: 0 !important;
      }
      .search-result-info { flex: 1 !important; }
      .search-result-title {
        font-size: 0.96rem !important;
        font-weight: 700 !important;
        color: #FFFDF8 !important;
        margin-bottom: 3px !important;
      }
      .search-result-desc {
        font-size: 0.78rem !important;
        color: rgba(250, 246, 239, 0.6) !important;
        line-height: 1.4 !important;
      }
      .search-result-type-badge {
        font-size: 0.7rem !important;
        font-weight: 700 !important;
        padding: 3px 10px !important;
        border-radius: 12px !important;
        align-self: center !important;
        flex-shrink: 0 !important;
      }
      .badge-type-audio { background: rgba(223, 177, 91, 0.2) !important; color: #F5D98A !important; border: 1px solid rgba(223, 177, 91, 0.4) !important; }
      .badge-type-article { background: rgba(52, 211, 153, 0.15) !important; color: #34D399 !important; border: 1px solid rgba(52, 211, 153, 0.3) !important; }
      .badge-type-thinker { background: rgba(96, 165, 250, 0.15) !important; color: #60A5FA !important; border: 1px solid rgba(96, 165, 250, 0.3) !important; }
      .badge-type-quiz { background: rgba(251, 191, 36, 0.15) !important; color: #FBBF24 !important; border: 1px solid rgba(251, 191, 36, 0.3) !important; }
      .search-empty-state {
        text-align: center !important;
        padding: 40px 20px !important;
        color: rgba(250, 246, 239, 0.6) !important;
      }
      .search-empty-icon { font-size: 2.2rem !important; margin-bottom: 8px !important; display: block !important; }
    `;
    document.head.appendChild(styleEl);
  }

  // Build and Inject Modal HTML Into Document
  function injectSearchModalHTML() {
    injectSearchModalStyles();

    if (document.getElementById('globalSearchOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'globalSearchOverlay';
    overlay.className = 'global-search-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
      <div class="global-search-modal" onclick="event.stopPropagation()">
        
        <!-- Header Search Bar -->
        <div class="search-modal-header">
          <svg class="search-modal-input-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="globalSearchInput" class="search-modal-input" placeholder="ابحث عن مقال، كتاب صوتي، مفكر، حكمة..." autocomplete="off">
          <button class="search-modal-close-btn" onclick="closeGlobalSearchModal()" title="إغلاق (Esc)">✕</button>
        </div>

        <!-- Filter Tags -->
        <div class="search-modal-tags">
          <button class="search-tag-pill active" data-cat="all" onclick="filterSearchCategory('all', this)">الكل ✨</button>
          <button class="search-tag-pill" data-cat="audio" onclick="filterSearchCategory('audio', this)">🎧 كتب صوتية</button>
          <button class="search-tag-pill" data-cat="article" onclick="filterSearchCategory('article', this)">✍️ مقالات</button>
          <button class="search-tag-pill" data-cat="thinker" onclick="filterSearchCategory('thinker', this)">👤 مفكرون</button>
          <button class="search-tag-pill" data-cat="quiz" onclick="filterSearchCategory('quiz', this)">🧠 حكم واختبارات</button>
        </div>

        <!-- Results List Container -->
        <div class="search-modal-results" id="globalSearchResults">
          <!-- Dynamically populated results -->
        </div>

      </div>
    `;

    // Close when clicking background overlay
    overlay.addEventListener('click', closeGlobalSearchModal);

    document.body.appendChild(overlay);

    // Bind typing listener
    const input = document.getElementById('globalSearchInput');
    if (input) {
      input.addEventListener('input', function () {
        renderSearchResults(this.value.trim());
      });
    }
  }

  // Open Search Modal
  window.openGlobalSearchModal = function () {
    injectSearchModalHTML();
    const overlay = document.getElementById('globalSearchOverlay');
    const input = document.getElementById('globalSearchInput');
    if (overlay) {
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input && input.focus(), 100);
      renderSearchResults(input ? input.value.trim() : '');
    }
  };

  // Close Search Modal
  window.closeGlobalSearchModal = function () {
    const overlay = document.getElementById('globalSearchOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  // Filter Category Pills
  window.filterSearchCategory = function (category, btnEl) {
    currentCategory = category;
    const tagBtns = document.querySelectorAll('.search-tag-pill');
    tagBtns.forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const input = document.getElementById('globalSearchInput');
    renderSearchResults(input ? input.value.trim() : '');
  };

  // Render Search Results
  function renderSearchResults(query) {
    const container = document.getElementById('globalSearchResults');
    if (!container) return;

    query = query.toLowerCase();

    // Correct paths if called from a subfolder like /audio/ or /articles/
    const isSubfolder = window.location.pathname.includes('/audio/') || 
                        window.location.pathname.includes('/articles/') || 
                        window.location.pathname.includes('/thinkers/') || 
                        window.location.pathname.includes('/quizzes/') || 
                        window.location.pathname.includes('/quotes/') || 
                        window.location.pathname.includes('/calendar/') || 
                        window.location.pathname.includes('/shop/');

    let filtered = searchIndex.filter(item => {
      // Category filter
      if (currentCategory !== 'all' && item.type !== currentCategory) {
        return false;
      }
      // Query filter
      if (!query) return true; // Show top results if query is empty

      const titleMatch = item.title.toLowerCase().includes(query);
      const descMatch = item.desc.toLowerCase().includes(query);
      const authorMatch = item.author.toLowerCase().includes(query);
      const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(query));

      return titleMatch || descMatch || authorMatch || keywordMatch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="search-empty-state">
          <span class="search-empty-icon">🔍</span>
          <p>لم نجد نتائج مطابقة لـ "<strong>${escapeHTML(query)}</strong>"</p>
          <p style="font-size: 0.8rem; margin-top: 6px; color: rgba(250,246,239,0.4);">جرب البحث عن "شوبنهاور", "الخيميائي", "العزلة", أو "كامو"...</p>
        </div>
      `;
      return;
    }

    let html = '';
    if (!query) {
      html += `<div style="font-size: 0.78rem; font-weight: 700; color: #DFB15B; margin-bottom: 12px; letter-spacing: 0.5px;">🔥 المقالات والكتب الأكثر شيوعاً هذا الأسبوع</div>`;
    }

    filtered.forEach(item => {
      let badgeClass = 'badge-type-article';
      if (item.type === 'audio') badgeClass = 'badge-type-audio';
      if (item.type === 'thinker') badgeClass = 'badge-type-thinker';
      if (item.type === 'quiz') badgeClass = 'badge-type-quiz';

      let targetUrl = item.url;
      let targetImg = item.img;
      if (isSubfolder) {
        if (targetUrl.startsWith('./')) targetUrl = '../' + targetUrl.substring(2);
        if (targetImg.startsWith('./')) targetImg = '../' + targetImg.substring(2);
      }

      html += `
        <a href="${targetUrl}" class="search-result-item" onclick="closeGlobalSearchModal()">
          <img src="${targetImg}" alt="${escapeHTML(item.title)}" class="search-result-thumb" onerror="this.src='${isSubfolder ? '../' : './'}brand_logo_official.png'">
          <div class="search-result-info">
            <div class="search-result-title">${escapeHTML(item.title)}</div>
            <div class="search-result-desc">${escapeHTML(item.desc)}</div>
          </div>
          <span class="search-result-type-badge ${badgeClass}">${item.typeName}</span>
        </a>
      `;
    });

    container.innerHTML = html;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Keyboard Shortcuts Listener (Ctrl + K or / or Esc)
  document.addEventListener('keydown', function (e) {
    // Ctrl + K or Cmd + K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openGlobalSearchModal();
    }
    // Escape key
    if (e.key === 'Escape') {
      closeGlobalSearchModal();
    }
  });

  // Automatically inject modal on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSearchModalHTML);
  } else {
    injectSearchModalHTML();
  }

})();
