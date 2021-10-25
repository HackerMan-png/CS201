const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

http
  .createServer()
  .on('request', (req, res) => {
    const url = req.url;
    console.log(url);
    switch (url) {
      case '/':
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
        break;

      case '/styles.css':
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
        break;

      case '/logo.svg':
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(homeImage);
        res.end();
        break;

      case '/browser-app.js':
        res.writeHead(200, { 'content-type': 'text/js' });
        res.write(homeLogic);
        res.end();
        break;

      default:
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1> Oops </h1>');
        break;
    }
    res.end();
  })
  .listen(3000, () => {
    console.log('Server is listening at port 3000');
  });
