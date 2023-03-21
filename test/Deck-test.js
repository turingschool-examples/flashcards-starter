const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const testData = require('../src/test-data.js');
console.log(testData)
const sampleCards = testData.testData.map(playingCard => playingCard)
console.log(sampleCards)

let deck;
let deck2;

describe('Deck', function(){

  beforeEach(() => {
    deck = new Deck(sampleCards);
    deck2 = new Deck();
  })
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck2).to.be.instanceof(Deck);
  });

  it('should be initialized with an array', function() {
    expect(deck.cards).to.deep.equal(sampleCards);
  });

  it('should know how many cards it has', function() {

    deck.findNumberOfCards();

    expect(deck.numberOfCards).to.equal(7);
  });
});

