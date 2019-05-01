const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Data = require('../src/Data')

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be instantiated with an array of Card objects', () => {
    const deck = new Deck(Data.prototypeData);
    expect(deck.cards).to.be.a('array')
    expect(deck.cards[0]).to.be.a('object')
  });

  it('should return number of cards in deck', () => {
    const deck = new Deck(Data.prototypeData);
    expect(deck.countCards()).to.equal(Data.prototypeData.length)
  });


});