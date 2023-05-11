const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck');
const {createRound} = require('../src/round');

describe('rounds', function () {
  it('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it('should create a round object with a deck', function() {
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.deck).to.be.deep.equal([card1, card2, card3]);
  });

  it('should include a current card that is equal to the first card in the deck', function() {
    const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    expect(round.currentCard).to.be.deep.equal({
      id: 1,
      question: "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    });
  });
});