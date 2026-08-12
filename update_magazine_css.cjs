const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const magazineCssHeader = '/* ==========================================================================\n   MAGAZINE EDITORIAL EXPERIENCE V3 (HIKMA & NOUR)\n   ========================================================================== */';

// Remove old magazine block if it already exists to avoid duplicates
if (css.includes(magazineCssHeader)) {
  const start = css.indexOf(magazineCssHeader);
  css = css.substring(0, start).trim();
}

const newMagazineCss = `
${magazineCssHeader}

/* 1. Modal Container & Ambient Background */
.full-screen-reader-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #070A08;
  background-image: radial-gradient(circle at 50% 0%, #16241b 0%, #070a08 80%);
  z-index: 9999;
  display: none;
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  color: #F7F1E5;
}

.full-screen-reader-modal.active {
  display: flex;
  opacity: 1;
  pointer-events: auto;
}

.reader-sticky-header {
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(7, 10, 8, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(223, 177, 91, 0.18);
  padding: 12px 24px;
  z-index: 100;
}

.reader-progress-container {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.reader-progress-bar {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #DFB15B 0%, #F0C775 100%);
  box-shadow: 0 0 10px rgba(223, 177, 91, 0.6);
  transition: width 0.1s ease-out;
}

.reader-header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
}

.reader-close-btn {
  background: rgba(223, 177, 91, 0.08);
  border: 1.5px solid rgba(223, 177, 91, 0.25);
  color: #F7F1E5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
}

.reader-close-btn:hover {
  background: #DFB15B;
  color: #070A08;
  transform: rotate(90deg) scale(1.05);
  border-color: #DFB15B;
}

.reader-scroll-container {
  flex-grow: 1;
  overflow-y: auto;
  padding: 30px 20px 90px;
  width: 100%;
  scroll-behavior: smooth;
}

.reader-content-width {
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
}

/* 2. Breadcrumbs */
.reader-breadcrumbs {
  font-size: 0.88rem;
  color: #998D7D;
  margin-bottom: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.reader-breadcrumbs a,
.reader-breadcrumbs span.crumb-link {
  color: #D1C5B4;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.reader-breadcrumbs a:hover,
.reader-breadcrumbs span.crumb-link:hover {
  color: #DFB15B;
}

.reader-breadcrumbs span.crumb-current {
  color: #DFB15B;
  font-weight: 700;
}

.reader-breadcrumbs .crumb-sep {
  opacity: 0.4;
}

/* 3. Hero Magazine Header */
.magazine-hero {
  border-bottom: 1px solid rgba(223, 177, 91, 0.18);
  padding-bottom: 40px;
  margin-bottom: 45px;
}

.magazine-hero-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.magazine-category-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 18px;
  background: rgba(223, 177, 91, 0.1);
  border: 1.5px solid rgba(223, 177, 91, 0.3);
  border-radius: 30px;
  color: #F0C775;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.magazine-hero-title {
  font-size: 2.65rem;
  font-weight: 900;
  line-height: 1.32;
  color: #FFFDF8;
  font-family: 'Noto Naskh Arabic', 'Playfair Display', 'Cairo', serif;
  margin: 0 0 20px;
  max-width: 960px;
  text-wrap: balance;
}

.magazine-hero-chapo {
  font-size: 1.2rem;
  line-height: 1.9;
  color: #E8E0D5;
  font-weight: 500;
  max-width: 900px;
  margin-bottom: 26px;
}

.magazine-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 18px 24px;
  background: rgba(22, 31, 25, 0.8);
  border: 1px solid rgba(223, 177, 91, 0.18);
  border-radius: 16px;
  margin-bottom: 30px;
}

.magazine-meta-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: #D1C5B4;
  font-weight: 600;
}

.magazine-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.magazine-meta-author {
  color: #FFFDF8;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.magazine-meta-author img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #DFB15B;
  object-fit: contain;
  background: #FAF6EF;
}

.magazine-actions-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-mag-action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(223, 177, 91, 0.08);
  border: 1.5px solid rgba(223, 177, 91, 0.25);
  border-radius: 30px;
  color: #F7F1E5;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-mag-action:hover {
  background: #DFB15B;
  color: #070A08;
  border-color: #DFB15B;
  transform: translateY(-2px);
}

.btn-mag-action.active {
  background: #DFB15B;
  color: #070A08;
  border-color: #DFB15B;
}

.magazine-cover-wrapper {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid rgba(223, 177, 91, 0.25);
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  margin-top: 10px;
}

.magazine-cover-wrapper img {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

/* 4. Split Grid for Reader Body */
.magazine-split-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  align-items: start;
}

@media (max-width: 980px) {
  .magazine-split-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }
}

/* 5. Sticky Sidebar */
.magazine-sidebar {
  position: sticky;
  top: 85px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

@media (max-width: 980px) {
  .magazine-sidebar {
    display: none; /* Hide on mobile/tablet, replaced by collapsible accordion */
  }
}

.magazine-sidebar-card {
  background: rgba(22, 31, 25, 0.85);
  border: 1.5px solid rgba(223, 177, 91, 0.18);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
}

.magazine-sidebar-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #F0C775;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Noto Naskh Arabic', 'Playfair Display', serif;
  border-bottom: 1px solid rgba(223, 177, 91, 0.15);
  padding-bottom: 10px;
}

.magazine-toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.magazine-toc-list li {
  position: relative;
  padding-inline-start: 16px;
  transition: all 0.2s ease;
}

.magazine-toc-list li::before {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(223, 177, 91, 0.4);
  transition: all 0.25s ease;
}

.magazine-toc-list li.active::before {
  width: 7px;
  height: 7px;
  background: #DFB15B;
  box-shadow: 0 0 10px #DFB15B;
}

.magazine-toc-list a {
  color: #998D7D;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45;
  display: block;
  transition: color 0.2s ease;
}

.magazine-toc-list li.active a,
.magazine-toc-list a:hover {
  color: #F0C775;
}

/* Mobile TOC Accordion */
.magazine-mobile-toc {
  display: none;
  margin-bottom: 30px;
  background: rgba(22, 31, 25, 0.9);
  border: 1.5px solid rgba(223, 177, 91, 0.25);
  border-radius: 16px;
  overflow: hidden;
}

@media (max-width: 980px) {
  .magazine-mobile-toc {
    display: block;
  }
}

.magazine-mobile-toc-header {
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 800;
  color: #F0C775;
  font-size: 1rem;
}

.magazine-mobile-toc-content {
  display: none;
  padding: 10px 20px 18px;
  border-top: 1px solid rgba(223, 177, 91, 0.15);
}

.magazine-mobile-toc.open .magazine-mobile-toc-content {
  display: block;
}

/* 6. Main Reading Stream */
.magazine-reading-stream {
  max-width: 760px;
  width: 100%;
  font-size: 1.15rem;
  line-height: 1.95;
  color: #D1C5B4;
}

.magazine-reading-stream p {
  margin-bottom: 24px;
}

/* Lead Chapô */
.magazine-lead-box {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.95;
  color: #F7F1E5;
  background: rgba(223, 177, 91, 0.04);
  border-inline-start: 4px solid #DFB15B;
  padding: 24px 30px;
  border-radius: 14px;
  margin-bottom: 40px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}

/* Summary Card */
.magazine-summary-card {
  background: rgba(22, 31, 25, 0.9);
  border: 1.5px solid rgba(223, 177, 91, 0.3);
  border-inline-start: 4px solid #DFB15B;
  border-radius: 18px;
  padding: 28px 32px;
  margin-bottom: 45px;
  box-shadow: 0 12px 35px rgba(0,0,0,0.35);
}

.magazine-summary-title {
  color: #F0C775;
  font-size: 1.12rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.magazine-summary-text {
  font-size: 1.08rem;
  line-height: 1.85;
  color: #F7F1E5;
  margin: 0 0 14px;
}

.magazine-summary-question {
  font-size: 1.05rem;
  font-weight: 700;
  font-style: italic;
  color: #DFB15B;
  border-top: 1px dashed rgba(223, 177, 91, 0.2);
  padding-top: 12px;
  margin: 0;
}

/* Section Header */
.magazine-section-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin: 50px 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(223, 177, 91, 0.2);
  scroll-margin-top: 100px;
}

.magazine-section-num {
  font-size: 1.35rem;
  font-weight: 900;
  color: #DFB15B;
  opacity: 0.55;
  font-family: 'Playfair Display', sans-serif;
}

.magazine-section-title {
  font-size: 1.65rem;
  font-weight: 800;
  color: #FFFDF8;
  margin: 0;
  line-height: 1.4;
  font-family: 'Noto Naskh Arabic', 'Playfair Display', 'Cairo', serif;
}

/* Quotes in Text */
.magazine-quote-box {
  position: relative;
  padding: 34px 40px;
  background: radial-gradient(circle at center, rgba(30, 42, 34, 0.95) 0%, rgba(16, 23, 18, 0.98) 100%);
  border: 1.5px solid rgba(223, 177, 91, 0.3);
  border-radius: 18px;
  margin: 45px 0;
  text-align: center;
  box-shadow: 0 15px 45px rgba(0,0,0,0.4);
}

.magazine-quote-icon {
  font-size: 3.5rem;
  color: rgba(223, 177, 91, 0.35);
  line-height: 1;
  font-family: serif;
  display: block;
  margin-bottom: -15px;
}

.magazine-quote-text {
  font-size: 1.32rem;
  font-weight: 700;
  color: #FFFDF8;
  font-family: 'Noto Naskh Arabic', 'Playfair Display', serif;
  line-height: 1.7;
  margin: 0 0 14px;
}

.magazine-quote-author {
  color: #DFB15B;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* Insight Callouts */
.magazine-insight-card {
  background: rgba(22, 31, 25, 0.9);
  border: 1.5px solid rgba(52, 211, 153, 0.25);
  border-radius: 18px;
  padding: 26px 30px;
  margin: 40px 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.magazine-insight-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  background: rgba(52, 211, 153, 0.12);
  color: #34D399;
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.magazine-insight-title {
  font-size: 1.18rem;
  font-weight: 800;
  color: #FFFDF8;
  margin-bottom: 10px;
}

.magazine-insight-text {
  font-size: 1.08rem;
  line-height: 1.85;
  color: #D1C5B4;
  margin: 0;
}

/* Practical Advice Card */
.magazine-practical-card {
  background: rgba(22, 31, 25, 0.9);
  border: 1.5px solid rgba(223, 177, 91, 0.3);
  border-radius: 22px;
  padding: 32px 36px;
  margin: 45px 0;
  box-shadow: 0 15px 40px rgba(0,0,0,0.35);
}

.magazine-practical-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #F0C775;
  margin-bottom: 10px;
}

.magazine-practical-desc {
  font-size: 1rem;
  color: #998D7D;
  margin-bottom: 24px;
}

.practical-tip-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.practical-tip-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.practical-tip-num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(223, 177, 91, 0.12);
  border: 1.5px solid #DFB15B;
  color: #DFB15B;
  font-weight: 800;
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.practical-tip-body h4 {
  font-size: 1.08rem;
  font-weight: 800;
  color: #FFFDF8;
  margin: 0 0 4px;
}

.practical-tip-body p {
  font-size: 1rem;
  color: #D1C5B4;
  line-height: 1.75;
  margin: 0;
}

/* Key Takeaways Card */
.magazine-takeaways-card {
  background: linear-gradient(135deg, rgba(223, 177, 91, 0.08) 0%, rgba(22, 31, 25, 0.95) 100%);
  border: 1.5px solid rgba(223, 177, 91, 0.35);
  border-radius: 22px;
  padding: 32px 36px;
  margin: 50px 0;
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
}

.magazine-takeaways-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #F0C775;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.magazine-takeaways-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.magazine-takeaways-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #F7F1E5;
}

.magazine-takeaways-list li span.dot {
  color: #DFB15B;
  font-size: 1.4rem;
  line-height: 1.2;
}

/* Final Grand Quote */
.magazine-final-quote-card {
  text-align: center;
  padding: 40px;
  background: rgba(16, 23, 18, 0.85);
  border: 1.5px solid rgba(223, 177, 91, 0.3);
  border-radius: 22px;
  margin: 45px 0;
}

.magazine-final-quote-card p {
  font-size: 1.35rem;
  font-weight: 700;
  font-style: italic;
  font-family: 'Noto Naskh Arabic', 'Playfair Display', serif;
  color: #FFFDF8;
  line-height: 1.8;
  margin: 0 0 12px;
}

/* CTA */
.magazine-cta-card {
  text-align: center;
  padding: 45px 30px;
  background: radial-gradient(circle at center, rgba(30, 42, 34, 0.95) 0%, rgba(14, 20, 16, 0.98) 100%);
  border: 1.5px solid rgba(223, 177, 91, 0.3);
  border-radius: 24px;
  margin: 55px 0;
  box-shadow: 0 18px 50px rgba(0,0,0,0.45);
}

.magazine-cta-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFFDF8;
  margin-bottom: 12px;
}

.magazine-cta-card p {
  color: #D1C5B4;
  margin-bottom: 26px;
  font-size: 1.02rem;
}

.magazine-cta-btn {
  background: #DFB15B;
  color: #070A08;
  font-weight: 800;
  font-size: 1.05rem;
  border: none;
  padding: 14px 34px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 6px 20px rgba(223, 177, 91, 0.35);
}

.magazine-cta-btn:hover {
  transform: translateY(-2px);
  background: #F0C775;
  box-shadow: 0 10px 25px rgba(223, 177, 91, 0.5);
}

/* Interactive Hub (Ratings & Social) */
.magazine-hub-card {
  background: rgba(22, 31, 25, 0.85);
  border: 1.5px solid rgba(223, 177, 91, 0.2);
  border-radius: 20px;
  padding: 26px 30px;
  margin: 45px 0;
}

.magazine-rating-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.star-rating-mag {
  display: flex;
  gap: 8px;
  font-size: 1.6rem;
  color: #DFB15B;
  cursor: pointer;
}

.star-rating-mag span {
  transition: transform 0.2s ease, color 0.2s ease;
}

.star-rating-mag span:hover {
  transform: scale(1.25);
  color: #F0C775;
}

.magazine-share-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 20px;
}

.magazine-share-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.share-btn-pill {
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.88rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.share-btn-pill.whatsapp {
  background: rgba(37, 211, 102, 0.15);
  border: 1px solid rgba(37, 211, 102, 0.35);
  color: #25D366;
}

.share-btn-pill.twitter {
  background: rgba(29, 161, 242, 0.15);
  border: 1px solid rgba(29, 161, 242, 0.35);
  color: #1DA1F2;
}

.share-btn-pill.facebook {
  background: rgba(24, 119, 242, 0.15);
  border: 1px solid rgba(24, 119, 242, 0.35);
  color: #1877F2;
}

.share-btn-pill.copy {
  background: rgba(223, 177, 91, 0.15);
  border: 1.5px solid #DFB15B;
  color: #DFB15B;
}

.share-btn-pill:hover {
  transform: translateY(-2px);
}

/* Related Articles Cards */
.magazine-related-section {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(223, 177, 91, 0.2);
}

.magazine-related-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #F0C775;
  margin-bottom: 26px;
  font-family: 'Noto Naskh Arabic', 'Playfair Display', serif;
}

.magazine-related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}

.magazine-related-card {
  background: rgba(22, 31, 25, 0.85);
  border: 1.5px solid rgba(223, 177, 91, 0.2);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.magazine-related-card:hover {
  transform: translateY(-5px);
  border-color: #DFB15B;
  box-shadow: 0 12px 35px rgba(223, 177, 91, 0.2);
}

.magazine-related-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}

.magazine-related-card-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.magazine-related-card-category {
  color: #DFB15B;
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.magazine-related-card-title {
  color: #FFFDF8;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.45;
  margin: 0 0 10px;
}

.magazine-related-card-meta {
  color: #998D7D;
  font-size: 0.82rem;
  margin-top: auto;
}

/* Toast */
.mag-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: #DFB15B;
  color: #070A08;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 12px 28px;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  z-index: 99999;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: none;
}

.mag-toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .magazine-hero-title {
    font-size: 1.85rem;
  }
  .magazine-hero-chapo {
    font-size: 1.05rem;
  }
  .magazine-meta-bar {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }
  .magazine-actions-group {
    justify-content: center;
  }
  .magazine-summary-card,
  .magazine-practical-card,
  .magazine-takeaways-card,
  .magazine-hub-card {
    padding: 22px 20px;
  }
}
`;

fs.writeFileSync('style.css', css + '\n' + newMagazineCss);
console.log('Successfully updated style.css with Magazine V3 styling');
