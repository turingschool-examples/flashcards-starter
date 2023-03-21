const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const testData = require('../src/test-data.js');
const sampleCards = testData.testData.map;(playingCard => playingCard);

let deck;

describe('Deck', function(){

  beforeEach(() => {
    deck = new Deck(sampleCards);
  })
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.instanceof(Deck);
  });

  it('should be initialized with an array', function() {
    expect(deck.cards).to.deep.equal(sampleCards);
  });

  it('should know how many cards it has', function() {

    deck.findNumberOfCards();

    expect(deck.numberOfCards).to.equal(7);
  });
});

