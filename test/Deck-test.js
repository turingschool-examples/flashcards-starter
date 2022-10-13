const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let deck, card1, card2, card3;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  });

  it('should be function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be initialized with an array of cards', function() {
    expect(deck).to.be.an.instanceof(Deck);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
