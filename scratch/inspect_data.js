import TIKTOK_DATA from '../data_v11.js';

console.log("=== ROOT KEYS ===");
console.log(Object.keys(TIKTOK_DATA));

if (TIKTOK_DATA.content) {
  console.log("=== CONTENT LANGS ===");
  console.log(Object.keys(TIKTOK_DATA.content));
  
  for (const lang of Object.keys(TIKTOK_DATA.content)) {
    const data = TIKTOK_DATA.content[lang];
    console.log(`\n--- LANG: ${lang} ---`);
    if (data.thinkers) {
      console.log(`Thinkers count: ${data.thinkers.length}`);
      console.log("Thinkers (all):", data.thinkers.map(t => ({ id: t.id, name: t.name, era: t.era, school: t.school })));
    }
    if (data.articles) {
      console.log(`Articles count: ${data.articles.length}`);
      console.log("Articles (all):", data.articles.map(a => ({ id: a.id, title: a.title, category: a.category })));
    }
  }
}
