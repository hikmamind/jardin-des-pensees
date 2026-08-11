const fs = require('fs');

let fileContent = fs.readFileSync('data_v11.js', 'utf8');

// The prefix is "const TIKTOK_DATA = {" and the suffix is "};\n\nexport default TIKTOK_DATA;"
// It's safer to extract the JSON string, parse it, update it, and write it back.
// But wait, the file has functions or variables?
// No, it's just a huge object literal. Let's do string replacement for the specific body blocks.

// Because data_v11.js is huge and formatted a specific way, I will write a simple function that 
// reads it, parses it as a JS module, modifies the object, and writes it back formatted.
// Since it's a JS object with no functions, we can JSON.stringify it with some regex to fix unquoted keys if necessary, 
// OR we can just use a regex replace for the specific article.

const patchArticleData = (lang, id, newDataStr) => {
  // It's hard to replace exactly. Let's just create a new file with the object dumped.
  // Wait! A better way is to parse the file using `eval`.
};

// I will extract the object, modify it, and write it back.
const dataPrefix = "const TIKTOK_DATA = ";
const dataSuffix = ";\n\nexport default TIKTOK_DATA;";
let objectString = fileContent.replace(dataPrefix, "").replace(dataSuffix, "").trim();

let TIKTOK_DATA;
try {
  TIKTOK_DATA = eval("(" + objectString + ")");
} catch (e) {
  console.error("Eval failed", e);
  process.exit(1);
}

const updateArticle = (lang, newBody, quote, inBrief, conclusion) => {
  const art = TIKTOK_DATA.content[lang].articles.find(a => a.id === 'why-people-distance-when-you-succeed');
  if (art) {
    art.body = newBody;
    art.quote = quote;
    art.inBrief = inBrief;
    art.conclusion = conclusion;
  }
};

updateArticle('ar', 
  [
    "في بداية أي رحلة نحو تحقيق الأهداف، ستجد الكثيرين يشجعونك ويظهرون الدعم والتمني بالخير. لكن ما إن تبدأ ثمار عملك بالظهور، وتتحول الأحلام إلى إنجازات ملموسة، حتى تلاحظ سلوكاً غريباً من بعض المقربين: انسحاب تدريجي، برود في التفاعل، أو حتى انتقادات مبطنة.",
    { title: "عندما تبدأ في النجاح، تتغير نظرة الآخرين", content: ["النجاح يغير صورتك في أعين الآخرين. بعضهم يشعر بالإلهام ويعمل على تطوير نفسه. لكن البعض الآخر يقارن نفسه بك، ويشعر بالنقص، فيتحول الإعجاب إلى غيرة."] },
    { title: "المقارنة الاجتماعية والغيرة اللاواعية", content: ["علم النفس الاجتماعي يفسر هذه الظاهرة بما يُعرف بـ 'المقارنة الاجتماعية التلقائية'. فعندما يرى الإنسان شخصاً كان في نفس مستواه يتقدم خطوات كبيرة إلى الأمام، يستشعر عقله الباطن نوعاً من التهديد لقيمته الذاتية، فيتحول الإعجاب المبدئي إلى شعور بالدونية ومن ثم إلى غيرة صامتة."] },
    { title: "ليس الجميع مستعداً لرؤيتك تتجاوزهم", content: ["البعض يحبك ويدعمك، بشرط ألا تتفوق عليه. وجودك في نفس الدائرة يشعره بالأمان، أما صعودك فيجعله يواجه كسله أو تقصيره الخاص، وهو أمر مؤلم يفضل الهروب منه بقطع الصلة أو التقليل من حجم نجاحك."] },
    { title: "النجاح كمرآة كاشفة للعلاقات", content: ["النجاح الحقيقي ليس مجرد وصول إلى أهداف مادية أو مهنية، بل هو غربال دقيق يصفي علاقاتك. إنه يميز بوضوح بين من كان يرافقك لغرض، ومن يسعد حقاً لارتقائك ويسندك في كل الظروف."] },
    { title: "كيف تتعامل مع تغير المحيطين بك بحكمة", content: ["لا تدخل في جدال عقيم أو دفاع عن النفس. لا تستعرض نجاحك بطريقة تثير الحساسيات. حافظ على تواضعك ونقاء جوهرك. ابتعد عن المقارنات ودع الآخرين يختارون طريقهم."] },
    { title: "كيف تحافظ على سلامك النفسي", content: ["للحفاظ على سلامك النفسي: أولاً، لا تبرر نجاحك ولا تعتذر عن إنجازاتك. ثانياً، لا تدخل في جدالات دفاعية. ثالثاً، حافظ على تواضعك دون أن تطفئ بريقك لإرضاء غيرك. ورابعاً، أحط نفسك بالقلة الصادقة التي تشاركك الطموح والرؤية."] }
  ],
  "النجاح لا يغيرك أنت، بل يسقط الأقنعة ويكشف حقيقة ما يضمره الآخرون نحوك.",
  ["نجاحك لا يعني أن الآخرين يكرهونه.", "بعض العلاقات تتغير عندما تتغير موازين المقارنة.", "لا تجعل خوف الآخرين يحدد طريقك.", "حافظ على تواضعك دون أن تصغر نفسك.", "اختر من يفرح بنجاحك بصدق."],
  "النجاح ليس مجرد الوصول إلى هدف، بل هو اختبار للعلاقات، وللشخصية، ولطريقة تعاملك مع الآخرين. لا تحزن إذا ابتعد بعض الأشخاص، فكل مرحلة في الحياة تكشف من يستحق أن يكمل الطريق معك."
);

