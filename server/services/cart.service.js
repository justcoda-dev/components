import {Cart} from "../db/models/cart.model.js";

export const cartService = {
    getCartList: async (page, pageSize) => {
        const paginate = (query, {page, pageSize}) => {
            const offset = page * pageSize;
            const limit = pageSize;
            return {
                ...query,
                offset,
                limit,
            };
        };

        const productsList = await Cart.findAndCountAll(
            paginate(
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
            )
        );
        const allPages = Math.ceil(productsList.count / pageSize);
        return {...productsList, page: page + 1, pageSize, allPages};
    },
    createCartItem: async (item) => {
        const cart = Cart.create({});
    },
    selectList: async () => {
        const list = await Cart.findAndCountAll()
        return list
    }
};
