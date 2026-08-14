const fs = require('fs');

async function auditQuotes() {
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  console.log('=====================================================');
  console.log('        AUDIT EXHAUSTIF DES CITATIONS (V3)          ');
  console.log('=====================================================\n');

  const langs = ['ar', 'fr', 'en'];
  const counts = {};
  const quotesData = {};

  langs.forEach(lang => {
    const list = DATA.content[lang]?.quotes || [];
    counts[lang] = list.length;
    quotesData[lang] = list;
  });

  console.log(`📊 Statistiques par langue :`);
  console.log(`- Arabe (AR)   : ${counts.ar} citations`);
  console.log(`- Français (FR): ${counts.fr} citations`);
  console.log(`- Anglais (EN) : ${counts.en} citations\n`);

  langs.forEach(lang => {
    console.log(`\n-----------------------------------------------------`);
    console.log(`🔍 DETAIL DES CITATIONS [${lang.toUpperCase()}] (${counts[lang]} total)`);
    console.log(`-----------------------------------------------------`);
    quotesData[lang].forEach((q, i) => {
      console.log(`\n[Index ${i}]`);
      console.log(`  - ID                 : ${q.id || '(aucun ID)'}`);
      console.log(`  - Auteur             : ${q.author}`);
      console.log(`  - Image              : ${q.image || '(aucune)'}`);
      console.log(`  - Texte              : "${q.text ? q.text.substring(0, 60) : ''}..."`);
      console.log(`  - Meaning            : ${q.meaning ? 'Présent (' + q.meaning.length + ' chars)' : 'ABSENT'}`);
      console.log(`  - Philosophy/Expl    : ${q.philosophy ? 'Présent (philosophy)' : (q.explanation ? 'Présent (explanation)' : 'ABSENT')}`);
      console.log(`  - Lessons            : ${Array.isArray(q.lessons) ? 'Présent (' + q.lessons.length + ' leçons)' : 'ABSENT'}`);
      console.log(`  - Application        : ${q.application ? 'Présent (' + q.application.length + ' chars)' : 'ABSENT'}`);
      console.log(`  - Reflection/Question: ${q.reflection ? 'Présent (reflection)' : (q.reflectionQuestion ? 'Présent (reflectionQuestion)' : 'ABSENT')}`);
      console.log(`  - Similar Quote      : ${q.similarQuote ? 'Présent' : 'ABSENT'}`);
    });
  });

  // Comparison between languages
  console.log(`\n=====================================================`);
  console.log(`🔄 ANALYSE DE CORRESPONDANCE ET COMPATIBILITÉ`);
  console.log(`=====================================================`);
  const maxCount = Math.max(counts.ar, counts.fr, counts.en);
  for (let i = 0; i < maxCount; i++) {
    const arQ = quotesData.ar[i];
    const frQ = quotesData.fr[i];
    const enQ = quotesData.en[i];
    console.log(`Index ${i} -> AR: [${arQ ? arQ.author : 'MANQUANT'}] | FR: [${frQ ? frQ.author : 'MANQUANT'}] | EN: [${enQ ? enQ.author : 'MANQUANT'}]`);
  }
}

auditQuotes().catch(console.error);
