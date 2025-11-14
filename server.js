import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import "./src/config/db.js";

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import depotRoutes from "./src/routes/depotRoutes.js";
import produitRoutes from "./src/routes/produitRoutes.js";
import zoneRoutes from "./src/routes/zoneRoutes.js";
import mouvementRoutes from "./src/routes/mouvementRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/depots", depotRoutes);
app.use("/produits", produitRoutes);
app.use("/zones", zoneRoutes);
app.use("/mouvements", mouvementRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
