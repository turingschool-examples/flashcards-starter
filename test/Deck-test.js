const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {
  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should take in an array of cards as a deck', () => {
    const deck = new Deck([{id: 'Obj1'}, {id: 'Obj2'}, {id: 'obj3'}]);
    expect(deck.cards[1].id).to.equal('Obj2');
  })

  it('should be able to count the cards in the deck', () => {
    const deck = new Deck([{id: 'Obj1'}, {id: 'Obj2'}, {id: 'obj3'}]);
    const cardCount = deck.countCards();
    expect(cardCount).to.equal(deck.cards.length);
  })
})