const UserServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//listar por id
const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}; 
//creando nuevo usuario
  const createUser = async (req, res) => {
    try {
      const newUser = req.body;
      const result = await UserServices.create(newUser);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
//actualizar por nombre y contraseña
const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    }
    const result = await UserServices.update(user, id);
    res.status(200).json(result);
  } catch (error) {
    res.json({message: "actualizando un usuario"})
  }
};

const asignCourse = async (req, res) =>{
  try {
    const asing = req.body;
    const result = await UserServices.create(asing);
    res.status(200).json(result)
  } catch (error) {
    res.json({message: "asignacion correcta"})
  }
};
const consultaId = async (req, res) =>{
  try {
    const {id} = req.params;
    const result = await UserServices.getConsultId(id)
    res.status(200).json(result);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  asignCourse,
  consultaId,
};


