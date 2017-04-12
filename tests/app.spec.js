var expect = require('chai').expect;
var app = require('../app/app');
describe('isPrime', function () {
    it("check if it's a prime number", function () {
        expect(app.isPrime(7)).to.eql(true);
    });

    it("checking if it returns false with value with NaN", function () {
        expect(app.isPrime('c')).to.eql(false);
    });
});
describe('areaOfTrapezoid', function () {
    it("check if actual area of trapezoid is returned", function () {
        expect(app.areaOfTrapezoid(1, 1, 4)).to.eql(4);
    });

    it("checking if it returns false with values with NaN", function () {
        expect(app.areaOfTrapezoid(1, 1, 'c')).to.eql(false);
    });
});