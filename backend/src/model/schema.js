const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Tinpuste extends Model {}

Tinpuste.init(
	{
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		date_of_birth: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		father_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		mother_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		grandfather_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		grandmother_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Tinpuste",
		tableName: "Tinpustes",
		timestamps: true,
	}
);

module.exports = Tinpuste;
