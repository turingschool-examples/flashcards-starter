const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, calculatePercentCorrect, endRound } = require('../src/card');

describe('Card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('Guess check', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should grade a guess', function() {
    const card = createCard(2, 'What is one of the 7 wonders of the world?', ['Colossus of Rhodes', 'Tower of London', 'Mt. Rainier'], 'Colossus of Rhodes');
    const correctGuess = evaluateGuess('Colossus of Rhodes', card.correctAnswer);
    const incorrectGuess = evaluateGuess('Mt. Rainier', 'Colossus of Rhodes');

    expect(correctGuess).to.deep.equal('correct!');
    expect(incorrectGuess).to.deep.equal('incorrect!');
  });
});

describe('Deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it('should create a deck', function() {
    const card1 = createCard(31, 'What is one of the 7 wonders of the world?', ['Colossus of Rhodes', 'Tower of London', 'Mt. Rainier'], 'Colossus of Rhodes');
    const card2 = createCard(32, 'What colors can cats be?', ['green', 'black', 'purple'], 'black')
    const deck = createDeck([card1, card2]);
    expect(deck).to.deep.equal([{
      id: 31,
      question: "What is one of the 7 wonders of the world?",
      answers: ['Colossus of Rhodes', 'Tower of London', 'Mt. Rainier'],
      correctAnswer: "Colossus of Rhodes"
    }, {
      id: 32,
      question: "What colors can cats be?",
      answers: ['green', 'black', 'purple'],
      correctAnswer: "black"
    }]);
  });
});

describe('Count', function(){
  it('should know how many cards are in the deck', function() {
    const data = [{
      "id": 28,
      "question": "Which prototype method returns an array of an object's property values?",
      "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
      "correctAnswer": "Object.values()"
    }, {
      "id": 29,
      "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
      "answers": ["true", "false"],
      "correctAnswer": "true"
    }, {
      "id": 30,
      "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
      "answers": ["prototype method", "object", "callback function"],
      "correctAnswer": "prototype method"
    }];
    const newDeck = createDeck(data);
    const deckLength = countCards(newDeck)
    expect(deckLength).to.deep.equal(3);
  });
});

describe('Percent', function() {
  it('should return a non-negative value', function() {
    const badResult = {
      deck: [{
        "id": 28,
        "question": "Which prototype method returns an array of an object's property values?",
        "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
        "correctAnswer": "Object.values()"
      }, {
        "id": 29,
        "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
        "answers": ["true", "false"],
        "correctAnswer": "true"
      }, {
        "id": 30,
        "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
        "answers": ["prototype method", "object", "callback function"],
        "correctAnswer": "prototype method"
      }],
      currentCard: {
        "id": 30,
        "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
        "answers": ["prototype method", "object", "callback function"],
        "correctAnswer": "prototype method"
      },
      turns: 3,
      incorrectGuesses: [28, 29, 30]
  }
    const badRound = calculatePercentCorrect(badResult.deck, badResult);
    const goodResult = {
      deck: [{
        "id": 28,
        "question": "Which prototype method returns an array of an object's property values?",
        "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
        "correctAnswer": "Object.values()"
      }, {
        "id": 29,
        "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
        "answers": ["true", "false"],
        "correctAnswer": "true"
      }, {
        "id": 30,
        "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
        "answers": ["prototype method", "object", "callback function"],
        "correctAnswer": "prototype method"
      }],
      currentCard: {
        "id": 30,
        "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
        "answers": ["prototype method", "object", "callback function"],
        "correctAnswer": "prototype method"
      },
      turns: 3,
      incorrectGuesses: []
  }
    const goodRound = calculatePercentCorrect(goodResult.deck, goodResult);
    expect(badRound).to.deep.equal('0%');
    expect(goodRound).to.deep.equal('100%')
  });
});