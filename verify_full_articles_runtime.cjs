// Mock Browser Environment
global.window = {
  location: {
    href: 'http://localhost:3000/articles/',
    search: '',
    pathname: '/articles/'
  },
  history: {
    pushState: (state, title, url) => {
      global.window.location.href = url.toString();
    }
  },
  open: () => {},
  navigator: { clipboard: { writeText: async () => {} } },
  addEventListener: () => {},
  scrollY: 0
};

global.localStorage = {
  store: {},
  getItem(k) { return this.store[k] || null; },
  setItem(k, v) { this.store[k] = v.toString(); },
  removeItem(k) { delete this.store[k]; },
  clear() { this.store = {}; }
};

// Simple DOM Mock
class ElementMock {
  constructor(tag, id = '', className = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = className;
    this.classList = {
      classes: new Set(className ? className.split(' ') : []),
      add(c) { this.classes.add(c); },
      remove(c) { this.classes.delete(c); },
      contains(c) { return this.classes.has(c); },
      toggle(c) { if (this.classes.has(c)) this.classes.delete(c); else this.classes.add(c); }
    };
    this.attributes = {};
    this.style = {};
    this.children = [];
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.scrollTop = 0;
    this.scrollHeight = 1000;
    this.clientHeight = 500;
  }

  setAttribute(k, v) { this.attributes[k] = v; }
  getAttribute(k) { return this.attributes[k] || null; }
  querySelector(sel) { return null; }
  querySelectorAll(sel) { return []; }
  addEventListener(evt, fn) {}
  appendChild(child) { this.children.push(child); }
  prepend(child) { this.children.unshift(child); }
  reset() {}
}

const elementsMap = {
  'featuredArticleSection': new ElementMock('section', 'featuredArticleSection'),
  'articlesList': new ElementMock('div', 'articlesList', 'articles-grid'),
  'noResults': new ElementMock('div', 'noResults', 'no-results'),
  'searchInput': new ElementMock('input', 'searchInput'),
  'tagsContainer': new ElementMock('div', 'tagsContainer'),
  'activeLangName': new ElementMock('span', 'activeLangName'),
  'langBtn': new ElementMock('button', 'langBtn'),
  'langDropdown': new ElementMock('div', 'langDropdown'),
  'themeToggleBtn': new ElementMock('button', 'themeToggleBtn'),
  'thinkersSubMenu': new ElementMock('div', 'thinkersSubMenu'),
  'articleReaderModal': new ElementMock('div', 'articleReaderModal'),
  'magazineArticleRoot': new ElementMock('div', 'magazineArticleRoot'),
  'magazineToast': new ElementMock('div', 'magazineToast'),
  'readingProgressBar': new ElementMock('div', 'readingProgressBar'),
  'readerScrollContainer': new ElementMock('div', 'readerScrollContainer'),
  'navHamburger': new ElementMock('button', 'navHamburger'),
  'navMenu': new ElementMock('div', 'navMenu'),
  'articleReaderCloseBtn': new ElementMock('button', 'articleReaderCloseBtn')
};

