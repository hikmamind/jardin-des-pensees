/* ============================================================
   HIKMA & NOUR — UNIVERSAL PILLAR RENDERER ENGINE (V1.0)
   Powers all 5 pillars automatically without custom page scripts
   ============================================================ */

import { loadPillarsRegistry, loadArticlesRegistry, getPillarConfig, getArticlesByPillar } from './article-registry.js';
import { renderPillarResources } from './pillar_resources.js';
import TIKTOK_DATA from '../../data_v11.js';

window.renderPillarResources = renderPillarResources;

let currentFilter = 'all';

export function getActiveLang() {
  return localStorage.getItem('site_lang_v1') || localStorage.getItem('lang') || localStorage.getItem('preferredLang') || 'ar';
}

export async function renderPillarPage(pillarId = null, lang = null) {
  const currentPillar = pillarId || document.body.getAttribute('data-pillar') || 'psychology';
  const currentLang = lang || getActiveLang();

  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  const config = await getPillarConfig(currentPillar);
  if (!config) {
    console.error(`Pillar configuration not found for: ${currentPillar}`);
    return;
  }

  // 1. Render Hero
  renderHero(config, currentLang);

  // 2. Render Pathways
  renderPathways(config, currentLang);

  // 3. Render Featured Articles
  await renderFeaturedArticles(currentPillar, config, currentLang);

  // 4. Render All Articles & Filters
  await renderAllArticles(currentPillar, config, currentLang);

  // 5. Render Thinkers
  renderThinkers(config, currentLang);

  // 6. Render Resources
  if (typeof renderPillarResources === 'function') {
    renderPillarResources('#pillar-resources-section', config.folder, currentLang);
  }

  // 7. Render Cross-Navigation
  await renderCrossNav(currentPillar, currentLang);

  // 8. Handle Deep Link Modals
  checkUrlHash(config, currentLang);
}

// ------------------------------------------------------------
// 1. HERO RENDERER
// ------------------------------------------------------------
function renderHero(config, lang) {
  const heroEl = document.getElementById('pillar-hero');
  if (!heroEl) return;

  const title = config.titles[lang] || config.titles.ar;
  const subtitle = config.subtitles[lang] || config.subtitles.ar;
  const badge = config.badge ? (config.badge[lang] || config.badge.ar) : 'Hikma & Nour';
  const exploreBtnText = lang === 'ar' ? 'استكشف المقالات ↓' : (lang === 'fr' ? 'Explorer les articles ↓' : 'Explore articles ↓');
  const startTrackBtnText = lang === 'ar' ? 'ابدأ المسار التأسيسي ←' : (lang === 'fr' ? 'Commencer le parcours →' : 'Start foundation track →');

  heroEl.innerHTML = `
    <div class="pillar-hero-banner" style="background-image: url('${config.theme.heroBg}');">
      <div class="pillar-hero-overlay"></div>
      <div class="pillar-hero-content">
        <span class="pillar-hero-badge">${badge}</span>
        <h1 class="pillar-hero-title">${title}</h1>
        <p class="pillar-hero-desc">${subtitle}</p>
        <div class="pillar-hero-actions">
          <a href="#featured-articles-section" class="pillar-btn-primary">${exploreBtnText}</a>
          <button type="button" onclick="window.openPillarPathway('${config.pathways[0]?.id || '01'}')" class="pillar-btn-secondary">${startTrackBtnText}</button>
        </div>
      </div>
    </div>
  `;
}

