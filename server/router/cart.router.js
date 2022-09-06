import { Router } from "express";
import { category } from "../controllers/category.controller.js";

export const categoryRouter = new Router();

categoryRouter.get("/list?:limit?:page", category.getCategoryList);
categoryRouter.get("/:id", category.getOneCategory);
categoryRouter.post("", category.createCategory);
categoryRouter.patch("/:id", category.updateCategory);
categoryRouter.delete("/:id", category.deleteCategory);
