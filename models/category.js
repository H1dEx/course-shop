'use strict'
const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.belongsToMany(models.Course, {through: 'CategoryAssociation'})
        }
    }

    Category.init({
            tag: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Category',
        }
    )

    Category.getAll = () => {
        return Category.findAll()
            .then(category => {
                if (!category)
                    throw new Error("Not found")
                return category
            })
    }

    Category.getPartial = (page, limit) => {
        return Category.findAll({limit, offset: (page - 1) * limit})
            .then(category => {
                if (!category)
                    throw new Error("Not found")
                return category
            })
    }

    return Category
}
