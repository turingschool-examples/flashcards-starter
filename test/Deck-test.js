const chai = require('chai');
const expect = chai.expect;

// const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });
  it.skip('should be an intances of Deck',  function() {
    const deck = new Deck();
    expect(Deck).to.be.an.instanceof(Deck);
  });
  // Your Deck class should be initialized with an array of Card objects and should have an accompanying test file. It should know how many Cards are in the Deck.
  // const deck = new Deck([card1, card2, card3]);
  // deck.countCards(); // => 3
  it.skip('should have an array of flash cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cardsArray).to.be.equal([card1, card2, card3]);
  });
  it.skip('should', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);

    deck.countCards();

    expect(deck.countCards()).to.deep.equal(deck.cardsArray.length);
  });
});
