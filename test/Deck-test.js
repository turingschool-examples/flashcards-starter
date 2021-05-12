const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck')

describe('Deck', () => {
  let card1, card2, card3, deck1;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck1 = new Deck([card1, card2, card3]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should store cards', () => {
    expect(deck1.cards).to.deep.equal([card1, card2, card3]);
    expect(deck1.cards[0]).to.be.an.instanceOf(Card)
  });

  it('should count the cards in the deck', () => {
    expect(deck1.countCards()).to.equal(3)
  })
})
