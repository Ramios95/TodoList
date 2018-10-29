const express = require("express"),
  app = express(),
  config = require("./config.json");
const Task = require("./taskmodel.js");
const cors = require("cors");
var bodyParser = require("body-parser");

var tab = new Array();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var id = 1;

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.listen(config.port, function() {
  console.log(
    "Attention please! Server is now listening on port " + config.port
  );
});

app.post("/newtask", function(req, res) {
  var date = convertDate(req.body.duedate);
  var date2 = convertDate2(new Date());
  task = new Task(
    id,
    req.body.title,
    req.body.description,
    false,
    date,
    date2,
    date2
  );
  tab.push(task);

  id++;
  res.send(task);
});

app.get("/", function(req, res) {
  res.send(tab);
});

app.post("/", function(req, res) {
  task = tab.find(x => x.id === req.body.id);
  index = tab.indexOf(task);
  tab[index].completed = !tab[index].completed;
});

app.delete("/deletetask/:taskid", function(req, res) {
  idtask = req.params.taskid;
  task1 = tab.find(x => x.id === parseInt(idtask));
  index = tab.indexOf(task1);
  tab.splice(index, 1);
  res.send(tab);
});

app.put("/edittask/:taskId", function(req, res) {
  taskToEdit = tab.find(t => t.id === parseInt(req.params.taskId));
  const { title, description } = req.body;

  taskToEdit.description = description;
  taskToEdit.title = title;
  taskToEdit.duedate = convertDate(duedate);
  taskToEdit.updatedAt = convertDate2(new Date());

  res.send(tab);
});

function convertDate(date) {
  d1 = date.substring(0, 10);
  d2 =
    d1.substring(8, 10) + "/" + d1.substring(5, 7) + "/" + d1.substring(0, 4);
  return d2;
}
function convertDate2(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}
