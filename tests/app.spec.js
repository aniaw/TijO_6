'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime', function () {

    describe('When parameter is not a number', function () {
        it('should return false', function () {
            expect(app.isPrime('a')).to.eql(false);
            expect(app.isPrime('eleven')).to.eql(false);
        });
    });

    describe('When parameter is correct', function () {

        describe('and is a prime number', function () {
            it('should return true', function () {
                expect(app.isPrime(2)).to.eql(true);
                expect(app.isPrime(97)).to.eql(true);
            });
        });

        describe('and isn\'t a prime number', function () {
            it('should return false', function () {
                expect(app.isPrime(-7)).to.eql(false);
                expect(app.isPrime(0)).to.eql(false);
                expect(app.isPrime(1)).to.eql(false);
                expect(app.isPrime(14)).to.eql(false);
                expect(app.isPrime(0.14)).to.eql(false);
            });
        });
    });

});



describe('areaOfTrapezoid', function () {

    describe('When one or more parameters are negative', function () {
        it('should return false', function () {
            expect(app.areaOfTrapezoid(-0.5, 1, 2)).to.eql(false);
            expect(app.areaOfTrapezoid(-8, -15, 0.9)).to.eql(false);
            expect(app.areaOfTrapezoid(-0.20, -5, -40)).to.eql(false);
            expect(app.areaOfTrapezoid(5, 1, -2)).to.eql(false);
        });
    });

    describe('When one or more parameters are not numbers', function () {
        it('should return false', function () {
            expect(app.areaOfTrapezoid(2, 30, 'aaa')).to.eql(false);
            expect(app.areaOfTrapezoid('zzz', 30, 'aaa')).to.eql(false);
            expect(app.areaOfTrapezoid('zzz', 'vvv', 'aaa')).to.eql(false);
        });
    });

    describe('When parameters are correct', function () {
        it('should return area of the trapezoid', function () {
            expect(app.areaOfTrapezoid(2, 30, 5)).to.eql(80);
            expect(app.areaOfTrapezoid(70, 30, 100)).to.eql(5000);
            expect(app.areaOfTrapezoid(0.2, 0.256, 100.5)).to.eql(22.914);
        });
    });

});