const Categories = require('../models/categories.models');

// Crear categories
class CategoriesServices {
  static async createCategories (newCatwgory) {
    try {
      const result = await Categories.create(newCatwgory);
      return result;
    } catch (error) {
      throw error;
    }
  };

  //delete Categoy
  static async deleteCategories (id) {
    try {
      const result = await Categories.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CategoriesServices;