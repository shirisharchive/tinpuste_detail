require("dotenv").config();

const express = require("express");
const app = express();
const pool = require("./src/config/neon_config");
const routes = require("./src/routes/routes");
const StartServer = require("./src/server/startServer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("",routes);

pool.query("SELECT 1")
  .then(() => console.log("Connected to Neon"))
  .catch((err) => console.error("Neon connection failed:", err.message));

StartServer(app);