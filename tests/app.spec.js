'use strict';

var expect = require('chai').expect;

var app = require ('../app/app');


describe('findMax', function () {
    it('All elements are numbers', function() {
        expect(app.findMax([1,2,3,4,5])).to.eql(5);
        expect(app.findMax([1,5,6,4,2])).to.eql(6);
    });
    it('Some chars', function() {
        expect(app.findMax([1,2,3,"string"])).to.eql(false);
    });
})

var app = require('../app/app');

    describe('findMax', function ()
    {
        it('should return false', function(){
                expect(app.findMax([1,'a',3,4])).to.eql(false);
            });

        it('should return correct', function ()
        {
            expect(app.findMax([1,2,3,4])).to.eql(4);
        });
    });