// ------------------------------------------------------------
// 2. PATHWAYS RENDERER
// ------------------------------------------------------------
function renderPathways(config, lang) {
  const container = document.getElementById('pillar-pathways');
  if (!container) return;

  const sectionTitle = lang === 'ar' ? 'المسارات الموجهة حسب احتياجك' : (lang === 'fr' ? 'Parcours guidés selon vos besoins' : 'Guided pathways for your journey');
  const sectionSub = lang === 'ar' ? 'رحلات فكرية وتطبيقية متسلسلة تبني وعيك خطوة بخطوة' : (lang === 'fr' ? 'Des cheminements méthodiques pour progresser avec clarté' : 'Structured journeys to build understanding step by step');
  const exploreLabel = lang === 'ar' ? 'استكشف المسار ←' : (lang === 'fr' ? 'Explorer le parcours →' : 'Explore pathway →');

  const pathways = config.pathways || [];

  container.innerHTML = `
    <div class="pillar-section-heading">
      <h2 class="pillar-section-title">${sectionTitle}</h2>
      <p class="pillar-section-subtitle">${sectionSub}</p>
    </div>
    <div class="pillar-pathways-grid">
      ${pathways.map(p => {
        const pTitle = p.title[lang] || p.title.ar;
        const pDesc = p.desc[lang] || p.desc.ar;
        const pBadge = lang === 'ar' ? `المسار ${p.id}` : (lang === 'fr' ? `Parcours ${p.id}` : `Track ${p.id}`);
        return `
          <article class="pathway-card" onclick="window.openPillarPathway('${p.id}')">
            <div class="pathway-imgbox">
              <img src="${p.image}" alt="${pTitle}" class="pathway-img" loading="lazy">
            </div>
            <div class="pathway-body">
              <span class="pathway-badge">${pBadge}</span>
              <h3 class="pathway-title">${pTitle}</h3>
              <p class="pathway-desc">${pDesc}</p>
              <div style="margin-top: auto;">
                <span class="pillar-card-link">${exploreLabel}</span>
              </div>
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

// ------------------------------------------------------------
// 3. FEATURED ARTICLES RENDERER
// ------------------------------------------------------------
async function renderFeaturedArticles(pillarId, config, lang) {
  const section = document.getElementById('featured-articles-section');
  const container = document.getElementById('featured-articles') || document.querySelector('.featured-articles-grid');
  if (!section || !container) return;

  const featuredList = await getArticlesByPillar(pillarId, { featuredOnly: true });

  if (featuredList.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';

  // Section titles
  const eyebrowEl = section.querySelector('.pillar-eyebrow');
  if (eyebrowEl && config.featuredSection?.eyebrow) {
    eyebrowEl.textContent = config.featuredSection.eyebrow[lang] || config.featuredSection.eyebrow.ar;
  }
  const titleEl = section.querySelector('.pillar-section-title');
  if (titleEl && config.featuredSection?.title) {
    titleEl.textContent = config.featuredSection.title[lang] || config.featuredSection.title.ar;
  }
  const subEl = section.querySelector('.pillar-section-subtitle');
  if (subEl && config.featuredSection?.subtitle) {
    subEl.textContent = config.featuredSection.subtitle[lang] || config.featuredSection.subtitle.ar;
  }

  const readBtnLabel = (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang].readArticleBtn) || (lang === 'ar' ? 'اقرأ المقال ←' : (lang === 'fr' ? 'Lire l\'article →' : 'Read article →'));

  container.innerHTML = featuredList.map(art => {
    const title = art.titles[lang] || art.titles.ar;
    const desc = art.excerpts[lang] || art.excerpts.ar;
    const url = art.urls[lang] || art.urls.ar;
    const readTime = art.readingTime[lang] || art.readingTime.ar || '';
    const badge = art.badges[lang] || art.badges.ar || (lang === 'ar' ? 'مقال مميز' : 'Featured Article');
    const imgSrc = art.thumbnail.startsWith('../') ? art.thumbnail : `../${art.thumbnail}`;
    const altText = art.thumbnailAlt[lang] || art.thumbnailAlt.ar || title;

    return `
      <article class="featured-article-card featured-card article-card" data-article-id="${art.id}">
        <div class="featured-img-box">
          <a href="${url}" tabindex="-1" aria-hidden="true">
            <img src="${imgSrc}" alt="${altText}" class="featured-img" loading="lazy">
          </a>
        </div>
        <div class="featured-card-body">
          <div>
            <span class="featured-card-tag">${badge}</span>
            <h3 class="featured-card-title">
              <a href="${url}">${title}</a>
            </h3>
            <p class="featured-card-desc">${desc}</p>
          </div>
          <div class="featured-card-footer">
            <span style="font-size: 0.82rem; color: #A9AAA4;">⏱️ ${readTime}</span>
            <a href="${url}" class="pillar-card-link">${readBtnLabel}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ------------------------------------------------------------
// 4. ALL ARTICLES & FILTERS RENDERER
// ------------------------------------------------------------
async function renderAllArticles(pillarId, config, lang) {
  const container = document.getElementById('all-articles');
  const filtersContainer = document.getElementById('pillar-filters');
  if (!container) return;

  // Render Filter Tabs
  if (filtersContainer) {
    const allLabel = lang === 'ar' ? 'الكل' : (lang === 'fr' ? 'Tous' : 'All');
    const pathways = config.pathways || [];

    filtersContainer.innerHTML = `
      <button class="pillar-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">${allLabel}</button>
      ${pathways.map(p => {
        const pTitle = p.title[lang] || p.title.ar;
        return `<button class="pillar-filter-btn ${currentFilter === p.id ? 'active' : ''}" data-filter="${p.id}">${pTitle}</button>`;
      }).join('')}
    `;

    // Hook click events
    filtersContainer.querySelectorAll('.pillar-filter-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        currentFilter = btn.getAttribute('data-filter');
        filtersContainer.querySelectorAll('.pillar-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        await renderAllArticlesList(pillarId, config, lang, container);
      });
    });
  }

  await renderAllArticlesList(pillarId, config, lang, container);
}

async function renderAllArticlesList(pillarId, config, lang, container) {
  const articles = await getArticlesByPillar(pillarId, { parcoursId: currentFilter });
  const readBtnLabel = (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang].readArticleBtn) || (lang === 'ar' ? 'اقرأ المقال ←' : (lang === 'fr' ? 'Lire l\'article →' : 'Read article →'));

  if (articles.length === 0) {
    const comingSoonTitle = lang === 'ar' ? '⏳ محتوى جديد قيد الإعداد' : (lang === 'fr' ? '⏳ Contenu en préparation' : '⏳ Content in preparation');
    const comingSoonDesc = lang === 'ar' ? 'اكتشف المقالات والبحوث المرتبطة بهذا المسار قريبًا.' : (lang === 'fr' ? 'Découvrez bientôt les articles liés à ce parcours.' : 'New articles for this track will be published soon.');
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(223, 177, 91, 0.03); border: 1px dashed rgba(223, 177, 91, 0.25); border-radius: 20px;">
        <span style="font-size: 2.5rem; display: block; margin-bottom: 12px;">🌿</span>
        <h3 style="font-size: 1.3rem; color: var(--pillar-accent); margin-bottom: 8px; font-family: 'Playfair Display', 'Amiri', serif;">${comingSoonTitle}</h3>
        <p style="color: #A9AAA4; font-size: 0.95rem; max-width: 500px; margin: 0 auto;">${comingSoonDesc}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = articles.map(art => {
    const title = art.titles[lang] || art.titles.ar;
    const desc = art.excerpts[lang] || art.excerpts.ar;
    const url = art.urls[lang] || art.urls.ar;
    const readTime = art.readingTime[lang] || art.readingTime.ar || '';
    const badge = art.badges[lang] || art.badges.ar || (config.titles[lang] || config.titles.ar);
    const imgSrc = art.thumbnail.startsWith('../') ? art.thumbnail : `../${art.thumbnail}`;

    return `
      <article class="article-summary-card" data-parcours="${art.parcoursId}">
        <div class="pathway-imgbox" style="height: 160px;">
          <img src="${imgSrc}" alt="${title}" class="pathway-img" loading="lazy">
        </div>
        <div class="pathway-body">
          <span class="pathway-badge">${badge}</span>
          <h3 class="pathway-title" style="font-size: 1.2rem;">
            <a href="${url}" style="color: inherit; text-decoration: none;">${title}</a>
          </h3>
          <p class="pathway-desc">${desc}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(223, 177, 91, 0.15); padding-top: 14px; margin-top: auto;">
            <span style="font-size: 0.82rem; color: #A9AAA4;">⏱️ ${readTime}</span>
            <a href="${url}" class="pillar-card-link">${readBtnLabel}</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ------------------------------------------------------------
// 5. THINKERS RENDERER
// ------------------------------------------------------------
function renderThinkers(config, lang) {
  const container = document.getElementById('pillar-thinkers');
  if (!container) return;

  const sectionTitle = lang === 'ar' ? 'أصوات غيّرت فهمنا للإنسان' : (lang === 'fr' ? 'Penseurs & Figures Majeures' : 'Foundational Thinkers & Figures');
  const sectionSub = lang === 'ar' ? 'مفكرون وباحثون ساهموا في إثراء هذا الركن برؤاهم الرائدة' : (lang === 'fr' ? 'Des voix qui ont enrichi et façonné ce domaine' : 'Pioneers who shaped this intellectual domain');
  const readProfileLabel = (TIKTOK_DATA.ui[lang] && TIKTOK_DATA.ui[lang].readThinkerProfile) || (lang === 'ar' ? 'اقرأ الملف الشخصي ←' : (lang === 'fr' ? 'Lire le profil →' : 'Read profile →'));

  const allThinkers = (TIKTOK_DATA.content[lang] && TIKTOK_DATA.content[lang].thinkers) || [];
  const thinkerIds = config.thinkers || [];
  const thinkersList = thinkerIds.map(id => allThinkers.find(t => t.id === id) || { id, name: id }).filter(Boolean);

  if (thinkersList.length === 0) {
    container.parentElement.style.display = 'none';
    return;
  }

  container.innerHTML = `
    <div class="pillar-section-heading">
      <h2 class="pillar-section-title">${sectionTitle}</h2>
      <p class="pillar-section-subtitle">${sectionSub}</p>
    </div>
    <div class="thinkers-grid">
      ${thinkersList.map(t => {
        const name = t.name || t.id;
        const school = t.school || t.role || '';
        const bio = t.bio || t.desc || '';
        const img = `../thinkers/images/${t.id}.jpg`;
        const url = `../thinkers/?thinker=${t.id}`;
        return `
          <a class="thinker-portrait-card" href="${url}">
            <div class="thinker-avatar-box">
              <img src="${img}" alt="${name}" class="thinker-avatar-img" loading="lazy" onerror="this.onerror=null; this.src='../brand_logo_official.png';">
            </div>
            <h3 class="thinker-name">${name}</h3>
            <span class="thinker-school">${school}</span>
            <p class="thinker-bio">${bio}</p>
            <span class="pillar-card-link" style="margin-top: auto;">${readProfileLabel}</span>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

// ------------------------------------------------------------
// 6. CROSS-NAVIGATION RENDERER
// ------------------------------------------------------------
async function renderCrossNav(currentPillar, lang) {
  const container = document.getElementById('pillar-cross-nav');
  if (!container) return;

  const pillars = await loadPillarsRegistry();
  const otherPillars = Object.values(pillars).filter(p => p.id !== currentPillar);

  const sectionTitle = lang === 'ar' ? 'استكشف أركان الحكمة الأخرى' : (lang === 'fr' ? 'Explorer les autres piliers' : 'Explore other pillars');
  const arrow = lang === 'ar' ? '←' : '→';

  container.innerHTML = `
    <div class="pillar-section-heading" style="margin-bottom: 20px;">
      <h2 class="pillar-section-title" style="font-size: 1.4rem;">${sectionTitle}</h2>
    </div>
    <div class="pillar-cross-nav-grid">
      ${otherPillars.map(p => {
        const title = p.titles[lang] || p.titles.ar;
        const url = `../${p.folder}/`;
        return `
          <a href="${url}" class="cross-nav-card">
            <span class="cross-nav-title">${title}</span>
            <span style="color: var(--pillar-accent); font-weight: bold;">${arrow}</span>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

// ------------------------------------------------------------
// 7. MODAL & PATHWAY VIEW ENGINE
// ------------------------------------------------------------
window.openPillarPathway = async function(pathwayId) {
  const modal = document.getElementById('parcoursModalView');
  if (!modal) return;

  const pillarId = document.body.getAttribute('data-pillar') || 'psychology';
  const config = await getPillarConfig(pillarId);
  const lang = getActiveLang();

  const pData = config.pathways.find(p => p.id === pathwayId || p.slug === pathwayId) || config.pathways[0];
  const articles = await getArticlesByPillar(pillarId, { parcoursId: pData.id });

  const contentEl = document.getElementById('parcoursModalContent');
  if (contentEl) {
    const title = pData.title[lang] || pData.title.ar;
    const desc = pData.desc[lang] || pData.desc.ar;
    const backBtnText = lang === 'ar' ? '← العودة إلى الركن' : (lang === 'fr' ? '← Retour au pilier' : '← Back to pillar');
    const readBtnLabel = lang === 'ar' ? 'اقرأ المقال ←' : (lang === 'fr' ? 'Lire l\'article →' : 'Read article →');

    contentEl.innerHTML = `
      <div style="background: linear-gradient(135deg, rgba(223, 177, 91, 0.12) 0%, rgba(10, 24, 18, 0.9) 100%); border: 1px solid rgba(223, 177, 91, 0.3); border-radius: 20px; padding: 32px 28px; margin-bottom: 35px;">
        <span class="pathway-badge" style="font-size: 0.85rem; margin-bottom: 10px;">المسار ${pData.id}</span>
        <h1 style="font-size: 1.8rem; color: #FAF6EF; margin: 0 0 10px; font-family: 'Playfair Display', 'Amiri', serif;">${title}</h1>
        <p style="font-size: 1rem; color: #D1C8B8; margin: 0;">${desc}</p>
      </div>

      <div class="articles-grid" style="margin-bottom: 30px;">
        ${articles.map(art => `
          <article class="article-summary-card">
            <div class="pathway-imgbox" style="height: 150px;">
              <img src="${art.thumbnail.startsWith('../') ? art.thumbnail : `../${art.thumbnail}`}" alt="${art.titles[lang] || art.titles.ar}" class="pathway-img" loading="lazy">
            </div>
            <div class="pathway-body">
              <h3 class="pathway-title" style="font-size: 1.15rem;">
                <a href="${art.urls[lang] || art.urls.ar}" style="color: inherit; text-decoration: none;">${art.titles[lang] || art.titles.ar}</a>
              </h3>
              <p class="pathway-desc">${art.excerpts[lang] || art.excerpts.ar}</p>
              <a href="${art.urls[lang] || art.urls.ar}" class="pillar-card-link" style="margin-top: auto;">${readBtnLabel}</a>
            </div>
          </article>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(223, 177, 91, 0.2);">
        <button type="button" onclick="window.closePillarPathway()" class="pillar-btn-primary">${backBtnText}</button>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  history.pushState(null, '', `#parcours-${pathwayId}`);
};

window.closePillarPathway = function() {
  const modal = document.getElementById('parcoursModalView');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  if (location.hash.startsWith('#parcours-')) {
    history.pushState(null, '', location.pathname);
  }
};

function checkUrlHash(config, lang) {
  const hash = location.hash;
  if (hash && hash.startsWith('#parcours-')) {
    const pid = hash.replace('#parcours-', '');
    window.openPillarPathway(pid);
  }
}

// ------------------------------------------------------------
// 8. EVENT LISTENERS & AUTO-INIT
// ------------------------------------------------------------
window.addEventListener('languageChanged', (e) => renderPillarPage(null, e.detail?.lang));
window.addEventListener('siteLanguageChanged', (e) => renderPillarPage(null, e.detail?.lang));
window.addEventListener('site_lang_v1_changed', (e) => renderPillarPage(null, e.detail?.lang));
window.addEventListener('hashchange', () => checkUrlHash());

function init() {
  const currentPillar = document.body.getAttribute('data-pillar');
  if (currentPillar) {
    renderPillarPage(currentPillar);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
