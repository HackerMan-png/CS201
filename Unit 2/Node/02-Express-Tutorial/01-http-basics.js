const http = require('http');

http
  .createServer()
  .on('request', (req, res) => {
    const url = req.url;

    if (url === '/') {
      res.writeHead(200, { 'content-type': 'text' });
      res.write('<h1> Home Page </h1>');
      res.end();
    }
    ``;
  })
  .listen(3000, () => {
    console.log('Server is listening at port 3000');
  });
