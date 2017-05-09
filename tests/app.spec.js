'use strict';
var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime checking', function ()
{
    describe('parameters are negative', function ()
    {
        it('return false', function ()
        {
            expect(app.isPrime(-1423413453434567686586534534546758598766574655475897596077678674564565)).to.eql(false);
        });
    });
    describe('parameters positive and is prime number', function ()
    {
        it('return true', function ()
        {
            expect(app.isPrime(7919)).to.eql(true);
        });
    });
    describe('parameters positive and is not a prime number', function ()
    {
        it('return false', function ()
        {
            expect(app.isPrime(8)).to.eql(false);
        });
    });
    describe(' parameters are not number', function ()
    {
        it('return false', function ()
        {
            expect(app.isPrime('babuszka')).to.eql(false);
        });
    });
});

describe('calculate area of trapezoid', function ()
{
    describe('parameters are negative numbers', function ()
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
            expect(app.areaOfTrapezoid(6, 7, 12)).to.eql(78);
        });
    });
    describe('when parameters are not numbers', function ()
    {
        it('return false', function ()
        {
            expect(app.areaOfTrapezoid("babuszka", -1, "dziadoszka")).to.eql(false);
        });
    });
});
