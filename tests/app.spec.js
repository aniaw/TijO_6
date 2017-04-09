'use strict';
var expect = require('chai').expect;
var app = require('../app/app');

describe('findMin of an array', function()
{
    describe('when array is not empty and the parameters are correct', function () {
        it("should find the min value", function()
        {
            expect(app.findMin([4,2,3,1])).to.eql(1);
        });
    });
    describe('when array is not empty and the parameters are incorrect', function () {
        it("should return false", function () {
            expect(app.findMin([4,'b',3,1])).to.eql(false);
        });
    });
});