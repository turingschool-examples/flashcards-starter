const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const data = require('../src/data');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();

    expect(Deck).to.be.a('function');
  });

  it('should be a new instance of Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of card objects', function() {
    const deck = new Deck(data.prototypeData);

    expect(deck.cards).to.deep.equal(data.prototypeData);
  });

  it('should be able to count the number of cards in the deck', function() {
    const deck = new Deck(data.prototypeData);

    expect(deck.cards).to.deep.equal(data.prototypeData);
    expect(deck.countCards()).to.equal(30);
  });

});