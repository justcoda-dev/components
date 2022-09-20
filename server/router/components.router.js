import { Router } from "express";
import { componentsController } from "../controllers/components.controller.js";
export const componentsRouter = new Router();
componentsRouter.get("/buttons", componentsController.getButtons);
