const Users = require("./users.models");
const UsersCourses = require("./users.courses.models");
const Categories = require("./categories.models");
const Videos = require("./videos.models");
const Courses = require("./courses.models");
const CousesCategories = require("./cuorses.categories.models");

const initModels = ()=>{
  // Users,
  // UsersCourses,
  // Categories
  // Videos,
  // Courses
  Users.hasMany(UsersCourses, {as: "courses", foreignKey: "user_id"});
  UsersCourses.belongsTo(Users, {as: "userone", foreignKey: "user_id"});

  Courses.hasMany(UsersCourses, {as: "users", foreignKey: "user_id"});
  UsersCourses.belongsTo(Courses, {as: "courses", foreignKey: "user_id"});

  // Categories.hasMany(Courses, {as: "categories", foreignKey: "course_id"});
  // Courses.belongsTo(Categories, {as: "course", foreignKey: "course_id"});

  //Courses.hasMany(CousesCategories, {as: "categories", foreignKey: "course_id"});
  //CousesCategories.belongsTo(Courses, {as: "courses", foreignKey: "course_id"})

  Categories.belongsTo(Courses,{as: "courses", foreignKey: "course_id"});
  Courses.hasMany(Categories, {as: "categories", foreignKey: "course_id"});

  Videos.belongsTo(Courses, {as: "courses", foreignKey: "course_id"});
  Courses.hasMany(Videos, {as: "videos", foreignKey: "course_id"});

}

module.exports = initModels;