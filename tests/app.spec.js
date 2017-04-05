var expect = require('chai').expect;
var app = require('../app/app');
describe('when paraments arent numbers', function())
it('should return false ', function(){
    expect(app.findMax([1, 2, 3, 'a'])).to.eql(false);
});
describe('when all paraments are correct',function())
it('should return min value', function () {
    expect(app.findMax([1, 2, 3])).to.eql(3);
});


