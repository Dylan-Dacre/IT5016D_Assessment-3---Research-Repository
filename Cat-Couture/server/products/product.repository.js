const db = require("../db");

// Repository to store all the queries related to products
module.exports = {
  getTotalProducts: async () => {
    try {
      const result = await db.query(
        `SELECT
        p.id,
        p.name,
        p.description,
        p.price,
        pc.name AS "categoryName",
        pi.name AS "imageName",
        pi.description AS "imageDescription"
      FROM product p
      LEFT JOIN product_category pc ON p.product_category_id = pc.id
      LEFT JOIN product_image pi ON p.product_image_id = pi.id
      ORDER BY
        p.id
        `
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },

  getProducts: async (limit, page) => {
    try {
      const result = await db.query(
        `SELECT
          p.id,
          p.name,
          p.description,
          p.price,
          pc.name AS "categoryName",
          pi.name AS "imageName",
          pi.description AS "imageDescription",
          dt.type AS "discountType",
          pd.value AS "discountValue"
        FROM product p
        LEFT JOIN product_category pc ON p.product_category_id = pc.id
        LEFT JOIN product_image pi ON p.product_image_id = pi.id
        LEFT JOIN product_discount pd ON pd.product_id = p.id
        LEFT JOIN discount_type dt ON pd.discount_type_id = dt.id
        ORDER BY
          p.id
        LIMIT $1 OFFSET $2
        `,
        [limit, (page - 1) * limit]
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
};
