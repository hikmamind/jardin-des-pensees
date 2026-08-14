const fs = require('fs');
const path = require('path');

const domain = 'https://jardin-des-pensees.onrender.com';
const logoUrl = `${domain}/brand_logo_official.png`;

// Definitions for articles in articles/
const articlesData = [
  {
    file: 'articles/schopenhauer-happiness-illusion.html',
    title: 'لماذا اعتبر شوبنهاور أن السعادة مجرد وهم؟ | Hikma & Nour',
    desc: 'دراسة فلسفية ونفسية عميقة في فلسفة آرثر شوبنهاور: كيف تحركنا الإرادة ولماذا نعيش في بندول بين الألم والملل وكيف نصل للسلام الداخلي.',
    image: 'schopenhauer_happiness_illusion_hero.jpg',
    category: 'الفلسفة',
    categoryUrl: `${domain}/articles/?category=philosophy`,
    date: '2026-08-01'
  },
  {
    file: 'articles/why-people-respect-silent-person.html',
    title: 'لماذا يحترم الناس الشخص الصامت أكثر من كثير الكلام؟ | Hikma & Nour',
    desc: 'التحليل النفسي لقوة الصمت وهيبة الهدوء، وكيف يُظهر الشخص الصامت عمقاً وثقة وكاريزما تجبر المحيطين على احترامه.',
    image: 'silence_respect_hero.jpg',
    category: 'علم النفس',
    categoryUrl: `${domain}/articles/?category=psychology`,
    date: '2026-08-02'
  },
  {
    file: 'articles/why-people-distance-when-you-succeed.html',
    title: 'لماذا يبتعد الناس عنك عندما تنجح؟ التفسير النفسي للحسد | Hikma & Nour',
    desc: 'فهم سيكولوجية المحيطين عند تحقيقك للنجاح، وديناميكيات المقارنة الاجتماعية والحسد، وكيف تحافظ على سلامك النفسي وعلاقاتك الصادقة.',
    image: 'why_people_distance_success_hero.jpg',
    category: 'علم النفس',
    categoryUrl: `${domain}/articles/?category=psychology`,
    date: '2026-08-03'
  },
  {
    file: 'articles/nietzsche-psychological-strength.html',
    title: 'كيف تبني قوة نفسية صلبة مستوحاة من فلسفة نيتشه؟ | Hikma & Nour',
    desc: 'دروس عملية من فريدريش نيتشه حول تجاوز الألم، واحتضان المعاناة كأداة للارتقاء، ومفهوم حب القدر (Amor Fati) لبناء عقلية لا تقهر.',
    image: 'nietzsche_psychological_strength_hero.jpg',
    category: 'الفلسفة',
    categoryUrl: `${domain}/articles/?category=philosophy`,
    date: '2026-08-04'
  },
  {
    file: 'articles/7-errors-mind-growth.html',
    title: '7 أخطاء تمنع عقلك من النضج والتطور الفكري | Hikma & Nour',
    desc: 'كشف المغالطات الفكرية والعادات العقلية الخاطئة التي تحبس الإنسان في دائرة التكرار وتمنع تطور الوعي والمرونة النفسية.',
    image: 'mind_growth_errors_hero.jpg',
    category: 'تطوير الذات',
    categoryUrl: `${domain}/articles/?category=development`,
    date: '2026-08-05'
  },
  {
    file: 'articles/happiness-in-wrong-place.html',
    title: 'لماذا نبحث عن السعادة في المكان الخاطئ؟ | Hikma & Nour',
    desc: 'تحليل فلسفي ونفسي لسراب الرغبات والماديات، ولماذا توجد السعادة الحقيقية والدائمة في السكون الداخلي ووضوح الرؤية.',
    image: 'happiness_wrong_place_hero.jpg',
    category: 'الفلسفة',
    categoryUrl: `${domain}/articles/?category=philosophy`,
    date: '2026-08-06'
  },
  {
    file: 'articles/solitude-blessing-or-curse.html',
    title: 'العزلة بين النعمة والنقمة: ماذا قال عنها الفلاسفة؟ | Hikma & Nour',
    desc: 'رؤية الفلاسفة للعزلة الواعية كمصدر للإبداع والصفاء الذهني، والفرق بين الوحدة المؤلمة والخلوة البنّاءة بالذات.',
    image: 'solitude_blessing_curse_hero.jpg',
    category: 'الفلسفة',
    categoryUrl: `${domain}/articles/?category=philosophy`,
    date: '2026-08-07'
  },
  {
    file: 'articles/true-confidence-inside.html',
    title: 'الثقة الحقيقية بالنفس تنبع من الداخل | Hikma & Nour',
    desc: 'كيف تتخلص من الحاجة المستمرة لإعجاب الآخرين وتبني ثقة ذاتية أصيلة قائمة على معرفة النفس وقبول الحقائق.',
    image: 'silence_confidence_impact.jpg',
    category: 'تطوير الذات',
    categoryUrl: `${domain}/articles/?category=development`,
    date: '2026-08-08'
  },
  {
    file: 'articles/hikma-citations-philosophiques.html',
    title: 'أقوال وحكم خالدة في فلسفة الحياة والسكينة | Hikma & Nour',
    desc: 'مجموعة مختارة من أعمق الاقتباسات الفلسفية للرواقيين والوجوديين مع شروحات عملية لتطبيقها في الحياة اليومية.',
    image: 'quotes_article_hero.jpg',
    category: 'الحكمة',
    categoryUrl: `${domain}/quotes/`,
    date: '2026-08-09'
  }
];

