const CustomAPIError = require('./custom-error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NotFound;
  }
}

module.exports = NotFound;
