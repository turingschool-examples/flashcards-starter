const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck')

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should know how many cards are in the deck', function() {
    const cardA = new Card();
    const cardB = new Card();
    const cardC = new Card();
    const deckA = new Deck([cardA, cardB]);
    const deckB = new Deck([cardA, cardB, cardC]);
    expect(deckA.countCards()).to.equal(2);
    expect(deckB.countCards()).to.equal(3);
  });
});
