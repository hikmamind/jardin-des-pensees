const fs = require('fs');

async function updateGroup3() {
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  // --- Article 8: true-confidence-inside ---
  const art8_ar = {
    chapo: "بين الغرور المصطنع والشك القاتل في الذات، تكمن الثقة الحقيقية كقوة هادئة ورصينة تنبع من التصالح مع النفس ومعرفة حدودها، بعيداً عن صخب المظاهر ومطاردة الاستحسان الخارجي.",
    summaryBox: {
      title: "✦ جوهر الثقة الأصيلة",
      summary: "الثقة الحقيقية ليست التظاهر بالكمال أو التفوق على الآخرين، بل هي الشجاعة في قبول عدم الكمال والاعتماد على الكفاءة الذاتية والثبات الأخلاقي في مواجهة المجهول.",
      question: "هل تستمد ثقتك من إعجاب الآخرين المؤقت، أم من سلامك الداخلي ويقينك بقيمتك الذاتية؟"
    },
    sections: [
      {
        num: "01",
        title: "الفرق بين الثقة الهادئة والغرور الهش",
        content: [
          "الغرور صاخب، دفاعي، ويحتاج دائماً لإثبات نفسه وتحقير الآخرين للشعور بالأمان. في المقابل، الثقة الحقيقية صامتة، مستقرة، ولا تشعر بأي حاجة للدخول في صراعات إثبات الذات.",
          "الواثق من نفسه لا يخاف من الاعتراف بالجهل أو الخطأ، لأن قيمته الجوهرية غير مرتبطة بنتيجة موقف عابر."
        ]
      },
      {
        num: "02",
        title: "الثقة كنتاج للكفاءة والوعود الموفاة مع الذات",
        content: [
          "في علم النفس المعاصر، الثقة ليست مشاعر سحرية تهبط من السماء، بل هي سمعتك الطيبة لدى نفسك. كلما وفيت بوعد قطعته لنفسك (الاستيقاظ، العمل، الالتزام)، كلما ارتفعت ثقتك بقدراتك.",
          "التناقض بين ما تقوله وما تفعله في الخفاء هو المدمر الأول لتقدير الذات."
        ]
      },
      {
        type: "insight",
        badge: "🧠 قاعدة نفسية ذهبية",
        title: "مفهوم الكفاءة الذاتية (Self-Efficacy)",
        text: "وفقاً لعالم النفس ألبرت باندورا، الثقة الحقيقية هي إيمانك بقدرتك على التعلم والتكيف مع التحديات الجديدة، وليست معرفتك المسبقة بكل شيء. أنت تثق في قدرتك على إيجاد الحلول."
      },
      {
        num: "03",
        title: "التحرر من متلازمة المحتال والخوف من الأحكام",
        content: [
          "يعاني الكثيرون من 'متلازمة المحتال' والشك الدائم في أهليتهم. الحكمة تقتضي إدراك أن كل العقول العظيمة مرت بلحظات شك مماثلة، وأن الشك الصحي هو محرك البحث عن الإتقان.",
          "توقف عن مراقبة نفسك بعيون الناقد القاسي، وتعامل مع مسارك كطالب يتعلم باستمرار في مدرسة الحياة."
        ]
      },
      {
        type: "practical",
        title: "٥ خطوات يومية لبناء ثقة ذاتية لا تتزعزع",
        desc: "تطبيقات عملية لترسيخ اليقين والهدوء الداخلي :",
        tips: [
          { num: "1", title: "حافظ على وعودك الصغيرة لنفسك", text: "التزم بالأهداف اليومية البسيطة لبناء هيبة ذاتية راسخة أمام عقلك الباطن." },
          { num: "2", title: "تقبل ارتكاب الأخطاء كجزء من التعلم", text: "الخطأ دليل على أنك تحاول وتتطور؛ لا تجعل منه محاكمة لهويتك." },
          { num: "3", title: "طور مهارة حقيقية بتركيز عميق", text: "الكفاءة المتقنة في مجال معين هي أمتن صخرة تبنى عليها الثقة الحقيقية." },
          { num: "4", title: "تحدث مع نفسك باحترام", text: "راقب حديثك الداخلي وتوقف عن جلد الذات بألفاظ محبطة." },
          { num: "5", title: "مارس الوقفة الواثقة والتنفس العميق", text: "لغة الجسد تؤثر مباشرة على كيمياء الدماغ ومستويات هرمون الثقة." }
        ]
      }
    ],
    inBrief: [
      "الثقة الحقيقية هدوء ورزانة بينما الغرور قناع يخفي الهشاشة.",
      "الثقة هي السمعة التي تبنيها مع نفسك عبر الالتزام بالوعود.",
      "الكفاءة الذاتية تعني الإيمان بالقدرة على التكيف والتعلم المستمر.",
      "الشك الطبيعي جزء من النمو ولا ينبغي أن يعطلك عن الفعل.",
      "بناء مهارات صلبة هو المولد الأساسي لتقدير الذات الحقيقي."
    ],
    conclusion: "الثقة بالنفس ليست شعاراً نردده، بل هي ثمرة رحلة طويلة من الصدق مع الذات، والانضباط، وقبول النقص البشري بنبل وشجاعة. حين تثق في جذورك، لن تخشى هبوب الرياح.",
    finalQuote: "« ما إن تثق بنفسك حتى تعرف كيف تعيش. »",
    finalQuoteAuthor: "— يوهان فولفغانغ فون غوته | حكمة ونور",
    comments: [
      { author: "طارق المهدي", time: "منذ ساعة", text: "فكرة أن الثقة هي سمعتك عند نفسك غيرت نظرتي كلياً لمفهوم الانضباط." },
      { author: "سعاد التميمي", time: "منذ ٣ ساعات", text: "مقال رائع ومتوازن جداً بين الطرح النفسي والتطبيق العملي." }
    ]
  };

  const art8_fr = {
    chapo: "Entre l'arrogance tapageuse et le doute paralysant, la confiance authentique se dresse comme une force sereine. Elle ne naît pas du regard d'autrui, mais de la paix avec soi-même et de l'estime de ses propres valeurs.",
    summaryBox: {
      title: "✦ L'Essence de la confiance souveraine",
      summary: "La véritable assurance ne consiste pas à prétendre être parfait ou supérieur, mais à posséder la force d'accepter son imperfectibilité tout en se fiant à sa capacité d'apprentissage face à l'inconnu.",
      question: "Votre assurance dépend-elle de l'approbation sociale, ou de votre alignement intérieur inébranlable ?"
    },
    sections: [
      {
        num: "01",
        title: "Assurance tranquille contre arrogance défensive",
        content: [
          "L'arrogance est bruyante, fragile et cherche constamment à rabaisser pour se rassurer. À l'inverse, l'assurance véritable est silencieuse, posée et ne ressent nul besoin de prouver quoi que ce soit.",
          "L'esprit solide n'a pas honte d'admettre son ignorance ou ses erreurs, car sa valeur fondamentale ne dépend pas d'un résultat passager."
        ]
      },
      {
        num: "02",
        title: "La confiance comme réputation envers soi-même",
        content: [
          "En psychologie moderne, la confiance n'est pas une émotion mystique, mais la réputation intime que vous avez bâtie auprès de votre propre conscience. Chaque promesse tenue envers vous-même renforce votre socle intérieur.",
          "Le décalage entre vos paroles publiques et vos actes secrets est le destructeur numéro un de l'estime de soi."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Pilier de psychologie cognitive",
        title: "L'Auto-efficacité selon Albert Bandura",
        text: "L'auto-efficacité est la croyance intime en votre capacité à surmonter les obstacles et à apprendre ce qui vous manque. Vous ne prétendez pas tout savoir : vous avez confiance en votre faculté d'adaptation."
      },
      {
        num: "03",
        title: "Vaincre le syndrome de l'imposteur",
        content: [
          "Douter de sa légitimité est fréquent chez les esprits réfléchis. La sagesse consiste à comprendre que le doute lucide est le moteur du perfectionnement, pourvu qu'il ne se transforme pas en auto-sabotage.",
          "Cessez d'être votre propre procureur : avancez en artisan consciencieux dans l'apprentissage de la vie."
        ]
      },
      {
        type: "practical",
        title: "5 pratiques pour forger une confiance inébranlable",
        desc: "Rituels quotidiens d'alignement et de solidité :",
        tips: [
          { num: "1", title: "Tenez vos micro-engagements", text: "Chaque tâche accomplie dans l'ombre forge le respect de votre inconscient." },
          { num: "2", title: "Dédramatisez l'erreur", text: "L'échec est une donnée informative sur la méthode, jamais un jugement sur votre être." },
          { num: "3", title: "Maîtrisez une compétence réelle", text: "L'expertise concrète est le roc le plus solide sur lequel fonder son assurance." },
          { num: "4", title: "Soignez votre dialogue intérieur", text: "Parlez-vous avec la bienveillance et l'exigence d'un mentor éclairé." },
          { num: "5", title: "Adoptez une posture d'ancrage", text: "Tenez-vous droit et respirez calmement : le corps informe directement l'esprit de sa force." }
        ]
      }
    ],
    inBrief: [
      "La vraie confiance est calme et mesurée ; l'arrogance est un masque d'insécurité.",
      "L'estime de soi est le fruit direct des promesses tenues envers sa propre conscience.",
      "L'auto-efficacité repose sur la certitude de savoir apprendre et s'adapter.",
      "Le doute méthodique est sain dès lors qu'il stimule l'action au lieu de la paralyser.",
      "L'expertise réelle et l'intégrité morale constituent les fondations de l'assurance."
    ],
    conclusion: "La confiance en soi n'est pas un slogan superficiel, mais l'aboutissement d'une loyauté absolue envers ses principes et d'un travail patient de maîtrise personnelle. Lorsque vos racines sont profondes, nul vent ne peut vous déraciner.",
    finalQuote: "« Dès que vous aurez confiance en vous-même, vous saurez comment vivre. »",
    finalQuoteAuthor: "— Johann Wolfgang von Goethe | Hikma & Nour",
    comments: [
      { author: "Romain G.", time: "Il y a 2 heures", text: "La définition de la confiance comme 'réputation envers soi-même' est d'une justesse implacable." },
      { author: "Élise C.", time: "Il y a 4 heures", text: "Un essai d'une grande profondeur qui aide énormément à surmonter le syndrome de l'imposteur." }
    ]
  };

  const art8_en = {
    chapo: "Between loud arrogance and paralyzing self-doubt lies true confidence: a quiet, grounded force born from self-honesty, moral integrity, and deep inner peace.",
    summaryBox: {
      title: "✦ The Essence of Authentic Confidence",
      summary: "True self-confidence is not pretending to be flawless or superior to others, but having the courage to accept imperfection while trusting your ability to learn, adapt, and prevail.",
      question: "Is your confidence built on transient external validation, or on unshakeable inner alignment?"
    },
    sections: [
      {
        num: "01",
        title: "Quiet Assurance vs. Fragile Arrogance",
        content: [
          "Arrogance is loud, defensive, and perpetually needs to demean others to feel secure. In contrast, genuine confidence is calm, steady, and feels no urge to engage in ego battles.",
          "A truly confident person is never ashamed to admit ignorance or error, because their fundamental self-worth is not tied to a single moment."
        ]
      },
      {
        num: "02",
        title: "Confidence as Your Reputation with Yourself",
        content: [
          "In modern psychology, confidence is not a magical feeling, but the sacred reputation you build with your own conscience. Every promise kept to yourself strengthens your foundation.",
          "The gap between what you preach publicly and what you do in private is the single greatest destroyer of self-esteem."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Psychological Cornerstone",
        title: "Albert Bandura's Self-Efficacy",
        text: "Self-efficacy is the grounded conviction in your ability to learn, adapt, and navigate novel challenges. You do not need to know everything beforehand; you trust your capacity to find solutions."
      },
      {
        num: "03",
        title: "Overcoming Impostor Syndrome",
        content: [
          "Many accomplished minds struggle with impostor syndrome. Wisdom lies in recognizing that healthy self-doubt is the engine of mastery, as long as it does not freeze action.",
          "Stop acting as your own harsh prosecutor; walk forward as a dedicated apprentice in the school of life."
        ]
      },
      {
        type: "practical",
        title: "5 Daily Practices to Build Unshakeable Confidence",
        desc: "Actionable habits for daily groundedness :",
        tips: [
          { num: "1", title: "Keep Small Daily Promises", text: "Complete small commitments daily to build genuine self-respect." },
          { num: "2", title: "De-Dramatize Mistakes", text: "Errors are data about strategy, never a verdict on your soul." },
          { num: "3", title: "Master Real Competence", text: "Genuine mastery in a chosen craft is the bedrock of confidence." },
          { num: "4", title: "Upgrade Inner Self-Talk", text: "Speak to yourself with the wisdom, firmness, and compassion of a great mentor." },
          { num: "5", title: "Adopt Grounded Posture", text: "Stand tall and breathe deeply: the body directly shapes brain neurochemistry." }
        ]
      }
    ],
    inBrief: [
      "True confidence is calm and dignified; arrogance is a mask of vulnerability.",
      "Self-esteem is the direct fruit of promises kept to your own conscience.",
      "Self-efficacy means trusting your capacity to learn and adapt.",
      "Constructive doubt is natural; never let it paralyze purposeful action.",
      "Authentic skill and moral integrity are the enduring pillars of assurance."
    ],
    conclusion: "Self-confidence is not a shallow slogan, but the profound reward of absolute self-honesty, discipline, and noble resilience. When your roots run deep, no wind can shake you.",
    finalQuote: "« As soon as you trust yourself, you will know how to live. »",
    finalQuoteAuthor: "— Johann Wolfgang von Goethe | Hikma & Nour",
    comments: [
      { author: "Liam Patterson", time: "1 hour ago", text: "Defining confidence as your reputation with yourself completely changed my perspective." },
      { author: "Karen Mitchell", time: "4 hours ago", text: "Brilliant, practical, and philosophically profound." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'true-confidence-inside');
    if (art) {
      const src = lang === 'ar' ? art8_ar : (lang === 'fr' ? art8_fr : art8_en);
      Object.assign(art, src);
    }
  });

  // --- Article 9: hikma-citations-philosophiques ---
  const art9_ar = {
    chapo: "الاقتباس الفلسفي ليس مجرد كلمات منمقة، بل هو خلاصة عقود من المعاناة والتأمل الإنساني العميق. كيف تحول أقوال الحكماء إلى بوصلة عملية توجه قراراتك اليومية وتمنحك السكينة؟",
    summaryBox: {
      title: "✦ قوة الحكمة المركزة",
      summary: "الحكمة الحقيقية هي تلك التي تختزل الحقيقة الوجودية في عبارة جامعة توقظ العقل وتلهمه السلوك القويم عند مفارق الطرق الحياتية المعقدة.",
      question: "هل تقرأ الحكم لتزيين حديثك، أم تجعل منها معايير صارمة تقود سلوكك وقراراتك؟"
    },
    sections: [
      {
        num: "01",
        title: "حكمة الرواقية : السيادة على الانفعالات",
        content: [
          "من ماركوس أوريليوس إلى سينيكا وإبيكتيتوس، تقدم الرواقية مصفوفة فكرية لحماية السلام الداخلي من تقلبات الدهر. المبدأ الذهبي: 'لا تتحكم في الأحداث، بل في تفسيرك لها'.",
          "حين تحفظ هذه القواعد عن ظهر قلب وتستدعيها في لحظات الغضب، تنقلب المحن إلى فرص للتدريب الأخلاقي."
        ]
      },
      {
        num: "02",
        title: "فلسفة الوجود والحرية : شجاعة الاختيار",
        content: [
          "من سقراط إلى كانط وسارتر ونيتشه، تشدد الفلسفة الكلاسيكية والوجودية على المسؤولية الفردية المطلقة. أنت لست نتاج ما حدث لك، بل نتاج ما تختاره في هذه اللحظة.",
          "الحرية ليست فوضى، بل هي التزام شجاع بالقيم الأخلاقية السامية حتى في أصعب الظروف."
        ]
      },
      {
        type: "insight",
        badge: "🧠 التأثير النفسي للحكمة",
        title: "العلاج بالمعنى والفلسفة الإرشادية",
        text: "أثبتت دراسات العلاج المعرفي السلوكي (CBT) أن استحضار المبادئ الفلسفية الرصينة يعيد توازن القشرة الجبهية في الدماغ ويهدئ الاستجابات العاطفية المفرطة في اللوزة الدماغية."
      },
      {
        num: "03",
        title: "تحويل القول المأثور إلى ممارسة حية",
        content: [
          "أكبر خطأ هو التعامل مع الفلسفة كترف نظري. الحكيم الحقيقي هو الذي تتجسد فلسفته في أفعاله، في تعامله مع خصومه، وفي طريقة مواجهته للشدائد.",
          "كما قال إبيكتيتوس: 'لا تتحدث طويلاً عن كيف ينبغي أن يكون الإنسان الفاضل، بل كن أنت هذا الإنسان'."
        ]
      },
      {
        type: "practical",
        title: "٥ وصايا ذهبية من حكماء التاريخ",
        desc: "بوصلة يومية للصفاء الذهني والاتزان :",
        tips: [
          { num: "1", title: "مبدأ سقراط", text: "« اعرف نفسك بنفسك » : راقب دوافعك الحقيقية قبل الحكم على الآخرين." },
          { num: "2", title: "مبدأ ماركوس أوريليوس", text: "« لا تضيع مزيداً من الوقت في الجدال حول ما يجب أن يكون عليه الرجل الصالح؛ كن واحداً »." },
          { num: "3", title: "مبدأ سينيكا", text: "« نحن نعاني في الخيال أكثر مما نعاني في الواقع » : لا تستبق المصائب قبل وقوعها." },
          { num: "4", title: "مبدأ إبيكتيتوس", text: "« ليس ما يحدث لك هو ما يهم، بل طريقة ردك عليه »." },
          { num: "5", title: "مبدأ نيتشه", text: "« من يملك سبباً يعيش لأجله، يتحمل أي كيف تقريباً »." }
        ]
      }
    ],
    inBrief: [
      "الاقتباس الفلسفي خارطة طريق مختصرة لحل المعضلات النفسية.",
      "الرواقية هي فن حماية السلام الداخلي عبر التحكم في التفسيرات.",
      "الحرية الحقيقية تكمن في تحمل المسؤولية الكاملة عن الخيارات.",
      "الفلسفة الحقيقية هي التي تترجم في السلوك وليس في التنظير.",
      "استحضار الحكم في الأوقات الصعبة يعيد التوازن العصبي والفكري."
    ],
    conclusion: "كلمات الحكماء نجوم تهدي السائرين في ظلمات الحيرة. حين تغرس هذه المبادئ في قلبك وعقلك، تصبح مسيرتك في الحياة أكثر ثباتاً، ورزانة، ونوراً.",
    finalQuote: "« إن الحياة غير المفحوصة لا تستحق العيش. »",
    finalQuoteAuthor: "— سقراط | حكمة ونور",
    comments: [
      { author: "كريم السعدي", time: "منذ ساعتين", text: "مجموعة مقتبسات مختارة بعناية فائقة وتحليل فلسفي ممتع جداً." },
      { author: "ليلى الحارثي", time: "منذ ٥ ساعات", text: "أجمل ما في المقال هو ربط الاقتباس بالتطبيق العملي في الحياة اليومية." }
    ]
  };

  const art9_fr = {
    chapo: "Une citation philosophique n'est pas un ornement littéraire, mais la quintessence d'une vie de méditations et d'épreuves. Comment transformer les maximes des grands sages en boussole quotidienne pour guider vos choix ?",
    summaryBox: {
      title: "✦ La Puissance de la maxime philosophique",
      summary: "La véritable sagesse condense la vérité existentielle en formules lumineuses qui réveillent la conscience et arment l'esprit face aux carrefours complexes de l'existence.",
      question: "Lisez-vous les citations pour briller en société, ou pour forger votre caractère et gouverner vos actions ?"
    },
    sections: [
      {
        num: "01",
        title: "La sagesse stoïcienne : la maîtrise des représentations",
        content: [
          "De Marc Aurèle à Sénèque et Épictète, le stoïcisme offre une forteresse mentale contre l'inconstance du sort. Le principe souverain : 'Ce ne sont pas les choses qui nous troublent, mais le jugement que nous portons sur elles'.",
          "En gravant ces préceptes dans sa mémoire pour les mobiliser dans l'adversité, chaque épreuve se transforme en exercice de vertu."
        ]
      },
      {
        num: "02",
        title: "La liberté et la responsabilité existentielle",
        content: [
          "De Socrate à Kant, Nietzsche et Sartre, la tradition philosophique affirme la liberté et la dignité inaliénable de l'individu. Vous n'êtes pas le produit passif des circonstances, mais la somme de vos choix.",
          "La liberté authentique est l'engagement courageux d'agir selon des valeurs élevées, même lorsque la facilité commande la lâcheté."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Impact neurocognitif",
        title: "La thérapie par la sagesse (Logothérapie & TCC)",
        text: "Les thérapies cognitives modernes s'inspirent directement des maximes stoïciennes : verbaliser une vérité philosophique apaise immédiatement l'activité de l'amygdale cérébrale et rétablit le contrôle rationnel."
      },
      {
        num: "03",
        title: "Du verbe à l'acte : incarner sa philosophie",
        content: [
          "Le pire écueil est de réduire la philosophie à un jeu d'esprit stérile. Le véritable philosophe est celui dont les actes témoignent de la noblesse de sa pensée face aux provocations et aux deuils.",
          "Comme le tonnait Épictète : 'Ne dis pas comment on doit vivre, vis ainsi'."
        ]
      },
      {
        type: "practical",
        title: "5 maximes fondamentales pour gouverner son quotidien",
        desc: "Boussole intemporelle pour l'élévation de l'esprit :",
        tips: [
          { num: "1", title: "Socrate", text: "« Connais-toi toi-même » : examinez vos mobiles intimes avant de juger le monde." },
          { num: "2", title: "Marc Aurèle", text: "« Ne perdez plus de temps à discuter de ce qu'est un homme de bien. Soyez-en un »." },
          { num: "3", title: "Sénèque", text: "« Nous souffrons plus en imagination qu'en réalité » : cessez d'anticiper le malheur." },
          { num: "4", title: "Épictète", text: "« Ce qui dépend de toi, fais-le ; ce qui n'en dépend pas, méprise-le »." },
          { num: "5", title: "Nietzsche", text: "« Deviens ce que tu es » : réalisez votre potentiel unique sans compromission." }
        ]
      }
    ],
    inBrief: [
      "La citation philosophique est une formule condensée de santé mentale.",
      "Le stoïcisme enseigne la souveraineté absolue sur ses propres jugements.",
      "La liberté humaine commence là où s'arrête la plainte victimaire.",
      "La grandeur d'une pensée se mesure à la noblesse des actes qu'elle inspire.",
      "Mobiliser les grands préceptes dans la crise désamorce le tumulte émotionnel."
    ],
    conclusion: "Les paroles des maîtres sont des phares qui éclairent les nuits de doute. En ancrant ces sentences au plus profond de votre être, votre démarche dans le monde gagne en assurance, en noblesse et en sérénité.",
    finalQuote: "« Une vie sans examen ne vaut pas d'être vécue. »",
    finalQuoteAuthor: "— Socrate | Hikma & Nour",
    comments: [
      { author: "Nicolas B.", time: "Il y a 3 heures", text: "Une synthèse admirable. Ces 5 maximes sont un guide parfait pour le quotidien." },
      { author: "Marion V.", time: "Il y a 6 heures", text: "J'adore la citation d'Épictète. Pratique, clair et puissant." }
    ]
  };

  const art9_en = {
    chapo: "A philosophical quote is not mere literature, but the distilled essence of a lifetime of trials, reflection, and deep awakening. How can timeless wisdom serve as a daily compass for clear decisions and inner peace?",
    summaryBox: {
      title: "✦ The Power of Distilled Wisdom",
      summary: "True wisdom condenses existential reality into memorable axioms that awaken the intellect and guide purposeful action at life's most complex crossroads.",
      question: "Do you read quotes to impress others, or to forge your character and govern your choices?"
    },
    sections: [
      {
        num: "01",
        title: "Stoic Wisdom : Sovereignty Over Interpretations",
        content: [
          "From Marcus Aurelius to Seneca and Epictetus, Stoicism offers an impenetrable mental fortress. The foundational principle: 'People are not disturbed by things, but by the view they take of them'.",
          "When you internalize these truths, adversity becomes the ultimate arena for ethical training."
        ]
      },
      {
        num: "02",
        title: "Existential Freedom and Radical Ownership",
        content: [
          "From Socrates to Kant, Nietzsche, and Sartre, philosophical tradition affirms absolute personal responsibility. You are not defined by what happened to you, but by what you choose today.",
          "True freedom is the courageous commitment to act in accordance with high values even when comfort demands cowardice."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Neurocognitive Impact",
        title: "Logotherapy & Cognitive Framing",
        text: "Modern cognitive behavioral therapies (CBT) draw directly from Stoic framing: reciting timeless philosophical principles dampens amygdala reactivity and restores prefrontal executive calm."
      },
      {
        num: "03",
        title: "From Words to Action : Embodying Philosophy",
        content: [
          "The greatest danger is treating philosophy as an idle intellectual game. The true philosopher is recognized by their conduct under pressure and their kindness in conflict.",
          "As Epictetus warned: 'Don't explain your philosophy. Embody it'."
        ]
      },
      {
        type: "practical",
        title: "5 Core Maximes for Daily Living",
        desc: "A timeless compass for clarity and strength :",
        tips: [
          { num: "1", title: "Socrates", text: "« Know thyself » : examine your true motives before passing judgment on others." },
          { num: "2", title: "Marcus Aurelius", text: "« Waste no more time arguing about what a good man should be. Be one »." },
          { num: "3", title: "Seneca", text: "« We suffer more often in imagination than in reality » : stop anticipating catastrophe." },
          { num: "4", title: "Epictetus", text: "« It is not what happens to you, but how you react to it that matters »." },
          { num: "5", title: "Nietzsche", text: "« Become who you are » : unleash your authentic potential without compromise." }
        ]
      }
    ],
    inBrief: [
      "Philosophical quotes provide condensed blueprints for mental fortitude.",
      "Stoicism grants absolute mastery over your private interpretations.",
      "Authentic freedom begins where victim mentality ends.",
      "The value of any philosophy is validated only through real action.",
      "Invoking timeless truths in difficult moments restores emotional equilibrium."
    ],
    conclusion: "The words of the sages are stars that guide us through dark waters of confusion. When you anchor these principles in your soul, you navigate existence with grace, courage, and unshakeable peace.",
    finalQuote: "« An unexamined life is not worth living. »",
    finalQuoteAuthor: "— Socrates | Hikma & Nour",
    comments: [
      { author: "Arthur Pendelton", time: "2 hours ago", text: "The connection between Stoic maxims and CBT is brilliant. A masterclass in practical wisdom." },
      { author: "Hannah Scott", time: "5 hours ago", text: "Inspiring and empowering. These 5 maxims are on my desk every day." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'hikma-citations-philosophiques');
    if (art) {
      const src = lang === 'ar' ? art9_ar : (lang === 'fr' ? art9_fr : art9_en);
      Object.assign(art, src);
    }
  });

  // --- Article 10: self-discipline ---
  const art10_ar = {
    chapo: "الانضباط الذاتي ليس عقاباً نحرم به أنفسنا من متعة الحياة، بل هو أعلى درجات الحرية والسيادة العقلية. كيف تبني إرادة فولاذية تحررك من قيود الكسل والمشتتات؟",
    summaryBox: {
      title: "✦ جوهر الانضباط الحقيقي",
      summary: "الانضباط هو الجسر الرابط بين الأهداف والإنجازات. الإنسان المنضبط لا ينتظر هبوط الحماس المؤقت، بل يعتمد على عادات راسخة ونظام يومي يقوده للنجاح الحتمي.",
      question: "هل تدير يومك وفق نزوات اللحظة، أم وفق خطة واعية تعكس قيمك وطموحاتك؟"
    },
    sections: [
      {
        num: "01",
        title: "وهم التحفيز وسلطة العادات المنظمة",
        content: [
          "الاعتماد على الحماس العاطفي خديعة كبرى؛ فالتحفيز مشاعر عابرة تزول عند أول عقبة. في المقابل، الانضباط هو القدرة على تنفيذ ما يجب فعله بدقة حتى حين تنعدم الرغبة النفسية في العمل.",
          "العادات هي خوارزميات الدماغ التي توفر الطاقة العصبية وتحول الأداء الاستثنائي إلى روتين يومي تلقائي."
        ]
      },
      {
        num: "02",
        title: "تأجيل الإشباع اللحظي : سر العظمة الإنسانية",
        content: [
          "الفرق الحاسم بين العظماء والعاديين هو القدرة على التضحية بالمتعة الفورية (تصفح الهواتف، النوم الزائد، الأكل العشوائي) في سبيل تحقيق مكاسب مستقبلية كبرى.",
          "كما يقول حكماء الرواقية: كل نصر خارجي يبدأ بانتصار باطني على شهوات النفس ونزواتها."
        ]
      },
      {
        type: "insight",
        badge: "🧠 بحث نفسي سلوكي",
        title: "قاعدة الهوية في بناء العادات (James Clear)",
        text: "الانضباط المستدام لا ينبع من الرغبة في تغيير النتائج فقط، بل من تغيير الهوية: بدلاً من أن تقول 'أنا أحاول ممارسة الرياضة'، قل لنفسك 'أنا شخص رياضي يحترم صحته'."
      },
      {
        num: "03",
        title: "هندسة البيئة وتقليل الاحتكاك مع المغريات",
        content: [
          "الانضباط الحقيقي لا يعني مقاومة الإغراءات طوال اليوم بقوة الإرادة، بل يعني تصميم بيئة ذكية تجعل العادات الإيجابية سهلة والعادات السلبية شبه مستحيلة.",
          "أبعد المشتتات عن متناول يدك، وجهز أدوات عملك مسبقاً لتنطلق دون تردد."
        ]
      },
      {
        type: "practical",
        title: "٥ قواعد رواقية وعلمية لامتلاك الانضباط الحديدي",
        desc: "نظام عملي لترويض الإرادة وبناء التركيز :",
        tips: [
          { num: "1", title: "قاعدة الدقيقتين", text: "أي عادة جديدة تريد اكتسابها، ابدأها بنشاط يستغرق دقيقتين فقط لكسر حاجز المقاومة." },
          { num: "2", title: "نظام الصباح المقدس", text: "استثمر الساعات الأولى من اليوم في إنجاز أهم وأصعب مهمة قبل أن تتشتت طاقتك." },
          { num: "3", title: "أزل المشتتات مسبقاً", text: "ضع الهاتف في غرفة أخرى أثناء جلسات العمل العميق." },
          { num: "4", title: "لا تكسر السلسلة مرتين", text: "إذا فاتك الالتزام يوماً لعذر طارئ، لا تدعه يتكرر في اليوم التالي أبداً." },
          { num: "5", title: "كافئ نفسك على الاستمرارية", text: "احتفل بالالتزام بالمسار وليس بالنتائج الفورية فقط." }
        ]
      }
    ],
    inBrief: [
      "الانضباط هو الحرية الحقيقية؛ الفوضى استعباد للنزوات اللحظية.",
      "الاعتماد على العادات الثابتة يفوق بأشواط الاعتماد على التحفيز المتقلب.",
      "القدرة على تأجيل المتعة الفورية هي المعيار الأول للنجاح المستدام.",
      "هندسة البيئة المحيطة تقلل الحاجة لاستنزاف قوة الإرادة.",
      "الاستمرارية اليومية البسيطة تحقق نتائج خارقة على المدى البعيد."
    ],
    conclusion: "الانضباط ليس قيداً يثقل كاهلك، بل هو الجناح الذي تحلق به نحو أهدافك السامية. حين تمتلك زمام نفسك، تمتلك مصيرك بالكامل.",
    finalQuote: "« بالانضباط الذاتي، كل شيء يصبح ممكناً. »",
    finalQuoteAuthor: "— ثيودور روزفلت | حكمة ونور",
    comments: [
      { author: "إلياس القادري", time: "منذ ساعتين", text: "قاعدة الهوية غيرت نظرتي كلياً للالتزام بالرياضة والعمل. مقال لا يقدر بثمن." },
      { author: "مريم العثماني", time: "منذ ٤ ساعات", text: "نظام الصباح المقدس وقاعدة الدقيقتين أنقذتني من التسويف المستمر." }
    ]
  };

  const art10_fr = {
    chapo: "L'autodiscipline n'est pas une punition privative, mais la forme la plus haute de liberté et de souveraineté mentale. Comment bâtir une volonté d'airain capable de vous affranchir de la paresse et des distractions futiles ?",
    summaryBox: {
      title: "✦ L'Essence de la maîtrise de soi",
      summary: "L'autodiscipline est le pont qui relie les aspirations aux réalisations concrètes. L'esprit discipliné n'attend pas l'étincelle éphémère de la motivation : il s'appuie sur des rituels inébranlables.",
      question: "Gouvernez-vous votre journée selon les caprices du moment, ou selon un plan aligné sur vos nobles ambitions ?"
    },
    sections: [
      {
        num: "01",
        title: "L'illusion de la motivation et le pouvoir des habitudes",
        content: [
          "Se fier à la motivation émotionnelle est un piège : elle fluctue avec la météo ou la fatigue. La discipline, en revanche, est la capacité souveraine d'accomplir ce qui doit l'être, même lorsque l'envie fait défaut.",
          "Les habitudes sont les algorithmes de l'esprit : elles automatisent l'excellence et économisent l'énergie décisionnelle pour les grands défis."
        ]
      },
      {
        num: "02",
        title: "La gratification différée : socle de la grandeur",
        content: [
          "La distinction majeure entre les destins remarquables et la médiocrité réside dans l'art de sacrifier le plaisir immédiat (distraction numérique, confort passif) au profit d'une victoire future de longue haleine.",
          "Comme l'enseignaient les stoïciens : chaque triomphe sur le monde extérieur commence par la victoire sur ses propres pulsions."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Principe de psychologie comportementale",
        title: "L'Ancrage de l'identité dans l'habitude (James Clear)",
        text: "La discipline durable ne repose pas sur ce que vous voulez obtenir, mais sur qui vous choisissez d'être : ne dites plus 'j'essaie d'étudier', affirmez 'je suis un esprit rigoureux qui chérit le savoir'."
      },
      {
        num: "03",
        title: "L'architecture de l'environnement : vaincre sans lutter",
        content: [
          "La vraie discipline ne consiste pas à s'épuiser à résister aux tentations, mais à aménager un environnement où les bonnes actions sont fluides et les pièges inaccessibles.",
          "Éloignez les distractions hors de votre champ visuel et préparez vos outils de travail à l'avance pour démarrer sans friction."
        ]
      },
      {
        type: "practical",
        title: "5 règles stoïciennes pour forger une discipline d'acier",
        desc: "Protocole pratique de maîtrise quotidienne :",
        tips: [
          { num: "1", title: "La règle des 2 minutes", text: "Amorcez toute nouvelle habitude par une action de 2 minutes pour vaincre l'inertie." },
          { num: "2", title: "Le rituel matinal sacré", text: "Consacrez la première heure de votre journée à la tâche la plus exigeante." },
          { num: "3", title: "Sanctuarisez votre espace", text: "Bannissez le smartphone de votre bureau pendant les sessions de travail profond." },
          { num: "4", title: "Ne manquez jamais deux fois", text: "Si un imprévu brise votre routine un jour, reprenez impérativement le lendemain." },
          { num: "5", title: "Célébrez la régularité", text: "Félicitez-vous de la fidélité au processus plutôt que de guetter des résultats hâtifs." }
        ]
      }
    ],
    inBrief: [
      "La discipline est la liberté suprême ; le laisser-aller est un esclavage des pulsions.",
      "Les rituels stables surpassent infiniment la motivation fluctuante.",
      "La gratification différée est le prédicteur numéro un de la réussite durable.",
      "Optimiser son environnement permet d'économiser sa force de volonté.",
      "La répétition patiente d'efforts modestes produit des métamorphoses spectaculaires."
    ],
    conclusion: "L'autodiscipline n'est pas une chaîne qui vous entrave, mais les ailes qui vous hissent vers vos idéaux les plus élevés. Lorsque vous devenez maître de vous-même, vous devenez maître de votre destinée.",
    finalQuote: "« Avec l'autodiscipline, presque tout devient possible. »",
    finalQuoteAuthor: "— Theodore Roosevelt | Hikma & Nour",
    comments: [
      { author: "Sébastien M.", time: "Il y a 3 heures", text: "L'article est d'une puissance redoutable. Le rituel matinal m'a permis de doubler ma productivité." },
      { author: "Camille J.", time: "Il y a 6 heures", text: "L'explication sur la gratification différée est tellement inspirante. Merci !" }
    ]
  };

  const art10_en = {
    chapo: "Self-discipline is not a restrictive punishment, but the ultimate expression of personal freedom and mental sovereignty. How do you forge an iron will to break free from procrastination and petty distractions?",
    summaryBox: {
      title: "✦ The Core of Self-Mastery",
      summary: "Self-discipline is the bridge between ambition and reality. A disciplined mind never waits for unpredictable bursts of motivation; it relies on rock-solid habits and structured daily execution.",
      question: "Do you govern your day by the whims of the moment, or by a conscious plan aligned with your highest values?"
    },
    sections: [
      {
        num: "01",
        title: "The Illusion of Motivation vs. The Power of Systems",
        content: [
          "Relying on motivation is a trap: feelings fluctuate with tiredness and mood. Discipline, however, is the sovereign ability to execute what must be done, regardless of emotional resistance.",
          "Habits are the mind's algorithms: they automate excellence and preserve precious mental energy for major challenges."
        ]
      },
      {
        num: "02",
        title: "Delayed Gratification : The Hallmark of Greatness",
        content: [
          "The critical divide between extraordinary achievers and the ordinary crowd is the willingness to sacrifice instant pleasure (digital dopamine, idle comfort) for long-term mastery.",
          "As Stoic philosophers taught: every victory over the outside world begins with self-conquest."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Behavioral Science Insight",
        title: "Identity-Based Habits (James Clear)",
        text: "Lasting discipline arises not from what you want to achieve, but from who you decide to be: shift from 'I am trying to write' to 'I am a disciplined creator who honors my craft daily'."
      },
      {
        num: "03",
        title: "Environment Design : Winning Without Friction",
        content: [
          "True discipline is not exhausting your willpower fighting temptations all day, but designing an environment where productive habits are effortless and distractions are eliminated.",
          "Remove digital traps from your immediate sight and set up your workspace beforehand to start smoothly."
        ]
      },
      {
        type: "practical",
        title: "5 Stoic & Scientific Rules for Iron Discipline",
        desc: "A proven protocol for daily focus and execution :",
        tips: [
          { num: "1", title: "The 2-Minute Rule", text: "Scale down any new habit to a 2-minute starter action to demolish resistance." },
          { num: "2", title: "Sacred Morning Block", text: "Dedicate your first 90 minutes to your single most challenging task." },
          { num: "3", title: "Purge Distractions", text: "Place smartphones in another room during deep work sessions." },
          { num: "4", title: "Never Miss Twice", text: "If unexpected events break your streak today, resume tomorrow without fail." },
          { num: "5", title: "Reward Consistency", text: "Celebrate loyalty to the process rather than fixating on immediate outcomes." }
        ]
      }
    ],
    inBrief: [
      "Discipline is ultimate freedom; chaos is slavery to fleeting impulses.",
      "Stable daily systems infinitely outperform erratic motivation.",
      "Delayed gratification is the primary predictor of long-term fulfillment.",
      "Smart environment design preserves precious willpower for what matters.",
      "Relentless small daily actions compound into monumental transformation."
    ],
    conclusion: "Self-discipline is not a heavy chain, but the majestic wings that lift you toward your highest aspirations. When you master your own mind, you master your destiny.",
    finalQuote: "« With self-discipline, almost anything is possible. »",
    finalQuoteAuthor: "— Theodore Roosevelt | Hikma & Nour",
    comments: [
      { author: "Ethan Ross", time: "2 hours ago", text: "Identity-based habits changed everything for me. An exceptional article." },
      { author: "Jessica Taylor", time: "5 hours ago", text: "Clear, practical, and highly motivating. A true gem." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'self-discipline');
    if (art) {
      const src = lang === 'ar' ? art10_ar : (lang === 'fr' ? art10_fr : art10_en);
      Object.assign(art, src);
    }
  });

  // --- Article 11: stop-overthinking ---
  const art11_ar = {
    chapo: "كم من الليالي سُرقت منا في دوامة التفكير المفرط وتحليل سيناريوهات لم تحدث ولن تحدث أبداً؟ كيف تكسر حلقة الاجترار الذهني وتستعيد صفاء عقلك وسلامك الداخلي؟",
    summaryBox: {
      title: "✦ علاج الإفراط في التفكير",
      summary: "الإفراط في التفكير ليس ذكاءً تحليلياً، بل هو فخ القلق والشك. الحل يكمن في الانتقال الفوري من التفكير النظري المكرر إلى الفعل الحركي والتواجد في اللحظة الراهنة.",
      question: "هل يحل التفكير المستمر مشاكلك، أم يخلق في عقلك مشاكل لم تكن موجودة أصلاً؟"
    },
    sections: [
      {
        num: "01",
        title: "تشريح فخ الاجترار الذهني (Rumination)",
        content: [
          "يميل العقل القلق إلى إعادة تمثيل أحداث الماضي بحسرة أو توقع كوارث المستقبل برعب. هذا النمط يستنزف طاقة الدماغ ويفرز هرمونات التوتر دون تقديم أي حل عملي.",
          "التفكير الزائد هو محاولة وهمية للسيطرة على ما لا يمكن التنبؤ به."
        ]
      },
      {
        num: "02",
        title: "العمل الحركي كترياق مباشر للشلل الفكري",
        content: [
          "العقل لا يستطيع القلق والتصرف الحركي بكفاءة في نفس اللحظة. عندما تشعر بدوامة الأفكار تسحبك للأسفل، تحرك فوراً: تنفس، اكتب، امشِ، أو ابدأ مهمة صغيرة.",
          "كما يقول حكماء الفلسفة: الشك يولد في الركود، واليقين يولد في خضم الحركة والعمل."
        ]
      },
      {
        type: "insight",
        badge: "🧠 تقنية في العلاج المعرفي",
        title: "تقنية فك الاندماج المعرفي (Cognitive Defusion)",
        text: "في العلاج بالقبول والالتزام (ACT)، تذكر أنك 'لست أفكارك، بل أنت المراقب الواعي لتلك الأفكار'. حين تقول لنفسك 'أنا ألاحظ أن عقلي يفكر في الفشل'، تفقد الفكرة سلطتها المخيفة عليك فوراً."
      },
      {
        num: "03",
        title: "ترويض العقل بالحضور واليقظة الذهنية",
        content: [
          "معظم آلامنا تقع في زمنين غير موجودين: ماضٍ رحل ومستقبل لم يأتِ. المكان الوحيد الذي تملك فيه القوة والسيطرة هو 'الآن'.",
          "تدريب العقل على التركيز على الحواس الخمس في اللحظة الحالية يقطع شلال الأفكار السلبية ويعيد الهدوء فوراً."
        ]
      },
      {
        type: "practical",
        title: "٥ خطوات حاسمة لإيقاف التفكير المفرط فوراً",
        desc: "إسعافات أولية عقلية لاستعادة السكينة والتركيز :",
        tips: [
          { num: "1", title: "قاعدة الـ ٥ ثوانٍ والفعل الفوري", text: "عندما تجد نفسك غارقاً في التحليل، عد تنازلياً ٥-٤-٣-٢-١ وتحرك فوراً لفعل شيء ملموس." },
          { num: "2", title: "تفريغ الأفكار على الورق (Brain Dump)", text: "اكتب كل مخاوفك في ورقة؛ حين تراها مكتوبة يدرك عقلك أنها أقل حجماً مما كان يتخيل." },
          { num: "3", title: "حدد وقتاً مخصصاً للقلق", text: "خصص ١٥ دقيقة عصراً للتفكير في مشاكلك، وإذا راودك قلق خارج هذا الوقت أجله لتلك الجلسة." },
          { num: "4", title: "تمرين الحواس ٥-٤-٣-٢-١", text: "لاحظ ٥ أشياء تراها، ٤ تلمسها، ٣ تسمعها، ٢ تشمها، وواحدة تتذوقها لتعود للحاضر." },
          { num: "5", title: "تنفس المربع (Box Breathing)", text: "استنشق ٤ ثوانٍ، احبس ٤ ثوانٍ، ازفر ٤ ثوانٍ، واحبس ٤ ثوانٍ لإعادة ضبط جهازك العصبي." }
        ]
      }
    ],
    inBrief: [
      "الإفراط في التفكير استنزاف طاقة وليس حلاً عملياً للمشكلات.",
      "الحركة والفعل الملموس هما الترياق الأسرع لشلل التحليل.",
      "أنت لست أفكارك، بل المراقب الواعي الذي يملك حرية تجاهلها.",
      "تفريغ المخاوف على الورق يكشف تضاؤلها ويسهل معالجتها.",
      "الحضور في اللحظة الراهنة ينهي معارك الماضي ومخاوف المستقبل."
    ],
    conclusion: "عقلك أداة عظيمة خُلقت لتخدمك، لا لتكون سجيناً لوساوسها. حين تتعلم كيف تسكت الضجيج الداخلي، يولد في أعماقك سلام هادئ كصفحة بحيرة ساكنة.",
    finalQuote: "« القلق لا يفرغ الغد من همومه، لكنه يفرغ اليوم من قوته وسكينته. »",
    finalQuoteAuthor: "— كورين تين بوم | حكمة ونور",
    comments: [
      { author: "سامي القاضي", time: "منذ ساعة", text: "تمرين الحواس وتنفس المربع أوقف نوبة قلق كادت تدمر يومي. شكراً من القلب." },
      { author: "هند الغامدي", time: "منذ ٣ ساعات", text: "مقال في قمة الإفادة والروعة. تقنية فك الاندماج المعرفي عبقرية." }
    ]
  };

  const art11_fr = {
    chapo: "Combien de nuits précieuses sont dévorées par la rumination mentale et l'analyse sans fin de scénarios imaginaires qui ne se réaliseront jamais ? Comment briser l'engrenage du sur-penser et retrouver un esprit limpide et serein ?",
    summaryBox: {
      title: "✦ L'Antidote au sur-penser",
      summary: "L'overthinking n'est pas une preuve d'intelligence, mais un piège de l'anxiété. La délivrance réside dans le passage immédiat de la rumination abstraite à l'action concrète et à l'ancrage sensoriel dans le présent.",
      question: "Vos ruminations résolvent-elles vos défis, ou créent-elles des tourments qui n'existaient pas ?"
    },
    sections: [
      {
        num: "01",
        title: "L'engrenage de la rumination mentale",
        content: [
          "L'esprit anxieux rejoue les regrets du passé ou échafaude des catastrophes futures. Cette boucle infernale draine le glucose cérébral et inonde le corps de cortisol sans jamais produire la moindre solution.",
          "Trop penser est une tentative désespérée et illusoire d'exercer un contrôle sur l'imprévisible."
        ]
      },
      {
        num: "02",
        title: "L'action physique comme antidote souverain",
        content: [
          "Le cerveau ne peut pas à la fois ruminer et être pleinement engagé dans une action corporelle précise. Dès que le tourbillon mental s'amorce, bougez : marchez, écrivez, respirez ou accomplissez une tâche manuelle.",
          "Le doute et l'angoisse naissent dans la stagnation ; la clarté et le courage jaillissent dans le mouvement."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Clé de thérapie cognitive (ACT)",
        title: "La défusion cognitive : vous n'êtes pas vos pensées",
        text: "Vous n'êtes pas l'orateur de vos pensées, mais l'espace conscient dans lequel elles passent. En formulant : 'Je remarque que mon esprit produit une pensée d'échec', vous retirez instantanément à la pensée son pouvoir toxique."
      },
      {
        num: "03",
        title: "L'art de l'ancrage dans l'instant présent",
        content: [
          "Nos souffrances se situent presque toutes dans deux temps inexistants : un passé révolu ou un futur imaginaire. Le seul espace où réside votre puissance d'action est l'Ici et Maintenant.",
          "Rééduquer son attention sur ses sensations physiques coupe court au bavardage névrotique de l'égo."
        ]
      },
      {
        type: "practical",
        title: "5 réflexes pour stopper l'overthinking sur-le-champ",
        desc: "Protocole d'urgence pour apaiser l'esprit :",
        tips: [
          { num: "1", title: "La règle des 5 secondes", text: "Comptez 5-4-3-2-1 et passez immédiatement à une action physique pour court-circuiter le mental." },
          { num: "2", title: "La vidange cérébrale (Brain Dump)", text: "Écrivez tout sur papier : voir les pensées posées dégonfle leur charge anxiogène." },
          { num: "3", title: "Le rendez-vous d'inquiétude", text: "Allouez 15 minutes par jour aux soucis ; en dehors de ce créneau, reportez-les." },
          { num: "4", title: "L'ancrage 5-4-3-2-1", text: "Nommez 5 choses visibles, 4 tactiles, 3 audibles, 2 olfactives et 1 gustative pour revenir au réel." },
          { num: "5", title: "La respiration carrée", text: "Inspirez 4s, bloquez 4s, expirez 4s, bloquez 4s pour calmer le système nerveux parasympathique." }
        ]
      }
    ],
    inBrief: [
      "Le sur-penser est une fuite anxieuse qui ne résout aucun problème réel.",
      "L'action concrète est le remède le plus rapide contre la paralysie mentale.",
      "La défusion cognitive rappelle que vous êtes l'observateur lucide de vos pensées.",
      "Poser ses inquiétudes sur papier permet de les relativiser instantanément.",
      "L'ancrage dans le présent désamorce les fantômes du passé et du futur."
    ],
    conclusion: "Votre esprit est un outil sublime destiné à vous servir, non un geôlier qui vous tyrannise. Lorsque vous apprenez à apaiser la tempête intérieure, vous découvrez une paix aussi profonde et limpide qu'une eau calme.",
    finalQuote: "« L'inquiétude ne vide pas demain de ses chagrins, elle vide aujourd'hui de sa force. »",
    finalQuoteAuthor: "— Corrie ten Boom | Hikma & Nour",
    comments: [
      { author: "Maxime R.", time: "Il y a 1 heure", text: "La respiration carrée et l'ancrage sensoriel m'ont sauvé d'une crise d'angoisse. Merci pour cet article d'utilité publique." },
      { author: "Laura P.", time: "Il y a 3 heures", text: "La défusion cognitive est une technique révolutionnaire quand on a tendance à trop analyser." }
    ]
  };

  const art11_en = {
    chapo: "How many precious nights are swallowed by the endless spiral of overthinking and analyzing catastrophe scenarios that will never happen? How do you break the loop of mental rumination and reclaim supreme clarity and peace of mind?",
    summaryBox: {
      title: "✦ The Antidote to Overthinking",
      summary: "Overthinking is not analytical intelligence, but an anxiety loop. Liberation lies in shifting immediately from abstract rumination into concrete physical action and sensory presence in the now.",
      question: "Does continuous overthinking solve your challenges, or invent troubles that never existed?"
    },
    sections: [
      {
        num: "01",
        title: "The Anatomy of Mental Rumination",
        content: [
          "An anxious mind continually replays past regrets or anticipates future disasters. This loop drains neural energy and floods the body with stress hormones without delivering a single workable solution.",
          "Overthinking is a desperate, illusory attempt to exert control over the fundamentally unpredictable nature of reality."
        ]
      },
      {
        num: "02",
        title: "Physical Action as the Ultimate Cure",
        content: [
          "The human brain cannot simultaneously ruminate and be fully immersed in physical movement. When the mental spiral begins, move: walk, write, breathe, or tackle a hands-on task.",
          "Doubt and dread breed in stagnation; clarity and courage are born in motion."
        ]
      },
      {
        type: "insight",
        badge: "🧠 Cognitive Behavioral Technique (ACT)",
        title: "Cognitive Defusion : You Are Not Your Thoughts",
        text: "You are not the noisy speaker in your head; you are the conscious space in which thoughts arise and pass. By framing: 'I notice my mind is generating a thought of failure', you instantly disarm its toxic grip."
      },
      {
        num: "03",
        title: "Anchoring Deeply in the Present Moment",
        content: [
          "Almost all suffering lives in two nonexistent realms: a past that is gone, and an imaginary future that has not arrived. The only place where your power resides is the Present.",
          "Training your attention on physical sensations short-circuits the neurotic chatter of the ego."
        ]
      },
      {
        type: "practical",
        title: "5 Immediate Steps to Stop Overthinking",
        desc: "Emergency mental toolkit for instant calm :",
        tips: [
          { num: "1", title: "The 5-Second Rule", text: "Count 5-4-3-2-1 and take immediate physical action to interrupt mental looping." },
          { num: "2", title: "Paper Brain Dump", text: "Write all anxieties on paper; seeing them externalized strips away their power." },
          { num: "3", title: "Designated Worry Time", text: "Allocate 15 minutes in the afternoon for problem-solving; postpone worries outside this window." },
          { num: "4", title: "5-4-3-2-1 Sensory Grounding", text: "Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste." },
          { num: "5", title: "Box Breathing", text: "Inhale 4s, hold 4s, exhale 4s, hold 4s to immediately reset your parasympathetic nervous system." }
        ]
      }
    ],
    inBrief: [
      "Overthinking is an anxious trap that solves zero real problems.",
      "Physical action is the fastest antidote to analysis paralysis.",
      "Cognitive defusion reminds you that you are the conscious observer, not the thought.",
      "Dumping fears onto paper shrinks them into manageable realities.",
      "Grounding in the present moment dissolves the illusions of past and future."
    ],
    conclusion: "Your mind is a magnificent instrument designed to serve you, not a prison to hold you captive. When you quiet the inner noise, you discover a tranquil peace as still and clear as undisturbed water.",
    finalQuote: "« Worry does not empty tomorrow of its sorrow, it empties today of its strength. »",
    finalQuoteAuthor: "— Corrie ten Boom | Hikma & Nour",
    comments: [
      { author: "Brian Kelly", time: "1 hour ago", text: "Box breathing and sensory grounding saved my day. A life-changing article." },
      { author: "Samantha Wright", time: "4 hours ago", text: "Cognitive defusion is so powerful. Thank you for this masterpiece." }
    ]
  };

  ['ar', 'fr', 'en'].forEach(lang => {
    const art = DATA.content[lang].articles.find(a => a.id === 'stop-overthinking');
    if (art) {
      const src = lang === 'ar' ? art11_ar : (lang === 'fr' ? art11_fr : art11_en);
      Object.assign(art, src);
    }
  });

  // Save to data_v11.js
  const exportStr = 'const TIKTOK_DATA = ' + JSON.stringify(DATA, null, 2) + ';\n\nexport default TIKTOK_DATA;\n';
  fs.writeFileSync('data_v11.js', exportStr, 'utf8');
  console.log('✅ Successfully updated Group 3 in data_v11.js');
}

updateGroup3().catch(err => {
  console.error('Error updating Group 3:', err);
  process.exit(1);
});
