import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import repoRoutes from "./routes/repo.js";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));

app.use("/auth", authRoutes);
app.use("/repo", repoRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
