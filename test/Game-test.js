const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const game = new Game(sampleCardArray);
    expect(Game).to.be.a('function');
  });

  it('should instantiate a deck', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const game = new Game(sampleCardArray);
    expect(game.deck.cards).to.deep.equal(sampleCardArray);
  });

  it('should print a message stating how many cards are in the deck', function() {
    const sampleCardArray = [{
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      }]
    const game = new Game(sampleCardArray);
    const message = game.printMessage(game.deck, game.round);
    expect(message).to.deep.equal(`Welcome to FlashCards! You are playing with 1 cards.
-----------------------------------------------------------------------`);
  });

});
