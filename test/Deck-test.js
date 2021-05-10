const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

it('should be a function', function() {
  const newDeck = new Deck();
  expect(newDeck).to.be.an.instanceof(Deck);
});

it('should be store a whole deck of cards', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
  const card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');
  const deck = [card1, card2, card3];
  const newDeck = new Deck(deck);
  expect(newDeck.deck).to.eql(deck);
});

it('should know how many cards are in the deck', function() {
  const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = new Card(2, 'What prototype method returns an array of the same length with modification?', ['sort', 'map', 'reduce'], 'map');
  const card3 = new Card(3, 'How many arguments does the reduce method take?', ['1', '2', '3'], '2');
  const newDeck = new Deck([card1, card2, card3]);
  const cardCount = newDeck.countCardsInDeck();
  expect(cardCount).to.equal(3);
});


});
