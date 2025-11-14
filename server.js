import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import produitRoutes from "./src/routes/produitRoutes.js";
import depotRoutes from "./src/routes/depotRoutes.js";
import mouvementRoutes from "./src/routes/mouvementRoutes.js";
import zoneRoutes from "./src/routes/zoneRoutes.js";
import "./src/config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/produits", produitRoutes);
app.use("/depots", depotRoutes);
app.use("/mouvements", mouvementRoutes);
app.use("/zones", zoneRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
