import express from "express";
import { getMouvements, addMouvement } from "../controllers/mouvementController.js";

const router = express.Router();

router.get("/", getMouvements);
router.post("/", addMouvement);

export default router;
