var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime', function ()
{
    it('should return true', function ()
    {
        expect(app.isPrime(2)).to.eql(true);
    });
    it('should return false', function ()
    {
        expect(app.isPrime(4)).to.eql(false);
    });

});

describe('areaOfTrapezoid', function ()
{
    it('should return true', function ()
    {
        expect(app.areaOfTrapezoid(1,2,3)).to.eql(4.5);
    });
    it('a < 0', function ()
    {
        expect(app.areaOfTrapezoid(-2,2,3)).to.eql(false);
    });
    it('b < 0', function ()
    {
        expect(app.areaOfTrapezoid(2,-2,3)).to.eql(false);
    });
    it('c < 0', function ()
    {
        expect(app.areaOfTrapezoid(2,2,-3)).to.eql(false);
    });

});