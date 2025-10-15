import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// allow your Vercel domain
const allowedOrigins = ["https://easypeasystocks-frontend-yilp.vercel.app"];

app.use(cors({ origin: allowedOrigins, methods: ["GET"], credentials: false }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running ✅" });
});

app.get("/api/stock/:ticker", (req, res) => {
  const { ticker } = req.params;
  res.json({
    ticker,
    companySummary: `Placeholder summary for ${ticker}`,
    financials: { revenue: "N/A", netIncome: "N/A", cash: "N/A", debt: "N/A" }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
