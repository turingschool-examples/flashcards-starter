const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe ('Deck', () => {
  it ('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it ('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it ('should store cards', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    const card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card, card2, card3]);

    expect(deck.cards).to.deep.equal([card, card2, card3]);
  });

  it ('should be able to count cards', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    const card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card, card2, card3]);
    const deck2 = new Deck([card, card2])

    expect(deck.countCards()).to.equal(3);
    expect(deck2.countCards()).to.equal(2);
  });
});
