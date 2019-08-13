const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {
  
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be instantiated with two arguments', function() {
    const turn = new Turn(1,2);
    expect(turn).to.deep.equal(1,2)
  }); 
});