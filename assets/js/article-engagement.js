/**
 * ============================================================================
 * HIKMA & NOUR — UNIVERSAL ARTICLE ENGAGEMENT MODULE (JS V4.1)
 * Likes, 1-5 Star Ratings, Comments & Moderation
 * ============================================================================
 */

(function () {
  'use strict';

  // --- 1. Multilingual Dictionaries ---
  const TRANSLATIONS = {
    ar: {
      likeBtn: "أعجبني",
      likedBtn: "إلغاء الإعجاب",
      shareBtn: "مشاركة المقال",
      ratingTitle: "قيّم هذا المقال",
      yourRating: "تقييمك",
      ratingsCount: "تقييمات",
      singleRating: "تقييم واحد",
      avgOutOf: "/ 5",
      commentsHeader: "التعليقات والمناقشات",
      addCommentHeading: "أضف تعليقًا أو انطباعًا",
      nameLabel: "اسمك الكريم",
      namePlaceholder: "الاسم أو اللقب المستعار...",
      ratingSelectLabel: "التقييم المقترح مع التعليق",
      commentLabel: "تعليقك أو تأملك الفلسفي",
      commentPlaceholder: "اكتب رأيك أو فكرتك المستفادة من هذا المقال (حتى 1500 حرف)...",
      publishBtn: "نشر التعليق",
      sending: "جاري الإرسال...",
      submittedSuccess: "✓ تم إرسال تعليقك بنجاح ونشره في المنصة.",
      submittedPending: "✓ تم إرسال تعليقك وهو قيد المراجعة.",
      errorFillFields: "يرجى كتابة الاسم والتعليق بالشكل المطلوب.",
      errorGeneral: "تعذر إرسال التعليق، يرجى المحاولة مرة أخرى.",
      emptyComments: "لا توجد تعليقات حتى الآن. كن أول من يشارك أفكاره!",
      charCount: "حرف متبقي",
      ratedThanks: "شكراً لتقييمك: ",
      rateStarAria: "تقييم {n} من 5 نجوم",
      stars: {
        5: "★★★★★ (5/5) ممتاز ومؤثر جداً",
        4: "★★★★☆ (4/5) قيّم ومفيد",
        3: "★★★☆☆ (3/5) جيد",
        2: "★★☆☆☆ (2/5) متوسط",
        1: "★☆☆☆☆ (1/5) يحتاج تحسين"
      }
    },
    fr: {
      likeBtn: "J’aime",
      likedBtn: "Retirer le J’aime",
      shareBtn: "Partager l'article",
      ratingTitle: "Noter cet article",
      yourRating: "Votre note",
      ratingsCount: "évaluations",
      singleRating: "évaluation",
      avgOutOf: "/ 5",
      commentsHeader: "Commentaires & Discussions",
      addCommentHeading: "Ajouter un commentaire ou une réflexion",
      nameLabel: "Votre nom ou pseudonyme",
      namePlaceholder: "Votre nom...",
      ratingSelectLabel: "Note attribuée",
      commentLabel: "Votre réflexion ou commentaire",
      commentPlaceholder: "Partagez votre avis ou vos réflexions sur cette étude (jusqu'à 1500 caractères)...",
      publishBtn: "Publier mon commentaire",
      sending: "Envoi en cours...",
      submittedSuccess: "✓ Votre commentaire a été publié avec succès.",
      submittedPending: "✓ Commentaire envoyé, en attente de modération.",
      errorFillFields: "Veuillez renseigner un nom (2-50 car.) et un commentaire valide (3-1500 car.).",
      errorGeneral: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      emptyComments: "Aucun commentaire pour le moment. Soyez la première personne à commenter !",
      charCount: "caractères restants",
      ratedThanks: "Merci pour votre note de ",
      rateStarAria: "Noter {n} étoile(s) sur 5",
      stars: {
        5: "★★★★★ (5/5) Remarquable et inspirant",
        4: "★★★★☆ (4/5) Très instructif et clair",
        3: "★★★☆☆ (3/5) Bon article",
        2: "★★☆☆☆ (2/5) Moyen",
        1: "★☆☆☆☆ (1/5) À améliorer"
      }
    },
    en: {
      likeBtn: "Like",
      likedBtn: "Remove like",
      shareBtn: "Share article",
      ratingTitle: "Rate this article",
      yourRating: "Your rating",
      ratingsCount: "ratings",
      singleRating: "rating",
      avgOutOf: "/ 5",
      commentsHeader: "Comments & Discussions",
      addCommentHeading: "Add a comment or reflection",
      nameLabel: "Your name or alias",
      namePlaceholder: "Your name...",
      ratingSelectLabel: "Rating with comment",
      commentLabel: "Your reflection or inquiry",
      commentPlaceholder: "Share your thoughts or takeaways from this article (up to 1500 characters)...",
      publishBtn: "Publish Comment",
      sending: "Submitting...",
      submittedSuccess: "✓ Your comment has been successfully published.",
      submittedPending: "✓ Comment submitted, awaiting moderation.",
      errorFillFields: "Please enter a valid name (2-50 chars) and comment (3-1500 chars).",
      errorGeneral: "Could not submit your comment. Please try again.",
      emptyComments: "No comments yet. Be the first to share your thoughts!",
      charCount: "characters remaining",
      ratedThanks: "Thank you for your rating of ",
      rateStarAria: "Rate {n} out of 5 stars",
      stars: {
        5: "★★★★★ (5/5) Exceptional and insightful",
        4: "★★★★☆ (4/5) Very insightful and practical",
        3: "★★★☆☆ (3/5) Good reading",
        2: "★★☆☆☆ (2/5) Average",
        1: "★☆☆☆☆ (1/5) Needs improvement"
      }
    }
  };

  // --- 2. Helpers & Visitor ID ---
  function getVisitorId() {
    let vid = localStorage.getItem('hikma_visitor_id');
    if (!vid) {
      vid = 'vis_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('hikma_visitor_id', vid);
    }
    return vid;
  }

  function getActiveLang() {
    const saved = localStorage.getItem('site_lang_v1') || localStorage.getItem('lang') || document.documentElement.lang;
    if (saved && (saved === 'ar' || saved === 'fr' || saved === 'en')) {
      return saved;
    }
    return 'ar';
  }

  function getArticleId(mountEl) {
    if (mountEl && mountEl.getAttribute('data-article-id')) {
      return mountEl.getAttribute('data-article-id').trim();
    }
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
    return filename || 'general_article';
  }

  function sanitizeText(str) {
    if (!str) return '';
    return str.toString().trim();
  }

  function formatDate(timestamp, lang) {
    if (!timestamp) return '';
    try {
      const d = new Date(timestamp);
      if (isNaN(d.getTime())) return String(timestamp);
      return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : lang === 'fr' ? 'fr-FR' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }).format(d);
    } catch (e) {
      return '';
    }
  }

  // --- 3. Local Storage Store Manager (Isolated per article) ---
  const LocalStore = {
    getEngagement(artId) {
      const visitorId = getVisitorId();
      const likesList = JSON.parse(localStorage.getItem(`hikma_likes_${artId}`) || '[]');
      const ratingsList = JSON.parse(localStorage.getItem(`hikma_ratings_${artId}`) || '[]');
      const commentsList = JSON.parse(localStorage.getItem(`hikma_comments_${artId}`) || '[]');

      const userLiked = likesList.includes(visitorId);
      const userRatingObj = ratingsList.find(r => r.visitorId === visitorId);
      const userRating = userRatingObj ? userRatingObj.rating : null;

      const totalRatings = ratingsList.length;
      const sumRatings = ratingsList.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
      const avgRating = totalRatings > 0 ? (sumRatings / totalRatings).toFixed(1) : '5.0';

      return {
        likesCount: likesList.length,
        userLiked,
        totalRatings,
        avgRating,
        userRating,
        comments: commentsList
      };
    },

    toggleLike(artId) {
      const visitorId = getVisitorId();
      let likesList = JSON.parse(localStorage.getItem(`hikma_likes_${artId}`) || '[]');
      let isLiked = false;

      if (likesList.includes(visitorId)) {
        likesList = likesList.filter(id => id !== visitorId);
        isLiked = false;
      } else {
        likesList.push(visitorId);
        isLiked = true;
      }

      localStorage.setItem(`hikma_likes_${artId}`, JSON.stringify(likesList));
      return { isLiked, likesCount: likesList.length };
    },

    saveRating(artId, rating) {
      const visitorId = getVisitorId();
      let ratingsList = JSON.parse(localStorage.getItem(`hikma_ratings_${artId}`) || '[]');
      const existingIdx = ratingsList.findIndex(r => r.visitorId === visitorId);

      if (existingIdx >= 0) {
        ratingsList[existingIdx].rating = rating;
        ratingsList[existingIdx].updatedAt = Date.now();
      } else {
        ratingsList.push({ visitorId, rating, createdAt: Date.now() });
      }

      localStorage.setItem(`hikma_ratings_${artId}`, JSON.stringify(ratingsList));

      const totalRatings = ratingsList.length;
      const sumRatings = ratingsList.reduce((acc, r) => acc + (Number(r.rating) || 0), 0);
      const avgRating = totalRatings > 0 ? (sumRatings / totalRatings).toFixed(1) : '5.0';

      return { userRating: rating, totalRatings, avgRating };
    },

    addComment(artId, comment) {
      let commentsList = JSON.parse(localStorage.getItem(`hikma_comments_${artId}`) || '[]');
      const newComment = {
        id: 'comm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6),
        author: sanitizeText(comment.author),
        text: sanitizeText(comment.text),
        rating: Number(comment.rating) || 5,
        lang: comment.lang || 'ar',
        status: 'approved',
        createdAt: Date.now()
      };
      commentsList.unshift(newComment);
      localStorage.setItem(`hikma_comments_${artId}`, JSON.stringify(commentsList));
      return newComment;
    }
  };

  // --- 4. API Client (Attempts Backend, falls back to LocalStore) ---
  const Api = {
    async fetchEngagement(artId) {
      const visitorId = getVisitorId();
      try {
        const res = await fetch(`/api/articles/${encodeURIComponent(artId)}/engagement?visitorId=${encodeURIComponent(visitorId)}`, {
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          const data = await res.json();
          return data;
        }
      } catch (e) {
        // Fallback to local store silently
      }
      return LocalStore.getEngagement(artId);
    },

    async toggleLike(artId) {
      const visitorId = getVisitorId();
      try {
        const res = await fetch(`/api/articles/${encodeURIComponent(artId)}/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId })
        });
        if (res.ok) {
          return await res.json();
        }
      } catch (e) {
        // Fallback
      }
      return LocalStore.toggleLike(artId);
    },

    async saveRating(artId, rating) {
      const visitorId = getVisitorId();
      try {
        const res = await fetch(`/api/articles/${encodeURIComponent(artId)}/rating`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId, rating })
        });
        if (res.ok) {
          return await res.json();
        }
      } catch (e) {
        // Fallback
      }
      return LocalStore.saveRating(artId, rating);
    },

    async addComment(artId, comment) {
      const visitorId = getVisitorId();
      try {
        const res = await fetch(`/api/articles/${encodeURIComponent(artId)}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...comment, visitorId })
        });
        if (res.ok) {
          return await res.json();
        }
      } catch (e) {
        // Fallback
      }
      return { success: true, comment: LocalStore.addComment(artId, comment) };
    }
  };

  // --- 5. Engagement UI Renderer ---
  class ArticleEngagementComponent {
    constructor(mountEl) {
      this.mountEl = mountEl;
      this.articleId = getArticleId(mountEl);
      this.currentLang = getActiveLang();
      this.state = {
        likesCount: 0,
        userLiked: false,
        totalRatings: 0,
        avgRating: '5.0',
        userRating: 0,
        comments: [],
        isLoading: true,
        selectedRating: 5
      };

      this.init();
    }

    async init() {
      this.renderSkeleton();
      await this.loadData();
      this.render();
      this.bindEvents();
      this.listenLanguageChanges();
    }

    listenLanguageChanges() {
      // Listen for platform language switches
      window.addEventListener('languageChanged', (e) => {
        if (e.detail && e.detail.lang) {
          this.currentLang = e.detail.lang;
          this.render();
          this.bindEvents();
        }
      });
      // Periodic check in case localStorage is updated directly
      setInterval(() => {
        const lang = getActiveLang();
        if (lang !== this.currentLang) {
          this.currentLang = lang;
          this.render();
          this.bindEvents();
        }
      }, 1000);
    }

    async loadData() {
      const data = await Api.fetchEngagement(this.articleId);
      this.state = {
        ...this.state,
        likesCount: data.likesCount || 0,
        userLiked: !!data.userLiked,
        totalRatings: data.totalRatings || (data.comments ? data.comments.length : 0),
        avgRating: data.avgRating || '5.0',
        userRating: data.userRating || 0,
        comments: Array.isArray(data.comments) ? data.comments : [],
        isLoading: false
      };
    }

    renderSkeleton() {
      this.mountEl.innerHTML = `
        <div class="article-engagement-container">
          <div class="article-engagement-card" style="opacity: 0.5; text-align: center; padding: 30px;">
            <span style="color: var(--eng-gold); font-size: 0.95rem;">Chargement des interactions...</span>
          </div>
        </div>
      `;
    }

    render() {
      const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.ar;
      const isRtl = this.currentLang === 'ar';
      const dir = isRtl ? 'rtl' : 'ltr';

      const avgFormatted = (this.state.avgRating || '5.0').replace('.', isRtl ? '٫' : ',');
      const ratingsLabel = this.state.totalRatings === 1 ? t.singleRating : t.ratingsCount;

      this.mountEl.innerHTML = `
        <div class="article-engagement-container" dir="${dir}">
          <div class="article-engagement-card">
            
            <!-- 1. Top Summary Bar -->
            <div class="eng-summary-bar">
              <div class="eng-like-group">
                <button type="button" class="eng-like-btn ${this.state.userLiked ? 'liked' : ''}" id="engLikeBtn" aria-pressed="${this.state.userLiked}" aria-label="${this.state.userLiked ? t.likedBtn : t.likeBtn}">
                  <span class="eng-heart-icon">${this.state.userLiked ? '❤️' : '🤍'}</span>
                  <span id="engLikeText">${this.state.userLiked ? t.likedBtn : t.likeBtn}</span>
                  <span class="eng-badge-count" id="engLikeCount" style="margin-inline-start: 4px; opacity: 0.85;">(${this.state.likesCount})</span>
                </button>

                <button type="button" class="eng-share-btn" id="engShareBtn" title="${t.shareBtn}">
                  <span>↗</span>
                  <span>${t.shareBtn}</span>
                </button>
              </div>

              <!-- Rating Score Box -->
              <div class="eng-rating-summary">
                <div class="eng-rating-score-box">
                  <span class="eng-rating-avg" id="engRatingAvg">${avgFormatted}</span>
                  <span class="eng-rating-out-of">${t.avgOutOf}</span>
                </div>
                <div class="eng-star-rating-group" aria-hidden="true">
                  ${this.renderStarsHtml(Math.round(Number(this.state.avgRating) || 5))}
                </div>
                <span class="eng-rating-count-tag" id="engRatingCountTag">(${this.state.totalRatings} ${ratingsLabel})</span>
              </div>
            </div>

            <!-- 2. Star Rating Interactive Box -->
            <div class="eng-rating-interactive-box">
              <div>
                <span class="eng-rating-label">
                  <span>★</span> ${t.ratingTitle}
                </span>
                <div class="eng-rating-feedback" id="engRatingFeedback">
                  ${this.state.userRating > 0 ? t.ratedThanks + this.state.userRating + '/5 ★' : ''}
                </div>
              </div>

              <div class="eng-star-rating-group" role="radiogroup" aria-label="${t.ratingTitle}" id="engInteractiveStars">
                ${[1, 2, 3, 4, 5].map(n => `
                  <button type="button" class="eng-star-btn ${n <= (this.state.userRating || 0) ? 'selected' : ''}" data-star="${n}" role="radio" aria-checked="${n === this.state.userRating}" aria-label="${t.rateStarAria.replace('{n}', n)}">
                    ★
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- 3. Comments Area -->
            <div class="eng-comments-section">
              <div class="eng-comments-header">
                <h3 class="eng-comments-title">
                  <span>💬</span> ${t.commentsHeader}
                </h3>
                <span class="eng-comments-count-badge" id="engCommentsCountBadge">
                  ${this.state.comments.length}
                </span>
              </div>

              <!-- Comment Form -->
              <form class="eng-comment-form" id="engCommentForm">
                <div class="eng-form-row">
                  <div class="eng-input-wrapper">
                    <label class="eng-input-label" for="engAuthorInput">${t.nameLabel} *</label>
                    <input type="text" id="engAuthorInput" class="eng-input-field" placeholder="${t.namePlaceholder}" maxlength="50" required autocomplete="name">
                  </div>
                  <div class="eng-input-wrapper">
                    <label class="eng-input-label" for="engRatingSelect">${t.ratingSelectLabel}</label>
                    <select id="engRatingSelect" class="eng-input-field" style="color: var(--eng-gold); font-weight: 700;">
                      <option value="5">${t.stars[5]}</option>
                      <option value="4">${t.stars[4]}</option>
                      <option value="3">${t.stars[3]}</option>
                      <option value="2">${t.stars[2]}</option>
                      <option value="1">${t.stars[1]}</option>
                    </select>
                  </div>
                </div>

                <div class="eng-input-wrapper">
                  <label class="eng-input-label" for="engCommentText">${t.commentLabel} *</label>
                  <textarea id="engCommentText" class="eng-input-field" placeholder="${t.commentPlaceholder}" rows="3" maxlength="1500" required></textarea>
                </div>

                <div class="eng-form-msg" id="engFormMsg" role="alert"></div>

                <div class="eng-form-footer">
                  <span class="eng-char-counter" id="engCharCounter">1500 ${t.charCount}</span>
                  <button type="submit" class="eng-submit-btn" id="engSubmitBtn">
                    <span>🚀</span>
                    <span>${t.publishBtn}</span>
                  </button>
                </div>
              </form>

              <!-- Comments List -->
              <div class="eng-comments-feed" id="engCommentsFeed">
                <!-- Injected dynamically via DOM elements (textContent) -->
              </div>
            </div>

          </div>
        </div>
      `;

      this.renderCommentsFeed();
    }

    renderStarsHtml(rating) {
      let html = '';
      for (let i = 1; i <= 5; i++) {
        html += `<span style="color: ${i <= rating ? '#DFB15B' : 'rgba(223,177,91,0.25)'}; font-size: 1.15rem;">★</span>`;
      }
      return html;
    }

    renderCommentsFeed() {
      const feed = this.mountEl.querySelector('#engCommentsFeed');
      if (!feed) return;
      const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.ar;

      feed.innerHTML = '';

      if (!this.state.comments || this.state.comments.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'eng-empty-comments';
        emptyDiv.textContent = t.emptyComments;
        feed.appendChild(emptyDiv);
        return;
      }

      this.state.comments.forEach(c => {
        const item = document.createElement('div');
        item.className = 'eng-comment-item';

        const top = document.createElement('div');
        top.className = 'eng-comment-top';

        const authorInfo = document.createElement('div');
        authorInfo.className = 'eng-author-info';

        const avatar = document.createElement('div');
        avatar.className = 'eng-avatar';
        const cleanName = sanitizeText(c.author);
        avatar.textContent = cleanName.charAt(0).toUpperCase() || '👤';

        const metaBox = document.createElement('div');
        const nameEl = document.createElement('h5');
        nameEl.className = 'eng-author-name';
        nameEl.textContent = cleanName;

        const dateEl = document.createElement('span');
        dateEl.className = 'eng-comment-date';
        dateEl.textContent = formatDate(c.createdAt, this.currentLang);

        metaBox.appendChild(nameEl);
        metaBox.appendChild(dateEl);

        authorInfo.appendChild(avatar);
        authorInfo.appendChild(metaBox);

        const starsBox = document.createElement('div');
        starsBox.className = 'eng-comment-stars';
        const r = Number(c.rating) || 5;
        starsBox.textContent = '★'.repeat(r) + '☆'.repeat(5 - r);

        top.appendChild(authorInfo);
        top.appendChild(starsBox);

        const body = document.createElement('p');
        body.className = 'eng-comment-body';
        body.textContent = sanitizeText(c.text);

        item.appendChild(top);
        item.appendChild(body);
        feed.appendChild(item);
      });
    }

    bindEvents() {
      const card = this.mountEl.querySelector('.article-engagement-card');
      if (!card) return;
      const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.ar;

      // 1. Like Button
      const likeBtn = card.querySelector('#engLikeBtn');
      if (likeBtn) {
        likeBtn.onclick = async () => {
          likeBtn.disabled = true;
          const res = await Api.toggleLike(this.articleId);
          this.state.userLiked = res.isLiked;
          this.state.likesCount = res.likesCount;

          likeBtn.classList.toggle('liked', this.state.userLiked);
          likeBtn.setAttribute('aria-pressed', String(this.state.userLiked));
          const heart = likeBtn.querySelector('.eng-heart-icon');
          const txt = likeBtn.querySelector('#engLikeText');
          const count = likeBtn.querySelector('#engLikeCount');
          if (heart) heart.textContent = this.state.userLiked ? '❤️' : '🤍';
          if (txt) txt.textContent = this.state.userLiked ? t.likedBtn : t.likeBtn;
          if (count) count.textContent = `(${this.state.likesCount})`;
          likeBtn.disabled = false;
        };
      }

      // 2. Share Button
      const shareBtn = card.querySelector('#engShareBtn');
      if (shareBtn) {
        shareBtn.onclick = () => {
          const url = window.location.href;
          const title = document.title;
          if (navigator.share) {
            navigator.share({ title, url }).catch(() => {});
          } else {
            const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`;
            window.open(waUrl, '_blank', 'noopener,noreferrer');
          }
        };
      }

      // 3. Interactive Star Ratings
      const starBtns = card.querySelectorAll('#engInteractiveStars .eng-star-btn');
      starBtns.forEach(btn => {
        const starVal = Number(btn.getAttribute('data-star'));

        btn.onmouseenter = () => {
          starBtns.forEach(b => {
            const v = Number(b.getAttribute('data-star'));
            b.classList.toggle('hovered', v <= starVal);
          });
        };

        btn.onmouseleave = () => {
          starBtns.forEach(b => b.classList.remove('hovered'));
        };

        btn.onclick = async () => {
          const res = await Api.saveRating(this.articleId, starVal);
          this.state.userRating = res.userRating;
          this.state.avgRating = res.avgRating;
          this.state.totalRatings = res.totalRatings;

          starBtns.forEach(b => {
            const v = Number(b.getAttribute('data-star'));
            b.classList.toggle('selected', v <= this.state.userRating);
            b.setAttribute('aria-checked', String(v === this.state.userRating));
          });

          const feedback = card.querySelector('#engRatingFeedback');
          if (feedback) feedback.textContent = t.ratedThanks + starVal + '/5 ★';

          const avgEl = card.querySelector('#engRatingAvg');
          if (avgEl) avgEl.textContent = (this.state.avgRating || '5.0').replace('.', this.currentLang === 'ar' ? '٫' : ',');

          const countTag = card.querySelector('#engRatingCountTag');
          if (countTag) {
            const rLabel = this.state.totalRatings === 1 ? t.singleRating : t.ratingsCount;
            countTag.textContent = `(${this.state.totalRatings} ${rLabel})`;
          }
        };
      });

      // 4. Comment Textarea Character Counter
      const textarea = card.querySelector('#engCommentText');
      const counter = card.querySelector('#engCharCounter');
      if (textarea && counter) {
        textarea.oninput = () => {
          const remaining = 1500 - textarea.value.length;
          counter.textContent = `${remaining} ${t.charCount}`;
        };
      }

      // 5. Comment Form Submission
      const form = card.querySelector('#engCommentForm');
      const msgBox = card.querySelector('#engFormMsg');
      const submitBtn = card.querySelector('#engSubmitBtn');
      const authorInput = card.querySelector('#engAuthorInput');
      const ratingSelect = card.querySelector('#engRatingSelect');

      if (form) {
        form.onsubmit = async (e) => {
          e.preventDefault();
          const author = sanitizeText(authorInput.value);
          const text = sanitizeText(textarea.value);
          const rating = Number(ratingSelect.value) || 5;

          if (author.length < 2 || text.length < 3) {
            if (msgBox) {
              msgBox.className = 'eng-form-msg error';
              msgBox.textContent = t.errorFillFields;
            }
            return;
          }

          submitBtn.disabled = true;
          const origBtnText = submitBtn.innerHTML;
          submitBtn.textContent = t.sending;

          try {
            const res = await Api.addComment(this.articleId, {
              author,
              text,
              rating,
              lang: this.currentLang
            });

            if (res && (res.success || res.comment)) {
              const newComm = res.comment || res;
              this.state.comments.unshift(newComm);
              this.renderCommentsFeed();

              const badge = card.querySelector('#engCommentsCountBadge');
              if (badge) badge.textContent = String(this.state.comments.length);

              textarea.value = '';
              if (counter) counter.textContent = `1500 ${t.charCount}`;

              if (msgBox) {
                msgBox.className = 'eng-form-msg success';
                msgBox.textContent = t.submittedSuccess;
                setTimeout(() => { msgBox.style.display = 'none'; }, 5000);
              }
            } else {
              throw new Error('Submission failed');
            }
          } catch (err) {
            if (msgBox) {
              msgBox.className = 'eng-form-msg error';
              msgBox.textContent = t.errorGeneral;
            }
          } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origBtnText;
          }
        };
      }
    }
  }

  // --- 6. Auto Initialization Engine ---
  function initAll() {
    const mountNodes = document.querySelectorAll('.article-engagement');
    mountNodes.forEach(node => {
      if (!node.dataset.initialized) {
        node.dataset.initialized = 'true';
        new ArticleEngagementComponent(node);
      }
    });
  }

  window.initArticleEngagement = initAll;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();
