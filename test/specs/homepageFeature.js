var chai = require('chai');
var expect = chai.expect;

describe('homepage', function(){

  it('Hello world', function(done) {
    browser
      .url('http://localhost:5000')
      .getText('body', function(err, text) {
        expect(text).to.equal('Hello world')
      })
      // .call(done);
    });

});
