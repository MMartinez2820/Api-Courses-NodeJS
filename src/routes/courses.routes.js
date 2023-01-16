const {Router} = require('express');
const { getAllCourse, createNewCourse, udpdateCourse, addCourseAsing } = require('../controllers/courses.controllers');

const router = Router();

router.get('/course', getAllCourse);
router.post('/course/new', createNewCourse);
router.put('/course/:id', udpdateCourse);
router.post('/course/add', addCourseAsing)

module.exports = router;