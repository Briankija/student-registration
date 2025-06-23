import express from "express";
import userRoutes from "./routes/user";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/user", userRoutes);

export default app;
