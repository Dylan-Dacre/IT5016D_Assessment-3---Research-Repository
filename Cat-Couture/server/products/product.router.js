const express = require("express");
const Joi = require("joi");
const router = express.Router();
const productRepository = require("./product.repository");
const queryParamValidationMiddleware = require("../middleware/queryParamValidationMiddleware");

const queryParamsSchema = Joi.object().keys({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1),
});

// Get product details/information
router.get(
  "/",
  queryParamValidationMiddleware(queryParamsSchema),
  async (req, res, next) => {
    try {
      const { limit, page } = req.query;

      // Default query params
      const safeLimit = limit ? parseInt(limit) : 10;
      const safePage = page ? parseInt(page) : 1;

      // Get products. Uses the repository to get the products db data.
      const allProducts = await productRepository.getTotalProducts();
      const products = await productRepository.getProducts(safeLimit, safePage);

      // Pagination details
      const pageResult = {
        products,
        currentPage: safePage,
        totalPages: Math.ceil(allProducts.length / safeLimit),
        itemsPerPage: safeLimit,
        totalItems: allProducts.length,
      };

      return res.json(pageResult);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
