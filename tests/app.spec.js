'use strict';

var expect = require('chai').expect;
var app = require('../app/app');
describe('findMin', function (){
    it("check if actual minimum is returned", function (){
        expect(app.findMin([3,1,5,8,7])).to.eql(1);
    });

    it("checking if it returns false for array with NaN", function (){
        expect(app.findMin([1,4,"c",6])).to.eql(false);
    });
});