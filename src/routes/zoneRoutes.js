// src/routes/zoneRoutes.js
import express from "express";
import {
  getZones,
  createZones,
  updateZones
} from "../controllers/zoneController.js";

const router = express.Router();

router.get("/:id", getZones);       // récupérer les zones d’un dépôt
router.post("/:id", createZones);   // créer une zone dans un dépôt
router.put("/:id", updateZones);    // mettre à jour une zone

export default router;
