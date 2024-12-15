const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const serveHTMLFile = (filePath, res, statusCode = 200) => {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(statusCode, { 'Content-Type': 'text.html'});
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url;

  switch(url) {
    case '/':
      serveHTMLFile(path.join(__dirname, 'index.html'), res);
      break;
    case '/about':
      serveHTMLFile(path.join(__dirname, 'about.html'), res);
      break;
    case '/contact':
      serveHTMLFile(path.join(__dirname, 'contact.html'), res);
      break;
    case '/home':
      serveHTMLFile(path.join(__dirname, 'index.html'), res);
      break;
    default:
      serveHTMLFile(path.join(__dirname, '404.html'), res, 404);
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});