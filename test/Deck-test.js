const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    currentDeck = [card1, card2, card3];
    deck = new Deck(currentDeck);
});

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should have a deck of cards', () => {
    expect(deck.currentDeck).to.equal(currentDeck);
  });

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
