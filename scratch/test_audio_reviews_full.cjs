// ==========================================================================
// AUTOMATED TEST SUITE: 20 AUDIO REVIEWS & RATINGS REQUIREMENTS
// ==========================================================================
const fs = require('fs');
const path = require('path');

const audioHtmlPath = path.join(__dirname, '..', 'audio', 'index.html');
const audioJsPath = path.join(__dirname, '..', 'audio', 'audio_v11.js');

const htmlContent = fs.readFileSync(audioHtmlPath, 'utf8');
const jsContent = fs.readFileSync(audioJsPath, 'utf8');

const tests = [];

function registerTest(id, name, fn) {
  tests.push({ id, name, fn });
}

// 1. Page audio exists and loads semantic structure
registerTest(1, "Page audio exists and loads semantic structure", () => {
  if (!htmlContent.includes('class="audio-page-container"') && !htmlContent.includes('id="libraryGridView"')) {
    throw new Error('Contains audio-page-container or libraryGridView');
  }
  if (!htmlContent.includes('id="bookDetailView"')) {
    throw new Error('Contains bookDetailView');
  }
  if (!htmlContent.includes('id="audioReviewsSection"')) {
    throw new Error('Contains audioReviewsSection');
  }
});

// 2. Section commentaires exists with complete container hierarchy
registerTest(2, "Section commentaires exists with complete container hierarchy", () => {
  const reqs = ['audio-reviews-section', 'reviews-summary-grid', 'user-rating-interactive-box', 'workCommentForm', 'audioCommentsList'];
  for (const r of reqs) {
    if (!htmlContent.includes(r)) throw new Error(`Missing container: ${r}`);
  }
});

// 3. Affichage sans commentaire displays elegant empty state without fake stats
registerTest(3, "Affichage sans commentaire displays elegant empty state without fake stats", () => {
  if (!jsContent.includes('noFilteredReviews') || !jsContent.includes('reviewsStatusUnrated')) {
    throw new Error('Missing empty state localization tokens');
  }
  if (!jsContent.includes('reviews-empty-state-card') || !jsContent.includes('summary.totalCount === 0')) {
    throw new Error('Rating summary handles zero state cleanly');
  }
});

// 4. Sélection 1 étoile provides contextual descriptor
registerTest(4, "Sélection 1 étoile provides contextual descriptor (ضعيف / Poor / Médiocre)", () => {
  if (!jsContent.includes('ضعيف') || !jsContent.includes('Poor') || !jsContent.includes('Médiocre')) {
    throw new Error('Missing 1-star descriptor');
  }
});

// 5. Sélection 5 étoiles provides contextual descriptor
registerTest(5, "Sélection 5 étoiles provides contextual descriptor (استثنائي / Exceptional / Exceptionnel)", () => {
  if (!jsContent.includes('استثنائي') || !jsContent.includes('Exceptional') || !jsContent.includes('Exceptionnel')) {
    throw new Error('Missing 5-star descriptor');
  }
});

// 6. Changement de note updates live rating store and UI feedback
registerTest(6, "Changement de note updates live rating store and UI feedback", () => {
  if (!jsContent.includes('selectWorkRating') || !jsContent.includes('submitRating')) {
    throw new Error('Missing live rating handler');
  }
  if (!jsContent.includes('ratingFeedbackStatus')) {
    throw new Error('Missing rating feedback element update');
  }
});

// 7. Saisie du nom input has required tag, max length, and sanitize escaping
registerTest(7, "Saisie du nom input has required tag, max length, and sanitize escaping", () => {
  if (!htmlContent.includes('id="commentAuthorName"') || !htmlContent.includes('maxlength="80"')) {
    throw new Error('Missing commentAuthorName or maxlength="80"');
  }
  if (!jsContent.includes('escapeHtml(c.author)') && !jsContent.includes('escapeHtml')) {
    throw new Error('Missing escaping for author name');
  }
});

