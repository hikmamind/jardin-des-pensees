const fs = require('fs');

async function runQuotesSuite() {
  console.log('=== RUNNING QUOTES PREMIUM V3 TEST SUITE ===\n');

  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${message}`);
      failed++;
    }
  }

  // 1. Data Integrity & Count Verification
  assert(DATA.content.fr.quotes.length === 26, `[FR] Has exactly 26 quotes (found: ${DATA.content.fr.quotes.length})`);
  assert(DATA.content.en.quotes.length === 26, `[EN] Has exactly 26 quotes (found: ${DATA.content.en.quotes.length})`);
  assert(DATA.content.ar.quotes.length === 47, `[AR] Has exactly 47 quotes (found: ${DATA.content.ar.quotes.length})`);

  // 2. Canonical ID Verification
  const frIds = DATA.content.fr.quotes.map(q => q.id);
  const enIds = DATA.content.en.quotes.map(q => q.id);
  const arIds = DATA.content.ar.quotes.map(q => q.id);

  assert(frIds.every(Boolean), '[FR] All 26 quotes have stable canonical IDs');
  assert(enIds.every(Boolean), '[EN] All 26 quotes have stable canonical IDs');
  assert(arIds.every(Boolean), '[AR] All 47 quotes have stable canonical IDs');

  // Verify that indices 0-25 share identical canonical IDs across FR, EN, AR
  for (let i = 0; i < 26; i++) {
    assert(frIds[i] === enIds[i] && frIds[i] === arIds[i], `Quote [${i}] has identical canonical ID across FR, EN, AR: '${frIds[i]}'`);
  }

  // 3. Reference Quote 0 (Epictetus) Verification
  ['ar', 'fr', 'en'].forEach(lang => {
    const q0 = DATA.content[lang].quotes[0];
    assert(q0.id === 'epictetus-things-and-judgments', `[${lang.toUpperCase()}] Quote 0 has canonical id 'epictetus-things-and-judgments'`);
    assert(q0.text && q0.text.length > 10, `[${lang.toUpperCase()}] Quote 0 has authentic text`);
    const isEpictetus = q0.author && (q0.author.includes('Épictète') || q0.author.includes('Epictetus') || q0.author.includes('إبيكتيتوس'));
    assert(isEpictetus, `[${lang.toUpperCase()}] Quote 0 author matches Epictetus: ${q0.author}`);
    assert(q0.meaning && q0.meaning.length > 20, `[${lang.toUpperCase()}] Quote 0 has meaning`);
    assert((q0.philosophy || q0.explanation) && (q0.philosophy || q0.explanation).length > 20, `[${lang.toUpperCase()}] Quote 0 has philosophy`);
    assert(Array.isArray(q0.lessons) && q0.lessons.length >= 3, `[${lang.toUpperCase()}] Quote 0 has 3+ structured lessons`);
    assert(q0.application && q0.application.length > 20, `[${lang.toUpperCase()}] Quote 0 has practical application`);
    assert((q0.reflection || q0.reflectionQuestion) && (q0.reflection || q0.reflectionQuestion).length > 10, `[${lang.toUpperCase()}] Quote 0 has reflection`);
    assert(q0.similarQuote && q0.similarQuote.text, `[${lang.toUpperCase()}] Quote 0 has similar quote`);
  });

  // 4. CSS Verification
  const css = fs.readFileSync('style.css', 'utf8');
  assert(css.includes('.quote-premium-hero'), 'style.css contains .quote-premium-hero');
  assert(css.includes('.quote-premium-portrait-wrap'), 'style.css contains .quote-premium-portrait-wrap');
  assert(css.includes('.quote-premium-quote-content'), 'style.css contains .quote-premium-quote-content');
  assert(css.includes('.quote-premium-grid-2col'), 'style.css contains .quote-premium-grid-2col');
  assert(css.includes('.quote-premium-lessons-list'), 'style.css contains .quote-premium-lessons-list');
  assert(css.includes('.quote-premium-author-hub'), 'style.css contains .quote-premium-author-hub');
  assert(css.includes('.quote-premium-nav-bar'), 'style.css contains .quote-premium-nav-bar');
  assert(css.includes('.quote-premium-more-grid'), 'style.css contains .quote-premium-more-grid');

  // 5. HTML Verification
  const html = fs.readFileSync('quotes/index.html', 'utf8');
  assert(html.includes('id="quoteModal"'), 'quotes/index.html has quoteModal');
  assert(html.includes('id="magazineQuoteRoot"'), 'quotes/index.html has magazineQuoteRoot');
  assert(html.includes('id="magazineToast"'), 'quotes/index.html has magazineToast');

  console.log('\n========================================');
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('========================================\n');

  if (failed > 0) process.exit(1);
}

runQuotesSuite().catch(err => {
  console.error('Test suite failed:', err);
  process.exit(1);
});
