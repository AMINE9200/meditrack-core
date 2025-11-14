import { pgPool } from "../config/db.js";
import Zone from "../models/zoneModel.js";

export const getDepot = async (req, res) => {
  const depotId = req.params.id;

  const depot = await pgPool.query("SELECT * FROM depots WHERE id = $1", [
    depotId,
  ]);

  if (depot.rows.length === 0) {
    return res.status(404).json({ message: "Dépôt introuvable" });
  }

  const zone = await Zone.findOne({ depot_id: depotId });

  res.json({
    depot: depot.rows[0],
    zones: zone || {},
  });
};

export const createDepotStructure = async (req, res) => {
  const { id } = req.params;
  const { zones } = req.body;

  const created = await Zone.create({
    depot_id: id,
    zones,
  });

  res.status(201).json(created);
};

export const updateDepotStructure = async (req, res) => {
  const updated = await Zone.findOneAndUpdate(
    { depot_id: req.params.id },
    req.body,
    { new: true }
  );

  res.json(updated);
};
