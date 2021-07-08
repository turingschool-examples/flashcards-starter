const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;

  before(() => {
    //-----------test set-up
    card1 = new Card(
      1, 
      'What allows you to define a set of related information using key-value pairs?', 
      ['object', 'array', 'function'], 
      'object'
    );
    card2 = new Card(
      14, 
      'Which iteration method can turn an array into a single value of any data type?', 
      ['reduce()', 'map()', 'filter()'], 
      'reduce()'
    );
    card3 = new Card(
      12, 
      'Which iteration method returns an array of the same length as the original array?', 
      ["map()", "forEach()", "reduce()"], 
      'map()'
    );
    // deck = new Deck([card1, card2, card3]);
    // cards = deck.cards;
    cards = ([card1, card2, card3]);
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  //-----------default property tests
  it('should store a deck', () => {
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should count cards', () => {
    const cardCount = deck.countCards();
  
    expect(cardCount).to.equal(3);
  });
  
});
