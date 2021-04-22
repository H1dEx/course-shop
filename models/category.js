'use strict'
const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
        }
    }

    Category.init({
            tag: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: 'Category',
        }
    )

    Category.getAll = () => {
        console.log('STEP INTO')
        return Category.findAll()
    }

    return Category
}