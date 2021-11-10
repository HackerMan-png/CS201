// login function retuns a json with success

const { BadRequestError } = require('../errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// dashboard function returns a json with success

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.json({ status: 200, msg: 'Success - User Created', token });
};

const dashboard = async (req, res) => {
  res.json({
    status: 200,
    msg: req.user.username,
    secret: req.headers.authorization,
  });
};

module.exports = { login, dashboard };
