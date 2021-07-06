const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let deck;
  beforeEach(() =>  {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',['object', 'array', 'function'],'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],'mutator method');
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {

    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store all cards required in the game', function() {

    expect(deck.allCards).to.deep.equal([
      {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }]);
  });

  it('should return the length of the card container', function() {

    expect(deck.countCards()).to.equal(3);
  });
});
