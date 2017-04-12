'use strict';

var expect = require('chai').expect;
var app = require ('../app/app');

describe('findMin', function ()
{
    describe('find minimum', function ()
    {
        it('all elements are numbers', function()
        {
            expect(app.findMin([1,2,3,4])).to.eql(true);
        });
        it('not all elements are numbers', function()
        {
            expect(app.findMin([1,2,3,"lol"])).to.eql(false);
        });
    })

})