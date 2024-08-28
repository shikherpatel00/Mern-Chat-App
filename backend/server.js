import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from './db/connectToMongo.js';
import { app, server } from "./socket/socket.js";

const PORT= process.env.port || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log("Server is running on some port")
});