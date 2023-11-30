const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');


describe('deck', function () {
  it('should be a function', function () {
    expect(createDeck).to.be.a('function');
  });

  it('should create an array of card objects', function () {
    const testCard1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const testCard2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    const testCard3 = createCard(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'], 'filter()')

    const testDeck = createDeck([testCard1, testCard2, testCard3]);

    expect(testDeck).to.deep.equal([{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }, {
      "id": 11,
      "question": "Which iteration method returns a new array with all elements that match a given condition?",
      "answers": ["filter()", "find()", "map()"],
      "correctAnswer": "filter()"
    }]);
  });

  it('should know how many cards are in the deck', function () {
    const testCards = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }];

    const testDeck = createDeck(testCards);
    const testDeckLength = countCards(testDeck);

    expect(testDeckLength).to.deep.equal(2);
  });
});