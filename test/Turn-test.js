const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  it('should be instantiated with two arguments', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.deep.equal(card);
  })

  it('should be able to display a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('array');
  });
})