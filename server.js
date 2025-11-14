import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import authRoutes from "./src/routes/authRoutes.js";
import produitRoutes from "./src/routes/produitRoutes.js";
import depotRoutes from "./src/routes/depotRoutes.js";
import mouvementRoutes from "./src/routes/mouvementRoutes.js";
import zoneRoutes from "./src/routes/zoneRoutes.js";

// Connexion Mongo + Postgre
import "./src/config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---- ROUTES ----
app.use("/auth", authRoutes);        // 🔐 REGISTER + LOGIN
app.use("/produits", produitRoutes);
app.use("/depots", depotRoutes);
app.use("/mouvements", mouvementRoutes);
app.use("/zones", zoneRoutes);

// ---- SERVER ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
