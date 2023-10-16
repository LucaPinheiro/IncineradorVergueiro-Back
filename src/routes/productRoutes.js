import express from "express";
import ProductController from "../controllers/product/productController.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.post("/products", productController.createProduct);
productRouter.get("/products", productController.getAllProducts);
productRouter.get("/products/:id", productController.getProductById);
productRouter.put("/products/:id", productController.updateProduct);
productRouter.delete("/products/:id", productController.deleteProduct);

export default productRouter;
