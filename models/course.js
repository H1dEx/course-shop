'use strict'
const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        static associate(models) {
            Course.hasMany(models.Comment)
            Course.belongsToMany(models.Category, {through: 'CategoryAssociation'})
            Course.belongsToMany(models.User, {through: 'Cart'})
            Course.belongsTo(models.Source)
        }
    }

    Course.init({
        coursename: {
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
        modelName: 'Course',
    })

    return Course;
}