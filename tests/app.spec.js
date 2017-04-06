var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime', function ()
{
    describe('Parameter is not prime number', function ()
    {
        it('return false', function ()
        {
            expect(app.isPrime(-7)).to.eql(false);
        });
    });

    describe('Parameter is prime number', function ()
    {
        it('return true', function ()
        {
            expect(app.isPrime(2)).to.eql(true);
        });
    });
});

describe('calculate areaOfTrapezoid' , function ()
{
    describe('Negative parameters', function ()
        {
            it('return false', function ()
            {
                expect(app.areaOfTrapezoid(-1, 3, 7)).to.eql(false);
                expect(app.areaOfTrapezoid(1, -3, 7)).to.eql(false);
                expect(app.areaOfTrapezoid(1, 3, -7)).to.eql(false);
                expect(app.areaOfTrapezoid(-1, -3, 7)).to.eql(false);
                expect(app.areaOfTrapezoid(1, -3, -7)).to.eql(false);
                expect(app.areaOfTrapezoid(-1, -3, -7)).to.eql(false);
                expect(app.areaOfTrapezoid(-1, 3, -7)).to.eql(false);
            });
        });
    describe('Positive parameters', function ()
    {
        it('return true', function ()
        {
            expect(app.areaOfTrapezoid(1, 3, 7)).to.eql(14);
        });
    });

});