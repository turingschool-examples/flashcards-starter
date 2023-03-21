const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data.js');
const sampleCards = data.prototypeData.filter((item, index) => {
  if (index < 7) {
    return item;
  }
});

console.log(sampleCards)

describe('Deck', function(){

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.instanceof(Deck);
  });

  it('should be initialized with an array', function() {
    let deck = new Deck(sampleCards);

    expect(deck.cards).to.deep.equal(sampleCards);
  });

  it('should know how many cards it has', function() {
    let deck = new Deck(sampleCards);

    deck.findNumberOfCards();

    expect(deck.numberOfCards).to.equal(7);
  });
});

