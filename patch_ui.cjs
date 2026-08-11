const fs = require('fs');

let articlesJS = fs.readFileSync('articles/articles_v11.js', 'utf8');

// 1. Add progress bar to modal HTML in articles/index.html
let indexHTML = fs.readFileSync('articles/index.html', 'utf8');
if (!indexHTML.includes('<div class="reader-progress-bar"')) {
  indexHTML = indexHTML.replace(
    '<header class="reader-sticky-header">',
    `<header class="reader-sticky-header">
      <div class="reader-progress-container" style="width: 100%; height: 3px; background: rgba(255,255,255,0.05); position: absolute; bottom: 0; left: 0;">
        <div class="reader-progress-bar" id="readingProgressBar" style="width: 0%; height: 100%; background: var(--accent-gold); transition: width 0.1s ease-out;"></div>
      </div>`
  );
  
  // Add SEO tags in head if missing
  if (!indexHTML.includes('<meta property="og:title"')) {
    indexHTML = indexHTML.replace('</title>', '</title>\n  <meta property="og:title" id="ogTitle" content="حكمة ونور | المقالات">\n  <meta property="og:description" id="ogDesc" content="">\n  <meta property="og:image" id="ogImage" content="">\n  <meta property="og:type" content="article">\n  <link rel="canonical" id="canonicalUrl" href="">');
  }
  
  fs.writeFileSync('articles/index.html', indexHTML);
}

// 2. Replace the HTML generation in openArticleReader
// Find the block starting at `if (bodyEl) {` to `bodyEl.innerHTML = contentHtml;\n  }`
const bodyElStart = articlesJS.indexOf('if (bodyEl) {');
const bodyElEnd = articlesJS.indexOf("  // Update browser URL query param");

