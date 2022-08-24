const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Card = require('../src/Card.js');

describe('Deck', function() {

  it('should be initialized with an array of Card objects', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });
  
  it('should know how many Cards are in the Deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards.length).to.deep.equal(cards.length)
  }) 
})