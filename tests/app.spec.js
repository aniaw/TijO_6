
var expect = require('chai').expect;
var app = require('../app/app');

describe('when one of parameters are string', function() {
    it('should return false', function () {
        expect(app.findMin([1, 2, 3, 'a'])).to.eql(false);

    });
});

describe('when all of parameters are correct', function() {
it ('should return Min value',function(){
    expect(app.findMin([1,2,3])).to.eql(1);
    });
});
