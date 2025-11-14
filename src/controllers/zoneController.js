// src/controllers/zoneController.js

import Zone from "../models/zoneModel.js";

// GET /zones/:id → récupérer structure d’un dépôt
export const getZones = async (req, res) => {
  try {
    const depotId = Number(req.params.id);

    const zones = await Zone.find({ depot_id: depotId });

    res.status(200).json({ status: "success", data: zones });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// POST /zones/:id → créer la structure interne
export const createZones = async (req, res) => {
  try {
    const depotId = Number(req.params.id);
    const { nom, description, emplacements } = req.body;

    const zone = await Zone.create({
      depot_id: depotId,
      nom,
      description,
      emplacements: emplacements || []
    });

    res.status(201).json({ status: "success", data: zone });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// PUT /zones/:id → mise à jour structure interne
export const updateZones = async (req, res) => {
  try {
    const zoneId = req.params.id;

    const zone = await Zone.findByIdAndUpdate(zoneId, req.body, { new: true });

    if (!zone) {
      return res.status(404).json({ status: "error", message: "Zone introuvable" });
    }

    res.status(200).json({ status: "success", data: zone });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