// Definitions for articles in files/
const filesArticlesData = [
  {
    file: 'files/stoicisme-force-calme.html',
    h1: 'الرواقية: فلسفة القوة والهدوء الداخلي',
    title: 'الرواقية: فلسفة القوة والهدوء الداخلي | Hikma & Nour',
    desc: 'دليل عملي لتطبيق ثنائية التحكم وحب القدر وبناء قلعة داخلية حصينة في مواجهة تقلبات الحياة اليومية.',
    image: 'stoicisme-modern.jpg',
    category: 'الرواقية'
  },
  {
    file: 'files/stop-overthinking.html',
    h1: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟',
    title: 'كيف تتوقف عن التفكير المفرط والقلق المستمر؟ | Hikma & Nour',
    desc: 'أساليب نفسية وعقلية مجربة لكسر حلقة الاجترار الفكري واستعادة السكينة والهدوء في اللحظة الحاضرة.',
    image: 'overthinking_calm.jpg',
    category: 'علم النفس'
  },
  {
    file: 'files/self-discipline.html',
    h1: 'الانضباط الذاتي وقوة الإرادة عند الفلاسفة القدماء',
    title: 'الانضباط الذاتي وقوة الإرادة عند الفلاسفة القدماء | Hikma & Nour',
    desc: 'تعاليم ماركوس أوريليوس وسينيكا للتحكم في النزوات العشوائية وبناء عادات يومية صلبة وواعية.',
    image: 'self_discipline.jpg',
    category: 'تطوير الذات'
  },
  {
    file: 'files/absurde-camus.html',
    h1: 'العبث والحرية عند ألبير كامو',
    title: 'العبث والحرية عند ألبير كامو | Hikma & Nour',
    desc: 'كيف تصنع المعنى والتمرد الواعي في عالم صامت؟ الفلسفة الملهمة لكامو في حب الحياة والحرية.',
    image: 'autumn_forest_solitude_walk.jpg',
    category: 'الوجودية'
  },
  {
    file: 'files/intelligence-emotionnelle-stoicisme.html',
    h1: 'الذكاء العاطفي والتحكم بالانفعالات في الفلسفة الرواقية',
    title: 'الذكاء العاطفي والتحكم بالانفعالات في الفلسفة الرواقية | Hikma & Nour',
    desc: 'كيف تروض الغضب والانفعالات السلبية عبر تمارين الحكمة العملية عند سينيكا وإبيكتيتوس.',
    image: 'inner_peace_lake_sunrise.jpg',
    category: 'الرواقية'
  },
  {
    file: 'files/epicurisme-bonheur.html',
    h1: 'الأبيقورية وفن السعادة البسيطة والسكينة',
    title: 'الأبيقورية وفن السعادة البسيطة والسكينة | Hikma & Nour',
    desc: 'فلسفة أبيقور في التحرر من المخاوف الزائفة واكتشاف لذة البساطة والصداقة والسلام النفسي (Ataraxia).',
    image: 'tree_sunset_field.jpg',
    category: 'الفلسفة'
  },
  {
    file: 'files/existentialisme-sens-sartre.html',
    h1: 'الوجودية وصناعة المعنى عند جان بول سارتر',
    title: 'الوجودية وصناعة المعنى عند جان بول سارتر | Hikma & Nour',
    desc: 'الوجود يسبق الماهية: كيف تتحمل مسؤولية حريتك وتصنع جوهر حياتك بقراراتك الواعية.',
    image: 'person_hill_horizon.jpg',
    category: 'الوجودية'
  },
  {
    file: 'files/nihilisme-surhomme-nietzsche.html',
    h1: 'العدمية ومفهوم الإنسان الأسمى عند نيتشه',
    title: 'العدمية ومفهوم الإنسان الأسمى عند نيتشه | Hikma & Nour',
    desc: 'رحلة تجاوز العدمية وإعادة تقييم كل القيم لبناء حياة ملؤها الإبداع وقوة الإرادة.',
    image: 'nietzsche_climbing_overcoming.jpg',
    category: 'الفلسفة'
  },
  {
    file: 'files/introduction-stoicisme.html',
    h1: 'مدخل شامل إلى الفلسفة الرواقية',
    title: 'مدخل شامل إلى الفلسفة الرواقية | Hikma & Nour',
    desc: 'أصول الفلسفة الرواقية من زينون إلى ماركوس أوريليوس وأهم مبادئ العيش بانسجام مع الطبيعة والعقل.',
    image: 'marc_aurelius_writing.jpg',
    category: 'الرواقية'
  },
  {
    file: 'files/20-citations-schopenhauer.html',
    h1: '20 حكمة خالدة من آرثر شوبنهاور في فن العيش',
    title: '20 حكمة خالدة من آرثر شوبنهاور في فن العيش | Hikma & Nour',
    desc: 'مجموعة من أعمق تأملات شوبنهاور في كتاب حكم في فن العيش حول العزلة والصحة والسعادة الذاتية.',
    image: 'schopenhauer_lake_sunset.jpg',
    category: 'الفلسفة'
  }
];

