'use strict';

module.exports = function(app) {
	var itemList = require('../controllers/itemsController');

	// todoList Routes
	app.route('/items')
		.get(itemList.list_all_items)
		.post(itemList.create_a_item);

	
};
