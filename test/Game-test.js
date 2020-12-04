const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should know what the round is', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});
