"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "4th quarter database report",
          deadline: "25/11/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Bouldering with Friedchicken club",
          deadline: "15/08/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Grocery run",
          deadline: "asap this week",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Create presentation for client X",
          deadline: "01/12/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Buy grandma gift",
          deadline: "20/06/2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
