const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  
  it('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be made of cards', () => {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    expect(deck.cards).to.deep.equal(cards);
  });

  it.skip('should count cards', () => {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();

    const cards = [card1, card2, card3];
    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(3);
  });
});