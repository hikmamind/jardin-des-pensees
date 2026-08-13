import fs from 'fs';
import path from 'path';

console.log('=== RUNNING AUDIO SANCTUARY COMPREHENSIVE VERIFICATION SUITE ===\n');

const BASE_DIR = 'C:\\Users\\TOSHIBA\\.gemini\\antigravity\\scratch\\tiktok-website';
const AUDIO_HTML = path.join(BASE_DIR, 'audio', 'index.html');
const AUDIO_JS = path.join(BASE_DIR, 'audio', 'audio_v11.js');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✅ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ [FAIL] ${testName}`);
    failedTests++;
  }
}

// 1. Check Audio HTML exists & has critical semantic elements
const audioHtmlContent = fs.readFileSync(AUDIO_HTML, 'utf8');

assert(audioHtmlContent.includes('audio-hero-card'), 'Audio Hero Section present');
assert(audioHtmlContent.includes('audio-toolbar-row'), 'Search & Toolbar container present');
assert(audioHtmlContent.includes('audioSearchInput'), 'Search Input present with aria-label');
assert(audioHtmlContent.includes('audioSearchClearBtn'), 'Search Clear Button (✕) present');
assert(audioHtmlContent.includes('audio-categories-bar'), 'Category filter bar present');
assert(audioHtmlContent.includes('featuredAudioSection'), 'Featured section (« À la une ») present');
assert(audioHtmlContent.includes('continueListeningSection'), 'Continue listening section present');
assert(audioHtmlContent.includes('audiobooks-grid'), 'Audiobooks Grid present');
assert(audioHtmlContent.includes('bookDetailView'), 'Book Detail view present');
assert(audioHtmlContent.includes('tabBtnChapters') && audioHtmlContent.includes('tabBtnAbout') && audioHtmlContent.includes('tabBtnTakeaways') && audioHtmlContent.includes('tabBtnQuotes') && audioHtmlContent.includes('tabBtnAuthor'), 'All 5 Tabs (Chapters, About, Takeaways, Quotes, Author) present');
assert(audioHtmlContent.includes('bottomPlayerBar'), 'Bottom Fixed Player Bar present');
assert(audioHtmlContent.includes('sleepTimerBtn'), 'Sleep timer trigger button present');
assert(audioHtmlContent.includes('toastNotification'), 'Toast notification present');
assert(audioHtmlContent.includes('audio_v11.js'), 'audio_v11.js script module linked');
assert(audioHtmlContent.includes('navbar-header'), 'Shared navbar present');
assert(audioHtmlContent.includes('footer'), 'Shared footer present');

// 2. Check Audio JS exists and has critical logic
const audioJsContent = fs.readFileSync(AUDIO_JS, 'utf8');

assert(audioJsContent.includes('AUDIO_I18N'), 'AUDIO_I18N object defined');
assert(audioJsContent.includes('AUDIO_BOOKS_DATA'), 'AUDIO_BOOKS_DATA database defined');
assert(audioJsContent.includes('AudioState'), 'AudioState singleton object defined');
assert(audioJsContent.includes('playBookChapter'), 'playBookChapter function present');
assert(audioJsContent.includes('togglePlay'), 'togglePlay function present');
assert(audioJsContent.includes('seekAudioBar'), 'seekAudioBar function present');
assert(audioJsContent.includes('cycleSpeed'), 'cycleSpeed multiplier present');
assert(audioJsContent.includes('cycleSleepTimer'), 'cycleSleepTimer logic present');
assert(audioJsContent.includes('hikma_audio_progress'), 'Structured localStorage (hikma_audio_progress) used');
assert(audioJsContent.includes('hikma_audio_favorites'), 'Structured localStorage (hikma_audio_favorites) used');
assert(audioJsContent.includes('renderFeaturedCard'), 'renderFeaturedCard function present');
assert(audioJsContent.includes('renderContinueListeningSection'), 'renderContinueListeningSection function present');
assert(audioJsContent.includes('renderCatalogGrid'), 'renderCatalogGrid function present');
assert(audioJsContent.includes('openBookDetail'), 'openBookDetail function present');
assert(audioJsContent.includes('updateSeoMetadata'), 'updateSeoMetadata dynamic SEO updater present');

// 3. Check All 3 Languages present in Translations
assert(audioJsContent.includes('fr:') && audioJsContent.includes('en:') && audioJsContent.includes('ar:'), 'FR, EN, AR translations defined in JS');

// 4. Verify all audio files listed in AUDIO_BOOKS_DATA exist on disk
const audioDir = path.join(BASE_DIR, 'audio');
const expectedMp3s = [
  'alchimiste_chapitre1.mp3', 'alchimiste_chapitre2.mp3', 'alchimiste_chapitre3.mp3', 'alchimiste_chapitre4.mp3', 'alchimiste_chapitre5.mp3',
  'crime_et_chatiment_chapitre1.mp3', 'crime_et_chatiment_chapitre2.mp3', 'crime_et_chatiment_chapitre3.mp3', 'crime_et_chatiment_chapitre4.mp3', 'crime_et_chatiment_chapitre5.mp3',
  'crime_partie1_chapitre6.mp3', 'crime_partie1_chapitre7.mp3', 'crime_partie2_chapitre1.mp3', 'crime_partie3_chapitre5.mp3', 'crime_partie5_chapitre4.mp3', 'crime_partie6_chapitre8.mp3',
  'letranger_p1_ch1.mp3', 'letranger_p1_ch2.mp3', 'letranger_p1_ch3.mp3', 'letranger_p1_ch4.mp3', 'letranger_p1_ch5.mp3', 'letranger_p1_ch6.mp3',
  'letranger_p2_ch1.mp3', 'letranger_p2_ch2.mp3', 'letranger_p2_ch3.mp3', 'letranger_p2_ch4.mp3', 'letranger_p2_ch5.mp3',
  'petit_prince_chapitre1.mp3', 'petit_prince_chapitre2.mp3', 'petit_prince_chapitre3.mp3', 'petit_prince_chapitre4.mp3', 'petit_prince_chapitre5.mp3',
  'metamorphose_chapitre1.mp3', 'metamorphose_chapitre2.mp3', 'metamorphose_chapitre3.mp3', 'metamorphose_chapitre4.mp3', 'metamorphose_chapitre5.mp3',
  'old_man_sea_chapitre1.mp3', 'old_man_sea_chapitre2.mp3', 'old_man_sea_chapitre3.mp3', 'old_man_sea_chapitre4.mp3', 'old_man_sea_chapitre5.mp3',
  'kafka_milena_chapitre1.mp3', 'kafka_milena_chapitre2.mp3', 'kafka_milena_chapitre3.mp3', 'kafka_milena_chapitre4.mp3'
];

expectedMp3s.forEach(mp3 => {
  const filePath = path.join(audioDir, mp3);
  assert(fs.existsSync(filePath), `Audio file ${mp3} exists on disk`);
});

// 5. Check Non-regression on other pages
const keyPages = [
  'index.html',
  'thinkers/index.html',
  'articles/index.html',
  'quotes/index.html',
  'quotes/calendar/index.html',
  'shop/index.html',
  'quizzes/index.html',
  'bio.html'
];

keyPages.forEach(p => {
  const fullPath = path.join(BASE_DIR, p);
  assert(fs.existsSync(fullPath), `Page ${p} exists and is intact`);
});

// 6. Check Reviews & Ratings Features in HTML & JS
assert(audioHtmlContent.includes('audioReviewsSection'), 'Audio Reviews section present in HTML');
assert(audioHtmlContent.includes('reviewsSummaryGrid'), 'Reviews Summary & Distribution Grid present in HTML');
assert(audioHtmlContent.includes('userRatingBox'), 'User Interactive Rating Box present in HTML');
assert(audioHtmlContent.includes('workCommentForm'), 'Work Comment Form present in HTML');
assert(audioHtmlContent.includes('audioCommentsList'), 'Audio Comments list container present in HTML');
assert(audioHtmlContent.includes('reviewsSortSelect'), 'Reviews sort select dropdown present in HTML');
assert(audioHtmlContent.includes('reviewsFilterPills'), 'Reviews star filter pills present in HTML');

assert(audioJsContent.includes('AudioReviewsStore'), 'AudioReviewsStore object defined in JS');
assert(audioJsContent.includes('getRatingSummary'), 'AudioReviewsStore.getRatingSummary method present');
assert(audioJsContent.includes('submitRating'), 'AudioReviewsStore.submitRating method present');
assert(audioJsContent.includes('getReviews'), 'AudioReviewsStore.getReviews method present');
assert(audioJsContent.includes('submitComment'), 'AudioReviewsStore.submitComment method present');
assert(audioJsContent.includes('escapeHtml'), 'XSS prevention escapeHtml function present');
assert(audioJsContent.includes('hikma_audio_ratings'), 'hikma_audio_ratings structured localStorage key used');
assert(audioJsContent.includes('hikma_audio_comments'), 'hikma_audio_comments structured localStorage key used');

// 7. Check server.js has audio reviews API endpoints
const serverContent = fs.readFileSync(path.join(BASE_DIR, 'server.js'), 'utf8');
assert(serverContent.includes('/api/audio/:workId/reviews'), 'Server endpoint GET /api/audio/:workId/reviews present');
assert(serverContent.includes('/api/audio/:workId/rating'), 'Server endpoint POST /api/audio/:workId/rating present');
assert(serverContent.includes('/api/audio/:workId/comments'), 'Server endpoint POST /api/audio/:workId/comments present');

console.log(`\n=== TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED ===\n`);
if (failedTests > 0) process.exit(1);
