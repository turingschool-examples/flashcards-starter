const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should receive a guess from the user', function() {
    const turn = new Turn('User guess');
    expect(turn.guess).to.equal('User guess');
  });

  it('should receive the current card in play', function() {
    const turn = new Turn('User guess', card);
    expect(turn.card).to.equal(card);
  });

});
