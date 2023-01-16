const {Router} = require('express');
const { newVideo, deleteVideo } = require('../controllers/videos.controllers');

const route = Router();

route.post('/video', newVideo);
route.delete('/video/:id', deleteVideo);
module.exports = route;