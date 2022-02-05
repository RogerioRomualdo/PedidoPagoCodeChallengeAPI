import { Router } from "express";
import { ProductsController } from "../controllers/products/ProductsController";
import { ProductsClient } from "../gateways/products/Products";

const productsClient = new ProductsClient();
const productsController = new ProductsController(productsClient);

const router = Router();

router.get("/products", productsController.listAllProducts);
router.get("/products/:id", productsController.showProduct);
router.post("/products", productsController.createProduct);
router.put("/products/:id", productsController.updateProduct);
router.delete("/products/:id", productsController.deleteProduct);

export default router;
