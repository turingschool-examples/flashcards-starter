const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  it ('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  let card;
  let card2;
  let card3;
  let deck;
  let deck2;
  let round;
  let round2;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What can you use to make unit testing code DRYer?', ['hooks', 'assertion libraries', 'Mocha'], 'hooks');
    card3 = new Card(3, 'What can you use to store similar data in a list?', ['object', 'array', 'function'], 'array');
    deck = new Deck([card, card2, card3]);
    deck2 = new Deck([card3, card2, card]);
    round = new Round(deck);
    round2 = new Round(deck2);
  });

  it ('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it ('should store a deck of cards', () => {
    expect(round.deck).to.deep.equal([card, card2, card3]);
  });

  it ('should store current card as first card in the deck at the start of the round', () => {
    expect(round.currentCard).to.equal(card);
    expect(round2.currentCard).to.equal(card3);
  });

  it ('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
    expect(round2.returnCurrentCard()).to.equal(round2.currentCard);
  });

  it ('should start with 0 turns recorded', () => {
    expect(round.turns).to.equal(0);
  })

  it ('should start with no incorrect guesses recorded', () => {

  })
});
