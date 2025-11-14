import Depot from "../models/depotModel.js";

// GET /depots/:id/zones
export const getDepot = async (req, res) => {
  try {
    const depot = await Depot.findOne({ depotId: req.params.id });

    if (!depot) {
      return res.status(404).json({ message: "Depot not found" });
    }

    res.status(200).json({ status: "success", data: depot });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /depots/:id/zones
export const createDepotStructure = async (req, res) => {
  try {
    const { zones } = req.body;

    const newDepot = await Depot.create({
      depotId: req.params.id,
      zones: zones || [],
    });

    res.status(201).json({ status: "success", data: newDepot });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /depots/:id/zones
export const updateDepotStructure = async (req, res) => {
  try {
    const updated = await Depot.findOneAndUpdate(
      { depotId: req.params.id },
      { zones: req.body.zones },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Depot not found" });
    }

    res.status(200).json({ status: "success", data: updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