updateArticle('fr', 
  [
    "Au début de toute quête, beaucoup vous encourageront et manifesteront leur sympathie. Mais dès que vos efforts portent leurs fruits et que vos ambitions deviennent réalité, un comportement étrange peut apparaître chez certains proches : prise de distance, froideur ou critiques déguisées.",
    { title: "Quand vous commencez à réussir, le regard des autres change", content: ["Le succès modifie votre place dans le regard des autres. Certains sont inspirés, mais d'autres se comparent et se sentent diminués."] },
    { title: "La comparaison sociale et l'envie inconsciente", content: ["La psychologie sociale explique ce phénomène par la 'comparaison sociale automatique'. Quand une personne voit un égal progresser rapidement, son ego perçoit une menace inconsciente pour sa propre valeur, transformant l'admiration initiale en insécurité puis en jalousie."] },
    { title: "Tout le monde n'est pas prêt à vous voir les dépasser", content: ["Certaines personnes vous aiment, à condition que vous ne les dépassiez pas. Votre présence au même niveau les rassure ; votre ascension les renvoie à leurs propres renoncements."] },
    { title: "Le succès comme miroir révélateur des relations", content: ["Le succès est un filtre salutaire. Il permet de distinguer clairement les compagnons d'opportunité des amis sincères qui célèbrent véritablement votre élévation."] },
    { title: "Comment gérer le changement de votre entourage avec sagesse", content: ["N'entrez pas dans des débats stériles. Ne vous excusez jamais de réussir, évitez les justifications inutiles et restez humble sans éteindre votre éclat."] },
    { title: "Comment préserver votre paix intérieure", content: ["Restez humble sans éteindre votre éclat et entourez-vous de personnes animées d'une vision positive."] }
  ],
  "Le succès ne vous change pas ; il fait tomber les masques et révèle la véritable nature de ceux qui vous entourent.",
  ["Votre succès ne signifie pas que les autres vous détestent.", "Certaines relations changent quand l'équilibre de la comparaison change.", "Ne laissez pas la peur des autres dicter votre chemin.", "Restez humble sans vous diminuer.", "Choisissez ceux qui célèbrent sincèrement votre succès."],
  "Le succès n'est pas seulement l'atteinte d'un but, c'est aussi un test pour les relations et la personnalité. Ne soyez pas triste si certains s'éloignent, chaque étape révèle ceux qui méritent de continuer la route avec vous."
);

updateArticle('en', 
  [
    "At the beginning of your journey, many will offer encouragement and well wishes. But as soon as your dreams turn into tangible achievements, an unexpected shift often happens: gradual withdrawal, coolness, or subtle critique from people you thought were with you.",
    { title: "When you start succeeding, how others see you changes", content: ["Success changes your standing in others' eyes. Some are inspired, while others compare themselves and feel diminished."] },
    { title: "Social comparison and unconscious envy", content: ["Social psychology explains this through automatic social comparison. When someone sees an equal take significant leaps forward, their ego experiences an unconscious threat to their self-worth, turning initial admiration into insecurity and unspoken resentment."] },
    { title: "Not everyone is ready to see you surpass them", content: ["Some people love you, provided you don't surpass them. Your presence at the same level reassures them; your rise forces them to confront their own shortcomings."] },
    { title: "Success as a revealing mirror for relationships", content: ["True success filters your circle with precision. It reveals who walked beside you for convenience and who genuinely rejoices in your elevation."] },
    { title: "How to deal with changing circles wisely", content: ["Do not engage in sterile debates. Never apologize for your success, avoid endless defensive arguments, and stay grounded in humility."] },
    { title: "How to maintain your inner peace", content: ["Stay grounded in humility, and nurture ties with those who share a constructive vision."] }
  ],
  "Success does not change you; it drops the masks and reveals the true intentions of those around you.",
  ["Your success doesn't mean others hate you.", "Some relationships change when the balance of comparison shifts.", "Don't let the fear of others dictate your path.", "Stay humble without shrinking yourself.", "Choose those who genuinely celebrate your success."],
  "Success is not just reaching a goal, it's a test of relationships and character. Don't be sad if some people distance themselves; every stage reveals who deserves to walk the path with you."
);

const stringified = JSON.stringify(TIKTOK_DATA, null, 2);
const finalContent = dataPrefix + stringified + dataSuffix;
fs.writeFileSync('data_v11.js', finalContent);

console.log('Successfully updated data_v11.js');
