"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "todoItems",
      "important",
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("todoItems", "important", {});
  },
};
