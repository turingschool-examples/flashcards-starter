const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Card');
describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });
});
