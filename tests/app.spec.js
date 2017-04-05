'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('calculate area of trapezoid', function ()
{
    describe('when parameters are negative numbers', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(-1, -1, -3)).to.eql(false);
            expect(app.areaOfTrapezoid(-1, 1, -3)).to.eql(false);
            expect(app.areaOfTrapezoid(-1, 1, 3)).to.eql(false);
            expect(app.areaOfTrapezoid(1, -1, -3)).to.eql(false);
            expect(app.areaOfTrapezoid(1, 1, -3)).to.eql(false);
        });
    });
    describe('when parameters are positive numbers', function ()
    {
        it('should return area', function ()
        {
            expect(app.areaOfTrapezoid(1, 2, 2)).to.eql(3);
        });
    });
    describe('when parameters are not numbers', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid("ala", -1, "basia")).to.eql(false);
        });
    });

});

describe('isPrime check', function ()
{
    describe('when parameters are negative numbers', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(-3)).to.eql(false);
        });
    });
    describe('when parameters are positive and is prime number', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(31)).to.eql(true);
        });
    });
    describe('when parameters are positive and is not a prime number', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(32)).to.eql(false);
        });
    });

    describe('when parameters are not number', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime('ala')).to.eql(false);
        });
    });
});