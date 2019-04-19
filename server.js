var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  // Employee = require('./api/models/employee'),
  bodyParser = require('body-parser');

  var Item = require('./api/models/itemModel');

  var Emp = require('./api/models/employeeModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/todoListRoutes');
var routesItem = require('./api/routes/itemsRoutes');
var routesEmp = require('./api/routes/employeeRoutes');

routes(app);
routesItem(app);
routesEmp(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
