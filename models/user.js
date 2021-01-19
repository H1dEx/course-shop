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
		nickname: {
			type: DataTypes.STRING,
		},
		gender: {
			type: DataTypes.STRING,
		},
	}, {
		sequelize,
		modelName: 'User',
	});
	
	User.login = function ({email, password}) {
		return User.findOne({where: {email}})
			.then((user) => {
				if (!user) {
					throw new Error("Incorrect email");
				}
				const result = bcryptjs.compareSync(password, user.password);
				if (!result)
					throw new Error("Incorrect password");
				console.log(user)
				return user
			})
	}
	
	User.getProfile = function (id) {
		return User.findOne({where: {id}})
			.then((user) => {
				if (!user) {
					throw new Error("Unknown user");
				}
				return user
			})
	}
	
	User.setProfile = function ({id, nickname, gender}) {
		return User.update({nickname, gender}, {where: {id}}).then(user => {
			if (!user)
				throw new Error("Unknown user")
			return user
		})
	}
	
	return User;
};