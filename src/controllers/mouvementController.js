import Mouvement from "../models/mouvementModel.js";
import Produit from "../models/produitModel.js";

export const getMouvements = async (req, res) => {
  try {
    const mouvements = await Mouvement.find();
    res.status(200).json({ status: "success", data: mouvements });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const addMouvement = async (req, res) => {
  try {
    const { type, quantite, produit_id } = req.body;

    if (!["IN", "OUT"].includes(type)) {
      return res.status(400).json({
        status: "error",
        message: "Type invalide (IN ou OUT uniquement)",
      });
    }

    if (quantite <= 0) {
      return res.status(400).json({
        status: "error",
        message: "Quantité invalide",
      });
    }

    // Vérifier que le produit existe
    const produit = await Produit.findById(produit_id);
    if (!produit) {
      return res.status(404).json({
        status: "error",
        message: "Produit introuvable",
      });
    }

    // Mise à jour de la quantité
    if (type === "IN") {
      produit.quantite += quantite;
    } else {
      if (produit.quantite < quantite) {
        return res.status(400).json({
          status: "error",
          message: "Stock insuffisant",
        });
      }
      produit.quantite -= quantite;
    }

    await produit.save();

    // Enregistrer le mouvement
    const mouvement = await Mouvement.create({
      type,
      quantite,
      produit_id,
    });

    res.status(201).json({
      status: "success",
      data: mouvement,
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
