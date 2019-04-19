'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  salary: {
      type : Number
  },
  post: {
      type : String
  },
  location : {
    type : String
  },
  phone : {
      type : Number,
      required : 'please provide phone'
  }
  
});


module.exports = mongoose.model('Employees', EmployeeSchema);