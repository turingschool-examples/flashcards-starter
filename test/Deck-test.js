const expect = require('chai').expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be a new instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  })

  it('should be able to count how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);

    expect(deck.countCards()).to.equal(3);
  })
});