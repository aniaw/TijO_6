var expect = require('chai').expect;
var app = require('../app/app');

describe('find maximum of array', function ()
{
    describe('when array is not empty and data are correct', function ()
    {
        it('should return correct value', function ()
        {
            expect(app.findMin([1, 2, 3, 4, -5 ])).to.eql(-5);
        });
    });
    describe('when parameters are incorrect', function ()
    {
        it('should return false', function ()
        {
            expect(app.findMin(['ala', 'ma', 'kota'])).to.eql(false);
        });
    });
    describe('when empty parameters', function ()
    {
        it('should return false', function ()
        {
            expect(app.findMin([])).to.eql(false);
        });
    });
});
