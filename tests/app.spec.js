var expect = require('chai').expect;
var app = require('../app/app');

it('When all elements of array are numbers, should return max element', function ()
{
    expect(app.findMax([5,7,11,2])).to.eql(11);
});

it('When one of array elements is not number, should return false', function ()
{
    expect(app.findMax([5,7,'a',2])).to.eql(false);
});