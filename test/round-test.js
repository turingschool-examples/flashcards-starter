const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck');
const {createRound, takeTurn} = require('../src/round');

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
    expect(round.turns).to.be.equal(0);
  });

  it('should have a incorrect guesses property that starts with an empty array', function() {
    expect(round.incorrectGuesses).to.be.deep.equal([]);
  });
});

describe('take turns', function() {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  });

  it('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it('should update the turn count everytime', function() {
    takeTurn('object', round);
    takeTurn('array', round);
    takeTurn('mutator method', round);

    expect(round.turns).to.be.equal(3);
  });

  it('should be able to evaluate if the guess is correct', function() {
    guessFeedback = takeTurn('object', round);

    expect(guessFeedback).to.be.equal('correct!');
  });

  it('should be able to evaluate if the guess is incorrect', function() {
    guessFeedback = takeTurn('function', round);

    expect(guessFeedback).to.be.equal('incorrect!');
  });

  it('should be able to move onto the next card after a guess', function() {
    expect(round.currentCard).to.be.deep.equal(card1);

    takeTurn('object', round);

    expect(round.currentCard).to.be.deep.equal(card2);
  });

  it('should be able to store the cards guessed incorrectly into incorrectGuesses', function() {
    takeTurn('function', round);
    takeTurn('object', round);

    expect(round.incorrectGuesses).to.be.deep.equal([1, 2]);
  });
});

describe('calculate percentage', function() {
  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);

    takeTurn('object', round);
    takeTurn('function', round);
  });

  it('should be a function', function() {
    expect(calculatePercentageCorrect).to.be.a('function');
  });

  it('should be able to calculate the percentage of correct guesses', function() {
    correctPercentage = calculatePercentageCorrect(round);

    expect(correctPercentage).to.be.equal(50);
  });
});