const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {

  let cards, deck;

  beforeEach('make deck of cards', function() {
    cards = [{
      "id": 42,
      "question": "How do birds suddenly appear every time you are near?",
      "answers": ["who knows", "my mom is part of the Audubon society", "I smell like flowers"],
      "correctAnswer": "my mom is part of the Audubon society"
    }, {
      "id": 18,
      "question": "When is it ok to fart in public?",
      "answers": ["Outside only", "Always if necessary", "Never"],
      "correctAnswer": "Outside only"
    }];
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should instantiate a Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should accept an object argument', function() {
    expect(deck.cards.length).to.equal(2);
    expect(typeof deck.cards).to.equal('object');
  });

  it('should know how many cards it has in the deck', function() {
    const numberOfCards = deck.countCards();
    expect(numberOfCards).to.equal(2);
  });
});
