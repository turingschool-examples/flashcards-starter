const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should instantiate a game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should instantiate a round when game starts', function() {
    expect(game.currentRound).to.equal(undefined);
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

});
