var should = require("should");
var Fact = require('../../../app/models/fact');
describe('Cat', function() {
	it('should return fact with key facts', function() {
	var fact = new Fact({});
	fact.should.have.property('facts');
});
});