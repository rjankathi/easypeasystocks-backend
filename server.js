import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running ✅" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
