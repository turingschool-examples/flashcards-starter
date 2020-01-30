const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game.js');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should start a new game with a cards', function() {
    const game = new Game();
    game.start();
  });

});
