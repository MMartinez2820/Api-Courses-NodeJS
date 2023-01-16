const express = require("express");
const initModels = require("./models/init.models");
const  UsersRouters  = require("./routes/users.routes");
const db = require("./utils/database");
const CourseRoute = require('./routes/courses.routes');
const videoRoutes = require('./routes/videos.routes');
const CategoriesRoute = require('./routes/categories.routes');
const app = express();
const PORT = 8000;


app.use(express.json());
db.authenticate()
.then(()=> console.log("autenticado"))
.catch((error) => console.log(error))

db.sync({force: false})
  .then(() =>console.log("sincronizado correctamente"))
  .catch((error)=>console.log(error));

initModels();

app.use('/api/v1', UsersRouters);
app.use('/api/v1', CourseRoute);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', CategoriesRoute);

app.listen(PORT, () =>{
  console.log(`servidor conectado en el puerto ${PORT}`)
});