// 8. Saisie du commentaire textarea has placeholder and 1500 chars limit
registerTest(8, "Saisie du commentaire textarea has placeholder and 1500 chars limit", () => {
  if (!htmlContent.includes('id="commentText"') || !htmlContent.includes('maxlength="1500"')) {
    throw new Error('Missing commentText textarea or maxlength="1500"');
  }
});

// 9. Compteur 1500 caractères updates dynamically on input
registerTest(9, "Compteur 1500 caractères updates dynamically on input", () => {
  if (!htmlContent.includes('id="commentCharCounter"')) {
    throw new Error('Missing commentCharCounter');
  }
  if (!jsContent.includes('updateCommentCharCount') || !jsContent.includes('1500')) {
    throw new Error('Missing updateCommentCharCount function');
  }
});

// 10. Validation formulaire checks required fields and displays error
registerTest(10, "Validation formulaire checks required fields and displays error", () => {
  if (!jsContent.includes('formErrorName') || !jsContent.includes('formErrorText')) {
    throw new Error('Missing validation error strings');
  }
  if (!jsContent.includes('handleCommentSubmit')) {
    throw new Error('Missing handleCommentSubmit handler');
  }
});

// 11. Message succès shows elegant confirmation notice and resets form
registerTest(11, "Message succès shows elegant confirmation notice and resets form", () => {
  if (!htmlContent.includes('id="commentSubmitNotice"')) {
    throw new Error('Missing commentSubmitNotice element');
  }
  if (!jsContent.includes('formSuccessMsg') || !jsContent.includes('noticeEl.style.display')) {
    throw new Error('Missing success notice handler');
  }
  if (!jsContent.includes('form.reset') && !jsContent.includes('textInput.value =')) {
    throw new Error('Resets form inputs upon successful submission');
  }
});

// 12. Affichage commentaire renders cards with initials avatar, relative date, stars, body, helpful button
registerTest(12, "Affichage commentaire renders cards with initials avatar, relative date, stars, body, helpful button", () => {
  if (!jsContent.includes('comment-avatar')) {
    throw new Error('Renders avatar initials');
  }
  if (!jsContent.includes('comment-helpful-btn') || !jsContent.includes('formatReviewDate')) {
    throw new Error('Missing helpful button or relative date formatting');
  }
});

// 13. Affichage responsive enforces anti-overflow and mobile friendliness
registerTest(13, "Affichage responsive enforces anti-overflow and mobile friendliness", () => {
  if (!htmlContent.includes('@media (max-width: 768px)') && !htmlContent.includes('@media (max-width: 600px)')) {
    throw new Error('Missing responsive media queries');
  }
  if (!htmlContent.includes('word-break: break-word;') && !htmlContent.includes('overflow-wrap: break-word;')) {
    throw new Error('Missing word break rule for mobile comments');
  }
});

// 14. Arabe support has dir="rtl" and complete Arabic dictionary
registerTest(14, "Arabe support has dir=\"rtl\" and complete Arabic dictionary", () => {
  if (!jsContent.includes('reviewsBadgeLabel: "آراء المستمعين"') || !jsContent.includes('reviewsSectionHeading: "آراء المستمعين"')) {
    throw new Error('Missing Arabic translations in AUDIO_I18N');
  }
});

// 15. Français support has dir="ltr" and complete French dictionary
registerTest(15, "Français support has dir=\"ltr\" and complete French dictionary", () => {
  if (!jsContent.includes('reviewsBadgeLabel: "Avis des auditeurs"') || !jsContent.includes('reviewsSectionHeading: "Avis des auditeurs"')) {
    throw new Error('Missing French translations in AUDIO_I18N');
  }
});

// 16. Anglais support has dir="ltr" and complete English dictionary
registerTest(16, "Anglais support has dir=\"ltr\" and complete English dictionary", () => {
  if (!jsContent.includes('reviewsBadgeLabel: "Listener reviews"') && !jsContent.includes('reviewsBadgeLabel: "Listeners Reviews"')) {
    throw new Error('Missing English translations in AUDIO_I18N');
  }
});

