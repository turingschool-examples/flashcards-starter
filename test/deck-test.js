const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', function() {
  let card1, card2, card3;
    beforeEach(() => {
      const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      const card2 = new Card(5, 'What is a function defined on an object called?', ['parameter', 'method', 'property'], 'method');
      const card3 = new Card(6, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    });

  it('should be a function', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should also be able to be instantiated with an array of card objects', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cardsInDeck).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the numbers of cards in the deck', function() {
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
})
