const TIKTOK_DATA = {
  username: "@lejardindespensees",
  stats: {
    followers: "128.5K",
    likes: "3.4M",
    views: "18.2M"
  },
  
  // UI Labels Translation
  ui: {
    fr: {
      home: "Accueil",
      thinkers: "Philosophes",
      articles: "Articles",
      quotes: "Citations",
      psychology: "Catégories",
      shop: "Boutique",
      about: "À propos",
      followers: "Abonnés",
      likes: "J'aime",
      views: "Vues",
      wisdomTitle: "La Pensée du Jour",
      generateBtn: "Générer une pensée",
      resourcesTitle: "Ressources & Liens utiles",
      videosTitle: "Vidéos Populaires",
      contactTitle: "Collaborations & Contact",
      contactName: "Votre nom / Entreprise",
      contactEmail: "Adresse Email",
      contactMessage: "Votre Message",
      submitBtn: "Envoyer le Message",
      sending: "Envoi en cours...",
      successMsg: "Merci pour votre message ! Nous vous recontacterons très bientôt. ✨🌿",
      errorFields: "Veuillez remplir tous les champs.",
      errorEmail: "Veuillez entrer une adresse email valide.",
      thinkersTitle: "Grands Philosophes",
      articlesTitle: "Articles & Réflexions",
      readMore: "اقرأ المزيد",
      credits: "Conçu avec sagesse, calme et sérénité. ✨🌿",
      placeholderName: "Ex: Jean Dupont",
      placeholderEmail: "Ex: jean.dupont@example.com",
      placeholderMessage: "Bonjour, je souhaiterais collaborer...",
      // Sub-menus
      philosophy: "Philosophie",
      psychologySub: "Psychologie",
      development: "Développement personnel",
      history: "Histoire des idées",
      seeAll: "Voir tous →",
      seeAllThinkers: "Tous les philosophes →",
      searchThinkerPlaceholder: "Rechercher un philosophe...",
      // Thinker Names
      schopenhauerName: "Schopenhauer",
      nietzscheName: "Nietzsche",
      camusName: "Camus",
      marcaureleName: "Marc Aurèle",
      senequeName: "Sénèque",
      kantName: "Kant",
      hegelName: "Hegel",
      // Word download
      downloadWord: "Télécharger Document",
      // Subtitle Bio
      bio: "Philosophie Stoïcienne, Sagesse des grands philosophes et Conseils Psychologiques.",
      // Shop Translation Keys
      shopTitle: "Boutique Stoïcienne",
      shopSubtitle: "Ressources, lectures et objets de sagesse pour votre quotidien.",
      filterAll: "Tous les produits",
      filterDigital: "Produits Numériques",
      filterPhysical: "Objets Physiques",
      addToCart: "Ajouter au panier",
      cartTitle: "Votre Panier",
      cartEmpty: "Votre panier est vide.",
      cartTotal: "Sous-total :",
      checkoutBtn: "Passer la commande",
      checkoutTitle: "Simulation de Paiement",
      checkoutName: "Nom du titulaire",
      checkoutCard: "Numéro de carte (Factice)",
      checkoutSubmit: "Payer en sécurité",
      checkoutSuccess: "Commande validée avec succès ! Merci de votre soutien. 🌿✨",
      // Help & Donations translation keys
      helpTitle: "Support",
      helpSubtitle: "Trouvez des réponses rapides à vos questions sur les guides et notre boutique.",
      donationTitle: "Soutenir le Projet",
      donationSubtitle: "Votre générosité nous aide à continuer de partager la sagesse et à maintenir ce site vivant.",
      donateVisa: "Carte Bancaire (Visa)",
      donatePaypal: "Don via PayPal",
      donateCrypto: "Cryptomonnaies",
      donatePaypalDesc: "Soutenez-nous facilement via votre compte PayPal sécurisé en quelques clics.",
      donateVisaDesc: "Faites un don unique et sécurisé par carte bancaire avec notre simulateur intégré.",
      donateCryptoDesc: "Copiez l'une de nos adresses de portefeuille pour envoyer un don en cryptomonnaies.",
      donateBtn: "Faire un don",
      donateSubmit: "Envoyer le don",
      donationSuccess: "Merci infiniment pour votre généreuse contribution ! 🌿✨",
      donateCustom: "Autre montant",
      readArticle: "Lire l'article",
      readBio: "Lire la biographie",
      featured: "En vedette"
    },
    en: {
      home: "Home",
      thinkers: "Philosophers",
      articles: "Articles",
      quotes: "Quotes",
      psychology: "Categories",
      shop: "Shop",
      about: "About",
      followers: "Followers",
      likes: "Likes",
      views: "Views",
      wisdomTitle: "Quote of the Day",
      generateBtn: "Generate Wisdom",
      resourcesTitle: "Useful Links & Resources",
      videosTitle: "Popular Videos",
      contactTitle: "Collaborations & Contact",
      contactName: "Your Name / Company",
      contactEmail: "Email Address",
      contactMessage: "Your Message",
      submitBtn: "Send Message",
      sending: "Sending...",
      successMsg: "Thank you for your message! We will get back to you very soon. ✨🌿",
      errorFields: "Please fill in all fields.",
      errorEmail: "Please enter a valid email address.",
      thinkersTitle: "Great Philosophers",
      articlesTitle: "Articles & Reflections",
      readMore: "Read More",
      credits: "Designed with wisdom, calm, and serenity. ✨🌿",
      placeholderName: "e.g., John Doe",
      placeholderEmail: "e.g., john.doe@example.com",
      placeholderMessage: "Hello, I would like to collaborate...",
      // Sub-menus
      philosophy: "Philosophy",
      psychologySub: "Psychology",
      development: "Personal Development",
      history: "History of Ideas",
      seeAll: "See all →",
      seeAllThinkers: "All philosophers →",
      searchThinkerPlaceholder: "Search for a philosopher...",
      // Thinker Names
      schopenhauerName: "Schopenhauer",
      nietzscheName: "Nietzsche",
      camusName: "Camus",
      marcaureleName: "Marcus Aurelius",
      senequeName: "Seneca",
      kantName: "Kant",
      hegelName: "Hegel",
      // Word download
      downloadWord: "Download Document",
      // Subtitle Bio
      bio: "Stoic Philosophy, Wisdom of great thinkers, and Psychological Advice.",
      // Shop Translation Keys
      shopTitle: "Stoic Shop",
      shopSubtitle: "Resources, readings, and objects of wisdom for your daily life.",
      filterAll: "All Products",
      filterDigital: "Digital Products",
      filterPhysical: "Physical Objects",
      addToCart: "Add to Cart",
      cartTitle: "Your Cart",
      cartEmpty: "Your cart is empty.",
      cartTotal: "Subtotal:",
      checkoutBtn: "Proceed to Checkout",
      checkoutTitle: "Checkout Simulation",
      checkoutName: "Cardholder Name",
      checkoutCard: "Card Number (Mock)",
      checkoutSubmit: "Pay Securely",
      checkoutSuccess: "Order placed successfully! Thank you for your support. 🌿✨",
      // Help & Donations translation keys
      helpTitle: "Support",
      helpSubtitle: "Find quick answers to your questions about our guides and shop.",
      donationTitle: "Support the Project",
      donationSubtitle: "Your generosity helps us keep sharing wisdom and maintain this site alive.",
      donateVisa: "Credit Card (Visa)",
      donatePaypal: "Donate with PayPal",
      donateCrypto: "Cryptocurrencies",
      donatePaypalDesc: "Support us easily and securely via your PayPal account in just a few clicks.",
      donateVisaDesc: "Make a secure, one-time credit card donation using our built-in simulator.",
      donateCryptoDesc: "Copy one of our wallet addresses to send a cryptocurrency donation.",
      donateBtn: "Donate Now",
      donateSubmit: "Send Donation",
      donationSuccess: "Thank you so much for your generous contribution! 🌿✨",
      donateCustom: "Custom amount",
      readArticle: "Read Article",
      readBio: "Read Biography",
      featured: "Featured"
    },
    ar: {
      home: "الرئيسية",
      articles: "المقالات",
      psychology: "التصنيفات",
      thinkers: "الفلاسفة",
      shop: "المتجر",
      about: "اتصل بنا",
      followers: "المتابعون",
      likes: "الإعجابات",
      views: "المشاهدات",
      wisdomTitle: "حكمة اليوم",
      generateBtn: "توليد حكمة أخرى",
      resourcesTitle: "روابط ومصادر مفيدة",
      videosTitle: "فيديوهات شائعة",
      contactTitle: "التعاون والتواصل",
      contactName: "الاسم / الشركة",
      contactEmail: "البريد الإلكتروني",
      contactMessage: "رسالتك",
      submitBtn: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMsg: "شكراً لرسالتك! سنتواصل معك قريباً جداً. ✨🌿",
      errorFields: "يرجى ملء جميع الحقول.",
      errorEmail: "يرجى إدخال بريد إلكتروني صالح.",
      thinkersTitle: "كبار الفلاسفة",
      articlesTitle: "مقالات وتأملات",
      readMore: "اقرأ المزيد",
      credits: "صُمّم بحكمة، هدوء وسكينة. ✨🌿",
      placeholderName: "مثال: أحمد محمد",
      placeholderEmail: "مثال: ahmed@example.com",
      placeholderMessage: "مرحباً، أود التعاون معكم...",
      // Sub-menus
      philosophy: "الفلسفة",
      psychologySub: "علم النفس",
      development: "التنمية الذاتية",
      history: "تاريخ الأفكار",
      seeAll: "عرض الكل ←",
      seeAllThinkers: "جميع الفلاسفة ←",
      searchThinkerPlaceholder: "ابحث عن فيلسوف...",
      // Thinker Names
      schopenhauerName: "شوبنهاور",
      nietzscheName: "نيتشه",
      camusName: "كامو",
      marcaureleName: "ماركوس أوريليوس",
      senequeName: "سينيكا",
      kantName: "كانط",
      hegelName: "هيغل",
      // Word download
      downloadWord: "تحميل المستند",
      // Subtitle Bio
      bio: "الرواقية، وحكمة كبار الفلاسفة، وتوجيهات نفسية لتعزيز السلام الداخلي.",
      // Shop Translation Keys
      shopTitle: "المتجر الرواقي",
      shopSubtitle: "مصادر وقراءات ومقتنيات حكمة لتطبيق الفلسفة في حياتك اليومية.",
      filterAll: "جميع المنتجات",
      filterDigital: "منتجات رقمية",
      filterPhysical: "مقتنيات مادية",
      addToCart: "أضف إلى السلة",
      cartTitle: "سلتك",
      cartEmpty: "سلة المشتريات فارغة.",
      cartTotal: "الإجمالي الفرعي:",
      checkoutBtn: "إتمام عملية الشراء",
      checkoutTitle: "محاكاة الدفع الإلكتروني",
      checkoutName: "اسم صاحب البطاقة",
      checkoutCard: "رقم البطاقة (تجريبي)",
      checkoutSubmit: "دفع آمن",
      checkoutSuccess: "تم تسجيل طلبك بنجاح! شكراً لدعمكم المتواصل. 🌿✨",
      // Help & Donations translation keys
      helpTitle: "الدعم",
      helpSubtitle: "اعثر على إجابات سريعة لجميع استفساراتك حول الأدلة والتحميل ومتجرنا.",
      donationTitle: "دعم المشروع والعمل",
      donationSubtitle: "مساهمتك السخية تساعدنا على مواصلة نشر الحكمة الفلسفية وتطوير هذا الموقع.",
      donateVisa: "بطاقة الائتمان (Visa)",
      donatePaypal: "تبرع عبر بايبال (PayPal)",
      donateCrypto: "العملات الرقمية المشفرة",
      donatePaypalDesc: "ادعم عملنا بسهولة وأمان عبر حسابك في بايبال ببضع نقرات سريعة.",
      donateVisaDesc: "قدم تبرعاً فورياً وآمناً ببطاقتك المصرفية عبر نظام المحاكاة المتكامل لدينا.",
      donateCryptoDesc: "انسخ أحد عناوين محافظنا لإرسال مساهمتك ودعمك بالعملات المشفرة مباشرة.",
      donateBtn: "تبرع الآن",
      donateSubmit: "إرسال التبرع",
      donationSuccess: "نشكركم جزيل الشكر والامتنان على دعمكم الكريم والسخي! 🌿✨",
      donateCustom: "مبلغ آخر",
      readArticle: "اقرأ المزيد",
      readBio: "اقرأ السيرة",
      featured: "مميز"
    }
  },

  // Translatable Content
  content: {
    fr: {
      displayName: "حكمة ونور | Sagesse & Lumière",
      bio: "Philosophie Stoïcienne, Sagesse des grands penseurs et Conseils Psychologiques pour cultiver la paix d'esprit et le développement personnel. 🏛️🌿✨",
      links: [
        { title: "📖 Télécharger notre Guide Stoïcien Gratuit", url: "https://example.com/guide-stoicien", icon: "book-open", featured: true },
        { title: "🎧 Écouter notre Podcast sur Spotify", url: "https://spotify.com", icon: "headphones", featured: false },
        { title: "✉️ Pensées du Dimanche - Newsletter", url: "https://example.com/newsletter", icon: "mail", featured: false },
        { title: "💬 Rejoindre la Communauté (Telegram)", url: "https://telegram.org", icon: "message-circle", featured: false }
      ],
      videos: [
        { id: "vid1", title: "Marc Aurèle : 3 maximes stoïciennes pour rester calme face aux critiques 🏛️", views: "1.2M", likes: "250K", duration: "01:24", tags: ["#stoicisme", "#calme"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid2", title: "Sénèque : Le secret du bonheur réside dans l'instant présent 🌿", views: "890K", likes: "185K", duration: "01:05", tags: ["#sagesse", "#seneque"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid3", title: "Socrate : Connais-toi toi-même - Signification en psychologie 🧠", views: "750K", likes: "140K", duration: "01:40", tags: ["#socrate", "#psychologie"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid4", title: "Marc Aurèle : Comment faire face aux obstacles et devenir plus fort 💪", views: "620K", likes: "115K", duration: "00:58", tags: ["#stoicisme", "#resilience"], youtubeId: "dQw4w9WgXcQ" }
      ],
      quotes: [
        { text: "Ce qui trouble les hommes, ce ne sont pas les choses, mais les jugements qu'ils portent sur les choses.", author: "Épictète (Stoïcisme)" },
        { text: "Une vie sans examen ne vaut pas la peine d'être vécue.", author: "Socrate (Philosophie)" },
        { text: "La vie est comme une pièce de théâtre : ce qui importe, ce n'est pas qu'elle dure longtemps, mais qu'elle soit bien jouée.", author: "Sénèque (Philosophie)" },
        { text: "Celui qui a un pourquoi dans la vie peut supporter presque n'importe quel comment.", author: "Friedrich Nietzsche" },
        { text: "Je ne suis pas ce qui m'est arrivé, je suis ce que je choisis de devenir.", author: "Carl Jung (Psychologie)" },
        { text: "Le bonheur de votre vie dépend de la qualité de vos pensées.", author: "Marc Aurèle (Stoïcisme)" }
      ],
      advices: [
        { category: "Stoïcisme", title: "La Dichotomie du Contrôle", icon: "shield", desc: "Distinguez ce qui dépend de vous (vos actions, jugements) de ce qui n'en dépend pas. Concentrez votre énergie sur ce que vous contrôlez.", thinker: "Épictète" },
        { category: "Psychologie", title: "Le Biais de Négativité", icon: "brain", desc: "Notre cerveau repère naturellement le danger. Rééquilibrez cela en savourant les aspects positifs durant 20 secondes.", thinker: "Dr. Rick Hanson" },
        { category: "Développement", title: "La Psychologie des Habitudes Atomiques", icon: "trending-up", desc: "S'améliorer de seulement 1% chaque jour produit des résultats 37 fois supérieurs au bout d'un an. Soyez régulier.", thinker: "James Clear" }
      ],
      thinkers: [
        {
          id: "marcaurele",
          featured: true,
          name: "Marc Aurèle",
          era: "121 - 180 ap. J.-C.",
          school: "Stoïcisme",
          image: "thinkers/images/marcaurele.jpg",
          bio: "Empereur romain et philosophe, auteur des 'Pensées pour moi-même', guide intemporel de résilience et de discipline intérieure.",
          body: [
            "Marc Aurèle (121 - 180 ap. J.-C.) fut le dernier des 'cinq bons empereurs' de l'Empire romain et l'une des figures les plus marquantes du stoïcisme tardif. Surnommé le 'roi-philosophe', il dut faire face tout au long de son règne à des crises majeures : la peste antonine qui décima la population, des rébellions internes, et des guerres incessantes sur les frontières nord contre les peuples germaniques.",
            "C'est précisément dans le tumulte des campagnes militaires, sous sa tente militaire au bord du Danube, qu'il rédigea son journal intime. Jamais destiné à la publication, ce recueil de notes quotidiennes est aujourd'hui universellement connu sous le nom de 'Pensées pour moi-même' (ou Meditations). Ce livre constitue un exercice spirituel d'auto-examen et de renforcement psychologique permanent face aux responsabilités écrasantes du pouvoir.",
            "La philosophie de Marc Aurèle repose sur l'idée de l''Esprit comme Citadelle Intérieure'. Il soutient que si nous ne pouvons pas contrôler les événements extérieurs (la maladie, les trahisons, les guerres), nous demeurons maîtres absolus de nos jugements, de nos valeurs et de nos réactions. Pour lui, la colère est une faiblesse irrationnelle et l'indifférence aux choses extérieures est la clé de la liberté de l'âme.",
            "Son éthique exigeante insiste également sur le devoir social et le service à la communauté (le concept stoïcien de cosmopolitisme). Il se rappelait constamment qu'en tant qu'être humain, il était né pour coopérer avec les autres, et non pour s'en plaindre. Son œuvre reste à ce jour l'un des guides de développement personnel et de leadership éthique les plus lus à travers le monde."
          ]
        },
        {
          id: "seneque",
          featured: true,
          name: "Sénèque",
          era: "4 av. J.-C. - 65 ap. J.-C.",
          school: "Stoïcisme",
          image: "thinkers/images/seneque.jpg",
          bio: "Philosophe stoïcien, dramaturge et homme d'État romain, célèbre pour ses lettres sur la brièveté de la vie, la maîtrise des passions et la mort.",
          body: [
            "Lucius Annaeus Seneca, né à Cordoue en 4 av. J.-C. et mort à Rome en 65 ap. J.-C., est l'un des plus brillants penseurs du stoïcisme impérial. Intellectuel brillant, orateur hors pair et auteur de tragédies poignantes, he devint le précepteur puis le conseiller principal du jeune empereur Néron, tentant de guider l'Empire avec sagesse et modération au milieu des intrigues politiques de la cour romaine.",
            "Sénèque a vécu une vie pleine de contrastes : exilé en Corse par l'empereur Claude, il fut rappelé pour accumuler une fortune colossale qui suscita les critiques de ses contemporains. Pourtant, dans ses écrits, il défend constamment une attitude stoïcienne de détachement vis-à-vis des richesses matérielles, affirmant que l'homme sage doit savoir posséder la fortune sans se laisser posséder par elle.",
            "Son œuvre philosophique majeure, en particulier les 'Lettres à Lucilius' et les traités 'De la brièveté de la vie' ou 'De la tranquillité de l'âme', offre une sagesse profondément pratique. Sénèque y aborde le temps comme notre ressource la plus précieuse et dénonce la dispersion mentale qui nous fait gaspiller notre existence. Il y donne des conseils concrets pour surmonter l'anxiété, gérer la colère et apprivoiser la peur du futur.",
            "Accusé à tort de complicité dans un complot contre Néron, il reçut l'ordre de mettre fin à ses jours. Sa mort calme et digne, entouré de ses amis et de sa femme Paulina à qui il dicta ses dernières paroles philosophiques, est restée dans l'histoire comme l'application pratique ultime de sa philosophie stoïcienne face à la fatalité et à l'injustice politique."
          ]
        },
        {
          id: "camus",
          featured: true,
          name: "Albert Camus",
          era: "1913 - 1960",
          school: "Absurdisme",
          image: "thinkers/images/camus.jpg",
          bio: "Écrivain, dramaturge et philosophe français, lauréat du prix Nobel de littérature, théoricien de l'Absurde et de la Révolte humaniste.",
          body: [
            "Albert Camus (1913 - 1960), né en Algérie dans un milieu très modeste et orphelin de père, a développé une philosophie lumineuse ancrée dans la condition humaine et la recherche de justice. Romancier et dramaturge de génie, journaliste engagé dans la Résistance française pendant la Seconde Guerre mondiale, il a reçu le prix Nobel de littérature en 1957 à seulement 44 ans pour l'ensemble de son œuvre.",
            "Camus est le créateur de la 'philosophie de l'Absurde'. Il définit l'absurde non comme une simple négation, mais comme la confrontation inévitable entre la quête éperdue de sens de l'être humain et le silence irrationnel et infini du monde. Dans son essai fondateur 'Le Mythe de Sisyphe', il utilise le héros mythologique condamné à rouler éternellement son rocher pour illustrer cette condition humaine : il faut imaginer Sisyphe heureux car il choisit d'accomplir son devoir et de mépriser son châtiment par sa conscience.",
            "Pour Camus, la prise de conscience de l'absurde ne doit pas mener au suicide ou au désespoir, mais à la révolte, à la liberté et à la passion de vivre. C'est le concept de 'l'homme révolté' : se révolter contre l'injustice du monde et la mort donne un sens immédiat et solidaire à notre existence. 'Je me révolte, donc nous sommes', écrit-il, posant les bases d'un humanisme sans concession.",
            "Sa rupture amicale et philosophique avec Jean-Paul Sartre, en raison de son refus d'accepter la violence politique au nom de l'idéologie révolutionnaire, témoigne de son intégrité morale. Ses œuvres majeures, comme 'L'Étranger', 'La Peste' et 'La Chute', continuent de résonner aujourd'hui comme des appels vibrants à la lucidité, à la liberté et à la solidarité humaine."
          ]
        },
        {
          id: "nietzsche",
          featured: false,
          name: "Friedrich Nietzsche",
          era: "1844 - 1900",
          school: "Existentialisme / Vitalisme",
          image: "thinkers/images/nietzsche.jpg",
          bio: "Philosophe allemand majeur, célèbre pour son rejet de la morale traditionnelle, son concept de Surhomme, la volonté de puissance et l'éternel retour.",
          body: [
            "Friedrich Nietzsche (1844 - 1900) est l'un des penseurs les plus dérangeants et révolutionnaires de l'histoire moderne. Nommé professeur de philologie classique à l'université de Bâle à seulement 24 ans, il dut rapidement démissionner en raison de graves problèmes de santé physiques chroniques. Il passa le reste de sa vie à errer dans les Alpes suisses (notamment à Sils-Maria) et en Italie, écrivant une œuvre philosophique incisive et poétique.",
            "Nietzsche a mené une critique radicale de la métaphysique occidentale, de la religion chrétienne et de la morale traditionnelle qu'il qualifie de 'morale d'esclaves' ou de ressentiment. En déclarant que 'Dieu est mort', il annonçait la crise du nihilisme moderne (la perte des valeurs absolues) et appelait l'humanité à surmonter ce vide en créant ses propres valeurs vitales.",
            "Au cœur de sa philosophie se trouvent les concepts de 'volonté de puissance' (non pas une domination tyrannique, mais une pulsion créatrice d'expansion de soi), de 'Surhomme' (l'individu accompli qui transcende les dogmes et affirme sa vie créative) et de l''Amor Fati' (l'amour inconditionnel de son propre destin avec ses joies et ses plus profondes souffrances).",
            "Son œuvre poétique majeure, 'Ainsi parlait Zarathustra', et ses écrits critiques comme 'Par-delà le bien et le mal' et 'La Généalogie de la morale' ont exercé une influence colossale sur l'existentialisme, la psychanalyse freudienne, la littérature du XXe siècle et la philosophie postmoderne, incitant l'homme à se libérer des illusions conformistes pour s'accomplir pleinement."
          ]
        },
        {
          id: "schopenhauer",
          featured: false,
          name: "Arthur Schopenhauer",
          era: "1788 - 1860",
          school: "Pessimisme",
          image: "thinkers/images/schopenhauer.jpg",
          bio: "Philosophe allemand célèbre pour sa théorie de la Volonté comme essence métaphysique du monde et son pessimisme existentiel influencé par la sagesse orientale.",
          body: [
            "Arthur Schopenhauer (1788 - 1860) est un philosophe allemand majeur dont la pensée originale a fait le pont entre le rationalisme occidental et les philosophies orientales (notamment le bouddhisme et l'hindouisme des Upanishads). Ayant vécu une grande partie de sa vie dans l'isolement à Francfort et dans l'ombre académique de son grand rival Hegel, il n'a connu une gloire tardive qu'à la fin de sa vie.",
            "Son œuvre maîtresse, 'Le Monde comme volonté et comme représentation', avance l'idée que le monde physique que nous percevons n'est qu'une illusion (la représentation) derrière laquelle se cache une force métaphysique brute, aveugle et irrationnelle : la 'Volonté de vivre'. Cette volonté pousse incessamment tous les êtres vivants à désirer sans jamais être satisfaits, ce qui engendre une souffrance perpétuelle et inhérente à l'existence.",
            "Face à cette tragédie de la vie, Schopenhauer propose trois voies de libération ou d'apaisement temporaire. La première est l'expérience esthétique (la contemplation de l'art et surtout de la musique, qui nous détachent du vouloir-vivre). La seconde est la compassion et l'éthique de la pitié (reconnaître la souffrance commune de tous les êtres). La troisième est l'ascétisme et le renoncement aux désirs matériels (proche du Nirvana bouddhique).",
            "Son style littéraire limpide et percutant, ainsi que son analyse psychologique des désirs et de l'inconscient, ont profondément marqué des génies comme Friedrich Nietzsche, Sigmund Freud (qui a trouvé chez Schopenhauer les prémices de sa théorie des pulsions), Richard Wagner, Albert Einstein et de nombreux écrivains comme Marcel Proust et Léon Tolstoï."
          ]
        },
        {
          id: "kant",
          featured: false,
          name: "Emmanuel Kant",
          era: "1724 - 1804",
          school: "Idéalisme Allemand",
          image: "thinkers/images/kant.jpg",
          bio: "Penseur majeur des Lumières, théoricien de la connaissance critique et de l'éthique du devoir universel.",
          body: [
            "Emmanuel Kant (1724 - 1804), né et mort à Königsberg en Prusse-Orientale (aujourd'hui Kaliningrad), est l'une des figures les plus monumentales de la philosophie occidentale. Homme d'une régularité légendaire et d'une discipline de fer, il a enseigné à l'université de sa ville natale tout en opérant ce qu'il a appelé une 'révolution copernicienne' dans l'histoire de la pensée humaine.",
            "Dans sa célèbre 'Critique de la raison pure' (1781), Kant cherche à dépasser le conflit entre le rationalisme et l'empirisme. Il soutient que notre esprit ne se contente pas de recevoir passivement les données du monde extérieur, mais qu'il les organise activement à travers les structures a priori de notre sensibilité (l'espace et le temps) et de notre entendement (les catégories). Nous ne pouvons ainsi connaître que les 'phénomènes' (les choses telles qu'elles nous apparaissent) et non les 'noumènes' (la chose en soi).",
            "Dans le domaine éthique, exposé dans la 'Critique de la raison pratique', Kant formule l'éthique déontologique du devoir. La moralité d'une action dépend de l'intention pure et de sa conformité à l'impératif catégorique : 'Agis uniquement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle.' Il a posé la dignité absolue de la personne humaine comme un principe sacré, affirmant qu'un être humain doit toujours être traité comme une fin en soi, et jamais simplement comme un moyen.",
            "Son projet philosophique pour une 'Paix perpétuelle' préfigurait déjà la création des institutions internationales modernes comme l'ONU. La rigueur logique et l'élévation morale de l'œuvre de Kant continuent d'irriguer la philosophie du droit, la théorie politique moderne et les débats contemporains sur la justice et les droits de l'homme."
          ]
        },
        {
          id: "hegel",
          featured: false,
          name: "G. W. F. Hegel",
          era: "1770 - 1831",
          school: "Idéalisme Allemand",
          image: "thinkers/images/hegel.jpg",
          bio: "Créateur d'un système philosophique dialectique grandiose expliquant l'évolution de l'Esprit à travers l'Histoire et le temps.",
          body: [
            "Georg Wilhelm Friedrich Hegel (1770 - 1831) est le géant de l'idéalisme allemand et l'un des penseurs les plus influents et complexes du XIXe siècle. Professeur d'université de premier plan, il a développé un système philosophique complet et encyclopédique visant à unifier la logique, la nature, l'art, la religion et l'histoire au sein d'une seule pensée dynamique.",
            "Le noyau de la philosophie hégélienne réside dans la 'dialectique'. Pour Hegel, la réalité et la pensée ne sont pas statiques mais progressent à travers des contradictions internes qui se résolvent pour atteindre une vérité supérieure (le processus de thèse, antithèse et synthèse, connu sous le concept d'Aufhebung). L'Histoire humaine n'est pas une suite d'accidents aléatoires, mais la marche de l'Esprit (Geist) vers la pleine conscience de sa propre liberté.",
            "Dans sa célèbre phénoménologie de l'esprit, il introduit la figure de la 'dialectique du maître et de l'esclave', qui montre comment la conscience de soi naît d'une lutte à mort pour la reconnaissance mutuelle. Ce concept a révolutionné l'analyse psychologique de la domination et de la dépendance humaine.",
            "L'impact de Hegel sur la pensée ultérieure est colossal : sa philosophie de l'histoire a été réinterprétée de manière matérialiste par Karl Marx pour donner naissance au marxisme, et sa méthode dialectique a inspiré l'existentialisme de Sartre, la phénoménologie moderne, la psychanalyse lacanienne et la théorie critique. Comprendre Hegel reste indispensable pour décrypter l'évolution des mouvements politiques et sociaux modernes."
          ]
        }
      ],
      articles: [
        {
          category: "philosophy",
          file: "stoicisme-force-calme.docx",
          image: "stoicisme-roof.jpg",
          featured: true,
          title: "Le stoïcisme : philosophie de force et de calme face à la vie",
          readTime: "12 min read",
          desc: "Un guide approfondi sur la façon dont la philosophie stoïcienne antique construit une résilience inébranlable et une paix de l'esprit durable face aux crises.",
          body: [
            "Dans un monde moderne caractérisé par des flux constants d'informations, une pression professionnelle croissante et une incertitude existentielle globale, la quête de tranquillité d'esprit est devenue une priorité cruciale. C'est dans ce contexte que le stoïcisme, une école philosophique fondée à Athènes au IIIe siècle av. J.-C. par Zénon de Cition, connaît une renaissance spectaculaire. Conçue à l'origine non comme une théorie métaphysique abstraite mais comme une médecine de l'âme, cette philosophie offre des clés universelles pour affronter les épreuves existentielles avec force et clarté.",
            "Les trois piliers du stoïcisme impérial romain — représentés par l'esclave affranchi Épictète, l'homme d'État et dramaturge Sénèque, et l'empereur Marc Aurèle — illustrent la plasticité et l'universalité de cette doctrine. Qu'il s'agisse de supporter les chaînes de l'esclavage, de naviguer dans les eaux corrompues de la cour impériale ou de gouverner le plus grand empire du monde en période de pandémie et de guerre, le stoïcisme enseigne une méthode identique : la restructuration cognitive de notre rapport au monde.",
            "Le principe fondamental, formulé par Épictète dans son Enchiridion (Manuel), est la célèbre distinction appelée 'la dichotomie du contrôle'. Les stoïciens partagent le monde en deux catégories étanches. D'une part, les choses qui dépendent de nous : nos opinions, nos désirs, nos jugements et nos décisions. D'autre part, les choses qui ne dépendent pas de nous : notre corps physique, notre réputation, la richesse, le passé, le futur, et les actions d'autrui. La souffrance psychologique ne provient jamais des événements eux-mêmes, mais de notre tentative illusoire de contrôler ce qui nous échappe.",
            "En libérant notre énergie mentale de l'obsession du contrôle extérieur, nous pouvons la rediriger pleinement vers nos propres vertus et choix éthiques. Le sage stoïcien ne subit pas les événements avec une passivité résignée (un contresens historique fréquent du mot 'stoïque'), mais il agit activement pour le bien commun tout en acceptant sereinement les résultats qu'il ne peut influencer. C'est l'essence du concept d'*Amor Fati* : embrasser son destin non comme une punition, mais comme la matière première de sa propre excellence morale.",
            "Un autre exercice stoïcien central est la méditation sur la mortalité, le *Memento Mori*. Loin d'être une pratique morbide, se rappeler quotidiennement que notre temps sur Terre est limité agit comme un puissant filtre de clarté. Cela permet de relativiser les petits désagréments du quotidien, de désamorcer les conflits d'ego stériles et de savourer pleinement l'instant présent. Sénèque rappelle dans *De la brièveté de la vie* que nous ne manquons pas de temps, mais que nous en perdons beaucoup en le gaspillant dans des distractions vaines.",
            "Enfin, la pratique de la *Premeditatio Malorum* (la préméditation des maux) consiste à anticiper mentalement les obstacles, les échecs ou les pertes avant qu'ils ne surviennent. En visualisant le pire scénario possible de manière calme et rationnelle, le stoïcien s'immunise contre le choc de la surprise et prépare des réponses adaptées. Lorsque la crise survient, elle ne trouve pas le philosophe au dépourvu, car il l'a déjà vaincue en pensée. Le stoïcisme moderne n'est donc pas une suppression des émotions, mais une éducation de la raison pour cultiver un esprit stable, digne et serein en toutes circonstances."
          ]
        },
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          image: "stoicisme-modern.jpg",
          featured: true,
          title: "Introduction pratique au stoïcisme moderne",
          readTime: "9 min read",
          desc: "Guide d'exercices concrets pour intégrer la sagesse stoïcienne dans votre routine quotidienne et dompter l'anxiété.",
          body: [
            "Le stoïcisme n'a jamais été conçu pour être débattu dans l'isolement des bibliothèques universitaires, mais pour être pratiqué activement sur la place publique et dans le secret de sa conscience. Face à l'anxiété, à la surcharge cognitive et aux sollicitations constantes du XXIe siècle, cette philosophie ancienne propose une boîte à outils pragmatique pour structurer nos journées et préserver notre équilibre mental. Ce guide présente trois rituels stoïciens essentiels à intégrer dans votre routine quotidienne.",
            "Le premier rituel est la méditation matinale. Dès le réveil, avant de consulter vos écrans, prenez quelques minutes pour vous projeter dans votre journée. C'est l'exercice de la préparation. Suivez le conseil de Marc Aurèle : 'Dis-toi chaque matin : je vais rencontrer des indiscrets, des ingrats, des insolents, des menteurs, des jaloux. Mais je ne peux être blessé par aucun d'eux car je connais la beauté du bien.' Anticiper les frictions relationnelles et les imprévus techniques permet de désarmer vos réactions instinctives de colère et de frustration.",
            "Le deuxième rituel est la tenue d'un journal philosophique tout au long de la journée. À l'image de Marc Aurèle écrivant ses *Pensées*, le fait de coucher sur le papier vos réactions émotionnelles permet de créer une distance salutaire entre l'événement et votre jugement. Lorsque vous ressentez une bouffée d'anxiété ou de colère, écrivez-la de manière objective, comme un observateur neutre. Posez-vous la question clé d'Épictète : 'Cette situation dépend-elle de moi, ou non ?' Si elle n'en dépend pas, écrivez : 'Cela ne me concerne pas' et concentrez-vous sur votre action présente.",
            "Le troisième rituel est l'examen de conscience du soir. Avant de dormir, passez en revue votre journée à l'aide de trois questions simples mais rigoureuses : Qu'ai-je fait de bien aujourd'hui ? Où ai-je failli à mes principes de sagesse ? Comment puis-je m'améliorer demain ? Cet auto-examen bienveillant, recommandé par Sénèque, permet de fermer la journée sans regrets et de programmer votre esprit pour une nuit de repos paisible. Pratiqué avec régularité, ce triptyque quotidien transforme la philosophie en un bouclier mental indestructible."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          image: "carl-jung-shadow.jpg",
          featured: false,
          title: "Comprendre l'ombre selon Carl Jung",
          readTime: "10 min read",
          desc: "Une exploration approfondie de l'inconscient jungien pour apprendre à reconnaître et intégrer vos aspects refoulés.",
          body: [
            "Dans la vaste cartographie de la psyché humaine établie par le psychiatre suisse Carl Gustav Jung, le concept de 'l'Ombre' occupe une place centrale et fascinante. Jung définit l'ombre comme la part inconsciente de notre personnalité qui abrite tous les traits de caractère, désirs, pulsions et souvenirs que notre moi conscient (l'ego) rejette et refuse d'admettre. Formée dès la petite enfance par le biais de l'éducation et de la socialisation, l'ombre est le réceptacle de ce que la société et notre famille jugent 'inacceptable' ou 'mauvais'.",
            "Cependant, le refoulement de ces aspects dans les profondeurs de l'inconscient ne signifie pas leur élimination. Au contraire, plus l'ombre est rejetée et ignorée, plus elle accumule de l'énergie psychique et cherche à se manifester de manière incontrôlée. Elle s'exprime alors à travers des projections psychologiques intenses : nous projetons notre propre ombre sur les autres en ressentant une irritation irrationnelle face à des défauts chez autrui qui sont, en réalité, nos propres traits refoulés. Elle surgit aussi lors de colères explosives ou de comportements d'auto-sabotage.",
            "Jung affirmait de manière célèbre : 'Jusqu'à ce que vous rendiez l'inconscient conscient, il dirigera votre vie et vous l'appellerez destin.' Le travail thérapeutique consiste donc à faire face à son ombre avec courage et honnêteté. L'intégration de l'ombre n'est pas une capitulation devant nos pulsions sombres, mais une reconnaissance consciente de leur existence. C'est en embrassant nos parts de vulnérabilité, de peur et de colère que nous pouvons canaliser leur force brute vers la créativité et la maturité personnelle.",
            "Intégrer son ombre est l'étape essentielle du processus d'individuation — le cheminement vers la complétude et la réalisation de son Soi véritable. En cessant de projeter nos conflits intérieurs sur le monde extérieur, nous développons une empathie authentique pour les autres et une paix intérieure solide. C'est en traversant et en éclairant notre propre obscurité que nous pouvons enfin accéder à notre véritable lumière psychologique."
          ]
        },
        {
          category: "development",
          file: "habitudes-atomiques.docx",
          image: "atomic-habits.jpg",
          featured: false,
          title: "La psychologie des habitudes atomiques",
          readTime: "8 min read",
          desc: "Comment de micro-changements de 1% par jour s'accumulent pour transformer radicalement votre identité et vos résultats.",
          body: [
            "Nous tombons fréquemment dans le piège de croire que la transformation de notre vie exige des révolutions brutales, des efforts surhumains et des résolutions héroïques au Nouvel An. La psychologie comportementale moderne, popularisée par James Clear, démontre au contraire que le véritable succès durable réside dans la mise en place de micro-changements quotidiens, appelés 'habitudes atomiques'. Une habitude atomique est une petite routine de 2 minutes qui, bien que négligeable à court terme, s'accumule de manière exponentielle avec le temps.",
            "L'impact mathématique de cette approche est stupéfiant. Si vous parvenez à vous améliorer de seulement 1% chaque jour dans un domaine, vous serez 37 fois meilleur au bout d'un an. Inversement, si vous régressez de 1% par jour, vous déclinerez presque jusqu'à zéro. Cette logique déplace notre attention des objectifs finaux (les résultats) vers les systèmes (les processus quotidiens). Les objectifs définissent la direction que vous voulez prendre, mais seuls vos systèmes déterminent votre progression réelle.",
            "Pour concevoir des habitudes durables, Clear propose quatre lois fondamentales basées sur la boucle du comportement : le signal, l'envie, la réponse et la récompense. Pour créer une bonne habitude, il faut : 1. La rendre évidente (planifier précisément le moment et le lieu) ; 2. La rendre attrayante (l'associer à une activité plaisante) ; 3. La rendre facile (réduire la friction au maximum) ; 4. La rendre satisfaisante (s'accorder une récompense immédiate). Pour briser une mauvaise habitude, il suffit d'inverser ces règles.",
            "Le secret ultime du changement réside dans le lien entre vos habitudes et votre identité. Le changement de comportement le plus profond ne consiste pas à décider de *ce que vous voulez obtenir*, mais de décider de *qui vous voulez devenir*. Chaque action que vous entreprenez est un vote pour le type de personne que vous souhaitez être. En accumulant de petites victoires quotidiennes, vous apportez des preuves tangibles à votre cerveau de votre nouvelle identité, construisant une confiance en soi indestructible."
          ]
        }
      ],
      products: [
        { id: "guide_stoic", category: "digital", title: "📖 Le Guide Stoïcien Quotidien (E-book PDF)", price: 9.99, formattedPrice: "9,99 €", desc: "Un manuel pratique de 120 pages pour surmonter l'anxiété moderne, renforcer l'autodiscipline et cultiver une sérénité inébranlable au quotidien.", icon: "book-open" },
        { id: "journal_stoic", category: "digital", title: "📓 Journal Stoïcien Numérique (Notion / PDF)", price: 14.99, formattedPrice: "14,99 €", desc: "Votre compagnon d'écriture interactif pré-rempli de 100 questions guidées, exercices et bilans hebdomadaires inspirés de Marc Aurèle.", icon: "book" },
        { id: "wallpapers_stoic", category: "digital", title: "🖼️ Pack de 3 Fonds d'Écran Philo (4K)", price: 4.99, formattedPrice: "4,99 €", desc: "Sublimez votre smartphone ou PC avec ces créations graphiques minimalistes contenant des citations percutantes de Sénèque et d'Épictète.", icon: "image" },
        { id: "poster_stoic", category: "physical", title: "🏛️ Poster de Sagesse - Marc Aurèle (Physique)", price: 19.99, formattedPrice: "19,99 €", desc: "Impression premium mate grand format (50x70 cm) mettant en valeur la plus célèbre formule de l'empereur stoïcien. Livraison gratuite.", icon: "film" },
        { id: "coin_stoic", category: "physical", title: "🪙 Pièce stoïcienne \"Memento Mori\" (Physique)", price: 12.99, formattedPrice: "12,99 €", desc: "Une pièce en bronze gravée à porter sur soi comme rappel tangible de vivre pleinement l'instant présent. Sac de transport inclus.", icon: "award" }
      ],
      faq: [
        {
          q: "Comment puis-je télécharger les guides Word (.docx) ?",
          a: "Chaque article sur la page dédiée des Articles comporte un bouton 'Télécharger Document'. En cliquant dessus, le fichier Word (.docx) associé à l'article se télécharge automatiquement sur votre appareil. Vous pouvez également retrouver ces documents physiques dans le répertoire 'files/' de votre dossier de projet."
        },
        {
          q: "Quels sont les délais de livraison pour les posters et pièces physiques ?",
          a: "Les articles physiques de notre boutique (posters et pièces Memento Mori) sont expédiés sous 24 à 48 heures. La livraison prend généralement entre 5 et 7 jours ouvrés en Europe, et elle est entièrement gratuite."
        },
        {
          q: "Puis-je modifier librement les guides après téléchargement ?",
          a: "Oui, tout à fait ! Les documents téléchargeables sont fournis au format standard Microsoft Word (.docx). Vous pouvez donc les ouvrir avec n'importe quel traitement de texte (Word, OpenOffice, Google Docs) pour ajouter vos propres notes, surligner des passages ou personnaliser le texte selon vos besoins."
        }
      ]
    },
    en: {
      displayName: "حكمة ونور | Wisdom & Light",
      bio: "Stoic Philosophy, Wisdom of great thinkers, and Psychological Advice to cultivate peace of mind and personal development. 🏛️🌿✨",
      links: [
        { title: "📖 Download our Free Stoic Guide", url: "https://example.com/free-stoic-guide", icon: "book-open", featured: true },
        { title: "🎧 Listen to our Podcast on Spotify", url: "https://spotify.com", icon: "headphones", featured: false },
        { title: "✉️ Sunday Thoughts - Weekly Newsletter", url: "https://example.com/newsletter", icon: "mail", featured: false },
        { title: "💬 Join the Reflection Community (Telegram)", url: "https://telegram.org", icon: "message-circle", featured: false }
      ],
      videos: [
        { id: "vid1", title: "Marcus Aurelius: 3 stoic maxims to stay calm under criticism 🏛️", views: "1.2M", likes: "250K", duration: "01:24", tags: ["#stoicism", "#calme"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid2", title: "Seneca: The secret of happiness lies in the present moment 🌿", views: "890K", likes: "185K", duration: "01:05", tags: ["#wisdom", "#seneca"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid3", title: "Socrates: Know thyself - Meaning in modern psychology 🧠", views: "750K", likes: "140K", duration: "01:40", tags: ["#socrates", "#psychology"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid4", title: "Marcus Aurelius: How to face obstacles to become stronger 💪", views: "620K", likes: "115K", duration: "00:58", tags: ["#stoicism", "#resilience"], youtubeId: "dQw4w9WgXcQ" }
      ],
      quotes: [
        { text: "Men are disturbed not by things, but by the views which they take of things.", author: "Epictetus (Stoicism)" },
        { text: "The unexamined life is not worth living.", author: "Socrates (Philosophy)" },
        { text: "Life is like a play: what matters is not how long it lasts, but how well it is acted.", author: "Seneca (Philosophy)" },
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung (Psychology)" },
        { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius (Stoicism)" }
      ],
      advices: [
        { category: "Stoicism", title: "Dichotomy of Control", icon: "shield", desc: "Distinguish between what is up to you (actions, judgments) and what is not. Focus your energy on what you control.", thinker: "Epictetus" },
        { category: "Psychology", title: "The Negativity Bias", icon: "brain", desc: "Our brain naturally scans for danger. Rebalance this by actively savoring positive experiences for 20 seconds.", thinker: "Dr. Rick Hanson" },
        { category: "Development", title: "The Compound Effect of Habits", icon: "trending-up", desc: "Getting 1% better every day yields results 37 times higher after one year. Consistency beats intensity.", thinker: "James Clear" }
      ],
      thinkers: [
        {
          id: "marcaurele",
          featured: true,
          name: "Marcus Aurelius",
          era: "121 - 180 AD",
          school: "Stoicism",
          image: "thinkers/images/marcaurele.jpg",
          bio: "Roman Emperor and philosopher, author of 'Meditations', a timeless blueprint for inner resilience and self-discipline.",
          body: [
            "Marcus Aurelius (121 - 180 AD) was the last of the 'Five Good Emperors' who governed the Roman Empire. Often referred to as the 'Philosopher-King', his reign was far from peaceful, marked by devastating military challenges, borders incursions, the Antonine Plague, and domestic revolts.",
            "During his arduous military campaigns in Pannonia, he wrote his private notes, which were later collected and published under the title 'Meditations'. Intended solely as a personal diary for self-guidance and self-correction, these writings have become one of the greatest guides to Stoic philosophy ever written.",
            "His philosophy teaches that while we cannot govern external circumstances, we are the absolute masters of our own minds and reactions—a concept he referred to as the 'Inner Citadel'. He asserted that anger is a sign of weakness, and that we must learn to master our impulses.",
            "Marcus Aurelius also emphasized duty, social responsibility, and human cooperation. His writings remain an essential resource for modern leadership, self-discipline, and psychological resilience under pressure."
          ]
        },
        {
          id: "seneque",
          featured: true,
          name: "Seneca",
          era: "4 BC - 65 AD",
          school: "Stoicism",
          image: "thinkers/images/seneque.jpg",
          bio: "Imperial advisor, dramatist, and Stoic philosopher, famous for his essays on the shortness of life, death, and mastering the passions.",
          body: [
            "Seneca the Younger (4 BC - 65 AD) was a Roman Stoic philosopher, statesman, and dramatist. Serving as advisor to Emperor Nero, he was one of the wealthiest and most influential figures in the Roman Empire.",
            "His famous 'Letters to Lucilius' offer practical Stoic advice on dealing with grief, anger, anxiety, and the shortness of life. He championed philosophy not as an abstract theory, but as an essential daily practice.",
            "Sentenced to death by Nero, Seneca's calm, deliberate suicide became a legendary symbol of Stoic composure and virtue in the face of death.",
            "Seneca's legacy is defined by his deep understanding of time as our most valuable resource. His writings continue to inspire readers worldwide to live with intention, self-possession, and wisdom."
          ]
        },
        {
          id: "camus",
          featured: true,
          name: "Albert Camus",
          era: "1913 - 1960",
          school: "Absurdism",
          image: "thinkers/images/camus.jpg",
          bio: "French writer and philosopher, Nobel laureate, author of 'The Stranger' and 'The Myth of Sisyphus' dealing with the absurdity of existence.",
          body: [
            "Born in Algeria in 1913 and dying in 1960, Albert Camus was a French Nobel Prize-winning author and philosopher. He is renowned as the primary architect of the philosophy of the Absurd.",
            "Camus explored the conflict between the human drive to find meaning and the cold, silent indifference of the universe. In 'The Myth of Sisyphus', he argued that rather than resigning to despair, one must embrace the Absurd and live with rebellious joy.",
            "His humanitarian stances against violence and ideological dogmatism separated him from contemporaries like Sartre. His books stand as a timeless testament to human solidarity, liberty, and moral clarity.",
            "By asserting that 'I rebel, therefore we exist', Camus laid the foundation for an active, humanistic response to absurdity, offering hope and meaning without relying on absolute dogmas."
          ]
        },
        {
          id: "nietzsche",
          featured: false,
          name: "Friedrich Nietzsche",
          era: "1844 - 1900",
          school: "Existentialism / Vitalism",
          image: "thinkers/images/nietzsche.jpg",
          bio: "Famous for his critique of traditional morality, his concept of the Overman, the will to power, and eternal recurrence.",
          body: [
            "Friedrich Nietzsche (1844 - 1900) was a radical German philosopher, cultural critic, and poet. He is famous for his sharp critiques of traditional morality, religion, and Western rationalism.",
            "Nietzsche introduced foundational ideas such as the 'will to power,' the concept of the 'Overman' (Übermensch) who creates his own values, and 'Amor Fati'—the unconditional love of one's fate, regardless of suffering.",
            "His work paved the way for existentialism and modern psychology. Nietzsche remains a powerful voice encouraging intellectual courage, self-overcoming, and the creative affirmation of life.",
            "Through his poetic style, Nietzsche challenged readers to question the origins of their values and build a life of genuine individuality, far from herd conformity."
          ]
        },
        {
          id: "schopenhauer",
          featured: false,
          name: "Arthur Schopenhauer",
          era: "1788 - 1860",
          school: "Pessimism",
          image: "thinkers/images/schopenhauer.jpg",
          bio: "German philosopher best known for his theory of the will-to-live as the metaphysical essence of the world.",
          body: [
            "Born in 1788 and passing in 1860, Arthur Schopenhauer was a pivotal German philosopher best known for his masterwork 'The World as Will and Representation'. He stands as a towering figure of philosophical pessimism.",
            "Schopenhauer argued that the fundamental reality of the universe is a blind, irrational driving force he termed the 'Will to live'. This endless striving causes perpetual dissatisfaction and suffering. He proposed aesthetic contemplation of art and music, alongside ascetic self-denial, as ways to escape this cycle.",
            "His thoughts left a profound mark on thinkers like Friedrich Nietzsche, Sigmund Freud, and Richard Wagner, offering a pragmatic approach to living by tempering expectations and desires.",
            "Schopenhauer's incorporation of Eastern philosophies introduced a unique perspective to Western philosophy, emphasizing empathy and mindfulness as crucial paths to reducing suffering."
          ]
        },
        {
          id: "kant",
          featured: false,
          name: "Immanuel Kant",
          era: "1724 - 1804",
          school: "German Idealism",
          image: "thinkers/images/kant.jpg",
          bio: "One of the greatest Enlightenment thinkers, known for his critical examinations of pure reason, practical reason, and ethics.",
          body: [
            "Immanuel Kant (1724 - 1804) was a German philosopher and one of the central figures of the Enlightenment. His critical philosophy revolutionized epistemology, ethics, and aesthetics.",
            "Kant established deontological ethics, centered around the 'Categorical Imperative'—the moral law that one should act only according to rules that could be willed as universal laws. He believed human dignity rests on moral autonomy.",
            "Famous for his incredibly disciplined and routined life in Königsberg, Kant's critiques of pure and practical reason laid the groundwork for almost all subsequent modern philosophy.",
            "His concept of treat people as 'ends in themselves' rather than mere means remains a foundation of modern human rights, ethics, and global political philosophy."
          ]
        },
        {
          id: "hegel",
          featured: false,
          name: "G. W. F. Hegel",
          era: "1770 - 1831",
          school: "German Idealism",
          image: "thinkers/images/hegel.jpg",
          bio: "Creator of a comprehensive dialectical philosophy aimed at understanding the evolutionary progression of History and Spirit.",
          body: [
            "Georg Wilhelm Friedrich Hegel (1770 - 1831) was a towering German philosopher and the founder of Absolute Idealism. He created a vast system explaining the development of Spirit (Geist) through history.",
            "Hegel is best known for his dialectical method (often structured as Thesis, Antithesis, Synthesis) and the 'Master-Slave dialectic', illustrating how self-awareness develops through struggle and mutual recognition.",
            "His monumental philosophy exerted an immense influence on Karl Marx, phenomenology, and existentialism, shaping the course of modern political thought and the philosophy of history.",
            "Hegel's insistence that truth is historical and develops through ongoing resolution of contradictions remains one of the most powerful paradigms of modern sociological and political thought."
          ]
        }
      ],
      articles: [
        {
          category: "philosophy",
          file: "stoicisme-force-calme.docx",
          image: "stoicisme-roof.jpg",
          featured: true,
          title: "Stoicism: Philosophy of Strength and Calm",
          readTime: "12 min read",
          desc: "An in-depth guide on how ancient Stoic philosophy builds psychological resilience and lasting peace of mind in modern times.",
          body: [
            "In a fast-paced modern world overflowing with information overload, work stress, and social pressures, the pursuit of mental tranquility has become more critical than ever. It is here that Stoicism, an ancient school founded in Athens in the 3rd century BC by Zeno of Citium, is witnessing an extraordinary renaissance. Originally designed as a medicine for the soul, it offers practical daily techniques to face existential hardships with courage, logic, and clarity.",
            "The Roman Stoic giants—Epictetus, Seneca, and Marcus Aurelius—demonstrated the power of this philosophy across diverse lives. From the chains of slavery to the chambers of imperial power, they applied the exact same cognitive technique: dividing the world into what we can control and what we cannot.",
            "This division, the 'dichotomy of control,' is the foundation of Stoic training. We control our thoughts, beliefs, decisions, and reactions. We do not control external events, other people's actions, the past, the future, or our physical health. Mental suffering does not come from the events themselves, but from trying to control things beyond our reach.",
            "By reclaiming our mental energy from external outcomes, we focus purely on our own character and moral virtue. A Stoic is not passive or unemotional. Instead, they act with full intent for the social good while accepting the outcomes with serenity, embracing their fate (*Amor Fati*).",
            "Another core Stoic practice is the contemplation of mortality (*Memento Mori*). Remembering that our time is limited functions as a filter for clarity, helping us prioritize what truly matters and dismiss petty conflicts. Seneca reminds us that life is not short, but we waste a vast amount of it.",
            "Lastly, *Premeditatio Malorum* (the premeditation of adversity) involves mentally preparing for challenges before they occur. By visualizing the worst-case scenario rationally, we remove the shock of surprise. Stoicism is not about suppressing feelings, but about training reason to cultivate stability under any circumstance."
          ]
        },
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          image: "stoicisme-modern.jpg",
          featured: true,
          title: "A Practical Guide to Modern Stoicism",
          readTime: "9 min read",
          desc: "How to apply Stoic exercises to conquer anxiety, manage time, and build daily habits.",
          body: [
            "Stoicism was never meant to be debated in academic isolation, but practiced in the streets and in the quiet of one's conscience. To fight modern anxiety, this philosophy offers a concrete toolkit to structure our days and maintain mental balance. This guide introduces three essential Stoic rituals for your daily routine.",
            "The morning review is the first ritual. Upon waking, visualize the day ahead. Prepare yourself for the obstacles and personalities you will encounter. As Marcus Aurelius advised: expect to meet ungrateful, aggressive, and selfish people, but remember that none of them can harm your character.",
            "The second ritual is keeping a philosophical journal. Much like Marcus Aurelius's *Meditations*, writing down your thoughts creates a healthy gap between an event and your reaction. Ask yourself Epictetus's question: 'Is this within my control?' If not, let it go.",
            "The evening review is the third ritual. Before sleeping, examine your day with three questions: What did I do well? Where did I fall short of my values? How can I improve tomorrow? Seneca noted that this honest, kind self-reflection closes the day with peace, preparing you for deep rest."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          image: "carl-jung-shadow.jpg",
          featured: false,
          title: "Understanding the Shadow Self according to Jung",
          readTime: "10 min read",
          desc: "An exploration of Jungian psychology, the shadow self, and how to integrate hidden traits for individuation.",
          body: [
            "In Carl Jung's analytical psychology, the 'Shadow' is the unconscious part of our personality that holds the desires, instincts, and traits that our conscious ego rejects. Formed in childhood through social conditioning, the shadow stores what we believe is 'bad' or 'unacceptable.'",
            "However, repressing these traits does not eliminate them. The shadow grows in power, manifesting as projection (judging others for our own hidden flaws), emotional outbursts, and self-sabotaging actions.",
            "Jung famously warned: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.' Healing requires facing the shadow with courage. Integrating it means acknowledging these traits to redirect their raw energy into creativity and self-awareness.",
            "Integrating the shadow is crucial for individuation—the path to psychological wholeness. By ending the projection of our inner conflicts onto the world, we cultivate genuine empathy and peace of mind."
          ]
        },
        {
          category: "development",
          file: "habitudes-atomiques.docx",
          image: "atomic-habits.jpg",
          featured: false,
          title: "The Psychology of Atomic Habits",
          readTime: "8 min read",
          desc: "How 1% daily shifts accumulate to transform your actions, results, and fundamental identity.",
          body: [
            "We often believe that changing our lives requires massive, heroic effort. Modern behavioral science proves instead that lasting change comes from micro-habits, or 'atomic habits.' A tiny 2-minute daily routine builds massive exponential progress over time.",
            "The math is clear: getting 1% better every day makes you 37 times better in a year. This shifts our focus from end goals (outcomes) to systems (daily routines). Systems are what drive actual progress, whereas goals only define the direction.",
            "To build good habits, James Clear outlines four rules: 1. Make it obvious (clear plan); 2. Make it attractive (pair it with pleasure); 3. Make it easy (remove friction); 4. Make it satisfying (immediate reward). To break bad habits, reverse these rules.",
            "True change is identity-based. It is not about *what you want to achieve*, but *who you want to become.* Every action is a vote for the person you want to be. Accumulating tiny daily wins proves to your brain that your new identity is real, building deep self-trust."
          ]
        }
      ],
      faq: [
        {
          q: "How can I download the Word (.docx) guides?",
          a: "Every article on our dedicated Articles page features a 'Download Document' button. Clicking it instantly downloads the Microsoft Word (.docx) file to your device. You can also access these documents directly within the 'files/' folder of your project repository."
        },
        {
          q: "What are the shipping times for posters and coins?",
          a: "Physical shop items (posters and Memento Mori coins) are processed and shipped within 24 to 48 hours. Standard delivery typically takes 5 to 7 business days worldwide and is completely free of charge."
        },
        {
          q: "Am I allowed to edit the guides after downloading them?",
          a: "Absolutely! The downloadable guides are provided in Microsoft Word (.docx) format so that you can open them in any standard text editor (Microsoft Word, Google Docs, LibreOffice) to write your own thoughts, highlight key ideas, or customize the content."
        }
      ]
    },
    ar: {
      displayName: "حكمة ونور",
      bio: "الرواقية، وحكمة كبار الفلاسفة، وتوجيهات نفسية لتعزيز السلام الداخلي والتنمية الشخصية. 🏛️🌿✨",
      links: [
        { title: "📖 تحميل دليل الرواقية المجاني", url: "https://example.com/free-stoic-guide", icon: "book-open", featured: true },
        { title: "🎧 استمع إلى البودكاست على سبوتيفاي", url: "https://spotify.com", icon: "headphones", featured: false },
        { title: "✉️ أفكار الأحد - النشرة البريدية الأسبوعية", url: "https://example.com/newsletter", icon: "mail", featured: false },
        { title: "💬 انضم إلى مجتمع التفكير (تيليجرام)", url: "https://telegram.org", icon: "message-circle", featured: false }
      ],
      videos: [
        { id: "vid1", title: "ماركوس أوريليوس: 3 حكم رواقية للبقاء هادئاً أمام الانتقادات 🏛️", views: "1.2M", likes: "250K", duration: "01:24", tags: ["#الرواقية", "#الهدوء"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid2", title: "سينيكا: سر السعادة يكمن في عيش اللحظة الحالية 🌿", views: "890K", likes: "185K", duration: "01:05", tags: ["#الحكمة", "#سينيكا"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid3", title: "سقراط: اعرف نفسك - ماذا يعني هذا المبدأ في علم النفس المعاصر؟ 🧠", views: "750K", likes: "140K", duration: "01:40", tags: ["#سقراط", "#علم_النفس"], youtubeId: "dQw4w9WgXcQ" },
        { id: "vid4", title: "ماركوس أوريليوس: كيف تواجه العقبات والصعوبات لتصبح أقوى 💪", views: "620K", likes: "115K", duration: "00:58", tags: ["#الرواقية", "#الصلابة"], youtubeId: "dQw4w9WgXcQ" }
      ],
      quotes: [
        { text: "ما يقلق الناس ليس الأشياء في حد ذاتها، بل الأحكام التي يطلقونها عليها.", author: "إبيكتيتوس (الرواقية)" },
        { text: "الحياة غير المفحوصة لا تستحق العيش.", author: "سقراط (الفلسفة)" },
        { text: "الحياة مثل المسرحية: لا يهم طولها بل كيف تم تأديتها.", author: "سينيكا (الفلسفة)" },
        { text: "من يملك 'لماذا' يعيش من أجلها، يمكنه تحمل أي 'كيف' تقريباً.", author: "فريدريك نيتشه" },
        { text: "أنا لست ما حدث لي، أنا ما أختار أن أكونه.", author: "كارل يونغ (علم النفس)" },
        { text: "سعادة حياتك تعتمد على جودة أفكارك.", author: "ماركوس أوريليوس (الرواقية)" }
      ],
      advices: [
        { category: "الرواقية", title: "ثنائية التحكم", icon: "shield", desc: "ميز بين ما يقع تحت سيطرتك (أفعالك، قراراتك) وما ليس تحت سيطرتك. ركز طاقتك على ما يمكنك التحكم فيه.", thinker: "إبيكتيتوس" },
        { category: "علم النفس", title: "الانحياز للسلبية", icon: "brain", desc: "أدمغتنا مبرمجة على رصد المخاطر. وازن هذا الميل عبر التركيز على الإيجابيات لـ 20 ثانية.", thinker: "د. ريك هانسون" },
        { category: "تنمية ذاتية", title: "التأثير التراكمي للعادات", icon: "trending-up", desc: "التحسن بنسبة 1% يومياً يعطي نتائج أفضل بـ 37 مرة بعد عام. الاستمرارية تهزم الكثافة المؤقتة.", thinker: "جيمس كلير" }
      ],
      thinkers: [
        {
          id: "marcaurele",
          featured: true,
          name: "ماركوس أوريليوس",
          era: "121 - 180 م",
          school: "الرواقية",
          image: "thinkers/images/marcaurele.jpg",
          bio: "إمبراطور روماني وفيلسوف رواقي، كاتب 'التأملات' التي تمثل دليلاً خالداً لبناء المرونة والصلابة النفسية.",
          body: [
            "يعتبر الإمبراطور ماركوس أوريليوس (121 - 180 م) آخر الأباطرة الخمسة الصالحين الذين قادوا الإمبراطورية الرومانية في أوج قوتها، وأحد أهم رموز الفلسفة الرواقية المتأخرة. لُقب بـ 'الفيلسوف الملك' لأنه نجح في تجسيد المفهوم الأفلاطوني للحاكم العادل. واجه طوال فترة حكمه سلسلة من الكوارث القاسية: بدءاً من وباء أنطونين المدمر الذي فتك بالبلاد، مروراً بالتمردات الداخلية، ووصولاً إلى الحروب الطاحنة ضد القبائل الجرمانية على طول الحدود الشمالية.",
            "في خضم تلك الحروب الصعبة وتحت سقف خيمته العسكرية المظلمة على جبهة نهر الدانوب، اعتاد ماركوس أوريليوس كتابة مذكراته وتأملاته الشخصية. لم تكن هذه النصوص مكتوبة للنشر أو موجهة للعامة، بل كانت بمثابة 'تمارين روحية' وصيغ انضباط ذاتي يذكر بها نفسه بواجباته الأخلاقية وكيفية الثبات والصلابة أمام إغراءات السلطة ومخاوف الموت.",
            "تتمحور فلسفة ماركوس أوريليوس حول مفهوم 'العقل كقلعة داخلية'. كان يؤمن إيماناً مطلقاً بأنه على الرغم من عجزنا عن التحكم في الأحداث الخارجية (كالمرض والحروب والموت والتآمر)، فإننا نملك دائماً السيادة الكاملة على عقولنا وتأويلاتنا ردود أفعالنا. يرى أن الألم لا يؤذي الروح ما دام العقل يرفض اعتباره شراً، وأن الغضب ليس سوى ضعف واعتراف بالهزيمة الداخلية.",
            "كما شدد في كتاباته على أهمية الواجب الاجتماعي والعمل من أجل الصالح العام للبشرية، انطلاقاً من المفهوم الرواقي لـ 'المواطنة العالمية'. كان يذكر نفسه يومياً بأن البشر خلقوا ليتعاونوا مثل الأعضاء في جسد واحد، وأن الإحسان للآخرين هو المكافأة الحقيقية للنفس. تظل 'التأملات' حتى يومنا هذا من أكثر الكتب مبيعاً وتأثيراً في مجالات التنمية الذاتية والقيادة الأخلاقية والصلابة النفسية."
          ]
        },
        {
          id: "seneque",
          featured: true,
          name: "سينيكا",
          era: "4 ق.م - 65 م",
          school: "الرواقية",
          image: "thinkers/images/seneque.jpg",
          bio: "فيلسوف وكاتب ورجل دولة روماني شهير، صاحب الرسائل الفلسفية الملهمة في قصر الحياة وإدارة الغضب ومواجهة الموت.",
          body: [
            "لوسيوس أنيوس سينيكا (4 ق.م - 65 م) هو فيلسوف رواقي، كاتب مسرحي، ورجل دولة روماني مرموق. ولد في قرطبة بإسبانيا، ونشأ في روما حيث برع في الخطابة والفلسفة. قادته نباهته ليكون معلماً ثم مستشاراً أول للإمبراطور الشاب نيرون، محاولاً توجيه شؤون الدولة بحكمة واعتدال وسط بيئة سياسية مليئة بالمؤامرات والاضطرابات في البلاط الروماني.",
            "عاش سينيكا حياة حافلة بالتناقضات المثيرة؛ فقد تم نفيه إلى جزيرة كورسيكا لسنوات بأمر من الإمبراطور كلوديوس، ثم عاد ليصبح واحداً من أثرى وأقوى الرجال في روما. ورغم ثرائه الفاحش الذي انتقده عليه خصومه، دافع في رسائله عن موقف رواقي واضح يتمثل في الزهد والتحرر الداخلي من عبودية المادة، مؤكداً أن الحكيم هو من يملك المال دون أن يسمح للمال بامتلاك روحه.",
            "تتميز أعماله الفلسفية الكبرى، وخاصة 'رسائل إلى لوسيليوس' ومقالاته مثل 'عن قصر الحياة' و'عن طمأنينة النفس'، بأسلوب عملي ومباشر. يطرح سينيكا 'الوقت' باعتباره أثمن ما يملكه الإنسان، وينتقد بشدة تبديد الحياة في التوافه. يقدم حلولاً عملية لمواجهة القلق اليومي، التغلب على الخوف من المستقبل، وإدراك حتمية الموت كبوابة للحرية النفسية.",
            "اتُهم سينيكا زوراً بالتآمر ضد نيرون، فتلقى أمراً إمبراطورياً بإنهاء حياته. واجه الموت بهدوء رواقي أسطوري، حيث قام بقطع شرايينه وتناول السم محاطاً بأشخاص يحبهم، مقدماً بذلك تطبيقاً عملياً خالداً لفلسفته في مواجهة المصير بكل شجاعة."
          ]
        },
        {
          id: "camus",
          featured: true,
          name: "ألبير كامو",
          era: "1913 - 1960",
          school: "العبثية",
          image: "thinkers/images/camus.jpg",
          bio: "كاتب وفيلسوف وصحفي فرنسي، حائز على جائزة نوبل في الأدب، وصاحب فلسفة العبث والتمرد الإنساني ضد الظلم.",
          body: [
            "ولد ألبير كامو عام 1913 في الجزائر لعائلة فقيرة جداً، ونشأ يتيماً بعد وفاة والده في الحرب العالمية الأولى. استطاع بفضل عبقريته وشغفه بالقراءة والتعليم بناء مسار أدبي وفلسفي استثنائي. عمل صحفياً ومناضلاً في صفوف المقاومة الفرنسية ضد النازية خلال الحرب العالمية الثانية، وحصل على جائزة نوبل في الأدب عام 1957 وهو في الرابعة والأربعين من عمره، ليكون أحد أصغر الحاصلين عليها تاريخياً.",
            "اشتهر كامو بتأسيس وصياغة 'فلسفة العبث'. ويعرف العبث بأنه الصدام الحتمي بين رغبة الإنسان العميقة في البحث عن المعنى والعدالة وبين صمت الكون اللامتناهي وغير العقلاني. في كتابه الشهير 'أسطورة سيزيف'، استخدم كامو شخصية البطل الأسطوري المحكوم عليه برفع صخرة إلى قمة الجبل للأبد ليمثل الحالة الإنسانية، مؤكداً أنه 'يجب أن نتخيل سيزيف سعيداً' لأنه يختار الاستمرار والتمرد بمجرد وعيه بعقابه.",
            "يرى كامو أن إدراك عبثية الحياة لا يجب أن يقود إلى اليأس أو الانتحار، بل إلى التمرد والحرية المطلقة وعيش اللحظة بشغف. في كتابه 'الإنسان المتمرد'، يوضح أن مواجهة غياب المعنى والوقوف ضد الظلم هما ما يمنحان قيمة حقيقية لحياتنا. صاغ مقولته الشهيرة: 'أنا أتمرد، إذن نحن موجودون'، واضعاً أسس نزعة إنسانية ترفض الاستسلام.",
            "أدى موقفه الرافض للعنف الثوري الشمولي إلى قطيعة فكرية وشخصية مع معاصره جان بول سارتر، مما عكس استقامته الأخلاقية. وتظل رواياته الكبرى مثل 'الغريب'، 'الطاعون'، و'السقوط' مرجعاً إنسانياً خالداً يدعو للوعي بالذات والتضامن البشري ومواجهة الواقع بشجاعة ولطف."
          ]
        },
        {
          id: "nietzsche",
          featured: false,
          name: "فريدريك نيتشه",
          era: "1844 - 1900",
          school: "الوجودية / الحيوية",
          image: "thinkers/images/nietzsche.jpg",
          bio: "فيلسوف ألماني ثوري، ناقد الأخلاق التقليدية والميتافيزيقيا، وصاحب نظرية الإنسان المتفوق وإرادة القوة وحب القدر.",
          body: [
            "يعتبر فريدريك نيتشه (1844 - 1900) أحد أكثر الفلاسفة تأثيراً وإثارة للجدل في العصر الحديث. عُين أستاذاً لعلم الفيلولوجيا الكلاسيكية في جامعة بازل وهو في الرابعة والعشرين فقط، لكنه اضطر للاستقالة مبكراً بسبب تدهور حالته الصحية المزمنة. قضى بقية حياته متنقلاً بين جبال الألب السويسرية (خاصة في سيلس ماريا) وإيطاليا، مؤلفاً أعمالاً فلسفية عميقة بأسلوب شاعري فريد.",
            "شن نيتشه نقداً هادماً للميتافيزيقيا الغربية والأخلاق التقليدية، معتبراً إياها 'أخلاق عبيد' تقوم على الكبت والندم وإضعاف طاقة الحياة. بإعلانه الشهير 'موت الإله'، حذر نيتشه من أزمة العدمية القادمة (فقدان المعايير المطلقة) ودعا البشرية لتجاوز هذا الفراغ الإيجابي عبر تحطيم الأصنام الفكرية القديمة وبناء قيم جديدة تنبع من حب الحياة.",
            "ترتكز فلسفته على مفاهيم 'إرادة القوة' (والتي تعني إرادة التجاوز والنمو والابتكار الإبداعي)، و'الإنسان المتفوق' (Übermensch - الفرد المبدع الذي يصنع قيمته الخاصة بحرية بعيداً عن القطيع)، ومبدأ 'حب القدر' (Amor Fati - القبول الكامل والشجاع للحياة بكل ما فيها من آلام وأفراح دون ندم).",
            "تركت أعماله الخالدة مثل 'هكذا تكلم زرادشت'، 'ما وراء الخير والشر'، و'جنيالوجيا الأخلاق' بصمة هائلة على الفلسفة الوجودية وعلم النفس الحديث والتحليل النفسي الفرويدي والأدب العالمي، محفزة الإنسان على السعي الدائم نحو التطور والأصالة الذاتية."
          ]
        },
        {
          id: "schopenhauer",
          featured: false,
          name: "أرتور شوبنهاور",
          era: "1788 - 1860",
          school: "التشاؤمية",
          image: "thinkers/images/schopenhauer.jpg",
          bio: "فيلسوف ألماني مشهور بنظريته حول 'الإرادة' كجوهر مطلق للعالم وموقفه التشاؤمي المتأثر بحكمة الشرق.",
          body: [
            "أرتور شوبنهاور (1788 - 1860) فيلسوف ألماني كبير، تميزت فلسفته بربطها الفريد بين العقلانية الغربية والحكمة الشرقية الهندية (خاصة البوذية والأوبانيشاد). عاش معظم حياته معزولاً في فرانكفورت بعيداً عن الأضواء الأكاديمية التي هيمن عليها منافسه هيغل، ولم يعرف الشهرة والتقدير الواسع إلا في السنوات الأخيرة من عمره.",
            "أطروحته الأساسية في كتابه العمدة 'العالم كإرادة وتمثّل' تقوم على أن العالم المادي الذي نراه ليس سوى وهم (التمثل)، بينما تكمن وراءه حقيقة ميتافيزيقية عمياء وغير عقلانية هي 'إرادة الحياة'. هذه الإرادة تدفع جميع الكائنات الحية نحو الرغبة المستمرة دون إمكانية للوصول للشبع الكامل، مما يجعل المعاناة والألم جوهراً ثابتاً للوجود البشري.",
            "للخلاص من هذا العذاب الوجودي، يطرح شوبنهاور ثلاثة مسارات للتحرر المؤقت: أولاً، التأمل الجمالي من خلال الفن والموسيقى (التي تفصلنا عن الإرادة وتمنحنا سكينة مؤقتة). ثانياً، أخلاق التعاطف والشفقة (الإدراك الروحي بأننا جميعاً نتشارك نفس المعاناة). ثالثاً، الزهد التام والتحرر من الشهوات المادية (وهو ما يشابه النيروانا البوذية).",
            "أثر أسلوبه الأدبي السلس والواضح وتحليله العميق للرغبات واللاوعي على كبار المفكرين والعلماء، مثل فريدريك نيتشه، وسيجموند فرويد (الذي بنى نظريته في الغرائز واللاشعور على أسس شوبنهاورية)، والموسيقار ريتشارد فاغنر، وألبرت أينشتاين، والكاتب الروسي ليو تولستوي."
          ]
        },
        {
          id: "kant",
          featured: false,
          name: "إيمانويل كانط",
          era: "1724 - 1804",
          school: "المثالية النقدية",
          image: "thinkers/images/kant.jpg",
          bio: "فيلسوف التنوير الألماني العظيم، واضع المنهج النقدي في نظرية المعرفة وفلسفة الواجب والأخلاق الكونية.",
          body: [
            "إيمانويل كانط (1724 - 1804) هو أحد أبرز أعمدة الفلسفة الغربية عبر العصور. ولد وتوفي في مدينة كونيغسبرغ ببروسيا الشرقية (كالينينغراد الحالية). تميز بحياته المنظمة بشكل صارق ودقيق للغاية، وكرس حياته للتدريس والبحث والـتأليف، حيث أحدث ما أطلق عليه 'ثورة كوبيرنيكية' في طريقة فهم العقل والمعرفة البشرية.",
            "في كتابه الشهير 'نقد العقل المحض' (1781)، سعى كانط لحل الصراع الطويل بين المذهبين العقلاني والتجريبي. وأكد أن عقولنا لا تستقبل البيانات الخارجية بسلبية، بل تقوم بتنظيمها بنشاط عبر قوالب سابقة للتجربة هي الزمان والمكان ومفاهيم الفهم. وبذلك، نحن لا نعرف سوى 'الظواهر' (الأشياء كما تبدو لنا)، بينما تظل 'الأشياء في ذاتها' (النومين) غامضة وخارج حدود إدراكنا.",
            "وفي الفلسفة الأخلاقية، صاغ في كتابه 'نقد العقل العملي' فلسفة الواجب الأخلاقي المطلق. ويرى أن القيمة الأخلاقية لأي فعل تعتمد على النية الصافية والامتثال لـ 'الأمر المطلق': 'تصرف فقط وفقاً للمبدأ الذي يجعلك تريد له أن يصبح قانوناً عاماً للبشرية'. وشدد على احترام كرامة الإنسان كقيمة مقدسة، مؤكداً أنه يجب معاملة البشر دائماً كغايات في حد ذاتهم وليس كأدوات أو وسائل.",
            "صاغ كانط أيضاً رؤية سياسية متقدمة في كتيبه 'نحو السلام الدائم' والذي تنبأ فيه بتأسيس هيئة دولية للأمم المتحدة لمنع الحروب وحفظ السلم العالمي. يظل فكر كانط حجر الأساس للقوانين الديمقراطية الحديثة وحقوق الإنسان والنظريات السياسية المعاصرة."
          ]
        },
        {
          id: "hegel",
          featured: false,
          name: "جورج هيغل",
          era: "1770 - 1831",
          school: "المثالية الألمانية",
          image: "thinkers/images/hegel.jpg",
          bio: "مؤسس المثالية المطلقة والنظام الجدلي (الديالكتيكي) الشامل لتفسير حركة التاريخ والوعي البشري عبر الزمن.",
          body: [
            "يعتبر جورج فيلهلم فريدريش هيغل (1770 - 1831) قمة المثالية الألمانية وأحد أكثر الفلاسفة تعقيداً وتأثيراً في التاريخ الحديث. صاغ نظاماً فلسفياً شاملاً يطمح إلى تفسير الطبيعة والتاريخ والفن والدين كجزء من حركة وعي واحدة ومتطورة.",
            "الجدل (الديالكتيك) هو جوهر الفلسفة الهيغلية. يرى هيغل أن الفكر والواقع يتطوران باستمرار من خلال التناقض الداخلي والصراع الذي ينتهي بالارتقاء والتركيب (عملية الأطروحة ونقيضها والتركيب). فالتاريخ البشري ليس مجرد حوادث عشوائية، بل هو المسار العقلاني والمنظم لتطور 'الروح المطلقة' نحو إدراك حريتها التامة.",
            "في كتابه الشهير 'ظواهرية الروح'، طرح هيغل 'جدلية السيد والعبد' والتي توضح كيف يتشكل الوعي بالذات من خلال صراع متبادل من أجل الاعتراف والحرية. كان هذا التحليل حجر الأساس لفهم علاقات القوة والاعتماد المتبادل بين البشر.",
            "كان لفلسفة هيغل تأثير عميق ومباشر على الفكر العالمي؛ فقد أعاد كارل ماركس صياغة الجدل لصالح المادية الجدلية التي قامت عليها الماركسية، كما ألهمت طريقته فلاسفة الوجودية كـ سارتر، والظواهرية الحديثة، والتحليل النفسي اللاكاني. يظل استيعاب فلسفة هيغل ضرورياً لفهم جذور النظريات السياسية والاجتماعية المعاصرة."
          ]
        }
      ],
      articles: [
        {
          category: "philosophy",
          file: "stoicisme-force-calme.docx",
          image: "stoicisme-roof.jpg",
          featured: true,
          title: "الرواقية: فلسفة القوة والهدوء في مواجهة الحياة",
          readTime: "دقيقة قراءة 12",
          desc: "دليل عميق ومفصل حول كيف تساعد الفلسفة الرواقية القديمة في بناء مرونة نفسية صلبة وسلام داخلي دائم في مواجهة الأزمات المعاصرة.",
          body: [
            "في عالمنا المعاصر الذي يتسم بالتدفق المستمر للمعلومات، والضغوط المهنية المتزايدة، وحالة عدم اليقين العام، أصبحت مسألة البحث عن طمأنينة النفس وسلامها الداخلي أولوية قصوى. في هذا السياق بالذات، تشهد الفلسفة الرواقية (Stoicism) — وهي مدرسة فلسفية أسسها زينون الكيتيومي في أثينا في القرن الثالث قبل الميلاد — نهضة استثنائية متجددة. لقد صُممت هذه الفلسفة في الأصل لتكون بمثابة طب للروح وتدريب عملي للعقل، وليس مجرد نظريات ميتافيزيقية مجردة، وهي تقدم اليوم حلولاً عملية لمواجهة أزمات الحياة بشجاعة ووضوح عقلاني.",
            "وتوضح لنا سير الرموز الكبار للرواقية الرومانية الإمبراطورية — وهم العبد المحرر إبيكتيتوس، والكاتب ومستشار الدولة سينيكا، والإمبراطور الروماني ماركوس أوريليوس — مدى مرونة هذا المذهب وقابليته للتطبيق في شتى الظروف. فسواء كان الأمر يتعلق بتحمل قيود العبودية، أو الإبحار في دهاليز السياسة المضطربة في القصر الإمبراطوري، أو حكم أعتى إمبراطورية في التاريخ وسط انتشار الوباء والحروب، فإن الرواقية تدرس دائماً نفس المنهج: إعادة صياغة علاقتنا الذهنية بالعالم الخارجي وتصحيح أحكامنا.",
            "يرتكز المبدأ الأساسي للرواقية، كما صاغه إبيكتيتوس في كتابه 'الدليل' (Enchiridion)، على التمييز الشهير المعروف بـ 'ثنائية التحكم'. يقسم الرواقيون العالم إلى فئتين لا تداخل بينهما. الأولى: أشياء تقع تحت سيطرتنا الكاملة والمباشرة، وتشمل آرائنا، رغباتنا، أحكامنا العقلية، وقراراتنا الشخصية. والثانية: أشياء خارجة تماماً عن إرادتنا، مثل طبيعة أجسادنا، الثروة، سمعتنا في المجتمع، الماضي، المستقبل، وتصرفات الآخرين. ويرى الرواقيون أن كل المعاناة النفسية والقلق لا ينبعان من الأحداث ذاتها، بل من محاولتنا الواهمة للسيطرة على ما لا نملك سلطاناً عليه.",
            "من خلال تحرير طاقتنا الذهنية من هاجس التحكم في النتائج الخارجية، يمكننا إعادة توجيهها بالكامل نحو خياراتنا الأخلاقية وتطوير فضائلنا الشخصية. لا تعني الرواقية السلبية أو تبلد المشاعر (وهو فهم خاطئ شائع تاريخياً)، بل تعني العمل بنشاط من أجل الصالح العام مع قبول النتائج برضا تام دون سخط. هذا هو جوهر مبدأ 'حب القدر' (Amor Fati): قبول الواقع ليس كعقاب، بل كمادة خام لبناء الفضيلة والقوة النفسية.",
            "ممارسة أخرى رواقية هامة هي التأمل في فكرة الموت والزوال (Memento Mori). تذكير أنفسنا يومياً بأن وقتنا في هذا العالم محدود ومؤقت ليس دعوة للتشاؤم أو الكآبة، بل هو بمثابة مصفاة تمنحنا رؤية واضحة للحياة. إنها تساعدنا على تجاهل الخلافات التافهة، والتخلص من صراعات الأنا غير المجدية، والاستمتاع الحقيقي باللحظة الراهنة. يذكرنا سينيكا في كتابه 'قصر الحياة' بأننا لا نملك عمراً قصيراً، ولكننا نهدر الكثير منه في التوافه والانتظار.",
            "أخيراً، ممارسة 'توقع الأزمات قبل حدوثها' (Premeditatio Malorum) تعني تخيل العقبات أو الإخفاقات المحتملة ذهنياً بشكل هادئ وعقلاني. من خلال تصور أسوأ السيناريوهات الممكنة مسبقاً، يستطيع الإنسان التغلب على صدمة المفاجأة ويستعد بوضع خطط بديلة وعقلانية. عندما تقع الأزمة، لا تفاجئ الفيلسوف الرواقي لأنه قد واجهها وتغلب عليها ذهنياً بالفعل. الرواقية المعاصرة هي حصن عقلي متين، يعلمنا الحفاظ على ثباتنا وكرامتنا وسلامنا الداخلي في جميع ظروف الحياة."
          ]
        },
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          image: "stoicisme-modern.jpg",
          featured: true,
          title: "دليل عملي لتطبيق الرواقية الحديثة",
          readTime: "دقيقة قراءة 9",
          desc: "خطوات وتمارين عملية وواضحة لدمج الحكمة الرواقية في روتينك اليومي للتغلب على القلق وتطوير الذات.",
          body: [
            "لم تُصمم الفلسفة الرواقية لتكون مادة للجدل في قاعات الجامعات، بل لتكون ممارسة حية في شوارع المدن وفي أعماق الضمير الإنساني. في عصرنا الحالي المليء بالقلق والتشتت الرقمي والضغوط المستمرة، تقدم الرواقية دليلاً عملياً لحماية توازننا النفسي. يستعرض هذا الدليل ثلاثة تمارين رواقية أساسية وسهلة التطبيق لدمجها في جدولك اليومي وتغيير جودة حياتك.",
            "التمرين الأول هو التأمل الصباحي الاستباقي. بمجرد استيقاظك، وقبل أن تفتح شاشة هاتفك، خذ بضع دقائق لتتخيل يومك وتستعد له نفسياً. طبق نصيحة ماركوس أوريليوس الذهبية: 'قل لنفسك في الصباح: سأقابل اليوم أشخاصاً مزعجين، وجاحدين، وحاسدين، وكاذبين. لكن لا أحد منهم يستطيع أن يؤذيني لأنني أدرك طبيعة الخير والجميل'. هذا التوقع الذكي يحميك من الانفعال السريع والغضب ويجعلك تقود المواقف بحكمة.",
            "التمرين الثاني هو التدوين الفلسفي المستمر وكتابة المذكرات. على خطى ماركوس أوريليوس، يساعدك تدوين مشاعرك وأفكارك في خلق مسافة صحية بين الحدث الخارجي ورد فعلك العاطفي. عندما تشعر بموجة من الغضب أو القلق، اكتبها بأسلوب موضوعي وكأنك مراقب خارجي محايد. اسأل نفسك دائماً سؤال إبيكتيتوس: 'هل هذا الأمر تحت سيطرتي؟' إذا كانت الإجابة لا، قل لنفسك: 'هذا لا يعنيني' وركز طاقتك على ما يمكنك فعله بالفعل.",
            "التمرين الثالث هو مراجعة النفس المسائية قبل النوم. قيّم يومك بطرح ثلاثة أسئلة واضحة وصادقة: ما الذي قمت به بشكل جيد اليوم؟ أين خالفت مبادئي الأخلاقية؟ وكيف يمكنني تحسين تصرفاتي غداً؟ يساعدك هذا التقييم الهادئ والخالي من جلد الذات على إغلاق يومك بسلام وتصفية ذهنك لنوم عميق ومريح. الاستمرار على هذه التمارين الثلاثة يبني لك درعاً نفسياً لا يخترق."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          image: "carl-jung-shadow.jpg",
          featured: false,
          title: "فهم مفهوم 'الظل' عند كارل يونغ",
          readTime: "دقيقة قراءة 10",
          desc: "دراسة نفسية مفصلة حول كيفية التعرف على الجوانب الخفية والمكبوته في اللاوعي ودمجها لتحقيق التكامل النفسي.",
          body: [
            "في خريطة النفس البشرية التي وضعها عالم النفس السويسري الشهير كارل غوستاف يونغ، يبرز مفهوم 'الظل' (The Shadow) كأحد أعمق المفاهيم وأكثرها تأثيراً. يعرف يونغ الظل بأنه الجانب اللاواعي من شخصيتنا الذي يحتوي على كافة الصفات، الرغبات، الدوافع، والذكريات التي يرفضها وعينا الواعي ويحاول إخفاءها. يتكون الظل منذ الطفولة الباكرة نتيجة التربية والتكيف الاجتماعي، حيث نقوم بكبت كل ما يصفه المجتمع أو الأهل بأنه 'غير مقبول' أو 'سيئ'.",
            "ولكن عملية كبت هذه الصفات في أعماق اللاشعور لا تعني أبداً التخلص منها أو فنائها. بل على العكس تماماً؛ كلما تجاهلنا الظل وحاولنا إنكاره، تراكمت فيه الطاقة النفسية المكبوتة وبدأ بالظهور بشكل خارج عن سيطرتنا. يتجلى الظل بوضوح من خلال 'الإسقاط النفسي': عندما ننزعج بشكل مفرط وغير مبرر من عيوب معينة لدى الآخرين، فإننا في الغالب نسقط ظلنا الخفي عليهم. كما يظهر الظل في نوبات الغضب المفاجئة وسلوكيات التدمير الذاتي غير الواعية.",
            "يقول كارل يونغ في مقولته الشهيرة: 'حتى تجعل اللاوعي واعياً، سيوجه حياتك وتسميه قدراً'. لذلك، فإن الخطوة الأولى للعلاج والتطور هي مواجهة هذا الظل بشجاعة وصدق تامين. دمج الظل وتصالحك معه لا يعني الاستسلام للنزعات السلبية أو تطبيقها، بل يعني الاعتراف الواعي بوجودها. ومن خلال قبول جوانب ضعفنا ومخاوفنا وغضبنا، يمكننا تحويل هذه الطاقة الخام والمكبوتة إلى طاقة إبداع ونضج نفسي حقيقي.",
            "إن دمج الظل هو الجوهر الأساسي لعملية 'التفرد' (Individuation) — وهي الرحلة نحو تحقيق التكامل والوصول إلى الذات الحقيقية الكاملة. عندما نتوقف عن إسقاط صراعاتنا الداخلية على العالم الخارجي، نبني تعاطفاً حقيقياً مع الآخرين وننعم بسلام داخلي راسخ ومتين. فالعبور من خلال الظلام الخاص بنا وإضاءته هو السبيل الوحيد للوصول إلى النور النفسي الحقيقي وصحة الشخصية."
          ]
        },
        {
          category: "development",
          file: "habitudes-atomiques.docx",
          image: "atomic-habits.jpg",
          featured: false,
          title: "سيكولوجية العادات الذرية الصغيرة",
          readTime: "دقيقة قراءة 8",
          desc: "كيف تتراكم التغييرات الطفيفة بنسبة 1% يومياً لتصنع تحولاً جذرياً وشاملاً في هويتك الشخصية وإنجازاتك على المدى البعيد.",
          body: [
            "كثيراً ما نقع في فخ الاعتقاد بأن تغيير حياتنا وتحقيق أهدافنا يتطلب اتخاذ قرارات مصيرية كبرى، أو القيام بجهود خارقة وقاسية فجأة. لكن علم النفس السلوكي المعاصر، والذي وضحه جيمس كلير في كتابه الشهير، يثبت عكس ذلك تماماً: النجاح الحقيقي والدائم هو نتاج تراكم العادات اليومية الصغيرة جداً التي تسمى 'العادات الذرية'. العادة الذرية هي روتين بسيط يستغرق دقيقتين فقط، ورغم أن تأثيره يبدو غير ملحوظ على المدى القصير، إلا أنه يتراكم بشكل مذهل مع مرور الوقت.",
            "العملية الحسابية وراء هذا المفهوم مدهشة للغاية؛ فإذا تمكنت من تطوير نفسك بنسبة 1% فقط كل يوم في أي مجال، ستجد نفسك في نهاية العام أفضل بـ 37 مرة مما كنت عليه. وعلى العكس، إذا تراجعت بنسبة 1% يومياً، ستقترب من الصفر تقريباً. هذا المنطق يغير تركيزنا بالكامل من 'الأهداف النهائية' (النتائج) إلى 'الأنظمة' (العمليات اليومية المستمرة). فالأهداف تحدد الاتجاه الذي تريد الذهاب إليه، لكن الأنظمة اليومية هي التي تحدد ما إذا كنت ستصل وتستمر بالفعل.",
            "لتصميم عادات مستدامة، يطرح كلير أربعة قوانين سلوكية تعتمد على حلقة العادة: الإشارة، التوق، الاستجابة، والمكافأة. لتأسيس عادة إيجابية جديدة: 1. اجعلها واضحة (حدد الوقت والمكان بدقة)؛ 2. اجعلها جذابة (اربطها بشيء تحبه)؛ 3. اجعلها سهلة (قلل العقبات والاحتكاك لأقصى حد)؛ 4. اجعلها مرضية (امنح نفسك مكافأة فورية). وللتخلص من عادة سيئة، ما عليك سوى عكس هذه القوانين الأربعة تماماً.",
            "أما السر الأعمق للتغيير الدائم فيكمن في ربط عاداتك بهويتك الشخصية. إن التغيير الحقيقي لا يتعلق بـ 'ما تريد تحقيقه' بل بـ 'من تريد أن تكون'. كل فعل تقوم به وكل عادة تمارسها هي بمثابة صوت تدلي به لصالح الشخصية التي تطمح لتجسيدها. وعبر تكرار الانتصارات اليومية الصغيرة، تقدم عقلك أدلة ملموسة على هويتك الجديدة، مما يبني ثقة بالنفس متينة ويغير حياتك بشكل مستدام وراسخ."
          ]
        }
      ],
      products: [
        { id: "guide_stoic", category: "digital", title: "📖 الدليل الرواقي اليومي (كتاب إلكتروني PDF)", price: 9.99, formattedPrice: "9.99 $", desc: "دليل عملي من 120 صفحة للتغلب على القلق المعاصر، وبناء الانضباط الذاتي، وتعزيز السلام الداخلي في حياتك اليومية.", icon: "book-open" },
        { id: "journal_stoic", category: "digital", title: "📓 مفكرة الرواقية الرقمية (Notion / PDF)", price: 14.99, formattedPrice: "14.99 $", desc: "مفكرة يومية للكتابة والتأمل، تحتوي على 100 تمرين وسؤال موجه مقتبس من كتابات الإمبراطور ماركوس أوريليوس.", icon: "book" },
        { id: "wallpapers_stoic", category: "digital", title: "🖼️ حزمة 3 خلفيات فلسفية (بدقة 4K)", price: 4.99, formattedPrice: "4.99 $", desc: "زين شاشة هاتفك أو حاسوبك بتصاميم راقية وبسيطة تحمل مقولات خالدة لكل من الفيلسوف سينيكا وإبيكتيتوس.", icon: "image" },
        { id: "poster_stoic", category: "physical", title: "🏛️ ملصق حكمة ماركوس أوريليوس (مادي)", price: 19.99, formattedPrice: "19.99 $", desc: "ملصق جداري مطبوع بجودة عالية (50x70 cm) يحمل مقولة الإمبراطور الرواقي الأشهر لتزيين غرفتك. شحن مجاني.", icon: "film" },
        { id: "coin_stoic", category: "physical", title: "🪙 عملة الرواقية \"تذكر الموت\" (مادية)", price: 12.99, formattedPrice: "12.99 $", desc: "عملة برونزية ثقيلة تحملها في جيبك كتذكير دائم بضرورة تقدير اللحظة الحالية وعيشها بوعي. تأتي مع كيس حماية قطني.", icon: "award" }
      ],
      faq: [
        {
          q: "كيف يمكنني تحميل أدلة ومستندات وورد (Word)؟",
          a: "كل مقال معروض في صفحة المقالات الخاصة بنا يتضمن رابطاً مباشراً بعنوان 'تحميل المستند'. بمجرد النقر عليه، سيتم تحميل ملف مايكروسوفت وورد (.docx) المرتبط بالمقال تلقائياً على جهازك. كما يمكنك العثور على هذه المستندات مباشرة داخل المجلد 'files' في ملفات المشروع."
        },
        {
          q: "ما هي المدة المستغرقة لشحن المقتنيات المادية كالملصقات والعملات؟",
          a: "يتم تجهيز وشحن المنتجات المادية (مثل لوحات ماركوس أوريليوس وعملة تذكر الموت) في غضون 24 إلى 48 ساعة. يستغرق التوصيل عادةً بين 5 إلى 7 أيام عمل لجميع أنحاء العالم، وخدمة الشحن مجانية بالكامل."
        },
        {
          q: "هل يُسمح لي بتعديل مستندات الأدلة بعد تحميلها؟",
          a: "بالتأكيد! نوفر جميع مستندات الأدلة المتاحة للتحميل بصيغة مايكروسوفت وورد (.docx) المفتوحة، حتى يتسنى لك فتحها بأي برنامج محرر نصوص (مثل Word أو Google Docs) وإضافة ملاحظاتك الشخصية، تظليل الأفكار الهامة أو إعادة صياغة المحتوى حسب تفضيلك."
        }
      ]
    }
  }
};

export default TIKTOK_DATA;
