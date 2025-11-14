import express from "express";
import { getDepot } from "../controllers/depotController.js";

const router = express.Router();

router.get("/:id", getDepot);

export default router;
