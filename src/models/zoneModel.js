// src/models/zoneModel.js
import mongoose from "mongoose";

const zoneSchema = new mongoose.Schema({
  depot_id: { type: Number, required: true }, // chaque zone appartient à un dépôt
  nom: { type: String, required: true },
  description: { type: String },
  emplacements: { type: Array, default: [] } // structure interne (étagères, etc.)
});

const Zone = mongoose.model("Zone", zoneSchema);
export default Zone;
