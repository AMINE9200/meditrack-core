import express from "express";
import {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
} from "../controllers/produitController.js";

const router = express.Router();

router.get("/", getAllProduits);
router.post("/", createProduit);
router.put("/:id", updateProduit);
router.delete("/:id", deleteProduit);

export default router;
