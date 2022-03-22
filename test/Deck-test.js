const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  const card1 = {
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  }
  const card2 = { "id": 2,
    "question": "What is a comma-separated list of related values?",
    "answers": ["array", "object", "function"],
    "correctAnswer": "array"
  }
  const deck = new Deck([card1, card2]);
  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });
  it('should count how many cards are in deck', () => {
    const countCards = deck.countCards();
    expect(countCards).to.equal(2);
  })
});
