const CategoriesServices = require('../services/categories.services');

//crear una categories
const newCategory = async (req, res) => {
  try {
    const category = req.body;
    const result = await CategoriesServices.createCategories(category);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const categoriesDelete = async (req, res) =>{
  try {
    const {id} = req.params;
    const result = await CategoriesServices.deleteCategories({where: {id}});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
newCategory,
categoriesDelete,
};