const { Router } = require("express");
const { getUserById, createUser, updateUser, getAllUsers, asignCourse, consultaId } = require("../controllers/controllers");
//const { getAllCourse } = require("../controllers/courses.controllers");

const router = Router();
//obtner usuario por su id
//obtener un usuario con sus cursos
//crear un usuario 
//actulaizar usuario solo nombre y contraseña
//agregar un curso con su usuario
//router.get('/course', getAllCourse)
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
//router.post('/users', (req, res) =>res.json({message: "usuario creado"}));
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.post('/users/course', asignCourse);
router.get('/users/:id/consult', consultaId);



module.exports = router;