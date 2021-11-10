// basic middleware

// app that listens on port 3000 || .env

// routes to /api/v1
const express = require('express');
const router = require('./routes/login');
const connect = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
require('dotenv').config();
require('express-async-errors');

const app = express();

app
  .use(express.static('./public'))
  .use([express.urlencoded({ extended: false }), express.json()])
  .use('/api/v1', router)
  .use(errorHandlerMiddleware)
  .use(notFound);

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
