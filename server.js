// Imports required Node Modules
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

// Defines Route Management using Express
const app = express();

// Defines Local Port Connection
const PORT = 3001;

// NOTE: Use of process.env.PORT creates network connection issue common to commercial routers when the instance is locally hosted
// const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
