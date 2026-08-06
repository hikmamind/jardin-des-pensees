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
      author: "فيزيائي المعاناة والطمأنينة",
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

  // Build and Inject Modal HTML Into Document
  function injectSearchModalHTML() {
    if (document.getElementById('globalSearchOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'globalSearchOverlay';
    overlay.className = 'global-search-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    overlay.innerHTML = `
      <div class="global-search-modal" onclick="event.stopPropagation()">
        
        <!-- Header Search Bar -->
        <div class="search-modal-header">
          <svg class="search-modal-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
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
      html += `<div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-gold, #DFB15B); margin-bottom: 12px; letter-spacing: 0.5px;">🔥 المقالات والكتب الأكثر شيوعاً هذا الأسبوع</div>`;
    }

    filtered.forEach(item => {
      let badgeClass = 'badge-type-article';
      if (item.type === 'audio') badgeClass = 'badge-type-audio';
      if (item.type === 'thinker') badgeClass = 'badge-type-thinker';
      if (item.type === 'quiz') badgeClass = 'badge-type-quiz';

      html += `
        <a href="${item.url}" class="search-result-item" onclick="closeGlobalSearchModal()">
          <img src="${item.img}" alt="${escapeHTML(item.title)}" class="search-result-thumb" onerror="this.src='./brand_logo_official.png'">
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
