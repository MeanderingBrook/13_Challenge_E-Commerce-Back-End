// Imports required Node Modules
const router = require("express").Router();

// Imports required App-specific Modules enabling App Route(s)
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
