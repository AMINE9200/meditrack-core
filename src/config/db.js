import mongoose from "mongoose";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

// ----- PostgreSQL -----
export const pgPool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

pgPool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch((err) => console.error("PostgreSQL error", err.message));

// ----- MongoDB -----
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err.message));
