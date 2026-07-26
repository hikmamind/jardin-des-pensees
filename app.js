import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.odt': 'application/vnd.oasis.opendocument.text'
};

const server = http.createServer((req, res) => {
  // Normalize URL path by removing query string
  let filePath = req.url.split('?')[0];
  
  // Resolve default files
  if (filePath === '/') {
    filePath = '/index.html';
  } else if (filePath.endsWith('/')) {
    filePath += 'index.html';
  }
  
  const absolutePath = path.join(__dirname, filePath);
  const ext = path.extname(absolutePath).toLowerCase();
  
  fs.readFile(absolutePath, (err, data) => {
    if (err) {
      // If path has no extension, try directory index.html
      if (ext === '') {
        const tryIndex = path.join(absolutePath, 'index.html');
        fs.readFile(tryIndex, (indexErr, indexData) => {
          if (!indexErr) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexData);
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          }
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
    } else {
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Static server is running on port ${PORT}`);
});
