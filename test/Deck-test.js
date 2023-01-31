const chai = require('chai');
const Deck = require('../src/Deck');
const data = require('../src/data');
const expect = chai.expect;

describe('Deck', () => {
  
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should store an array of cards',() => {
    const deck = new Deck(data.prototypeData);
    expect(deck.cards).to.be.an('array')
  })

  it('should count the number of cards in the array', () => {
    const deck = new Deck(data.prototypeData);
    deck.countCards();

    expect(deck.cards).to.have.lengthOf(30);
  });
});