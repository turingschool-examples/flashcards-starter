const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  
  it.skip('should be a function', () => {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should be made of cards', () => {
    const card1 = new Card();
    const card2 = new Card();
    const card3 = new Card();
    
    const cards = [card1, card2, card3];

    const deck = new Deck(cards);
  });
}