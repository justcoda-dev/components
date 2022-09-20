import {Category} from "../db/models/category.model.js";

export const categoryService = {
    getCategoriesList: async (page, pageSize) => {
        const paginate = (query, {page, pageSize}) => {
            const offset = page * pageSize;
            const limit = pageSize;
            return {
                ...query,
                offset,
                limit,
            };
        };
        const productsList = await Category.findAndCountAll(page.toString() && pageSize.toString() ? paginate(
            {
                where: {},
                attributes: {
                    exclude: [
                        "is_activated",
                        "activation_link",
                        "updatedAt",
                        "createdAt",
                    ],
                },
            },
            {page, pageSize}
        ) : undefined);
        const allPages = Math.ceil(productsList.count / pageSize);
        return {...productsList, page: page + 1, pageSize, allPages};
    },
    selectList: async () => {
        const list = await Category.findAndCountAll()
        return list
    }
};
