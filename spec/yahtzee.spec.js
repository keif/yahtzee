var Yahtzee = require('../yahtzee');

describe('Yahtzee', function () {
	it('scores a small straight', function() {
		var rollArr = [1,2,3,4,5];

		var roll = Yahtzee.roll(rollArr);

		expect(roll.chance).toEqual(15);
		expect(roll.yahtzee).toEqual(0);

		expect(roll.ones).toEqual(1);
		expect(roll.twos).toEqual(2);
		expect(roll.threes).toEqual(3);
		expect(roll.fours).toEqual(4);
		expect(roll.fives).toEqual(5);
		expect(roll.sixes).toEqual(0);

		expect(roll.pairs).toEqual(0);

		expect(roll.twoPairs).toEqual(0);

		expect(roll.threeOfAKind).toEqual(0);

		expect(roll.fourOfAKind).toEqual(0);

		expect(roll.smallStraight).toEqual(15);

		expect(roll.largeStraight).toEqual(0);

		expect(roll.fullHouse).toEqual(0);

		expect(Yahtzee.roll([1,1,3,3,6]).chance).toEqual(14);

		expect(Yahtzee.roll([4,5,5,6,1]).chance).toEqual(21);

		expect(Yahtzee.roll([1,1,1,1,1]).yahtzee).toEqual(50);

		expect(Yahtzee.roll([1,1,1,2,1]).yahtzee).toEqual(0);

		expect(Yahtzee.roll([1,1,2,4,4]).fours).toEqual(8);

		expect(Yahtzee.roll([2,3,2,5,1]).twos).toEqual(4);

		expect(Yahtzee.roll([3,3,3,4,5]).ones).toEqual(0);

		expect(Yahtzee.roll([3,3,3,4,4]).pairs).toEqual(8);

		expect(Yahtzee.roll([1,1,6,2,6]).pairs).toEqual(12);

		expect(Yahtzee.roll([3,3,3,4,1]).pairs).toEqual(6);

		expect(Yahtzee.roll([3,3,3,3,1]).pairs).toEqual(6);


		expect(Yahtzee.roll([1,1,2,3,3]).twoPairs).toEqual(8);
		expect(Yahtzee.roll([1,1,2,2,2]).twoPairs).toEqual(6);
		expect(Yahtzee.roll([1,2,2,2,2]).twoPairs).toEqual(8);
		expect(Yahtzee.roll([2,2,2,2,2]).twoPairs).toEqual(8);

		expect(Yahtzee.roll([3,3,3,4,5]).threeOfAKind).toEqual(9);
		expect(Yahtzee.roll([3,3,4,5,6]).threeOfAKind).toEqual(0);
		expect(Yahtzee.roll([3,3,3,3,1]).threeOfAKind).toEqual(9);

		expect(Yahtzee.roll([2,2,2,2,5]).fourOfAKind).toEqual(8);
		expect(Yahtzee.roll([2,2,2,5,5]).fourOfAKind).toEqual(0);
		expect(Yahtzee.roll([2,2,2,2,2]).fourOfAKind).toEqual(8);

		expect(Yahtzee.roll([1,2,3,4,5]).smallStraight).toEqual(15);

		expect(Yahtzee.roll([2,3,4,5,6]).largeStraight).toEqual(20);

		expect(Yahtzee.roll([1,1,2,2,2]).fullHouse).toEqual(8);
		expect(Yahtzee.roll([2,2,3,3,4]).fullHouse).toEqual(0);
		expect(Yahtzee.roll([4,4,4,4,4]).fullHouse).toEqual(20);
	});


});