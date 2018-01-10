var chai = require('chai');
var expect = chai.expect;

describe('homepage', function(){
  it('Hello world', function(done) {
    browser
      .url('http://localhost:5000')
      expect(browser.getText('body')).to.equal("Hello world")
      browser.call(done);
  });

  it('Does not equal hello world', function(done) {
    browser
      .url('http://localhost:5000')
      expect(browser.getText('body')).to.not.equal("Hello")
      browser.call(done);
  });
});
