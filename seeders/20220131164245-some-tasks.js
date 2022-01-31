"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        { task: "4th quarter database report", deadline: "25/11/2022" },
        { task: "Bouldering with Friedchicken club", deadline: "15/08/2022" },
        { task: "Grocery run", deadline: "asap this week" },
        { task: "Create presentation for client X", deadline: "01/12/2022" },
        { task: "Buy grandma gift", deadline: "20/06/2022" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
