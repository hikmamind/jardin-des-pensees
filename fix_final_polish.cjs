const fs = require('fs');

const domain = 'https://jardin-des-pensees.onrender.com';
const logoUrl = `${domain}/brand_logo_official.png`;

// 1. Fix cookie-policy.html & terms-of-service.html
['cookie-policy.html', 'terms-of-service.html'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/(<div\s+id="contentFr"[^>]*>[\s\S]*?)<h1 class="privacy-title">/i, '$1<h2 class="privacy-title">');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Cleaned double H1 in ${file}`);
});

// 2. Clean audio/index.html
let audioContent = fs.readFileSync('audio/index.html', 'utf8');
audioContent = audioContent.replace(/<link\s+rel="canonical"\s+id="seoCanonical"\s+href="/i, '<link rel="canonical" href="');
audioContent = audioContent.replace(/<meta\s+property="og:url"\s+id="ogUrl"\s+content="/i, '<meta property="og:url" content="');
audioContent = audioContent.replace(/<meta\s+property="og:title"\s+id="ogTitle"\s+content="/i, '<meta property="og:title" content="');
audioContent = audioContent.replace(/<meta\s+property="og:description"\s+id="ogDesc"\s+content="/i, '<meta property="og:description" content="');
audioContent = audioContent.replace(/<meta\s+property="og:image"\s+id="ogImage"\s+content="/i, '<meta property="og:image" content="');
audioContent = audioContent.replace(/<meta\s+name="twitter:url"\s+id="twUrl"\s+content="/i, '<meta name="twitter:url" content="');
audioContent = audioContent.replace(/<meta\s+name="twitter:title"\s+id="twTitle"\s+content="/i, '<meta name="twitter:title" content="');
audioContent = audioContent.replace(/<meta\s+name="twitter:description"\s+id="twDesc"\s+content="/i, '<meta name="twitter:description" content="');
audioContent = audioContent.replace(/<meta\s+name="twitter:image"\s+id="twImage"\s+content="/i, '<meta name="twitter:image" content="');
fs.writeFileSync('audio/index.html', audioContent, 'utf8');
console.log('Cleaned audio/index.html meta IDs');

// 3. Upgrade articles/7-habits/index.html
const habitsPath = 'articles/7-habits/index.html';
if (fs.existsSync(habitsPath)) {
  let content = fs.readFileSync(habitsPath, 'utf8');
  const title = '٧ عادات تدمر إمكانياتك دون أن تشعر | Hikma & Nour';
  const desc = 'سبع عادات تمنعك من تحقيق إمكانياتك الحقيقية، مع حلول عملية مستوحاة من حكم كبار المفكرين والرواقيين لبناء عادات بناءة.';
  const canonicalUrl = `${domain}/articles/7-habits/`;
  const imgUrl = `${domain}/atomic-habits.jpg`;

  const jsonLd = `
  <!-- JSON-LD Structured Data Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "٧ عادات تدمر إمكانياتك دون أن تشعر",
    "description": ${JSON.stringify(desc)},
    "image": "${imgUrl}",
    "datePublished": "2026-08-01",
    "dateModified": "2026-08-14",
    "inLanguage": "ar",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${canonicalUrl}"
    },
    "author": {
      "@type": "Organization",
      "name": "حكمة ونور — Hikma & Nour",
      "url": "${domain}/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hikma & Nour",
      "logo": {
        "@type": "ImageObject",
        "url": "${logoUrl}"
      }
    }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
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
        "name": "المقالات",
        "item": "${domain}/articles/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "٧ عادات تدمر إمكانياتك",
        "item": "${canonicalUrl}"
      }
    ]
  }
  </script>`;

  // Replace Title
  content = content.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  
  // Strip old tags
  content = content.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
  content = content.replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, '');
  content = content.replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, '');
  content = content.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  content = content.replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '');

  const seoHeadTags = `
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="${logoUrl}">
  
  <!-- Open Graph -->
  <meta property="og:site_name" content="Hikma & Nour — حكمة ونور">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${imgUrl}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="ar_AR">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${imgUrl}">
  ${jsonLd}`;

  content = content.replace(/<\/head>/i, `${seoHeadTags}\n</head>`);
  fs.writeFileSync(habitsPath, content, 'utf8');
  console.log('Updated articles/7-habits/index.html');
}

console.log('Fix polish completed!');
