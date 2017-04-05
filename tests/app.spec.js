var expect = require('chai').expect;
var app = require('../app/app');

it('When all the elements of the array are numbers, should return max element', function ()
{
    expect(app.findMax([2,3,0,4])).to.eql(4);
});

it('When at last one of the array elements is not a number, should return false', function ()
{
    expect(app.findMax([2,3,'v',4])).to.eql(false);
});