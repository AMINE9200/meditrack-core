import express from "express";
import {
  getProduits,
  addProduit,
  editProduit,
  removeProduit,
} from "../controllers/produitController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Public : lire les produits
router.get("/", getProduits);

// Admin : ajouter, modifier, supprimer
router.post("/", authMiddleware, adminMiddleware, addProduit);
router.put("/:id", authMiddleware, adminMiddleware, editProduit);
router.delete("/:id", authMiddleware, adminMiddleware, removeProduit);

export default router;
