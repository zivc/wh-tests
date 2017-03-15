
const getInput = require(require('path').resolve(__dirname, '../lib/get-input'))('q2');

const pennies = [0, 1, 2, 5, 10, 20, 50, 100, 200];

function repeatCombinatonsOfPennies(pennies, sumToCalculate) {

	let data = Array(sumToCalculate),
		results = [];

	(function iterate(pos, start) {
		if (pos === sumToCalculate) {

			if (data.reduce((prev,curr) => {
				return prev += curr;
			}, 0) === sumToCalculate) results.push(data.slice());
			return;

		}
		for (var i=start; i<pennies.length; ++i) {
			data[pos] = pennies[i];
			iterate(pos+1, i);
		}
	})(0,0);

	return results;

}

getInput().then(
	input => {

		input.forEach(function(sum) {
			sum = ~~sum; // fastest way to turn a string into an int - on the assumption it'll always be integers but in string type
			process.stdout.write(repeatCombinatonsOfPennies(pennies.filter(function(penny) {
				return penny <= sum; // filtering out higher denomination coins that are greater than the sum itself
			}), sum).length+'\n');

		});
	});