if (bodyElStart !== -1 && bodyElEnd !== -1) {
  let newBodyLogic = `if (bodyEl) {
    const t = ARTICLES_PAGE_TRANSLATIONS[currentLang] || ARTICLES_PAGE_TRANSLATIONS['ar'];
    
    // SEO Update
    document.title = article.title + " | Hikma & Nour";
    const ogTitle = document.getElementById('ogTitle');
    if (ogTitle) ogTitle.content = article.title;
    const ogDesc = document.getElementById('ogDesc');
    if (ogDesc) ogDesc.content = article.desc;
    const canonical = document.getElementById('canonicalUrl');
    if (canonical) canonical.href = window.location.href.split('?')[0] + '?article=' + article.file;
    
    // Structured Data JSON-LD
    let ldJson = document.getElementById('articleJsonLd');
    if (!ldJson) {
      ldJson = document.createElement('script');
      ldJson.id = 'articleJsonLd';
      ldJson.type = 'application/ld+json';
      document.head.appendChild(ldJson);
    }
    ldJson.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.desc,
      "datePublished": article.date || "2026",
      "author": { "@type": "Organization", "name": "Hikma & Nour" }
    });

    // Content Generation
    let contentHtml = \`<div class="article-content-flow" style="font-family: inherit; font-size: 1.15rem; line-height: 2;">\`;

    // "En bref" / Summary block
    contentHtml += \`
      <div class="article-summary-card" style="background: rgba(22, 31, 25, 0.85); border: 1.5px solid rgba(223, 177, 91, 0.3); border-right: 4px solid var(--accent-gold); padding: 25px 30px; border-radius: 16px; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
        <strong style="color: var(--accent-gold-bright); font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          \${currentLang === 'ar' ? 'ملخص المقال' : (currentLang === 'fr' ? 'Résumé de l\\'article' : 'Article Summary')}
        </strong>
        <p style="margin: 12px 0 0; color: var(--text-main); font-weight: 500;">\${article.desc}</p>
      </div>
    \`;

    // Process article.body which is an array of sections or paragraphs
    const paragraphs = (article.body && Array.isArray(article.body)) ? article.body : [article.desc];
    
    // We will render sections. If paragraphs is just strings, we treat them as sections.
    let sectionIdx = 1;
    paragraphs.forEach((p, idx) => {
      // If it's a string, just wrap in p
      let pHtml = \`<p style="margin-bottom: 24px; color: var(--text-sub);">\${p}</p>\`;
      
      // If the content is an object with title and content
      if (typeof p === 'object') {
        pHtml = \`
          <h2 id="sec-\${idx}" style="font-size: 1.7rem; font-weight: 800; color: var(--accent-gold-bright); margin: 50px 0 20px; padding-bottom: 10px; border-bottom: 1px solid rgba(223, 177, 91, 0.2); font-family: 'Noto Naskh Arabic', serif;">
            <span style="color: var(--accent-gold); opacity: 0.5; margin-inline-end: 10px; font-size: 1.4rem;">0\${sectionIdx++}</span> \${p.title}
          </h2>
        \`;
        if (p.content) {
          p.content.forEach(sub => {
            pHtml += \`<p style="margin-bottom: 24px; color: var(--text-sub);">\${sub}</p>\`;
          });
        }
      }
      
      contentHtml += \`
        <div id="sec-block-\${idx}" class="article-reading-section observer-section">
          \${pHtml}
        </div>
      \`;
      
      // Insert Quote after 2nd section as an example if it exists
      if (idx === 1 && article.quote) {
        contentHtml += \`
          <div class="quote-box" style="position: relative; padding: 30px 40px; background: rgba(22, 31, 25, 0.85); border-right: 4px solid var(--accent-gold); border-radius: 16px; margin: 45px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.25);">
            <span style="position: absolute; top: 10px; right: 20px; font-size: 3rem; color: rgba(223, 177, 91, 0.2); line-height: 1; font-family: serif;">❝</span>
            <p style="font-size: 1.35rem; font-weight: 700; color: var(--text-main); font-family: 'Noto Naskh Arabic', serif; margin-bottom: 12px; position: relative; z-index: 2; text-align: center;">\${article.quote}</p>
            <div style="text-align: center; color: var(--accent-gold); font-size: 0.95rem; font-weight: 600;">\${article.quoteAuthor || '— Hikma & Nour'}</div>
          </div>
        \`;
      }
    });

    // Conclusion & "À retenir"
    if (article.inBrief) {
      contentHtml += \`
        <div style="margin: 50px 0; padding: 30px; background: rgba(223, 177, 91, 0.05); border: 1px solid rgba(223, 177, 91, 0.2); border-radius: 20px;">
          <h3 style="font-size: 1.3rem; color: var(--accent-gold); margin-bottom: 20px; font-weight: 800;">
            ✦ \${currentLang === 'ar' ? 'ما يجب أن تتذكره' : (currentLang === 'fr' ? 'À retenir' : 'Key Takeaways')}
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0;">
            \${article.inBrief.map(item => \`
              <li style="margin-bottom: 14px; display: flex; gap: 12px; color: var(--text-main); align-items: flex-start;">
                <span style="color: var(--accent-gold); font-size: 1.2rem; line-height: 1.2;">•</span>
                <span style="line-height: 1.6;">\${item}</span>
              </li>
            \`).join('')}
          </ul>
        </div>
      \`;
    }

    if (article.conclusion) {
      contentHtml += \`
        <h2 id="sec-conclusion" class="observer-section" style="font-size: 1.7rem; font-weight: 800; color: var(--accent-gold-bright); margin: 50px 0 20px; padding-bottom: 10px; border-bottom: 1px solid rgba(223, 177, 91, 0.2); font-family: 'Noto Naskh Arabic', serif;">
          \${currentLang === 'ar' ? 'الخلاصة' : (currentLang === 'fr' ? 'Conclusion' : 'Conclusion')}
        </h2>
        <p style="margin-bottom: 24px; color: var(--text-sub);">\${article.conclusion}</p>
      \`;
    }

    // CTA Final
    contentHtml += \`
      <div style="text-align: center; margin: 60px 0; padding: 40px 20px; background: rgba(22, 31, 25, 0.85); border-radius: 24px; border: 1px solid rgba(223, 177, 91, 0.2);">
        <h3 style="font-size: 1.4rem; color: var(--text-main); margin-bottom: 16px;">
          \${currentLang === 'ar' ? 'هل أعجبك هذا المقال؟' : (currentLang === 'fr' ? 'Vous avez aimé cet article ?' : 'Enjoyed this article?')}
        </h3>
        <p style="color: var(--text-muted); margin-bottom: 24px; font-size: 0.95rem;">
          \${currentLang === 'ar' ? 'اكتشف المزيد من الأفكار حول علم النفس، الفلسفة وتطوير الذات.' : (currentLang === 'fr' ? 'Découvrez d\\'autres réflexions sur la psychologie et la philosophie.' : 'Discover more ideas about psychology and philosophy.')}
        </p>
        <button onclick="closeArticleReader(); setTimeout(() => document.getElementById('globalSearchBtn').click(), 100);" style="background: var(--accent-gold); color: #060606; font-weight: 800; border: none; padding: 14px 30px; border-radius: 30px; cursor: pointer; transition: transform 0.2s; font-size: 1.05rem;">
          \${currentLang === 'ar' ? 'اكتشف المزيد من المقالات ←' : (currentLang === 'fr' ? 'Découvrir les articles →' : 'Explore more articles →')}
        </button>
      </div>
    \`;

    // Rating & Share
    contentHtml += \`
      <div class="article-interactive-hub" style="margin-top: 40px; padding: 25px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: 18px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <span style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">\${t.ratePrompt}</span>
          <div class="star-rating-widget" style="display: flex; gap: 6px; font-size: 1.5rem; color: var(--accent-gold); cursor: pointer;">
            <span onclick="window.rateArticle(1)">★</span>
            <span onclick="window.rateArticle(2)">★</span>
            <span onclick="window.rateArticle(3)">★</span>
            <span onclick="window.rateArticle(4)">★</span>
            <span onclick="window.rateArticle(5)">★</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 20px;">
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button type="button" class="social-btn" onclick="window.likeArticle()" style="background: rgba(223, 177, 91, 0.08); border: 1px solid rgba(223, 177, 91, 0.3); color: var(--accent-gold); padding: 8px 16px; border-radius: 10px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              <span>❤️</span> <span>\${currentLang === 'ar' ? 'إعجاب' : currentLang === 'fr' ? "J'aime" : 'Like'}</span>
            </button>
            <button type="button" class="social-btn" onclick="window.saveArticle()" style="background: rgba(223, 177, 91, 0.08); border: 1px solid rgba(223, 177, 91, 0.3); color: var(--accent-gold); padding: 8px 16px; border-radius: 10px; cursor: pointer; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              <span>📌</span> <span>\${TIKTOK_DATA.ui[currentLang]?.saveLater || 'حفظ'}</span>
            </button>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button type="button" onclick="window.shareArticle('whatsapp')" style="background: rgba(37, 211, 102, 0.15); border: 1px solid rgba(37, 211, 102, 0.3); color: #25D366; padding: 8px 14px; border-radius: 10px; cursor: pointer; font-weight: 600;">WhatsApp</button>
            <button type="button" onclick="window.shareArticle('twitter')" style="background: rgba(29, 161, 242, 0.15); border: 1px solid rgba(29, 161, 242, 0.3); color: #1DA1F2; padding: 8px 14px; border-radius: 10px; cursor: pointer; font-weight: 600;">X</button>
            <button type="button" onclick="window.shareArticle('copy')" style="background: rgba(223, 177, 91, 0.15); border: 1px solid var(--accent-gold); color: var(--accent-gold); padding: 8px 14px; border-radius: 10px; cursor: pointer; font-weight: 600;">📋 \${currentLang === 'ar' ? 'نسخ الرابط' : currentLang === 'fr' ? 'Copier' : 'Copy'}</button>
          </div>
        </div>
      </div>
    \`;

    // Comments Section
    const commentsList = (article.comments && Array.isArray(article.comments)) ? article.comments : [];
    contentHtml += \`
      <section class="article-comments-section" style="margin-top: 45px;">
        <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          <span>💬</span> \${t.commentsHeader} (\${commentsList.length})
        </h3>
        <div id="commentsListContainer" style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
          \${commentsList.map(c => \`
            <div class="comment-item" style="background: rgba(255,255,255,0.02); border: 1px solid var(--card-border); padding: 16px 20px; border-radius: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-weight: 700; color: var(--accent-gold); font-size: 0.95rem;">\${c.author}</span>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">\${c.time}</span>
              </div>
              <p style="color: var(--text-primary); margin: 0; font-size: 0.95rem; line-height: 1.6;">\${c.text}</p>
            </div>
          \`).join('')}
        </div>
        <form id="articleCommentForm" onsubmit="window.submitComment(event)" style="background: var(--card-bg); border: 1px solid var(--card-border); padding: 20px; border-radius: 16px;">
          <textarea id="commentTextInput" placeholder="\${t.commentPlaceholder}" required style="width: 100%; min-height: 90px; padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12); background: rgba(0,0,0,0.2); color: #fff; font-family: inherit; font-size: 0.95rem; box-sizing: border-box; resize: vertical; margin-bottom: 12px;"></textarea>
          <button type="submit" style="background: var(--accent-gold); color: #060606; font-weight: 700; border: none; padding: 10px 22px; border-radius: 10px; cursor: pointer; transition: transform 0.2s;">\${t.postCommentBtn}</button>
        </form>
      </section>
    \`;

    // Related Articles
    let relatedHtml = '';
    const allArts = TIKTOK_DATA.content[currentLang].articles;
    const related = allArts.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
    if (related.length > 0) {
      relatedHtml = \`
        <div class="related-articles" style="margin-top: 60px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.08);">
          <h3 style="font-size: 1.5rem; color: var(--accent-gold-bright); margin-bottom: 24px; font-weight: 800;">
            \${currentLang === 'ar' ? 'اقرأ أيضاً' : (currentLang === 'fr' ? 'Articles similaires' : 'Related articles')}
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
            \${related.map(r => \`
              <div onclick="openArticleReader('\${r.id}')" style="cursor: pointer; background: rgba(22, 31, 25, 0.85); border: 1px solid rgba(223, 177, 91, 0.15); border-radius: 16px; overflow: hidden; transition: transform 0.3s;">
                <img src="\${r.image ? (r.image.startsWith('../') ? r.image : '../' + r.image) : '../main_home_hd_bg.jpg'}" style="width: 100%; height: 140px; object-fit: cover;">
                <div style="padding: 16px;">
                  <div style="color: var(--accent-gold); font-size: 0.75rem; font-weight: 700; margin-bottom: 6px;">\${r.categoryName || r.category}</div>
                  <h4 style="color: var(--text-main); font-size: 0.95rem; font-weight: 700; margin-bottom: 8px; line-height: 1.4;">\${r.title}</h4>
                  <div style="color: var(--text-muted); font-size: 0.8rem;">\${r.readTime}</div>
                </div>
              </div>
            \`).join('')}
          </div>
        </div>
      \`;
    }
    
    contentHtml += relatedHtml;
    contentHtml += \`</div>\`;
    bodyEl.innerHTML = contentHtml;
    
    // Dynamic TOC builder and Intersection Observer
    buildDynamicTOC(paragraphs);
  }
`;

  articlesJS = articlesJS.substring(0, bodyElStart) + newBodyLogic + articlesJS.substring(bodyElEnd);
}

