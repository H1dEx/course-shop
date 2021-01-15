'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    login: {
    	type: DataTypes.STRING,
    	allowNull: false
	},
    password: {
		type: DataTypes.STRING,
		allowNull: false
	},
    email: {
		type: DataTypes.STRING,
		allowNull: false
	},
  	fullname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = function(loginUser) {
  
  }

  return User;
};