const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
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

  // should have 2 arguments
    // string that represents a user's guess to the question
    // and a card in play

  // should have method that returns the guess
  it(("it should return the guess"), () => {
    const cardInPlay = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = cardInPlay.answers[0];
    const currentTurn = new Turn(guess, cardInPlay);

    assert.equal(currentTurn.returnGuess(), "object")
  });  // should have method that returns the card

  it(("it should return the card"), () => {
    const cardInPlay = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = cardInPlay.answers[0];

    const currentTurn = new Turn(guess, cardInPlay);

    assert.equal(currentTurn.returnCard(), cardInPlay);
  });

  // should have a method evaluateGuess that returns a boolean 
  it(("evaluateGuess should return boolean"), () => {
    const cardInPlay = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let currentGuess = cardInPlay.answers[0];

    const currentTurn = new Turn(currentGuess, cardInPlay);

    assert.isBoolean(currentTurn.evaluateGuess(), "the guess has been evaluated");

    let guessTwo = cardInPlay.answers[1];

    const nextTurn = new Turn(guessTwo, cardInPlay);

    assert.isBoolean(nextTurn.evaluateGuess(), "the guess has been evaluated");
  });

  // have method giveFeedback that returns ether incorrect or correct
    // based on wether the guess is correct or not.
  it(("giveFeedback on wether the guess is correct or not"), () => {
    const cardInPlay = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let guess = cardInPlay.answers[0];

    const currentTurn = new Turn(guess, cardInPlay);

    assert.isTrue(currentTurn.evaluateGuess(), "correct");

    let guessTwo = cardInPlay.answers[1];

    const nextTurn = new Turn(guessTwo, cardInPlay);

    assert.isFalse(nextTurn.evaluateGuess(), "incorrect");
  });
})