'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  amount: {
      type : Number
  },
  quantity: {
      type : Number
  },
  staff : {
    type : String
  }
  
});


module.exports = mongoose.model('Items', ItemSchema);