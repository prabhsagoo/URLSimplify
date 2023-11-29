import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString  = process.env.MONGO_URL;
const db = await mongoose.connect(connectionString);

const Schema = new mongoose.Schema({

    shortenURL: String,
    originalURL: String,
    createdAt: { type: Date, default: Date.now, },});

export const URL = db.model('URL', Schema);