const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck');
const {createRound} = require('../src/round');

describe('rounds', function () {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round object with a deck', function() {
    expect(round.deck).to.be.deep.equal([card1, card2, card3]);
  });

  it('should include a current card that is equal to the first card in the deck', function() {
    expect(round.currentCard).to.be.deep.equal({
      id: 1,
      question: "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    });
  });

  it('should have a turn key with a value of 0', function() {
    expect(round.turn).to.be.equal(0);
  });

  it('should have a incorrect guesses property that starts with an empty array', function() {
    expect(round.incorrectGuesses).to.be.deep.equal([]);
  });
});