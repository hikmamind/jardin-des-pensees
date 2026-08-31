/* ============================================================
   HIKMA & NOUR — CENTRAL ARTICLE REGISTRY MODULE (V1.0)
   Loads and queries data/articles.json and data/pillars.json
   ============================================================ */

let ARTICLES_CACHE = null;
let PILLARS_CACHE = null;

export async function loadArticlesRegistry() {
  if (ARTICLES_CACHE) return ARTICLES_CACHE;
  try {
    const res = await fetch('../data/articles.json');
    if (!res.ok) throw new Error(`HTTP ${res.status} loading articles.json`);
    ARTICLES_CACHE = await res.json();
    return ARTICLES_CACHE;
  } catch (err) {
    console.error('Failed to load articles registry:', err);
    return [];
  }
}

export async function loadPillarsRegistry() {
  if (PILLARS_CACHE) return PILLARS_CACHE;
  try {
    const res = await fetch('../data/pillars.json');
    if (!res.ok) throw new Error(`HTTP ${res.status} loading pillars.json`);
    PILLARS_CACHE = await res.json();
    return PILLARS_CACHE;
  } catch (err) {
    console.error('Failed to load pillars registry:', err);
    return {};
  }
}

export async function getPillarConfig(pillarId) {
  const pillars = await loadPillarsRegistry();
  return pillars[pillarId] || null;
}

export async function getArticlesByPillar(pillarId, options = {}) {
  const allArticles = await loadArticlesRegistry();
  
  let list = allArticles.filter(a => a.pillar === pillarId && a.status === 'published');

  if (options.featuredOnly) {
    list = list.filter(a => a.featured === true);
    list.sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
  }

  if (options.parcoursId && options.parcoursId !== 'all') {
    list = list.filter(a => a.parcoursId === options.parcoursId);
  }

  if (options.limit) {
    list = list.slice(0, options.limit);
  }

  return list;
}
