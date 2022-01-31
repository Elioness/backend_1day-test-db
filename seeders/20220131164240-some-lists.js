"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        { name: "Personal List", createdAt: new Date(), updatedAt: new Date() },
        { name: "Work List", createdAt: new Date(), updatedAt: new Date() },
        { name: "Hobbies List", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
