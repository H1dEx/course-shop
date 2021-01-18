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
        return User.findOne({where: {email}}).then((user) => {
            if (!user) {
                throw new Error("Incorrect email");
            }
            const result = bcryptjs.compareSync(password, user.password);
            if (!result)
                throw new Error("Incorrect password");
            return user
        })
    }

    return User;
};