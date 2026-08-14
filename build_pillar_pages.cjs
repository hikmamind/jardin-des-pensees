const fs = require('fs');
const path = require('path');

const domain = 'https://jardin-des-pensees.onrender.com';
const logoUrl = `${domain}/brand_logo_official.png`;

const pillars = [
  {
    folder: 'philosophie',
    slug: 'philosophie',
    title: 'الفلسفة — كبار المفكرين، الوجودية والبحث عن المعنى | حكمة ونور',
    desc: 'استكشف أروقة الفلسفة الإنسانية الكبرى: الوجودية، العبث، إرادة القوة، ونقد وهم السعادة مع شوبنهاور، نيتشه، كامو، وسارتر.',
    badge: '🏛️ ركيزة الفلسفة والفكر الإنساني',
    h1: 'الفلسفة والبحث عن المعنى',
    subtitle: '« الفلسفة ليست ترفاً فكرياً، بل بوصلة الوجود وإيقاظ العقل في مواجهة الأسئلة الكبرى. »',
    heroImg: '../articles_page_hero.jpg',
    intro: 'منذ فجر الحضارة، خاض الفلاسفة الكبار غمار الأسئلة الوجودية الأكثر عمقاً: ما معنى الوجود؟ كيف نتعامل مع المعاناة والعبث؟ وما هي حدود حريتنا وإرادتنا؟ في هذا الركن، نجمع لك خلاصات الفكر الوجودي، الرؤى الفلسفية التحررية، ودراسات معمقة حول أفكار نيتشه، شوبنهاور، كامو، وسارتر لتغذية فكرك وتوسيع أفقك.',
    subthemes: [
      {
        title: 'الوجودية وصناعة المعنى',
        desc: 'رؤى سارتر وكامو حول الحرية والمسؤولية وخلق معنى شخصي في عالم صامت.',
        icon: '🌌'
      },
      {
        title: 'إرادة الحياة وتشاؤم شوبنهاور',
        desc: 'تشريح وهم السعادة المادية، وبندول الرغبة، وكيفية بلوغ السكينة بالتجرد.',
        icon: '⏳'
      },
      {
        title: 'إرادة القوة والإنسان الأسمى عند نيتشه',
        desc: 'تحويل الألم إلى طاقة، حب القدر (Amor Fati)، وتجاوز العدمية بالخلق والإبداع.',
        icon: '⚡'
      },
      {
        title: 'الفلسفة الكلاسيكية والعقلانية',
        desc: 'فحص الحياة والعقل الأخلاقي من سقراط وأفلاطون إلى كانط وديكارت.',
        icon: '🏛️'
      }
    ],
    articles: [
      {
        url: '../articles/schopenhauer-happiness-illusion.html',
        title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟',
        desc: 'كيف تحركنا الإرادة العمياء ولماذا نعيش في بندول بين الألم والملل.',
        tag: 'شوبنهاور • تشاؤم فلسفي'
      },
      {
        url: '../articles/nietzsche-psychological-strength.html',
        title: 'كيف تبني قوة نفسية صلبة مستوحاة من فلسفة نيتشه؟',
        desc: 'دروس عملية في احتضان المعاناة وتطبيق مبدأ حب القدر (Amor Fati).',
        tag: 'نيتشه • إرادة القوة'
      },
      {
        url: '../files/absurde-camus.html',
        title: 'العبث والحرية عند ألبير كامو',
        desc: 'أسطورة سيزيف وكيف نعيش بتمرد حر وسعادة واعية في مواجهة العبث.',
        tag: 'كامو • الوجودية والعبث'
      },
      {
        url: '../files/existentialisme-sens-sartre.html',
        title: 'الوجودية وصناعة المعنى عند جان بول سارتر',
        desc: 'الوجود يسبق الماهية: كيف تصنع جوهرك ومصيرك بقراراتك الصادقة.',
        tag: 'سارتر • الحرية والمسؤولية'
      },
      {
        url: '../files/nihilisme-surhomme-nietzsche.html',
        title: 'العدمية ومفهوم الإنسان الأسمى عند نيتشه',
        desc: 'رحلة إعادة تقييم كل القيم وبناء الإنسان القادر على تجاوز ذاته.',
        tag: 'نيتشه • الإنسان الأسمى'
      },
      {
        url: '../files/20-citations-schopenhauer.html',
        title: '20 حكمة خالدة من آرثر شوبنهاور في فن العيش',
        desc: 'تأملات عميقة في قيمة العزلة، حفظ الطاقة، وفهم الطبيعة البشرية.',
        tag: 'شوبنهاور • فن العيش'
      }
    ],
    thinkers: [
      { name: 'آرثر شوبنهاور', role: 'فيلسوف الإرادة والتشاؤم', url: '../thinkers/' },
      { name: 'فريدريش نيتشه', role: 'فيلسوف القوة والمطرقة', url: '../thinkers/' },
      { name: 'ألبير كامو', role: 'رائد الفلسفة العبثية والتمرد', url: '../thinkers/' },
      { name: 'جان بول سارتر', role: 'رائد الوجودية والحرية', url: '../thinkers/' },
      { name: 'سقراط', role: 'أبو الفلسفة وفاحص النفوس', url: '../thinkers/' }
    ],
    audiobooks: [
      { title: 'الغريب (L\'Étranger)', author: 'ألبير كامو', url: '../audio/?book=etranger', desc: 'رحلة صوتية كاملة في شاهكار الفلسفة العبثية.' },
      { title: 'الجريمة والعقاب', author: 'فيودور دوستويفسكي', url: '../audio/?book=crime_punishment', desc: 'أعظم دراسة صوتية في سيكولوجية الذنب والضمير الإنساني.' },
      { title: 'التحول (La Métamorphose)', author: 'فرانز كافكا', url: '../audio/?book=metamorphose', desc: 'أيقونة الاغتراب الإنساني وضياع الهوية.' }
    ]
  },
  {
    folder: 'psychologie',
    slug: 'psychologie',
    title: 'علم النفس — سيكولوجية السلوك، الوعي والذكاء العاطفي | حكمة ونور',
    desc: 'استكشف أعماق النفس البشرية: هيبة الصمت، سيكولوجية الحسد والعلاقات، علاج التفكير المفرط، وعلم نفس الأعماق مع يونغ وفرويد وأدلر.',
    badge: '🧠 ركيزة علم النفس والوعي الإنساني',
    h1: 'علم النفس والوعي الذاتي',
    subtitle: '« من ينظر إلى الخارج يحلم، ومن ينظر إلى الداخل يستيقظ. » — كارل يونغ',
    heroImg: '../quizzes_page_hero.jpg',
    intro: 'النفس البشرية محيط شاسع من الدوافع الخفية، والرغبات المكبوتة، والآليات الدفاعية المعقدة. في هذا الركن، نأخذك في رحلة علمية وتأملية لفهم سيكولوجية الصمت، دوافع الحسد والمقارنة الاجتماعية، أسرار الذكاء العاطفي، وكيفية إيقاف الاجترار الفكري (Overthinking) لبناء شخصية متزنة وواعية بذاتها.',
    subthemes: [
      {
        title: 'سيكولوجية الصمت وهيبة الحضور',
        desc: 'كيف يصنع الهدوء كاريزما استثنائية ويمنحك السيطرة على طاقتك ومحيطك الاجتماعي.',
        icon: '🤫'
      },
      {
        title: 'ديناميكيات الحسد والمقارنة الاجتماعية',
        desc: 'فهم أسباب ابتعاد البعض عند نجاحك، وكيف تحمي سلامك النفسي من السموم الخفية.',
        icon: '👁️'
      },
      {
        title: 'إيقاف التفكير المفرط والاجترار الذهني',
        desc: 'آليات عملية لكسر حلقة القلق المستمر واستعادة صفاء اللحظة الحاضرة.',
        icon: '🧘'
      },
      {
        title: 'سيكولوجية الأعماق والظل النفسي',
        desc: 'استكشاف اللاوعي الجمعي والظل (Shadow) والتكامل الذاتي عند كارل يونغ.',
        icon: '🎭'
      }
    ],
    articles: [
      {
        url: '../articles/why-people-respect-silent-person.html',
        title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟',
        desc: 'التحليل النفسي لقوة الصمت وهيبة الغموض في التواصل الإنساني.',
        tag: 'علم النفس الاجتماعي • كاريزما'
      },
      {
        url: '../articles/why-people-distance-when-you-succeed.html',
        title: 'لماذا يبتعد الناس عنك عندما تنجح؟ التفسير النفسي للحسد',
        desc: 'سيكولوجية الغيرة الاجتماعية وكيفية التعامل مع تغير سلوك المحيطين.',
        tag: 'سيكولوجية العلاقات • الحسد'
      },
      {
        url: '../files/stop-overthinking.html',
        title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟',
        desc: 'خطوات نفسية لترويض العقل المشغول والتحرر من سيناريوهات القلق.',
        tag: 'صحة نفسية • سكينة'
      },
      {
        url: '../files/intelligence-emotionnelle-stoicisme.html',
        title: 'الذكاء العاطفي والتحكم بالانفعالات',
        desc: 'تقنيات نفسية ورواقية لإدارة الغضب وتحويل الانفعالات إلى وعي رصين.',
        tag: 'ذكاء عاطفي • اتزان'
      },
      {
        url: '../articles/7-errors-mind-growth.html',
        title: '7 أخطاء تمنع عقلك من النضج والتطور الفكري',
        desc: 'تفكيك الفخاخ الذهنية والمغالطات الإدراكية التي تعيق التفكير النقدي.',
        tag: 'علم النفس المعرفي • نمو'
      }
    ],
    thinkers: [
      { name: 'كارل غوستاف يونغ', role: 'رائد علم نفس الأعماق ومكتشف الظل', url: '../thinkers/' },
      { name: 'سيغموند فرويد', role: 'مؤسس التحليل النفسي واللاوعي', url: '../thinkers/' },
      { name: 'ألفريد أدلر', role: 'رائد علم النفس الفردي وعقدة النقص', url: '../thinkers/' }
    ],
    audiobooks: [
      { title: 'رسائل إلى ميلينا', author: 'فرانز كافكا', url: '../audio/?book=milena', desc: 'أعمق اعترافات نفسية وعاطفية في تاريخ الأدب المسموع.' }
    ]
  },
  {
    folder: 'developpement-personnel',
    slug: 'developpement-personnel',
    title: 'تطوير الذات — الانضباط، العادات، والصلابة الذهنية | حكمة ونور',
    desc: 'أدلة عملية ومقالات عميقة في بناء الانضباط الذاتي، التخلص من العادات المدمرة، تأسيس الثقة الحقيقية، والارتقاء بالأداء الذهني.',
    badge: '⚡ ركيزة تطوير الذات والارتقاء الفكري',
    h1: 'تطوير الذات وبناء الصلابة الذهنية',
    subtitle: '« نحن ما نكرر فعله باستمرار؛ فالتميز إذن ليس فعلاً، بل عادة. » — أرسطو',
    heroImg: '../shop_page_hero.jpg',
    intro: 'التطوير الحقيقي للذات لا يقوم على الحماس المؤقت أو الشعارات البراقة، بل على تأسيس عادات يومية صلبة، وبناء انضباط ذاتي واعٍ، وفهم الآليات العقلية التي تقود إلى النجاح والاستقرار النفسي. هنا تجد خلاصة ما توصلت إليه الفلسفة العملية وعلم النفس المعاصر لتطوير شخصيتك وتحقيق أهدافك بوعي واتزان.',
    subthemes: [
      {
        title: 'الانضباط الذاتي وقوة الإرادة',
        desc: 'كيف تتغلب على المماطلة وتتحكم في رغباتك العشوائية لبناء نمط حياة منتج.',
        icon: '🛡️'
      },
      {
        title: 'بناء العادات والتخلص من المدمرات',
        desc: 'هندسة الروتين اليومي وتحويل الأفعال الصغيرة إلى نتائج استثنائية تراكمية.',
        icon: '⚙️'
      },
      {
        title: 'الثقة الأصيلة والاستقلال العاطفي',
        desc: 'بناء تقدير ذاتي نابع من الداخل دون الحاجة لطلب التأكيد الخارجي المستمر.',
        icon: '💎'
      },
      {
        title: 'المرونة الذهنية وإدارة الوقت',
        desc: 'استراتيجيات الحفاظ على التركيز العميق في عصر التشتت الرقمي.',
        icon: '🎯'
      }
    ],
    articles: [
      {
        url: '../articles/true-confidence-inside.html',
        title: 'الثقة الحقيقية بالنفس تنبع من الداخل',
        desc: 'كيف تبني تقديراً ذاتياً متيناً ومستقلاً عن آراء وإعجاب الآخرين.',
        tag: 'ثقة بالنفس • استقلال'
      },
      {
        url: '../files/self-discipline.html',
        title: 'الانضباط الذاتي وقوة الإرادة عند الفلاسفة القدماء',
        desc: 'أسرار السيطرة على النفس وبناء الإرادة الحديدية وفق تعاليم الحكماء.',
        tag: 'انضباط • إرادة'
      },
      {
        url: '../articles/7-habits/index.html',
        title: '٧ عادات تدمر إمكانياتك دون أن تشعر',
        desc: 'كشف العادات الخفية التي تستنزف طاقتك مع حلول عملية لاستبدالها.',
        tag: 'عادات ذرية • نمو'
      },
      {
        url: '../articles/7-errors-mind-growth.html',
        title: '7 أخطاء تمنع عقلك من النضج والتطور الفكري',
        desc: 'تجاوز الأنماط السلوكية التي تعيق التطور والارتقاء الشخصي.',
        tag: 'عقلية النمو • وعي'
      }
    ],
    thinkers: [
      { name: 'ماركوس أوريليوس', role: 'إمبراطور الحكمة والانضباط اليومي', url: '../thinkers/' },
      { name: 'إبيكتيتوس', role: 'فيلسوف الإرادة والحرية الداخلية', url: '../thinkers/' },
      { name: 'أرسطو', role: 'فيلسوف الفضيلة وبناء العادات', url: '../thinkers/' }
    ],
    audiobooks: [
      { title: 'الخيميائي (L\'Alchimiste)', author: 'باولو كويلو', url: '../audio/?book=alchemist', desc: 'رحلة البحث عن الأسطورة الشخصية والاستماع إلى صوت القلب.' },
      { title: 'الشيخ والبحر', author: 'إرنست همنغواي', url: '../audio/?book=vieil_homme', desc: 'أيقونة الصبر والإصرار وعدم الاستسلام أمام قسوة الظروف.' }
    ]
  },
  {
    folder: 'sagesse',
    slug: 'sagesse',
    title: 'الحكمة — الفلسفة الرواقية، السكينة وفن العيش الواعي | حكمة ونور',
    desc: 'اكتشف جوهر الحكمة الكلاسيكية: القلعة الداخلية الرواقية، السعادة البسيطة الأبيقورية، فن العزلة الواعية، وتقويم الحكمة ٣٦٥ يوماً.',
    badge: '🌿 ركيزة الحكمة وفن العيش الهادئ',
    h1: 'الحكمة والسكينة الداخلية',
    subtitle: '« لا نملك التحكم في الرياح، لكننا نملك دائماً توجيه أشرعتنا. » — إبيكتيتوس',
    heroImg: '../quotes_page_hero.jpg',
    intro: 'الحكمة هي فن التمييز بين ما هو في نطاق قدرتنا وما يخرج عنه، وهي القدرة على الحفاظ على الصفاء الداخلي وسط عواصف العالم الخارجي. في هذا الركن، نقدم لك تعاليم الرواقية الخالدة لماركوس أوريليوس وسينيكا، وسحر البساطة عند أبيقور، وفلسفة العزلة الإيجابية، بالإضافة إلى تقويمنا الفلسفي اليومي ۳٦٥ يوماً من التأمل.',
    subthemes: [
      {
        title: 'الفلسفة الرواقية والقلعة الداخلية',
        desc: 'ثنائية التحكم، حب القدر (Amor Fati)، وبناء مناعة نفسية ضد الاضطرابات.',
        icon: '🏛️'
      },
      {
        title: 'الأبيقورية وفن السعادة البسيطة',
        desc: 'التحرر من الرغبات الزائفة واكتشاف لذة السكينة الذهنية (Ataraxia).',
        icon: '🍃'
      },
      {
        title: 'فن العزلة الإيجابية والخلوة بالذات',
        desc: 'كيف تكون العزلة وطناً للأحرار ومنبعاً للصفاء الذهني والتجدد الإبداعي.',
        icon: '🕯️'
      },
      {
        title: 'تقويم الحكمة ٣٦٥ يوماً',
        desc: 'جرعة يومية من التأمل الفلسفي لتغذية العقل والروح على مدار العام.',
        icon: '📅'
      }
    ],
    articles: [
      {
        url: '../files/stoicisme-force-calme.html',
        title: 'الرواقية: فلسفة القوة والهدوء الداخلي',
        desc: 'دليل عملي لتطبيق المبادئ الرواقية في بناء القلعة النفسية الحصينة.',
        tag: 'رواقية • قلعة داخلية'
      },
      {
        url: '../files/introduction-stoicisme.html',
        title: 'مدخل شامل إلى الفلسفة الرواقية',
        desc: 'تاريخ الفلسفة الرواقية من زينون إلى ماركوس أوريليوس وأهم تعاليمها.',
        tag: 'تاريخ الفلسفة • مبادئ'
      },
      {
        url: '../articles/happiness-in-wrong-place.html',
        title: 'لماذا نبحث عن السعادة في المكان الخاطئ؟',
        desc: 'كشف سراب الملذات المادية وكيفية العثور على السلام الحقيقي في السكون.',
        tag: 'بحث عن السعادة • رضا'
      },
      {
        url: '../articles/solitude-blessing-or-curse.html',
        title: 'العزلة بين النعمة والنقمة: ماذا قال عنها الفلاسفة؟',
        desc: 'رؤية مونتيني وشوبنهاور لقيمة الخلوة بالذات والارتقاء الروحي.',
        tag: 'عزلة إيجابية • صفاء'
      },
      {
        url: '../files/epicurisme-bonheur.html',
        title: 'الأبيقورية وفن السعادة البسيطة والسكينة',
        desc: 'فلسفة أبيقور في راحة البال والتصالح مع بساطة الحياة.',
        tag: 'أبيقورية • أتاراكسيا'
      },
      {
        url: '../articles/hikma-citations-philosophiques.html',
        title: 'أقوال وحكم خالدة في فلسفة الحياة والسكينة',
        desc: 'مجموعة مختارة من أعمق الاقتباسات الرواقية مع شروحات عملية لحياتك.',
        tag: 'اقتباسات • حكم خالدة'
      }
    ],
    thinkers: [
      { name: 'ماركوس أوريليوس', role: 'فيلسوف الإمبراطورية والضمير الرواقي', url: '../thinkers/' },
      { name: 'سينيكا', role: 'معلم الحكمة وقصر الحياة', url: '../thinkers/' },
      { name: 'إبيكتيتوس', role: 'فيلسوف الحرية وثنائية التحكم', url: '../thinkers/' },
      { name: 'أبيقور', role: 'فيلسوف السعادة البسيطة وراحة البال', url: '../thinkers/' },
      { name: 'ميشيل دي مونتيني', role: 'حكيم العزلة والبحث في النفس', url: '../thinkers/' }
    ],
    audiobooks: [
      { title: 'الأمير الصغير (Le Petit Prince)', author: 'أنطوان دو سانت-إكزوبيري', url: '../audio/?book=petit_prince', desc: 'أجمل رحلة صوتية في الحكمة، الصداقة، والبحث عما هو جوهري في الحياة.' }
    ]
  }
];

