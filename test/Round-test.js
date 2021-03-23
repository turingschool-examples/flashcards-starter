const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const deck = new Deck(sampleCardArray);
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should have a current deck', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const deck = new Deck(sampleCardArray);
    const round = new Round(deck);
    expect(round.currentDeck.cards).to.deep.equal(deck.cards);
  });

  it('should have a method that returns the current card', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const deck = new Deck(sampleCardArray);
    const round = new Round(deck);
    expect(round.currentDeck.cards[0]).to.deep.equal(round.returnCurrentCard());
  });

  it('should return a different card', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }, {
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"
      }]
    const deck = new Deck(sampleCardArray);
    const round = new Round(deck);
    round.takeTurn(true);
    expect(round.currentDeck.cards[1]).to.deep.equal(round.returnCurrentCard());
  });

});
