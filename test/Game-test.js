const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of a Game', function() {
      const game = new Game();
      expect(game).to.be.an.instanceof(Game);
  });

  it('should count rounds starting at 0', function() {
      const game = new Game();
    
      expect(game.roundCounter).to.equal(0);
  });

  it('should increment the counter at the start of a game', function() {
    const game = new Game();

    game.start();
    expect(game.roundCounter).to.equal(1);
  });

  it('should start the game', function() {
    const game = new Game();
    expect(game.start()).to.equal();
  });
});