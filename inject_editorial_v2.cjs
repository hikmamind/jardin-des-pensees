const fs = require('fs');
const path = require('path');

const domain = 'https://jardin-des-pensees.onrender.com';

// Define the editorial enhancements for articles in articles/
const articlesEditorial = [
  {
    file: 'articles/schopenhauer-happiness-illusion.html',
    thinker: {
      name: 'آرثر شوبنهاور',
      role: 'فيلسوف الإرادة والتشاؤم الميتافيزيقي',
      url: '../thinkers/'
    },
    audio: {
      title: 'رسائل إلى ميلينا — فرانز كافكا',
      url: '../audio/?book=milena',
      desc: 'استمع إلى عمق المعاناة الوجودية والرهافة النفسية في الأدب المسموع.'
    },
    faq: [
      {
        q: 'لماذا اعتبر شوبنهاور أن كل لذة هي مجرد غياب للألم؟',
        a: 'يرى شوبنهاور أن الألم إيجابي ومحسوس مباشرة، بينما اللذة سلبية لأنها مجرد توقف مؤقت لمعاناة الحرمان والرغبة، وسرعان ما ينقلب الشبع إلى ملل.'
      },
      {
        q: 'كيف يمكن للإنسان الوصول إلى السلام النفسي حسب شوبنهاور؟',
        a: 'عبر ترويض إرادة الحياة، والاستغناء الواعي عن الرغبات اللانهائية، والتأمل الفلسفي والفني، والاستمتاع بالخلوة والسكينة الذاتية.'
      }
    ],
    readNext: [
      {
        url: 'happiness-in-wrong-place.html',
        title: 'لماذا نبحث عن السعادة في المكان الخاطئ؟',
        tag: 'فلسفة السعادة'
      },
      {
        url: '../files/20-citations-schopenhauer.html',
        title: '20 حكمة خالدة من آرثر شوبنهاور في فن العيش',
        tag: 'حكم شوبنهاور'
      },
      {
        url: 'solitude-blessing-or-curse.html',
        title: 'العزلة بين النعمة والنقمة: ماذا قال عنها الفلاسفة؟',
        tag: 'فلسفة العزلة'
      }
    ]
  },
  {
    file: 'articles/why-people-respect-silent-person.html',
    thinker: {
      name: 'كارل غوستاف يونغ',
      role: 'رائد علم نفس الأعماق واللاوعي الجمعي',
      url: '../thinkers/'
    },
    faq: [
      {
        q: 'لماذا يمنح الصمت هيبة وجاذبية خاصة للشخص؟',
        a: 'لأن الصمت الواعي يعكس تحكماً ذاتياً عالياً، ويخلق مساحة من الغموض تدفع الآخرين للإنصات والاهتمام بكلماته القليلة والموزونة.'
      },
      {
        q: 'ما الفرق بين الصمت الناتج عن الخجل والصمت الناتج عن القوة؟',
        a: 'صمت الخجل يصاحبه توتر ولغة جسد منغلقة وهروب من التواصل، بينما صمت القوة يصاحبه تواصل بصري هادئ وثقة وحضور ذهني كامل.'
      },
      {
        q: 'كيف أتدرب على ممارسة الصمت الحكيم في حياتي اليومية؟',
        a: 'بالتوقف لثانيتين قبل الرد في أي حوار، وتجنب الرغبة الفورية في تبرير نفسك أو إثبات وجهة نظرك في النقاشات العقيمة.'
      }
    ],
    readNext: [
      {
        url: 'why-people-distance-when-you-succeed.html',
        title: 'لماذا يبتعد الناس عنك عندما تنجح؟ التفسير النفسي للحسد',
        tag: 'علم النفس الاجتماعي'
      },
      {
        url: 'true-confidence-inside.html',
        title: 'الثقة الحقيقية بالنفس تنبع من الداخل',
        tag: 'تطوير الذات'
      },
      {
        url: '../files/stop-overthinking.html',
        title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟',
        tag: 'سكينة نفسية'
      }
    ]
  },
  {
    file: 'articles/why-people-distance-when-you-succeed.html',
    thinker: {
      name: 'ألفريد أدلر',
      role: 'رائد علم النفس الفردي وعقدة النقص والمقارنة',
      url: '../thinkers/'
    },
    faq: [
      {
        q: 'لماذا يشعر بعض الأصدقاء بالضيق أو الابتعاد عند نجاحك؟',
        a: 'نجاحك يكسر التوازن المألوف في العلاقة، وقد يوقظ دون قصد مشاعر النقص أو المقارنة الذاتية لديهم، مما يدفعهم للانسحاب كآلية دفاعية.'
      },
      {
        q: 'كيف أعرف الفرق بين الصديق الحقيقي والصديق الحاسد؟',
        a: 'الصديق الحقيقي يفرح لتقدمك دون تصنع ويسندك في تعثرك، بينما الحاسد يقلل من إنجازاتك أو يختفي في لحظات تتويجك.'
      },
      {
        q: 'هل يجب عليّ مواجهة من ابتعدوا أم تركهم بسلام؟',
        a: 'الحكمة تقتضي عدم الدخول في صراعات أو عتاب مرهق؛ ركز على مسارك وامنح كل شخص مساحته النفسية دون ضغينة.'
      }
    ],
    readNext: [
      {
        url: 'why-people-respect-silent-person.html',
        title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟',
        tag: 'سيكولوجية الهيبة'
      },
      {
        url: 'true-confidence-inside.html',
        title: 'الثقة الحقيقية بالنفس تنبع من الداخل',
        tag: 'ثقة ذاتية'
      },
      {
        url: '7-errors-mind-growth.html',
        title: '7 أخطاء تمنع عقلك من النضج والتطور الفكري',
        tag: 'نضج فكري'
      }
    ]
  },
  {
    file: 'articles/nietzsche-psychological-strength.html',
    thinker: {
      name: 'فريدريش نيتشه',
      role: 'فيلسوف القوة والمطرقة وتجاوز الذات',
      url: '../thinkers/'
    },
    audio: {
      title: 'الغريب (L\'Étranger) — ألبير كامو',
      url: '../audio/?book=etranger',
      desc: 'استمع إلى تجسيد التمرد الوجودي والحرية في الأدب الكلاسيكي.'
    },
    faq: [
      {
        q: 'ما هو مفهوم حب القدر (Amor Fati) عند نيتشه؟',
        a: 'هو ليس مجرد استسلام للواقع، بل احتضان كل ما يحدث في حياتك — بما في ذلك الألم والمعاناة — باعتباره ضرورياً ومغذياً لنموك وقوتك.'
      },
      {
        q: 'كيف يمكن تطبيق فلسفة نيتشه في مواجهة الصدمات النفسية؟',
        a: 'بإعادة تأطير الصدمة من موقع الضحية إلى موقع المتعلم الذي تصقله التجارب: «ما لا يقتلني يجعلني أقوى».'
      }
    ],
    readNext: [
      {
        url: '../files/nihilisme-surhomme-nietzsche.html',
        title: 'العدمية ومفهوم الإنسان الأسمى عند نيتشه',
        tag: 'فلسفة نيتشه'
      },
      {
        url: '../files/self-discipline.html',
        title: 'الانضباط الذاتي وقوة الإرادة عند الفلاسفة القدماء',
        tag: 'إرادة صلبة'
      },
      {
        url: '../files/absurde-camus.html',
        title: 'العبث والحرية عند ألبير كامو',
        tag: 'الوجودية والعبث'
      }
    ]
  },
  {
    file: 'articles/7-errors-mind-growth.html',
    thinker: {
      name: 'سقراط',
      role: 'أبو الفلسفة والتفكير النقدي وفاحص النفوس',
      url: '../thinkers/'
    },
    readNext: [
      {
        url: 'true-confidence-inside.html',
        title: 'الثقة الحقيقية بالنفس تنبع من الداخل',
        tag: 'تطوير الذات'
      },
      {
        url: '7-habits/index.html',
        title: '٧ عادات تدمر إمكانياتك دون أن تشعر',
        tag: 'عادات يومية'
      },
      {
        url: '../files/stop-overthinking.html',
        title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟',
        tag: 'وعي ذهني'
      }
    ]
  },
  {
    file: 'articles/happiness-in-wrong-place.html',
    thinker: {
      name: 'أبيقور',
      role: 'فيلسوف السعادة البسيطة والسكينة الذهنية',
      url: '../thinkers/'
    },
    audio: {
      title: 'الأمير الصغير (Le Petit Prince)',
      url: '../audio/?book=petit_prince',
      desc: 'استمع إلى حكمة العثور على الجوهر النقي والبسيط في الحياة.'
    },
    readNext: [
      {
        url: 'schopenhauer-happiness-illusion.html',
        title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟',
        tag: 'فلسفة شوبنهاور'
      },
      {
        url: '../files/epicurisme-bonheur.html',
        title: 'الأبيقورية وفن السعادة البسيطة والسكينة',
        tag: 'أبيقورية'
      },
      {
        url: '../files/stoicisme-force-calme.html',
        title: 'الرواقية: فلسفة القوة والهدوء الداخلي',
        tag: 'رواقية'
      }
    ]
  },
  {
    file: 'articles/solitude-blessing-or-curse.html',
    thinker: {
      name: 'ميشيل دي مونتيني',
      role: 'حكيم العزلة والبحث في خبايا النفس',
      url: '../thinkers/'
    },
    readNext: [
      {
        url: 'schopenhauer-happiness-illusion.html',
        title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟',
        tag: 'فلسفة شوبنهاور'
      },
      {
        url: 'why-people-respect-silent-person.html',
        title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟',
        tag: 'هيبة الصمت'
      },
      {
        url: '../files/20-citations-schopenhauer.html',
        title: '20 حكمة خالدة من آرثر شوبنهاور في فن العيش',
        tag: 'حكم العزلة'
      }
    ]
  },
  {
    file: 'articles/true-confidence-inside.html',
    thinker: {
      name: 'ماركوس أوريليوس',
      role: 'فيلسوف الإمبراطورية والضمير الرواقي',
      url: '../thinkers/'
    },
    audio: {
      title: 'الخيميائي (L\'Alchimiste) — باولو كويلو',
      url: '../audio/?book=alchemist',
      desc: 'رحلة الثقة بالنفس والاستماع إلى صوت القلب الداخلي.'
    },
    readNext: [
      {
        url: '7-errors-mind-growth.html',
        title: '7 أخطاء تمنع عقلك من النضج والتطور الفكري',
        tag: 'نضج نفسي'
      },
      {
        url: '../files/self-discipline.html',
        title: 'الانضباط الذاتي وقوة الإرادة عند الفلاسفة القدماء',
        tag: 'انضباط ذاتي'
      },
      {
        url: 'why-people-respect-silent-person.html',
        title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟',
        tag: 'كاريزما داخلية'
      }
    ]
  },
  {
    file: 'articles/hikma-citations-philosophiques.html',
    thinker: {
      name: 'سينيكا',
      role: 'معلم الحكمة وقصر الحياة الرواقي',
      url: '../thinkers/'
    },
    readNext: [
      {
        url: '../quotes/calendar/',
        title: 'تقويم الحكمة ٣٦٥ يوماً من التأمل الفلسفي',
        tag: 'تقويم الحكمة'
      },
      {
        url: '../files/stoicisme-force-calme.html',
        title: 'الرواقية: فلسفة القوة والهدوء الداخلي',
        tag: 'رواقية'
      },
      {
        url: 'happiness-in-wrong-place.html',
        title: 'لماذا نبحث عن السعادة في المكان الخاطئ؟',
        tag: 'سعادة حقيقية'
      }
    ]
  }
];

