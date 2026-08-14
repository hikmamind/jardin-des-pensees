const fs = require('fs');

// We will load data_v11.js, apply updates for Group 1, and save data_v11.js
async function updateGroup1() {
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  // --- Article 2: why-people-respect-silent-person ---
  const art2_ar = {
    chapo: "في عالم يضج بالكلام والصخب، يبرز الصمت ليس كغياب للحديث، بل كحضور طاغٍ يفيض بالرزانة والسيادة النفسية. كيف يتحول السكوت إلى أداة مهابة وسلطة عقلية تفرض احترام الجميع؟",
    summaryBox: {
      title: "✦ خلاصة المقال في سطور",
      summary: "الصمت ليس عجزاً عن التعبير، بل هو وعاء التحكم الذاتي واختيار التوقيت المناسب للتأثير. الشخص الصامت يثير فضول الآخرين ويحتفظ بأوراقه، مما يمنحه كاريزما وهيبة استثنائية.",
      question: "هل تستخدم كلماتك لتثبت وجودك، أم تدع حضورك وصمتك يتحدثان عن عمقك؟"
    },
    sections: [
      {
        num: "01",
        title: "الصمت كدرع للتحكم والانضباط العاطفي",
        content: [
          "الإنسان الذي يتحدث دون توقف يكشف نقاط ضعفه، دوافعه الخفية، ومخاوفه دون أن يشعر. في المقابل، يمثل الصمت حاجزاً يحمي صاحبه من الاندفاع وردود الأفعال غير المحسوبة.",
          "كما يرى حكماء الرواقية، فإن القدرة على كبح جماح اللسان هي أعلى درجات السيطرة على النفس. عندما تصمت في المواقف المشحونة، فإنك تجبر الطرف الآخر على مواجهة نفسه وصداه."
        ]
      },
      {
        num: "02",
        title: "سيكولوجية الغموض والجاذبية غير المنطوقة",
        content: [
          "الطبيعة البشرية تميل بطبعها إلى احترام ما لا تفهمه بالكامل. الإفراط في الشرح يجعل الشخص كتاباً مفتوحاً ومبتذلاً، بينما يخلق الصمت مساحة من الغموض المهيب.",
          "عندما تتكلم قليلاً ولكن بوزن وحكمة، يصبح لكل كلمة تنطق بها وزن الذهب وتستمع إليها الآذان بإنصات وتركيز."
        ]
      },
      {
        type: "insight",
        badge: "🧠 فكرة نفسية عميقة",
        title: "تأثير الصمت في التفاوض وإدارة النزاعات",
        text: "في علم النفس السلوكي، يُعد التوقف المؤقت (Tactical Pause) أقوى تكتيك لزعزعة يقين الخصم. الصمت لعدة ثوانٍ بعد سماع طرح معين يدفع المتكلم إلى التراجع أو التبرير لشعوره بعدم الارتياح من فراغ الصمت."
      },
      {
        num: "03",
        title: "الاستماع الفعّال كأعلى أشكال الذكاء الاجتماعي",
        content: [
          "الصامت ليس منقطعاً عن العالم، بل هو في حالة مراقبة فائقة وتحليل مستمر. هو يرى لغة الجسد، يلتقط نبرات التردد، ويفهم السياق الأعمق الذي يعجز المتحدثون عن رؤيته.",
          "الإنصات الصادق يمنحك أفضلية المعرفة، والمعرفة في العلاقات الإنسانية هي المنبع الحقيقي للنفوذ والاحترام."
        ]
      },
      {
        type: "practical",
        title: "٥ قواعد لامتلاك قوة الصمت الواعي",
        desc: "تطبيقات عملية لبناء حضور مهيب والتخلص من ثرثرة القلق اليومية :",
        tips: [
          { num: "1", title: "قاعدة الـ ٣ ثوانٍ", text: "قبل الرد على أي سؤال أو استفزاز، تنفس وانتظر ٣ ثوانٍ لترتيب فكرتك وإظهار الهدوء." },
          { num: "2", title: "لا تبرر ما لا يحتاج تبريراً", text: "القرارات الحازمة لا تحتاج خطباً دفاعية؛ قل 'لا' بوضوح وأغلق الجملة." },
          { num: "3", title: "احتفظ بأسرارك ومشاريعك", text: "دع نتائج أفعالك تتحدث بدلاً من إعلان نواياك قبل الأوان." },
          { num: "4", title: "لا تملأ الصمت المحرج بالثرثرة", text: "تقبل لحظات السكون في الحوارات دون خوف أو ارتباك." },
          { num: "5", title: "اجعل كلماتك حاسمة ومختصرة", text: "خير الكلام ما قل ودل، فالإيجاز علامة البلاغة وقوة الفكر." }
        ]
      }
    ],
    inBrief: [
      "الصمت علامة قوة وضبط نفس وليس دليلاً على الضعف أو التردد.",
      "الغموض المدروس يمنح الشخصية هيبة وجاذبية طبيعية.",
      "الاستماع الحقيقي يوفر معلومات ثمينة ويمنحك السيطرة على مسار النقاش.",
      "الثرثرة المفرطة تسلب الكلمات قيمتها وتكشف الهشاشة النفسية.",
      "الإيجاز في التعبير رسالة ثقة تفرض على الجميع الإنصات."
    ],
    conclusion: "الصمت في نهاية المطاف هو ملاذ الحكماء ومصدر طمأنينة الروح. عندما تتعلم كيف تصمت عن علم، فإنك لا تحمي طاقتك النفسية فحسب، بل تبني حولك هالة من الوقار والاتزان التي لا يمكن لأي صخب أن يخترقها.",
    finalQuote: "« إذا كان الكلام من فضة، فإن الصمت حكمة ووقار يعلو فوق كل كلام. »",
    finalQuoteAuthor: "— حكمة مأثورة | حكمة ونور",
    comments: [
      { author: "يوسف المنصوري", time: "منذ ساعتين", text: "مقال في غاية الروعة! الصمت في أوقات الغضب هو أعظم انتصار للإنسان على انفعالاته." },
      { author: "سارة بلقاسم", time: "منذ ٥ ساعات", text: "تطبيق قاعدة الـ ٣ ثوانٍ غير الكثير في طريقتي بالتواصل المهني." }
    ]
  };

  const art2_fr = {
    chapo: "Dans une société saturée de bruits, d'affirmations gratuites et d'injonctions à l'expression continue, le silence s'affirme comme une puissance singulière. Loin d'être une faiblesse, il incarne l'autorité souveraine et la maîtrise de soi.",
    summaryBox: {
      title: "✦ Synthèse de l'article",
      summary: "Le silence n'est pas une absence de mots, mais le choix délibéré du contrôle émotionnel et de la lucidité. L'individu silencieux intrigue, retient ses cartes et impose une présence charismatique naturelle.",
      question: "Parlez-vous pour combler le vide, ou maîtrisez-vous l'art d'imposer votre présence par le calme ?"
    },
    sections: [
      {
        num: "01",
        title: "Le silence comme bouclier de maîtrise émotionnelle",
        content: [
          "Ceux qui parlent sans discontinuer étalent leurs failles, leurs craintes et leurs intentions au grand jour. À l'inverse, le silence érige un rempart protecteur contre les réactions impulsives.",
          "Pour les philosophes stoïciens, retenir sa langue constitue le sommet de la maîtrise de soi. En restant calme face à la provocation, vous contraignez l'autre à se confronter à son propre tumulte."
        ]
      },
      {
        num: "02",
        title: "La psychologie du mystère et du charisme retenu",
        content: [
          "L'être humain respecte instinctivement ce qu'il ne parvient pas à sonder immédiatement. La sur-explication banalise l'individu, tandis que la retenue crée une aura de profondeur.",
          "Lorsque vous parlez peu mais avec justesse et discernement, chaque mot prononcé acquiert la valeur d'une sentence écoutée avec respect et attention."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Idée psychologique clé",
        title: "La pause tactique dans les interactions stratégiques",
        text: "En psychologie comportementale, le silence déstabilise le bavard. Marquer un temps d'arrêt de quelques secondes après une affirmation pousse l'interlocuteur à se justifier ou à adoucir sa position par malaise du vide."
      },
      {
        num: "03",
        title: "L'écoute active : l'intelligence relationnelle suprême",
        content: [
          "L'individu silencieux n'est pas passif : il observe, analyse le langage non verbal, perçoit les hésitations et saisit le contexte invisible qui échappe à ceux qui ne pensent qu'à leur prochaine réplique.",
          "L'écoute authentique offre un avantage décisif : la connaissance lucide des dynamiques humaines, source fondamentale de l'influence bienveillante."
        ]
      },
      {
        type: "practical",
        title: "5 règles pour cultiver la puissance du silence",
        desc: "Conseils pratiques pour développer une présence posée au quotidien :",
        tips: [
          { num: "1", title: "La règle des 3 secondes", text: "Avant de répondre à une interpellation ou une critique, respirez et observez 3 secondes de silence." },
          { num: "2", title: "Cessez de trop justifier", text: "Une décision claire n'a pas besoin de plaidoyer : dites 'non' avec calme et fermeté." },
          { num: "3", title: "Gardez vos projets secrets", text: "Laissez vos réalisations concrètes parler plutôt que d'annoncer prématurément vos intentions." },
          { num: "4", title: "Apprivoisez les silences", text: "Ne comblez pas les pauses dans une conversation par du bavardage anxieux." },
          { num: "5", title: "Privilégiez la concision", text: "Moins vous parlez, plus vos paroles ont du poids et marquent les esprits." }
        ]
      }
    ],
    inBrief: [
      "Le silence est une preuve d'assurance et d'autodiscipline, jamais d'impuissance.",
      "La retenue mesurée suscite un respect instinctif et préserve le mystère de l'esprit.",
      "L'écoute profonde procure une compréhension fine des situations et des personnes.",
      "L'excès de paroles dilue la portée du message et trahit l'anxiété.",
      "La concision verbale force l'auditoire à une écoute attentive et respectueuse."
    ],
    conclusion: "Le silence est le sanctuaire de la pensée lucide et la demeure de la paix intérieure. En apprenant à vous taire à bon escient, vous protégez non seulement votre énergie vitale, mais vous développez une souveraineté que nulle agitation extérieure ne peut troubler.",
    finalQuote: "« Le silence est le grand art de la conversation. »",
    finalQuoteAuthor: "— William Hazlitt | Hikma & Nour",
    comments: [
      { author: "Alexandre V.", time: "Il y a 3 heures", text: "Cette réflexion résonne profondément. La règle des 3 secondes transforme radicalement les réunions professionnelles." },
      { author: "Claire B.", time: "Il y a 6 heures", text: "Le silence maîtrisé est en effet la marque des esprits calmes et sûrs d'eux-mêmes." }
    ]
  };

  const art2_en = {
    chapo: "In a world overwhelmed by noise and constant chatter, silence emerges not as an absence of speech, but as a commanding presence of dignity, self-mastery, and profound inner calm.",
    summaryBox: {
      title: "✦ Key Summary",
      summary: "Silence is not inability to speak, but a deliberate choice of emotional control and strategic timing. The quiet individual retains mystery, listens deeper, and commands effortless authority.",
      question: "Do you speak to fill empty air, or have you mastered the art of commanding respect through calm silence?"
    },
    sections: [
      {
        num: "01",
        title: "Silence as a Shield of Emotional Discipline",
        content: [
          "Those who talk continuously reveal their insecurities, hidden motives, and fears without realizing it. Silence, conversely, acts as a protective fortress against impulsive overreactions.",
          "Stoic wisdom teaches that controlling one's tongue is the highest form of self-rule. When you remain silent during heated moments, you compel others to confront their own turmoil."
        ]
      },
      {
        num: "02",
        title: "The Psychology of Mystery and Unspoken Charisma",
        content: [
          "Human nature inherently respects what it cannot immediately measure or predict. Over-explaining trivializes personality, while thoughtful quietness builds undeniable gravity.",
          "When you speak sparingly with weight and clarity, every word you utter carries immense value and commands the undivided attention of listeners."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Psychological Insight",
        title: "The Tactical Pause in Negotiation and Daily Life",
        text: "In behavioral psychology, a deliberate pause after a statement creates constructive tension. Silence compels the counterpart to reconsider, elaborate, or soften their stance to fill the vacuum."
      },
      {
        num: "03",
        title: "Active Listening as Supreme Social Intelligence",
        content: [
          "A silent person is never passive: they observe body language, detect subtle hesitations, and grasp the subtext that loud speakers inevitably overlook.",
          "Authentic listening gives you the greatest advantage in human dynamics: deep clarity and grounded understanding."
        ]
      },
      {
        type: "practical",
        title: "5 Rules to Master the Power of Silence",
        desc: "Practical steps to cultivate an unshakeable, calm presence :",
        tips: [
          { num: "1", title: "The 3-Second Rule", text: "Before answering any provocative question, breathe and pause for 3 seconds." },
          { num: "2", title: "Stop Over-Justifying", text: "Firm decisions need no long defense: say 'no' clearly and let it stand." },
          { num: "3", title: "Keep Your Plans Private", text: "Let your finished results speak rather than broadcasting intentions beforehand." },
          { num: "4", title: "Embrace Awkward Pauses", text: "Do not rush to fill conversational silence with anxious chatter." },
          { num: "5", title: "Value Brevity", text: "Brevity is the essence of wit and the hallmark of a confident intellect." }
        ]
      }
    ],
    inBrief: [
      "Silence is a sign of immense inner discipline, never weakness or indecision.",
      "Calculated quietness fosters mystery and commands natural respect.",
      "Attentive listening yields invaluable insight and situational awareness.",
      "Excessive talking diminishes personal authority and betrays anxiety.",
      "Concise speech forces listeners to pay genuine attention."
    ],
    conclusion: "Silence is ultimately the sanctuary of deep wisdom and the cradle of mental peace. When you master purposeful silence, you preserve your vital energy and radiate a quiet sovereignty that no external chaos can shake.",
    finalQuote: "« Silence is a source of great strength. »",
    finalQuoteAuthor: "— Lao Tzu | Hikma & Nour",
    comments: [
      { author: "David Miller", time: "2 hours ago", text: "Incredible essay. The 3-second rule has completely elevated my communication at work." },
      { author: "Elena Rostova", time: "5 hours ago", text: "A truly timeless reminder of the elegance of self-restraint." }
    ]
  };

  // Apply to DATA for Article 2
  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'why-people-respect-silent-person');
    if (art) {
      const src = lang === 'ar' ? art2_ar : (lang === 'fr' ? art2_fr : art2_en);
      Object.assign(art, src);
    }
  });

  // --- Article 3: nietzsche-psychological-strength ---
  const art3_ar = {
    chapo: "لم تكن فلسفة فريدريك نيتشه مجرد تنظير أكاديمي بارد، بل كانت صرخة حياة وتحدياً جذرياً لتجاوز الضعف الإنساني وبناء عقلية صلبة لا تنكسر أمام عواصف الوجود.",
    summaryBox: {
      title: "✦ جوهر فلسفة نيتشه في القوة",
      summary: "القوة عند نيتشه ليست بطشاً بالآخرين، بل هي التغلب على الذات وتحويل الآلام والإخفاقات إلى وقود للارتقاء الفكري والروحي نحو مرتبة 'الإنسان المتفوق'.",
      question: "هل تتعامل مع الصعوبات كعقبات تسحقك، أم كأدوات تصقل إرادتك وصلابتك؟"
    },
    sections: [
      {
        num: "01",
        title: "ما لا يقتلك يجعلك أقوى : مبدأ الصلابة النفسية",
        content: [
          "يرى نيتشه أن المعاناة ليست عقاباً أو عبثاً، بل هي المحك الأساسي الذي يميز العقول الاستثنائية عن العقول الخاملة. الإنسان الذي يبحث عن الراحة المستمرة يضمر ويفقد حيويته.",
          "الألم يحمل في طياته درساً نفسياً عميقاً؛ فهو يعري الأوهام ويدفعنا لبناء موارد داخلية حقيقية لا تتأثر بالظروف الخارجية."
        ]
      },
      {
        num: "02",
        title: "إرادة القوة : تجاوز الذات المستمر",
        content: [
          "مفهوم 'إرادة القوة' (Wille zur Macht) ليس رغبة في التسلط، بل هو الدافع الطبيعي للنمو، الإبداع، والسيادة على الانفعالات والغرائز.",
          "الشخص القوي نيتشاوياً هو الذي يقبل مصيره بكل ما فيه من أفراح وأتراح (Amor Fati) دون تذمر أو لعب دور الضحية."
        ]
      },
      {
        type: "insight",
        badge: "🧠 بصيرة فلسفية نيتشاوية",
        title: "عشق القدر (Amor Fati) : قمة التحرر النفسي",
        text: "أن تحب قدرك لا يعني الاستسلام السلبي، بل يعني أن تقول 'نعم' لكل لحظة في حياتك؛ فالإخفاقات التي واجهتها هي التي شكلت وعيك وقوتك الحالية، وبدونها لما كنت الشخص الذي أنت عليه اليوم."
      },
      {
        num: "03",
        title: "التحرر من عقلية القطيع وتأكيد التفرد",
        content: [
          "يحذر نيتشه من الخضوع الأعمى للأعراف والآراء الشائعة التي تقتل الإبداع والاستقلالية. القوة النفسية تتطلب شجاعة الوقوف وحيداً عند الدفاع عن الحقيقة والقيم الشخصية.",
          "أن تكون نفسك في عالم يسعى جاهداً لجعلك شبيهاً بالآخرين هو التحدي الأكبر وأعظم مظاهر البطولة الروحية."
        ]
      },
      {
        type: "practical",
        title: "٥ مبادئ نيتشاوية لبناء عقل لا ينكسر",
        desc: "كيف تطبق فلسفة نيتشه في حياتك المعاصرة :",
        tips: [
          { num: "1", title: "احتضن التحديات الصعبة", text: "لا تتهرب من المهام الشاقة، فهي التي تصنع كفاءتك وتبني ثقتك بنفسك." },
          { num: "2", title: "مارس حب القدر (Amor Fati)", text: "تقبل ما لا يمكنك تغييره واعتبر كل عائق فرصة جديدة للتعلم والارتقاء." },
          { num: "3", title: "ارفض عقلية الضحية", text: "تحمل المسؤولية الكاملة عن حياتك وخياراتك دون إلقاء اللوم على الظروف." },
          { num: "4", title: "تجاوز ذاتك القديمة يومياً", text: "اجعل منافسك الوحيد هو نسختك السابقة في الأمس." },
          { num: "5", title: "ابحث عن عزلتك الخصبة", text: "خصص وقتاً للتأمل الفردي بعيداً عن صخب وتأثيرات الجموع." }
        ]
      }
    ],
    inBrief: [
      "المعاناة ليست عدواً بل مدرسة لتطوير المناعة النفسية.",
      "إرادة القوة هي السعي الدائم لتطوير الذات والسيادة على النفس.",
      "مبدأ Amor Fati يحررك من الندم ويجعلك متصالحاً مع مسار حياتك.",
      "الاستقلالية الفكرية تتطلب شجاعة الانفصال عن قوالب التفكير الجمعي.",
      "العظمة تكمن في القدرة على تحويل المأساة إلى طاقة إبداعية."
    ],
    conclusion: "فلسفة نيتشه ليست دعوة للقسوة، بل دعوة للحياة في أبهى صورها: حياة مبنية على الشجاعة، المسؤولية، وعشق التحدي. حين تنظر إلى مصاعبك بعين القوة، يتلاشى الخوف وتولد في داخلك طاقة لا تقهر.",
    finalQuote: "« من يملك سبباً يعيش من أجله، يمكنه تحمل أي كيف تقريباً. »",
    finalQuoteAuthor: "— فريدريك نيتشه | حكمة ونور",
    comments: [
      { author: "حمزة التازي", time: "منذ ٤ ساعات", text: "تحليل فلسفي دقيق وعميق لفكر نيتشه بعيداً عن التشويهات الشائعة." },
      { author: "منى العبدالله", time: "منذ ٧ ساعات", text: "مفهوم Amor Fati غير نظرتي تماماً للعثرات التي مررت بها في حياتي." }
    ]
  };

  const art3_fr = {
    chapo: "La philosophie de Friedrich Nietzsche n'est pas une théorie abstraite, mais un hymne à la vie, un défi monumental lancé à l'être humain pour transcender ses faiblesses et forger une force intérieure inébranlable.",
    summaryBox: {
      title: "✦ L'Essence de la puissance selon Nietzsche",
      summary: "La force nietzschéenne n'est pas une domination d'autrui, mais un dépassement de soi-même : l'art souverain de transformer l'adversité et la souffrance en énergie vitale et en hauteur d'esprit.",
      question: "Considérez-vous vos épreuves comme des fardeaux destructeurs, ou comme le forgeage de votre esprit ?"
    },
    sections: [
      {
        num: "01",
        title: "Ce qui ne me tue pas me rend plus fort",
        content: [
          "Pour Nietzsche, la souffrance n'est pas une malédiction, mais l'épreuve décisive qui sépare les esprits d'élite de la médiocrité complaisante. L'homme qui ne cherche que le confort s'atrophie inévitablement.",
          "La douleur possède une vertu pédagogique incomparable : elle dépouille des illusions et contraint à puiser dans des ressources intérieures insoupçonnées."
        ]
      },
      {
        num: "02",
        title: "La Volonté de Puissance : le dépassement perpétuel de soi",
        content: [
          "Le concept de 'Volonté de Puissance' (Wille zur Macht) désigne l'élan fondamental de croissance, de création et de maîtrise de ses propres passions.",
          "L'homme noble accepte son destin avec vaillance (Amor Fati), sans jamais céder à l'amertume ou au ressentiment victimaire."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Concept philosophique majeur",
        title: "L'Amor Fati : aimer son destin sans réserve",
        text: "Aimer son destin ne signifie pas se résigner, mais embrasser pleinement chaque événement de son existence : les victoires comme les tempêtes ont forgé votre force d'aujourd'hui."
      },
      {
        num: "03",
        title: "S'affranchir de la morale du troupeau",
        content: [
          "Nietzsche met en garde contre la tyrannie du conformisme qui étouffe l'individualité créatrice. La véritable force psychologique exige le courage de se tenir debout, même en solitaire.",
          "Être soi-même dans un monde qui cherche sans cesse à vous normaliser constitue le plus haut acte d'héroïsme spirituel."
        ]
      },
      {
        type: "practical",
        title: "5 principes nietzschéens pour bâtir un mental solide",
        desc: "Comment incarner la philosophie de Nietzsche au quotidien :",
        tips: [
          { num: "1", title: "Embrassez la difficulté", text: "Ne fuyez pas l'effort : les défis les plus rudes sont les plus formateurs." },
          { num: "2", title: "Pratiquez l'Amor Fati", text: "Acceptez le réel et transformez chaque obstacle en tremplin d'apprentissage." },
          { num: "3", title: "Bannissez le ressentiment", text: "Ne blâmez ni les autres ni les circonstances ; soyez l'unique maître de vos choix." },
          { num: "4", title: "Dépassez-vous quotidiennement", text: "Ne vous comparez qu'à votre version d'hier." },
          { num: "5", title: "Cherchez la solitude créatrice", text: "Isolez-vous régulièrement pour penser, créer et vous ressourcer." }
        ]
      }
    ],
    inBrief: [
      "L'adversité est le catalyseur essentiel du renforcement psychologique.",
      "La volonté de puissance est avant tout une conquête de soi et de ses pulsions.",
      "L'Amor Fati délivre du regret stérile et réconcilie avec l'existence.",
      "L'autonomie intellectuelle nécessite de s'émanciper du conformisme de masse.",
      "La grandeur humaine réside dans la capacité à sublimer la douleur en création."
    ],
    conclusion: "La pensée de Nietzsche est une invitation vibrante à l'affirmation de la vie : une existence portée par le courage, la fierté d'être soi et la joie de surmonter les obstacles. Lorsque vous embrassez l'épreuve avec vaillance, aucune tempête ne peut vous anéantir.",
    finalQuote: "« Celui qui a un pourquoi qui lui tient lieu de but peut vivre avec presque n'importe quel comment. »",
    finalQuoteAuthor: "— Friedrich Nietzsche | Hikma & Nour",
    comments: [
      { author: "Julien M.", time: "Il y a 4 heures", text: "Une analyse magistrale qui rend justice à la profondeur de Nietzsche, loin des contresens habituels." },
      { author: "Nathalie D.", time: "Il y a 8 heures", text: "L'Amor Fati est une véritable boussole pour traverser les périodes de doute." }
    ]
  };

  const art3_en = {
    chapo: "Friedrich Nietzsche's philosophy was never dry academic theory, but a radical hymn to life and a timeless challenge to overcome human weakness and build an unshakeable mind.",
    summaryBox: {
      title: "✦ The Core of Nietzschean Strength",
      summary: "Strength in Nietzsche's vision is not domination over others, but supreme self-overcoming: the noble art of transmuting adversity and pain into intellectual vitality and spiritual elevation.",
      question: "Do you perceive hardship as a crushing burden, or as the essential anvil upon which your character is forged?"
    },
    sections: [
      {
        num: "01",
        title: "What Does Not Kill Me Makes Me Stronger",
        content: [
          "For Nietzsche, suffering is not a senseless punishment, but the fundamental trial that distinguishes remarkable minds from passive complacency. Continuous comfort inevitably breeds decay.",
          "Pain carries profound psychological wisdom: it strips away vanity and forces the emergence of genuine inner resilience."
        ]
      },
      {
        num: "02",
        title: "The Will to Power : Continual Self-Overcoming",
        content: [
          "The 'Will to Power' (Wille zur Macht) is the primal drive toward growth, creation, and sovereignty over one's impulses.",
          "The noble individual loves their fate (Amor Fati) unconditionally, refusing to fall into bitter resentment or victim mentality."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Philosophical Insight",
        title: "Amor Fati : Loving Fate Unconditionally",
        text: "Amor Fati is not passive resignation, but the joyful affirmation of every moment in your journey. Every scar and challenge has shaped your current consciousness."
      },
      {
        num: "03",
        title: "Breaking Free from Herd Mentality",
        content: [
          "Nietzsche warned against the stifling tyranny of conformism. True psychological strength requires the courage to stand alone in defense of personal truth and authentic values.",
          "Remaining true to oneself in a world designed to homogenize thought is the supreme form of spiritual heroism."
        ]
      },
      {
        type: "practical",
        title: "5 Nietzschean Rules to Build an Unbreakable Mind",
        desc: "How to apply Nietzschean philosophy in modern life :",
        tips: [
          { num: "1", title: "Embrace Hardship", text: "Do not shy away from arduous tasks; they build true competence." },
          { num: "2", title: "Practice Amor Fati", text: "Accept reality and turn every roadblock into a stepping stone." },
          { num: "3", title: "Reject Victimhood", text: "Take radical ownership of your decisions and destiny." },
          { num: "4", title: "Outgrow Your Past Self", text: "Compete solely against who you were yesterday." },
          { num: "5", title: "Cultivate Fertile Solitude", text: "Dedicate time to deep thinking away from collective noise." }
        ]
      }
    ],
    inBrief: [
      "Adversity is the vital catalyst for psychological fortification.",
      "The will to power is fundamentally self-mastery and inner growth.",
      "Amor Fati liberates from regret and fosters deep existential peace.",
      "Intellectual autonomy demands courage to resist social conformity.",
      "Human greatness lies in the capacity to sublimate pain into creation."
    ],
    conclusion: "Nietzsche's philosophy is an uncompromising invitation to live courageously, take full responsibility for one's destiny, and embrace every challenge as fuel for elevation. When you face life with boldness, no crisis can defeat you.",
    finalQuote: "« He who has a why to live can bear almost any how. »",
    finalQuoteAuthor: "— Friedrich Nietzsche | Hikma & Nour",
    comments: [
      { author: "Mark Henderson", time: "3 hours ago", text: "A truly empowering article. Nietzsche's insights on Amor Fati are transformative." },
      { author: "Sophia Lee", time: "7 hours ago", text: "Masterfully written. It captures the true spirit of self-overcoming." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'nietzsche-psychological-strength');
    if (art) {
      const src = lang === 'ar' ? art3_ar : (lang === 'fr' ? art3_fr : art3_en);
      Object.assign(art, src);
    }
  });

  // --- Article 4: schopenhauer-happiness-illusion ---
  const art4_ar = {
    chapo: "هل السعادة هدف حقيقي يمكن الإمساك به، أم أنها سراب يتبدد كلما اقتربنا منه؟ يقدم آرثر شوبنهاور واحدة من أعمق الرؤى الفلسفية والنفسية حول طبيعة الرغبة الإنسانية ومسار السلام الداخلي.",
    summaryBox: {
      title: "✦ معضلة الرغبة عند شوبنهاور",
      summary: "يعيش الإنسان في بندول متأرجح بين الألم (عند الحرمان من الرغبة) والملل (عند تحقيقها). السعادة الإيجابية وهم، بينما السلام الحقيقي يكمن في التحرر من سطوة الرغبات وتهدئة الإرادة.",
      question: "هل تطارد السعادة كمتعة مستمرة، أم تبحث عن راحة البال والسكينة الداخلية الدائمة؟"
    },
    sections: [
      {
        num: "01",
        title: "بندول الحياة : بين الألم والملل",
        content: [
          "يشبه شوبنهاور الوجود الإنساني ببندول يتأرجح باستمرار بين قطبين: الألم الناتج عن الرغبات غير الملباة، والملل القاتل الذي يتبع إشباع تلك الرغبات فوراً.",
          "كلما حقق الإنسان هدفاً كان يظن أنه سيمنحه السعادة الأبدية، سرعان ما تتلاشى النشوة وتحل محلها رغبة جديدة أو فراغ نفسي خانق."
        ]
      },
      {
        num: "02",
        title: "طبيعة السعادة السلبية : غياب المعاناة",
        content: [
          "من أعظم كشوفات شوبنهاور أن السعادة ليست حالة إيجابية ملموسة، بل هي حالة 'سلبية' تعني ببساطة غياب الألم والقلق والمرض.",
          "الصحة والسكينة لا نشعر بقيمتهما إلا عند فقدانهما؛ لذا فالحكمة تقتضي تقليل التوقعات والتركيز على تجنب المعاناة بدلاً من الجري وراء الملذات العابرة."
        ]
      },
      {
        type: "insight",
        badge: "🧠 بصيرة شوبنهاورية عميقة",
        title: "الفن والتأمل كملاذ من عذاب الإرادة",
        text: "يرى شوبنهاور أن الانغماس في الفنون الرفيعة والتأمل الفلسفي يجمد 'إرادة الحياة' مؤقتاً، وينقل العقل من حالة الصراع مع الرغبات إلى حالة من الطمأنينة الخالصة والنقاء الجمالي."
      },
      {
        num: "03",
        title: "طريق النجاة : الزهد والتعاطف الكوني",
        content: [
          "الخلاص الحقيقي عند شوبنهاور يمر عبر محطتين: الأولى هي تقليص الارتباط بالماديات والمظاهر، والثانية هي التعاطف الصادق مع كل الكائنات التي تشاركنا المعاناة الوجودية.",
          "حين تدرك أن الجميع يتألم مثلك، يحل التراحم مكان التنافس الشرس، ويصل العقل إلى مرفأ الهدوء والسكينة."
        ]
      },
      {
        type: "practical",
        title: "٥ خطوات شوبنهاورية لتحقيق السلام النفسي",
        desc: "كيف تبني هدوءاً داخلياً لا يتأثر بتقلبات الرغبة :",
        tips: [
          { num: "1", title: "اخفض سقف توقعاتك من العالم", text: "توقف عن انتظار السعادة المثالية واعتبر كل يوم خالٍ من الألم نصراً حقيقياً." },
          { num: "2", title: "قلص رغباتك الاستهلاكية", text: "كل رغبة جديدة تفتح باباً جديداً للقلق والتبعية." },
          { num: "3", title: "قدر قيمة الصحة والهدوء", text: "تذكر أن أكبر النعم هي تلك التي لا نشعر بها لأنها تسير بانتظام." },
          { num: "4", title: "مارس التأمل والانغماس الفني", text: "اقرأ، استمع للموسيقى الهادئة، وتأمل جمال الطبيعة لتصفية الذهن." },
          { num: "5", title: "عامل الآخرين برحمة وتفهم", text: "اعلم أن خلف كل إنسان صراعاً خفياً مع رغباته ومخاوفه." }
        ]
      }
    ],
    inBrief: [
      "السعادة الإيجابية وهم زائل بينما غياب الألم هو النعمة الحقيقية.",
      "الإنسان يتأرجح دائماً بين ألم الحرمان وملل الإشباع.",
      "الفن والتأمل يوفران استراحة مقدسة من وطأة رغبات النفس.",
      "الزهد في الماديات والتطلعات يقلل مساحة القلق في الحياة.",
      "التعاطف مع معاناة الآخرين هو جوهر الحكمة والسلام الروحي."
    ],
    conclusion: "فلسفة شوبنهاور ليست دعوة لليأس، بل هي دعوة للاستيقاظ من وهم المطاردة التي لا تنتهي. عندما تتوقف عن مطاردة السعادة الزائفة، تجد في داخلك سلاماً هادئاً وراحة بال لا تقدر بثمن.",
    finalQuote: "« إن أعظم حكمة في الحياة هي أن تقتنع بأن تجنب المعاناة هو أفضل بكثير من البحث عن اللذة. »",
    finalQuoteAuthor: "— آرثر شوبنهاور | حكمة ونور",
    comments: [
      { author: "طارق السليماني", time: "منذ ٣ ساعات", text: "رؤية شوبنهاور للبندول بين الألم والملل تفسر بدقة علة العصر الاستهلاكي الحديث." },
      { author: "إيمان الشريف", time: "منذ ٦ ساعات", text: "مقال رائع ومهدئ للأعصاب، يضع الأمور في نصابها الصحيح." }
    ]
  };

  const art4_fr = {
    chapo: "Le bonheur est-il un état accessible ou un mirage qui s'évanouit dès qu'on le frôle ? Arthur Schopenhauer offre l'une des analyses les plus lucides et percutantes sur la dynamique du désir et les chemins de la sérénité.",
    summaryBox: {
      title: "✦ Le Dilemme du désir selon Schopenhauer",
      summary: "L'existence humaine oscille comme un pendule entre la souffrance du manque et l'ennui de la satiété. Le bonheur positif est une illusion ; la paix véritable réside dans l'apaisement du vouloir-vivre.",
      question: "Poursuivez-vous le bonheur comme une accumulation de plaisirs, ou cultivez-vous la quiétude de l'esprit ?"
    },
    sections: [
      {
        num: "01",
        title: "Le pendule de l'existence : entre souffrance et ennui",
        content: [
          "Schopenhauer compare la vie humaine à un pendule oscillant sans trêve entre deux pôles : la souffrance causée par les désirs inassouvis, et l'ennui désarmant qui suit immédiatement leur satisfaction.",
          "Chaque fois qu'un objectif est atteint, l'euphorie s'estompe rapidement pour laisser place à un nouveau tourment ou à une lancinante vacuité."
        ]
      },
      {
        num: "02",
        title: "La nature négative du bonheur : l'absence de douleur",
        content: [
          "L'une des thèses cardinales de Schopenhauer est que le bonheur n'a pas de réalité positive : il correspond purement et simplement à l'absence de douleur physique et d'angoisse morale.",
          "La santé et la tranquillité ne sont pleinement appréciées que lorsqu'elles viennent à manquer. La sagesse commande donc d'éviter la souffrance plutôt que de courir après les chimères du plaisir."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Intuition philosophique majeure",
        title: "L'art et la contemplation comme asile spirituel",
        text: "La contemplation esthétique et la méditation suspendent temporairement le tyran du vouloir-vivre. Devant la beauté pure d'une œuvre ou de la nature, l'esprit s'affranchit du tumulte des désirs."
      },
      {
        num: "03",
        title: "La voie de la délivrance : renoncement et compassion",
        content: [
          "Le salut de l'âme repose sur deux piliers : d'une part, la modération des besoins matériels ; d'autre part, la compassion universelle envers tous les êtres partageant la condition tragique de l'existence.",
          "En réalisant que chaque être lutte contre la même souffrance, la bienveillance remplace la rivalité et l'âme accède à une paix inaltérable."
        ]
      },
      {
        type: "practical",
        title: "5 étapes schopenhaueriennes vers la paix intérieure",
        desc: "Comment bâtir un équilibre mental préservé des tourments du désir :",
        tips: [
          { num: "1", title: "Modérez vos attentes envers la vie", text: "Cessez d'exiger un bonheur féerique ; chaque jour sans tourment est une bénédiction." },
          { num: "2", title: "Réduisez vos besoins superflus", text: "Moins vous désirez d'artifices, moins vous offrez de prises à l'angoisse." },
          { num: "3", title: "Chérissez le calme présent", text: "Appréciez la santé et la quiétude tant qu'elles vous accompagnent." },
          { num: "4", title: "Cultivez la contemplation artistique", text: "Consacrez du temps à la lecture, à la musique et à l'observation de la nature." },
          { num: "5", title: "Exercez une compassion active", text: "Regardez autrui avec empathie, sachant que chacun porte ses propres peines." }
        ]
      }
    ],
    inBrief: [
      "Le bonheur positif est une illusion éphémère ; le vrai bien est l'absence de douleur.",
      "L'esprit humain oscille continuellement entre le manque et la satiété ennuyeuse.",
      "La contemplation de l'art offre une trêve bienfaisante contre les tourments du désir.",
      "Le désencombrement matériel et mental est le garant de la liberté intérieure.",
      "La compassion envers le vivant est le couronnement de la lucidité philosophique."
    ],
    conclusion: "La pensée de Schopenhauer n'est pas un pessimisme stérile, mais une formidable leçon de désillusionnement salutaire. En renonçant à la poursuite frénétique des faux bonheurs, vous découvrez en vous un sanctuaire de sérénité et de paix souveraine.",
    finalQuote: "« La plus grande des sagesses consiste à préférer la préservation contre la souffrance à la poursuite du plaisir. »",
    finalQuoteAuthor: "— Arthur Schopenhauer | Hikma & Nour",
    comments: [
      { author: "Marc D.", time: "Il y a 2 heures", text: "Une clarté d'exposition remarquable. Le concept du pendule éclaire toute la société de consommation moderne." },
      { author: "Sophie L.", time: "Il y a 5 heures", text: "Ce texte fait tellement de bien. Réduire ses désirs est effectivement la clé de la paix." }
    ]
  };

  const art4_en = {
    chapo: "Is happiness a reachable reality or a mirage that vanishes the moment we approach it? Arthur Schopenhauer offers one of the most profound and piercing examinations of desire and the path to genuine serenity.",
    summaryBox: {
      title: "✦ Schopenhauer's Dilemma of Desire",
      summary: "Human life swings like a pendulum between pain (when desires are unmet) and boredom (once they are fulfilled). Positive happiness is an illusion; true peace lies in quieting the Will to Live.",
      question: "Are you chasing continuous pleasure, or cultivating lasting peace of mind and inner tranquility?"
    },
    sections: [
      {
        num: "01",
        title: "The Pendulum of Life : Between Pain and Boredom",
        content: [
          "Schopenhauer likens existence to a pendulum swinging perpetually between two poles: the suffering of unfulfilled desires, and the crushing boredom that follows their instant gratification.",
          "Whenever we attain a long-sought goal, the initial thrill evaporates, quickly replaced by a new craving or existential emptiness."
        ]
      },
      {
        num: "02",
        title: "The Negative Nature of Happiness : Freedom from Pain",
        content: [
          "One of Schopenhauer's greatest insights is that happiness has no positive substance: it is simply the negative state of being free from physical pain and psychological anxiety.",
          "Health and peace are rarely appreciated until they are lost; wisdom therefore dictates minimizing suffering rather than recklessly pursuing transient pleasures."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Philosophical Insight",
        title: "Art and Contemplation as a Sacred Sanctuary",
        text: "In aesthetic contemplation and deep meditation, the relentless Will is temporarily stilled. Observing beauty lifts the mind into pure, undisturbed serenity."
      },
      {
        num: "03",
        title: "The Path to Liberation : Simplicity and Universal Compassion",
        content: [
          "True liberation rests on two pillars: reducing material attachments and cultivating sincere compassion for all living beings bound by existential struggle.",
          "When you realize that everyone is fighting a silent battle, empathy replaces rivalry, guiding the soul toward lasting tranquility."
        ]
      },
      {
        type: "practical",
        title: "5 Schopenhauerian Steps to Inner Peace",
        desc: "How to cultivate an unshakeable mind free from the tyranny of desire :",
        tips: [
          { num: "1", title: "Lower Expectations from the World", text: "Do not demand perfection from life; celebrate every pain-free day as a victory." },
          { num: "2", title: "Minimize Superfluous Desires", text: "Every unnecessary craving opens a new portal to anxiety." },
          { num: "3", title: "Value Present Calm", text: "Appreciate health, peace, and simplicity while you have them." },
          { num: "4", title: "Immerse in Art and Nature", text: "Read, listen to inspiring music, and spend time in natural silence." },
          { num: "5", title: "Practice Deep Empathy", text: "Recognize that all living beings share the fragile struggle of existence." }
        ]
      }
    ],
    inBrief: [
      "Positive happiness is an illusion; the absence of pain is the true good.",
      "The human mind constantly swings between longing and boredom.",
      "Art and meditation offer a sacred pause from the demands of the Will.",
      "Material simplicity is the ultimate protector of mental peace.",
      "Compassion for all life is the crowning virtue of philosophical maturity."
    ],
    conclusion: "Schopenhauer's philosophy is not despair, but a profound awakening from endless chasing. When you let go of illusory pleasures, you discover an unshakeable fortress of serenity within your own soul.",
    finalQuote: "« The greatest wisdom is to make the prevention of suffering the primary aim of life. »",
    finalQuoteAuthor: "— Arthur Schopenhauer | Hikma & Nour",
    comments: [
      { author: "Robert Clark", time: "4 hours ago", text: "One of the most lucid philosophical explanations I have ever read. Truly timeless." },
      { author: "Emily Watson", time: "6 hours ago", text: "The pendulum concept perfectly diagnoses modern consumer culture." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'schopenhauer-happiness-illusion');
    if (art) {
      const src = lang === 'ar' ? art4_ar : (lang === 'fr' ? art4_fr : art4_en);
      Object.assign(art, src);
    }
  });

  // Write updated data_v11.js
  const exportStr = 'const TIKTOK_DATA = ' + JSON.stringify(DATA, null, 2) + ';\n\nexport default TIKTOK_DATA;\n';
  fs.writeFileSync('data_v11.js', exportStr, 'utf8');
  console.log('✅ Successfully updated Group 1 in data_v11.js');
}

updateGroup1().catch(err => {
  console.error('Error updating Group 1:', err);
  process.exit(1);
});
