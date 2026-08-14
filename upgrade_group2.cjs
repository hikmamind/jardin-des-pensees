const fs = require('fs');

async function updateGroup2() {
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  // --- Article 5: solitude-blessing-or-curse ---
  const art5_ar = {
    chapo: "بين وحشة الانعزال المؤلم وبركة الخلوة الواعية، تكمن واحدة من أعظم التجارب الإنسانية. متى تصبح العزلة فرصة للنهوض بالروح، ومتى تتحول إلى سجن يخنق العقل؟",
    summaryBox: {
      title: "✦ جوهر العزلة الإيجابية",
      summary: "الفرق بين الوحدة المؤلمة (Loneliness) والعزلة الخصبة (Solitude) يكمن في جودة الحوار مع الذات. العزلة الواعية هي مختبر الحكماء لتجديد الطاقة واكتشاف الهوية الحقيقية.",
      question: "هل تهرب من العزلة خوفاً من مواجهة أفكارك، أم تستثمرها كواحة للسلام والارتقاء؟"
    },
    sections: [
      {
        num: "01",
        title: "الفرق الجوهري بين الوحدة والعزلة الخصبة",
        content: [
          "الوحدة هي شعور قاهر بالفراغ والاغتراب حتى وسط الحشود، بينما العزلة الواعية هي اختيار حر للاختلاء بالنفس والاستمتاع بحضرتها دون انقطاع عن العالم.",
          "كما كتب الفيلسوف بول تيليش: 'الوحدة تعبر عن ألم أن تكون وحيداً، بينما العزلة تعبر عن مجد أن تكون وحيداً'."
        ]
      },
      {
        num: "02",
        title: "العزلة كمختبر للإبداع وبناء الهوية",
        content: [
          "كل إنجاز فكري أو فني عظيم في التاريخ وُلد في لحظات هدوء وتأمل منفرد. الصخب المستمر يفرض عليك آراء الآخرين، بينما تمنحك العزلة مساحة لسماع صوتك الداخلي الأصيل.",
          "في العزلة تسقط الأقنعة الاجتماعية، وتتعلم كيف تقف على قدميك دون الحاجة إلى تصفيق أو مصادقة من حولك."
        ]
      },
      {
        type: "insight",
        badge: "🧠 رؤية نفسية حول العزلة",
        title: "العزلة كمعيار للنضج النفسي والعاطفي",
        text: "في علم النفس التحليلي، قدرة الإنسان على البقاء بمفرده بسلام ودون قلق هي أصدق مقياس للنضج العاطفي والاستقرار الداخلي، لأنها تدل على تصالحه التام مع ذاته."
      },
      {
        num: "03",
        title: "فخاخ العزلة السلبية وكيفية تجنبها",
        content: [
          "تتحول العزلة إلى نقمة عندما تصبح هروباً مزمناً من المسؤولية أو ستارة تخفي وراءها الاكتئاب والرهاب الاجتماعي.",
          "الحكمة تقتضي إيجاد توازن ديناميكي: التزود بالطاقة في خلوتك، ثم العودة إلى المجتمع للمشاركة والعطاء بحب وقوة."
        ]
      },
      {
        type: "practical",
        title: "٥ خطوات لتحويل خلوتك إلى ملاذ روحي مثمر",
        desc: "كيف تبني علاقة صحية ومثمرة مع ذاتك :",
        tips: [
          { num: "1", title: "خصص نصف ساعة صمت يومياً", text: "أغلق هاتفك واجلس بهدوء للتأمل أو القراءة دون أي مشتتات رقمية." },
          { num: "2", title: "دوّن خواطرك بحرية", text: "الكتابة في عزلتك تفرغ شحنات التوتر وتمنحك وضوحاً فكرياً مذهلاً." },
          { num: "3", title: "امشِ في الطبيعة بمفردك", text: "التجول في المساحات المفتوحة يجدد خلايا الدماغ ويعيد التوازن للنفس." },
          { num: "4", title: "لا تخف من الفراغ الذهني", text: "لحظات السكون ليست وقتاً ضائعاً، بل هي فترة إعادة شحن ضرورية لطاقتك." },
          { num: "5", title: "اختر أصدقاءك بعناية", text: "العزلة الخصبة أفضل ألف مرة من صحبة تسرق سلامك الداخلي وتستنزفك." }
        ]
      }
    ],
    inBrief: [
      "العزلة الواعية مجد روحي واختيار حر، بينما الوحدة شعور بالحرمان.",
      "أعظم الأفكار الإبداعية تنضج في لحظات السكون والتأمل المنفرد.",
      "القدرة على البقاء وحيداً بسلام هي المؤشر الحقيقي للنضج النفسي.",
      "العزلة السلبية هروب، بينما العزلة الإيجابية تجديد وبناء.",
      "التوازن بين الخلوة والتواصل الاجتماعي هو صمام أمان الصحة النفسية."
    ],
    conclusion: "العزلة ليست قطيعة مع الحياة، بل هي المحطة التي نتزود فيها بالنور لنضيء عتمة أيامنا. حين تصادق نفسك في خلوتك، لن تشعر بالغربة في هذا الكون أبداً.",
    finalQuote: "« لن تكون وحيداً أبداً ما دمت تحب الشخص الذي أنت معه حين تختلي بنفسك. »",
    finalQuoteAuthor: "— حكمة الحكماء | حكمة ونور",
    comments: [
      { author: "بدر الزهراني", time: "منذ ساعتين", text: "المقال لمس قلبي تماماً. تخصيص وقت للخلوة اليومية أنقذني من الاحتراق النفسي." },
      { author: "ريم بوعزيز", time: "منذ ٤ ساعات", text: "التمييز بين الوحدة والعزلة الخصبة شرح عميق ومريح للنفس." }
    ]
  };

  const art5_fr = {
    chapo: "Entre l'angoisse cuisante de l'isolement et la grâce féconde du recueillement, la solitude constitue l'une des épreuves les plus intenses de la condition humaine. Quand est-elle un tremplin d'élévation et quand devient-elle un piège de l'esprit ?",
    summaryBox: {
      title: "✦ Synthèse de la réflexion",
      summary: "La différence entre la solitude subie (l'isolement) et la solitude choisie réside dans la qualité du dialogue intérieur. La solitude fertile est le sanctuaire où l'esprit régénère ses forces et forge son authenticité.",
      question: "Fuyez-vous la solitude par peur du face-à-face avec vous-même, ou la cultivez-vous comme une oasis de paix ?"
    },
    sections: [
      {
        num: "01",
        title: "Isolement subi contre Solitude féconde",
        content: [
          "L'isolement est un sentiment de vide et d'abandon, même au cœur d'une foule bruyante. La solitude féconde, au contraire, est un choix délibéré de retour à soi pour goûter à la plénitude de sa propre présence.",
          "Comme l'écrivait Paul Tillich : 'Le langage a créé le mot solitude pour exprimer la douleur d'être seul, et le mot recueillement pour en exprimer la gloire'."
        ]
      },
      {
        num: "02",
        title: "Le laboratoire de la créativité et de l'authenticité",
        content: [
          "Toutes les grandes découvertes philosophiques et créations artistiques sont nées dans le silence d'une chambre ou la marche solitaire. Le bruit social impose les jugements d'autrui ; la solitude libère votre voix singulière.",
          "Loin des regards, les masques tombent : vous apprenez à exister par vous-même sans dépendre de la validation ou des applaudissements extérieurs."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Insight psychologique majeur",
        title: "La capacité d'être seul comme signe de maturité",
        text: "En psychologie analytique (notamment chez Donald Winnicott), la capacité d'être seul sans angoisse constitue l'un des signes les plus manifestes de maturité affective et de solidité du moi intérieur."
      },
      {
        num: "03",
        title: "Les écueils de l'isolement et l'art de l'équilibre",
        content: [
          "La solitude devient délétère lorsqu'elle sert de fuite névrotique face aux responsabilités ou de paravent à la dépression et au ressentiment.",
          "La sagesse consiste en un va-et-vient harmonieux : se ressourcer dans le calme de son sanctuaire, puis revenir vers autrui avec bienveillance, clarté et générosité."
        ]
      },
      {
        type: "practical",
        title: "5 pratiques pour faire de sa solitude une oasis",
        desc: "Comment apprivoiser et sublimer vos moments de recueillement :",
        tips: [
          { num: "1", title: "30 minutes de déconnexion totale", text: "Chaque jour, éteignez tout écran et asseyez-vous dans le calme absolu." },
          { num: "2", title: "Tenez un journal introspectif", text: "Écrire sans filtre libère les tensions et ordonne vos pensées les plus intimes." },
          { num: "3", title: "Marchez en solitaire dans la nature", text: "La contemplation d'un paysage apaise le système nerveux et recentre l'esprit." },
          { num: "4", title: "Ne craignez pas le silence", text: "Le calme n'est pas un vide stérile, mais l'espace où germe votre créativité." },
          { num: "5", title: "Choisissez des relations de qualité", text: "Mieux vaut une noble solitude qu'une compagnie toxique qui dissout votre énergie." }
        ]
      }
    ],
    inBrief: [
      "La solitude féconde est un choix souverain ; l'isolement est une blessure d'abandon.",
      "Le recueillement est le berceau indispensable de toute création profonde.",
      "Être en paix seul avec soi-même est la marque absolue de la maturité émotionnelle.",
      "L'isolement devient nocif s'il sert de refuge à l'amertume ou au repli défensif.",
      "L'équilibre harmonieux entre solitude et vie sociale préserve la santé mentale."
    ],
    conclusion: "La solitude n'est pas un éloignement du monde, mais le lieu où nous forgeons notre lumière pour éclairer notre chemin. Lorsque vous devenez votre propre ami, vous n'êtes plus jamais orphelin dans l'univers.",
    finalQuote: "« La solitude est à l'esprit ce que la diète est au corps : mortelle si elle est trop longue, mais nécessaire. »",
    finalQuoteAuthor: "— Luc de Clapiers, Marquis de Vauvenargues | Hikma & Nour",
    comments: [
      { author: "Antoine P.", time: "Il y a 3 heures", text: "Une lecture qui réconcilie avec ses propres moments d'isolement. Très inspirant." },
      { author: "Camille R.", time: "Il y a 6 heures", text: "La citation de Tillich résume tout. Merci pour cet essai d'une grande finesse." }
    ]
  };

  const art5_en = {
    chapo: "Between the painful sting of loneliness and the sublime grace of conscious solitude lies one of the deepest human journeys. When does being alone elevate the soul, and when does it become an existential cage?",
    summaryBox: {
      title: "✦ Essence of the Reflection",
      summary: "The vital difference between loneliness and solitude lies in the quality of your inner dialogue. Solitude is the sacred laboratory where the mind recharges its power and discovers authentic selfhood.",
      question: "Do you flee solitude out of fear of your own thoughts, or embrace it as a sanctuary of peace?"
    },
    sections: [
      {
        num: "01",
        title: "Loneliness vs. Fertile Solitude",
        content: [
          "Loneliness is the painful feeling of emptiness even in a crowded room. Solitude, by contrast, is the deliberate, joyful choice to enjoy one's own company in quiet harmony.",
          "As philosopher Paul Tillich profoundly remarked: 'Language has created the word loneliness to express the pain of being alone, and the word solitude to express the glory of being alone'."
        ]
      },
      {
        num: "02",
        title: "The Workshop of Creativity and Authenticity",
        content: [
          "Every landmark philosophical insight and artistic masterpiece was born in quiet contemplation. Social noise imposes outside expectations; solitude gives room for your authentic voice to speak.",
          "In solitude, social masks drop away: you learn to stand firm without craving continuous validation or external applause."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Psychological Insight",
        title: "The Capacity to Be Alone as True Maturity",
        text: "In developmental psychology (notably Donald Winnicott), the capacity to be alone without anxiety is the definitive indicator of emotional maturity and stable self-worth."
      },
      {
        num: "03",
        title: "Avoiding the Traps of Negative Isolation",
        content: [
          "Solitude turns destructive when used as an avoidance strategy to escape responsibility or hide behind resentment and social anxiety.",
          "Wisdom requires dynamic rhythm: recharging in serene solitude, then returning to the community with strength, warmth, and generous contribution."
        ]
      },
      {
        type: "practical",
        title: "5 Steps to Turn Solitude into an Inner Sanctuary",
        desc: "How to build a nourishing relationship with yourself :",
        tips: [
          { num: "1", title: "30 Minutes of Daily Digital Silence", text: "Turn off devices and sit quietly with your thoughts or an inspiring book." },
          { num: "2", title: "Maintain an Uncensored Journal", text: "Writing freely empties mental clutter and brings astonishing clarity." },
          { num: "3", title: "Walk Alone in Nature", text: "Immersing yourself in open landscapes calms the nervous system." },
          { num: "4", title: "Welcome Mental Stillness", text: "Quiet moments are not wasted time; they are vital incubation periods." },
          { num: "5", title: "Curate Your Circle Wisely", text: "Fertile solitude is infinitely superior to toxic company that drains your spirit." }
        ]
      }
    ],
    inBrief: [
      "Conscious solitude is self-mastery and glory; loneliness is a feeling of lack.",
      "Deep creativity and clear thinking require the incubator of quiet space.",
      "Comfort in one's own company is the supreme benchmark of emotional health.",
      "Isolation is destructive when fueled by bitterness or defensive withdrawal.",
      "A healthy balance between solitude and connection preserves mental vitality."
    ],
    conclusion: "Solitude is not withdrawal from life, but the quiet well where we replenish our inner flame. When you make peace with your own soul, you will never feel alone in this vast universe.",
    finalQuote: "« Solitude is where one discovers that one is not alone. »",
    finalQuoteAuthor: "— Marty Rubin | Hikma & Nour",
    comments: [
      { author: "Gregory S.", time: "1 hour ago", text: "A truly liberating perspective on solitude. Absolutely brilliant." },
      { author: "Maya Chen", time: "4 hours ago", text: "Winnicott's concept of being alone is so true. Great article!" }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'solitude-blessing-or-curse');
    if (art) {
      const src = lang === 'ar' ? art5_ar : (lang === 'fr' ? art5_fr : art5_en);
      Object.assign(art, src);
    }
  });

  // --- Article 6: 7-errors-mind-growth ---
  const art6_ar = {
    chapo: "كثيراً ما نبحث عن أسباب تعثرنا في الظروف الخارجية أو تصرفات الآخرين، بينما يكمن العائق الحقيقي في أنماط تفكير مغلوطة وتشوهات معرفية تتكرر في عقولنا دون وعي منا.",
    summaryBox: {
      title: "✦ خريطة الأخطاء العقلية الشائعة",
      summary: "العقل البشري يميل لاختصار الجهد عبر مغالطات فكرية متوارثة. التعرف على هذه الأخطاء السبعة هو الخطوة الأولى لتفكيكها واستعادة السيطرة الواعية على مسار نموك.",
      question: "أي من هذه الأخطاء العقلية يستهلك طاقتك ويمنعك من تحقيق إمكاناتك الكاملة؟"
    },
    sections: [
      {
        num: "01",
        title: "فخ الكمالية والتفكير الحدي (إما كل شيء أو لا شيء)",
        content: [
          "التفكير الحدي يقسم الحياة إلى نجاح باهر أو فشل ذريع دون أي درجات وسيطة. هذا النمط يصيب الإنسان بالشلل والمماطلة خوفاً من تقديم عمل غير مثالي.",
          "النمو الحقيقي يقوم على تراكم الخطوات الصغيرة المستمرة وليس على القفزات الخارقة المفاجئة."
        ]
      },
      {
        num: "02",
        title: "الارتهان لآراء الآخرين والانحياز التأكيدي",
        content: [
          "البحث الدائم عن مصادقة المحيطين يجعلك رهينة لأمزجتهم وتوقعاتهم. يضاف إلى ذلك 'الانحياز التأكيدي' حيث يميل عقلك لرؤية ما يؤكد مخاوفك القديمة فقط.",
          "تحرير التفكير يتطلب فحص القناعات بجرأة واستبعاد ما لا يخدم تطورك الشخصي."
        ]
      },
      {
        type: "insight",
        badge: "🧠 حقيقة في علم النفس الإدراكي",
        title: "تأثير التكلفة الغارقة (Sunk Cost Fallacy)",
        text: "التمسك بمشاريع فاشلة أو علاقات مستنزفة فقط لأنك استثمرت فيها وقتاً سابقاً هو خطأ معرفي جسيم. الشجاعة تكمن في معرفة متى تغلق الباب وتبدأ من جديد."
      },
      {
        num: "03",
        title: "تضخيم المخاوف وافتراض السيناريو الأسوأ دائماً",
        content: [
          "العقل البدائي مبرمج على التحذير من المخاطر، لكنه في العصر الحديث يضخم التحديات البسيطة لتتحول إلى كوارث وهمية في خيالنا.",
          "كما علمنا سينيكا: 'معاناتنا في الخيال تفوق بكثير معاناتنا في الواقع الحقيقي'."
        ]
      },
      {
        type: "practical",
        title: "الخلاصة العملية : الأخطاء الـ ٧ وكيفية تصحيحها",
        desc: "دليل سريع لإعادة ضبط بوصلتك الذهنية :",
        tips: [
          { num: "1", title: "التفكير الحدي", text: "استبدل 'إما كل شيء أو لا شيء' بمبدأ 'التحسن المستمر بنسبة 1% يومياً'." },
          { num: "2", title: "قراءة الأفكار", text: "توقف عن افتراض ما يفكر به الآخرون عنك؛ اسأل بوضوح أو تجاهل." },
          { num: "3", title: "شخصنة الأمور", text: "تذكر أن تصرفات الآخرين تعكس دواخلهم ومشاكلهم، ولا علاقة لها بقيمتك." },
          { num: "4", title: "المماطلة باسم التحضير", text: "ابدأ بما لديك الآن ومن حيث أنت، فالكمال وليد الممارسة." },
          { num: "5", title: "مقارنة بدايتك بمواسم حصاد غيرك", text: "ركز على مسارك الخاص فالسباق الحقيقي هو مع ذاتك السابقة." }
        ]
      }
    ],
    inBrief: [
      "معظم القيود التي تحاصرنا هي أوهام معرفية بنيت داخل عقولنا.",
      "الكمالية عدوة الإنجاز والتراكم البسيط هو سر النجاح المستدام.",
      "التحرر من شخصنة سلوكيات الآخرين يوفر طاقة نفسية هائلة.",
      "فخ التكلفة الغارقة يمنعك من التخلي عما استنزفك في الماضي.",
      "تدريب العقل على التفكير الواقعي ينهي دوامة القلق الوهمي."
    ],
    conclusion: "تغيير الحياة لا يبدأ بتغيير الظروف الخارجية، بل بإصلاح العدسة التي نرى بها العالم. حين تطهر عقلك من هذه الأخطاء، تنفتح أمامك آفاق النمو والسكينة بيسر وتلقائية.",
    finalQuote: "« إن سعادة حياتك تعتمد على طبيعة ونقاء أفكارك. »",
    finalQuoteAuthor: "— ماركوس أوريليوس | حكمة ونور",
    comments: [
      { author: "خالد بنسالم", time: "منذ ٥ ساعات", text: "فخ التكلفة الغارقة هو ما جعلني أضيع سنوات في مسار خاطئ. مقال منير للعقول." },
      { author: "فاطمة الزهراء", time: "منذ ٨ ساعات", text: "تلخيص ذكي وعملي للغاية لتشوهات التفكير." }
    ]
  };

  const art6_fr = {
    chapo: "Nous cherchons souvent les causes de nos blocages dans les aléas extérieurs ou les actions d'autrui, alors que les véritables obstacles résident dans des biais cognitifs et des schémas mentaux limitants ancrés en nous.",
    summaryBox: {
      title: "✦ Cartographie des biais de pensée",
      summary: "L'esprit humain use de raccourcis qui se transforment en pièges mentaux. Identifier ces 7 erreurs de la pensée est l'étape fondatrice pour déverrouiller votre potentiel et retrouver une clarté souveraine.",
      question: "Lequel de ces pièges mentaux draine le plus votre énergie et freine votre élan ?"
    },
    sections: [
      {
        num: "01",
        title: "Le piège du perfectionnisme et de la pensée binaire",
        content: [
          "La pensée en tout-ou-rien divise la vie entre succès absolu et échec total, sans nuance. Cette distorsion engendre la paralysie et la procrastination par peur de produire une œuvre imparfaite.",
          "La croissance véritable découle de la répétition patiente de petits progrès constants, non de miracles foudroyants."
        ]
      },
      {
        num: "02",
        title: "La quête de validation et le biais de confirmation",
        content: [
          "Chercher constamment l'approbation d'autrui fait de vous l'otage de leurs humeurs. De surcroît, le biais de confirmation pousse votre cerveau à ne retenir que les signaux renforçant vos doutes anciens.",
          "Libérer son intelligence exige de soumettre ses propres certitudes à l'épreuve d'un examen lucide et sans complaisance."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Biais cognitif déterminant",
        title: "Le piège des coûts irrécupérables (Sunk Cost Fallacy)",
        text: "S'acharner dans une voie stérile ou une relation toxique sous prétexte qu'on y a déjà consacré du temps et de l'énergie est une illusion dévastatrice. Le courage consiste à savoir clore un chapitre pour renaître."
      },
      {
        num: "03",
        title: "La dramatisation et l'anticipation du pire",
        content: [
          "Le cerveau primitif surévalue le danger pour survivre, mais dans le monde moderne, ce réflexe transforme de simples contretemps en scénarios apocalyptiques imaginaires.",
          "Comme le rappelait Sénèque : 'Nous souffrons beaucoup plus souvent en imagination qu'en réalité'."
        ]
      },
      {
        type: "practical",
        title: "Guide pratique : 5 antidotes aux erreurs de pensée",
        desc: "Comment reprogrammer vos réflexes mentaux :",
        tips: [
          { num: "1", title: "Cessez la pensée binaire", text: "Remplacez 'tout ou rien' par la règle du '1% de progression quotidienne'." },
          { num: "2", title: "Arrêtez la télépathie", text: "Ne présumez pas de ce que pensent les autres : posez des questions claires ou détachez-vous-en." },
          { num: "3", title: "Désamorcez la personnalisation", text: "Les réactions d'autrui témoignent de leurs blessures, non de votre valeur." },
          { num: "4", title: "Agissez avant d'être prêt", text: "L'élan se crée dans l'action concrète, jamais dans la rumination théorique." },
          { num: "5", title: "Évitez les comparaisons stériles", text: "Votre unique point de repère doit être la personne que vous étiez hier." }
        ]
      }
    ],
    inBrief: [
      "La plupart de nos barrières sont des constructions mentales erronées.",
      "Le perfectionnisme rigide est l'ennemi juré de l'accomplissement réel.",
      "Ne pas personnaliser les comportements d'autrui préserve une énergie vitale précieuse.",
      "Savoir abandonner une voie sans issue est un acte de haute sagesse stratégique.",
      "Désamorcer les scénarios catastrophes libère instantanément de l'anxiété."
    ],
    conclusion: "Transformer son existence ne commence pas par changer le monde extérieur, mais par polir la lentille à travers laquelle nous l'interprétons. En purifiant votre esprit de ces erreurs, la sérénité et l'action fluide deviennent une seconde nature.",
    finalQuote: "« La vie d'un homme est ce que ses pensées en font. »",
    finalQuoteAuthor: "— Marc Aurèle | Hikma & Nour",
    comments: [
      { author: "Guillaume T.", time: "Il y a 4 heures", text: "L'analyse sur les coûts irrécupérables m'a ouvert les yeux. Très utile pour mes choix de vie." },
      { author: "Élodie F.", time: "Il y a 7 heures", text: "Article clair, synthétique et immédiatement applicable au quotidien." }
    ]
  };

  const art6_en = {
    chapo: "We often blame external circumstances or other people for our stagnation, yet our greatest roadblocks are subconscious cognitive distortions and habitual mental fallacies.",
    summaryBox: {
      title: "✦ Map of Mental Roadblocks",
      summary: "The human mind takes cognitive shortcuts that easily turn into destructive traps. Identifying these 7 mental errors is the foundational step to unlocking your potential and reclaiming mental clarity.",
      question: "Which of these mental distortions drains most of your energy and halts your progress?"
    },
    sections: [
      {
        num: "01",
        title: "The Trap of Perfectionism and All-or-Nothing Thinking",
        content: [
          "Binary thinking divides existence into glorious perfection or complete failure. This distortion triggers chronic procrastination out of fear of producing imperfect work.",
          "Genuine mastery comes from compounding small, consistent daily steps rather than demanding instant miracles."
        ]
      },
      {
        num: "02",
        title: "Seeking External Validation and Confirmation Bias",
        content: [
          "Chasing constant approval makes you hostage to others' fluctuating moods. Furthermore, confirmation bias filters reality to reinforce your existing doubts and insecurities.",
          "Liberating the intellect requires courageously testing your own assumptions against reality."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Key Cognitive Bias",
        title: "The Sunk Cost Fallacy",
        text: "Clinging to a failing endeavor or draining relationship simply because you have already invested time is a fatal mental trap. True strength is knowing when to cut losses and begin anew."
      },
      {
        num: "03",
        title: "Catastrophizing and Anticipating the Worst",
        content: [
          "Our evolutionary brain overestimates threat for survival, but in modern life, this mechanism turns minor inconveniences into imaginary catastrophes.",
          "As Seneca taught: 'We suffer more often in imagination than in reality'."
        ]
      },
      {
        type: "practical",
        title: "5 Antidotes to Overcome Mental Errors",
        desc: "Actionable mental shifts for daily clarity :",
        tips: [
          { num: "1", title: "Drop Binary Thinking", text: "Replace 'all or nothing' with '1% continuous daily progress'." },
          { num: "2", title: "Stop Mind Reading", text: "Do not guess what others think; communicate clearly or let it go." },
          { num: "3", title: "De-Personalize Reactions", text: "Other people's actions reflect their inner turmoil, not your worth." },
          { num: "4", title: "Start Before You Feel Ready", text: "Momentum is forged through real action, never passive overthinking." },
          { num: "5", title: "Compare Only with Yesterday", text: "Your only legitimate benchmark is who you were yesterday." }
        ]
      }
    ],
    inBrief: [
      "Most limitations in our lives are cognitive illusions forged within our minds.",
      "Perfectionism paralyzes action; compounding small efforts creates lasting success.",
      "Refusing to take things personally protects vast amounts of emotional energy.",
      "Letting go of sunk costs is a supreme act of strategic intelligence.",
      "Rational thinking permanently disarms the spiral of imaginary anxieties."
    ],
    conclusion: "Transforming your life begins not by altering external events, but by purifying the mental lens through which you experience reality. When you discard these mental errors, peace and progress flow effortlessly.",
    finalQuote: "« The soul becomes dyed with the color of its thoughts. »",
    finalQuoteAuthor: "— Marcus Aurelius | Hikma & Nour",
    comments: [
      { author: "Nathan Brooks", time: "3 hours ago", text: "The sunk cost fallacy explanation hit home. A superb and practical read." },
      { author: "Laura Kim", time: "6 hours ago", text: "Concise, brilliant, and deeply insightful." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === '7-errors-mind-growth');
    if (art) {
      const src = lang === 'ar' ? art6_ar : (lang === 'fr' ? art6_fr : art6_en);
      Object.assign(art, src);
    }
  });

  // --- Article 7: happiness-in-wrong-place ---
  const art7_ar = {
    chapo: "كم من السنوات نقضيها في الركض وراء أهداف نظن أنها ستحقق لنا الهناء الأبدي، لنكتشف بعد بلوغها أن العطش لا يزال قائماً؟ لماذا نبحث عن السعادة في الأماكن التي يستحيل أن نجدها فيها؟",
    summaryBox: {
      title: "✦ سر السعادة الحقيقية ومقرها",
      summary: "السعادة الخارجية المشروطة بالممتلكات والمكانة سريعة التبخر. السعادة الحقيقية هي حالة رضا داخلي وتوافق مع الذات لا يمكن شراؤها ولا سلبها.",
      question: "هل تبني سعادتك على ما تملكه، أم على من أنت وكيف تفكر؟"
    },
    sections: [
      {
        num: "01",
        title: "وهم السعادة المشروطة بالماديات والمظاهر",
        content: [
          "يرسخ المجتمع الاستهلاكي فكرة أن السعادة تختبئ خلف الشراء القادم، الترقية القادمة، أو الإعجاب الافتراضي. لكن علم النفس أثبت وجود 'حلقة التكيف الممتعة' (Hedonic Treadmill)، حيث يعتاد الإنسان على أي مكسب مادي ويعود لنفس مستوى شعوره السابق.",
          "التعلق بالمظاهر يجعل سلامك الداخلي رهينة لأمور خارجة عن إرادتك تماماً."
        ]
      },
      {
        num: "02",
        title: "الحكمة الرواقية : ما تحت سيطرتك وما ليس تحتها",
        content: [
          "علمنا إبيكتيتوس أن منبع الشقاء الإنساني هو الخلط بين ما هو في نطاق قدرتنا (أفكارنا، قيمنا، ردود أفعالنا) وما هو خارج نطاقنا (آراء الآخرين، الثروة، المستقبل).",
          "حين تحصر رغباتك فيما تملكه فعلياً في داخلك، يتحرر عقلك من الترقب والقلق الدائم."
        ]
      },
      {
        type: "insight",
        badge: "🧠 بصيرة نفسية وفلسفية",
        title: "الامتنان الواعي : ترياق السخط والمقارنة",
        text: "في أحدث أبحاث علم النفس الإيجابي، ممارسة الامتنان اليومي للنعم البسيطة المتاحة تعيد برمجة مسارات الدماغ العصبية، مما يرفع هرمونات الارتياح ويقلل هرمونات التوتر بنسب مذهلة."
      },
      {
        num: "03",
        title: "السعادة كحالة حضور وليست محطة وصول",
        content: [
          "السعادة ليست مكافأة تنتظرك في نهاية الطريق، بل هي الطريقة التي تمشي بها هذا الطريق. هي حضورك الكامل في اللحظة الراهنة وتذوقك لتفاصيل الحياة اليومية.",
          "السلام الداخلي لا يعني غياب المشاكل، بل يعني وجود الهدوء في وسط العاصفة."
        ]
      },
      {
        type: "practical",
        title: "٥ مبادئ لإيجاد السعادة في مكانها الحقيقي",
        desc: "خطوات يومية لترسيخ راحة البال :",
        tips: [
          { num: "1", title: "انقل تركيزك من الممتلكات إلى التجارب", text: "الذكريات العميقة والتعلم يمنحان سعادة تدوم أطول بكثير من المقتنيات." },
          { num: "2", title: "طبق ثنائية التحكم الرواقية", text: "اسأل نفسك دائماً: هل هذا الأمر بيدي؟ إن لم يكن، فلا تدعه يسلب هدوءك." },
          { num: "3", title: "مارس الامتنان الصباحي", text: "ابدأ يومك بتذكر ٣ نعم بسيطة وموجودة بالفعل في حياتك." },
          { num: "4", title: "قلص المقارنات الاجتماعية", text: "لا تقارن كواليس حياتك بمشاهد الآخرين المنتقاة على الشاشات." },
          { num: "5", title: "ابحث عن المعنى والعطاء", text: "مساعدة الآخرين وإعطاء قيمة للمحيطين يولد إحساساً عميقاً بالامتلاء الروحي." }
        ]
      }
    ],
    inBrief: [
      "الممتلكات والمكانة توفر راحة عابرة ولكنها لا تصنع سكينة دائمة.",
      "حلقة التكيف الممتعة تجعل السعادة المادية سراباً لا نهائياً.",
      "التركيز على ما يخضع لسيطرتك هو المفتاح الأوحد للسلام الداخلي.",
      "الامتنان اليومي يعيد توجيه العقل لرؤية وفرة الحاضر.",
      "السعادة الحقيقية هي التناغم التام مع الذات والعيش في اللحظة."
    ],
    conclusion: "السعادة لم تكن يوماً في مكان بعيد حتى نبحث عنها، بل هي في طريقة استجابتنا للحياة. حين تتوقف عن البحث عنها في الخارج، تكتشف أنها كانت تسكن داخلك طوال الوقت.",
    finalQuote: "« ليس الفقير من يملك القليل، بل من يشتهي الكثير. »",
    finalQuoteAuthor: "— سينيكا | حكمة ونور",
    comments: [
      { author: "أنس المرابط", time: "منذ ساعتين", text: "مفهوم ثنائية التحكم الرواقية غير حياتي المهنية والشخصية تماماً." },
      { author: "نورة القحطاني", time: "منذ ٥ ساعات", text: "مقال يلامس الروح ويحرر النفس من سباق الماديات المنهك." }
    ]
  };

  const art7_fr = {
    chapo: "Combien d'années gaspillons-nous à poursuivre des chimères en espérant qu'elles combleront notre soif d'absolu ? Pourquoi nous obstinons-nous à chercher le bonheur là où il est rigoureusement impossible de le trouver ?",
    summaryBox: {
      title: "✦ L'Ancrage du vrai bonheur",
      summary: "Le bonheur conditionné par les possessions et le statut social s'évapore aussitôt atteint. La félicité authentique est un état de plénitude intérieure et de cohérence avec soi-même qui ne s'achète ni ne se perd.",
      question: "Fondez-vous votre équilibre sur ce que vous possédez, ou sur ce que vous êtes et pensez ?"
    },
    sections: [
      {
        num: "01",
        title: "L'illusion du bonheur marchand et l'adaptation hédonique",
        content: [
          "Le culte moderne de la consommation promet le bonheur derrière le prochain achat, la prochaine promotion ou l'approbation sociale. Pourtant, la psychologie a démontré le phénomène d'adaptation hédonique (Hedonic Treadmill) : le cerveau s'habitue à tout confort matériel et revient à son niveau de base.",
          "Attacher sa joie aux faux-semblants revient à confier sa paix d'esprit à des vents que l'on ne contrôle pas."
        ]
      },
      {
        num: "02",
        title: "La dichotomie du contrôle stoïcienne",
        content: [
          "Épictète a posé le principe suprême de la sagesse : distinguer ce qui dépend de nous (nos pensées, nos valeurs, nos choix) de ce qui n'en dépend pas (l'opinion d'autrui, la fortune, les aléas du destin).",
          "En consacrant votre énergie exclusivement à votre for intérieur, vous devenez invulnérable à l'angoisse du lendemain."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Découverte psychologique clé",
        title: "La gratitude active comme régulateur neurologique",
        text: "En neurosciences, la pratique délibérée de la gratitude pour les grâces simples du présent stimule la production de dopamine et de sérotonine, réalignant le cerveau vers un calme profond et durable."
      },
      {
        num: "03",
        title: "Le bonheur comme présence, non comme destination",
        content: [
          "Le bonheur n'est pas un trophée remis au terme d'une course épuisante, mais la manière attentive dont vous marchez sur le chemin. C'est l'intensité de votre présence à l'instant.",
          "La paix de l'âme ne signifie pas l'absence d'épreuves, mais la certitude d'une sérénité inaltérable au cœur de la tempête."
        ]
      },
      {
        type: "practical",
        title: "5 principes pour ancrer le bonheur en soi",
        desc: "Pratiques stoïciennes et psychologiques pour le quotidien :",
        tips: [
          { num: "1", title: "Privilégiez les expériences aux objets", text: "Les souvenirs et l'apprentissage forgent une joie beaucoup plus pérenne que les possessions." },
          { num: "2", title: "Appliquez la dichotomie du contrôle", text: "Demandez-vous : 'Cela dépend-il de moi ?' Si non, ne lui offrez pas votre tourment." },
          { num: "3", title: "Rituel de gratitude matinal", text: "Commencez la journée en nommant 3 réalités simples dont vous êtes reconnaissant." },
          { num: "4", title: "Cessez la comparaison numérique", text: "Ne mesurez pas votre intimité à l'aune des vitrines artificielles des réseaux sociaux." },
          { num: "5", title: "Donnez du sens par la générosité", text: "Servir une cause plus haute que soi procure le sentiment d'accomplissement suprême." }
        ]
      }
    ],
    inBrief: [
      "Les biens et le statut social offrent un plaisir fugace mais aucune paix durable.",
      "L'adaptation hédonique transforme la quête matérielle en mirage perpétuel.",
      "Se concentrer sur ce qui dépend de soi est l'unique clé de la souveraineté intérieure.",
      "La gratitude quotidienne rééduque l'attention vers l'abondance du présent.",
      "Le vrai bonheur est une harmonie vécue au présent, non une promesse future."
    ],
    conclusion: "Le bonheur n'a jamais été un trésor enfoui au loin, mais la manière dont nous habitons notre esprit. Lorsque vous cessez de le mendier à l'extérieur, vous découvrez qu'il a toujours résidé en vous-même.",
    finalQuote: "« Ce n'est pas celui qui a peu qui est pauvre, mais celui qui désire toujours plus. »",
    finalQuoteAuthor: "— Sénèque | Hikma & Nour",
    comments: [
      { author: "Damien V.", time: "Il y a 3 heures", text: "Un texte lumineux qui remet les priorités à leur juste place. Le stoïcisme est le remède de notre siècle." },
      { author: "Hélène M.", time: "Il y a 5 heures", text: "La dichotomie du contrôle est un principe que chacun devrait enseigner à ses enfants." }
    ]
  };

  const art7_en = {
    chapo: "How many years do we spend running after external achievements, believing they will finally grant us lasting peace, only to find our inner thirst unquenched? Why do we persist in seeking happiness where it cannot possibly reside?",
    summaryBox: {
      title: "✦ Anchoring Authentic Happiness",
      summary: "Happiness conditioned upon wealth and status evaporates the moment it is achieved. Authentic joy is an unshakeable state of inner harmony and alignment that can neither be bought nor stolen.",
      question: "Do you build your peace of mind on what you own, or on who you are and how you think?"
    },
    sections: [
      {
        num: "01",
        title: "The Illusion of Material Joy and the Hedonic Treadmill",
        content: [
          "Consumer society promises that happiness hides behind the next purchase, promotion, or social approval. Yet psychology proves the 'Hedonic Treadmill' effect: we quickly adapt to any luxury, returning to our baseline level of longing.",
          "Attaching peace of mind to external circumstances surrenders control to unpredictable winds."
        ]
      },
      {
        num: "02",
        title: "The Stoic Dichotomy of Control",
        content: [
          "Epictetus taught that human sorrow originates from confusing what is in our control (our thoughts, values, choices) with what is outside it (others' opinions, wealth, the future).",
          "When you direct your mental energy solely to your inner realm, you become unshakeable."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Neuropsychological Insight",
        title: "Active Gratitude as a Neural Reset",
        text: "Neuroscience reveals that practicing deliberate gratitude for simple, present blessings releases dopamine and serotonin, rewiring neural pathways toward sustained calm and contentment."
      },
      {
        num: "03",
        title: "Happiness as Presence, Not a Destination",
        content: [
          "Happiness is not a distant trophy waiting at the end of an exhausting race, but the mindful way you walk the journey today. It is complete immersion in the present moment.",
          "Inner peace does not mean the absence of storm, but the certainty of calm within the center of the storm."
        ]
      },
      {
        type: "practical",
        title: "5 Stoic Rules to Find Happiness Where It Truly Lives",
        desc: "Daily practices to anchor your soul in lasting contentment :",
        tips: [
          { num: "1", title: "Value Experiences Over Possessions", text: "Memories and wisdom endure long after physical objects lose their shine." },
          { num: "2", title: "Apply the Dichotomy of Control", text: "Ask: 'Is this up to me?' If not, refuse to surrender your peace to it." },
          { num: "3", title: "Morning Gratitude Practice", text: "Start the day by acknowledging 3 simple blessings already in your life." },
          { num: "4", title: "Stop Social Comparison", text: "Do not compare your private reality with curated public highlights." },
          { num: "5", title: "Seek Meaning Through Contribution", text: "Serving something larger than yourself generates deep, lasting fulfillment." }
        ]
      }
    ],
    inBrief: [
      "Material possessions provide fleeting pleasure but never lasting peace.",
      "The hedonic treadmill turns material pursuit into an endless trap.",
      "Focusing exclusively on what is within your control is the true foundation of peace.",
      "Daily gratitude reorients the brain toward the abundance of the present.",
      "Real happiness is complete self-harmony lived in the here and now."
    ],
    conclusion: "Happiness was never a distant treasure to be hunted, but the clarity of our own mind. When you stop begging the outside world for peace, you discover it has been waiting within you all along.",
    finalQuote: "« It is not the man who has too little, but the man who craves more, that is poor. »",
    finalQuoteAuthor: "— Seneca | Hikma & Nour",
    comments: [
      { author: "Marcus Vance", time: "2 hours ago", text: "Stoic dichotomy of control explained in the most elegant way. Truly brilliant." },
      { author: "Sarah Jenkins", time: "5 hours ago", text: "A deeply grounding article. A must-read for anyone feeling overwhelmed." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'happiness-in-wrong-place');
    if (art) {
      const src = lang === 'ar' ? art7_ar : (lang === 'fr' ? art7_fr : art7_en);
      Object.assign(art, src);
    }
  });

  // Save to data_v11.js
  const exportStr = 'const TIKTOK_DATA = ' + JSON.stringify(DATA, null, 2) + ';\n\nexport default TIKTOK_DATA;\n';
  fs.writeFileSync('data_v11.js', exportStr, 'utf8');
  console.log('✅ Successfully updated Group 2 in data_v11.js');
}

updateGroup2().catch(err => {
  console.error('Error updating Group 2:', err);
  process.exit(1);
});
