const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  beforeEach(function() {
    return card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  beforeEach(function() {
    return turn = new Turn('incorrect guess', card)
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should have a guess property', function() {
    expect(turn.userGuess).to.equal('incorrect guess')
  });

  it('should have a card property', function() {
    expect(turn.currentCard).to.equal(card);
  });


});
