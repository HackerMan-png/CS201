require('dotenv').config();
require('express-async-errors');

const express = require('express');
const connect = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const authRouter = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const auth = require('./middleware/auth');

const app = express();

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .use('/api/v1/jobs', auth, jobRouter)
  .use('/api/v1/auth', authRouter)
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
