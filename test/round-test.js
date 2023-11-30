const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, calculatePercentCorrect, endRound } = require('../src/round');

describe('round', function() {
    it('should start a round', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const cards = [card1, card2, card3];
    const deck = createDeck(cards);
    const round = createRound(deck);
    expect(round.deck).to.deep.equal(deck);
    expect(round.currentCardIndex).to.equal(0);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
    it('should calculate the percent correct', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);
      round.takeTurn('object');
      round.takeTurn('array');
      round.takeTurn('mutator method');
      const percentCorrect = calculatePercentCorrect(round);
      expect(percentCorrect).to.equal('100.00');
      });
    it('should end the round', function() {
      const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = createCard(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      const card3 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
      const cards = [card1, card2, card3];
      const deck = createDeck(cards);
      const round = createRound(deck);
      round.takeTurn('object');
      round.takeTurn('array');
      round.takeTurn('mutator method');
      const percentCorrect = calculatePercentCorrect(round);
      const end = endRound(round);
      expect(end).to.equal(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
      });
    });
  
  