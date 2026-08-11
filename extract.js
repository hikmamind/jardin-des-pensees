import data from './data_v11.js';
import fs from 'fs';

const articleFR = data.content.fr.articles.find(a => a.id === 'why-people-distance-when-you-succeed');
const articleEN = data.content.en.articles.find(a => a.id === 'why-people-distance-when-you-succeed');
const articleAR = data.content.ar.articles.find(a => a.id === 'why-people-distance-when-you-succeed');

fs.writeFileSync('extract-articles.json', JSON.stringify({ fr: articleFR, en: articleEN, ar: articleAR }, null, 2));
