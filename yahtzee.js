function Yahtzee(array) {
	this.score = new roll(array);
}

Yahtzee.roll = function(array) {
	return new roll(array);
};

roll.prototype.singles = function(num, array) {
	return array.filter(function(a) {
		return a === num;
	}).concat([0]).reduce(function(a, b){
		return a + b;
	});
};

function roll(array) {

	this.chance = array.reduce(function(a, b){
		return a + b;
	});

	this.ones = this.singles(1, array);
	this.twos = this.singles(2, array);
	this.threes = this.singles(3, array);
	this.fours = this.singles(4, array);
	this.fives = this.singles(5, array);
	this.sixes = this.singles(6, array);

	this.yahtzee = array.reduce(function(a, b) {
		if (a === b) return a;

		return 0;
	}) === array[0] ? 50 : 0;


	this.pairs = array.sort(function(a, b) {
		return b - a;
	}).filter(function(c) {
		return array.filter(function(d) {
			return d == c;
		}).length > 1
	}).concat([0])[0] * 2;

	var seen = {};
	var seensecond = 0;
	var hash = {};

	this.twoPairs = array.filter(function(c) {
		if (c in hash) {
			delete hash[c];
			return true;
		}
		hash[c] = true;
		return false;
	}).concat([0]).reduce(function (a, b) {
		return a + b;
	}) * 2;

	this.threeOfAKind =  array.sort(function(a, b) {
		return b - a;
	}).filter(function(c) {
		return array.filter(function(d) {
			return d == c;
		}).length > 2
	}).concat([0])[0] * 3;


	this.fourOfAKind =  array.sort(function(a, b) {
		return b - a;
	}).filter(function(c) {
		return array.filter(function(d) {
			return d == c;
		}).length > 3
	}).concat([0])[0] * 4;

	this.smallStraight = (this.chance === 15 &&
			this.sixes == 0 &&
			this.pairs == 0) ? this.chance : 0;

	this.largeStraight = (this.chance === 20 &&
			this.ones == 0 &&
			this.pairs == 0) ? this.chance : 0;

	this.fullHouse = (this.twoPairs > 0 &&
			this.threeOfAKind > 0) ? this.chance : 0;

}

module.exports = Yahtzee;