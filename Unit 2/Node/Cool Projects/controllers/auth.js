const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
const { BadRequestError, UnauthError } = require('../errors');

const register = async (req, res) => {
  // const { name, password, email } = req.body;
  // console.log(password);

  // const salt = await bcrypt.genSalt(10);
  // const hashpass = await bcrypt.hash(password, salt);
  // console.log(hashpass);

  const newUser = await User.create(req.body);
  const token = newUser.createJWT();
  res.json({ user: { name: newUser.name }, token });
};

const login = async (req, res) => {
  console.log(req.body);
  console.log('1');
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide an Email AND Password');
  }
  const userLogin = await User.findOne({ email });
  console.log('2');

  if (!userLogin) {
    throw new UnauthError('Invalid Credentials');
  }
  console.log('3');

  const isPasswordCorrect = await userLogin.comparePassword(password);

  console.log('4');
  if (!isPasswordCorrect) {
    throw new UnauthError('Wrong password');
  }

  const token = userLogin.createJWT();
  res.json({ user: { name: userLogin.name }, token });
  console.log('5');
};

module.exports = { register, login };
