const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');


describe('Game', function () {

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the Game class', function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should invoke game.start() and begin the game', function () {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck.length).to.equal(30);
  });

});