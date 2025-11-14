import { pgPool } from "../config/db.js";

export const getAllProduits = async () => {
  const result = await pgPool.query("SELECT * FROM produits");
  return result.rows;
};

export const createProduit = async (data) => {
  const { nom, code, quantite, depot_id } = data;
  const result = await pgPool.query(
    "INSERT INTO produits (nom, code, quantite, depot_id) VALUES ($1,$2,$3,$4) RETURNING *",
    [nom, code, quantite, depot_id]
  );
  return result.rows[0];
};

export const updateProduit = async (id, data) => {
  const { nom, code, quantite, depot_id } = data;
  const result = await pgPool.query(
    "UPDATE produits SET nom=$1, code=$2, quantite=$3, depot_id=$4 WHERE id=$5 RETURNING *",
    [nom, code, quantite, depot_id, id]
  );
  return result.rows[0];
};

export const deleteProduit = async (id) => {
  await pgPool.query("DELETE FROM produits WHERE id=$1", [id]);
  return true;
};
