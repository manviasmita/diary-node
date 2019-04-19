'use strict';

module.exports = function(app) {
	var employeeList = require('../controllers/employeeController');

	// todoList Routes
	app.route('/employees')
		.get(employeeList.list_all_emp)
		.post(employeeList.create_a_emp);

	
};
