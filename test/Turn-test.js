const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  let card, turn;

  beforeEach(() => {
    card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    turn = new Turn('object', card)
  });

  it('should return the user guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.equal(card)
  })

  it('should return a boolean value indicating whether the user guess matches the correct answer', () => {
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should return a string of correct or incorrect depending on the return value of evaluateGuess', () => {
    expect(turn.giveFeedback()).to.equal('correct!');
  })
});