const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck([
      new Card(prototypeQuestions[0]),
      new Card(prototypeQuestions[1]),
      new Card(prototypeQuestions[2])
    ]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have cards', () => {
    expect(deck.cards).to.deep.equal([{
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

  it('should count how many cards it has', () => {
    expect(deck.countCards()).to.equal(3);
  });
});