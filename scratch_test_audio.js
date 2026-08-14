import fs from 'fs';
import path from 'path';

console.log("=== COMPREHENSIVE AUDIO LIBRARY TEST SUITE ===");

const htmlPath = path.resolve('audio/index.html');
const jsPath = path.resolve('audio/audio_v11.js');

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

// 1. Check file existence
assert(fs.existsSync(htmlPath), "audio/index.html exists");
assert(fs.existsSync(jsPath), "audio/audio_v11.js exists");

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const jsContent = fs.readFileSync(jsPath, 'utf8');

// 2. Check HTML structure & requirements
assert(htmlContent.includes('id="audioSearchInput"'), "HTML has search input");
assert(htmlContent.includes('id="clearSearchBtn"'), "HTML has search clear button");
assert(htmlContent.includes('id="featuredAudioSection"'), "HTML has Featured section");
assert(htmlContent.includes('id="continueListeningSection"'), "HTML has Continue Listening section");
assert(htmlContent.includes('id="allBooksSection"'), "HTML has All Books section");
assert(htmlContent.includes('id="audioCatalogGrid"'), "HTML has audio catalog grid");
assert(htmlContent.includes('id="audioBookDetailView"'), "HTML has audio detail view");
assert(htmlContent.includes('id="tabBtnChapters"'), "HTML has Tab Chapters");
assert(htmlContent.includes('id="tabBtnAbout"'), "HTML has Tab About");
assert(htmlContent.includes('id="tabBtnTakeaways"'), "HTML has Tab Takeaways");
assert(htmlContent.includes('id="tabBtnQuotes"'), "HTML has Tab Quotes");
assert(htmlContent.includes('id="tabBtnAuthor"'), "HTML has Tab Author");
assert(htmlContent.includes('id="persistentAudioBar"'), "HTML has persistent audio player bar");
assert(htmlContent.includes('id="sleepTimerModal"'), "HTML has sleep timer modal");
assert(htmlContent.includes('id="audioReviewsSection"'), "HTML has listener reviews & rating section");

// Check anti-overflow CSS in HTML
assert(htmlContent.includes('overflow-x: hidden') || htmlContent.includes('min-width: 0'), "HTML includes anti-overflow precautions");

// 3. Check JS content & data integrity
const requiredBooks = ['alchemist', 'crime_punishment', 'etranger', 'petit_prince', 'kafka', 'vieux', 'milena'];
requiredBooks.forEach(bookKey => {
  assert(jsContent.includes(`key: '${bookKey}'`) || jsContent.includes(`key: "${bookKey}"`) || jsContent.includes(`${bookKey}: {`), `Book '${bookKey}' defined in audio data`);
});

// Check thinkers link for Camus
assert(jsContent.includes('/thinkers/?thinker=camus') || jsContent.includes('../thinkers/?thinker=camus'), "Author Camus links to /thinkers/?thinker=camus");

// Check LocalStorage keys
assert(jsContent.includes('hikma_audio_progress'), "Uses 'hikma_audio_progress' localStorage key");
assert(jsContent.includes('hikma_audio_favorites'), "Uses 'hikma_audio_favorites' localStorage key");
assert(jsContent.includes('hikma_audio_history'), "Uses 'hikma_audio_history' localStorage key");
assert(jsContent.includes('hikma_audio_settings'), "Uses 'hikma_audio_settings' localStorage key");

// Check AudioController functionality
assert(jsContent.includes('class AudioController') || jsContent.includes('const audioController =') || jsContent.includes('const AudioController ='), "AudioController singleton exists");
assert(jsContent.includes('jumpTime(-15)') || jsContent.includes('jumpTime(15)'), "Audio player supports 15s jump");
assert(jsContent.includes('setPlaybackRate'), "Audio player supports variable playback speed");
assert(jsContent.includes('setSleepTimer'), "Audio player supports sleep timer");

// Check real MP3 file paths
const mp3Matches = jsContent.match(/audio_v11\/[a-zA-Z0-9_\-]+\.mp3/g) || [];
console.log(`Found ${mp3Matches.length} audio file references in JS`);
assert(mp3Matches.length >= 46, `Contains at least 46 chapter audio tracks (Found: ${mp3Matches.length})`);

// Check if all referenced MP3 files actually exist on disk
let missingFiles = 0;
const uniqueMp3s = [...new Set(mp3Matches)];
uniqueMp3s.forEach(mp3Rel => {
  const fullPath = path.resolve(mp3Rel);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing audio file: ${mp3Rel}`);
    missingFiles++;
  }
});
assert(missingFiles === 0, `All ${uniqueMp3s.length} unique MP3 tracks exist on disk`);

// Check Trilingual Support
assert(jsContent.includes('AUDIO_I18N = {') && jsContent.includes('ar:') && jsContent.includes('fr:') && jsContent.includes('en:'), "AUDIO_I18N contains ar, fr, and en translations");

// Check Dynamic SEO & JSON-LD
assert(jsContent.includes('updateSeoMetadata') && jsContent.includes('@type": "Audiobook"'), "Dynamic SEO & JSON-LD schema implemented");

console.log("\n==========================================");
console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log("==========================================");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
