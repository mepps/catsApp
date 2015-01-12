var should = require("should");
var Cat = require('../../../app/models/cat');
describe('Cat', function() {
	it('should return image html', function() {
	var cat = new Cat({});
	cat.should.be.type('string');
});
});