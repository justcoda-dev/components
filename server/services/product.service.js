import { Product } from "../db/models/product.model.js";

export const productService = {
  productsList: async (page, pageSize) => {
    const paginate = (query, { page, pageSize }) => {
      const offset = page * pageSize;
      const limit = pageSize;
      return {
        ...query,
        offset,
        limit,
      };
    };

    const productsList = await Product.findAndCountAll(
      paginate(
        {
          where: {},
          attributes: {
            exclude: [
              "is_activated",
              "activation_link",
              "updatedAt",
              "createdAt",
              "cartUuid",
              "categoryUuid",
            ],
          },
        },
        { page, pageSize }
      )
    );
    const allPages = Math.ceil(productsList.count / pageSize);
    return { ...productsList, page: page + 1, pageSize, allPages };
  },
};
