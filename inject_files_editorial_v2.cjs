const fs = require('fs');

const domain = 'https://jardin-des-pensees.onrender.com';

const filesEditorial = [
  {
    file: 'files/stoicisme-force-calme.html',
    thinker: { name: 'ماركوس أوريليوس وسينيكا', role: 'أعمدة الفلسفة الرواقية الكلاسيكية', url: '../thinkers/' },
    audio: { title: 'الأمير الصغير (Le Petit Prince)', url: '../audio/?book=petit_prince', desc: 'حكمة البساطة والنظر بالقلب.' },
    readNext: [
      { url: 'introduction-stoicisme.html', title: 'مدخل شامل إلى الفلسفة الرواقية', tag: 'أصول الرواقية' },
      { url: 'intelligence-emotionnelle-stoicisme.html', title: 'الذكاء العاطفي والتحكم بالانفعالات', tag: 'ذكاء عاطفي' },
      { url: '../quotes/calendar/', title: 'تقويم الحكمة ٣٦٥ يوماً من التأمل', tag: 'تقويم الحكمة' }
    ]
  },
  {
    file: 'files/stop-overthinking.html',
    thinker: { name: 'ماركوس أوريليوس', role: 'فيلسوف السكون وحفظ الطاقة العقلية', url: '../thinkers/' },
    faq: [
      { q: 'كيف أوقف سيل الأفكار المقلقة قبل النوم؟', a: 'كتابة الأفكار وتفريغها على الورق، والتركيز على التنفس العميق مع تذكير نفسك بأن الليل مخصص للاسترجاع لا لاتخاذ القرارات.' },
      { q: 'ما هو تمرين الرواقيين لعلاج التفكير المفرط؟', a: 'تطبيق ثنائية التحكم: تقسيم أي مشكلة فوراً إلى ما يقع تحت إرادتك (فتبدأ بفعله) وما يخرج عنها (فتتخلى عن القلق بشأنه).' }
    ],
    readNext: [
      { url: '../articles/why-people-respect-silent-person.html', title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟', tag: 'هيبة الصمت' },
      { url: 'intelligence-emotionnelle-stoicisme.html', title: 'الذكاء العاطفي والتحكم بالانفعالات', tag: 'اتزان نفسي' },
      { url: 'self-discipline.html', title: 'الانضباط الذاتي وقوة الإرادة', tag: 'انضباط ذاتي' }
    ]
  },
  {
    file: 'files/self-discipline.html',
    thinker: { name: 'إبيكتيتوس', role: 'معلم الإرادة والحرية الأخلاقية', url: '../thinkers/' },
    audio: { title: 'الخيميائي (L\'Alchimiste)', url: '../audio/?book=alchemist', desc: 'رحلة الإصرار وبلوغ الغايات الكبرى.' },
    readNext: [
      { url: '../articles/7-habits/index.html', title: '٧ عادات تدمر إمكانياتك دون أن تشعر', tag: 'عادات يومية' },
      { url: '../articles/true-confidence-inside.html', title: 'الثقة الحقيقية بالنفس تنبع من الداخل', tag: 'ثقة أصيلة' },
      { url: 'stoicisme-force-calme.html', title: 'الرواقية: فلسفة القوة والهدوء الداخلي', tag: 'قلعة داخلية' }
    ]
  },
  {
    file: 'files/absurde-camus.html',
    thinker: { name: 'ألبير كامو', role: 'فيلسوف العبث والتمرد وحب الحياة', url: '../thinkers/' },
    audio: { title: 'الغريب (L\'Étranger)', url: '../audio/?book=etranger', desc: 'الشاهكار الصوتية الكاملة في فلسفة العبث.' },
    readNext: [
      { url: 'existentialisme-sens-sartre.html', title: 'الوجودية وصناعة المعنى عند جان بول سارتر', tag: 'وجودية' },
      { url: 'nihilisme-surhomme-nietzsche.html', title: 'العدمية ومفهوم الإنسان الأسمى عند نيتشه', tag: 'فلسفة نيتشه' },
      { url: '../articles/nietzsche-psychological-strength.html', title: 'كيف تبني قوة نفسية صلبة مستوحاة من نيتشه؟', tag: 'صلابة نفسية' }
    ]
  },
  {
    file: 'files/intelligence-emotionnelle-stoicisme.html',
    thinker: { name: 'سينيكا', role: 'حكيم روما في ترويض الانفعالات والغضب', url: '../thinkers/' },
    readNext: [
      { url: 'stoicisme-force-calme.html', title: 'الرواقية: فلسفة القوة والهدوء الداخلي', tag: 'رواقية' },
      { url: 'stop-overthinking.html', title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟', tag: 'سكينة ذهنية' },
      { url: 'self-discipline.html', title: 'الانضباط الذاتي وقوة الإرادة', tag: 'انضباط' }
    ]
  },
  {
    file: 'files/epicurisme-bonheur.html',
    thinker: { name: 'أبيقور', role: 'فيلسوف السعادة البسيطة وراحة البال', url: '../thinkers/' },
    audio: { title: 'الأمير الصغير (Le Petit Prince)', url: '../audio/?book=petit_prince', desc: 'استمع إلى جمال البساطة والسكينة.' },
    readNext: [
      { url: '../articles/happiness-in-wrong-place.html', title: 'لماذا نبحث عن السعادة في المكان الخاطئ؟', tag: 'سعادة حقيقية' },
      { url: '../articles/schopenhauer-happiness-illusion.html', title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟', tag: 'فلسفة السعادة' },
      { url: 'stoicisme-force-calme.html', title: 'الرواقية: فلسفة القوة والهدوء الداخلي', tag: 'رواقية' }
    ]
  },
  {
    file: 'files/existentialisme-sens-sartre.html',
    thinker: { name: 'جان بول سارتر', role: 'رائد الوجودية والحرية الإنسانية', url: '../thinkers/' },
    readNext: [
      { url: 'absurde-camus.html', title: 'العبث والحرية عند ألبير كامو', tag: 'فلسفة العبث' },
      { url: 'nihilisme-surhomme-nietzsche.html', title: 'العدمية ومفهوم الإنسان الأسمى عند نيتشه', tag: 'فلسفة نيتشه' },
      { url: '../articles/schopenhauer-happiness-illusion.html', title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟', tag: 'فلسفة الإرادة' }
    ]
  },
  {
    file: 'files/nihilisme-surhomme-nietzsche.html',
    thinker: { name: 'فريدريش نيتشه', role: 'فيلسوف إرادة القوة وتجاوز العدمية', url: '../thinkers/' },
    audio: { title: 'الغريب (L\'Étranger)', url: '../audio/?book=etranger', desc: 'أيقونة التمرد الأدبي والفلسفي.' },
    readNext: [
      { url: '../articles/nietzsche-psychological-strength.html', title: 'كيف تبني قوة نفسية صلبة مستوحاة من نيتشه؟', tag: 'قوة نفسية' },
      { url: 'absurde-camus.html', title: 'العبث والحرية عند ألبير كامو', tag: 'عبثية وحرية' },
      { url: 'self-discipline.html', title: 'الانضباط الذاتي وقوة الإرادة', tag: 'إرادة صلبة' }
    ]
  },
  {
    file: 'files/introduction-stoicisme.html',
    thinker: { name: 'زينون وإبيكتيتوس', role: 'مؤسسو ورواد الفكر الرواقي', url: '../thinkers/' },
    readNext: [
      { url: 'stoicisme-force-calme.html', title: 'الرواقية: فلسفة القوة والهدوء الداخلي', tag: 'رواقية' },
      { url: 'intelligence-emotionnelle-stoicisme.html', title: 'الذكاء العاطفي والتحكم بالانفعالات', tag: 'اتزان عاطفي' },
      { url: '../quotes/calendar/', title: 'تقويم الحكمة ٣٦٥ يوماً', tag: 'تأملات يومية' }
    ]
  },
  {
    file: 'files/20-citations-schopenhauer.html',
    thinker: { name: 'آرثر شوبنهاور', role: 'فيلسوف الإرادة وتأملات العزلة', url: '../thinkers/' },
    audio: { title: 'رسائل إلى ميلينا', url: '../audio/?book=milena', desc: 'استمع إلى أعذب وأعمق الرسائل الإنسانية.' },
    readNext: [
      { url: '../articles/schopenhauer-happiness-illusion.html', title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟', tag: 'شوبنهاور' },
      { url: '../articles/solitude-blessing-or-curse.html', title: 'العزلة بين النعمة والنقمة: ماذا قال عنها الفلاسفة؟', tag: 'فلسفة العزلة' },
      { url: 'epicurisme-bonheur.html', title: 'الأبيقورية وفن السعادة البسيطة والسكينة', tag: 'أبيقورية' }
    ]
  }
];

filesEditorial.forEach(item => {
  if (!fs.existsSync(item.file)) return;
  let content = fs.readFileSync(item.file, 'utf8');

  // Build Read Next HTML
  const readNextHtml = `
    <!-- Editorial V2: Section À lire ensuite -->
    <div class="editorial-read-next-box" style="margin: 50px auto 30px; max-width: 900px; padding: 28px; background: white; border: 2px solid var(--accent-gold); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
      <div style="font-size: 1.25rem; font-weight: bold; color: var(--dark-green); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
        <span>📚 مقالات وتأملات موصى بها لك :</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
        ${item.readNext.map(r => `
          <a href="${r.url}" style="display: block; padding: 18px; background: var(--bg-cream); border: 1px solid rgba(223, 177, 91, 0.4); border-radius: 14px; text-decoration: none; color: inherit; transition: all 0.2s ease;">
            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; display: block; margin-bottom: 6px;">${r.tag}</span>
            <span style="font-size: 1rem; font-weight: 600; line-height: 1.4; color: var(--text-charcoal); display: block;">${r.title} ←</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  // Build Thinker & Audio Card
  let connectionHtml = '';
  if (item.thinker || item.audio) {
    connectionHtml = `
    <!-- Editorial V2: Maillage Penseur & Audio -->
    <div class="editorial-connection-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; max-width: 900px; margin: 40px auto;">
      ${item.thinker ? `
        <div style="padding: 22px; background: white; border: 1px solid var(--accent-gold); border-radius: 18px; display: flex; align-items: center; gap: 16px; box-shadow: 0 6px 20px rgba(0,0,0,0.04);">
          <div style="font-size: 2.2rem;">🏛️</div>
          <div style="flex-grow: 1;">
            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase;">فيلسوف المحور</span>
            <h4 style="margin: 4px 0; font-size: 1.15rem; color: var(--dark-green);">${item.thinker.name}</h4>
            <span style="font-size: 0.85rem; color: var(--text-charcoal);">${item.thinker.role}</span>
          </div>
          <a href="${item.thinker.url}" style="padding: 8px 14px; background: rgba(223, 177, 91, 0.15); border: 1px solid var(--accent-gold); color: var(--dark-green); border-radius: 20px; text-decoration: none; font-size: 0.85rem; font-weight: bold;">السيرة →</a>
        </div>
      ` : ''}
      ${item.audio ? `
        <div style="padding: 22px; background: white; border: 1px solid var(--accent-gold); border-radius: 18px; display: flex; align-items: center; gap: 16px; box-shadow: 0 6px 20px rgba(0,0,0,0.04);">
          <div style="font-size: 2.2rem;">🎧</div>
          <div style="flex-grow: 1;">
            <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase;">كتاب صوتي مرتبط</span>
            <h4 style="margin: 4px 0; font-size: 1.15rem; color: var(--dark-green);">${item.audio.title}</h4>
            <span style="font-size: 0.85rem; color: var(--text-charcoal);">${item.audio.desc}</span>
          </div>
          <a href="${item.audio.url}" style="padding: 8px 14px; background: var(--accent-gold); color: var(--dark-green); border-radius: 20px; text-decoration: none; font-size: 0.85rem; font-weight: bold;">استمع 🎙️</a>
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
    <div class="editorial-faq-section" style="margin: 40px auto; max-width: 900px; padding: 28px; background: white; border: 1px solid var(--accent-gold); border-radius: 20px; box-shadow: 0 6px 20px rgba(0,0,0,0.04);">
      <h3 style="font-size: 1.35rem; color: var(--dark-green); margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
        <span>❓ أسئلة شائعة وإجابات فلسفية :</span>
      </h3>
      <div style="display: flex; flex-direction: column; gap: 18px;">
        ${item.faq.map(f => `
          <div style="padding: 16px 20px; background: var(--bg-cream); border-radius: 12px; border-right: 3px solid var(--accent-gold);">
            <h4 style="font-size: 1.05rem; color: var(--dark-green); margin-bottom: 8px;">${f.q}</h4>
            <p style="font-size: 0.95rem; color: var(--text-charcoal); line-height: 1.7; margin: 0;">${f.a}</p>
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
  ${connectionHtml}
  ${faqHtml}
  ${readNextHtml}
  <!-- End Editorial V2 -->
  `;

  // Inject before </body>
  if (content.includes('</body>')) {
    content = content.replace('</body>', `${blockToInject}\n</body>`);
  }

  if (faqSchema && !content.includes('"@type": "FAQPage"')) {
    content = content.replace('</head>', `${faqSchema}\n</head>`);
  }

  fs.writeFileSync(item.file, content, 'utf8');
  console.log(`Enriched file: ${item.file}`);
});

console.log('All files/*.html enriched successfully!');
