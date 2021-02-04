const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck([]);
    expect(Deck).to.be.a('function');
  });

  it('should instantiate a Deck', function() {
    const deck = new Deck([]);
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should accept an object argument', function() {
    const cards = [{
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

    const deck = new Deck(cards);

    expect(deck.cards.length).to.equal(2);
    expect(typeof deck.cards).to.equal('object');
  });

  it('should know how many cards it has in the deck', function() {
    const cards = [{
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

    const deck = new Deck(cards);

    numberOfCards = deck.countCards();

    expect(numberOfCards).to.equal(2);
  });
});
