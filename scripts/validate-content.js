import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const VALID_PILLARS = ['psychology', 'philosophy', 'wellbeing', 'wisdom', 'spirituality'];
const VALID_STATUSES = ['published', 'draft', 'archived'];
const REQUIRED_LANGS = ['ar', 'fr', 'en'];

let errors = 0;
let warnings = 0;

function logError(msg) {
  console.error(`❌ [ERROR] ${msg}`);
  errors++;
}

function logWarning(msg) {
  console.warn(`⚠️ [WARN] ${msg}`);
  warnings++;
}

console.log('====================================================');
console.log('       RUNNING CONTENT SCHEMA VALIDATION            ');
console.log('====================================================');

// 1. Validate pillars.json
const pillarsPath = path.join(rootDir, 'data', 'pillars.json');
if (!fs.existsSync(pillarsPath)) {
  logError('data/pillars.json does not exist!');
  process.exit(1);
}

const pillarsData = JSON.parse(fs.readFileSync(pillarsPath, 'utf8'));
VALID_PILLARS.forEach(pId => {
  if (!pillarsData[pId]) {
    logError(`Missing canonical pillar "${pId}" in data/pillars.json`);
  } else {
    const p = pillarsData[pId];
    if (!p.titles || !REQUIRED_LANGS.every(l => p.titles[l])) {
      logError(`Pillar "${pId}" is missing titles for some languages (${REQUIRED_LANGS.join(', ')})`);
    }
    if (!p.pathways || !Array.isArray(p.pathways) || p.pathways.length === 0) {
      logError(`Pillar "${pId}" must have at least one pathway in data/pillars.json`);
    }
  }
});

// 2. Validate articles.json
const articlesPath = path.join(rootDir, 'data', 'articles.json');
if (!fs.existsSync(articlesPath)) {
  logError('data/articles.json does not exist!');
  process.exit(1);
}

const articlesData = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));
const seenArticleIds = new Set();

articlesData.forEach((art, index) => {
  const prefix = `Article [${art.id || index}]`;

  // ID uniqueness
  if (!art.id) {
    logError(`${prefix}: missing 'id' field.`);
  } else if (seenArticleIds.has(art.id)) {
    logError(`${prefix}: duplicate id '${art.id}'.`);
  } else {
    seenArticleIds.add(art.id);
  }

  // Pillar validity
  if (!art.pillar || !VALID_PILLARS.includes(art.pillar)) {
    logError(`${prefix}: invalid pillar '${art.pillar}'. Must be one of: ${VALID_PILLARS.join(', ')}`);
  }

  // Status validity
  if (!art.status || !VALID_STATUSES.includes(art.status)) {
    logError(`${prefix}: invalid status '${art.status}'. Must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  // Multilingual fields
  ['titles', 'excerpts', 'urls', 'readingTime'].forEach(field => {
    if (!art[field] || typeof art[field] !== 'object') {
      logError(`${prefix}: missing or invalid object '${field}'.`);
    } else {
      REQUIRED_LANGS.forEach(lang => {
        if (!art[field][lang] || art[field][lang].trim() === '') {
          logError(`${prefix}: missing '${field}.${lang}'.`);
        }
      });
    }
  });

  // Featured rules
  if (art.featured === true) {
    if (typeof art.featuredOrder !== 'number' || art.featuredOrder < 1) {
      logError(`${prefix}: featured: true requires a positive integer 'featuredOrder'.`);
    }
  }
});

console.log(`\nValidated ${Object.keys(pillarsData).length} pillars and ${articlesData.length} articles.`);
if (errors > 0) {
  console.error(`\n❌ CONTENT VALIDATION FAILED with ${errors} error(s) and ${warnings} warning(s).`);
  process.exit(1);
} else {
  console.log(`\n✓ CONTENT SCHEMA VALIDATION PASSED (0 errors, ${warnings} warnings).`);
}
