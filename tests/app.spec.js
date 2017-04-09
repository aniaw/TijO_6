'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime', function () {

    describe('When the parameter is not a number', function () {
        it('should return false', function () {
            expect(app.isPrime('asdf')).to.eql(false);
            expect(app.isPrime('dd')).to.eql(false);
            expect(app.isPrime('d')).to.eql(false);
        });
    });

    describe('When the parameter is a number', function () {

        describe('and its a prime number', function () {
            it('should return true', function () {
                expect(app.isPrime(5)).to.eql(true);
                expect(app.isPrime(7)).to.eql(true);
                expect(app.isPrime(2)).to.eql(true);
                expect(app.isPrime(947)).to.eql(true);
            });
        });

        describe('and its NOT a prime number', function () {
            it('should return false', function () {
                expect(app.isPrime(-32768)).to.eql(false);
                expect(app.isPrime(1)).to.eql(false);
                expect(app.isPrime(0)).to.eql(false);
                expect(app.isPrime(9)).to.eql(false);
                expect(app.isPrime(3.14)).to.eql(false);
                expect(app.isPrime(144)).to.eql(false);
            });
        });
    });
});


describe('areaOfTrapezoid', function () {

    describe('When at least one of the parameters are negative', function () {
        it('should return false', function () {
            expect(app.areaOfTrapezoid(-1, 1, 1)).to.eql(false);
            expect(app.areaOfTrapezoid(-2, -2, 2)).to.eql(false);
            expect(app.areaOfTrapezoid(-3, -3, -3)).to.eql(false);
        });
    });

    describe('When at least one of the parameters are NOT numbers', function () {
        it('should return false', function () {
            expect(app.areaOfTrapezoid('d', 2, 1)).to.eql(false);
            expect(app.areaOfTrapezoid('dd', 'dd', 1)).to.eql(false);
            expect(app.areaOfTrapezoid('dd', 'dd', 'dd')).to.eql(false);
        });
    });

    describe('When all the parameters are correct', function () {
        it('should return the area of trapezoid', function () {
            expect(app.areaOfTrapezoid(9, 7, 3)).to.eql(24);
            expect(app.areaOfTrapezoid(8, 6, 10)).to.eql(70);
            expect(app.areaOfTrapezoid(2, 4, 10)).to.eql(30);
        });
    });

});