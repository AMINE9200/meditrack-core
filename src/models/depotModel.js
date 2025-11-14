import mongoose from "mongoose";

const depotSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true }
}, {
  timestamps: true
});

const Depot = mongoose.model("Depot", depotSchema);

export default Depot;
