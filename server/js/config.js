import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://daKaizen:D%40n13L%2F47811771231812%2B%2A@cluster0.vyglg2r.mongodb.net/proyectoAcademiaDB";
export const SECRET_TOKEN = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
