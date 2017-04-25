'use strict';

    var expect = require('chai').expect;
var app = require('../app/app');

    describe('areatrapezium', function ()
        {
            describe('number positive area trapezium', function ()
                {
                    it('should return area trapezium good', function ()
                        {
                            expect(app.areaOfTrapezoid(5, 3, 6)).to.eql( 24);
        });
    });

        describe('number negative area trapezium', function ()
            {
                it('should return fail area trapezium because one parameters is negative', function ()
                    {
                        expect(app.areaOfTrapezoid(5, -3, 6)).to.eql(24);
       });
   });

    });


        +describe('isprime', function ()
            {
               describe('prime number', function ()
                    {
                        it('prime number is prime', function ()
                           {
                                expect(app.isPrime(2)).to.eql( true);
       });
        it('prime number is fail because. one parameters is character', function ()
            {
                expect(app.isPrime('o')).to.eql( false);
        });
       it('prime number is not prime ', function ()
            {
                expect(app.isPrime(4)).to.eql( false);
        });
   });

    });