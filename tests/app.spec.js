var expect = require('chai').expect;
var app = require('../app/app');
describe('findMax', function ()
{
    it("check if actual maximum is returned", function ()
    {
        expect(app.findMax([3,1,5,8,7])).to.eql(8);
    });

    it("checking if it returns false for array with NaN", function () {
        expect(app.findMax([1,4,"c",6])).to.eql(false);
    });
});