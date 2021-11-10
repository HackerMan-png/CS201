const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please provide a name.'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    lowercase: true,
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      'You failed',
    ],
    unique: [true, 'This email is already in use'],
  },
  password: {
    type: String,
    require: [true, 'Please enter your password'],
    minlength: 6,
  },
}).pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync());
  next();
});

userSchema.methods.comparePassword = async function (submittedPassword) {
  const isMatch = await bcrypt.compare(submittedPassword, this.password);
  return isMatch;
};

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userID: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

module.exports = mongoose.model('User', userSchema);
