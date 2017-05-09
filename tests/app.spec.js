'use strict';

var expect = require('chai').expect;
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