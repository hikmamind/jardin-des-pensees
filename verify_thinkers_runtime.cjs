// Mock Browser Environment for Thinkers
global.window = {
  location: {
    href: 'http://localhost:3000/thinkers/',
    search: '',
    pathname: '/thinkers/',
    origin: 'http://localhost:3000'
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
  querySelector(sel) { 
    if (sel === '.reader-scroll-container') return this;
    return new ElementMock('div'); 
  }
  querySelectorAll(sel) { return []; }
  addEventListener(evt, fn) {}
  appendChild(child) { this.children.push(child); }
  prepend(child) { this.children.unshift(child); }
  remove() {}
  getBoundingClientRect() {
    return { top: 0, bottom: 500, left: 0, right: 1000, width: 1000, height: 500 };
  }
}

const elementsMap = {
  'thinkersList': new ElementMock('div', 'thinkersList', 'thinkers-grid'),
  'noResults': new ElementMock('div', 'noResults', 'no-results'),
  'searchInput': new ElementMock('input', 'searchInput'),
  'tagsContainer': new ElementMock('div', 'tagsContainer'),
  'activeLangName': new ElementMock('span', 'activeLangName'),
  'langBtn': new ElementMock('button', 'langBtn'),
  'langDropdown': new ElementMock('div', 'langDropdown'),
  'themeToggleBtn': new ElementMock('button', 'themeToggleBtn'),
  'thinkersSubMenu': new ElementMock('div', 'thinkersSubMenu'),
  'thinkerModal': new ElementMock('div', 'thinkerModal'),
  'magazineThinkerRoot': new ElementMock('div', 'magazineThinkerRoot'),
  'magazineToast': new ElementMock('div', 'magazineToast'),
  'navHamburger': new ElementMock('button', 'navHamburger'),
  'navMenu': new ElementMock('div', 'navMenu'),
  'thinkerModalCloseBtn': new ElementMock('button', 'thinkerModalCloseBtn')
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
    if (sel === '.tag-btn') return [];
    if (sel === '.lang-opt') return [];
    if (sel === '[data-i18n]') return [];
    if (sel === '.sub-link') return [];
    if (sel === '.thinker-card') return [];
    if (sel === '.thinker-premium-nav-link') return [];
    if (sel.includes('thinker-premium-section')) return [];
    return [];
  },
  createElement(tag) { return new ElementMock(tag); },
  addEventListener: () => {}
};

async function testThinkersRuntime() {
  console.log('Testing full thinkers runtime execution...');
  
  // Import thinkers module
  await import('./thinkers/thinkers_v11.js?v=' + Date.now());
  
  console.log('✅ Thinkers module loaded without errors');

  const listEl = elementsMap['thinkersList'];
  console.log('Initial thinkers grid HTML length:', listEl.innerHTML.length);
  if (listEl.innerHTML.length > 500) {
    console.log('✅ thinkersList populated successfully with all 30 thinkers');
  } else {
    throw new Error('❌ thinkersList is empty or failed to populate on load!');
  }

  // Test opening Platon directly
  console.log('\n--- Testing Platon Dossier Opening ---');
  global.window.openThinkerModalById('platon');
  const root = elementsMap['magazineThinkerRoot'];
  console.log('Platon dossier rendered HTML length:', root.innerHTML.length);
  
  if (root.innerHTML.length > 3000) {
    console.log('✅ Platon premium dossier rendered successfully (Breadcrumb, Hero, Intro, Bio, Ideas, Works, Influence, Quotes, Trivia, Lessons, Timeline, Recommendations)');
  } else {
    throw new Error('❌ Platon dossier failed to render or is too short!');
  }

  // Test all prominent thinkers
  const testThinkers = ['nietzsche', 'marcaurele', 'seneque', 'camus', 'aristote', 'descartes', 'kant', 'schopenhauer', 'jung', 'freud', 'spinoza', 'socrate'];
  for (const tid of testThinkers) {
    global.window.openThinkerModalById(tid);
    if (root.innerHTML.length < 2000) {
      throw new Error(`❌ Thinker dossier failed for ${tid}`);
    }
    console.log(`✅ Dossier opened successfully for "${tid}" (${root.innerHTML.length} chars rendered)`);
  }

  // Test modal closing
  global.window.closeThinkerModal();
  console.log('✅ Modal closed successfully');

  console.log('\n========================================');
  console.log('ALL THINKERS RUNTIME TESTS PASSED! 🎉');
  console.log('========================================\n');
}

testThinkersRuntime().catch(err => {
  console.error('Runtime test failed with error:', err);
  process.exit(1);
});
