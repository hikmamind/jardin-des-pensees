import data from './data_v11.js';

const lang = 'ar';
const articles = data.content[lang].articles;
const fileToFind = 'why-people-distance-when-you-succeed.html';

const article = articles.find(a => a.file === fileToFind);
console.log('Found article:', !!article);
if (article) {
  console.log('Article title:', article.title);
} else {
  console.log('Available files:', articles.map(a => a.file).join(', '));
}
