var expect = require('chai').expect;
var app = require('../app/app');

describe('findMax()', function ()
{
    it('should return 4', function ()
    {
        expect(app.findMax([1,2,3,4])).to.eql(4);
    });
    it('should return 3', function ()
    {
        expect(app.findMax([3,4,5,-4])).to.eql(5);
    });
    it('is NaN', function ()
    {
        expect(app.findMax([3,4,"",-4])).to.eql(false);
    });
});
