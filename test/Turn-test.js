const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a user\'s guess', function() {
    const turn = new Turn('boolean');
    expect(turn.userGuess).to.equal('boolean');
  });

  it('should store a card', function() {
    // add test
  });

});