function generatePillarHtml(p) {
  const canonicalUrl = `${domain}/${p.slug}/`;
  
  const subthemesHtml = p.subthemes.map(s => `
    <div class="pillar-subtheme-card">
      <div class="pillar-subtheme-icon">${s.icon}</div>
      <h3 class="pillar-subtheme-title">${s.title}</h3>
      <p class="pillar-subtheme-desc">${s.desc}</p>
    </div>
  `).join('\n');

  const articlesHtml = p.articles.map(a => `
    <article class="pillar-article-card">
      <div class="pillar-card-badge">${a.tag}</div>
      <h3 class="pillar-card-title"><a href="${a.url}">${a.title}</a></h3>
      <p class="pillar-card-desc">${a.desc}</p>
      <a href="${a.url}" class="pillar-card-link">قراءة المقال كاملاً ←</a>
    </article>
  `).join('\n');

  const thinkersHtml = p.thinkers.map(t => `
    <div class="pillar-thinker-item">
      <div class="pillar-thinker-avatar">🏛️</div>
      <div class="pillar-thinker-info">
        <h4 class="pillar-thinker-name">${t.name}</h4>
        <span class="pillar-thinker-role">${t.role}</span>
      </div>
      <a href="${t.url}" class="pillar-thinker-btn" aria-label="عرض سيرة ${t.name}">السيرة →</a>
    </div>
  `).join('\n');

  const audioHtml = p.audiobooks.map(b => `
    <div class="pillar-audio-card">
      <div class="pillar-audio-icon">🎧</div>
      <div class="pillar-audio-content">
        <div class="pillar-audio-badge">تسجيل صوتي كامل</div>
        <h4 class="pillar-audio-title">${b.title}</h4>
        <div class="pillar-audio-author">${b.author}</div>
        <p class="pillar-audio-desc">${b.desc}</p>
      </div>
      <a href="${b.url}" class="pillar-audio-btn">استمع الآن 🎙️</a>
    </div>
  `).join('\n');

  return `<!DOCTYPE html>
<html lang="ar" data-theme="dark" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <title>${p.title}</title>
  <meta name="description" content="${p.desc}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="alternate" hreflang="ar" href="${canonicalUrl}">
  <link rel="alternate" hreflang="fr" href="${canonicalUrl}">
  <link rel="alternate" hreflang="en" href="${canonicalUrl}">
  <link rel="alternate" hreflang="x-default" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="../brand_logo_official.png">

  <!-- Open Graph -->
  <meta property="og:site_name" content="Hikma & Nour — حكمة ونور">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${p.title}">
  <meta property="og:description" content="${p.desc}">
  <meta property="og:image" content="${domain}/${p.heroImg.replace('../', '')}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="ar_AR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${p.title}">
  <meta name="twitter:description" content="${p.desc}">
  <meta name="twitter:image" content="${domain}/${p.heroImg.replace('../', '')}">

  <!-- JSON-LD Structured Data Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "${canonicalUrl}#webpage",
        "url": "${canonicalUrl}",
        "name": ${JSON.stringify(p.title)},
        "description": ${JSON.stringify(p.desc)},
        "inLanguage": "ar",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Hikma & Nour",
          "url": "${domain}/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "${domain}/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": ${JSON.stringify(p.h1)},
            "item": "${canonicalUrl}"
          }
        ]
      }
    ]
  }
  </script>

  <!-- Main Stylesheet (Shared) -->
  <link rel="stylesheet" href="../style.css?v=14">
  
  <style>
    /* Pillar Page Specific Styles */
    .pillar-hero {
      background: linear-gradient(180deg, rgba(7, 10, 8, 0.82) 0%, rgba(7, 10, 8, 0.96) 100%), url('${p.heroImg}') center/cover no-repeat;
      border: 1px solid var(--border-gold);
      border-radius: 28px;
      padding: 50px 40px;
      margin: 30px 0 50px;
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
      position: relative;
      overflow: hidden;
    }
    
    .pillar-badge {
      display: inline-block;
      background: rgba(223, 177, 91, 0.15);
      border: 1px solid var(--accent-gold);
      color: var(--accent-gold);
      padding: 6px 18px;
      border-radius: 30px;
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .pillar-title {
      font-size: 2.6rem;
      color: var(--text-primary);
      margin-bottom: 16px;
      font-family: 'Playfair Display', 'Amiri', serif;
      line-height: 1.25;
    }

    .pillar-subtitle {
      font-size: 1.25rem;
      color: var(--accent-gold);
      font-style: italic;
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .pillar-intro-text {
      font-size: 1.12rem;
      color: var(--text-secondary);
      line-height: 1.9;
      max-width: 900px;
    }

    .pillar-section-heading {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 60px 0 30px;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--card-border);
    }

    .pillar-section-heading h2 {
      font-size: 1.85rem;
      color: var(--accent-gold);
      margin: 0;
      font-family: 'Playfair Display', 'Amiri', serif;
    }

    .pillar-subthemes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .pillar-subtheme-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 24px;
      transition: all 0.3s ease;
    }

    .pillar-subtheme-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-gold);
      box-shadow: 0 10px 25px rgba(223, 177, 91, 0.15);
    }

    .pillar-subtheme-icon {
      font-size: 2rem;
      margin-bottom: 12px;
    }

    .pillar-subtheme-title {
      font-size: 1.2rem;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    .pillar-subtheme-desc {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .pillar-articles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 26px;
    }

    .pillar-article-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 26px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s ease;
    }

    .pillar-article-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-gold);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    .pillar-card-badge {
      font-size: 0.8rem;
      color: var(--accent-gold);
      font-weight: 600;
      margin-bottom: 10px;
    }

    .pillar-card-title {
      font-size: 1.25rem;
      line-height: 1.45;
      margin-bottom: 12px;
    }

    .pillar-card-title a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.2s;
    }

    .pillar-card-title a:hover {
      color: var(--accent-gold);
    }

    .pillar-card-desc {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.65;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .pillar-card-link {
      color: var(--accent-gold);
      font-weight: 700;
      text-decoration: none;
      font-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .pillar-thinkers-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
    }

    .pillar-thinker-item {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 18px;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      justify-content: space-between;
    }

    .pillar-thinker-avatar {
      font-size: 1.6rem;
    }

    .pillar-thinker-info {
      flex-grow: 1;
    }

    .pillar-thinker-name {
      font-size: 1.05rem;
      color: var(--text-primary);
      margin: 0 0 4px 0;
    }

    .pillar-thinker-role {
      font-size: 0.8rem;
      color: var(--text-secondary);
      display: block;
    }

    .pillar-thinker-btn {
      color: var(--accent-gold);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 700;
    }

    .pillar-audio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .pillar-audio-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .pillar-audio-badge {
      font-size: 0.75rem;
      color: var(--accent-gold);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .pillar-audio-title {
      font-size: 1.2rem;
      color: var(--text-primary);
      margin: 0 0 6px 0;
    }

    .pillar-audio-author {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 12px;
    }

    .pillar-audio-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .pillar-audio-btn {
      background: rgba(223, 177, 91, 0.15);
      border: 1px solid var(--accent-gold);
      color: var(--accent-gold);
      padding: 10px 20px;
      border-radius: 30px;
      text-decoration: none;
      text-align: center;
      font-weight: 700;
      font-size: 0.95rem;
      transition: all 0.2s ease;
    }

    .pillar-audio-btn:hover {
      background: var(--accent-gold);
      color: #070A08;
    }

    .pillar-breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin: 20px 0 10px;
    }

    .pillar-breadcrumbs a {
      color: var(--text-secondary);
      text-decoration: none;
    }

    .pillar-breadcrumbs a:hover {
      color: var(--accent-gold);
    }
  </style>
</head>
<body>

  <!-- Background Decorative Glowing Orbs -->
  <div class="glowing-orbs" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- Header Sticky Navigation Bar -->
  <header class="navbar-header">
    <nav class="navbar" aria-label="Navigation principale">
      <a href="../" class="nav-brand" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
        <img src="../brand_logo_official.png" alt="حكمة ونور" class="brand-logo-img">
        <div style="display: flex; flex-direction: column; line-height: 1.1; text-align: left;">
          <span class="brand-name" style="font-size: 1.15rem; font-weight: 800; font-family: 'Playfair Display', serif; color: var(--text-primary);">HIKMA & NOUR</span>
          <span style="font-size: 0.6rem; font-weight: 600; color: var(--text-secondary); letter-spacing: 0.5px;">الحكمة • الفلسفة • علم النفس</span>
        </div>
      </a>
      
      <button class="nav-hamburger" id="navHamburger" aria-label="Ouvrir le menu">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-menu" id="navMenu">
        <a href="../" class="nav-link">الرئيسية</a>
        <a href="../philosophie/" class="nav-link ${p.slug === 'philosophie' ? 'active' : ''}">الفلسفة</a>
        <a href="../psychologie/" class="nav-link ${p.slug === 'psychologie' ? 'active' : ''}">علم النفس</a>
        <a href="../developpement-personnel/" class="nav-link ${p.slug === 'developpement-personnel' ? 'active' : ''}">تطوير الذات</a>
        <a href="../sagesse/" class="nav-link ${p.slug === 'sagesse' ? 'active' : ''}">الحكمة</a>
        <a href="../thinkers/" class="nav-link">الفلاسفة</a>
        <a href="../quotes/" class="nav-link">اقتباسات</a>
        <a href="../audio/" class="nav-link">الصوتيات</a>
      </div>

      <div class="nav-actions">
        <button id="themeToggleBtn" class="theme-btn-nav" aria-label="Changer de thème">
          <svg class="sun-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="moon-icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </div>
    </nav>
  </header>

  <div class="container">
    <main style="padding-top: 20px;">
      
      <!-- Breadcrumbs -->
      <nav class="pillar-breadcrumbs" aria-label="Fil d'Ariane">
        <a href="../">الرئيسية</a>
        <span>›</span>
        <span>الأقسام الرئيسية</span>
        <span>›</span>
        <span style="color: var(--accent-gold);">${p.h1}</span>
      </nav>

      <!-- Pillar Hero Header -->
      <section class="pillar-hero">
        <span class="pillar-badge">${p.badge}</span>
        <h1 class="pillar-title">${p.h1}</h1>
        <p class="pillar-subtitle">${p.subtitle}</p>
        <p class="pillar-intro-text">${p.intro}</p>
      </section>

      <!-- Sub-themes Section -->
      <section>
        <div class="pillar-section-heading">
          <h2>المحاور الفكرية الأساسية</h2>
        </div>
        <div class="pillar-subthemes-grid">
          ${subthemesHtml}
        </div>
      </section>

      <!-- Articles Section -->
      <section>
        <div class="pillar-section-heading">
          <h2>أهم المقالات والدراسات المعمقة</h2>
        </div>
        <div class="pillar-articles-grid">
          ${articlesHtml}
        </div>
      </section>

      <!-- Thinkers Section -->
      <section>
        <div class="pillar-section-heading">
          <h2>أبرز الفلاسفة والمفكرين في هذا المحور</h2>
        </div>
        <div class="pillar-thinkers-row">
          ${thinkersHtml}
        </div>
      </section>

      <!-- Audio Section -->
      <section style="margin-bottom: 60px;">
        <div class="pillar-section-heading">
          <h2>أعمال صوتية ومسموعة مختارة</h2>
        </div>
        <div class="pillar-audio-grid">
          ${audioHtml}
        </div>
      </section>

    </main>
  </div>

  <!-- Shared Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="text-align: center; padding: 40px 0 20px; color: var(--text-secondary); font-size: 0.9rem;">
        <p>© 2026 حكمة ونور (HIKMA & NOUR) — Le Jardin des Pensées. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </footer>

  <script src="../app_v11.js?v=14" type="module"></script>
</body>
</html>`;
}

// Generate the 4 pillar folders and index.html files
pillars.forEach(p => {
  if (!fs.existsSync(p.folder)) {
    fs.mkdirSync(p.folder, { recursive: true });
  }
  const html = generatePillarHtml(p);
  const filePath = path.join(p.folder, 'index.html');
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated pillar page: ${filePath}`);
});

console.log('All 4 Pillar pages generated successfully!');
