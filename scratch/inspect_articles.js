import TIKTOK_DATA from '../data_v11.js';

console.log("=== ARTICLES DETAILS (AR) ===");
const articles = TIKTOK_DATA.content.ar.articles || [];
articles.forEach((a, i) => {
  console.log(`[${i+1}] ID: ${a.id}`);
  console.log(`    Title: ${a.title}`);
  console.log(`    Category: ${a.category}`);
  if (a.file) {
    console.log(`    File: ${a.file}`);
  }
});
