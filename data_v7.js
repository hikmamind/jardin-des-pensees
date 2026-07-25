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
            "Lucius Annaeus Seneca, né à Cordoue en 4 av. J.-C. et mort à Rome en 65 ap. J.-C., est l'un des plus brillants penseurs du stoïcisme impérial. Intellectuel brillant, orateur hors pair et auteur de tragédies poignantes, il devint le précepteur puis le conseiller principal du jeune empereur Néron, tentant de guider l'Empire avec sagesse et modération au milieu des intrigues politiques de la cour romaine.",
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
          readTime: "7 min read",
          desc: "Découvrez comment la philosophie stoïcienne antique offre des outils pratiques pour développer la force mentale, la résilience et la paix intérieure face aux épreuves.",
          body: [
            "Dans un monde rempli de stress, d'anxiété et d'incertitude, beaucoup cherchent un moyen d'obtenir la paix intérieure et la force psychologique. Parmi les philosophies qui ont survécu pendant plus de deux mille ans, le stoïcisme s'impose comme l'une des écoles de pensée les plus influentes. Ce n'est pas seulement une théorie philosophique, mais un mode de vie qui enseigne à l'homme comment faire face à l'adversité avec un esprit calme, à contrôler ses émotions et à vivre selon la vertu et la sagesse.",
            "Le stoïcisme est apparu dans la Grèce antique puis a prospéré à Rome grâce à de grands philosophes tels que Sénèque, Épictète et l'empereur Marc Aurèle. Le stoïcisme enseigne que l'homme ne peut pas contrôler tout ce qui se passe autour de lui, mais qu'il peut toujours contrôler sa réaction à ces événements. La véritable réussite ne se mesure donc pas par la richesse ou la gloire, mais par la moralité.",
            "Le premier principe cardinal du stoïcisme est de faire la distinction entre ce que vous pouvez contrôler (vos pensées, vos décisions, vos actions) et ce que vous ne pouvez pas (l'opinion des autres, le passé, le futur, la maladie). Le sage stoïcien ne gaspille pas son énergie à résister à ce qu'il ne peut pas changer, mais se concentre sur ce qu'il peut améliorer.",
            "En conclusion, le stoïcisme n'est pas une philosophie d'évasion, mais de confrontation courageuse et sage. Elle nous rappelle que la vie ne sera pas toujours facile, mais que nous pouvons choisir comment la vivre. Lorsque nous réalisons que ce que nous possédons réellement, ce sont nos pensées et nos valeurs, la paix intérieure devient plus proche que nous ne l'imaginons."
          ]
        },
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          featured: true,
          title: "Introduction pratique au stoïcisme moderne",
          readTime: "5 min read",
          desc: "Comment appliquer les enseignements des anciens empereurs et esclaves grecs pour vaincre l'anxiété du monde moderne.",
          body: [
            "Le stoïcisme est une philosophie grecque antique fondée par Zénon de Cition, conçue comme un guide pratique pour vivre en paix dans un monde incertain. Le principe fondamental est la dichotomie du contrôle : distinguer ce qui dépend de nous (nos pensées, nos réactions, nos choix) de ce qui n'en dépend pas (les événements extérieurs, les autres).",
            "En concentrant notre énergie sur ce que nous pouvons contrôler, nous nous libérons de l'anxiété. Marc Aurèle explique dans ses Écrits que le bonheur dépend de la qualité de nos pensées et de nos jugements.",
            "Pour appliquer cela au quotidien, posez-vous cette question face à chaque obstacle : 'Est-ce que cela dépend de moi ?'. Si la réponse est non, acceptez-le sereinement et ajustez votre réaction intérieure."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          featured: false,
          title: "Comprendre l'ombre selon Carl Jung",
          readTime: "7 min read",
          desc: "Découvrez comment intégrer les parts cachées de votre personnalité pour atteindre une véritable complétude psychologique.",
          body: [
            "Selon Carl Jung, l'ombre représente la part inconsciente de notre personnalité, regroupant les désirs, pulsions et traits de caractère refoulés que le moi conscient refuse d'admettre. L'intégration de l'ombre est une étape essentielle du processus d'individuation.",
            "Le refoulement de l'ombre ne signifie pas sa disparition ; elle se manifeste de manière inconsciente sous forme de colère, de culpabilité ou de projection sur les autres. Jung écrivait : 'Jusqu'à ce que vous rendiez l'inconscient conscient, il précisera votre vie et vous l'appellerez destin.'",
            "Le travail d'intégration consiste à affronter ces facettes cachées avec courage. En acceptant nos faiblesses, nous pouvons transformer cette force refoulée en créativité, maturité et accomplissement personnel."
          ]
        },
        {
          category: "development",
          file: "habitudes-atomiques.docx",
          featured: false,
          title: "La psychologie des habitudes atomiques",
          readTime: "4 min read",
          desc: "Pourquoi les petits changements quotidiens ont plus d'impact à long terme que les grandes résolutions brutales.",
          body: [
            "We think that big changes demand heroic actions. In reality, permanent progress lies in the psychology of tiny habits, as James Clear explains.",
            "S'améliorer de seulement 1% chaque jour produit une croissance exponentielle sur un ans.",
            "Pour créer une nouvelle habitude, commencez par une action si simple qu'elle ne demande aucun effort. La constance et la répétition construisent les nouveaux circuits neuronaux nécessaires."
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
          title: "Stoicism: Philosophy of Strength and Calm in the Face of Life",
          readTime: "7 min read",
          desc: "Discover how ancient Stoic philosophy offers practical tools to build mental strength, resilience, and inner peace in the face of life's daily challenges.",
          body: [
            "In a world filled with stress, anxiety, and uncertainty, many are searching for a way to gain inner peace and psychological strength. Among the philosophies that have endured for over two thousand years, Stoicism stands out as one of the most influential schools of thought. It is not just a philosophical theory, but a way of life that teaches how to face adversity with a calm mind, control emotions, and live according to virtue and wisdom.",
            "Stoicism emerged in ancient Greece and flourished in Rome under great philosophers like Seneca, Epictetus, and Emperor Marcus Aurelius. Stoicism asserts that while we cannot control everything that happens around us, we can always control our reaction to those events. Therefore, true success is not measured by wealth or fame, but by character and virtue.",
            "The core principle of Stoicism is to distinguish between what you can control (your thoughts, decisions, actions, character) and what you cannot (other people's opinions, the past, the future, sickness, weather). A wise Stoic does not waste energy resisting what they cannot change, but focuses on what they can improve.",
            "In conclusion, Stoicism is not a philosophy of escaping reality, but of facing it with courage and wisdom. It reminds us that life will not always be easy, but we can choose how to live it. When we realize that what we truly own is our thoughts, actions, and values, inner peace becomes closer than we think."
          ]
        },
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          featured: true,
          title: "A Practical Guide to Modern Stoicism",
          readTime: "5 min read",
          desc: "How to use the ancient wisdom of Roman emperors and Greek slaves to overcome modern anxiety.",
          body: [
            "Stoicism is an ancient Greek philosophy founded by Zeno of Citium, designed as a practical guide to living in peace in an uncertain world. The core principle is the dichotomy of control: distinguishing between what is up to us (thoughts, reactions, choices) and what is not (external events, other people).",
            "By focusing our energy on what we can control, we free ourselves from anxiety. Marcus Aurelius explains in his Meditations that happiness depends on the quality of our thoughts and judgments.",
            "To apply this daily, ask yourself at every obstacle: 'Is this up to me?'. If the answer is no, let it go calmly and focus on shaping a rational reaction."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          featured: false,
          title: "Understanding the Shadow Self according to Jung",
          readTime: "7 min read",
          desc: "Discover how integrating the hidden parts of your personality leads to psychological wholeness.",
          body: [
            "According to Carl Jung, the shadow represents the unconscious part of our personality, gathering the desires, impulses, and traits that our conscious self refuses to acknowledge. Integrating the shadow is an essential step in the process of individuation.",
            "Suppressing the shadow does not make it disappear; it manifests unconsciously through anger, guilt, or projecting onto others. Jung wrote: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.'",
            "Integrating the shadow requires facing these hidden aspects with courage. By accepting our weaknesses, we can transform this energy into creativity, maturity, and deep self-awareness."
          ]
        },
        {
          category: "development",
          file: "habitudes-atomiques.docx",
          featured: false,
          title: "The Psychology of Atomic Habits",
          readTime: "4 min read",
          desc: "Why tiny daily shifts create more permanent long-term impact than massive resolutions.",
          body: [
            "We often believe that massive changes require heroic actions. In reality, permanent progress lies in the psychology of tiny shifts or 'atomic habits', as James Clear explains.",
            "Getting 1% better every day yields an exponential growth over a year (37 times better). The key is to focus on systems rather than end goals.",
            "To build a new habit, start with a task so small it requires no willpower (like reading one page a day). Consistency and repetition build the neural pathways required for permanent change."
          ]
        }
      ],
      products: [
        { id: "guide_stoic", category: "digital", title: "📖 The Daily Stoic Guide (E-book PDF)", price: 9.99, formattedPrice: "$9.99", desc: "A practical 120-page handbook to conquer modern anxiety, build self-discipline, and cultivate unshakable tranquility in daily life.", icon: "book-open" },
        { id: "journal_stoic", category: "digital", title: "📓 Digital Stoic Journal (Notion / PDF)", price: 14.99, formattedPrice: "$14.99", desc: "Your interactive writing companion pre-filled with 100 guided prompts, exercises, and weekly reviews inspired by Marcus Aurelius.", icon: "book" },
        { id: "wallpapers_stoic", category: "digital", title: "🖼️ 3-Pack Philo Wallpapers (4K)", price: 4.99, formattedPrice: "$4.99", desc: "Adorn your smartphone or PC screen with minimalist graphic designs containing powerful quotes from Seneca and Epictetus.", icon: "image" },
        { id: "poster_stoic", category: "physical", title: "🏛️ Marcus Aurelius Wisdom Poster (Physical)", price: 19.99, formattedPrice: "$19.99", desc: "Grand-format premium matte print (50x70 cm) displaying the Stoic Emperor's famous wisdom quote. Free worldwide shipping.", icon: "film" },
        { id: "coin_stoic", category: "physical", title: "🪙 \"Memento Mori\" Stoic Coin (Physical)", price: 12.99, formattedPrice: "$12.99", desc: "A heavy bronze pocket coin engraved as a physical reminder to live fully in the present moment. Carrying pouch included.", icon: "award" }
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
        { category: "علم النفس", title: "الانحياز للسلبية", icon: "brain", desc: "أدمغتنا مبرمجة على رصد المخاطر. وازن هذا الميل عبر التركيز on الإيجابيات لـ 20 ثانية.", thinker: "د. ريك هانسون" },
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
            "تتمحور فلسفة ماركوس أوريليوس حول مفهوم 'العقل كقلعة داخلية'. كان يؤمن إيماناً مطلقاً بأنه على الرغم من عجزنا عن التحكم في الأحداث الخارجية (كالمرض والحروب والموت والتآمر)، فإننا نملك دائماً السيادة الكاملة على عقولنا وتأويلاتنا وردود أفعالنا. يرى أن الألم لا يؤذي الروح ما دام العقل يرفض اعتباره شراً، وأن الغضب ليس سوى ضعف واعتراف بالهزيمة الداخلية.",
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
            "اتُهم سينيكا زوراً بالتآمر ضد نيرون، فتلقى أمراً إمبراطورياً بإنهاء حياته. واجه الموت بهدوء رواقي أسطوري، حيث قام بقطع شرايينه وتناول السم محاطاً بأصدقائه وزوجته باولينا، وظل يملي آخر حكمه الفلسفية حتى لفظ أنفاسه الأخيرة، مقدماً بذلك تطبيقاً عملياً خالداً لفلسفته في مواجهة المصير المأساوي بكل شجاعة ووقار."
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
            "ترتكز فلسفته على مفاهيم 'إرادة القوة' (والتي تعني إرادة التجاوز والنمو والابتكار الإبداعي)، و'الإنسان المتفوق' (Übermensch - الفرد المبدع الذي يصنع قيمه الخاصة بحرية بعيداً عن القطيع)، ومبدأ 'حب القدر' (Amor Fati - القبول الكامل والشجاع للحياة بكل ما فيها من آلام وأفراح دون ندم).",
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
            "جوهر الفلسفة الهيغلية هو 'الجدل' (الديالكتيك). يرى هيغل أن الفكر والواقع ليسا ساكنين بل يتطوران باستمرار من خلال التناقض الداخلي والصراع الذي ينتهي بالارتقاء والتركيب (عملية الأطروحة ونقيضها والتركيب). فالتاريخ البشري ليس مجرد حوادث عشوائية، بل هو المسار العقلاني والمنظم لتطور 'الروح المطلقة' نحو إدراك حريتها التامة.",
            "في كتابه الشهير 'ظواهرية الروح'، طرح هيغل 'جدلية السيد والعبد' والتي توضح كيف يتشكل الوعي بالذات من خلال صراع متبادل من أجل الاعتراف والحرية. كان هذا التحليل حجر الأساس لفهم علاقات القوة والاعتماد المتبادل بين البشر.",
            "كان لفلسفة هيغل تأثير عميق ومباشر على الفكر العالمي؛ فقد أعاد كارل ماركس صياغة الجدل hلصالح المادية الجدلية التي قامت عليها الماركسية، كما ألهمت طريقته فلاسفة الوجودية كـ سارتر، والظواهرية الحديثة، والتحليل النفسي اللاكاني. يظل استيعاب فلسفة هيغل ضرورياً لفهم جذور النظريات السياسية والاجتماعية المعاصرة."
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
          readTime: "دقيقة قراءة 7",
          desc: "مقال شامل يتناول مبادئ الفلسفة الرواقية وتاريخها وكيفية تطبيقها لتحقيق الطمأنينة والسلام الداخلي في عصرنا الحالي.",
          body: [
            "في عالم يمتلئ بالضغوط، والقلق، وعدم اليقين، يبحث الكثيرون عن طريقة تمنحهم السلام الداخلي والقوة النفسية. ومن بين الفلسفات التي صمدت عبر أكثر من ألفي عام, تبرز الرواقية (Stoicism) كواحدة من أكثر المدارس الفكرية تأثيرًا. فهي ليست مجرد نظرية فلسفية، بل أسلوب حياة يعلّم الإنسان كيف يواجه الشدائد بعقل هادئ، ويتحكم في مشاعره، ويعيش وفقًا للفضيلة والحكمة.",
            "ظهرت الرواقية في اليونان القديمة، ثم ازدهرت في روما على يد فلاسفة كبار مثل سينيكا، وإبيكتيتوس، والإمبراطور ماركوس أوريليوس. وحتى اليوم، لا تزال مبادئها تُلهم الملايين حول العالم. وتأسست المدرسة الفلسفية في القرن الثالث قبل الميلاد على يد الفيلسوف زينون الكيتيومي. سميت بهذا الاسم نسبة إلى 'الرواق الملوّن' في مدينة أثينا، حيث كان زينون يعلّم أتباعه.",
            "ترى الرواقية أن الإنسان لا يستطيع التحكم في كل ما يحدث حوله، لكنه يستطيع دائمًا التحكم في رد فعله تجاه تلك الأحداث. ولذلك فإن السعادة لا تعتمد sur المال أو الشهرة أو السلطة، بل على امتلاك عقل متزن وشخصية فاضلة. قال الإمبراطور ماركوس أوريليوس: 'ليست الأشياء هي التي تزعجنا، بل أحكامنا عليها.' وهذه الفكرة تمثل جوهر الرواقية.",
            "المبدأ الأول: ميّز بين ما تستطيع التحكم فيه وما لا تستطيع. يُعد هذا المبدأ أساس الفلسفة الرواقية. هناك أمور تقع تحت سيطرتك مثل أفعالك وقراراتك وأفعالك وأخلاقك. وهناك أمور لا يمكنك التحكم بها مثل آراء الناس والماضي والمستقبل والمرض والطقس وتصرفات الآخرين. الرواقي الحكيم لا يهدر طاقته في مقاومة ما لا يستطيع تغييره، بل يركز على ما يستطيع تحسينه.",
            "المبدأ الثاني والثالث: الفضيلة هي الخير الحقيقي وتقبّل ما لا يمكن تغييره. يرى الرواقيون أن النجاح الحقيقي لا يقاس بالثروة وإنما بالأخلاق (الحكمة، الشجاعة، العدالة، الاعتدال). والقبول بالواقع والعمل داخله بدلاً من البقاء أسيراً للندم يساعد الإنسان على تجاوز الأزمات بسرعة أكبر.",
            "المبدأ الرابع: السيطرة على المشاعر. الرواقيون لا يرفضون المشاعر، بل يرفضون أن تتحكم المشاعر في قراراتهم. فالخوف والغضب والحسد موجودة لدى كل إنسان، لكن الحكيم يتعلم كيف يراقبها قبل أن يتصرف عبر طرح أسئلة عقلانية لتمنح العقل فرصة لقيادة الموقف.",
            "خاتمة: الرواقية ليست فلسفة للهروب من الواقع، بل فلسفة لمواجهته بشجاعة وحكمة. إنها تذكّرنا بأن الحياة لن تكون دائمًا سهلة، لكن بإمكاننا أن نختار كيف نعيشها. فحين ندرك أن ما نملكه حقًا هو أفكارنا وأفعالنا وقيمنا، يصبح السلام الداخلي أقرب مما نتصور."
          ]
        },
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          featured: true,
          title: "العبثية",
          readTime: "دقيقة قراءة 7",
          desc: "استكشاف فلسفي لعمق مفهوم العبث عند ألبير كامو وكيفية التغلب على غياب المعنى الوجودي بالتمرد والحرية الشخصية.",
          body: [
            "الرواقية هي فلسفة يونانية قديمة أسسها زينون الكيتومي، وتعتبر دليلاً عملياً للعيش بسلام في عالم غير مستقر. المبدأ الأساسي للرواقية هو 'ثنائية التحكم': التمييز الدقيق بين الأشياء التي تقع تحت سيطرتنا المباشرة (مثل أفكارنا، ردود أفعالنا، وقراراتنا) وتلك التي لا نملك سلطة عليها (مثل الطقس، آراء الآخرين، أو الأحداث العالمية).",
            "عندما نركز طاقتنا بالكامل على ما يمكننا التحكم فيه، نتحرر من القلق والتوتر. يوضح ماركوس أوريليوس في كتابه 'التأملات' أن السعادة لا تأتي من تغيير الظروف الخارجية، بل من ضبط وتعديل أحكامنا العقلية تجاه هذه الظروف.",
            "لتطبيق هذا في حياتك اليومية، اسأل نفسك عند كل عقبة: 'هل هذا الأمر بيدي؟' إذا كان الجواب لا، فدعه يمر بسلام وركز على صياغة رد فعل عقلاني ومثمر."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          featured: false,
          title: "فهم مفهوم 'الظل' عند كارل يونغ",
          readTime: "دقيقة قراءة 7",
          desc: "اكتشف كيف تتقبل وتدمج الجوانب الخفية والمظلمة من شخصيتك لتحقيق التكامل النفسي والصحة الذاتية.",
          body: [
            "وفقاً لعالم النفس السويسري كارل يونغ، فإن 'الظل' هو الجانب المظلم والخفي من شخصيتنا. يتكون الظل من الصفات، الرغبات، والمشاعر التي نعتبرها غير مقبولة اجتماعياً أو أخلاقياً، فنقوم بكبتها وإخفائها في أعماق اللاوعي منذ الطفولة.",
            "ولكن كبت الظل لا يعني زواله؛ بل يظهر بشكل غير واعي على شكل نوبات غضب، إسقاطات على الآخرين، أو شعور دائم بالذنب. يقول يونغ: 'حتى تدرك اللاوعي، سيوجه حياتك وتسميه قدراً'.",
            "إن عملية 'دمج الظل' تتطلب مواجهة هذه الأجزاء الخفية بشجاعة ودون أحكام مسبقة. من خلال قبول نقاط ضعفنا ومخاوفنا، يمكننا تحويل طاقة الظل السلبية إلى قوة دافعة نحو الإبداع، النضج، والوعي الذاتي الكامل."
          ]
        },
        {
          category: "development",
          file: "habitudes-atomiques.docx",
          featured: false,
          title: "سيكولوجية العادات الذرية الصغيرة",
          readTime: "دقيقة قراءة 4",
          desc: "لماذا تصنع التغييرات اليومية البسيطة فارقاً كبيراً ومستداماً على المدى البعيد أكثر من القرارات الكبيرة المفاجئة.",
          body: [
            "غالباً ما نعتقد أن إحداث تغييرات كبيرة في حياتنا يتطلب قرارات ضخمة ومجهوداً خارقاً. ولكن الحقيقة تكمن في سيكولوجية العادات الصغيرة أو 'العادات الذرية' كما يسميها جيمس كلير.",
            "إن التحسن بنسبة 1% فقط كل يوم يبدو غير ملحوظ على المدى القصير، ولكنه ينتج نمواً هائلاً على مدار العام (37 ضعفاً أفضل). تعتمد هذه الفلسفة على التركيز على 'الأنظمة' بدلاً من 'الأهداف'. فالأنظمة هي العمليات اليومية المستمرة التي تؤدي في النهاية إلى النتائج بشكل طبيعي.",
            "لتأسيس عادة جديدة، ابدأ بخطوات صغيرة جداً لا تتطلب جهداً (مثل قراءة صفحة واحدة يومياً أو ممارسة الرياضة لدقيقتين). التكرار والاستمرارية هما المفتاح لبناء مسارات عصبية جديدة في الدماغ وتحقيق التحول الدائم."
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
