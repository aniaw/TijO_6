'use strict';
var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime', function ()
{
    describe('when prime parameters is prime', function ()
    {
        it('should return true', function ()
        {
            expect(app.isPrime(3)).to.eql(true);
        });
    });

    describe('when prime parameters is not prime', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(4)).to.eql(false);
        });
    });

    describe('when prime parameters is negative', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime(-4)).to.eql(false);
        });
    });

    describe('when prime parameters is not number', function ()
    {
        it('should return false', function ()
        {
            expect(app.isPrime('a')).to.eql(false);
        });
    });

    describe('when prime parameters is not integer', function ()
    {
        it('should return true', function ()
        {
            expect(app.isPrime(3.0)).to.eql(true);
        });
    });
});

describe('areaOfTrapezoid', function ()
{
    describe('when prime parameters is correct', function ()
    {
        it('should return area', function ()
        {
            expect(app.areaOfTrapezoid(2,3,4)).to.eql(10);
        });
    });

    describe('when area parameters is not number', function ()
    {
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,3,"a")).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,"a",4)).to.eql(false);
        });

        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid("a",3,4)).to.eql(false);

        });
    });
    describe('when area parameters is negative', function ()
    {

        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(-2,3,4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,-3,4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(2,3,-4)).to.eql(false);
        });
    });

});