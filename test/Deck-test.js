const assert = require('chai').assert;
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {
    assert.isFunction(Deck);
  });

  it('should be an instance of Deck', function() {
    assert.instanceOf(deck, Deck);
  });

  it('should know how many Cards are in the Deck', function() {
    let howManyCards = deck.countCards();

    assert.equal(howManyCards, 3);
  })
})
