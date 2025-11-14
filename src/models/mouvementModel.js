import { pgPool } from "../config/db.js";

export const getAllMouvements = async () => {
  const result = await pgPool.query("SELECT * FROM mouvements");
  return result.rows;
};

export const createMouvement = async ({ type, quantite, produit_id }) => {
  const result = await pgPool.query(
    "INSERT INTO mouvements (type, quantite, produit_id) VALUES ($1, $2, $3) RETURNING *",
    [type, quantite, produit_id]
  );

  return result.rows[0];
};
