var expect = require('chai').expect;
var app = require('../app/app');

describe('findMijn()', function ()
{
    it('should return 1', function ()
    {
        expect(app.findMin([1,2,3,4])).to.eql(1);
    });
    it('should return -4', function ()
    {
        expect(app.findMin([3,4,5,-4])).to.eql(-4);
    });
    it('is NaN', function ()
    {
        expect(app.findMin([3,4,"",-4])).to.eql(NaN);
    });
});