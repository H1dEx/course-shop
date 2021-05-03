'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate(models) {
			Comment.belongsTo(models.User);
			Comment.belongsTo(models.Course)
		}
	}
	Comment.init({
		message: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	}, {
		sequelize,
		modelName: 'Comment',
	});

	return Comment;
};