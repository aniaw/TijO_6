var expect = require('chai').expect;
var app = require('../app/app');

describe('test if input is prime number', function ()
{
    describe('when given number is a prime', function ()
    {
        it('should return correct value', function ()
        {
            expect(app.isPrime(7)).to.eql(true);
        });
    });
    describe('when given number is not a prime', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(4)).to.eql(false);
        });
    });
});

describe('calculate Trapezoid area', function ()
{
    describe('when sizes are correct', function ()
    {
        it('should return correct value', function ()
        {
            expect(app.areaOfTrapezoid(1, 4, 5)).to.eql(12.5);
        });
    });
    describe('when data is incorrect', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(1, 4, -5)).to.eql(false);
            expect(app.areaOfTrapezoid(1, -4, 5)).to.eql(false);
            expect(app.areaOfTrapezoid(-1, 4, 5)).to.eql(false);
        });
    });
});
