const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Game', () => {

  let card1, card2, card3, deck, round, game;

  beforeEach(() => {
    (card1 = new Card({
      id: 1,
      question:
        "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    })),
      (card2 = new Card({
        id: 2,
        question: "What is a comma-separated list of related values?",
        answers: ["array", "object", "function"],
        correctAnswer: "array"
      })),
      (card3 = new Card({
        id: 3,
        question:
          "What type of prototype method directly modifies the existing array?",
        answers: ["mutator method", "accessor method", "iteration method"],
        correctAnswer: "mutator method"
      }));

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

    game = new Game();

    
  });

  it('should be a function', () =>  {

    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('something');

    expect(Game).to.be.a('function');
  });

});