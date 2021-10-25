const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('serving home page');
  res.status(200).send('Home Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1> 404 Page Not Found </h1>');
});

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
});
