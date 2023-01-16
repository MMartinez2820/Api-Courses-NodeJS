const Users = require("../models/users.models");
const UsersCourses = require("../models/users.courses.models");
const Courses = require("../models/courses.models");

class UserServices {

  //1-todos los datos 
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  //2-obtner usuario por su id
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  };
//3-obtener un usuario con sus cursos
static async getConsultId(id) {
  try {
    const result = await Users.findOne({
      where: {id},
      include: {model: UsersCourses, as: "courses", include: {model: Courses, as: "courses"}}
      });
      return result;
  } catch (error) {
    throw error;
  }
}

//4-crear un usuario
static async create(user){
  try {
    const result = await Users.create(user)
    return result;
  } catch (error) {
    throw error;
  }
};
//5-actulaizar usuario solo nombre y contraseña
static async update(user, id){
  try {
    const result = await Users.update(user, {where: {id}
});
    return result;
  } catch (error) {
    throw error;
  }
};
//6-agregar un curso con su usuario
static async getAddCourse (addCourse){
  try {
    const result = await UsersCourses.create(addCourse)
    return result;
  } catch (error) {
    throw error
  }
}

};
module.exports = UserServices;