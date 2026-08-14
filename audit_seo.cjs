const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(getHtmlFiles(fullPath));
      }
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getHtmlFiles('.');
const audit = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative('.', file).replace(/\\/g, '/');
  
  // Title
  const titleMatch = content.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  
  // Meta description
  let description = null;
  const descMatch = content.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                    content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  if (descMatch) {
    description = descMatch[1].trim();
  }
  
  // Canonical
  let canonical = null;
  const canonMatch = content.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i) ||
                     content.match(/<link\s+[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);
  if (canonMatch) {
    canonical = canonMatch[1].trim();
  }
  
  // HTML lang & dir
  const htmlTagMatch = content.match(/<html\s+([^>]*)>/i);
  let lang = null;
  let dir = null;
  if (htmlTagMatch) {
    const langMatch = htmlTagMatch[1].match(/lang=["']([^"']*)["']/i);
    const dirMatch = htmlTagMatch[1].match(/dir=["']([^"']*)["']/i);
    lang = langMatch ? langMatch[1] : null;
    dir = dirMatch ? dirMatch[1] : null;
  }
  
  // H1 tags
  const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  // OpenGraph
  const ogTitleMatch = content.match(/<meta\s+[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                       content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*property=["']og:title["'][^>]*>/i);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1] : null;

  const ogDescMatch = content.match(/<meta\s+[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                      content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*property=["']og:description["'][^>]*>/i);
  const ogDesc = ogDescMatch ? ogDescMatch[1] : null;

  const ogImageMatch = content.match(/<meta\s+[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                       content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["'][^>]*>/i);
  const ogImage = ogImageMatch ? ogImageMatch[1] : null;

  const ogUrlMatch = content.match(/<meta\s+[^>]*property=["']og:url["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                     content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*property=["']og:url["'][^>]*>/i);
  const ogUrl = ogUrlMatch ? ogUrlMatch[1] : null;

  const ogTypeMatch = content.match(/<meta\s+[^>]*property=["']og:type["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                      content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*property=["']og:type["'][^>]*>/i);
  const ogType = ogTypeMatch ? ogTypeMatch[1] : null;

  // Twitter card
  const twCardMatch = content.match(/<meta\s+[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                      content.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']twitter:card["'][^>]*>/i);
  const twitterCard = twCardMatch ? twCardMatch[1] : null;

  // JSON-LD validation
  let hasJsonLd = false;
  let jsonLdValid = true;
  const jsonLdBlocks = [...content.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (jsonLdBlocks.length > 0) {
    hasJsonLd = true;
    jsonLdBlocks.forEach(b => {
      try {
        JSON.parse(b[1].trim());
      } catch (err) {
        jsonLdValid = false;
        console.error(`JSON-LD parse error in ${relPath}: ${err.message}`);
      }
    });
  }
  
  // Images missing alt
  const imgMatches = [...content.matchAll(/<img\s+([^>]*)>/gi)];
  let imgsWithoutAlt = 0;
  let totalImgs = imgMatches.length;
  imgMatches.forEach(m => {
    if (!/alt=["']/i.test(m[1])) {
      imgsWithoutAlt++;
    }
  });
  
  audit.push({
    file: relPath,
    title,
    description,
    canonical,
    lang,
    dir,
    h1Count: h1Matches.length,
    h1List: h1Matches,
    ogTitle,
    ogDesc,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    hasJsonLd,
    jsonLdValid,
    totalImgs,
    imgsWithoutAlt
  });
});

fs.writeFileSync('audit_results.json', JSON.stringify(audit, null, 2));

console.log('=== AUDIT RESULTS ===');
console.log(`Total HTML files checked: ${audit.length}`);
console.log(`Missing title: ${audit.filter(a => !a.title).length}`);
console.log(`Missing description: ${audit.filter(a => !a.description).length}`);
console.log(`Missing canonical: ${audit.filter(a => !a.canonical).length}`);
console.log(`H1 count != 1: ${audit.filter(a => a.h1Count !== 1).length}`);
console.log(`Missing OpenGraph image or desc: ${audit.filter(a => !a.ogImage || !a.ogDesc).length}`);
console.log(`Missing Twitter Card: ${audit.filter(a => !a.twitterCard).length}`);
console.log(`Missing JSON-LD: ${audit.filter(a => !a.hasJsonLd).length}`);
console.log(`Invalid JSON-LD: ${audit.filter(a => a.hasJsonLd && !a.jsonLdValid).length}`);
console.log(`Images missing ALT: ${audit.filter(a => a.imgsWithoutAlt > 0).length}`);
