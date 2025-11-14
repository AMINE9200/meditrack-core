import { createMouvement, getAllMouvements } from "../models/mouvementModel.js";
import { pgPool } from "../config/db.js";

export const getMouvements = async (req, res) => {
  const mouvements = await getAllMouvements();
  res.json(mouvements);
};

export const addMouvement = async (req, res) => {
  const { type, quantite, produit_id } = req.body;

  const mouvement = await createMouvement({ type, quantite, produit_id });

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

  res.status(201).json(mouvement);
};
