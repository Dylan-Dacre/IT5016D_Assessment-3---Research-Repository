const queryParamValidationMiddleware = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.query);

  if (error) {
    const { details } = error;

    let errorMessage;

    // Check if the error is related to limit or page
    const limitError = details.find((detail) => detail.context.key === "limit");
    const pageError = details.find((detail) => detail.context.key === "page");

    // If the error is related to limit or page, then check if the value is less than 1
    if (limitError) {
      const limitValue = req.query.limit;

      if (limitValue < 1) {
        errorMessage = "Limit cannot be less than 1";
      } else {
        errorMessage = "Invalid limit parameter";
      }
    }

    if (pageError) {
      const pageValue = req.query.page;

      if (pageValue < 1) {
        errorMessage = "Page cannot be less than 1";
      } else {
        errorMessage = "Invalid page parameter";
      }
    }

    // If the error is not related to limit or page, then return the error message
    if (!limitError && !pageError) {
      errorMessage = details.map((detail) => detail.message).join(",");
    }

    res.status(400).json({ message: errorMessage });
  } else {
    next();
  }
};

module.exports = queryParamValidationMiddleware;
