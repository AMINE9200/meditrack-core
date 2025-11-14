import express from "express";
import {
  getDepot,
  createDepotStructure,
  updateDepotStructure,
} from "../controllers/depotController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Récupérer la structure d’un dépôt (login obligatoire)
router.get("/:id/zones", authMiddleware, getDepot);

// Créer / Modifier la structure d’un dépôt --> Admin obligatoire
router.post("/:id/zones", authMiddleware, adminMiddleware, createDepotStructure);
router.put("/:id/zones", authMiddleware, adminMiddleware, updateDepotStructure);

export default router;
