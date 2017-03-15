const fs = require('fs'),
	path = require('path');

module.exports = function(question) {
	return function() {

		return new Promise((resolve, reject) => {

			/* `throw` will always reject a promise, otherwise use try, catch */
			let input = fs.readFile(process.argv[2] || path.resolve(__dirname, '../'+question+'/input.txt'), function(err, data) {
				if (err) throw err;
				resolve(data.toString().split('\n'));
			})

		});

	}

}