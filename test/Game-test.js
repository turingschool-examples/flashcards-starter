const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should store our current round', function() {
    game.start();
    expect(game.currentRound).to.not.equal(undefined);
  });

  it('should create an instance of a card', function() {
    game.start();
    expect(game.currentRound.deck[0]).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object'
    });
  });

  it('should create an instance of Deck with 30 cards', function() {
    game.start();
    expect(game.currentRound.deck.length).to.equal(30);
  });
});
