const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: err.message,
  });
};

module.exports = errorHandlerMiddleware;
