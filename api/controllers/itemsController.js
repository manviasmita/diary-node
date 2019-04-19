'use strict';

var mongoose = require('mongoose'),
  Item = mongoose.model('Items');
   

exports.list_all_items = function(req, res) {
  Item.find({}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.create_a_item = function(req, res) {
  var new_item = new Item(req.body);
  new_item.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

