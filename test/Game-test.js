const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');


describe('Game', function () {

  it('should be a function', function () {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the Game class', function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should invoke game.start and begin the game', function () {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.equal()
    //test for a matching question, correct answer, etc
    //test for this array length vs the known length
  });

});