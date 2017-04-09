var expect = require('chai').expect;
var app = require('../app/app');

describe('tests on develop branch', function () {


    it('should check if it is a positve numbers', function () {
        expect(app.areaOfTrapezoid(10, -5, 3)).to.eql(false);
    });


    it('should check if it is a prime number', function () {
        expect(app.isPrime(13)).to.eql(true);
    })
});
