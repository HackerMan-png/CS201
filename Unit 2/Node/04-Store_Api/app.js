const connect = require('./db/connect');
const express = require('express');
const router = require('./routes/products');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
require('dotenv').config();
require('express-async-errors');

const app = express();

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get('/', (req, res) => {
    res.send('<h1>Store API</h1>');
  })
  .use('/api/v1/products', router)

  // Error handlers
  .use(errorHandler)
  .use(notFound);

// You can define your port value on windows using:
// CLI => set PORT=####
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`App listening at port ${port}`));
  } catch (err) {
    console.error(err);
  }
};

startServer();
