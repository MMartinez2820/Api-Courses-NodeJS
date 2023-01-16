const {Sequelize} = require("sequelize");

const db = new Sequelize({
  database: "curseapp",
  username: "postgres",
  host: "localhost",
  post: "5432",
  password: "miguel123",
  dialect: "postgres",
});

module.exports = db;