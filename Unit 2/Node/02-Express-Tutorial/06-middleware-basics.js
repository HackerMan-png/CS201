const express = require('express');
const app = express();
const logger = require('./middleware/logger');

app
  .get('/', logger, (req, res) => {
    res.send('home page');
  })
  .get('/about', logger, (req, res) => {
    res.send('about page');
  })
  .listen(3000, () => {
    console.log('Server listening at port 3000');
  });
