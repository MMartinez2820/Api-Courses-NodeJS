const {Router} = require("express");

const {newCategory, categoriesDelete} =require("../controllers/categories.controllers");

const route = Router();

route.post('/category', newCategory);
route.delete('/category/:id', categoriesDelete);

module.exports = route;