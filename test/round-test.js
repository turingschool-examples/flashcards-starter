const chai = require('chai');
const expect = chai.expect;

const { round } = require('../src/round');
const { createDeck} = require('../src/deck');
const { createCard } = require('../src/card');

describe('create round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(function() {
    card1 = createCard(
      1, 
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 
      'object');
    card2 = createCard(
      2, 
      'What is a comma-separated list of related values?', 
      ['array', 'object', 'function'], 
      'array');
    card3 = createCard(
      3, 
      'What type of prototype method directly modifies the existing array?', 
      ['mutator method', 'accessor method', 'iteration method'], 
      'mutator method');  
      deck = createDeck([card1, card2, card3]);
      });
  it('should be a function', function() {
    expect(round).to.be.a('function');
  });
  it('should have deck property, holding a deck object', function() {
    const round1 = round(deck)
    expect(round1.deck).to.deep.equal([card1, card2, card3])
  });
  it('should begin with currentCard property as first card in deck', function() {
    const round1 = round(deck)
    expect(round1.currentCard).to.deep.equal(card1)
  })
  it('should have a turn property starting at 0', function() {
    const round1 = round(deck)
    expect(round1.turns).to.equal(0)
  })
  it('should have an empty array property that stores incorrect guesses', function() {
    const round1 = round(deck)
    expect(round1.incorrectGuesses).to.deep.equal([])
  })
});