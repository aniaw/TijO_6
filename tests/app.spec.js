'use strict';

var expect = require('chai').expect;
var app = require ('../app/app');

describe('Minimum', function ()
{
    describe('find min', function ()
    {
        it('all elements numbers', function()
        {
            expect(app.findMin([1,2,3,4])).to.eql(1);
        });
        it('one element or more is not number', function()
        {
            expect(app.findMin([1,2,3,"babuszka"])).to.eql(false);
        });
    })

});
