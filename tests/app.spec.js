var expect = require('chai').expect;
var app = require('../app/app');

it('should find max in array',function()
{
    expect(app.findMax([1,6,3,2])).to.eql(6);
    expect(app.findMax([1,6,'s',4])).to.eql(false);
})