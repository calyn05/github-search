import path from "path";
import express from "express";

const app = express(),
  HTML_FILE = path.join(__dirname, "index.html");
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// in progress
