import {Router} from "express";
import {product} from "../controllers/product.controller.js";

export const productRouter = new Router();

productRouter.get("/list?:limit?:page", product.getProductList);
productRouter.get("/:id", product.getOneProduct);
productRouter.post("/create", product.createProduct);
productRouter.patch("/:id", product.updateProduct);
productRouter.post("/image/:id", product.uploadProductImage);
productRouter.delete("/image/:id", product.deleteProductImage);
productRouter.delete("/:id", product.deleteProduct);
