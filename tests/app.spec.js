'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('isprime', function () {
    it('prime number is prime', function () {
        expect(app.isPrime(3)).to.eql(true);
    });
    it('prime number is not prime or is character', function () {
        expect(app.isPrime(4)).to.eql(false);
        expect(app.isPrime('o')).to.eql(false);
    });
});


describe('areatrapezium', function () {
    it('should return area trapezium good', function () {
            expect(app.areaOfTrapezoid(5, 3, 6)).to.eql( 24);
    });
    it('should return false,if parameters are negative', function () {
            expect(app.areaOfTrapezoid(5, -3, 6)).to.eql(false);
    });
});