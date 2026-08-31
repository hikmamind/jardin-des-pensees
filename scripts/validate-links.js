import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

let errors = 0;
let warnings = 0;

function logError(msg) {
  console.error(`❌ [LINK ERROR] ${msg}`);
  errors++;
}

function logWarning(msg) {
  console.warn(`⚠️ [LINK WARN] ${msg}`);
  warnings++;
}

console.log('====================================================');
console.log('       RUNNING LINK & ASSET VALIDATION              ');
console.log('====================================================');

const pillarsData = JSON.parse(fs.readFileSync(path.join(rootDir, 'data', 'pillars.json'), 'utf8'));
const articlesData = JSON.parse(fs.readFileSync(path.join(rootDir, 'data', 'articles.json'), 'utf8'));

// 1. Check pillar index.html files and data-pillar attribute
Object.values(pillarsData).forEach(p => {
  const indexPath = path.join(rootDir, p.folder, 'index.html');
  if (!fs.existsSync(indexPath)) {
    logError(`Missing index.html for pillar '${p.id}' at: ${p.folder}/index.html`);
  } else {
    const html = fs.readFileSync(indexPath, 'utf8');
    if (!html.includes(`data-pillar="${p.id}"`)) {
      logError(`Pillar '${p.id}' index.html does not contain data-pillar="${p.id}" attribute!`);
    }
  }
});

// 2. Check articles URLs and thumbnails
articlesData.forEach(art => {
  const prefix = `Article [${art.id}]`;

  // Check URLs
  ['ar', 'fr', 'en'].forEach(lang => {
    const rawUrl = art.urls[lang];
    if (rawUrl) {
      const cleanPath = rawUrl.replace(/^\.\.\//, '');
      const fullPath = path.join(rootDir, cleanPath);
      if (!fs.existsSync(fullPath)) {
        logError(`${prefix} (${lang}): physical file not found at ${cleanPath}`);
      }
    }
  });

  // Check Thumbnail
  if (art.thumbnail) {
    const cleanThumb = art.thumbnail.replace(/^\.\.\//, '');
    const fullThumbPath = path.join(rootDir, cleanThumb);
    if (!fs.existsSync(fullThumbPath)) {
      logWarning(`${prefix}: thumbnail image not found at ${cleanThumb}`);
    }
  }
});

console.log(`\nChecked ${articlesData.length} articles across all languages.`);
if (errors > 0) {
  console.error(`\n❌ LINK VALIDATION FAILED with ${errors} error(s) and ${warnings} warning(s).`);
  process.exit(1);
} else {
  console.log(`\n✓ LINK & ASSET VALIDATION PASSED (0 errors, ${warnings} warnings).`);
}