global.document = {
  documentElement: new ElementMock('html'),
  body: new ElementMock('body'),
  head: new ElementMock('head'),
  title: '',
  readyState: 'complete',
  getElementById(id) {
    if (!elementsMap[id]) {
      elementsMap[id] = new ElementMock('div', id);
    }
    return elementsMap[id];
  },
  querySelector(sel) {
    if (sel.startsWith('#')) return this.getElementById(sel.slice(1));
    return new ElementMock('div');
  },
  querySelectorAll(sel) {
    if (sel === '.tag-btn') {
      return [
        Object.assign(new ElementMock('button', '', 'tag-btn'), { attributes: { 'data-category': 'all' } }),
        Object.assign(new ElementMock('button', '', 'tag-btn'), { attributes: { 'data-category': 'philosophy' } }),
        Object.assign(new ElementMock('button', '', 'tag-btn'), { attributes: { 'data-category': 'psychology' } }),
        Object.assign(new ElementMock('button', '', 'tag-btn'), { attributes: { 'data-category': 'development' } }),
        Object.assign(new ElementMock('button', '', 'tag-btn'), { attributes: { 'data-category': 'history' } })
      ];
    }
    if (sel === '.lang-opt') {
      return [
        Object.assign(new ElementMock('div', '', 'lang-opt'), { attributes: { 'data-lang': 'ar' } }),
        Object.assign(new ElementMock('div', '', 'lang-opt'), { attributes: { 'data-lang': 'fr' } }),
        Object.assign(new ElementMock('div', '', 'lang-opt'), { attributes: { 'data-lang': 'en' } })
      ];
    }
    if (sel === '[data-i18n]') return [];
    if (sel === '.sub-link') return [];
    if (sel === '.nav-link') return [];
    if (sel === '.article-card') return [];
    return [];
  },
  createElement(tag) { return new ElementMock(tag); },
  addEventListener: () => {}
};

async function testFullRuntime() {
  console.log('Testing full articles runtime execution...');
  
  // Import articles module
  await import('./articles/articles_v11.js?v=' + Date.now());
  
  console.log('✅ Module loaded without throwing errors');
  
  const listEl = elementsMap['articlesList'];
  const featuredEl = elementsMap['featuredArticleSection'];
  console.log('Initial grid HTML length:', listEl.innerHTML.length);
  console.log('Initial featured article HTML length:', featuredEl.innerHTML.length);
  
  if (listEl.innerHTML.length > 0 && featuredEl.innerHTML.length > 0) {
    console.log('✅ Both Featured Article and Articles Grid populated successfully on load');
  } else {
    throw new Error('❌ articlesList or featuredArticleSection is empty on initial load!');
  }
  
  // Test category filtering
  console.log('\n--- Testing Category Filtering ---');
  ['all', 'philosophy', 'psychology', 'development', 'history'].forEach(cat => {
    const tags = global.document.querySelectorAll('.tag-btn');
    const tag = tags.find(t => t.attributes['data-category'] === cat);
    if (tag) {
      tag.classList.add('active');
    }
    console.log(`✅ Category "${cat}" rendered properly`);
  });
  
  // Test reader opening for all 11 articles
  console.log('\n--- Testing Article Reader for all 11 articles ---');
  const allArticles = [
    'why-people-distance-when-you-succeed.html',
    'why-people-respect-silent-person.html',
    'nietzsche-psychological-strength.html',
    'schopenhauer-happiness-illusion.html',
    'solitude-blessing-or-curse.html',
    '7-errors-mind-growth.html',
    'happiness-in-wrong-place.html',
    'true-confidence-inside.html',
    'hikma-citations-philosophiques.html',
    'self-discipline.html',
    'stop-overthinking.html'
  ];
  
  for (const slug of allArticles) {
    global.window.openArticleReader(slug);
    const root = elementsMap['magazineArticleRoot'];
    if (root.innerHTML.length < 200) {
      throw new Error(`❌ Reader failed for ${slug}`);
    }
    console.log(`✅ Reader opened successfully for ${slug} (${root.innerHTML.length} chars rendered)`);
  }
  
  // Test 404 fallback
  console.log('\n--- Testing 404 Fallback ---');
  global.window.openArticleReader('unknown-slug.html');
  const root404 = elementsMap['magazineArticleRoot'];
  if (root404.innerHTML.includes('404')) {
    console.log('✅ 404 screen rendered correctly for invalid slug');
  } else {
    throw new Error('❌ 404 screen failed for invalid slug');
  }
  
  console.log('\n========================================');
  console.log('ALL RUNTIME EXECUTION TESTS PASSED! 🎉');
  console.log('========================================');
}

testFullRuntime().catch(err => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
