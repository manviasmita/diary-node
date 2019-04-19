'use strict';

var mongoose = require('mongoose'),
  Employee = mongoose.model('Employees');
   

exports.list_all_emp = function(req, res) {
  Employee.find({}, function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};


exports.create_a_emp = function(req, res) {
  var new_item = new Employee(req.body);
  new_item.save(function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};

