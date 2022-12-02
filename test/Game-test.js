const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');


describe('Game', () => {
  let miniPrototypeData;
  let newDeck;
  let newRound;
  let newGame;
  beforeEach(() => {
    miniPrototypeData = [{
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
    }];
    newDeck = new Deck(miniPrototypeData);
    newRound = new Round(newDeck);
    newGame = new Game();

  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(newGame).to.be.an.instanceof(Game);
  }); 

  it('should keep track of the current round', () => {
    newGame.instatiateClasses();
    expect(newGame.currentRound).to.be.an.instanceof(Round);
  }); 

  it('should create cards', () => {
    expect(newGame.createCards(miniPrototypeData)).to.deep.equal([
     {
        id: 1,
        question: 'What allows you to define a set of related information using key-value pairs?',
        answers: [ 'object', 'array', 'function' ],
        correctAnswer: 'object'
      },
     {
        id: 2,
        question: 'What is a comma-separated list of related values?',
        answers: [ 'array', 'object', 'function' ],
        correctAnswer: 'array'
      },
     {
        id: 3,
        question: 'What type of prototype method directly modifies the existing array?',
        answers: [ 'mutator method', 'accessor method', 'iteration method' ],
        correctAnswer: 'mutator method'
      }
    ]);
  });

  it('should put cards in a deck', () => {
    newGame.instatiateClasses();
    expect(newGame.deck).to.be.an.instanceof(Deck);
  });
});