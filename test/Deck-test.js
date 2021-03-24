const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const deck = new Deck(sampleCardArray);
    expect(Deck).to.be.a('function');
  });

  it('should get card data from an array of objects', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const deck = new Deck(sampleCardArray);
    expect(deck.cards).to.deep.equal(sampleCardArray);
  });
  it('should get count cards', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const deck = new Deck(sampleCardArray);
    const deckCount = deck.countCards();
    expect(deckCount).to.deep.equal(sampleCardArray.length);
  });
});
