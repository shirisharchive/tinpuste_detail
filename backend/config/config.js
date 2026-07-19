require("dotenv").config({ override: true });

const pgConfig = {
  url: process.env.PG_URL,
};

module.exports = {
  development: {
    url: pgConfig.url,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: pgConfig.url,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
