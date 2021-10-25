require('./db/connect');
const express = require('express');
const { connect } = require('mongoose');
const app = express();
require('dotenv').config();

const taskRoute = require('./routes/tasksRoute');

app
  // declaring the html/css directory
  .use(express.static('./public'))

  // middleware
  .use([express.urlencoded({ extended: false }), express.json()])
  // routes
  .use('/api/v1/tasks', taskRoute);

// Connect to the database
const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(3000, () => console.log('listening @ 3000'));
  } catch (err) {
    console.error(err);
  }
};
startServer();

// listen
// app.listen(3000, () => console.log('listening @ port 3000'));
