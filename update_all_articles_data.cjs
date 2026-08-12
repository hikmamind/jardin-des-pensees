const fs = require('fs');

let fileContent = fs.readFileSync('data_v11.js', 'utf8');
const dataPrefix = "const TIKTOK_DATA = ";
const dataSuffix = ";\n\nexport default TIKTOK_DATA;";
let objectString = fileContent.replace(dataPrefix, "").replace(dataSuffix, "").trim();

let TIKTOK_DATA = eval("(" + objectString + ")");

// 1. Fully enrich Article 0: why-people-distance-when-you-succeed in AR, FR, EN
const articleData = {
  ar: {
    id: "why-people-distance-when-you-succeed",
    file: "why-people-distance-when-you-succeed.html",
    title: "لماذا يبتعد الناس عنك عندما تبدأ بالنجاح؟",
    category: "psychology",
    categoryName: "علم النفس وتطوير الذات",
    readTime: "٨ دقائق قراءة",
    date: "٢٠ مايو ٢٠٢٦",
    author: "حكمة ونور | Hikma & Nour",
    desc: "تحليل نفسي عميق يكشف أسرار تغير العلاقات عند التقدم، ولماذا يتحول الإعجاب إلى برود أو غيرة، وكيف تحمي سلامك الداخلي.",
    chapo: "عندما تبدأ في التقدم وتحقيق أهدافك، تلاحظ أن بعض العلاقات المقربة تتغير بصمت. هذا التحول ليس بالضرورة دليلاً على كراهية، بل يكشف أسراراً عميقة حول المقارنة الاجتماعية، والغيرة اللاواعية، وكيفية حماية سلامك الداخلي في كل مرحلة من مسارك.",
    summaryBox: {
      title: "الخلاصة المبدئية",
      summary: "النجاح لا يغيرك أنت فقط، بل يعيد تشكيل صورتك في أعين المحيطين بك. بينما يستلهم البعض من تقدمك، يشعر آخرون بتهديد غير مقصود لقيمتهم الذاتية ومكانتهم.",
      question: "هل تغيرت أنت، أم أن النجاح هو المرآة الصادقة التي تسقط الأقنعة وتكشف حقيقة العلاقات؟"
    },
    image: "why_people_distance_success_hero.jpg",
    imageAlt: "شخص ينظر إلى الأفق من قمة عالية متأملاً في حقيقة العلاقات بعد النجاح",
    quote: "النجاح لا يكشف فقط من أنت، بل يكشف أيضاً الطريقة التي ينظر بها الآخرون إلى أنفسهم من خلالك.",
    quoteAuthor: "— حكمة ونور",
    toc: [
      "المقدمة",
      "١. عندما تبدأ في النجاح، تتغير نظرة الآخرين",
      "٢. المقارنة الاجتماعية والغيرة اللاواعية",
      "٣. ليس الجميع مستعداً لرؤيتك تتجاوزهم",
      "٤. النجاح كمرآة كاشفة للعلاقات الحقيقية",
      "٥. خطة عملية: كيف تتعامل مع تغير المحيطين بحكمة",
      "٦. كيف تحافظ على سلامك النفسي",
      "ما يجب أن تتذكره",
      "الخلاصة والتأمل الأخير"
    ],
    sections: [
      {
        num: "01",
        title: "عندما تبدأ في النجاح، تتغير نظرة الآخرين",
        content: [
          "في بداية أي رحلة نحو تحقيق الأهداف، ستجد الكثيرين يحيطون بك بالتشجيع والدعاء والتعاطف. في تلك المرحلة، يكون موقعك مألوفاً وغير مهدد لمن حولك، بل قد يجد البعض في مرافقتك نوعاً من الرضا النفسي.",
          "لكن اللحظة التي تبدأ فيها ثمار عملك بالظهور، وتتحول الأحلام المجردة إلى واقع ملموس، تبدأ موازين القوى النفسية في التغير. النجاح يعيد تعريف موقعك في عيون الآخرين، فالمسافة التي قطعتها إلى الأمام تجعل البعض يشعر تلقائياً بأنه تراجع إلى الوراء، حتى لو لم تنقص منه شيئاً."
        ]
      },
      {
        num: "02",
        title: "المقارنة الاجتماعية والغيرة اللاواعية",
        content: [
          "علم النفس الاجتماعي يفسر هذه الظاهرة بما يُعرف بـ 'المقارنة الاجتماعية التلقائية'. فعندما يرى الإنسان شخصاً كان يشاطره نفس الظروف والمستوى يبدأ بالصعود السريع، يستشعر عقله الباطن صدمة غير معلنة تتعلق بتقديره الذاتي.",
          "الغيرة في كثير من الأحيان ليست رغبة شريرة في إيذائك، بل هي ألم داخلي ينشأ عند المقارنة. صعودك يواجه الآخرين بحقائق قد يفضلون تفاديها: ركودهم، تأجيلهم لقراراتهم المصيرية، أو استسلامهم لمنطقة الراحة."
        ]
      },
      {
        type: "insight",
        badge: "🧠 فكرة في علم النفس الاجتماعي",
        title: "نظرية المقارنة الاجتماعية (ليون فيستنجر)",
        text: "يقيس الإنسان قيمته الشخصية تلقائياً بمقارنة إنجازاته بأقرانه المقربين. عندما يتقدم صديق مقرب خطوة نوعية، يُفسر العقل الباطن هذا الفارق أحياناً على أنه تقصير شخصي، فيتحول الإعجاب المبدئي إلى انسحاب أو نقد غير مبرر."
      },
      {
        num: "03",
        title: "ليس الجميع مستعداً لرؤيتك تتجاوزهم",
        content: [
          "هناك قاعدة واقعية في العلاقات الإنسانية: بعض الناس يحبونك بصدق، ولكن فقط مادمت داخل الإطار الذي رسموه لك. وجودك في نفس الدائرة يشعرهم بالطمأنينة والأمان المشترك.",
          "أما عندما تتخطى الحدود المعتادة وتتجاوز السقف المشترك، يشعر هؤلاء بأن الرابط القديم قد اهتز. هذا الارتباك يدفع البعض إلى تقليل قيمة ما حققته، أو عزوه إلى الحظ والصدف، كطريقة دفاعية لحماية صورتهم الذاتية."
        ]
      },
      {
        num: "04",
        title: "النجاح كمرآة كاشفة للعلاقات الحقيقية",
        content: [
          "في أوقات التعثر والانكسار، يسهل على الجميع إظهار التعاطف والمواساة، لأن الضعف لا يهدد أحداً. لكن في لحظات التألق والارتقاء، يظهر المعدن الحقيقي للنفوس.",
          "النجاح يعمل مثل مصفاة دقيقة وغربال صادق. إنه يميز بوضوح بين من كان يرافقك لغرض العادة أو الحاجة، وبين من يحمل في قلبه فرحاً حقيقياً ومجرداً لرؤيتك تتألق وتبلغ أعلى المراتب."
        ]
      },
      {
        type: "practical",
        title: "كيف تتعامل مع تغير المحيطين بك بحكمة؟",
        desc: "٥ قواعد نفسية وسلوكية تحميك من الصراعات غير المجدية وتصون نقاء روحك:",
        tips: [
          { num: "01", title: "لا تبرر نجاحك ولا تعتذر عن اجتهادك", text: "الاعتذار عن الإنجاز يرسل إشارة خاطئة بالذنب. دع نتائج عملك تتحدث دون استعراض مبالغ فيه ودون تبرير دفاعي." },
          { num: "02", title: "تجنب الاستعراض غير الضروري", text: "التميز الحقيقي هادئ بطبعه. لا تجعل حديثك متمحوراً حول مكاسبك المادية أو أرقامك أمام من قد يمر بظروف صعبة." },
          { num: "03", title: "حافظ على تواضعك ونقاء جوهرك", text: "التواضع هو الحصن المنيع الذي يحميك من الغرور، ويعين الأرواح النبيلة على البقاء قريبة منك دون حواجز." },
          { num: "04", title: "امتنع عن الجدالات والدفاع عن النفس", text: "إذا لاحظت نقداً مبطناً أو تلميحات باردة، لا تدخل في مواجهات. الصمت والابتسامة الهادئة هما أبلغ رد." },
          { num: "05", title: "ركز طاقتك على أهدافك والسلام الداخلي", text: "طاقتك أثمن من أن تُهدر في محاولة إرضاء الجميع. استثمر وقتك في تنمية نفسك ومساندة من يثق بك." }
        ]
      },
      {
        num: "05",
        title: "كيف تحافظ على سلامك النفسي؟",
        content: [
          "السلام النفسي في أوقات الصعود يبدأ من التحرر من الحاجة إلى التصفيق الدائم. ليس عليك أن تجعل الجميع راضين عن طريقك الجديد، فالنمو يفرض عليك دائماً مغادرة بعض المساحات القديمة.",
          "أحط نفسك بالقلة الصادقة التي تشاركك الشغف وتفرح من أعماقها لتقدمك. هؤلاء هم السند الحقيقي الذين يضيء نجاحك طريقهم دون أن يثير في نفوسهم ظلال الغيرة."
        ]
      }
    ],
    inBrief: [
      "نجاحك لا يعني بالضرورة أن الآخرين يكرهونك، بل يعكس صراعهم الداخلي مع ذواتهم.",
      "توازن العلاقات يتغير طبيعياً وتلقائياً عندما يتغير موقع أحد الطرفين في سلم الإنجاز.",
      "لا تجعل مخاوف المحيطين بك أو ترددهم يحدد سقف طموحك أو اتجاه مسارك.",
      "التواضع الحقيقي هو أن ترتقي وتتألق دون أن تصغّر نفسك لإرضاء غيرك.",
      "الصديق الصادق هو من يرى نجاحك مصدر فرح وإلهام مشترك يبني الثقة والمحبة."
    ],
    conclusion: "النجاح ليس مجرد نقطة وصول أو مكسب مادي، بل هو اختبار دقيق للأرواح ومصفاة طبيعية للعلاقات الإنسانية. لا تحزن على من يختار الابتعاد، فكل مرحلة جديدة في الحياة تتطلب وعياً أعمق وتكشف من يمتلك النقاء الكافي ليكمل المسير بجانبك.",
    finalQuote: "النجاح لا يبعدك عن الآخرين، بل يوضح لك ببساطة من يستطيع أن يواصل السير معك في نفس الضوء.",
    finalQuoteAuthor: "— حكمة ونور | Hikma & Nour",
    comments: [
      { author: "كريم المنصور", time: "منذ ٣ ساعات", text: "تحليل دقيق وواقعي جداً، مررت بهذه التجربة تماماً عندما بدأت مشروعي الخاص." },
      { author: "هدى السعدي", time: "منذ ٦ ساعات", text: "قاعدة عدم الاعتذار عن النجاح غيرت نظرتي للكثير من المواقف المحرجة." }
    ]
  },

  fr: {
    id: "why-people-distance-when-you-succeed",
    file: "why-people-distance-when-you-succeed.html",
    title: "Pourquoi les gens s'éloignent-ils lorsque vous réussissez ?",
    category: "psychology",
    categoryName: "Psychologie & Développement",
    readTime: "8 min de lecture",
    date: "20 Mai 2026",
    author: "Hikma & Nour | حكمة ونور",
    desc: "Une analyse psychologique lucide qui dévoile la dynamique des relations face au succès, l'envie inconsciente et l'art de préserver sa paix intérieure.",
    chapo: "Lorsque vous commencez à progresser et à concrétiser vos ambitions, certaines relations changent silencieusement. Ce phénomène n'est pas toujours une preuve de malveillance : il révèle des dynamiques psychologiques profondes sur la comparaison sociale, l'insécurité de l'ego et l'art de préserver sa paix intérieure.",
    summaryBox: {
      title: "Synthèse de l'article",
      summary: "Le succès ne transforme pas seulement votre vie ; il modifie la perception que les autres ont d'eux-mêmes en votre présence. Tandis que certains y trouvent une inspiration, d'autres y perçoivent une remise en question involontaire de leur propre valeur.",
      question: "Avez-vous changé, ou la réussite est-elle simplement le révélateur qui fait tomber les masques et clarifie les liens sincères ?"
    },
    image: "why_people_distance_success_hero.jpg",
    imageAlt: "Une personne observant la ville depuis les hauteurs, méditant sur les relations humaines après la réussite",
    quote: "Le succès ne révèle pas seulement qui vous êtes. Il révèle aussi la manière dont les autres se regardent à travers vous.",
    quoteAuthor: "— Hikma & Nour",
    toc: [
      "Introduction",
      "1. Quand la réussite change votre image",
      "2. La comparaison sociale et la jalousie inconsciente",
      "3. Tout le monde n'est pas prêt à vous voir évoluer",
      "4. Le succès comme miroir révélateur des liens authentiques",
      "5. Guide pratique : comment gérer ces changements avec sagesse",
      "6. Comment préserver votre paix intérieure",
      "Ce qu'il faut retenir",
      "Conclusion & Sérénité"
    ],
    sections: [
      {
        num: "01",
        title: "Quand la réussite change votre image",
        content: [
          "Au début de toute quête, beaucoup de personnes de votre entourage vous encourageront et manifesteront leur soutien bienveillant. À ce stade, votre parcours ne menace personne : vous partagez les mêmes doutes, les mêmes difficultés et les mêmes espoirs.",
          "Cependant, dès que vos efforts portent leurs fruits et que vos ambitions deviennent une réalité tangible, les dynamiques relationnelles basculent. Le succès modifie votre place dans le regard d'autrui : la distance que vous franchissez vers l'avant donne involontairement à certains l'impression d'avoir reculé."
        ]
      },
      {
        num: "02",
        title: "La comparaison sociale et la jalousie inconsciente",
        content: [
          "La psychologie sociale explique ce phénomène par le mécanisme de la 'comparaison sociale automatique'. Quand un être humain voit un égal progresser rapidement, son ego perçoit une menace inconsciente pour sa propre valeur personnelle.",
          "La jalousie n'est que rarement une volonté délibérée de nuire ; elle est avant tout une souffrance interne provoquée par le miroir de la réussite d'autrui. Votre ascension renvoie involontairement vos proches à leur propre stagnation, à leurs renoncements ou à leur peur de sortir de leur zone de confort."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Idée psychologique : La comparaison sociale",
        title: "La théorie de Leon Festinger",
        text: "Selon les principes établis par Leon Festinger, nous évaluons continuellement notre valeur par rapport à nos pairs proches. L'élévation soudaine d'un égal est souvent interprétée par l'inconscient comme une preuve de notre propre insuffisance, transformant l'admiration première en froideur défensive."
      },
      {
        num: "03",
        title: "Tout le monde n'est pas prêt à vous voir évoluer",
        content: [
          "Il existe une réalité lucide sur les relations humaines : certaines personnes vous apprécient sincèrement, mais à la condition tacite que vous restiez dans le cadre qu'elles ont défini pour vous. Votre présence au même niveau les rassure et garantit une parité familière.",
          "Lorsque vous franchissez le plafond commun, cet équilibre est rompu. Pour atténuer leur malaise intérieur, certains chercheront à minimiser votre réussite, à l'attribuer à la simple chance ou à prendre discrètement leurs distances."
        ]
      },
      {
        num: "04",
        title: "Le succès comme miroir révélateur des liens authentiques",
        content: [
          "Dans les moments de doute et d'échec, il est aisé pour tout le monde d'offrir sa compassion, car la vulnérabilité ne suscite aucune rivalité. C'est dans vos moments de triomphe que se révèle la véritable qualité des âmes qui vous entourent.",
          "Le succès agit comme un filtre salutaire d'une remarquable précision. Il distingue sans équivoque les compagnons d'opportunité des amis authentiques qui célèbrent avec joie et grandeur d'âme votre élévation."
        ]
      },
      {
        type: "practical",
        title: "Guide pratique : Comment réagir avec sagesse face à ces changements ?",
        desc: "5 principes comportementaux pour préserver votre paix et maintenir des relations saines :",
        tips: [
          { num: "01", title: "Ne vous excusez jamais de réussir", text: "S'excuser pour le fruit de son travail envoie un signal de culpabilité injustifié. Laissez vos résultats parler avec discrétion sans chercher d'approbation permanente." },
          { num: "02", title: "Évitez toute ostentation superflue", text: "L'excellence véritable est sobre. Évitez de centrer toutes vos conversations sur vos gains devant ceux qui traversent une période d'incertitude." },
          { num: "03", title: "Conservez votre humilité naturelle", text: "L'humilité est l'armure qui vous protège de l'arrogance et permet aux esprits bienveillants de rester proches de vous sans barrières artificielles." },
          { num: "04", title: "Refusez les débats stériles", text: "Face aux piques déguisées ou aux froideurs inexpliquées, ne cherchez pas à vous justifier. Le silence et un sourire serein sont les plus élégantes des réponses." },
          { num: "05", title: "Canalisez votre énergie vers votre paix intérieure", text: "Votre énergie est trop précieuse pour être dissipée à vouloir plaire à tout le monde. Investissez-la dans vos projets et auprès de ceux qui croient en vous." }
        ]
      },
      {
        num: "05",
        title: "Comment préserver votre paix intérieure ?",
        content: [
          "La sérénité dans l'ascension commence par la libération du besoin d'applaudissements constants. Vous n'avez pas vocation à convaincre tout le monde de la légitimité de votre route ; grandir implique souvent de quitter certains espaces devenus trop étroits.",
          "Entourez-vous du cercle restreint de personnes inspirantes qui partagent vos valeurs et célèbrent sincèrement vos victoires. Ce sont elles qui éclaireront votre chemin sans jamais projeter sur vous l'ombre de leurs propres doutes."
        ]
      }
    ],
    inBrief: [
      "Votre réussite ne signifie pas que les autres vous rejettent, mais reflète leur propre combat intérieur face à la comparaison.",
      "L'équilibre relationnel évolue naturellement lorsque l'un des deux progresse vers de nouveaux horizons.",
      "Ne laissez jamais les insécurités d'autrui fixer le plafond de vos ambitions ou de votre épanouissement.",
      "La vraie humilité consiste à vous élever sans vous rétrécir pour rassurer qui que ce soit.",
      "L'ami authentique est celui qui voit dans votre succès une source de joie sincère et d'émulation réciproque."
    ],
    conclusion: "Le succès n'est pas seulement l'accomplissement d'un objectif, c'est aussi un filtre naturel qui clarifie nos liens humains. Ne concevez aucune rancœur envers ceux qui prennent de la distance : chaque nouvelle étape de vie révèle avec clarté ceux qui possèdent la grandeur d'âme nécessaire pour cheminer à vos côtés.",
    finalQuote: "Le succès ne vous éloigne pas des autres. Il vous montre simplement qui est capable de continuer à marcher à vos côtés dans la même lumière.",
    finalQuoteAuthor: "— Hikma & Nour | حكمة ونور",
    comments: [
      { author: "Julien R.", time: "Il y a 3 heures", text: "Une analyse d'une remarquable justesse. J'ai vécu cette situation exacte lors du lancement de mon entreprise." },
      { author: "Élodie B.", time: "Il y a 6 heures", text: "La règle de ne jamais s'excuser de réussir m'a libérée d'un immense sentiment de culpabilité." }
    ]
  },

  en: {
    id: "why-people-distance-when-you-succeed",
    file: "why-people-distance-when-you-succeed.html",
    title: "Why Do People Distance Themselves When You Succeed?",
    category: "psychology",
    categoryName: "Psychology & Growth",
    readTime: "8 min read",
    date: "May 20, 2026",
    author: "Hikma & Nour | حكمة ونور",
    desc: "A deep psychological analysis revealing the dynamics of relationships when you advance, unconscious envy, and the art of preserving inner peace.",
    chapo: "When you begin to progress and achieve meaningful milestones, you often notice that certain relationships quietly shift. This change is not necessarily driven by ill will: it reveals profound psychological mechanisms regarding social comparison, ego insecurity, and the art of maintaining inner calm.",
    summaryBox: {
      title: "Core Summary",
      summary: "Success does not merely change your life; it alters how others perceive themselves in your presence. While some find genuine inspiration, others feel an unintended threat to their self-esteem.",
      question: "Have you changed, or is success simply the mirror that removes masks and clarifies authentic friendships?"
    },
    image: "why_people_distance_success_hero.jpg",
    imageAlt: "A person standing on a high viewpoint overlooking the city, contemplating human relationships after success",
    quote: "Success does not only reveal who you are. It also reveals how others look at themselves through you.",
    quoteAuthor: "— Hikma & Nour",
    toc: [
      "Introduction",
      "1. When Success Changes How Others See You",
      "2. Social Comparison and Unconscious Envy",
      "3. Not Everyone Is Ready to See You Evolve",
      "4. Success as a Revealing Mirror for True Ties",
      "5. Practical Guide: How to Handle Changing Circles with Wisdom",
      "6. How to Maintain Your Inner Peace",
      "Key Takeaways",
      "Conclusion & Inner Harmony"
    ],
    sections: [
      {
        num: "01",
        title: "When Success Changes How Others See You",
        content: [
          "At the start of any pursuit, many around you will offer sincere encouragement and companionship. At that early stage, your position is familiar and non-threatening: you share the same struggles, uncertainties, and hopes.",
          "However, the moment your efforts yield tangible results and dreams crystallize into reality, the underlying social balance shifts. Success redefines how others perceive you: the distance you cover forward inadvertently makes some feel as though they have fallen behind."
        ]
      },
      {
        num: "02",
        title: "Social Comparison and Unconscious Envy",
        content: [
          "Social psychology explains this phenomenon through automatic social comparison. When individuals witness a peer ascend rapidly, their subconscious ego experiences an unspoken threat to their own perceived self-worth.",
          "Envy is seldom a conscious malice; it is primarily an internal discomfort triggered by comparison. Your growth involuntarily confronts those around you with their own hesitations, delayed choices, or complacency in their comfort zone."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Psychological Insight: Social Comparison",
        title: "Leon Festinger's Theory",
        text: "Humans instinctively calibrate their self-worth against close peers. When someone in their immediate circle takes a quantum leap forward, the subconscious often interprets this disparity as a personal shortfall, turning early praise into emotional retreat."
      },
      {
        num: "03",
        title: "Not Everyone Is Ready to See You Evolve",
        content: [
          "There is a timeless truth in human dynamics: some people love you genuinely, but only within the boundaries they have mentally assigned to you. Your presence at the same level reassures their sense of mutual comfort.",
          "When you surpass that common ceiling, the dynamic feels unsettled. To cope with internal friction, some may downplay your milestones, attribute your achievements to mere luck, or slowly withdraw from your sphere."
        ]
      },
      {
        num: "04",
        title: "Success as a Revealing Mirror for True Ties",
        content: [
          "During times of vulnerability and setback, compassion is effortless because weakness threatens no one. It is during your moments of triumph that the authentic nature of human character comes to light.",
          "Success functions as a precision filter. It clearly separates fair-weather companions from sincere friends who find unvarnished joy in seeing you reach your highest potential."
        ]
      },
      {
        type: "practical",
        title: "Practical Guide: How to Navigate Shifting Circles with Wisdom",
        desc: "5 behavioral principles to safeguard your peace and cultivate genuine connections:",
        tips: [
          { num: "01", title: "Never apologize for your success", text: "Apologizing for honest achievement sends a signal of unwarranted guilt. Let your work speak quietly without needing endless external validation." },
          { num: "02", title: "Avoid unnecessary ostentation", text: "True mastery is understated. Avoid turning every conversation toward material gains in front of those who may be facing difficult chapters." },
          { num: "03", title: "Preserve your grounded humility", text: "Humility is the shield that guards against arrogance and invites noble minds to remain close to you without artificial barriers." },
          { num: "04", title: "Refuse defensive and fruitless debates", text: "When encountering subtle shade or coldness, resist the urge to defend yourself. Silence and a calm demeanor remain the most dignified response." },
          { num: "05", title: "Channel your energy toward inner peace", text: "Your mental energy is far too precious to squander on trying to appease everyone. Invest it in your vision and with those who believe in you." }
        ]
      },
      {
        num: "05",
        title: "How to Maintain Your Inner Peace",
        content: [
          "Peace of mind during elevation begins with relinquishing the need for universal applause. You are not obliged to make everyone comfortable with your new trajectory; personal evolution inherently means outgrowing certain familiar spaces.",
          "Surround yourself with the select few who share your vision and rejoice wholeheartedly in your milestones. These are the true companions who illuminate your path without ever casting the shadow of their own doubts."
        ]
      }
    ],
    inBrief: [
      "Your success does not mean others hate you; it often mirrors their internal struggle with self-comparison.",
      "Relational dynamics naturally evolve when one person advances toward new horizons.",
      "Never let the insecurities or hesitation of others set the ceiling for your growth.",
      "True humility is rising to your full potential without shrinking yourself to please anyone.",
      "A genuine friend sees in your success a source of shared joy and mutual inspiration."
    ],
    conclusion: "Success is not merely arriving at a destination; it is a natural sieve that clarifies human connections. Hold no bitterness toward those who drift away: every new season of life reveals who possesses the maturity and goodwill to walk beside you.",
    finalQuote: "Success does not separate you from others. It simply clarifies who is capable of continuing to walk beside you in the same light.",
    finalQuoteAuthor: "— Hikma & Nour | حكمة ونور",
    comments: [
      { author: "Julian R.", time: "3 hours ago", text: "Incredibly accurate analysis. Experienced this exact shift when I launched my tech startup." },
      { author: "Elodie B.", time: "6 hours ago", text: "The rule of never apologizing for succeeding cured my long-standing guilt." }
    ]
  }
};

['ar', 'fr', 'en'].forEach(lang => {
  const idx = TIKTOK_DATA.content[lang].articles.findIndex(a => a.id === 'why-people-distance-when-you-succeed');
  if (idx !== -1) {
    TIKTOK_DATA.content[lang].articles[idx] = articleData[lang];
  }
});

const stringified = JSON.stringify(TIKTOK_DATA, null, 2);
const finalContent = dataPrefix + stringified + dataSuffix;
fs.writeFileSync('data_v11.js', finalContent);

console.log('Successfully enriched all articles in data_v11.js');
