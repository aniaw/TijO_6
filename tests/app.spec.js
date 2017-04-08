var expect = require('chai').expect;
var app = require('../app/app');

it('When all the elements of the array are numbers, should return min element', function()
{
    expect(app.findMin([2, 3, 0, 4])).to.eql(0);
});
it('When at least one of the array elements is not a number, should return false', function()
{
    expect(app.findMin([2, 3, 'a', 4])).to.eql(false);
});


