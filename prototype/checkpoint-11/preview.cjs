// Local fictional-prototype preview only. No application backend or external services.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.png':'image/png', '.jpeg':'image/jpeg', '.webp':'image/webp' };
http.createServer((request, response) => {
  let file;
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  } catch { response.writeHead(400).end('Invalid path'); return; }
  if (!file.startsWith(root + path.sep) || !types[path.extname(file)]) {
    response.writeHead(404).end('Not found'); return;
  }
  fs.readFile(file, (error, data) => {
    response.writeHead(error ? 404 : 200, { 'Content-Type':types[path.extname(file)], 'Cache-Control':'no-store' });
    response.end(error ? 'Not found' : data);
  });
}).listen(8142, '127.0.0.1', () => console.log('iTakda fictional preview: http://127.0.0.1:8142/ (Ctrl+C to stop)'));
