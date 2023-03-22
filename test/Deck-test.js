const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const testData = require('../src/test-data.js');
const sampleCards = testData.testData.map(playingCard => playingCard);

let deck;

describe('Deck', () => {

  beforeEach(() => {
    deck = new Deck(sampleCards);
  });
  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.instanceof(Deck);
  });

  it('should be initialized with an array', () => {
    expect(deck.cards).to.deep.equal(sampleCards);
  });

  it('should know how many cards it has', () => {

    deck.countCards();

    expect(deck.numberOfCards).to.equal(7);
  });
});

