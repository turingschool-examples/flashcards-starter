const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/deck');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be instantiated with an empty array by default', function() {
    const deck = new Deck([]);
    expect(deck.cardsInDeck).to.deep.equal([]);
  })

  it('should also be able to be instantiated with an array of card objects', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(5, 'What is a function defined on an object called?', ['parameter', 'method', 'property'], 'method');
    const card3 = new Card(6, 'Which is of these is a reserved word in Javascript?', ['this', 'never', 'mocha'], 'this');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cardsInDeck).to.deep.equal([card1, card2, card3]);
  });

})
