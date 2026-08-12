const fs = require('fs');

async function runTests() {
  console.log('=== RUNNING MAGAZINE V3 TEST SUITE ===\n');
  let passed = 0;
  let failed = 0;

  function assert(cond, desc) {
    if (cond) {
      console.log('✅ PASS:', desc);
      passed++;
    } else {
      console.error('❌ FAIL:', desc);
      failed++;
    }
  }

  // 1. Check data_v11.js
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  assert(DATA.content.ar.articles.length >= 11, 'AR has all 11 articles');
  assert(DATA.content.fr.articles.length >= 11, 'FR has all 11 articles');
  assert(DATA.content.en.articles.length >= 11, 'EN has all 11 articles');

  // 2. Check reference article in all languages
  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'why-people-distance-when-you-succeed');
    assert(art !== undefined, `[${lang.toUpperCase()}] Reference article exists`);
    assert(art.title && art.title.length > 10, `[${lang.toUpperCase()}] Has compelling title`);
    assert(art.chapo && art.chapo.length > 20, `[${lang.toUpperCase()}] Has editorial Chapô`);
    assert(art.summaryBox && art.summaryBox.summary && art.summaryBox.question, `[${lang.toUpperCase()}] Has Summary Box with core question`);
    assert(art.sections && art.sections.length >= 5, `[${lang.toUpperCase()}] Has 5+ structured sections`);
    assert(art.sections.some(s => s.type === 'insight'), `[${lang.toUpperCase()}] Has psychological insight callout block`);
    assert(art.sections.some(s => s.type === 'practical' && s.tips && s.tips.length === 5), `[${lang.toUpperCase()}] Has practical advice section with 5 tips`);
    assert(art.inBrief && art.inBrief.length === 5, `[${lang.toUpperCase()}] Has 5 Key Takeaways inBrief`);
    assert(art.conclusion && art.conclusion.length > 20, `[${lang.toUpperCase()}] Has rich conclusion`);
    assert(art.finalQuote && art.finalQuote.length > 10, `[${lang.toUpperCase()}] Has memorable final quote`);
    assert(art.comments && art.comments.length >= 2, `[${lang.toUpperCase()}] Has pre-populated comments`);
  });

  // 3. Verify CSS rules
  const css = fs.readFileSync('style.css', 'utf8');
  assert(css.includes('.magazine-hero'), 'style.css contains .magazine-hero');
  assert(css.includes('.magazine-split-grid'), 'style.css contains .magazine-split-grid');
  assert(css.includes('.magazine-sidebar'), 'style.css contains .magazine-sidebar');
  assert(css.includes('.magazine-mobile-toc'), 'style.css contains .magazine-mobile-toc');
  assert(css.includes('.magazine-quote-box'), 'style.css contains .magazine-quote-box');
  assert(css.includes('.magazine-insight-card'), 'style.css contains .magazine-insight-card');
  assert(css.includes('.magazine-practical-card'), 'style.css contains .magazine-practical-card');
  assert(css.includes('.magazine-takeaways-card'), 'style.css contains .magazine-takeaways-card');
  assert(css.includes('.magazine-final-quote-card'), 'style.css contains .magazine-final-quote-card');
  assert(css.includes('.magazine-cta-card'), 'style.css contains .magazine-cta-card');
  assert(css.includes('.magazine-hub-card'), 'style.css contains .magazine-hub-card');
  assert(css.includes('.mag-toast'), 'style.css contains .mag-toast');

  // 4. Verify articles/index.html
  const html = fs.readFileSync('articles/index.html', 'utf8');
  assert(html.includes('id="articleReaderModal"'), 'index.html has articleReaderModal');
  assert(html.includes('id="magazineArticleRoot"'), 'index.html has magazineArticleRoot');
  assert(html.includes('id="magazineToast"'), 'index.html has magazineToast');
  assert(!html.includes('كيف تتعامل مع القلق في عالم مليء بالضغوط'), 'index.html does NOT contain static anxiety placeholder in modal');

  // 5. Test Article Lookup Logic simulation
  function findArticleBySlugOrFileSim(slugOrFile, lang) {
    if (!slugOrFile) return null;
    const articles = (DATA.content[lang] && DATA.content[lang].articles) || [];
    const clean = slugOrFile.toString().trim().toLowerCase().replace(/^(\.\/|\.\.\/|articles\/)+/, '').replace(/\.html$/, '');
    let found = articles.find(a => {
      const aId = (a.id || '').toLowerCase().trim();
      const aFile = (a.file || '').toLowerCase().trim().replace(/\.html$/, '');
      return aId === clean || aFile === clean || a.file === slugOrFile;
    });
    if (found) return found;
    for (const l of ['ar', 'fr', 'en']) {
      const list = (DATA.content[l] && DATA.content[l].articles) || [];
      const match = list.find(a => {
        const aId = (a.id || '').toLowerCase().trim();
        const aFile = (a.file || '').toLowerCase().trim().replace(/\.html$/, '');
        return aId === clean || aFile === clean || a.file === slugOrFile;
      });
      if (match) return articles.find(a => a.id === match.id) || match;
    }
    return null;
  }

  // Exact target URL tests
  const target1 = findArticleBySlugOrFileSim('why-people-distance-when-you-succeed.html', 'ar');
  assert(target1 && target1.id === 'why-people-distance-when-you-succeed', 'Slug with .html finds correct article');

  const target2 = findArticleBySlugOrFileSim('why-people-distance-when-you-succeed', 'fr');
  assert(target2 && target2.id === 'why-people-distance-when-you-succeed', 'Slug without .html in FR finds correct article');

  const target3 = findArticleBySlugOrFileSim('why-people-respect-silent-person.html', 'en');
  assert(target3 && target3.id === 'why-people-respect-silent-person', 'Other article slug finds correct article');

  const targetInvalid = findArticleBySlugOrFileSim('non-existent-article-slug.html', 'ar');
  assert(targetInvalid === null, 'Invalid slug returns null (triggers 404 view, no fallback)');

  console.log(`\n========================================`);
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================\n`);

  if (failed > 0) process.exit(1);
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
