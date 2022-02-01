// file dependencies
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck Tests', () => {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(() => {
    card1 = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );

    deck = new Deck([card1, card2, card3]);
  });
  // tests

  it('should instantiate the Deck class', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it("should have a method called 'countCards'", () => {
    expect(deck.countCards).to.be.a('function');
  });

  it('should know how many cards are in a deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
