const fs = require('fs');

// Canonical IDs for the 26 core quotes across AR, FR, EN
const CANONICAL_IDS_CORE = [
  "epictetus-things-and-judgments",          // 0: Epictetus (Ce ne sont pas les choses...)
  "socrates-know-nothing",                  // 1: Socrates (La seule chose que je sais...)
  "seneca-difficult-things",                // 2: Seneca (Ce n'est pas parce que les choses...)
  "nietzsche-why-to-live",                  // 3: Nietzsche (Celui qui a un pourquoi...)
  "jung-resist-persists",                   // 4: Carl Jung (Ce à quoi tu résistes...)
  "marcus-aurelius-quality-of-thoughts",    // 5: Marcus Aurelius (Le bonheur de votre vie...)
  "camus-invincible-summer",                // 6: Camus (Au milieu de l'hiver...)
  "descartes-cogito-ergo-sum",              // 7: Descartes (Je pense donc je suis...)
  "sartre-existence-precedes-essence",      // 8: Sartre (L'existence précède l'essence...)
  "pascal-heart-has-its-reasons",           // 9: Pascal (Le coeur a ses raisons...)
  "lao-tzu-journey-thousand-miles",         // 10: Lao Tzu (Un voyage de mille lieues...)
  "confucius-never-falling",                // 11: Confucius (Notre plus grande gloire...)
  "socrates-unexamined-life",               // 12: Socrates (Une vie sans examen...)
  "plato-conquering-oneself",               // 13: Plato (La victoire sur soi-même...)
  "aristotle-we-are-repeated-habits",       // 14: Aristotle (Nous sommes ce que nous faisons...)
  "schopenhauer-self-sufficiency",          // 15: Schopenhauer (Le bonheur appartient à ceux...)
  "spinoza-peace-is-virtue",                // 16: Spinoza (La paix n'est pas l'absence...)
  "rousseau-born-free-in-chains",           // 17: Rousseau (L'homme est né libre...)
  "kant-sapere-aude",                       // 18: Kant (Aie le courage de te servir...)
  "kierkegaard-life-backward-forward",      // 19: Kierkegaard (La vie ne peut être comprise...)
  "freud-nothing-disappears",               // 20: Freud (Dans la vie psychique...)
  "marcus-aurelius-best-revenge",           // 21: Marcus Aurelius (La meilleure des vengeances...)
  "seneca-keep-learning-how-to-live",       // 22: Seneca (Tant que tu vis...)
  "montaigne-belong-to-oneself",            // 23: Montaigne (La plus grande chose au monde...)
  "voltaire-happy-good-for-health",         // 24: Voltaire (J'ai décidé d'être heureux...)
  "nietzsche-what-does-not-kill-me"         // 25: Nietzsche (Tout ce qui ne me tue pas...)
];

// Extra canonical IDs for Arabic quotes 26-46
const CANONICAL_IDS_AR_EXTRA = [
  "hikma-calm-and-wisdom",                  // 26
  "socrates-virtue-and-soul",               // 27
  "schopenhauer-inner-wealth",              // 28
  "marcus-aurelius-mind-sanctuary",         // 29
  "schopenhauer-solitude-peace",            // 30
  "seneca-time-and-destiny",                // 31
  "plutarch-patience-and-character",        // 32
  "lao-tzu-silence-and-stillness",          // 33
  "epicurus-tranquility-of-soul",           // 34
  "camus-lucidity-and-freedom",             // 35
  "plato-shadows-and-truth",                // 36
  "aristotle-golden-mean",                  // 37
  "marcus-aurelius-impermanence",           // 38
  "confucius-benevolence-and-duty",         // 39
  "kant-moral-law-within",                  // 40
  "epictetus-dichotomy-of-control",         // 41
  "epicurus-friendship-and-simplicity",     // 42
  "spinoza-intellectual-love",              // 43
  "marcus-aurelius-morning-meditation",     // 44
  "schopenhauer-will-and-art",              // 45
  "hikma-noble-mind"                        // 46
];

async function assignQuoteIds() {
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  // 1. Assign to FR
  DATA.content.fr.quotes.forEach((q, i) => {
    q.id = CANONICAL_IDS_CORE[i] || `quote-fr-${i}`;
  });

  // 2. Assign to EN
  DATA.content.en.quotes.forEach((q, i) => {
    q.id = CANONICAL_IDS_CORE[i] || `quote-en-${i}`;
  });

  // 3. Assign to AR
  DATA.content.ar.quotes.forEach((q, i) => {
    if (i < 26) {
      q.id = CANONICAL_IDS_CORE[i];
    } else {
      q.id = CANONICAL_IDS_AR_EXTRA[i - 26] || `quote-ar-${i}`;
    }
  });

  const exportStr = 'const TIKTOK_DATA = ' + JSON.stringify(DATA, null, 2) + ';\n\nexport default TIKTOK_DATA;\n';
  fs.writeFileSync('data_v11.js', exportStr, 'utf8');
  console.log('✅ Successfully assigned stable canonical IDs to all quotes across AR, FR, EN in data_v11.js');
}

assignQuoteIds().catch(err => {
  console.error(err);
  process.exit(1);
});
