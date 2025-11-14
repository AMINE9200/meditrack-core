import { Zone } from "../models/zoneModel.js";

export const getZonesByDepot = async (req, res) => {
  try {
    const zones = await Zone.findOne({ depot_id: req.params.id });
    res.status(200).json({ status: "success", data: zones });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const createZonesForDepot = async (req, res) => {
  try {
    const zone = await Zone.create({
      depot_id: req.params.id,
      structure: req.body,
    });

    res.status(201).json({ status: "success", data: zone });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

export const updateZonesForDepot = async (req, res) => {
  try {
    const updated = await Zone.findOneAndUpdate(
      { depot_id: req.params.id },
      { structure: req.body },
      { new: true }
    );

    res.status(200).json({ status: "success", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
