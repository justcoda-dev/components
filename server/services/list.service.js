export const listService = {
  listWithPagination: async ({ page, pageSize, dbSchema, exclude = [] }) => {
    const paginate = (query, { page, pageSize }) => {
      const offset = page * pageSize;
      const limit = pageSize;
      return {
        ...query,
        offset,
        limit,
      };
    };

    const productsList = await dbSchema.findAndCountAll(
      paginate(
        {
          where: {},
          attributes: {
            exclude,
            // exclude: [
            //     "is_activated",
            //     "activation_link",
            //     "updatedAt",
            //     "createdAt",
            //     "cartUuid",
            //     "categoryUuid",
            // ],
          },
        },
        { page, pageSize }
      )
    );
    const allPages = Math.ceil(productsList.count / pageSize);
    return { ...productsList, page: page + 1, pageSize, allPages };
  },
};
