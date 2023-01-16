const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const UsersCourses = db.define('user_courses',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
  },

});
module.exports = UsersCourses;