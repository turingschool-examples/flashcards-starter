
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should take an array of cards', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is the name of Dean\'s cat?', ['Tifa', 'Aerith', 'Cloud'], 'Tifa');
    const deck = new Deck([card, card2]);
    expect(deck.cards).to.deep.equal([card, card2]);
  });

  it('should be able to count the cards in the deck', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is the name of Dean\'s cat?', ['Tifa', 'Aerith', 'Cloud'], 'Tifa');
    const deck = new Deck([card, card2]);
    var cardCount = deck.countCards();
    expect(cardCount).to.equal(2);
  });
});
