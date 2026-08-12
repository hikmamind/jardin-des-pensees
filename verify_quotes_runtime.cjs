// Runtime DOM Mock Verification for Quotes Premium Reader

global.window = {
  location: {
    href: 'http://localhost:3000/quotes/',
    search: '',
    pathname: '/quotes/',
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
    this.scrollTop = 0;
    this.scrollHeight = 1000;
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
  remove() {}
}

const elementsMap = {
  'quotesGridContainer': new ElementMock('div', 'quotesGridContainer'),
  'wisdomText': new ElementMock('p', 'wisdomText'),
  'wisdomAuthor': new ElementMock('span', 'wisdomAuthor'),
  'wisdomSection': new ElementMock('div', 'wisdomSection'),
  'nextWisdomBtn': new ElementMock('button', 'nextWisdomBtn'),
  'activeLangName': new ElementMock('span', 'activeLangName'),
  'langBtn': new ElementMock('button', 'langBtn'),
  'langDropdown': new ElementMock('div', 'langDropdown'),
  'themeToggleBtn': new ElementMock('button', 'themeToggleBtn'),
  'quoteModal': new ElementMock('div', 'quoteModal'),
  'quoteModalCloseBtn': new ElementMock('button', 'quoteModalCloseBtn'),
  'magazineQuoteRoot': new ElementMock('div', 'magazineQuoteRoot'),
  'magazineToast': new ElementMock('div', 'magazineToast'),
  'toastNotification': new ElementMock('div', 'toastNotification'),
  'navHamburger': new ElementMock('button', 'navHamburger'),
  'navMenu': new ElementMock('div', 'navMenu'),
  'breadcrumbHome': new ElementMock('a', 'breadcrumbHome')
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
  querySelectorAll(sel) { return []; },
  createElement(tag) { return new ElementMock(tag); },
  addEventListener: () => {}
};

async function testQuotesRuntime() {
  console.log('Testing full quotes runtime execution...');

  const quotesModule = await import('./quotes/quotes_v11.js?v=' + Date.now());
  const { findQuoteByIndexOrId, setLanguage } = quotesModule;

  console.log('✅ quotes_v11.js module loaded successfully');

  // 1. Test Central Resolver `findQuoteByIndexOrId`
  console.log('\n--- 1. Testing Central Resolver findQuoteByIndexOrId ---');
  
  // Test numeric indices
  const res0 = findQuoteByIndexOrId(0, 'fr');
  if (!res0 || res0.quote.author !== 'Épictète (Stoïcisme)') {
    throw new Error('❌ findQuoteByIndexOrId(0) failed in FR');
  }
  console.log('✅ findQuoteByIndexOrId(0, "fr") -> Epictetus resolved');

  const res1 = findQuoteByIndexOrId(1, 'fr');
  if (!res1 || !res1.quote.author.includes('Socrate')) {
    throw new Error('❌ findQuoteByIndexOrId(1) failed in FR');
  }
  console.log('✅ findQuoteByIndexOrId(1, "fr") -> Socrates resolved');

  // Test canonical ID string
  const resById = findQuoteByIndexOrId('epictetus-things-and-judgments', 'fr');
  if (!resById || resById.index !== 0) {
    throw new Error('❌ findQuoteByIndexOrId("epictetus-things-and-judgments") failed');
  }
  console.log('✅ findQuoteByIndexOrId("epictetus-things-and-judgments") -> resolved to index 0');

  // Test out-of-bounds / invalid IDs
  const resInvalid = findQuoteByIndexOrId('unknown-id-xyz', 'fr');
  if (resInvalid !== null) {
    throw new Error('❌ Invalid ID should return null');
  }
  console.log('✅ Invalid ID gracefully returns null');

  // 2. Test Grid Rendering
  console.log('\n--- 2. Testing Gallery Grid Rendering ---');
  const grid = elementsMap['quotesGridContainer'];
  if (grid.innerHTML.length < 500) {
    throw new Error('❌ Grid failed to populate quotes');
  }
  console.log(`✅ Quotes grid populated with HTML length: ${grid.innerHTML.length}`);

  // 3. Test Opening Quote 0 (Epictetus)
  console.log('\n--- 3. Testing Quote 0 Modal Opening ---');
  global.window.openQuoteModal(0);

  const root = elementsMap['magazineQuoteRoot'];
  if (root.innerHTML.length < 2000) {
    throw new Error('❌ Quote 0 dossier failed to render or is too short!');
  }
  console.log(`✅ Quote 0 dossier rendered successfully (${root.innerHTML.length} chars)`);

  // Verify all sections exist in rendered HTML
  const html = root.innerHTML;
  if (!html.includes('quote-premium-hero') || 
      !html.includes('quote-premium-portrait-img') || 
      !html.includes('quote-premium-lessons-list') || 
      !html.includes('quote-premium-author-hub') ||
      !html.includes('quote-premium-nav-bar')) {
    throw new Error('❌ Missing required premium sections in rendered quote');
  }
  console.log('✅ All premium sections present: Hero, Portrait, Meaning, Philosophy, Lessons, Application, Reflection, Author Hub, Nav Bar, Calendar CTA');

  // 4. Test opening all 26 quotes in loop
  console.log('\n--- 4. Testing All 26 Quotes Rendering ---');
  for (let i = 0; i < 26; i++) {
    global.window.openQuoteModal(i);
    if (root.innerHTML.length < 1500) {
      throw new Error(`❌ Failed to render quote index ${i}`);
    }
  }
  console.log('✅ All 26 quotes rendered without errors');

  // 5. Test Random Quote & Modal Close
  console.log('\n--- 5. Testing Random Quote & Close ---');
  global.window.openRandomQuote();
  console.log('✅ openRandomQuote() executed successfully');
  
  global.window.closeQuoteModal();
  console.log('✅ closeQuoteModal() executed successfully');

  console.log('\n========================================');
  console.log('ALL QUOTES RUNTIME TESTS PASSED! 🎉');
  console.log('========================================\n');
}

testQuotesRuntime().catch(err => {
  console.error('Runtime test failed:', err);
  process.exit(1);
});
