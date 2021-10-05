const http = require('http');

http.createServer().on('request', (req, res) => {
  switch (req.url) {
    case '/':
      res.end('Home Page');
      break;
    case '/':
      res.end('Home Page');
      break;
    case '/':
      res.end('Home Page');
      break;

    default:
      break;
  }
});
