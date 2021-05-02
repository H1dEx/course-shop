'use strict'
const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Source extends Model {
        static associate(models) {
            Source.hasMany(models.Course);
        }
    }

    Source.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(650),
            allowNull: false
        },
        imagesource: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Source',
    })

    return Source;
}