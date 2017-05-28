var expect = require('chai').expect;
var app = require('../app/app');

describe('testing()', function ()
{
  it('should return true', function ()
  {
    expect(app.isPrime(13)).to.be.true;
  });
});

describe('when paraments are negative numbers', function ()
{
  it('should return false', function ()
  {
    expect(app.areaOfTrapezoid(-5,2,3)).to.eql(false);
  });
});
describe('calcualte areaOfTrapezoid', function ()
{
  it('should calculate areaOfTrapezoid', function ()
  {
    expect(app.areaOfTrapezoid(2,3,2)).to.eql(5);
  });
});
