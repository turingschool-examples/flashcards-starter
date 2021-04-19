const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const card1 = new Card(
  1,
  'What allows you to define a set of related information using key-value pairs?',
  ['object', 'array', 'function'],
  'object'
);
const card2 = new Card(
  2,
  'What allows you to define a set of related information using commas and indexes?',
  ['object', 'array', 'function'],
  'array'
);

describe('Deck', function () {
  it('is initialized with an array of cards', function() {
    let deck = new Deck([card1, card2])
    expect(deck.cards).to.deep.equal([card1, card2])
  });

  it('knows its card count', function() {
    let deck = new Deck([card1, card2])
    expect(deck.countCards()).to.equal(2)
  });
});