
import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (_req, res) => {
  res.send("Compta IA API is running on Render!");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
