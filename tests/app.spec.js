var expect = require('chai').expect;
var app = require('../app/app');

it('should check if number is prime',function()
{
    expect(app.isPrime(5)).to.eql(true);
    expect(app.isPrime(6)).to.eql(false);
})

it('should return false when arg is not numeric or =< 0 ',function(){
    expect(app.isPrime(-1)).to.eql(false);
    expect(app.isPrime(0)).to.eql(false);
    expect(app.isPrime('s')).to.eql(false);

})

it('should calculate area of trapezoid',function () {
    expect(app.areaOfTrapezoid(2,2,3)).to.eql(6);
    expect(app.areaOfTrapezoid(3,5,5)).to.eql(20);
})
it('should return false when arg == 0',function(){
    expect(app.areaOfTrapezoid(-1,2,3)).to.eql(false);
    expect(app.areaOfTrapezoid(1,-2,3)).to.eql(false);
    expect(app.areaOfTrapezoid(1,2,-3)).to.eql(false);
    expect(app.areaOfTrapezoid(-1,-2,-3)).to.eql(false);
    expect(app.areaOfTrapezoid(-1,-2,3)).to.eql(false);
    expect(app.areaOfTrapezoid(-1,2,-3)).to.eql(false);
    expect(app.areaOfTrapezoid(1,-2,-3)).to.eql(false);
})
it('should return fasle when arg is not numeric',function() {
    expect(app.areaOfTrapezoid('a',2,3)).to.eql(false);
    expect(app.areaOfTrapezoid(1,'a',3)).to.eql(false);
    expect(app.areaOfTrapezoid(1,2,'a')).to.eql(false);
    expect(app.areaOfTrapezoid('a','b','c')).to.eql(false);
})