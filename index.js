var Yahtzee = require('./yahtzee');
process.argv.shift();
process.argv.shift();

var type = process.argv.pop();
var rollArray = process.argv.map(function(a){
	return parseInt(a, 10);
});

var roll = Yahtzee.roll(rollArray);

console.log(roll[type]);