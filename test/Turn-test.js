const assert = require('chai').assert;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Turn', function() {
  let card;
  let turn;
  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should take a guess', function() {
    assert.equal(turn.guess, 'object')
  });

  it('should take a Card', function() {
    assert.equal(turn.card, card);
  });

  it('should return the guess', function() {
    let myGuess = turn.returnGuess();

    assert.equal(myGuess, 'object');
  });

  it('should return the Card', function() {
    let myCard = turn.returnCard();

    assert.equal(myCard, card);
    assert.typeOf(myCard, 'object');
  });

  it('should evaluate the guess', function() {
    let myGuess = turn.evaluateGuess();

    assert.equal(myGuess, true);
  });

  it('should tell whether the guess is correct', function() {
    turn.guess = "array";
    let myFeedback = turn.giveFeedback();

    assert.equal(myFeedback, 'incorrect!');
  });
})
