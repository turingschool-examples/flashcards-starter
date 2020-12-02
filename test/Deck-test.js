const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1, card2, card3;
  let deck;

  beforeEach(function() {
    card1 = new Card();
    card2 = new Card();
    card3 = new Card();
    deck = new Deck([card1, card2, card3]);
  })
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });
  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  })
  it('should include an array of Card objects', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  })
  //initialize with an array of Card objects
  it('should know how many cards are in the Deck', function() {
    expect(deck.countCards()).to.equal(3);
  })
  //should know how many cards are in the Deck (deck.countCards(); to find length of array)

});
