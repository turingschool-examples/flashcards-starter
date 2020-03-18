const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should take an array of cards', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many Cards are in the Deck', function() {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    const deck = new Deck([card1, card2, card3]);
    deck.countCards()
    expect(deck.cards.length).to.deep.equal(3)
  });
});
