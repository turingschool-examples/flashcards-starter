const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');

describe('Game', function() {
  var game = new Game();

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should keep track of currentRound', function() {
    expect(game.currentGame).to.equal(null);
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });
});