// 3. Inject buildDynamicTOC function and scroll event listener
if (!articlesJS.includes('function buildDynamicTOC')) {
  articlesJS += `
// --- Premium Reading Experience Helpers ---
function buildDynamicTOC(paragraphs) {
  const tocList = document.querySelector('.toc-list');
  if (!tocList) return;
  
  let tocHtml = '';
  let tocIdx = 0;
  
  paragraphs.forEach((p, idx) => {
    if (typeof p === 'object') {
      tocHtml += \`<li class="\${tocIdx === 0 ? 'active' : ''}">
        <a href="#sec-\${idx}" onclick="event.preventDefault(); document.getElementById('sec-\${idx}')?.scrollIntoView({behavior:'smooth', block: 'start'});" style="transition: color 0.2s;">\${p.title}</a>
      </li>\`;
      tocIdx++;
    }
  });
  
  if (tocHtml !== '') {
    tocHtml += \`<li><a href="#sec-conclusion" onclick="event.preventDefault(); document.getElementById('sec-conclusion')?.scrollIntoView({behavior:'smooth', block: 'start'});" style="transition: color 0.2s;">\${currentLang === 'ar' ? 'الخلاصة' : (currentLang === 'fr' ? 'Conclusion' : 'Conclusion')}</a></li>\`;
    tocList.innerHTML = tocHtml;
  }
  
  // Set up Intersection Observer for active TOC item
  setupScrollSpy();
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('.observer-section');
  const navItems = document.querySelectorAll('.toc-list li');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(li => li.classList.remove('active'));
        const id = entry.target.id;
        const activeLink = document.querySelector(\`.toc-list a[href="#\${id}"]\`);
        if (activeLink) {
          activeLink.parentElement.classList.add('active');
        }
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));
  
  // Progress Bar
  const scrollContainer = document.querySelector('.reader-scroll-container');
  const progressBar = document.getElementById('readingProgressBar');
  if (scrollContainer && progressBar) {
    scrollContainer.addEventListener('scroll', () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = progress + '%';
    });
  }
}
`;
}

fs.writeFileSync('articles/articles_v11.js', articlesJS);

console.log('Done updating articles_v11.js HTML engine.');
