const CousesCategories = require("../models/cuorses.categories.models");
const db = require("../utils/database");
const Categories  = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const UsersCourses = require("../models/users.courses.models");

const users = [
  {firstName: "miguel", lastName: "martinez", password:"123", email: "miguel@gmail.com" },
  {firstName: "emma", lastName: "martinez", password:"123", email: "mmiguel@gmail.com" },
  {firstName: "lizth", lastName: "martinez", password:"123", email: "pmiguel@gmail.com" },
  {firstName: "eunice", lastName: "martinez", password:"123", email: "kmiguel@gmail.com" },
];
const courses = [
  {title: "ingles", description: "intensivo b1", author: 1},
  {title: "javaScript", description: "pricipiantes", author: 2},
  {title: "nodeJS", description: "basico1", author: 3},
  {title: "web", description: "para wordpress", author: 4},
  
];

const  categories = [
  {name: "matemtica", courseId: 1},
  {name: "programacion", courseId: 2},
  {name: "logica", courseId: 3},
  {name: "algoritmos",   courseId: 4},
];

const videos = [
  {title: "pronunciacion", url: "http//:ingles", course_id: 1},
  {title: "fundamentos", url: "http//:javaScript", course_id: 2},
  {title: "principios", url: "http//:nodeJS", course_id: 3},
  {title: "paginas", url: "http//:web", course_id: 4},
];

const usercourse = [
  {userId: 2, courseId: 1},
  {userId: 3, courseId: 2},
  {userId: 4, courseId: 3},
  {userId: 2, courseId: 4},
];

db.sync({force: true})
  .then(() => {
    console.log("Iniciando con la solicitud");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 200);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category))
    }, 400);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video))
    }, 600);

    setTimeout(() => {
      usercourse.forEach((usercourses) => UsersCourses.create(usercourses));
    }, 800);
  })
  .catch((error) => console.log(error));
