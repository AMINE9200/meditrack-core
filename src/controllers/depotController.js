import Depot from "../models/depotModel.js";

export const getDepot = async (req, res) => {
  try {
    const depot = await Depot.findById(req.params.id);

    if (!depot) {
      return res.status(404).json({
        status: "error",
        message: "Dépôt introuvable"
      });
    }

    res.status(200).json({
      status: "success",
      data: depot
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};
