const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  let card;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    deck = new Deck(([card1, card2, card3]));

  })

  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Card', function() {

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should contain an array of cards', function() {

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the amount of cards in the deck', function() {

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});
