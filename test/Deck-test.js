const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe ('Deck', function() {

  it('should be a function', function() {
    const card = new Card();
    const deck = new Deck(card);
    expect(Deck).to.be.a('function');
  });

  it('should store the amount of cards in the deck', function() {
    const card1 = new Card();
    const card2 = new Card();
    const deck = new Deck([card1, card2]);
    expect(deck.countCards()).to.equal(2);
  });
});
