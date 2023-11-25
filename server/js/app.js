import express from "express";
import morgan from "morgan";
import authRoutes from "../src/routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);

export default app;
