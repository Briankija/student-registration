import express from "express";
import userRoutes from "./routes/user.router";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

export default app;
