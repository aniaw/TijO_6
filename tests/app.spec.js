'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('areatrapezium', function ()
{
    describe('number positive area trapezium', function ()
    {
        it('should return area trapezium bad', function ()
        {
            expect(app.areaOfTrapezoid(5, 3, 6)).to.eql( 33);
        });
        it('should return area trapezium good', function ()
        {
            expect(app.areaOfTrapezoid(5, 3, 6)).to.eql( 24);
        });
    });

});


describe('isprime', function ()
{
    describe('prime number', function ()
    {
        it('prime number good', function ()
        {
            expect(app.isPrime(2)).to.eql( true);
        });
        it('prime number bad', function ()
        {
            expect(app.isPrime(4)).to.eql( true);
        });
    });

});