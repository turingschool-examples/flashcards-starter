const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/super-data');
const prototypeQuestions = data.superData;

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  }); 

  it('should keep track of the currentRound', function() {
    const game = new Game();
    expect(game.currentRound).to.eql(1);
  });

  it('should have a method of game that creates cards', function() {
    const game = new Game();
    game.start();
    expect(game.cards).to.eql(prototypeQuestions);
  });

  it('should put cards in a deck when start method is called', function() {
    const game = new Game();
    game.start();
    expect(game.deck.cards).to.eql(prototypeQuestions);
  });

  it('should create a new Round with the Deck when start method is called', function() {
    const game = new Game();
    game.start();
    expect(game.round.deck.cards).to.eql(prototypeQuestions);
    expect(game.round.turns).to.eql(0);
  });

});