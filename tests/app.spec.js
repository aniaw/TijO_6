'use strict';
var expect = require('chai').expect;
var app = require('../app/app');

describe('findMax of an array', function()
{
    describe('when array is not empty and the parameters are correct', function () {
        it("should find the max value", function()
        {
            expect(app.findMax([4,2,3,1])).to.eql(4);
        });
    });
    describe('when array is not empty and the parameters are incorrect', function () {
        it("should return false", function () {
            expect(app.findMax([4,'b',3,1])).to.eql(false);
        });
    });
});