'use strict';

var expect = require('chai').expect;
var app = require('../app/app');



describe('app.js', function ()
{
    describe('isPrime', function ()
    {
        it('should return true', function ()
        {
            expect(app.isPrime(5)).to.eql(true);
        });
        it('should return false', function ()
        {
            expect(app.isPrime(4)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.isPrime('h')).to.eql(false);
        });

    });

    describe('areaOfTrapezoid', function ()
    {
        it('should return true', function ()
        {
            expect(app.areaOfTrapezoid(2,2,3)).to.eql(6);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid(-4,2,2)).to.eql(false);
        });
        it('should return false', function ()
        {
            expect(app.areaOfTrapezoid('h',3,5)).to.eql(false);
        });

    });





});