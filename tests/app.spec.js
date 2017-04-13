'use strict';

var expect = require('chai').expect;
var app = require ('../app/app');

describe('findMax', function ()
{
    describe('find maximum', function ()
    {
        it('all elements are numbers', function()
        {
            expect(app.findMax([1,2,3,4])).to.eql(true);
        });
        it('not all elements are numbers', function()
        {
            expect(app.findMax([1,2,3,"lol"])).to.eql(false);
        });
    })

})