const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;
  beforeEach( () => {
    card1 = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });

    card2 = new Card({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });

    card3 = new Card({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });

    deck = new Deck([card1, card2,  card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  });

  it('should return the current card', () => {

    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should increment turns taken', () => {
    round.takeTurn('object');

    expect(round.turns).to.equal(1)
  });

  it('should update current card', () => {
    round.takeTurn('object');
    round.takeTurn('object');
    expect(round.currentCard.id).to.equal(2)
  });

  it('should add incorrect guesses to the array', () => {
    round.takeTurn('array');

    expect(round.incorrectGuesses).to.eql([1]);
  });

  it('should provide feedback for guess', () => {
    expect(round.takeTurn('array')).to.equal('Incorrect!')
  });

  it('should return the percentage of correct guesses', () => {
    round.takeTurn('object');
    round.takeTurn('string');
    round.takeTurn('mutator method');

    expect(round.calculatePercentCorrect()).to.equal(67)
  });

  it('should tell the user the round is over', () => {
    round.takeTurn('object');
    round.takeTurn('string');
    round.takeTurn('mutator method');

    expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!');
  });

});