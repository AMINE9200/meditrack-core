import pool from "../config/db.js";

export const createUser = async (username, hashedPassword, role = "user") => {
  const query = `
    INSERT INTO users (username, password, role)
    VALUES ($1, $2, $3)
    RETURNING id, username, role;
  `;
  const values = [username, hashedPassword, role];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findUserByUsername = async (username) => {
  const query = `SELECT * FROM users WHERE username = $1`;
  const result = await pool.query(query, [username]);
  return result.rows[0];
};
