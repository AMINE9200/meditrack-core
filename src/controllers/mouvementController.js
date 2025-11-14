import { createMouvement, getAllMouvements } from "../models/mouvementModel.js";
import { pgPool } from "../config/db.js";

export const getMouvements = async (req, res) => {
  try {
    const mouvements = await getAllMouvements();
    res.status(200).json({ status: "success", data: mouvements });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const addMouvement = async (req, res) => {
  try {
    const { type, quantite, produit_id } = req.body;

    if (!["IN", "OUT"].includes(type)) {
      return res.status(400).json({ status: "error", message: "Type invalide" });
    }

    if (quantite <= 0) {
      return res.status(400).json({ status: "error", message: "Quantité invalide" });
    }

    // 1️⃣ Ajouter le mouvement
    const mouvement = await createMouvement({ type, quantite, produit_id });

    // 2️⃣ Mise à jour du stock
    if (type === "IN") {
      await pgPool.query(
        "UPDATE produits SET quantite = quantite + $1 WHERE id = $2",
        [quantite, produit_id]
      );
    } else {
      await pgPool.query(
        "UPDATE produits SET quantite = quantite - $1 WHERE id = $2",
        [quantite, produit_id]
      );
    }

    res.status(201).json({ status: "success", data: mouvement });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
