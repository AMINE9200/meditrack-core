import { pgPool } from "../config/db.js";

export const getDepotById = async (id) => {
  const result = await pgPool.query("SELECT * FROM depots WHERE id = $1", [id]);
  return result.rows[0];
};
