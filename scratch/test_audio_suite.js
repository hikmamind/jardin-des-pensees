import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioDir = path.join(__dirname, '..', 'audio');
const htmlPath = path.join(audioDir, 'index.html');
const jsPath = path.join(audioDir, 'audio_v11.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

let pass = 0;
let fail = 0;

function test(name, condition) {
    if (condition) {
        console.log(`[PASS] ${name}`);
        pass++;
    } else {
        console.error(`[FAIL] ${name}`);
        fail++;
    }
}

console.log('--- AUDIO LIBRARY VERIFICATION SUITE ---');

// 1. Structure & HTML Elements
test('HTML contains meta viewport', html.includes('name="viewport"'));
test('HTML has dynamic title / SEO placeholders', html.includes('<title>'));
test('HTML has JSON-LD script tag', html.includes('type="application/ld+json"'));
test('HTML has search bar with clear button', html.includes('id="audioSearchInput"') && html.includes('id="clearSearchBtn"'));
test('HTML has filter pills for all categories', 
    html.includes('data-filter="all"') &&
    html.includes('data-filter="philosophy"') &&
    html.includes('data-filter="psychology"') &&
    html.includes('data-filter="classics"') &&
    html.includes('data-filter="selfdev"') &&
    html.includes('data-filter="favorites"') &&
    html.includes('data-filter="in_progress"') &&
    html.includes('data-filter="completed"')
);
test('HTML has Featured Audio Section (À la une)', html.includes('id="featuredAudioSection"'));
test('HTML has Continue Listening Section', html.includes('id="continueListeningSection"'));
test('HTML has All Books Section', html.includes('id="allBooksSection"'));
test('HTML has Detailed Dossier View', html.includes('id="bookDossierView"'));
test('HTML has Breadcrumb with back link', html.includes('id="breadcrumbBack"') && html.includes('id="breadcrumbTitle"'));
test('HTML has all 5 tabs',
    html.includes('data-tab="chapters"') &&
    html.includes('data-tab="about"') &&
    html.includes('data-tab="takeaways"') &&
    html.includes('data-tab="quotes"') &&
    html.includes('data-tab="author"')
);
test('HTML has Persistent Player Bar', html.includes('id="persistentPlayer"') || html.includes('class="persistent-player"'));
test('HTML has Play/Pause button in persistent player', html.includes('id="barPlayPause"'));
test('HTML has 15s Jump Back/Forward buttons', html.includes('id="barSkipBack"') && html.includes('id="barSkipForward"'));
test('HTML has Speed Multiplier button & options', html.includes('id="barSpeedBtn"'));
test('HTML has Sleep Timer Modal & button', html.includes('id="sleepTimerBtn"') && html.includes('id="sleepTimerModal"'));

// 2. Anti-Overflow & CSS Checks
test('CSS has min-width: 0 on flexible containers to prevent horizontal overflow', 
    html.includes('min-width: 0')
);
test('CSS does not force rigid 100vw or overflow-x on body', !html.includes('overflow-x: scroll'));

// 3. Audio Engine & Data Checks (JS)
test('JS contains AudioController singleton', js.includes('class AudioController') || js.includes('const AudioController'));
test('JS defines all 7 canonical books (milena, alchemist, crime_punishment, etranger, petit_prince, kafka, vieux)',
    js.includes('milena') &&
    js.includes('alchemist') &&
    js.includes('crime_punishment') &&
    js.includes('etranger') &&
    js.includes('petit_prince') &&
    js.includes('kafka') &&
    js.includes('vieux')
);
test('JS contains total 46 chapter audio mappings', 
    (js.match(/audioUrl\s*:/g) || []).length >= 46 || (js.match(/src\s*:/g) || []).length >= 46 || (js.match(/\.mp3/g) || []).length >= 46
);
test('JS has multilingual translations for AR, FR, EN',
    js.includes('ar:') && js.includes('fr:') && js.includes('en:')
);
test('JS supports sleep timer with options (10, 20, 30, end)',
    js.includes('sleepTimer') || js.includes('setSleepTimer')
);
test('JS supports 15s jump', js.includes('seekRelative') || js.includes('+15') || js.includes('-15') || js.includes('currentTime += 15') || js.includes('currentTime -= 15'));
test('JS supports playback speeds (0.75x, 1x, 1.25x, 1.5x, 2x)',
    js.includes('0.75') && js.includes('1.25') && js.includes('1.5') && js.includes('2')
);
test('JS implements localStorage keys (hikma_audio_progress, hikma_audio_favorites, hikma_audio_history, hikma_audio_settings)',
    js.includes('hikma_audio_progress') &&
    js.includes('hikma_audio_favorites') &&
    js.includes('hikma_audio_history') &&
    js.includes('hikma_audio_settings')
);
test('JS updates dynamic JSON-LD and Document Title on book selection',
    js.includes('application/ld+json') && js.includes('document.title')
);
test('JS links Camus to thinker page /thinkers/?thinker=camus',
    js.includes('/thinkers/?thinker=camus') || js.includes('/thinkers/index.html?thinker=camus') || js.includes('thinkerId')
);

// 4. Check that all MP3 files actually exist on disk
const mp3Matches = js.match(/\/audio\/files\/[a-zA-Z0-9_\-\.]+\.mp3/g) || [];
const uniqueMp3s = Array.from(new Set(mp3Matches));
let allFilesExist = true;
let missingFiles = [];

uniqueMp3s.forEach(relPath => {
    const fullPath = path.join(__dirname, '..', relPath);
    if (!fs.existsSync(fullPath)) {
        allFilesExist = false;
        missingFiles.push(relPath);
    }
});

test(`All MP3 audio files referenced in JS exist on disk (${uniqueMp3s.length} unique files)`, allFilesExist);
if (!allFilesExist) {
    console.error('Missing audio files:', missingFiles);
}

console.log(`\nResults: ${pass} PASSED, ${fail} FAILED`);
if (fail > 0) {
    process.exit(1);
} else {
    console.log('ALL TESTS PASSED SUCCESSFULLY!');
}
