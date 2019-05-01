const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Game');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Card).to.be.a('function');
  });
  
});