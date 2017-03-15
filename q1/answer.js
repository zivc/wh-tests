const getInput = require(require('path').resolve(__dirname, '../lib/get-input'))('q1');

getInput().then(
	input => {
		input.forEach(line => process.stdout.write(line.split(' ').reverse().join(' ')+'\n'));
	});