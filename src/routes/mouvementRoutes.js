import express from "express";
import {
  getMouvements,
  addMouvement,
} from "../controllers/mouvementController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Lire les mouvements → nécessite login
router.get("/", authMiddleware, getMouvements);

// Ajouter un mouvement → nécessite login
router.post("/", authMiddleware, addMouvement);

export default router;
