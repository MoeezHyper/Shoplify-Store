import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  toggleFavorite,
} from "../controlllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.put("/favorite/:id", toggleFavorite);

export default router;
