'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('isPrime', function () {

    describe('When argument is ok', function () {
        describe('and is prime number', function () {
            it('should return true', function () {
                expect(app.isPrime(23)).to.eql(true);
            });
        });

        describe('and is not prime number', function () {
            it('should return false', function () {
                expect(app.isPrime(22)).to.eql(false);
            });
        });
    });

    describe('When argument is not number', function () {
        it('should return false', function () {
            expect(app.isPrime('x')).to.eql(false);
        });
    });

});



describe('areaOfTrapezoid', function () {

    describe('When arguments are ok', function () {
        it('should return area of trapezoid', function () {
            expect(app.areaOfTrapezoid(44, 33, 10)).to.eql(385);
        });
    });

    describe('When argument is negative', function () {
        it('should return false', function () {
            expect(app.areaOfTrapezoid(0, 10, -5)).to.eql(false);
        });
    });

    describe('When arguments are not numbers', function () {
        it('should return false', function () {
            expect(app.areaOfTrapezoid(88, 44, '55')).to.eql(false);
        });
    });

});