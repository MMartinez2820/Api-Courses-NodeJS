const Courses = require("../models/courses.models");
// all courses
class CourseServises {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };
  // add courses Users
  static async addCourseUsers (asing) {
    try {
      const result = await Courses.create(asing);
      return result;
    } catch (error) {
      throw error;
    }
  };
  //create new course
  static async createCouser (newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
  //update course only description
static async udpdateCourseId (field, id) {
  try {
    const result = await Courses.update(field, {where: {id}});
    return result;
  } catch (error) {
    throw error;
  }
}

};

module.exports = CourseServises;
//1. Obtener a un usuario por su id (Deberás mostrar la información del usuario menos created_at, updated_at y password)
// 2. Obtener a un usuario junto con los cursos donde esta suscrito (Mostrar los mismos datos del usuario que en el punto anterior junto al nombre del curso)
// 3. Crear un usuario
// 4. Actualizar un usuario, (solo se permitirá los nombres y la contraseña)
// 5. Agregar un curso a un usuario
// 6. Obtener todos los cursos
// 7. Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre, de los videos solo deberás mostrar el nombre y su url
// 8. Crear un nuevo curso
// 9. Editar un curso (solo se permite cambiar la descripción)
// 10. Crear videos 
// 11. Eliminar videos
// 12. Crear categorías
// 13. Eliminar categorías