import express from "express";
import {
  getZonesByDepot,
  createZonesForDepot,
  updateZonesForDepot
} from "../controllers/zoneController.js";

const router = express.Router();

router.get("/:id/zones", getZonesByDepot);
router.post("/:id/zones", createZonesForDepot);
router.put("/:id/zones", updateZonesForDepot);

export default router;
