import data from './data_v11.js';
const lang = 'ar';
const articles = data.content[lang].articles;
const fileToFind = 'why-people-distance-when-you-succeed.html';
const article = articles.find(a => a.file === fileToFind);
console.log(JSON.stringify(article, null, 2));
