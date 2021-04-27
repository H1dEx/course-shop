'use strict'
const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Course.hasMany(models.Comment);
            Course.belongsToMany(models.Category, {through: 'CategoryAssociation'});
            Course.belongsToMany(models.User, {through: 'Cart'})
        }
    }

    Course.init({
        coursename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagesource: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Course',
    })

    Course.getAll = (page, limit) => {
        return Course.findAll({limit, offset: (page - 1) * limit}).then(courses => {
            if (!courses)
                throw new Error("Not found");
            return courses
        })
    }

    return Course;
}