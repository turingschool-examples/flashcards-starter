const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  it ('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it ('should be an instance of Round', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    const card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card, card2, card3]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it ('should store a deck of cards', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    const card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card, card2, card3]);
  });

  it ('should store current card as first card in the deck at the start of the round', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    const card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    const deck = new Deck([card, card2, card3]);
    const round = new Round(deck);
    const deck2 = new Deck([card3, card2, card]);
    const round2 = new Round(deck2);

    expect(round.currentCard).to.equal(card);
    expect(round2.currentCard).to.equal(card3);
  });
});
