require("dotenv").config({ override: true });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PG_URL, {
	dialect: "postgres",
	logging: false,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

module.exports = sequelize;
