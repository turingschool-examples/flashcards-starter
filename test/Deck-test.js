const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;
  let cards = prototypeQuestions;

  beforeEach(() => {
    cards = cards.map(card => new Card(card));
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have some cards', () => {
    expect(deck.cards).to.deep.equal(prototypeQuestions)
  });

  it('should count how many cards it has', () => {
    expect(deck.countCards()).to.equal(30);
  });
});