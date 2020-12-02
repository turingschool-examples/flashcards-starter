const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  beforeEach(function() {
    return card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  beforeEach(function() {
    return turn = new Turn('incorrect guess', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should store a guess', function() {
    expect(turn.userGuess).to.equal('incorrect guess');
  });

  it('should store a card', function() {
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the guess put in by the user', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('incorrect guess');
  });

  it('should return the current card being played', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it('should compare the users guess to the correct answer on card', function() {
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);
    turn = new Turn('object', card);
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give the user feedback based on your answer', function() {
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');
    turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!');
  });
});
