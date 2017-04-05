var expect = require('chai').expect;
var app = require('../app/app');

describe('find maximum of array', function ()
{
    describe('when array is not empty and data are correct', function ()
    {
        it('should return correct value', function ()
        {
            expect(app.findMax([1, 2, 3, 4, -5 ])).to.eql(4);
        });
    });
    describe('when parameters are incorrect', function ()
    {
        it('should return false', function ()
        {
            expect(app.findMax(['ala', 'ma', 'kota'])).to.eql(false);
        });
    });
    describe('when empty parameters', function ()
    {
        it('should return false', function ()
        {
            expect(app.findMax([])).to.eql(false);
        });
    });
});