// Helper to inject SEO block in <head>
function updateHead(html, meta) {
  const canonicalUrl = `${domain}/${meta.file}`;
  const imgUrl = `${domain}/${meta.image}`;
  
  // JSON-LD Article Schema
  const jsonLd = `
  <!-- JSON-LD Structured Data Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(meta.cleanTitle || meta.title.replace(' | Hikma & Nour', ''))},
    "description": ${JSON.stringify(meta.desc)},
    "image": ${JSON.stringify(imgUrl)},
    "datePublished": ${JSON.stringify(meta.date || '2026-08-01')},
    "dateModified": "2026-08-14",
    "inLanguage": "ar",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": ${JSON.stringify(canonicalUrl)}
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
        "name": ${JSON.stringify(meta.cleanTitle || meta.title.replace(' | Hikma & Nour', ''))},
        "item": ${JSON.stringify(canonicalUrl)}
      }
    ]
  }
  </script>`;

  // Update Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
  
  // Remove existing meta description, canonical, OpenGraph, Twitter tags
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '');
  
  const seoHeadTags = `
  <meta name="description" content="${meta.desc}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="${logoUrl}">
  
  <!-- Open Graph -->
  <meta property="og:site_name" content="Hikma & Nour — حكمة ونور">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.desc}">
  <meta property="og:image" content="${imgUrl}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:locale" content="ar_AR">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${meta.title}">
  <meta name="twitter:description" content="${meta.desc}">
  <meta name="twitter:image" content="${imgUrl}">
  ${jsonLd}`;

  // Insert right before </head>
  html = html.replace(/<\/head>/i, `${seoHeadTags}\n</head>`);
  return html;
}

// 1. Process articles in articles/
articlesData.forEach(item => {
  if (fs.existsSync(item.file)) {
    let content = fs.readFileSync(item.file, 'utf8');
    content = updateHead(content, item);
    fs.writeFileSync(item.file, content, 'utf8');
    console.log(`Updated ${item.file}`);
  }
});

// 2. Process articles in files/
filesArticlesData.forEach(item => {
  if (fs.existsSync(item.file)) {
    let content = fs.readFileSync(item.file, 'utf8');
    
    // Ensure Single H1 exists
    if (!content.includes('<h1')) {
      // Find the main title or insert H1
      if (content.includes('<h2 class="main-title"')) {
        content = content.replace('<h2 class="main-title"', '<h1 class="main-title"').replace('</h2>', '</h1>');
      } else if (content.includes('class="article-title"')) {
        content = content.replace(/<h2([^>]*)class="article-title"/i, '<h1$1class="article-title"').replace(/<\/h2>/i, '</h1>');
      } else {
        // Look for hero header or first container
        content = content.replace(/(<div class="container"[^>]*>|<main[^>]*>)/i, `$1\n<h1 class="article-main-title" style="display:none;">${item.h1}</h1>`);
      }
    }
    
    content = updateHead(content, item);
    fs.writeFileSync(item.file, content, 'utf8');
    console.log(`Updated ${item.file}`);
  }
});

console.log('All articles updated successfully!');
