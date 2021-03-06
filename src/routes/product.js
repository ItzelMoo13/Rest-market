import { Router } from "express";
import {
  createNewProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateAProduct,
} from "../controllers/product.controller";
import { verifyMyActiveToken } from "../middleware/middleware";
const router = Router();

// We have to define our routes for the entity
// with the next structure: api/product
router.use(verifyMyActiveToken);
router.post("/", createNewProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/:id", updateAProduct);

export default router;
