import express from "express";
import {
  getDepot,
  createDepotStructure,
  updateDepotStructure,
} from "../controllers/depotController.js";

const router = express.Router();

router.get("/:id/zones", getDepot);
router.post("/:id/zones", createDepotStructure);
router.put("/:id/zones", updateDepotStructure);

export default router;
