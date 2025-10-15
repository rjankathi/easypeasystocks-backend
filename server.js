import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Explicitly allow your frontend domain
const allowedOrigins = [
  "https://easypeasystocks-frontend-yilp.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET"],
  credentials: false
}));

app.use(express.json());
