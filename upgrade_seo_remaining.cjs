const fs = require('fs');

const domain = 'https://jardin-des-pensees.onrender.com';
const logoUrl = `${domain}/brand_logo_official.png`;

const pages = [
  {
    file: 'quizzes/which-philosopher-are-you.html',
    title: 'أي فيلسوف أنت؟ — اختبار الشخصية الفلسفية | Hikma & Nour',
    desc: 'اكتشف المدرسة الفلسفية الأقرب لطريقة تفكيرك: هل أنت رواقي كماركوس أوريليوس، وجودي ككامو، أم مثالي كأفلاطون؟ اختبار تفاعلي دقيق.',
    image: 'quiz_greek_philosopher.jpg',
    schemaType: 'Quiz'
  },
  {
    file: 'quizzes/inner-peace-level.html',
    title: 'مقياس السلام الداخلي والهدوء النفسي | Hikma & Nour',
    desc: 'اختبر مستوى هدوئك الداخلي وقدرتك على التعامل مع ضغوط الحياة عبر مقياس السكينة الرواقية والوعي النفسي من حكمة ونور.',
    image: 'quiz_inner_peace_hero.jpg',
    schemaType: 'Quiz'
  },
  {
    file: 'audio/crime_punishment_summary.html',
    h1: 'ملخص رواية الجريمة والعقاب — فيودور دوستويفسكي',
    title: 'ملخص رواية الجريمة والعقاب دوستويفسكي | Hikma & Nour',
    desc: 'استمع واقرأ ملخصاً نفسياً وفلسفياً شاملاً لشاهكار فيودور دوستويفسكي الخالدة الجريمة والعقاب عبر حكمة ونور.',
    image: 'audio_crime_punishment_cover.jpg',
    schemaType: 'Article'
  },
  {
    file: 'bio.html',
    title: 'عن مشروع حكمة ونور — رحلة في عالم الفلسفة والسكون | Hikma & Nour',
    desc: 'تعرف على رسالة ورؤية حكمة ونور (Le Jardin des Pensées) في نشر الحكمة الكلاسيكية، الفلسفة الرواقية، والتأمل النفسي المعاصر.',
    image: 'bio_modern_cover.jpg',
    schemaType: 'AboutPage'
  },
  {
    file: 'about.html',
    title: 'عن مشروع حكمة ونور — فلسفة وحكمة للحياة | Hikma & Nour',
    desc: 'نبذة عن منصة حكمة ونور الفكرية، أهدافنا في تعزيز التفكير النقدي، الهدوء النفسي والوعي الذاتي.',
    image: 'bio_modern_cover.jpg',
    schemaType: 'AboutPage'
  },
  {
    file: 'faq.html',
    title: 'الأسئلة الشائعة والدعم | حكمة ونور',
    desc: 'إجابات على الأسئلة الأكثر شيوعاً حول محتوى حكمة ونور، الكتب الإلكترونية المجانية، والتسجيلات الصوتية.',
    image: 'brand_logo_official.png',
    schemaType: 'FAQPage'
  },
  {
    file: 'contact.html',
    title: 'اتصل بنا والتواصل الإبداعي | حكمة ونور',
    desc: 'تواصل مع فريق حكمة ونور للاقتراحات، الاستفسارات الفكرية، أو الشراكات الثقافية والإبداعية.',
    image: 'brand_logo_official.png',
    schemaType: 'ContactPage'
  },
  {
    file: 'privacy-policy.html',
    title: 'سياسة الخصوصية | حكمة ونور',
    desc: 'سياسة الخصوصية وحماية البيانات الشخصية لزوار ومستخدمي موقع حكمة ونور (Hikma & Nour).',
    image: 'brand_logo_official.png',
    schemaType: 'WebPage',
    fixDoubleH1: true
  },
  {
    file: 'terms-of-service.html',
    title: 'شروط الاستخدام | حكمة ونور',
    desc: 'شروط وأحكام استخدام موقع ومحتوى حكمة ونور الثقافي والفكري.',
    image: 'brand_logo_official.png',
    schemaType: 'WebPage',
    fixDoubleH1: true
  },
  {
    file: 'cookie-policy.html',
    title: 'سياسة ملفات تعريف الارتباط (Cookies) | حكمة ونور',
    desc: 'معلومات حول استخدام ملفات تعريف الارتباط (Cookies) وإعدادات التفضيلات على موقع حكمة ونور.',
    image: 'brand_logo_official.png',
    schemaType: 'WebPage',
    fixDoubleH1: true
  }
];

pages.forEach(item => {
  if (fs.existsSync(item.file)) {
    let content = fs.readFileSync(item.file, 'utf8');
    const canonicalUrl = `${domain}/${item.file}`;
    const imgUrl = item.image.startsWith('http') ? item.image : `${domain}/${item.image}`;
    
    // Fix double H1 if needed
    if (item.fixDoubleH1) {
      // In legal pages, there was Arabic H1 and French H1. Convert French H1 to H2.
      content = content.replace(/(<h1[^>]*data-lang=["']fr["'][^>]*>[\s\S]*?<\/h1>)/gi, (m) => m.replace(/<h1/i, '<h2').replace(/<\/h1>/i, '</h2>'));
      content = content.replace(/(<h1[^>]*class=["'][^"']*fr-legal-title[^"']*["'][^>]*>[\s\S]*?<\/h1>)/gi, (m) => m.replace(/<h1/i, '<h2').replace(/<\/h1>/i, '</h2>'));
    }

    if (item.h1 && !content.includes('<h1')) {
      content = content.replace(/(<div class="container"[^>]*>|<main[^>]*>)/i, `$1\n<h1 class="page-main-h1" style="display:none;">${item.h1}</h1>`);
    }

    // JSON-LD
    const jsonLd = `
  <!-- JSON-LD Structured Data Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "${item.schemaType || 'WebPage'}",
    "name": ${JSON.stringify(item.title)},
    "description": ${JSON.stringify(item.desc)},
    "url": "${canonicalUrl}",
    "inLanguage": "ar",
    "publisher": {
      "@type": "Organization",
      "name": "Hikma & Nour",
      "logo": {
        "@type": "ImageObject",
        "url": "${logoUrl}"
      }
    }
  }
  </script>`;

    // Update Title
    if (/<title>/i.test(content)) {
      content = content.replace(/<title>[\s\S]*?<\/title>/i, `<title>${item.title}</title>`);
    } else {
      content = content.replace(/<head>/i, `<head>\n  <title>${item.title}</title>`);
    }

    // Strip old meta tags
    content = content.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
    content = content.replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, '');
    content = content.replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, '');
    content = content.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
    content = content.replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '');

    const seoHeadTags = `
  <meta name="description" content="${item.desc}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="${logoUrl}">
  
  <!-- Open Graph -->
  <meta property="og:site_name" content="Hikma & Nour — حكمة ونور">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${item.title}">
  <meta property="og:description" content="${item.desc}">
  <meta property="og:image" content="${imgUrl}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="ar_AR">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${item.title}">
  <meta name="twitter:description" content="${item.desc}">
  <meta name="twitter:image" content="${imgUrl}">
  ${jsonLd}`;

    content = content.replace(/<\/head>/i, `${seoHeadTags}\n</head>`);
    fs.writeFileSync(item.file, content, 'utf8');
    console.log(`Updated ${item.file}`);
  }
});

console.log('Remaining pages updated!');
