const CustomAPIError = require('../errors/custom-error');

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  } else res.status(500).send('Something went wrong, try again later');
};

module.exports = errorHandlerMiddleware;
