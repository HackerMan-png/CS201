require('dotenv').config;
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./DB/connect');
