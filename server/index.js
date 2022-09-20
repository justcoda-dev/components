import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { cartRouter } from "./router/cart.router.js";
import { categoryRouter } from "./router/category.router.js";
import { componentsRouter } from "./router/components.router.js";
import { productRouter } from "./router/product.router.js";
import { userRouter } from "./router/user.router.js";

dotenv.config();

const PORT = 5000;
const app = express();

app.use(
  await cors({
    origin: true, //included origin as true
    credentials: true, //included credentials as true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cookieParser());

app.get("/", async (req, res) => {
  // await Category.drop();
  res.json({ name: "misha" });
});
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/cart", cartRouter);
app.use("/components", componentsRouter);
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
