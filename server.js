const express = require("express");
const path = require("path");
let csvToJson = require("convert-csv-to-json");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/uta-data", (_req, res) => {
  const jsonData = csvToJson
    .fieldDelimiter(",")
    .getJsonFromCsv(path.join(__dirname, "./uta_gtfs_data/stops.txt"));
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
