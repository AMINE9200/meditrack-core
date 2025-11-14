import { pgPool } from "../config/db.js";

export const getAllMouvements = async () => {
  const result = await pgPool.query("SELECT * FROM mouvements");
  return result.rows;
};

export const createMouvement = async (data) => {
  const { type, quantite, produit_id } = data;

  const result = await pgPool.query(
    "INSERT INTO mouvements (type, quantite, produit_id, date) VALUES ($1,$2,$3,NOW()) RETURNING *",
    [type, quantite, produit_id]
  );

  return result.rows[0];
};
