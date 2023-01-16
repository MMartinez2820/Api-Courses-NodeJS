const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const CousesCategories = db.define('courses_categories',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
  }
});
module.exports = CousesCategories;