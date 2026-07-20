require("dotenv").config();

const express = require("express");
const app = express();
const pool = require("./src/config/neon_config");
const routes = require("./src/routes/routes");
const StartServer = require("./src/server/startServer");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("",routes);

pool.query("SELECT 1")
  .then(() => console.log("Connected to Neon"))
  .catch((err) => console.error("Neon connection failed:", err.message));

StartServer(app);