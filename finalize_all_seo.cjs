const fs = require('fs');
const path = require('path');

const domain = 'https://jardin-des-pensees.onrender.com';
const logoUrl = `${domain}/brand_logo_official.png`;

// 1. Fix H1 in files/*.html
const filesDir = 'files';
if (fs.existsSync(filesDir)) {
  fs.readdirSync(filesDir).forEach(f => {
    if (f.endsWith('.html')) {
      const filePath = path.join(filesDir, f);
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('class="cover-title"')) {
        content = content.replace(/<div\s+class="cover-title"/gi, '<h1 class="cover-title"').replace(/<\/div>(\s*<div\s+class="cover-subtitle">)/i, '</h1>$1');
      }
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed H1 in ${filePath}`);
    }
  });
}

// 2. Fix Double H1 in legal pages
const legalPages = ['privacy-policy.html', 'terms-of-service.html', 'cookie-policy.html'];
legalPages.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/(<div\s+id="contentFr"[^>]*>[\s\S]*?)<h1([^>]*)>([\s\S]*?)<\/h1>/i, '$1<h2$2>$3</h2>');
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Fixed double H1 in ${p}`);
  }
});

// 3. Fix audio/index.html & quotes/calendar/index.html clean tags
if (fs.existsSync('audio/index.html')) {
  let content = fs.readFileSync('audio/index.html', 'utf8');
  content = content.replace(/<title\s+id="seoPageTitle">/i, '<title>');
  content = content.replace(/<meta\s+name="description"\s+id="seoPageDesc"\s+content="/i, '<meta name="description" content="');
  fs.writeFileSync('audio/index.html', content, 'utf8');
  console.log('Cleaned tags in audio/index.html');
}

if (fs.existsSync('quotes/calendar/index.html')) {
  let content = fs.readFileSync('quotes/calendar/index.html', 'utf8');
  content = content.replace(/<title\s+id="seoTitle">/i, '<title>');
  content = content.replace(/<meta\s+name="description"\s+id="seoDesc"\s+content="/i, '<meta name="description" content="');
  fs.writeFileSync('quotes/calendar/index.html', content, 'utf8');
  console.log('Cleaned tags in quotes/calendar/index.html');
}

// 4. Update index files: about/index.html, contact/index.html, faq/index.html, bio/index.html, calendar/index.html, links/index.html
const indexConfigs = [
  {
    file: 'about/index.html',
    title: 'À propos | Le Jardin des Pensées — Philosophie et Sagesse',
    desc: 'Découvrez Le Jardin des Pensées (Hikma & Nour), un espace éditorial dédié à la philosophie, à la sagesse stoïcienne et au développement personnel.',
    image: 'bio_modern_cover.jpg',
    lang: 'fr',
    schemaType: 'AboutPage'
  },
  {
    file: 'contact/index.html',
    title: 'Contact & Collaborations | Le Jardin des Pensées',
    desc: 'Contactez l\'équipe du Jardin des Pensées (Hikma & Nour) pour toute question, idée de projet, proposition éditoriale ou collaboration.',
    image: 'brand_logo_official.png',
    lang: 'fr',
    schemaType: 'ContactPage'
  },
  {
    file: 'faq/index.html',
    title: 'Aide & FAQ | Le Jardin des Pensées',
    desc: 'Foire aux questions et assistance : trouvez des réponses rapides sur nos articles, guides stoïciens, livres audio et ressources gratuites.',
    image: 'brand_logo_official.png',
    lang: 'fr',
    schemaType: 'FAQPage'
  },
  {
    file: 'bio/index.html',
    title: 'حكمة ونور | الصفحة الرسمية والروابط — Hikma & Nour',
    desc: 'الصفحة الرسمية لحكمة ونور (Hikma & Nour) - أفكار عميقة لإيقاظ العقل وإشراق الروح. المقالات، الاقتباسات، والكتب المجانية.',
    image: 'bio_modern_cover.jpg',
    lang: 'ar',
    schemaType: 'ProfilePage'
  },
  {
    file: 'calendar/index.html',
    title: 'التقويم الفلسفي اليومي ٣٦٥ يوماً | حكمة ونور',
    desc: 'التقويم الفلسفي اليومي - ٣٦٥ يوماً من الحكمة والرواقية لتطوير الذات وبناء القوة الذهنية والسلام الداخلي.',
    image: 'philosophical_calendar_hero.jpg',
    lang: 'ar',
    schemaType: 'CollectionPage'
  },
  {
    file: 'links/index.html',
    title: 'روابط منصات حكمة ونور الرسمية | Hikma & Nour',
    desc: 'جميع الروابط والمنصات الرسمية لمشروع حكمة ونور (Le Jardin des Pensées) على تيك توك، المقالات، والكتب الصوتية.',
    image: 'brand_logo_official.png',
    lang: 'ar',
    schemaType: 'ProfilePage'
  },
  {
    file: 'shop/cancel.html',
    title: 'الطلب ملغي | متجر حكمة ونور',
    desc: 'تم إلغاء العملية. يمكنك العودة لتصفح وتحميل جميع الكتب والأدلة الفلسفية مجاناً في أي وقت.',
    image: 'brand_logo_official.png',
    lang: 'ar',
    schemaType: 'WebPage'
  },
  {
    file: 'shop/success.html',
    title: 'تم تأكيد طلبك بنجاح | متجر حكمة ونور',
    desc: 'شكراً لاهتمامك! تم تأكيد طلبك بنجاح ويمكنك تحميل كتبك وأدلتك الفلسفية مباشرة وبشكل مجاني.',
    image: 'brand_logo_official.png',
    lang: 'ar',
    schemaType: 'WebPage'
  },
  {
    file: 'shop/product/index.html',
    h1: 'تفاصيل المنتج الفلسفي — متجر حكمة ونور',
    title: 'تفاصيل الكتاب أو الدليل الفلسفي | حكمة ونور',
    desc: 'تصفح تفاصيل ومحتويات هذا الكتاب أو الدليل الفلسفي المتاح للتحميل المجاني عبر متجر حكمة ونور.',
    image: 'shop_page_hero.jpg',
    lang: 'ar',
    schemaType: 'ItemPage'
  }
];

indexConfigs.forEach(item => {
  if (fs.existsSync(item.file)) {
    let content = fs.readFileSync(item.file, 'utf8');
    const canonicalUrl = `${domain}/${item.file}`;
    const imgUrl = item.image.startsWith('http') ? item.image : `${domain}/${item.image}`;
    
    // Fix H1 if needed
    if (item.h1 && !content.includes('<h1')) {
      content = content.replace(/(<div class="container"[^>]*>|<main[^>]*>|<body[^>]*>)/i, `$1\n<h1 class="page-main-h1" style="display:none;">${item.h1}</h1>`);
    }

    if (item.file === 'shop/success.html') {
      content = content.replace(/<h1 id="errorTitle">Erreur<\/h1>/i, '<h2 id="errorTitle">Erreur</h2>');
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
    "inLanguage": "${item.lang}",
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
    if (/<title[\s\S]*?>/i.test(content)) {
      content = content.replace(/<title[\s\S]*?>[\s\S]*?<\/title>/i, `<title>${item.title}</title>`);
    } else {
      content = content.replace(/<head>/i, `<head>\n  <title>${item.title}</title>`);
    }

    // Clean old meta tags
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

console.log('Finalization complete!');
