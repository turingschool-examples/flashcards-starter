const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {
  it('should be a function', () => expect(Deck).to.be.a('function'));
  
  it('should take an array of card objects as an argument', () => {
    const deck = new Deck([{}, {}, {}]);
    expect(deck.cards).to.deep.equal([{}, {}, {}]);
  });

  it('should know how many cards are in the deck', () => {
    const deck = new Deck([{key: 'item'}, {key: 'item'}, {key: 'item'}]);
    expect(deck.countCards()).to.equal(3);

    const deck2 = new Deck([{key: 'item'}, {key: 'item'}, {key: 'item'}, {key: 'item'}, {key: 'item'}]);
    expect(deck2.countCards()).to.equal(5);
  });
});