var expect = require('chai').expect;
var app = require('../app/app');


it('should find min in array',function () {
    expect(app.findMin([5, 0, 6])).to.eql(0);
    expect(app.findMin([5, 0, 'a', 6])).to.eql(false);
})