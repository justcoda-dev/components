import {Product} from "../db/models/product.model.js";
import {productService} from "../services/product.service.js";

export const product = {
    getProductList: async (req, res) => {
        try {
            const page = req.query.page ? req.query.page : 1;
            const pageSize = req.query.limit ? req.query.limit : 5;

            const list = await productService.productsList(
                parseInt(page) - 1,
                parseInt(pageSize)
            );
            res.status(200).json({list});
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
    getOneProduct: async (req, res) => {
        try {
            const {id} = req.query;
            const product = await Product.findOne({where: {id}});
            res.status(200).json({product});
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
    createProduct: async (req, res) => {
        try {
            const productData = req.body;
            console.log("from body", productData);
            const product = await Product.create(productData);
            res.status(200).json({product});
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
    updateProduct: async (req, res) => {
        try {
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const {id} = req.query;
            const deleted_product = await Product.destroy({where: {id}});
            res.status(200).json({deleted_product});
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
    uploadProductImage: async (req, res) => {
        try {
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
    deleteProductImage: async (req, res) => {
        try {
        } catch (error) {
            console.error(error);
            res.status(404).json({error});
        }
    },
};