// Helper to inject rich editorial components into articles/*.html
articlesEditorial.forEach(item => {
  if (!fs.existsSync(item.file)) return;
  let content = fs.readFileSync(item.file, 'utf8');

  // Build Read Next HTML
  const readNextHtml = `
    <!-- Editorial V2: Section À lire ensuite -->
    <div class="editorial-read-next-box" style="margin: 50px 0 30px; padding: 28px; background: var(--card-inner, var(--card-bg)); border: 1.5px solid var(--border-gold); border-radius: 20px;">
      <div style="font-size: 1.25rem; font-weight: bold; color: var(--accent-gold); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
        <span>📚 مقالات وتأملات موصى بها لك :</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        ${item.readNext.map(r => `
          <a href="${r.url}" style="display: block; padding: 18px; background: rgba(0,0,0,0.15); border: 1px solid var(--border-gold); border-radius: 14px; text-decoration: none; color: inherit; transition: all 0.2s ease;">
            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; display: block; margin-bottom: 6px;">${r.tag}</span>
            <span style="font-size: 1rem; font-weight: 600; line-height: 1.4; color: var(--text-brown, var(--text-primary)); display: block;">${r.title} ←</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  // Build Thinker & Audio Connection Card
  let thinkerCardHtml = '';
  if (item.thinker || item.audio) {
    thinkerCardHtml = `
    <!-- Editorial V2: Maillage Penseur & Audio -->
    <div class="editorial-connection-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 40px 0;">
      ${item.thinker ? `
        <div style="padding: 22px; background: var(--card-inner, var(--card-bg)); border: 1px solid var(--border-gold); border-radius: 18px; display: flex; align-items: center; gap: 16px;">
          <div style="font-size: 2.2rem;">🏛️</div>
          <div style="flex-grow: 1;">
            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase;">فيلسوف المحور</span>
            <h4 style="margin: 4px 0; font-size: 1.15rem; color: var(--text-brown, var(--text-primary));">${item.thinker.name}</h4>
            <span style="font-size: 0.85rem; color: var(--text-brown-muted, var(--text-secondary));">${item.thinker.role}</span>
          </div>
          <a href="${item.thinker.url}" style="padding: 8px 14px; background: rgba(223, 177, 91, 0.15); border: 1px solid var(--accent-gold); color: var(--accent-gold); border-radius: 20px; text-decoration: none; font-size: 0.85rem; font-weight: bold;">السيرة →</a>
        </div>
      ` : ''}
      ${item.audio ? `
        <div style="padding: 22px; background: var(--card-inner, var(--card-bg)); border: 1px solid var(--border-gold); border-radius: 18px; display: flex; align-items: center; gap: 16px;">
          <div style="font-size: 2.2rem;">🎧</div>
          <div style="flex-grow: 1;">
            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase;">كتاب صوتي مرتبط</span>
            <h4 style="margin: 4px 0; font-size: 1.15rem; color: var(--text-brown, var(--text-primary));">${item.audio.title}</h4>
            <span style="font-size: 0.85rem; color: var(--text-brown-muted, var(--text-secondary));">${item.audio.desc}</span>
          </div>
          <a href="${item.audio.url}" style="padding: 8px 14px; background: var(--accent-gold); color: #070A08; border-radius: 20px; text-decoration: none; font-size: 0.85rem; font-weight: bold;">استمع 🎙️</a>
        </div>
      ` : ''}
    </div>
    `;
  }

  // Build FAQ HTML & Schema if available
  let faqHtml = '';
  let faqSchema = '';
  if (item.faq && item.faq.length > 0) {
    faqHtml = `
    <!-- Editorial V2: Section FAQ Contextuelle -->
    <div class="editorial-faq-section" style="margin: 45px 0; padding: 28px; background: var(--card-inner, var(--card-bg)); border: 1px solid var(--border-gold); border-radius: 20px;">
      <h3 style="font-size: 1.35rem; color: var(--accent-gold); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
        <span>❓ أسئلة شائعة وإجابات فلسفية :</span>
      </h3>
      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${item.faq.map(f => `
          <div style="padding: 16px 20px; background: rgba(0,0,0,0.1); border-radius: 12px; border-right: 3px solid var(--accent-gold);">
            <h4 style="font-size: 1.05rem; color: var(--text-brown, var(--text-primary)); margin-bottom: 8px;">${f.q}</h4>
            <p style="font-size: 0.95rem; color: var(--text-brown-muted, var(--text-secondary)); line-height: 1.7; margin: 0;">${f.a}</p>
          </div>
        `).join('')}
      </div>
    </div>
    `;

    faqSchema = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${item.faq.map(f => `{
        "@type": "Question",
        "name": ${JSON.stringify(f.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(f.a)}
        }
      }`).join(',\n      ')}
    ]
  }
  </script>`;
  }

  // Remove previous injections if any
  content = content.replace(/<!-- Editorial V2:[\s\S]*?<!-- End Editorial V2 -->/g, '');
  content = content.replace(/<div class="editorial-read-next-box"[\s\S]*?<\/div>\s*<\/div>/g, '');
  content = content.replace(/<div class="editorial-connection-grid"[\s\S]*?<\/div>\s*<\/div>/g, '');
  content = content.replace(/<div class="editorial-faq-section"[\s\S]*?<\/div>\s*<\/div>/g, '');

  const blockToInject = `
  <!-- Editorial V2: Rich Interlinking, Thinkers, Audio & Read Next -->
  ${thinkerCardHtml}
  ${faqHtml}
  ${readNextHtml}
  <!-- End Editorial V2 -->
  `;

  // Inject before </article> or before footer / share box
  if (content.includes('</article>')) {
    content = content.replace('</article>', `${blockToInject}\n</article>`);
  } else if (content.includes('</main>')) {
    content = content.replace('</main>', `${blockToInject}\n</main>`);
  }

  // Inject FAQ Schema in <head> if applicable
  if (faqSchema && !content.includes('"@type": "FAQPage"')) {
    content = content.replace('</head>', `${faqSchema}\n</head>`);
  }

  fs.writeFileSync(item.file, content, 'utf8');
  console.log(`Enriched article: ${item.file}`);
});

console.log('All articles enriched with Editorial V2 components!');
