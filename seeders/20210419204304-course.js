'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Courses', [{
            coursename: 'FIRST',
            description: 'test',
            price: 99,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            coursename: 'SEC',
            description: 'test',
            price: 99,
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            coursename: 'THD',
            description: 'test',
            price: 99,
            createdAt: new Date(),
            updatedAt: new Date()
        },])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
      await queryInterface.bulkDelete('Courses', null, {});
    }
};
