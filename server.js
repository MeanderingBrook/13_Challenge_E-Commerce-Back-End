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

// Defines Data (JSON) and Static Page Management
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directs App to Use defined Route Handlers for App
app.use(routes);

// Synchronizes App and Postgres Database through Sequelize Middleware on Server start
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is active on, ${PORT}.`);
  });
});
