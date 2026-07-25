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
      thinkers: "Penseurs",
      articles: "Articles",
      quotes: "Citations",
      psychology: "Psychologie",
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
      thinkersTitle: "Grands Penseurs",
      articlesTitle: "Articles & Réflexions",
      readMore: "Lire l'article",
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
      seeAllThinkers: "Tous les penseurs →",
      searchThinkerPlaceholder: "Rechercher un penseur...",
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
      bio: "Philosophie Stoïcienne, Sagesse des grands penseurs et Conseils Psychologiques.",
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
      helpTitle: "Aide & FAQ",
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
      donateCustom: "Autre montant"
    },
    en: {
      home: "Home",
      thinkers: "Thinkers",
      articles: "Articles",
      quotes: "Quotes",
      psychology: "Psychology",
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
      thinkersTitle: "Great Thinkers",
      articlesTitle: "Articles & Reflections",
      readMore: "Read Article",
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
      seeAllThinkers: "All thinkers →",
      searchThinkerPlaceholder: "Search for a thinker...",
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
      helpTitle: "Help & FAQ",
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
      donateCustom: "Custom amount"
    },
    ar: {
      home: "الرئيسية",
      thinkers: "المفكرون",
      articles: "المقالات",
      quotes: "حكم",
      psychology: "علم النفس",
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
      thinkersTitle: "كبار المفكرين",
      articlesTitle: "مقالات وتأملات",
      readMore: "اقرأ المقال",
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
      seeAllThinkers: "جميع المفكرين ←",
      searchThinkerPlaceholder: "ابحث عن مفكر...",
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
      helpTitle: "المساعدة والأسئلة الشائعة",
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
      donateCustom: "مبلغ آخر"
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
        { id: "vid4", title: "Friedrich Nietzsche : Pourquoi l'obstacle fait grandir 💪", views: "620K", likes: "115K", duration: "00:58", tags: ["#nietzsche", "#volonte"], youtubeId: "dQw4w9WgXcQ" }
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
          id: "schopenhauer",
          name: "Arthur Schopenhauer",
          era: "1788 - 1860",
          school: "Pessimisme",
          image: "thinkers/images/schopenhauer.jpg",
          bio: "German philosopher best known for his theory of the will-to-live as the metaphysical essence of the world.",
          body: [
            "Né en 1788 et mort en 1860, Arthur Schopenhauer est un philosophe allemand majeur, célèbre pour son œuvre maîtresse 'Le Monde comme volonté et comme représentation'. Il est considéré comme l'un des plus illustres représentants du pessimisme métaphysique.",
            "Selon sa doctrine, l'essence ultime du monde n'est pas la raison, mais une force aveugle et irrationnelle qu'il appelle la 'Volonté de vivre'. Cette volonté pousse sans cesse tous les êtres à désirer, ce qui génère une souffrance perpétuelle. L'art, la musique et le renoncement ascétique sont les seules voies pour s'en libérer temporairement.",
            "Son œuvre a profondément influencé des esprits comme Nietzsche, Freud et Wagner. Sa philosophie invite à réduire nos désirs matériels pour atteindre une tranquillité d'esprit proche de la sagesse orientale."
          ]
        },
        {
          id: "nietzsche",
          name: "Friedrich Nietzsche",
          era: "1844 - 1900",
          school: "Existentialisme / Vitalisme",
          image: "thinkers/images/nietzsche.jpg",
          bio: "Famous for his critique of traditional morality, his concept of the Overman, the will to power, and eternal recurrence.",
          body: [
            "Friedrich Nietzsche (1844 - 1900) est l'un des penseurs les plus révolutionnaires du XIXe siècle. Il a critique de manière radicale la morale traditionnelle, la religion et la métaphysique occidentale, ouvrant la voie à l'existentialisme.",
            "Il a développé les concepts clés de 'volonté de puissance' comme force créatrice, de 'Surhomme' (Übermensch) capable de créer ses propres valeurs, et d''Amor Fati' (l'amour du destin), invitant à embrasser pleinement la vie avec ses joies et ses épreuves.",
            "Son influence sur la littérature, la psychologie et la philosophie postmoderne est immense. Ses écrits poétiques et provocateurs restent une invitation vibrante au dépassement de soi et à l'authenticité."
          ]
        },
        {
          id: "camus",
          name: "Albert Camus",
          era: "1913 - 1960",
          school: "Absurdisme",
          image: "thinkers/images/camus.jpg",
          bio: "French writer and philosopher, Nobel laureate, author of 'The Stranger' and 'The Myth of Sisyphus' dealing with the absurdity of existence.",
          body: [
            "Né en Algérie en 1913 et mort en 1960, Albert Camus est un écrivain et philosophe français, lauréat du prix Nobel de littérature en 1957. Il est le créateur de la philosophie de l'absurde.",
            "Camus définit l'absurde comme le divorce entre le désir de sens de l'homme et le silence irrationnel du monde. Dans 'Le Mythe de Sisyphe', il affirme que l'homme doit accepter cette condition absurde et révolter son destin pour trouver la liberté.",
            "Ses prises de position humanistes contre les totalitarismes l'ont éloigné de Jean-Paul Sartre. Son œuvre, dont 'L'Étranger' et 'La Peste', reste un plaidoyer intemporel pour la dignité, la solidarité et la justice."
          ]
        },
        {
          id: "marcaurele",
          name: "Marc Aurèle",
          era: "121 - 180 ap. J.-C.",
          school: "Stoïcisme",
          image: "thinkers/images/marcaurele.jpg",
          bio: "Roman Emperor and philosopher, author of 'Meditations', a timeless blueprint for inner resilience and self-discipline.",
          body: [
            "Marc Aurèle (121 - 180 ap. J.-C.) fut empereur romain et l'un des philosophes stoïciens les plus célèbres. Surnommé le 'roi-philosophe', il régna avec justice et tempérance pendant une période de crises et de guerres.",
            "Il a rédigé ses réflexions quotidiennes, publiées sous le titre 'Pensées pour moi-même'. Ce journal intime, écrit sur les champs de bataille, lui servait de guide pour maintenir sa discipline personnelle, se rappeler sa mortalité et agir selon la raison.",
            "Ses écrits sont une référence absolue en matière de résilience mentale. Sa philosophie démontre que le calme intérieur ne dépend pas des circonstances extérieures, mais de la maîtrise de nos propres jugements."
          ]
        },
        {
          id: "seneque",
          name: "Sénèque",
          era: "4 av. J.-C. - 65 ap. J.-C.",
          school: "Stoïcisme",
          image: "thinkers/images/seneque.jpg",
          bio: "Imperial advisor and playwright, famous for his essays on the shortness of life, death, and mastering the passions.",
          body: [
            "Sénèque (4 av. J.-C. - 65 ap. J.-C.) était un philosophe stoïcien, dramaturge et homme d'État romain. Précepteur puis conseiller de l'empereur Néron, il fut l'une des figures les plus influentes de la Rome antique.",
            "Ses célèbres 'Lettres à Lucilius' abordent de manière pratique des thèmes comme la brièveté de la vie, la maîtrise de la colère et la préparation à la mort. Pour lui, la philosophie doit être un entraînement quotidien de l'âme.",
            "Contraint au suicide par Néron, sa mort calme et digne est restée un exemple légendaire d'application pratique de la doctrine stoïcienne face à la fatalité et à l'injustice."
          ]
        },
        {
          id: "kant",
          name: "Emmanuel Kant",
          era: "1724 - 1804",
          school: "Idéalisme Allemand / Criticisme",
          image: "thinkers/images/kant.jpg",
          bio: "One of the greatest Enlightenment thinkers, known for his critical examinations of pure reason, practical reason, and ethics.",
          body: [
            "Emmanuel Kant (1724 - 1804), né et mort à Königsberg, est le penseur le plus influent des Lumières allemandes. Sa philosophie critique a opéré une véritable révolution dans la théorie de la connaissance et de l'éthique.",
            "Il a formulé l'éthique déontologique centrée sur le concept du 'devoir' et de l''impératif catégorique' : agir de telle sorte que la maxime de notre action puisse être érigée en loi universelle. Il a placé la dignité humaine au centre de la morale.",
            "Réputé pour sa vie réglée comme une horloge, Kant a redéfini les frontières de la métaphysique à travers ses trois grandes Critiques, posant les bases du rationalisme moderne."
          ]
        },
        {
          id: "hegel",
          name: "G. W. F. Hegel",
          era: "1770 - 1831",
          school: "Idéalisme Allemand",
          image: "thinkers/images/hegel.jpg",
          bio: "Creator of a comprehensive dialectical philosophy aimed at understanding the evolutionary progression of History and Spirit.",
          body: [
            "Georg Wilhelm Friedrich Hegel (1770 - 1831) est le géant de l'idéalisme allemand. Il a conçu un système philosophique monumental visant à expliquer l'évolution dialectique de l'Esprit (Geist) à travers l'Histoire.",
            "Au cœur de son système se trouve la dialectique (Thèse, Antithèse, Synthèse), un processus dynamique où les contradictions se dépassent pour atteindre une vérité supérieure. Sa dialectique du Maître et de l'Esclave est une référence en philosophie politique.",
            "Son œuvre a profondément influencé Karl Marx, l'existentialisme et la phénoménologie moderne, faisant de lui une figure incontournable pour comprendre l'histoire de la pensée politique et philosophique."
          ]
        }
      ],
      articles: [
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
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
          title: "La psychologie des habitudes atomiques",
          readTime: "4 min read",
          desc: "Pourquoi les petits changements quotidiens ont plus d'impact à long terme que les grandes résolutions brutales.",
          body: [
            "Nous pensons souvent que les grands changements exigent des actions héroïques. En réalité, le progrès durable repose sur la psychologie des petites habitudes ou 'habitudes atomiques', comme l'explique James Clear.",
            "S'améliorer de seulement 1% chaque jour produit une croissance exponentielle sur un an (37 fois supérieur). La clé réside dans la focalisation sur les systèmes plutôt que sur les objectifs finaux.",
            "Pour créer une nouvelle habitude, commencez par une action si simple qu'elle ne demande aucun effort (comme lire une page par jour). La constance et la répétition construisent les nouveaux circuits neuronaux nécessaires."
          ]
        },
        {
          category: "history",
          file: "socrate-nietzsche-morale.docx",
          title: "De Socrate à Nietzsche : Une histoire de la morale",
          readTime: "8 min read",
          desc: "Un voyage passionnant à travers le temps pour comprendre comment notre conception du bien et du mal a écolué.",
          body: [
            "La morale est l'une des questions philosophiques majeures de l'humanité. Socrate en a posé les bases rationnelles en reliant la vertu à la connaissance : celui qui sait ce qu'est le bien ne peut faire le mal de plein gré.",
            "Au XIXe siècle, Friedrich Nietzsche a opéré un renversement critique de ces valeurs, dénonçant la morale traditionnelle comme une 'morale d'esclaves' qui exalte la faiblesse et le renoncement au profit d'un idéal ascétique.",
            "Nietzsche a prôné une morale créatrice de valeurs centrée sur la volonté de puissance et le dépassement de soi. Comprendre cette évolution nous aide à réévaluer nos convictions intimes avec profondeur."
          ]
        },
        {
          category: "philosophy",
          file: "seneque-anxiete.docx",
          title: "Sénèque et l'anxiété : conseils face aux soucis quotidiens",
          readTime: "6 min read",
          desc: "Apprenez des lettres de Sénèque à Lucilius comment libérer votre esprit des peurs futures et vous ancrer dans le présent.",
          body: [
            "Dans ses lettres à Lucilius, le philosophe stoïcien Sénèque analyse le sentiment d'anxiété face à l'avenir. Il affirme que la plupart de nos craintes sont imaginaires et que 'nous souffrons plus souvent en imagination qu'en réalité'.",
            "Sénèque recommande de préparer notre esprit en envisageant délibérément le pire scénario possible afin de désamorcer la peur. Cet entraînement mental brise l'angoisse de l'inconnu.",
            "Pour calmer l'anxiété, nous devons vivre dans le présent. Le futur n'est pas encore là, le passé n'est plus, seul le présent est sous notre contrôle direct."
          ]
        },
        {
          category: "psychology",
          file: "sublimation-psychologie.docx",
          title: "La sublimation psychologique : canaliser le négatif en créativité",
          readTime: "5 min read",
          desc: "Découvrez comment l'esprit humain transforme ses émotions difficiles en art, écriture ou sport inspirant.",
          body: [
            "La sublimation est un mécanisme de défense psychologique mature et raffiné. Au lieu de refouler nos désirs ou émotions douloureuses, l'esprit les canalise vers des activités créatrices et socialement valorisées.",
            "Par exemple, la colère accumulée peut être canalisée à travers une activité sportive intense, tandis qu'une tristesse profonde peut inspirer une poésie touchante, un roman ou une peinture expressive.",
            "La sublimation permet de purifier l'esprit et d'extérioriser les tensions intérieures en toute sécurité, favorisant ainsi la résilience et l'épanouissement personnel."
          ]
        },
        {
          category: "philosophy",
          file: "stoicisme-force-calme.docx",
          image: "stoicisme-roof.jpg",
          title: "Le stoïcisme : philosophie de force et de calme face à la vie",
          readTime: "7 min de lecture",
          desc: "Découvrez comment la philosophie stoïcienne antique offre des outils pratiques pour développer la force mentale, la résilience et la paix intérieure face aux épreuves.",
          body: [
            "Dans un monde rempli de stress, d'anxiété et d'incertitude, beaucoup cherchent un moyen d'obtenir la paix intérieure et la force psychologique. Parmi les philosophies qui ont survécu pendant plus de deux mille ans, le stoïcisme s'impose comme l'une des écoles de pensée les plus influentes. Ce n'est pas seulement une théorie philosophique, mais un mode de vie qui enseigne à l'homme comment faire face à l'adversité avec un esprit calme, à contrôler ses émotions et à vivre selon la vertu et la sagesse.",
            "Le stoïcisme est apparu dans la Grèce antique puis a prospéré à Rome grâce à de grands philosophes tels que Sénèque, Épictète et l'empereur Marc Aurèle. Le stoïcisme enseigne que l'homme ne peut pas contrôler tout ce qui se passe autour de lui, mais qu'il peut toujours contrôler sa réaction à ces événements. La véritable réussite ne se mesure donc pas par la richesse ou la gloire, mais par la moralité.",
            "Le premier principe cardinal du stoïcisme est de faire la distinction entre ce que vous pouvez contrôler (vos pensées, vos décisions, vos actions) et ce que vous ne pouvez pas (l'opinion des autres, le passé, le futur, la maladie). Le sage stoïcien ne gaspille pas son énergie à résister à ce qu'il ne peut pas changer, mais se concentre sur ce qu'il peut améliorer.",
            "En conclusion, le stoïcisme n'est pas une philosophie d'évasion, mais de confrontation courageuse et sage. Elle nous rappelle que la vie ne sera pas toujours facile, mais que nous pouvons choisir comment la vivre. Lorsque nous réalisons que ce que nous possédons réellement, ce sont nos pensées et nos valeurs, la paix intérieure devient plus proche que nous ne l'imaginons."
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
        { id: "vid4", title: "Friedrich Nietzsche: Why obstacles make you grow stronger 💪", views: "620K", likes: "115K", duration: "00:58", tags: ["#nietzsche", "#willpower"], youtubeId: "dQw4w9WgXcQ" }
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
          id: "schopenhauer",
          name: "Arthur Schopenhauer",
          era: "1788 - 1860",
          school: "Pessimism",
          image: "thinkers/images/schopenhauer.jpg",
          bio: "German philosopher best known for his theory of the will-to-live as the metaphysical essence of the world.",
          body: [
            "Born in 1788 and passing in 1860, Arthur Schopenhauer was a pivotal German philosopher best known for his masterwork 'The World as Will and Representation'. He stands as a towering figure of philosophical pessimism.",
            "Schopenhauer argued that the fundamental reality of the universe is a blind, irrational driving force he termed the 'Will to live'. This endless striving causes perpetual dissatisfaction and suffering. He proposed aesthetic contemplation of art and music, alongside ascetic self-denial, as ways to escape this cycle.",
            "His thoughts left a profound mark on thinkers like Friedrich Nietzsche, Sigmund Freud, and Richard Wagner, offering a pragmatic approach to living by tempering expectations and desires."
          ]
        },
        {
          id: "nietzsche",
          name: "Friedrich Nietzsche",
          era: "1844 - 1900",
          school: "Existentialism / Vitalism",
          image: "thinkers/images/nietzsche.jpg",
          bio: "Famous for his critique of traditional morality, his concept of the Overman, the will to power, and eternal recurrence.",
          body: [
            "Friedrich Nietzsche (1844 - 1900) was a radical German philosopher, cultural critic, and poet. He is famous for his sharp critiques of traditional morality, religion, and Western rationalism.",
            "Nietzsche introduced foundational ideas such as the 'will to power,' the concept of the 'Overman' (Übermensch) who creates his own values, and 'Amor Fati'—the unconditional love of one's fate, regardless of suffering.",
            "His work paved the way for existentialism and modern psychology. Nietzsche remains a powerful voice encouraging intellectual courage, self-overcoming, and the creative affirmation of life."
          ]
        },
        {
          id: "camus",
          name: "Albert Camus",
          era: "1913 - 1960",
          school: "Absurdism",
          image: "thinkers/images/camus.jpg",
          bio: "French writer and philosopher, Nobel laureate, author of 'The Stranger' and 'The Myth of Sisyphus' dealing with the absurdity of existence.",
          body: [
            "Born in Algeria in 1913 and dying in 1960, Albert Camus was a French Nobel Prize-winning author and philosopher. He is renowned as the primary architect of the philosophy of the Absurd.",
            "Camus explored the conflict between the human drive to find meaning and the cold, silent indifference of the universe. In 'The Myth of Sisyphus', he argued that rather than resigning to despair, one must embrace the Absurd and live with rebellious joy.",
            "His humanitarian stances against violence and ideological dogmatism separated him from contemporaries like Sartre. His books stand as a timeless testament to human solidarity, liberty, and moral clarity."
          ]
        },
        {
          id: "marcaurele",
          name: "Marcus Aurelius",
          era: "121 - 180 AD",
          school: "Stoicism",
          image: "thinkers/images/marcaurele.jpg",
          bio: "Roman Emperor and philosopher, author of 'Meditations', a timeless blueprint for inner resilience and self-discipline.",
          body: [
            "Marcus Aurelius (121 - 180 AD) was Roman Emperor and a leading Stoic philosopher. Often referred to as the 'Philosopher-King', he ruled Rome at its height during turbulent times of plague and war.",
            "During his military campaigns, he wrote a private journal later published as 'Meditations'. These personal writings served as self-reminders to maintain virtue, emotional control, and duty in the face of immense pressure.",
            "His meditations remain a timeless guide for mental resilience and leadership. His teachings remind us that our peace of mind is an inner citadel, built by governing our own thoughts and judgments."
          ]
        },
        {
          id: "seneque",
          name: "Seneca",
          era: "4 BC - 65 AD",
          school: "Stoicism",
          image: "thinkers/images/seneque.jpg",
          bio: "Imperial advisor and playwright, famous for his essays on the shortness of life, death, and mastering the passions.",
          body: [
            "Seneca the Younger (4 BC - 65 AD) was a Roman Stoic philosopher, statesman, and dramatist. Serving as advisor to Emperor Nero, he was one of the wealthiest and most influential figures in the Roman Empire.",
            "His famous 'Letters to Lucilius' offer practical Stoic advice on dealing with grief, anger, anxiety, and the shortness of life. He championed philosophy not as an abstract theory, but as an essential daily practice.",
            "Sentenced to death by Nero, Seneca's calm, deliberate suicide became a legendary symbol of Stoic composure and virtue in the face of death."
          ]
        },
        {
          id: "kant",
          name: "Immanuel Kant",
          era: "1724 - 1804",
          school: "German Idealism / Criticism",
          image: "thinkers/images/kant.jpg",
          bio: "One of the greatest Enlightenment thinkers, known for his critical examinations of pure reason, practical reason, and ethics.",
          body: [
            "Immanuel Kant (1724 - 1804) was a German philosopher and one of the central figures of the Enlightenment. His critical philosophy revolutionized epistemology, ethics, and aesthetics.",
            "Kant established deontological ethics, centered around the 'Categorical Imperative'—the moral law that one should act only according to rules that could be willed as universal laws. He believed human dignity rests on moral autonomy.",
            "Famous for his incredibly disciplined and routined life in Königsberg, Kant's critiques of pure and practical reason laid the groundwork for almost all subsequent modern philosophy."
          ]
        },
        {
          id: "hegel",
          name: "G. W. F. Hegel",
          era: "1770 - 1831",
          school: "German Idealism",
          image: "thinkers/images/hegel.jpg",
          bio: "Creator of a comprehensive dialectical philosophy aimed at understanding the evolutionary progression of History and Spirit.",
          body: [
            "Georg Wilhelm Friedrich Hegel (1770 - 1831) was a towering German philosopher and the founder of Absolute Idealism. He created a vast system explaining the development of Spirit (Geist) through history.",
            "Hegel is best known for his dialectical method (often structured as Thesis, Antithesis, Synthesis) and the 'Master-Slave dialectic', illustrating how self-awareness develops through struggle and mutual recognition.",
            "His monumental philosophy exerted an immense influence on Karl Marx, phenomenology, and existentialism, shaping the course of modern political thought and the philosophy of history."
          ]
        }
      ],
      articles: [
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
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
          title: "The Psychology of Atomic Habits",
          readTime: "4 min read",
          desc: "Why tiny daily shifts create more permanent long-term impact than massive resolutions.",
          body: [
            "We often believe that massive changes require heroic actions. In reality, permanent progress lies in the psychology of tiny shifts or 'atomic habits', as James Clear explains.",
            "Getting 1% better every day yields an exponential growth over a year (37 times better). The key is to focus on systems rather than end goals.",
            "To build a new habit, start with a task so small it requires no willpower (like reading one page a day). Consistency and repetition build the neural pathways required for permanent change."
          ]
        },
        {
          category: "history",
          file: "socrate-nietzsche-morale.docx",
          title: "From Socrates to Nietzsche: A History of Morals",
          readTime: "8 min read",
          desc: "A fascinating journey through time to understand how our conception of good and evil has evolved.",
          body: [
            "Morality is one of humanity's central philosophical questions. Socrates laid the rational foundation by linking virtue with knowledge: he who knows what is good cannot act evilly on purpose.",
            "In the 19th century, Friedrich Nietzsche initiated a critical reversal of these values, criticizing traditional morality as a 'slave morality' that elevates weakness and self-denial.",
            "Nietzsche called for a creative moral system centered on the will to power and self-overcoming. Understanding this evolution helps us critically evaluate our own moral beliefs."
          ]
        },
        {
          category: "philosophy",
          file: "seneque-anxiete.docx",
          title: "Seneca and Anxiety: Advice for Daily Troubles",
          readTime: "6 min read",
          desc: "Learn from Seneca's letters to Lucilius how to free your mind from future fears and ground yourself in the present.",
          body: [
            "In his famous letters to Lucilius, the Stoic philosopher Seneca analyzes the feeling of anxiety and fear of the future. He argues that most of our fears are mental illusions, writing that 'we suffer more often in imagination than in reality'.",
            "Seneca advises us to train our minds by premeditating the worst-case scenario to break the power of fear. This mental exercise removes the weight of anxiety.",
            "To be free from anxiety, we must practice living in the present. The future has not yet arrived, the past is gone, and the present moment is the only reality we control."
          ]
        },
        {
          category: "psychology",
          file: "sublimation-psychologie.docx",
          title: "Psychological Sublimation: Channeling the Negative into Art",
          readTime: "5 min read",
          desc: "Discover how the human mind transforms its difficult emotions into creative writing, art, or sports.",
          body: [
            "Sublimation is a mature psychological defense mechanism. Instead of suppressing our painful emotions or unacceptable desires, the mind channels them into constructive and socially valued activities.",
            "For instance, intense anger can be channeled through rigorous sports, while deep sadness can inspire moving poetry, a novel, or expressive paintings.",
            "Sublimation helps purify the mind and safely discharge emotional tensions, preventing psychological blockages and fostering personal growth and creativity."
          ]
        },
        {
          category: "philosophy",
          file: "stoicisme-force-calme.docx",
          image: "stoicisme-roof.jpg",
          title: "Stoicism: Philosophy of Strength and Calm in the Face of Life",
          readTime: "7 min read",
          desc: "Discover how ancient Stoic philosophy offers practical tools to build mental strength, resilience, and inner peace in the face of life's daily challenges.",
          body: [
            "In a world filled with stress, anxiety, and uncertainty, many are searching for a way to gain inner peace and psychological strength. Among the philosophies that have endured for over two thousand years, Stoicism stands out as one of the most influential schools of thought. It is not just a philosophical theory, but a way of life that teaches how to face adversity with a calm mind, control emotions, and live according to virtue and wisdom.",
            "Stoicism emerged in ancient Greece and flourished in Rome under great philosophers like Seneca, Epictetus, and Emperor Marcus Aurelius. Stoicism asserts that while we cannot control everything that happens around us, we can always control our reaction to those events. Therefore, true success is not measured by wealth or fame, but by character and virtue.",
            "The core principle of Stoicism is to distinguish between what you can control (your thoughts, decisions, actions, character) and what you cannot (other people's opinions, the past, the future, sickness, weather). A wise Stoic does not waste energy resisting what they cannot change, but focuses on what they can improve.",
            "In conclusion, Stoicism is not a philosophy of escaping reality, but of facing it with courage and wisdom. It reminds us that life will not always be easy, but we can choose how to live it. When we realize that what we truly own is our thoughts, actions, and values, inner peace becomes closer than we think."
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
        { id: "vid4", title: "فريدريك نيتشه: كيف تجعلك العقبات والصعوبات أقوى وأصلب 💪", views: "620K", likes: "115K", duration: "00:58", tags: ["#نيتشه", "#القوة"], youtubeId: "dQw4w9WgXcQ" }
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
          id: "schopenhauer",
          name: "أرتور شوبنهاور",
          era: "1788 - 1860",
          school: "التشاؤمية",
          image: "thinkers/images/schopenhauer.jpg",
          bio: "فيلسوف ألماني شهير بنظريته حول إرادة الحياة باعتبارها الجوهر الميتافيزيقي للعالم وموقفه المتشائم.",
          body: [
            "ولد الفيلسوف الألماني أرتور شوبنهاور عام 1788 وتوفي عام 1860. اشتهر بكتابه العمدة 'العالم كإرادة وتمثل'، ويعتبر من أبرز ممثلي المذهب التشاؤمي في الفلسفة الغربية الحديثة.",
            "يرى شوبنهاور أن الوجود بأكمله تقوده قوة غامضة وعمياء تسمى 'إرادة الحياة'. هذه الإرادة لا عقل لها ولا هدف، وهي تسعى دائماً للاستمرار مما يسبب الألم والمعاناة المستمرة للإنسان. وللخلاص من هذا الألم، يطرح شوبنهاور الفن والموسيقى والزهد كوسائل مؤقتة وفعالة للتحرر.",
            "أثرت فلسفة شوبنهاور بشكل عميق على العديد من المفكرين الكبار مثل فريدريك نيتشه وسيجموند فرويد وريتشارد فاغنر. وتدعو فلسفته العملية إلى التواضع وتقليل الرغبات لبناء حياة أكثر هدوءاً وسلاماً داخلياً."
          ]
        },
        {
          id: "nietzsche",
          name: "فريدريك نيتشه",
          era: "1844 - 1900",
          school: "الوجودية / الحيوية",
          image: "thinkers/images/nietzsche.jpg",
          bio: "اشتهر بنقده اللاذع للأخلاق والقيم التقليدية، ومفهوم الإنسان المتفوق، وإرادة القوة والعود الأبدي.",
          body: [
            "ولد فريدريك نيتشه عام 1844 وتوفي عام 1900. يعتبر من رواد الفلسفة الوجودية والحيوية، واشتهر بأسلوبه الأدبي الفريد وكتاباته المليئة بالتحدي والنقد اللاذع للثقافة الغربية والأخلاق السائدة.",
            "اشتهر بنظرية 'إرادة القوة' التي يراها المحرك الأساسي لكل فعل إنساني، ومفهوم 'الإنسان المتفوق' (Übermensch) الذي يتجاوز الأخلاق التقليدية ليصنع قيمه الخاصة بحرية. كما نادى بمبدأ 'حب القدر' (Amor Fati) الذي يدعو لقبول الحياة بكل ما فيها من آلام وأفراح.",
            "تركت فلسفة نيتشه بصمة عميقة في الأدب وعلم النفس والفلسفة المعاصرة. ورغم تعرض أفكاره للتحريف والجدل، إلا أنها تظل دعوة قوية للشجاعة الفكرية وتجاوز الذات وإعادة تقييم كل القيم."
          ]
        },
        {
          id: "camus",
          name: "ألبير كامو",
          era: "1913 - 1960",
          school: "العبثية",
          image: "thinkers/images/camus.jpg",
          bio: "كاتب وفيلسوف فرنسي حائز على جائزة نوبل، صاحب رواية 'الغريب' و'أسطورة سيزيف' اللتين تجسدان العبث البشري.",
          body: [
            "ولد ألبير كامو عام 1913 وتوفي عام 1960. وهو كاتب وفيلسوف فرنسي ولد في الجزائر، وحصل على جائزة نوبل في الأدب عام 1957. اشتهر بروايته 'الغريب' ومقالاته الفلسفية مثل 'أسطورة سيزيف'.",
            "تتمحور فلسفته حول مفهوم 'العبث'، وهو الصراع بين رغبة الإنسان في البحث عن المعنى وبين صمت الكون البارد. ويرى كامو أن مواجهة هذا العبث دون استسلام أو هروب هي التي تمنح الإنسان حريته الحقيقية وكرامته.",
            "تميز كامو بمواقفه الإنسانية الرافضة للعنف والشمولية، وركز في أعماله المتأخرة مثل 'الإنسان المتمرد' على التضامن البشري والعدالة، مما جعله صوتاً أخلاقياً بارزاً في القرن العشرين."
          ]
        },
        {
          id: "marcaurele",
          name: "ماركوس أوريليوس",
          era: "121 - 180 م",
          school: "الرواقية",
          image: "thinkers/images/marcaurele.jpg",
          bio: "إمبراطور روماني وفيلسوف، كاتب 'التأملات' التي تمثل دليلاً عملياً خالداً لبناء المرونة والصلابة النفسية.",
          body: [
            "ماركوس أوريليوس (121 - 180 م) هو إمبراطور روماني وفيلسوف رواقي، حكم روما في أوج قوتها واعتبر آخر الأباطرة الخمسة الصالحين. عُرف بلقب 'الفيلسوف الملك' نظراً لحكمته وزهده.",
            "كتب ماركوس أوريليوس مذكراته الشخصية التي عُرفت لاحقاً بكتاب 'التأملات'. كان يكتب لنفسه أثناء الحملات العسكرية ليعزز انضباطه الداخلي ويذكر نفسه بالواجب الأخلاقي ومواجهة الموت بسلام وشجاعة.",
            "تعتبر تأملاته دليلاً خالداً لبناء المرونة النفسية والصلابة العقلية. وتعلمنا فلسفته أن القوة الحقيقية تبدأ من الداخل، من خلال السيطرة الكاملة على أفكارنا وردود أفعالنا تجاه العالم الخارجي."
          ]
        },
        {
          id: "seneque",
          name: "سينيكا",
          era: "4 ق.م - 65 م",
          school: "الرواقية",
          image: "thinkers/images/seneque.jpg",
          bio: "مستشار إمبراطور وكاتب روماني، اشتهر برسائله في قصر الحياة، ومواجهة الموت والتحكم في المشاعر.",
          body: [
            "ولد الفيلسوف والكاتب الروماني سينيكا في قرطبة عام 4 قبل الميلاد وتوفي عام 65 ميلادي. كان مستشاراً للإمبراطور نيرون، وتعتبر رسائله ومسرحياته من كلاسيكيات الأدب اللاتيني الرواقي.",
            "اشتهر برسائله الفلسفية إلى صديقه لوسيليوس، حيث ناقش مواضيع حيوية مثل قصر الحياة، وكيفية مواجهة الغضب والقلق، والتعامل مع الموت. يرى سينيكا أن الفلسفة يجب أن تكون أداة عملية لمواجهة صعوبات الحياة اليومية.",
            "رغم ثرائه الفاحش ومناصبه السياسية الحساسة، كان سينيكا يدعو للزهد والاعتدال. وتعتبر وفاته الدرامية بأمر من نيرون تجسيداً للشجاعة والهدوء الرواقي في مواجهة الموت والظلم."
          ]
        },
        {
          id: "kant",
          name: "إيمانويل كانط",
          era: "1724 - 1804",
          school: "المثالية الألمانية / النقدية",
          image: "thinkers/images/kant.jpg",
          bio: "أحد أعظم مفكري عصر التنوير، عرف بأبحاثه النقدية للعقل الخالص والعقل العملي والمنظومة الأخلاقية والواجب.",
          body: [
            "ولد إيمانويل كانط عام 1724 وتوفي عام 1804 في مدينة كونيغسبرغ الألمانية. يعتبر من أهم مفكري عصر التنوير، وأحدثت فلسفته النقدية ثورة معرفية كبرى غيرت مجرى الفكر الغربي بأكمله.",
            "أسس كانط الأخلاق الواجبية بناءً على مبدأ 'الأمر المطلق'، وهو قانون أخلاقي يفرض على الإنسان أن يتصرف دائماً بطريقة تجعل من فعله قانوناً عاماً صالحاً للجميع. يرى كانط أن كرامة الإنسان وحريته تنبعان من قدرته على تشريع القوانين الأخلاقية بنفسه.",
            "عُرف كانط بحياته المنظمة والدقيقة للغاية. وقد فتحت كتبه الثلاثة الكبرى في نقد العقل المحض والعملي والحكم آفاقاً جديدة في دراسة المعرفة والأخلاق والجمال، مما جعله حجر الأساس للفلسفة الحديثة."
          ]
        },
        {
          id: "hegel",
          name: "جورج هيغل",
          era: "1770 - 1831",
          school: "المثالية الألمانية",
          image: "thinkers/images/hegel.jpg",
          bio: "مؤسس نظام فلسفي جدلي متكامل يسعى لتفسير التطور التاريخي والروحي وحركة الفكر والوجود البشري.",
          body: [
            "ولد جورج فيلهلم فريدريش هيغل عام 1770 وتوفي عام 1831. وهو فيلسوف ألماني بارز ومؤسس المثالية المطلقة، واشتهر ببناء نظام فلسفي شامل يسعى لتفسير التاريخ والوجود وتطور الوعي البشري.",
            "يعتبر الجدل (الديالكتيك) جوهر فلسفة هيغل، حيث يرى أن الفكر والتاريخ يتطوران عبر صراع مستمر بين الأطروحة (الموقف) ونقيض الأطروحة، لينتجا في النهاية التركيب (التركيب المتجاوز). كما اشتهر بجدلية 'السيد والعبد' في تفسير نشوء الوعي بالذات.",
            "أثر هيغل بشكل هائل على مسار الفلسفة والسياسة في القرنين التاسع عشر والعشرين، وكانت أفكاره الأساس الذي بنيت عليه الماركسية وفلسفة التاريخ الحديثة والوجودية."
          ]
        }
      ],
      articles: [
        {
          category: "philosophy",
          file: "introduction-stoicisme.docx.odt",
          title: "دليل عملي لتطبيق الرواقية في العصر الحديث",
          readTime: "قراءة 5 دقائق",
          desc: "كيف نطبق حكم أباطرة روما القديمة وعبيد اليونان للتغلب على القلق والتوتر في عالمنا المعاصر.",
          body: [
            "الرواقية هي فلسفة يونانية قديمة أسسها زينون الكيتومي، وتعتبر دليلاً عملياً للعيش بسلام في عالم غير مستقر. المبدأ الأساسي للرواقية هو 'ثنائية التحكم': التمييز الدقيق بين الأشياء التي تقع تحت سيطرتنا المباشرة (مثل أفكارنا، ردود أفعالنا، وقراراتنا) وتلك التي لا نملك سلطة عليها (مثل الطقس، آراء الآخرين، أو الأحداث العالمية).",
            "عندما نركز طاقتنا بالكامل على ما يمكننا التحكم فيه، نتحرر من القلق والتوتر. يوضح ماركوس أوريليوس في كتابه 'التأملات' أن السعادة لا تأتي من تغيير الظروف الخارجية، بل من ضبط وتعديل أحكامنا العقلية تجاه هذه الظروف.",
            "لتطبيق هذا في حياتك اليومية، اسأل نفسك عند كل عقبة: 'هل هذا الأمر بيدي؟' إذا كان الجواب لا، فدعه يمر بسلام وركز على صياغة رد فعل عقلاني ومثمر."
          ]
        },
        {
          category: "psychology",
          file: "ombre-carl-jung.docx",
          title: "فهم مفهوم 'الظل' عند كارل يونغ",
          readTime: "قراءة 7 دقائق",
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
          title: "سيكولوجية العادات الذرية الصغيرة",
          readTime: "قراءة 4 دقائق",
          desc: "لماذا تصنع التغييرات اليومية البسيطة فارقاً كبيراً ومستداماً على المدى البعيد أكثر من القرارات الكبيرة المفاجئة.",
          body: [
            "غالباً ما نعتقد أن إحداث تغييرات كبيرة في حياتنا يتطلب قرارات ضخمة ومجهوداً خارقاً. ولكن الحقيقة تكمن في سيكولوجية العادات الصغيرة أو 'العادات الذرية' كما يسميها جيمس كلير.",
            "إن التحسن بنسبة 1% فقط كل يوم يبدو غير ملحوظ على المدى القصير، ولكنه ينتج نمواً هائلاً على مدار العام (37 ضعفاً أفضل). تعتمد هذه الفلسفة على التركيز على 'الأنظمة' بدلاً من 'الأهداف'. فالأنظمة هي العمليات اليومية المستمرة التي تؤدي في النهاية إلى النتائج بشكل طبيعي.",
            "لتأسيس عادة جديدة، ابدأ بخطوات صغيرة جداً لا تتطلب جهداً (مثل قراءة صفحة واحدة يومياً أو ممارسة الرياضة لدقيقتين). التكرار والاستمرارية هما المفتاح لبناء مسارات عصبية جديدة في الدماغ وتحقيق التحول الدائم."
          ]
        },
        {
          category: "history",
          file: "socrate-nietzsche-morale.docx",
          title: "من سقراط إلى نيتشه: تاريخ تطور الأخلاق والفضائل",
          readTime: "قراءة 8 دقائق",
          desc: "رحلة تاريخية شيقة عبر الزمن لفهم كيف تطورت مفاهيم الخير والشر وتغيرت نظرة الإنسان للقيم الأخلاقية.",
          body: [
            "تعتبر الأخلاق من أهم القضايا الفلسفية التي شكلت المجتمعات البشرية. يمثل الفيلسوف اليوناني سقراط بداية التفكير الأخلاقي المنظم، حيث ربط بين الفضيلة والمعرفة؛ فمن يعرف الخير لا يمكنه فعل الشر عمداً.",
            "ومع تطور العصور، شهدت فلسفة الأخلاق تحولاً جذرياً على يد فريدريك نيتشه. انتقد نيتشه الأخلاق التقليدية معتبراً إياها 'أخلاق العبيد' التي تمجد الضعف والاستسلام. ونادى بنظام أخلاقي جديد يتمحور حول 'إرادة القوة' وتجاوز الإنسان لذاته ليكون هو صانع قيمه الخاصة.",
            "إن فهم هذا التطور الفكري يساعدنا على إدراك كيف تشكلت قيمنا الحالية ويفتح الباب أمامنا لإعادة تقييم معتقداتنا الأخلاقية بشكل نقدي وعميق."
          ]
        },
        {
          category: "philosophy",
          file: "seneque-anxiete.docx",
          title: "كيف تواجه قلق الحياة اليومية؟ نصائح من الفيلسوف الرواقي سينيكا",
          readTime: "قراءة 6 دقائق",
          desc: "تعلم من رسائل سينيكا إلى لوسيليوس كيف تحرر عقلك من الخوف من المستقبل والتركيز على اللحظة الحالية لبناء سلام داخلي.",
          body: [
            "في رسائله الشهيرة إلى صديقه لوسيليوس، يناقش الفيلسوف الرواقي سينيكا طبيعة القلق والخوف من المستقبل. يرى سينيكا أن معظم مخاوفنا هي أوهام عقليّة وأننا 'نعاني في الخيال أكثر مما نعاني في الواقع'.",
            "ينصحنا سينيكا بتدريب عقولنا على مواجهة أسوأ الاحتمالات والقبول بها مسبقاً. هذا التمرين الذهني يساعد في كسر هيبة الخوف وتقليل حدة التوتر.",
            "للتحرر من القلق، يجب أن نعتاد على تقدير اللحظة الحالية والتركيز على أفعال اليوم، فالغد لم يأتِ بعد والأمس قد ولى، والآن هو كل ما نملك حقيقةً للعمل والعيش."
          ]
        },
        {
          category: "psychology",
          file: "sublimation-psychologie.docx",
          title: "قوة التسامي النفسي: كيف تحول مشاعرك السلبية إلى طاقة إبداعية؟",
          readTime: "قراءة 5 دقائق",
          desc: "دليل مبسط لفهم حيلة 'التسامي' الدفاعية في علم النفس وكيفية استخدام الفن، الكتابة، أو الرياضة لتطهير النفس وصقل الروح.",
          body: [
            "يعتبر 'التسامي' (Sublimation) من أرقى الحيل الدفاعية التي يطورها العقل البشري للتعامل مع النزعات والمشاعر غير المقبولة أو المؤلمة. بدلاً من كبت هذه الطاقات، يقوم العقل بتحويلها وتوجيهها نحو أنشطة مفيدة ومقبولة اجتماعياً.",
            "على سبيل المثال، يمكن تحويل الغضب العارم أو الإحباط الشديد إلى ممارسة رياضة عنيفة، أو تحويل الحزن الدفين إلى كتابة رواية أدبية مؤثرة أو لوحة فنية معبرة.",
            "يساعد التسامي على تطهير النفس وتفريغ الشحنات العاطفية الزائدة بشكل آمن، مما يمنع تراكم التوتر النفسي ويحفز الإنتاجية والابتكار الشخصي."
          ]
        },
        {
          category: "philosophy",
          file: "stoicisme-force-calme.docx",
          image: "stoicisme-roof.jpg",
          title: "الرواقية: فلسفة القوة والهدوء في مواجهة الحياة",
          readTime: "قراءة 7 دقائق",
          desc: "اكتشف كيف تقدم لك الفلسفة الرواقية القديمة أدوات عملية لبناء القوة النفسية والصلابة العقلية والهدوء الداخلي لمواجهة تحديات الحياة اليومية بكل ثقة.",
          body: [
            "في عالم يمتلئ بالضغوط، والقلق، وعدم اليقين، يبحث الكثيرون عن طريقة تمنحهم السلام الداخلي والقوة النفسية. ومن بين الفلسفات التي صمدت عبر أكثر من ألفي عام، تبرز الرواقية (Stoicism) كواحدة من أكثر المدارس الفكرية تأثيرًا. فهي ليست مجرد نظرية فلسفية، بل أسلوب حياة يعلّم الإنسان كيف يواجه الشدائد بعقل هادئ، ويتحكم في مشاعره، ويعيش وفقًا للفضيلة والحكمة.",
            "ظهرت الرواقية في اليونان القديمة، ثم ازدهرت في روما على يد فلاسفة كبار مثل سينيكا، وإبيكتيتوس، والإمبراطور ماركوس أوريليوس. وحتى اليوم، لا تزال مبادئها تُلهم الملايين حول العالم. وتأسست المدرسة الفلسفية في القرن الثالث قبل الميلاد على يد الفيلسوف زينون الكيتيومي. سميت بهذا الاسم نسبة إلى 'الرواق الملوّن' في مدينة أثينا، حيث كان زينون يعلّم أتباعه.",
            "ترى الرواقية أن الإنسان لا يستطيع التحكم في كل ما يحدث حوله، لكنه يستطيع دائمًا التحكم في رد فعله تجاه تلك الأحداث. ولذلك فإن السعادة لا تعتمد على المال أو الشهرة أو السلطة، بل على امتلاك عقل متزن وشخصية فاضلة. قال الإمبراطور ماركوس أوريليوس: 'ليست الأشياء هي التي تزعجنا، بل أحكامنا عليها.' وهذه الفكرة تمثل جوهر الرواقية.",
            "المبدأ الأول: ميّز بين ما تستطيع التحكم فيه وما لا تستطيع. يُعد هذا المبدأ أساس الفلسفة الرواقية. هناك أمور تقع تحت سيطرتك مثل أفعالك وقراراتك وأفعالك وأخلاقك. وهناك أمور لا يمكنك التحكم بها مثل آراء الناس والماضي والمستقبل والمرض والطقس وتصرفات الآخرين. الرواقي الحكيم لا يهدر طاقته في مقاومة ما لا يستطيع تغييره، بل يركز على ما يستطيع تحسينه.",
            "المبدأ الثاني والثالث: الفضيلة هي الخير الحقيقي وتقبّل ما لا يمكن تغييره. يرى الرواقيون أن النجاح الحقيقي لا يقاس بالثروة وإنما بالأخلاق (الحكمة، الشجاعة، العدالة، الاعتدال). والقبول بالواقع والعمل داخله بدلاً من البقاء أسيراً للندم يساعد الإنسان على تجاوز الأزمات بسرعة أكبر.",
            "المبدأ الرابع: السيطرة على المشاعر. الرواقيون لا يرفضون المشاعر، بل يرفضون أن تتحكم المشاعر في قراراتهم. فالخوف والغضب والحسد موجودة لدى كل إنسان، لكن الحكيم يتعلم كيف يراقبها قبل أن يتصرف عبر طرح أسئلة عقلانية لتمنح العقل فرصة لقيادة الموقف.",
            "خاتمة: الرواقية ليست فلسفة للهروب من الواقع، بل فلسفة لمواجهته بشجاعة وحكمة. إنها تذكّرنا بأن الحياة لن تكون دائمًا سهلة، لكن بإمكاننا أن نختار كيف نعيشها. فحين ندرك أن ما نملكه حقًا هو أفكارنا وأفعالنا وقيمنا، يصبح السلام الداخلي أقرب مما نتصور."
          ]
        }
      ],
      products: [
        { id: "guide_stoic", category: "digital", title: "📖 الدليل الرواقي اليومي (كتاب إلكتروني PDF)", price: 9.99, formattedPrice: "9.99 $", desc: "دليل عملي من 120 صفحة للتغلب على القلق المعاصر، وبناء الانضباط الذاتي، وتعزيز السلام الداخلي في حياتك اليومية.", icon: "book-open" },
        { id: "journal_stoic", category: "digital", title: "📓 مفكرة الرواقية الرقمية (Notion / PDF)", price: 14.99, formattedPrice: "14.99 $", desc: "مفكرة يومية للكتابة والتأمل، تحتوي على 100 تمرين وسؤال موجه مقتبس من كتابات الإمبراطور ماركوس أوريليوس.", icon: "book" },
        { id: "wallpapers_stoic", category: "digital", title: "🖼️ حزمة 3 خلفيات فلسفية (بدقة 4K)", price: 4.99, formattedPrice: "4.99 $", desc: "زين شاشة هاتفك أو حاسوبك بتصاميم راقية وبسيطة تحمل مقولات خالدة لكل من الفيلسوف سينيكا وإبيكتيتوس.", icon: "image" },
        { id: "poster_stoic", category: "physical", title: "🏛️ ملصق حكمة ماركوس أوريليوس (مادي)", price: 19.99, formattedPrice: "19.99 $", desc: "ملصق جداري مطبوع بجودة عالية (50x70 سم) يحمل مقولة الإمبراطور الرواقي الأشهر لتزيين غرفتك. شحن مجاني.", icon: "film" },
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
