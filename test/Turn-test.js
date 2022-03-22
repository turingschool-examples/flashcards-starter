const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn'), function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(card).to.be.an.instanceof(Turn);
  });

  it.skip('should accept a user\'s guess', function() {
    const turn = new Turn('This is my guess');
    expect(turn.userGuess).to.equal('This is my guess');
  });
}
