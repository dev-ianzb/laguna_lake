const express = require("express");
const cors = require("cors");
const stations = require("./data/stations.json");

const app = express();
app.use(cors());

app.get("/api/stations", (req, res) => {
  res.json(stations);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
