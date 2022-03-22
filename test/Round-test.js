const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', () => {
  const card1 = {
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  }
  const card2 = { "id": 2,
    "question": "What is a comma-separated list of related values?",
    "answers": ["array", "object", "function"],
    "correctAnswer": "array"
  }
  const round = new Round([card1, card2]);

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should have a returnCurrentCard method that returns the first card in the deck', () => {
    const returnCurrentCard = round.returnCurrentCard();
    expect(returnCurrentCard).to.equal(card1);
  })

  it('should update turn count with takeTurn method', () => {
    const takeTurn = round.takeTurn();
    expect(takeTurn).to.

  })

  it('should evaluate guesses with takeTurn method', () => {
    const takeTurn = round.takeTurn();
    expect(takeTurn).to.

  })

  it('should give feedback with takeTurn method', () => {
    const takeTurn = round.takeTurn();
    expect(takeTurn).to.

  })

  it('should stores ids of incorrect guesses with takeTurn method', () => {
    const takeTurn = round.takeTurn();
    expect(takeTurn).to.

  })
});

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//
// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correct
