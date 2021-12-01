require('dotenv').config();
require('express-async-errors');

const express = require('express');
const connect = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const authRouter = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const auth = require('./middleware/auth');

const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocs = YAML.load('./swagger.yaml');

// Security Libraries
const rateLimiter = require('express-rate-limit'); // Limits the amount of calls that an IP can make to your API
const helmet = require('helmet'); // General security blanket (comfy)
const cors = require('cors'); // Prevents cors errors
const xss = require('xss-clean'); // User sanitation, this prevents SOME user based hacking

const app = express();

app
  .set('trust proxy', 1)
  .use(
    rateLimiter({
      windowMs: 1000 * 60 * 15,
      max: 100,
    })
  )
  .use(helmet())
  .use(cors())
  .use(xss())
  .get('/', (req, res) => {
    res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
  })
  .use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
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
