'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('areaOfTrapezoid', function ()
{
    describe('number is positive ', function ()
    {
        it('should return area trapezium', function ()
        {
            expect(app.areaOfTrapezoid(2, 3, 2)).to.eql(5);
        });
    });

    describe('ones of numbers is  negative', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(5, -3, 6)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(5, 3, -6)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(-5, 3, 6)).to.eql(false);
        });
    });
    describe('when values is not number ', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid('text', 3,2)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(5, 'text',2)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(7, 3,'text')).to.eql(false);
        });
    });

});


describe('isPrime', function ()
{
    describe('when number is prime', function ()
    {
        it('should return true', function ()
        {
            expect(app.isPrime(2)).to.eql( true);
        });

    });
    describe('when number is not prime', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(6)).to.eql(false);
        });

    });
    describe('when values is not number ', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime("text")).to.eql(false);
        });

});
});