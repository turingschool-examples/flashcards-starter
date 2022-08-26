const chai = require('chai');
const expect = chai.expect;

const flashcards = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let cards;
  let deck;

  beforeEach(() => {
    cards = 
    [
      new Card(flashcards.prototypeData[0]),
      new Card(flashcards.prototypeData[1]),
      new Card(flashcards.prototypeData[2]),
    ];
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have a deck of cards', () => {
    expect(deck.cards).to.deep.equal(cards); 
  });
  
  it('should count how many cards are in the deck', () => {
    const cardCount = deck.countCards();

    expect(deck.cards).to.have.lengthOf(3);
    expect(cardCount).to.equal(3);
  });
})