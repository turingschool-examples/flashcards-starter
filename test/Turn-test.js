const assert = require('chai').assert;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', function() {
  let card;
  let turn;
  let myGuess;
  let myCard;
  let myFeedback;
  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    assert.isFunction(Turn);
  })

  it('should be an instance of Turn', function() {
    assert.instanceOf(turn, Turn);
  })

  it('should take a guess', function() {
    assert.equal(turn.guess, 'object')
  });

  it('should take a Card', function() {
    assert.equal(turn.card, card);
    assert.instanceOf(turn.card, Card)
  });

  it('should return the guess', function() {
    myGuess = turn.returnGuess();

    assert.equal(myGuess, 'object');
  });

  it('should return the Card', function() {
    myCard = turn.returnCard();

    assert.equal(myCard, card);
    assert.typeOf(myCard, 'object');
  });

  it('should evaluate a correct guess as true', function() {
    myGuess = turn.evaluateGuess();

    assert.equal(myGuess, true);
  });

  it('should evaluate an incorrect guess as false', function() {
    turn.guess = "array";
    myGuess = turn.evaluateGuess();

    assert.equal(myGuess, false);
  });

  it('should tell when the guess is correct', function() {
    myFeedback = turn.giveFeedback();

    assert.equal(myFeedback, 'correct!');
  });

  it('should tell when the guess is incorrect', function() {
    turn.guess = "array";
    myFeedback = turn.giveFeedback();

    assert.equal(myFeedback, 'incorrect!');
  });
})
