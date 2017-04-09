var expect = require('chai').expect;
var app = require('../app/app');

it('should check if number is prime',function()
{
    expect(app.isPrime(5)).to.eql(true);
    expect(app.isPrime(6)).to.eql(false);
})

it('should calculate area of trapezoid',function () {
    expect(app.areaOfTrapezoid(2,2,3)).to.eql(6);
    expect(app.areaOfTrapezoid(-1,2,5)).to.eql(false);
})
