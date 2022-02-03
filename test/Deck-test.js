const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let card1, card2, card3;
  let cards;
  let deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is a group of hedgehogs called?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    card2 = new Card(2, 'Where in it\s body is a shrimp\s heart located?', ['Head', 'Chest', 'Legs'], 'Head');
    card3 = new Card(3, 'Which animal never sleeps?', ['Bullfrog', 'Hummingbird', 'Shark'], 'Bullfrog');

    cards = [card1, card2, card3];
    deck = new Deck(cards);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Desk', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be instantiated with an array of Card objects', function() {
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should be able to count cards in the deck', function() {
    expect(deck.countCards()).to.equal(cards.length);
  });
});
