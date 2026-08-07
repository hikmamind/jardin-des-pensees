/* ==========================================================================
   HIKMA & NOUR - SOCIAL INTERACTIONS ENGINE (LIKES, RATINGS, SHARES, COMMENTS)
   ========================================================================== */

(function() {
  // Determine unique article key from filename or path
  function getArticleKey() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
    return filename || 'article_general';
  }

  const articleKey = getArticleKey();

  // Inject Social CSS
  const style = document.createElement('style');
  style.textContent = `
    .article-social-card {
      background: rgba(15, 22, 17, 0.95);
      border: 1px solid rgba(223, 177, 91, 0.35);
      border-radius: 20px;
      padding: 24px;
      margin: 35px auto;
      max-width: 900px;
      box-shadow: 0 12px 35px rgba(0,0,0,0.6);
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      direction: rtl;
      text-align: right;
    }

    .social-actions-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 14px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 24px;
    }

    .social-btn {
      background: rgba(223, 177, 91, 0.08);
      border: 1px solid rgba(223, 177, 91, 0.3);
      color: #F5D98A;
      padding: 10px 18px;
      border-radius: 14px;
      font-size: 0.9rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: all 0.25s ease;
    }

    .social-btn:hover {
      background: rgba(223, 177, 91, 0.2);
      border-color: #DFB15B;
      transform: translateY(-2px);
    }

    .social-btn.liked {
      background: rgba(239, 68, 68, 0.15) !important;
      border-color: rgba(239, 68, 68, 0.5) !important;
      color: #EF4444 !important;
    }

    .article-star-rating span {
      font-size: 1.4rem;
      color: #F5D98A;
      cursor: pointer;
      transition: transform 0.15s;
      display: inline-block;
      letter-spacing: 2px;
    }
    .article-star-rating span:hover {
      transform: scale(1.25);
    }

    .article-comment-item {
      background: rgba(22, 32, 25, 0.9);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      padding: 14px 18px;
      margin-bottom: 12px;
    }

    .article-comment-avatar {
      width: 38px; height: 38px; border-radius: 50%;
      background: linear-gradient(135deg, #DFB15B, #B88E3C);
      color: #000; font-weight: 800; font-size: 0.9rem;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  // Default Mock Comments
  const defaultArticleComments = [
    { author: "أمينة السراج", text: "مقالة عميقة وملهمة جداً، أسلوب الطرح والتحليل رائع!", rating: 5, date: "منذ يومين", likes: 14 },
    { author: "كمال التازي", text: "الفكرة واضحة والتطبيقات العملية ممتازة لمواجهة تحديات الحياة اليومية.", rating: 5, date: "منذ 4 أيام", likes: 8 }
  ];

  // Render Component Container
  function renderSocialComponent() {
    const container = document.createElement('div');
    container.className = 'article-social-card no-print';

    const savedLike = localStorage.getItem(`like_art_${articleKey}`) === 'true';
    let savedCount = parseInt(localStorage.getItem(`count_art_${articleKey}`) || '284', 10);

    container.innerHTML = `
      <!-- Social Actions Bar -->
      <div class="social-actions-bar">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <button class="social-btn ${savedLike ? 'liked' : ''}" id="artLikeBtn" onclick="window.toggleArtLike()">
            <span>❤️</span> <span id="artLikeText">${savedLike ? 'تم الإعجاب' : 'إعجاب'}</span> (<span id="artLikeCount">${savedCount}</span>)
          </button>

          <button class="social-btn" onclick="window.openArtShareModal()">
            <span>🔗</span> مشاركة المقال
          </button>
        </div>

        <!-- Rating Stars Box -->
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:0.85rem;color:#C8BFB0;font-weight:700;">تقييم المقال:</span>
          <div class="article-star-rating" id="artStarSelector">
            <span onclick="window.setArtRating(1)">★</span>
            <span onclick="window.setArtRating(2)">★</span>
            <span onclick="window.setArtRating(3)">★</span>
            <span onclick="window.setArtRating(4)">★</span>
            <span onclick="window.setArtRating(5)">★</span>
          </div>
          <span style="font-size:0.85rem;color:#DFB15B;font-weight:800;" id="artRatingScore">4.9/5</span>
        </div>
      </div>

      <!-- Add Comment Form -->
      <div style="margin-bottom:20px;">
        <h4 style="color:#DFB15B;font-size:1.05rem;margin-bottom:12px;display:flex;align-items:center;gap:8px;">
          <span>💬</span> التعليقات والانطباعات (<span id="artCommentsCount">2</span>)
        </h4>
        
        <form onsubmit="window.submitArtComment(event)" style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <input type="text" id="artAuthorInput" placeholder="اسمك الكريم *" required style="background:rgba(0,0,0,0.5);border:1px solid rgba(223,177,91,0.3);color:#fff;padding:10px 14px;border-radius:10px;font-size:0.88rem;outline:none;">
            <select id="artRatingSelect" style="background:rgba(0,0,0,0.5);border:1px solid rgba(223,177,91,0.3);color:#F5D98A;padding:10px 14px;border-radius:10px;font-weight:700;font-size:0.88rem;outline:none;">
              <option value="5">★★★★★ (5/5) ممتاز جداً</option>
              <option value="4">★★★★☆ (4/5) جيد جداً</option>
              <option value="3">★★★☆☆ (3/5) متوسط</option>
            </select>
          </div>
          <textarea id="artTextInput" placeholder="اكتب رأيك أو تعليقك على هذا المقال..." required rows="3" style="background:rgba(0,0,0,0.5);border:1px solid rgba(223,177,91,0.3);color:#fff;padding:10px 14px;border-radius:10px;font-family:inherit;font-size:0.88rem;outline:none;resize:vertical;"></textarea>
          <button type="submit" class="social-btn" style="justify-content:center;background:#DFB15B;color:#000;font-weight:800;border:none;">
            <span>🚀</span> إرسال التعليق
          </button>
        </form>
      </div>

      <!-- Comments Feed -->
      <div id="artCommentsFeed"></div>
    `;

    // Append to document
    const target = document.querySelector('.book-container') || document.querySelector('.reader-main-content') || document.body;
    target.appendChild(container);

    window.loadArtComments();
  }

  // Window Handlers
  window.toggleArtLike = function() {
    const btn = document.getElementById('artLikeBtn');
    const countEl = document.getElementById('artLikeCount');
    const textEl = document.getElementById('artLikeText');
    const key = `like_art_${articleKey}`;
    let isLiked = localStorage.getItem(key) === 'true';
    let currentCount = parseInt(localStorage.getItem(`count_art_${articleKey}`) || '284', 10);

    isLiked = !isLiked;
    localStorage.setItem(key, isLiked ? 'true' : 'false');
    currentCount = isLiked ? currentCount + 1 : currentCount - 1;
    localStorage.setItem(`count_art_${articleKey}`, currentCount);

    if (btn) {
      if (isLiked) {
        btn.classList.add('liked');
        if (textEl) textEl.textContent = 'تم الإعجاب';
      } else {
        btn.classList.remove('liked');
        if (textEl) textEl.textContent = 'إعجاب';
      }
    }
    if (countEl) countEl.textContent = currentCount;
  };

  window.setArtRating = function(rating) {
    const scoreEl = document.getElementById('artRatingScore');
    if (scoreEl) scoreEl.textContent = `${rating}.0/5`;
    const stars = document.querySelectorAll('#artStarSelector span');
    stars.forEach((s, idx) => {
      s.style.opacity = idx < rating ? '1' : '0.4';
    });
  };

  window.loadArtComments = function() {
    const feed = document.getElementById('artCommentsFeed');
    const countEl = document.getElementById('artCommentsCount');
    if (!feed) return;

    const savedKey = `comments_art_${articleKey}`;
    let comments = JSON.parse(localStorage.getItem(savedKey) || 'null');
    if (!comments) comments = defaultArticleComments;

    if (countEl) countEl.textContent = comments.length;

    feed.innerHTML = comments.map(c => {
      const initials = c.author ? c.author.charAt(0).toUpperCase() : '👤';
      const starsHtml = '★'.repeat(c.rating || 5) + '☆'.repeat(5 - (c.rating || 5));
      return `
        <div class="article-comment-item">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <div class="article-comment-avatar">${initials}</div>
              <div>
                <h5 style="font-size:0.9rem;font-weight:700;color:#FFFDF8;margin:0;">${c.author}</h5>
                <span style="font-size:0.75rem;color:rgba(250,246,239,0.5);">${c.date}</span>
              </div>
            </div>
            <div style="color:#F5D98A;font-size:0.85rem;font-weight:700;">${starsHtml}</div>
          </div>
          <p style="font-size:0.88rem;color:rgba(250,246,239,0.85);line-height:1.6;margin:0 0 8px;">${c.text}</p>
          <div style="font-size:0.75rem;color:#999;cursor:pointer;" onclick="this.style.color='#EF4444';this.textContent='❤️ شكراً لك!';">
            ❤️ مفيد (${c.likes || 0})
          </div>
        </div>
      `;
    }).join('');
  };

  window.submitArtComment = function(e) {
    e.preventDefault();
    const authorInput = document.getElementById('artAuthorInput');
    const textInput = document.getElementById('artTextInput');
    const ratingSelect = document.getElementById('artRatingSelect');

    if (!authorInput.value.trim() || !textInput.value.trim()) return;

    const newComment = {
      author: authorInput.value.trim(),
      text: textInput.value.trim(),
      rating: parseInt(ratingSelect.value, 10),
      date: "الآن",
      likes: 0
    };

    const savedKey = `comments_art_${articleKey}`;
    let comments = JSON.parse(localStorage.getItem(savedKey) || 'null');
    if (!comments) comments = defaultArticleComments;

    comments.unshift(newComment);
    localStorage.setItem(savedKey, JSON.stringify(comments));

    textInput.value = '';
    window.loadArtComments();
    alert('✓ تم إرسال تعليقك ونشره بنجاح!');
  };

  window.openArtShareModal = function() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    window.open(`https://api.whatsapp.com/send?text=${title}%20${url}`, '_blank');
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSocialComponent);
  } else {
    renderSocialComponent();
  }
})();
