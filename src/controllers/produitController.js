import Produit from "../models/produitModel.js";

export const getProduits = async (req, res) => {
  try {
    const produits = await Produit.find();
    res.status(200).json({ status: "success", data: produits });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const addProduit = async (req, res) => {
  try {
    const newProduit = await Produit.create(req.body);
    res.status(201).json({ status: "success", data: newProduit });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const editProduit = async (req, res) => {
  try {
    const updatedProduit = await Produit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ status: "success", data: updatedProduit });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const removeProduit = async (req, res) => {
  try {
    await Produit.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Produit supprimé" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
