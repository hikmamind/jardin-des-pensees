// Test Suite for Thinkers Premium Editorial System (V3)
const fs = require('fs');

async function runThinkersSuite() {
  console.log('=== RUNNING THINKERS PREMIUM V3 TEST SUITE ===\n');

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

  // 1. Data Integrity across all 3 languages
  ['ar', 'fr', 'en'].forEach(lang => {
    const list = DATA.content[lang].thinkers;
    assert(list && list.length === 30, `[${lang.toUpperCase()}] Has exactly 30 thinkers (found: ${list?.length})`);
    
    // Platon check
    const platon = list.find(t => t.id === 'platon');
    assert(!!platon, `[${lang.toUpperCase()}] Platon exists with canonical id 'platon'`);
    assert(platon && platon.name && platon.name.length > 0, `[${lang.toUpperCase()}] Platon has localized name: ${platon?.name}`);
    assert(platon && platon.intro && platon.intro.length > 50, `[${lang.toUpperCase()}] Platon has rich editorial intro`);
    assert(platon && platon.mainIdeas && platon.mainIdeas.length >= 4, `[${lang.toUpperCase()}] Platon has 4+ structured ideas`);
    assert(platon && platon.works && platon.works.length >= 4, `[${lang.toUpperCase()}] Platon has 4 major works`);
    assert(platon && platon.influence && platon.influence.names.length >= 4, `[${lang.toUpperCase()}] Platon has influence network`);
    assert(platon && platon.quotes && platon.quotes.length >= 3, `[${lang.toUpperCase()}] Platon has 3+ verified quotes`);
    assert(platon && platon.lessons && platon.lessons.length >= 4, `[${lang.toUpperCase()}] Platon has 4+ actionable lessons`);
    assert(platon && platon.timeline && platon.timeline.length >= 4, `[${lang.toUpperCase()}] Platon has 4+ timeline milestones`);
  });

  // 2. CSS verification
  const css = fs.readFileSync('style.css', 'utf8');
  assert(css.includes('.thinker-premium-layout'), 'style.css contains .thinker-premium-layout');
  assert(css.includes('.thinker-premium-sidebar'), 'style.css contains .thinker-premium-sidebar');
  assert(css.includes('.thinker-premium-hero-card'), 'style.css contains .thinker-premium-hero-card');
  assert(css.includes('.thinker-premium-ideas-list'), 'style.css contains .thinker-premium-ideas-list');
  assert(css.includes('.thinker-premium-concept-card'), 'style.css contains .thinker-premium-concept-card');
  assert(css.includes('.thinker-premium-work-card'), 'style.css contains .thinker-premium-work-card');
  assert(css.includes('.thinker-premium-avatar-item'), 'style.css contains .thinker-premium-avatar-item');
  assert(css.includes('.thinker-premium-timeline'), 'style.css contains .thinker-premium-timeline');

  // 3. HTML verification
  const html = fs.readFileSync('thinkers/index.html', 'utf8');
  assert(html.includes('id="thinkerModal"'), 'thinkers/index.html has thinkerModal');
  assert(html.includes('id="magazineThinkerRoot"'), 'thinkers/index.html has magazineThinkerRoot');
  assert(html.includes('id="magazineToast"'), 'thinkers/index.html has magazineToast');

  // 4. Thinker IDs completeness & canonical matching
  const arIds = DATA.content.ar.thinkers.map(t => t.id);
  const frIds = DATA.content.fr.thinkers.map(t => t.id);
  const enIds = DATA.content.en.thinkers.map(t => t.id);
  
  const testIds = ['platon', 'nietzsche', 'marcaurele', 'seneque', 'camus', 'aristote', 'descartes', 'kant', 'schopenhauer', 'jung'];
  testIds.forEach(id => {
    assert(arIds.includes(id) && frIds.includes(id) && enIds.includes(id), `Thinker '${id}' exists identically across AR, FR, EN`);
  });

  console.log('\n========================================');
  console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('========================================\n');

  if (failed > 0) process.exit(1);
}

runThinkersSuite().catch(err => {
  console.error('Test suite failed with error:', err);
  process.exit(1);
});
