var request = require('supertest');

console.log('spin up');

describe('Create a string calculator with a method int Add(string)', function (done) {
	it('sends an empty string and adds it', function(done) {
		var str = '';
		request(server)
			.get('/calc/' + str)
			.end( function(err, dog) {
				var json = JSON.parse(dog.res.text);
				// response from our service
				expect(dog.res.statusCode).toBe(200);

				// expect 0
				expect(json.result).toBe(0);

				done(err);
			});
	});


});