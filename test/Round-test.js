const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

let card1, card2, card3, deck, round;

describe("Round", () => {
  beforeEach(() => {
    (card1 = new Card({
      id: 1,
      question:
        "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    })),
      (card2 = new Card({
        id: 2,
        question: "What is a comma-separated list of related values?",
        answers: ["array", "object", "function"],
        correctAnswer: "array"
      })),
      (card3 = new Card({
        id: 3,
        question:
          "What type of prototype method directly modifies the existing array?",
        answers: ["mutator method", "accessor method", "iteration method"],
        correctAnswer: "mutator method"
      }));
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    turn = new Turn('object', deck[0])
  });

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard(deck)).to.equal(card1)
  });

  it('should update turn count', () => {
    round.takeTurn('object');
    expect(round.turn).to.equal(1);
    round.takeTurn("object");
    expect(round.turn).to.equal(2);
    round.takeTurn("object");
    expect(round.turn).to.equal(3);
  })

  it('should keep track of incorrect guesses', () => {
    round.takeTurn('array');
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should keep track of the next card', () => {
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([])
    round.takeTurn('array');
    expect(round.turn).to.equal(2);
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([3]);
    expect(round.turn).to.equal(3);
  });

  it('should return feedback after evaluating a guess', () => {
    expect(round.takeTurn('object')).to.equal('correct!')
  });

  it('should return the percentage of correct guesses', () => {

    round.takeTurn('object');
    round.takeTurn('object');
    round.takeTurn('object');

    expect(round.calculatePercentage()).to.equal(33);
  })

  it('should log an end game message', () => {

    round.takeTurn("object");
    round.takeTurn("object");
    round.takeTurn("object");

    round.calculatePercentage();

    round.endRound();
  })
});