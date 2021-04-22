'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [
            {
                tag: 'CSS',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'HTML',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'JS',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'REACT',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'VUE',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'PYTHON',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'C++',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'JAVA',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'RUBY',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                tag: 'PHP',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
