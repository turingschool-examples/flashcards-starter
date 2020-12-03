const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;

  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should store array of cards', function() {
    let deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should count the number of cards in the deck', function() {
    let deck = new Deck([card1, card2, card3]);
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  });
});
