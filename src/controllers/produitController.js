import {
  getAllProduits,
  createProduit,
  updateProduit,
  deleteProduit,
} from "../models/produitModel.js";

export const getProduits = async (req, res) => {
  try {
    const produits = await getAllProduits();
    res.status(200).json({ status: "success", data: produits });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const addProduit = async (req, res) => {
  try {
    const newProduit = await createProduit(req.body);
    res.status(201).json({ status: "success", data: newProduit });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const editProduit = async (req, res) => {
  try {
    const updatedProduit = await updateProduit(req.params.id, req.body);
    res.status(200).json({ status: "success", data: updatedProduit });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const removeProduit = async (req, res) => {
  try {
    await deleteProduit(req.params.id);
    res.status(200).json({ status: "success", message: "Produit supprimé" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
