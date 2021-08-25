const assert = require('chai').assert;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
  })

  it('should be a function', function() {
    assert.isFunction(Deck);
  });

  it('should be an instance of Deck', function() {
    assert.instanceOf(deck, Deck);
  });

  it('should hold cards', function() {
    assert.instanceOf(deck.cards[0], Card);
    assert.deepEqual(deck.cards, cards);
  })

  it('should know how many Cards are in the Deck', function() {
    let howManyCards = deck.countCards();

    assert.equal(howManyCards, 3);
  })
})
