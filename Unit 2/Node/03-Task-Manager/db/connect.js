const mongoose = require('mongoose');

// mongoose
//   .connect(mongo_url)
//   .then(() => console.log("connected to DB..."))
//   .catch((err) => console.error(err))

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => log('connected to DB...'))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
/*

How to vizualize Mongo DB

CLUSTER => Whole library\ => NYC Library
  DATABASE 1 => Books in the library => Books
    COLLECTION 1 => Fiction
      DOCUMENT 1 => Harry Potter
      DOCUMENT 2 =. Eragon
    COLLECTION 2 => Non-Fictions
      DOCUMENT 1 => Presidents in history
      DOCUMENT 2 => Cook books
  DATABASE 2 => Videos in the library => Videos
  DATABASE 3 => People with lib.cards => Patrons

*/
