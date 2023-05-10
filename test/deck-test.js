const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('create deck', function() {
  let card1;
  let card2;
  let card3;
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
      });
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });
  it('should create a deck with an array of card objects', function() {
    const deck = createDeck([card1, card2, card3]);
    expect(deck).to.deep.equal([card1, card2, card3]);
  });
});

describe('count deck', function() {
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
    expect(countCards).to.be.a('function');
  });
  it('should count how many cards are in a deck', function() {
    deckCount = countCards(deck)
    expect(deckCount).to.equal(3)
  });
});


