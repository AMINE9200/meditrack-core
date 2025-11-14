import mongoose from "mongoose";

const mouvementSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["IN", "OUT"],
    required: true,
  },
  quantite: {
    type: Number,
    required: true,
  },
  produit_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Produit",
    required: true,
  }
}, {
  timestamps: true
});

const Mouvement = mongoose.model("Mouvement", mouvementSchema);

export default Mouvement;
