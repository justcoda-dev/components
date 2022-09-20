import {cartService} from "../services/cart.service.js";

export const cart = {
    getCartList: async (req, res) => {
        const page = req.query.page ? req.query.page : 1;
        const pageSize = req.query.limit ? req.query.limit : 5;

        const list = await cartService.getCartList(
            parseInt(page),
            parseInt(pageSize)
        );
        res.status(200).json({list});
        try {
        } catch (e) {
            res.status(400).json({error: e});
            console.error(e);
        }
    },
    getCartListSelect: async (req, res) => {
        try {
            const list = await cartService.selectList()
            res.status(200).json({list})
        } catch (error) {
            console.error(error)
        }
    },
    getOneCart: async () => {
        try {
        } catch (e) {
            console.error(e);
        }
    },
    createCart: async () => {
        try {
        } catch (e) {
            console.error(e);
        }
    },
    updateCart: async () => {
        try {
        } catch (e) {
            console.error(e);
        }
    },
    deleteCart: async () => {
        try {
        } catch (e) {
            console.error(e);
        }
    },
};
