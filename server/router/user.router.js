import { Router } from "express";
import { user } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlwares/auth.middleware.js";
import { upload } from "../multer/multer.js";

export const userRouter = new Router();

userRouter.get("/list?:limit?:page", authMiddleware, user.getUserList);
userRouter.post("/logout", user.postUserLogOut);
// userRouter.get("/:uuid", user.getOneUser);
// userRouter.get("/activate/:link", user.activateUser);
userRouter.get("/refresh", user.refresh);

userRouter.post("/login", user.postUserLogin);

userRouter.post("/registration", user.registrationUser);
userRouter.post("/image?:uuid", upload.single("file"), user.uploadUserImage);

// userRouter.patch("/:uuid", user.updateUser);

// userRouter.delete("/:uuid", user.deleteUser);
userRouter.delete("/image?:uuid", user.deleteUserImage);
