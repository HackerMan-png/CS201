const connect = require('./db/connect')
const express = require('express')
require('dotenv').config();

const app = express();

app
  .use([express.urlencoded({extended: false}), express.json()])
  .get('/', (req, res) => {
    res.send('home')
  })


const startServer = async () => {
  try{
    await connect(process.env.MONGO_URL)
    app.listen(3000, () => console.log('App listening at port 3000'))
  } catch (err) {
    console.error(err);
  }
}

startServer()