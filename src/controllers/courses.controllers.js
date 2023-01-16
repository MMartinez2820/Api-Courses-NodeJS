const CourseServises = require("../services/courses.services");

const getAllCourse = async (req, res) => {
  try {
    const result = await CourseServises.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createNewCourse = async (req, res) =>{
  
  try {
    const newCurses = req.body;
    const result = await CourseServises.createCouser(newCurses);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
  
};
const udpdateCourse = async (req, res) => {
  try {
    const {id} = req.params;
    const {description} = req.body;
    const field = {description};
    const result = await CourseServises.udpdateCourseId(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}; 
//add 
const addCourseAsing = async (req, res) => {
  try {
    const add = req.body;
    const result = await CourseServises.addCourseUsers(add);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllCourse,
  createNewCourse,
  udpdateCourse,
  addCourseAsing,
};