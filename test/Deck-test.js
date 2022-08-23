const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe ('Deck', () => {
  it ('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  let card;
  let card2;
  let card3;
  let deck;
  let deck2;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    deck = new Deck([card, card2, card3]);
    deck2 = new Deck([card, card2])
  })

  it ('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it ('should store cards', () => {
    expect(deck.cards).to.deep.equal([card, card2, card3]);
  });

  it ('should be able to count cards', () => {
    expect(deck.countCards()).to.equal(3);
    expect(deck2.countCards()).to.equal(2);
  });
});
