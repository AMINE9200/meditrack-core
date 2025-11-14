import mongoose from "mongoose";

const produitSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  code: { type: String, required: true },
  quantite: { type: Number, required: true },
  depot_id: { type: Number, required: true },
});

const Produit = mongoose.model("Produit", produitSchema);

export default Produit;
