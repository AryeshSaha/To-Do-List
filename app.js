const express = require("express");
const bodyParser = require("body-parser");
const DbCon = require("./Db/DbCon");
const RegisterCtrl = require("./controllers/User/RegisterCtrl");
const LoginCtrl = require("./controllers/User/LoginCtrl");
const FetchUsersCtrl = require("./controllers/User/FetchUsers");
const CreateTaskCtrl = require("./controllers/Tasks/CreateTask");
const FetchTasksCtrl = require("./controllers/Tasks/FetchTasks");
const DeleteTasksCtrl = require("./controllers/Tasks/DeleteTask");

const app = express();

// Db Connection
DbCon();

// regular middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(cors())

// setting routes

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/register", (req, res) => {
  res.render("Login");
});

app.post("/register", RegisterCtrl);

app.get("/login", (req, res) => {
  res.render("Login");
});

app.post("/login", LoginCtrl);

app.get("/fetch", FetchUsersCtrl);

app.get("/tasks", FetchTasksCtrl)

app.post("/create", CreateTaskCtrl);

app.post('/delete', DeleteTasksCtrl)

app.listen(process.env.PORT || 5000, () => {
  console.log(`App is listening on port ${5000}`);
});
