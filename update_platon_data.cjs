const fs = require('fs');

async function updatePlatonData() {
  const dataModule = await import('./data_v11.js');
  const DATA = dataModule.default;

  const platon_ar = {
    id: "platon",
    featured: true,
    name: "أفلاطون",
    originalName: "Πλάτων (Plátōn)",
    subName: "فيلسوف اليونان القديمة، مؤسس الأكاديمية ومستكشف عالم المُثُل والعدالة",
    era: "427 - 347 ق.م",
    school: "الأفلاطونية / الفلسفة اليونانية القديمة",
    country: "أثينا، اليونان القديمة",
    flag: "🏛️",
    image: "thinkers/images/platon.jpg",
    bio: "تلميذ سقراط ومعلم أرسطو ومؤسس الأكاديمية الأثينية. أعظم من صاغ نظرية المعرفة والعدالة في العالم القديم.",
    heroQuote: "« السعادة هي رؤية الحقيقة والارتقاء بالنفس نحو عالم الخير والجمال الأبدي. »",
    intro: "يُعتبر أفلاطون حجر الزاوية في تاريخ الفلسفة الإنسانية بأسرها. من خلال محاوراته الخالدة وأسطورة الكهف، حوّل الفلسفة من مجرد تأملات طبيعية إلى رحلة عقلية وأخلاقية شاملة تبحث في جوهر الحقيقة، طبيعة الروح، وأسس الدولة الفاضلة العادلة.",
    bioDetails: {
      upbringing: "ولد في أثينا لعائلة أرستقراطية عريقة ذات نفوذ سياسي وثقافي واسع، وكان اسمه الأصلي 'أريستوكليس'. تميز في شبابه بالبلاغة والمصارعة والشعر قبل أن يكرس حياته للفلسفة.",
      studies: "تتلمذ على يد سقراط لما يقارب ثماني سنوات، وتأثر بعمقه الأخلاقي ومنهجه الجدلي (التوليد السقراطي). شكل إعدام سقراط عام 399 ق.م صدمة كبرى دفعته للتجوال في مصر وإيطاليا وصقل رؤيته الفكرية.",
      life: "عاد إلى أثينا عام 387 ق.م وأسس 'الأكاديمية' كأول معهد للتعليم العالي والبحث الفلسفي والرياضي في التاريخ الغربي، حيث درّس أرسطو لأكثر من عشرين عاماً وكتب محاوراته الفلسفية الخالدة حتى وفاته في سن الثمانين."
    },
    historicalContext: "عاش أفلاطون في ذروة العصر الكلاسيكي اليوناني، في أعقاب حرب البيلوبونيز وانهيار الديمقراطية الأثينية المباشرة التي أعدمت سقراط، مما دفعه للبحث عن نظام سياسي يحكمه الحكماء والفلاسفة بدلاً من الدهماء والمصلحيين.",
    mainIdeas: [
      {
        num: "01",
        title: "نظرية المُثُل (عالم الحقائق الثابتة)",
        text: "يرى أفلاطون أن العالم المادي المحسوس هو مجرد ظلال عابرة ونسخ ناقصة من 'عالم المُثُل' المعقول، وهو عالم أبدي غير مادي يضم الحقائق المطلقة كالخير، العدل، والجمال."
      },
      {
        num: "02",
        title: "أسطورة الكهف والتحرر من الأوهام",
        text: "في كتاب 'الجمهورية'، يشبه البشر بسجناء مقيدين داخل كهف مظلم يرون ظلال الأشياء على الجدار ويظنونها الحقيقة؛ والفيلسوف هو من يتحرر من القيود ويخرج لرؤية نور الشمس الساطع."
      },
      {
        num: "03",
        title: "ثلاثية النفس الإنسانية",
        text: "قسّم الروح إلى ثلاثة أجزاء: النفس العاقلة (مقرها الرأس وغايتها الحكمة)، النفس الغضبية (مقرها الصدر وغايتها الشجاعة)، والنفس الشهوانية (مقرها البطن وغايتها الاعتدال). والعدالة هي تناغم هذه القوى الثلاث تحت سيادة العقل."
      },
      {
        num: "04",
        title: "المدينة الفاضلة والحاكم الفيلسوف",
        text: "لا يمكن للمجتمعات أن تنجو من الشرور إلا إذا صار الفلاسفة ملوكاً أو صار الملوك فلاسفة حقيقيين، حيث يُقاد المجتمع بالمعرفة والحكمة والنزاهة لا بالشهوات والمصالح الضيقة."
      },
      {
        num: "05",
        title: "نظرية التذكر (المعرفة تذكّر والجهل نسيان)",
        text: "بما أن الروح خلدت في عالم المُثُل قبل حلولها في الجسد، فإن التعلم ليس إدخال معلومات جديدة، بل هو استرجاع وتذكير بما كانت الروح تعرفه أصلاً من حقائق مطلقة."
      }
    ],
    keyConcepts: [
      { name: "عالم المُثُل", desc: "المقر الحقيقي للحقائق الخالدة والمطلقة." },
      { name: "أسطورة الكهف", desc: "استعارة التحرر من الجهل والحسيات إلى نور المعرفة." },
      { name: "الملك الفيلسوف", desc: "القائد الحكيم الذي يضع العدالة والفضيلة فوق المصالح." },
      { name: "التذكر (Anamnesis)", desc: "المعرفة الحقيقية كاسترجاع لحقائق الروح الأزلية." }
    ],
    works: [
      { title: "الجمهورية (The Republic)", period: "حوالي 375 ق.م", desc: "أعظم محاوراته حول العدالة، النفس البشرية، وأسس الدولة المثالية." },
      { title: "المأدبة (Symposium)", period: "حوالي 385 ق.م", desc: "محاورة فلسفية وأدبية رفيعة حول ماهية الحب، الجمال والارتقاء الروحي." },
      { title: "فيدون (Phaedo)", period: "حوالي 380 ق.م", desc: "حوار مؤثر حول الساعات الأخيرة لسقراط وخلود النفس البشرية." },
      { title: "الدفاع عن سقراط (Apology)", period: "حوالي 399 ق.م", desc: "خطاب دفاع سقراط أمام المحكمة الأثينية دفاعاً عن حرية التفكير والفضيلة." }
    ],
    influence: {
      names: ["سقراط", "أرسطو", "أفلوطين", "أوغسطينوس", "كانط", "نيتشه"],
      summary: "أرسى أفلاطون قواعد التفكير الفلسفي والسياسي والتربوي في الحضارتين الغربية والإسلامية. وكما كتب الفيلسوف ألفريد نورث وايتهيد: 'إن أكثر التوصيفات أماناً لتقليد الفلسفة الأوروبية هو أنه يتألف من سلسلة من الهوامش على أفلاطون'."
    },
    quotes: [
      "« المعرفة التي لا تنمي الأخلاق ولا توجه السلوك ليست معرفة حقيقية. »",
      "« بداية كل حكمة هي الاندهاش. »",
      "« الشجاعة هي معرفة ما لا ينبغي الخوف منه. »",
      "« ثمن اللامبالاة بالشأن العام هو أن يحكمك الأشرار. »"
    ],
    famousQuote: "« إن أعظم نصر يحققه الإنسان هو انتصاره على نفسه؛ أما أن يُهزم المرء أمام نفسه فذاك أشنع عار وأفظع هزيمة. »",
    didYouKnow: "كان اسم أفلاطون الحقيقي 'أريستوكليس'، لكن مدرب المصارعة الخاص به لقبه بـ 'أفلاطون' (المشتقة من Platos وتعني العريض) بسبب عِظم منكبيه وسعة جبهته وقوة بنيته الجسدية.",
    reflectionQuestion: "هل الأفكار والقناعات التي تتبناها اليوم نابعة من بحث عقلي أصيل، أم أنها مجرد ظلال وانعكاسات لما يمليه عليك محيطك مثل سجناء كهف أفلاطون؟",
    lessons: [
      "لا تعتمد على المظاهر الحسية السطحية؛ ابحث دائماً عن الجوهر والسبب العميق.",
      "درّب عقلك ليكون القائد الحكيم لعواطفك وغرائزك اليومية.",
      "العدالة الحقيقية تبدأ من التناغم الداخلي في النفس قبل أن تكون قوانين خارجية.",
      "تحرر من 'كهف' الآراء الجاهزة والتقليد الأعمى للمجتمع.",
      "اربط بين طلب المعرفة والسلوك الأخلاقي والعمل الصالح."
    ],
    timeline: [
      { year: "427 ق.م", desc: "الميلاد في أثينا لأسرة أرستقراطية عريقة." },
      { year: "407 ق.م", desc: "الالتقاء بسقراط وبدء التلمذة الفلسفية المباشرة." },
      { year: "399 ق.م", desc: "إعدام سقراط ورحيل أفلاطون في رحلاته الفكرية عبر المتوسط." },
      { year: "387 ق.م", desc: "تأسيس الأكاديمية الأثينية كأول معهد للتعليم العالي في التاريخ." },
      { year: "367 ق.م", desc: "انضمام أرسطو إلى الأكاديمية كتلميذ لأفلاطون." },
      { year: "347 ق.م", desc: "الوفاة في أثينا عن عمر يناهز الثمانين عاماً تاركاً إرثاً خالداً." }
    ]
  };

  const platon_fr = {
    id: "platon",
    featured: true,
    name: "Platon",
    originalName: "Πλάτων (Plátōn)",
    subName: "Philosophe de la Grèce antique, fondateur de l'Académie et théoricien des Idées et de la Justice",
    era: "427 - 347 av. J.-C.",
    school: "Platonisme / Philosophie Grecque Antique",
    country: "Athènes, Grèce antique",
    flag: "🏛️",
    image: "thinkers/images/platon.jpg",
    bio: "Disciple de Socrate, maître d'Aristote et fondateur de l'Académie d'Athènes. Père fondateur de la métaphysique et de la philosophie politique occidentale.",
    heroQuote: "« Le bonheur suprême réside dans la contemplation de la vérité et l'ascension de l'âme vers le Bien et le Beau. »",
    intro: "Platon est sans conteste la figure tutélaire de toute la philosophie occidentale. À travers ses célèbres Dialogues et l'allégorie de la Caverne, il a révolutionné la recherche de la vérité, affirmant la supériorité des Idées intelligibles sur le monde sensible et concevant la Cité idéale guidée par la sagesse.",
    bioDetails: {
      upbringing: "Né à Athènes au sein d'une famille aristocratique influente, son nom de naissance était Aristoclès. Doué pour la rhétorique, la poésie et la lutte, il semblait destiné à la politique avant sa rencontre décisive avec Socrate.",
      studies: "Pendant près de dix ans, il suit l'enseignement de Socrate et adopte la méthode maïeutique. Le procès et la condamnation à mort de son maître en 399 av. J.-C. marquent une rupture existentielle majeure, le poussant à voyager en Égypte et en Grande-Grèce pour enrichir sa pensée.",
      life: "De retour à Athènes vers 387 av. J.-C., il fonde l'Académie, première grande institution d'enseignement supérieur d'Europe. Il y enseigne pendant quarante ans, forme Aristote et rédige ses dialogues majeurs jusqu'à sa mort à l'âge de 80 ans."
    },
    historicalContext: "Platon évolue dans une Athènes troublée par la guerre du Péloponnèse et la crise morale de la démocratie directe qui a condamné Socrate. Ce contexte nourrit sa quête passionnée d'un ordre politique juste et pérenne.",
    mainIdeas: [
      {
        num: "01",
        title: "La Théorie des Idées (Le Monde Intelligible)",
        text: "Le monde sensible n'est qu'un ensemble de reflets changeants et imparfaits. La réalité véritable appartient au Monde des Idées (ou Formes intelligibles), éternelles et immuables, au sommet desquelles règne l'Idée du Bien."
      },
      {
        num: "02",
        title: "L'Allégorie de la Caverne",
        text: "Dans 'La République', Platon compare les hommes à des prisonniers enchaînés dans une caverne qui prennent les ombres pour la réalité. La philosophie est la libération qui permet de sortir vers la lumière du soleil."
      },
      {
        num: "03",
        title: "La Tripartition de l'Âme",
        text: "L'âme humaine est composée de trois puissances : la Raison (Logos, siège de la sagesse), le Cœur ou courage (Thumos), et le Désir (Épithumia). La justice intérieure naît de l'harmonie où la Raison gouverne les passions."
      },
      {
        num: "04",
        title: "Le Philosophe-Roi et la Cité Idéale",
        text: "Les maux de l'humanité ne cesseront que lorsque les philosophes deviendront rois ou que les rois deviendront philosophes, afin que le pouvoir soit guidé par le Bien plutôt que par la soif de domination."
      },
      {
        num: "05",
        title: "La Réminiscence (Apprendre, c'est se ressouvenir)",
        text: "L'âme ayant contemplé les vérités éternelles avant de s'incarner dans un corps, la connaissance n'est pas une importation extérieure, mais le réveil d'un savoir déjà présent enfoui en nous."
      }
    ],
    keyConcepts: [
      { name: "Monde des Idées", desc: "Le royaume éternel et immuable des vérités pures." },
      { name: "Allégorie de la Caverne", desc: "La métaphore universelle de l'émancipation par le savoir." },
      { name: "Le Philosophe-Roi", desc: "Le gouvernant éclairé qui place la justice au-dessus de l'égo." },
      { name: "La Réminiscence (Anamnèse)", desc: "La redécouverte par l'âme de son savoir originel." }
    ],
    works: [
      { title: "La République (Politeia)", period: "Vers 375 av. J.-C.", desc: "Son chef-d'œuvre magistral sur la justice, la structure de l'âme et la cité idéale." },
      { title: "Le Banquet (Symposion)", period: "Vers 385 av. J.-C.", desc: "Méditation poétique et philosophique sur la nature d'Éros et l'amour du Beau." },
      { title: "Phédon (Phaidon)", period: "Vers 380 av. J.-C.", desc: "Dialogue sublime sur les derniers instants de Socrate et l'immortalité de l'âme." },
      { title: "Apologie de Socrate", period: "Vers 399 av. J.-C.", desc: "Le vibrant plaidoyer de Socrate devant les juges athéniens en faveur de la liberté de penser." }
    ],
    influence: {
      names: ["Socrate", "Aristote", "Plotin", "Saint Augustin", "Kant", "Nietzsche"],
      summary: "Platon a posé le cadre de toute la philosophie occidentale, néoplatonicienne et islamique (Al-Farabi, Avicenne). Selon la célèbre formule d'Alfred North Whitehead : 'Toute la philosophie occidentale n'est qu'une suite de notes de bas de page aux dialogues de Platon'."
    },
    quotes: [
      "« Le premier et le plus grand empire est l'empire de soi-même. »",
      "« L'étonnement est la disposition d'un philosophe, car la philosophie n'a pas d'autre origine. »",
      "« Le courage est de savoir ce qu'il ne faut pas craindre. »",
      "« Si vous refusez de vous occuper de politique, vous êtes condamnés à être gouvernés par des gens inférieurs. »"
    ],
    famousQuote: "« La plus grande victoire est la victoire sur soi-même ; être vaincu par soi-même est la plus honteuse et la plus méprisable des défaites. »",
    didYouKnow: "Son véritable nom était Aristoclès. Son surnom 'Platon' (dérivé du grec 'Platos' signifiant large) lui fut donné par son maître de gymnastique en raison de sa carrure d'athlète et de la largeur de ses épaules !",
    reflectionQuestion: "Vos opinions et croyances actuelles sont-elles le fruit d'une réflexion lucide et autonome, ou de simples ombres projetées par le conformisme de votre époque ?",
    lessons: [
      "Dépassez les apparences trompeuses pour rechercher l'essence profonde des choses.",
      "Cultivez la souveraineté de la raison sur vos impulsions impulsives.",
      "La vraie justice commence par l'équilibre et la paix intérieure de l'âme.",
      "Émancipez-vous des cavernes de la pensée unique et des dogmes confortables.",
      "Liez toujours la recherche intellectuelle à l'éthique et au service du bien commun."
    ],
    timeline: [
      { year: "427 av. J.-C.", desc: "Naissance à Athènes dans une noble lignée." },
      { year: "407 av. J.-C.", desc: "Rencontre avec Socrate et début du compagnonnage philosophique." },
      { year: "399 av. J.-C.", desc: "Exécution de Socrate et départ pour de grands voyages formateurs." },
      { year: "387 av. J.-C.", desc: "Fondation de l'Académie à Athènes, première université d'Occident." },
      { year: "367 av. J.-C.", desc: "Arrivée d'Aristote comme élève prodige à l'Académie." },
      { year: "347 av. J.-C.", desc: "Mort sereine à Athènes à 80 ans, léguant une œuvre monumentale." }
    ]
  };

  const platon_en = {
    id: "platon",
    featured: true,
    name: "Plato",
    originalName: "Πλάτων (Plátōn)",
    subName: "Ancient Greek philosopher, founder of the Academy, and pioneer of the Theory of Forms and Justice",
    era: "427 - 347 BC",
    school: "Platonism / Classical Greek Philosophy",
    country: "Athens, Ancient Greece",
    flag: "🏛️",
    image: "thinkers/images/platon.jpg",
    bio: "Disciple of Socrates, teacher of Aristotle, and founder of the Academy in Athens. The founding father of Western metaphysics and political philosophy.",
    heroQuote: "« True happiness lies in contemplating the truth and elevating the soul toward the eternal realm of the Good and the Beautiful. »",
    intro: "Plato stands as the cornerstone of Western philosophy. Through his timeless Dialogues and the Allegory of the Cave, he elevated philosophy into a comprehensive quest for truth, the nature of the immortal soul, and the architecture of a genuinely just society.",
    bioDetails: {
      upbringing: "Born in Athens to an influential aristocratic family, his birth name was Aristocles. He excelled in rhetoric, poetry, and athletics before his life-changing encounter with Socrates.",
      studies: "He studied with Socrates for nearly a decade, embracing the Socratic dialectic method. The trial and execution of Socrates in 399 BC was a profound turning point, prompting Plato to travel through Egypt and Italy.",
      life: "He returned to Athens around 387 BC to establish the Academy, the first institution of higher learning in the Western world. He taught for four decades, mentored Aristotle, and composed his monumental dialogues until his death at age 80."
    },
    historicalContext: "Plato lived through the turbulent aftermath of the Peloponnesian War and the decline of Athenian democracy, which put Socrates to death. This motivated his search for an ideal political order ruled by wisdom.",
    mainIdeas: [
      {
        num: "01",
        title: "The Theory of Forms (The Intelligible Realm)",
        text: "The physical sensory world is merely a changing shadow of the true, eternal, and immaterial realm of Forms (or Ideas), governed supreme by the Form of the Good."
      },
      {
        num: "02",
        title: "The Allegory of the Cave",
        text: "In 'The Republic', Plato portrays humans as chained prisoners inside a dark cave mistaking cast shadows for reality. Philosophy is the liberating ascent into the radiant light of the sun."
      },
      {
        num: "03",
        title: "The Tripartite Soul",
        text: "The human soul consists of three faculties: Reason (the head, pursuing wisdom), Spirit (the chest, pursuing courage), and Appetite (the abdomen, pursuing moderation). Justice is internal harmony ruled by Reason."
      },
      {
        num: "04",
        title: "The Philosopher King & The Ideal State",
        text: "Human suffering will never end until philosophers rule as kings or kings become true philosophers, ensuring leadership grounded in wisdom rather than selfish ambition."
      },
      {
        num: "05",
        title: "Theory of Recollection (Anamnesis)",
        text: "Because the soul contemplated eternal truths before birth, learning is not acquiring foreign knowledge, but the active recollection of what was already imprinted in our immortal spirit."
      }
    ],
    keyConcepts: [
      { name: "World of Forms", desc: "The eternal, unchanging reality of absolute truths." },
      { name: "Allegory of the Cave", desc: "The universal metaphor of liberation through wisdom." },
      { name: "The Philosopher King", desc: "The enlightened ruler who prioritizes justice above ego." },
      { name: "Recollection (Anamnesis)", desc: "Knowledge as the awakening of the soul's innate truths." }
    ],
    works: [
      { title: "The Republic (Politeia)", period: "c. 375 BC", desc: "His crowning masterpiece on justice, the soul's order, and the ideal state." },
      { title: "Symposium (Symposion)", period: "c. 385 BC", desc: "A profound literary dialogue exploring the nature of love, desire, and beauty." },
      { title: "Phaedo (Phaidon)", period: "c. 380 BC", desc: "A moving account of Socrates' final hours and the immortality of the soul." },
      { title: "Apology of Socrates", period: "c. 399 BC", desc: "Socrates' courageous speech before the Athenian court defending freedom of thought." }
    ],
    influence: {
      names: ["Socrates", "Aristotle", "Plotinus", "St. Augustine", "Kant", "Nietzsche"],
      summary: "Plato established the foundation of Western and Islamic thought (Al-Farabi, Avicenna). As Alfred North Whitehead famously observed: 'The safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato'."
    },
    quotes: [
      "« The first and greatest victory is to conquer yourself. »",
      "« Wonder is the feeling of a philosopher, and philosophy begins in wonder. »",
      "« Courage is knowing what not to fear. »",
      "« One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors. »"
    ],
    famousQuote: "« The greatest victory is the victory over oneself; to be conquered by oneself is of all things most shameful and vile. »",
    didYouKnow: "His original name was Aristocles. His wrestling coach nicknamed him 'Plato' (from the Greek word 'Platos' meaning broad) due to his wide shoulders and athletic physique!",
    reflectionQuestion: "Are your current convictions born from genuine critical inquiry, or are they shadows projected on the wall by contemporary society's cave?",
    lessons: [
      "Look beyond deceptive sensory appearances to seek the underlying truth.",
      "Cultivate the sovereignty of reason over impulsive emotional reactions.",
      "True justice starts with inner harmony and peace within your own soul.",
      "Break free from the 'cave' of unexamined opinions and social conformity.",
      "Unite the pursuit of intellectual clarity with ethical action and service."
    ],
    timeline: [
      { year: "427 BC", desc: "Born in Athens to an ancient aristocratic family." },
      { year: "407 BC", desc: "Meets Socrates and begins dedicated philosophical mentorship." },
      { year: "399 BC", desc: "Execution of Socrates and start of extensive Mediterranean travels." },
      { year: "387 BC", desc: "Founds the Academy in Athens, the first university in Western history." },
      { year: "367 BC", desc: "Aristotle joins the Academy as Plato's foremost student." },
      { year: "347 BC", desc: "Passes away peacefully in Athens at age 80, leaving an enduring legacy." }
    ]
  };

  // Update Platon in all 3 languages
  ['ar', 'fr', 'en'].forEach(lang => {
    const thinker = DATA.content[lang].thinkers.find(t => t.id === 'platon');
    if (thinker) {
      const src = lang === 'ar' ? platon_ar : (lang === 'fr' ? platon_fr : platon_en);
      Object.assign(thinker, src);
    }
  });

  const exportStr = 'const TIKTOK_DATA = ' + JSON.stringify(DATA, null, 2) + ';\n\nexport default TIKTOK_DATA;\n';
  fs.writeFileSync('data_v11.js', exportStr, 'utf8');
  console.log('✅ Successfully updated Platon dossier data across AR, FR, EN in data_v11.js');
}

updatePlatonData().catch(err => {
  console.error('Error updating Platon data:', err);
  process.exit(1);
});
