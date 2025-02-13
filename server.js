import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

import path from 'path';
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
