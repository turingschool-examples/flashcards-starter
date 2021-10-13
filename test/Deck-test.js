const expect = require('chai').expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {
  const card1 = new Card(1, "What is a cat?", ['flower', 'animal', 'food'], 'animal');
  const card2 = new Card(2, "What is a sandwich?", ['flower', 'animal', 'food'], 'food');
  const card3 = new Card(3, 'What is a daisy?', ['flower', 'animal', 'food'], 'flower');

  const deck = new Deck([card1, card2, card3]);

  it(' should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it(' should be an object instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it(' should have an array of Cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it(' should be able to count how many cards it has', function() {
    expect(deck.countCards()).to.equal(3);
  });
});