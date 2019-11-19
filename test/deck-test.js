const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should have an array of cards', function() {
    const deck = new Deck();
    expect(deck.cards).to.be.an('array');
  })

  it('should know the length of the array of cards', function() {
    const deck = new Deck();
    expect(deck.countCards()).to.equal(deck.cards.length);
  })
});
