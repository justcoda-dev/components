import { Router } from "express";
import { cart } from "../controllers/cart.controller.js";

export const cartRouter = new Router();

cartRouter.get("/list?:limit?:page", cart.getCartList);
cartRouter.get("/list/select", cart.getCartListSelect);
cartRouter.get("/:id", cart.getOneCart);
cartRouter.post("create", cart.createCart);
cartRouter.patch("/:id", cart.updateCart);
cartRouter.delete("/:id", cart.deleteCart);