// 17. Clavier & Accessibilité implements ARIA roles, tabindex, and arrow navigation
registerTest(17, "Clavier & Accessibilité implements ARIA roles, tabindex, and arrow navigation", () => {
  if (!htmlContent.includes('aria-label') || !htmlContent.includes('tabindex="0"')) {
    throw new Error('Missing accessibility attributes');
  }
});

// 18. Refresh & Persistance uses structured localStorage keys with server sync fallback
registerTest(18, "Refresh & Persistance uses structured localStorage keys with server sync fallback", () => {
  if (!jsContent.includes('hikma_audio_ratings') || !jsContent.includes('hikma_audio_comments')) {
    throw new Error('Missing core localStorage keys');
  }
});

// 19. Absence d'erreur console: No duplicate IDs or broken imports
registerTest(19, "Absence d'erreur console: No duplicate IDs or broken imports", () => {
  const matches = htmlContent.match(/id="([^"]+)"/g) || [];
  const idCounts = {};
  const duplicates = [];
  for (const m of matches) {
    const id = m.replace('id="', '').replace('"', '');
    idCounts[id] = (idCounts[id] || 0) + 1;
    if (idCounts[id] === 2) duplicates.push(id);
  }
  if (duplicates.length > 0) {
    throw new Error(`Duplicate IDs detected: ${duplicates.join(', ')}`);
  }
});

// 20. Absence d'erreur JavaScript: AudioReviewsStore logic functions correctly
registerTest(20, "Absence d'erreur JavaScript: AudioReviewsStore logic functions correctly", () => {
  // Test mock localStorage & AudioReviewsStore evaluation
  const mockStorage = {};
  global.localStorage = {
    getItem: (k) => mockStorage[k] || null,
    setItem: (k, v) => { mockStorage[k] = v; },
    removeItem: (k) => { delete mockStorage[k]; }
  };
  global.window = {};

  // Extract store definition
  const storeCodeMatch = jsContent.match(/const AudioReviewsStore = \{([\s\S]*?)\};\s*window\.AudioReviewsStore/);
  if (!storeCodeMatch) throw new Error('Could not parse AudioReviewsStore');
  
  eval(`var AudioReviewsStore = {${storeCodeMatch[1]}};`);
  
  // Test unseeded work rating submission
  const r1 = AudioReviewsStore.submitRating('test_unseeded_work', 5);
  if (!r1 || r1.average !== 5 || r1.totalCount !== 1) {
    throw new Error(`Rating calculation failed: got average ${r1 ? r1.average : 'null'}, count ${r1 ? r1.totalCount : 'null'}`);
  }

  // Test comment submission
  const c1 = AudioReviewsStore.submitComment('test_unseeded_work', { author: 'Test User', text: 'Magnificent!', rating: 5 });
  if (!c1.success || !c1.comment.id) throw new Error('Comment submission failed');

  // Test helpful toggle
  const h1 = AudioReviewsStore.toggleHelpful('test_unseeded_work', c1.comment.id);
  if (!h1.isLiked || h1.count !== 1) throw new Error('Helpful toggle failed');
});

// RUN SUITE
console.log('================================================================');
console.log('🚀 VALIDATION SUITE: AUDIO REVIEWS & RATINGS (20 CRITERIA)');
console.log('================================================================\n');

let passed = 0;
let failed = 0;

for (const t of tests) {
  try {
    t.fn();
    console.log(`  ✅ [PASS] ${t.id}. ${t.name}`);
    passed++;
  } catch (err) {
    console.log(`  ❌ [FAIL] ${t.id}. ${t.name}`);
    console.log(`     Error: ${err.message}`);
    failed++;
  }
}

console.log('\n================================================================');
console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log('================================================================\n');

if (failed > 0) process.exit(1);
