import mongoose from "mongoose";

const zoneSchema = new mongoose.Schema({
  depot_id: { type: Number, required: true },
  structure: { type: Object, required: true },
});

export const Zone = mongoose.model("Zone", zoneSchema);
