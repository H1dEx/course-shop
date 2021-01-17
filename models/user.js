'use strict';
const bcryptjs = require("bcryptjs");
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			// define association here
		}
	}
	
	User.init({
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
	}, {
		sequelize,
		modelName: 'User',
	});
	
	User.login = function ({email, password}) {
		User.findOne({where: {email}}).then((user) => {
			if (!user) {
				throw new Error("Incorrect email")
			} else if (bcryptjs.hashSync(user.password) !== password) {
				throw new Error("Incorrect password")
			} else {
				return user.email
			}
		})
	}
	
	return User;
};