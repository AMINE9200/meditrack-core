import Produit from "../models/produitModel.js";

export const getAllProduits = async (req, res) => {
  const produits = await Produit.find();
  res.json(produits);
};

export const createProduit = async (req, res) => {
  const newProduit = new Produit(req.body);
  await newProduit.save();
  res.status(201).json(newProduit);
};

export const updateProduit = async (req, res) => {
  const updated = await Produit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

export const deleteProduit = async (req, res) => {
  await Produit.findByIdAndDelete(req.params.id);
  res.json({ message: "Produit supprimé" });
};
