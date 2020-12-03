const chai = require('chai');
const expect = chai.expect;

const game = require('../src/Game');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should know what the round is', function() {
    expect(game.currentRound).to.equal(1);
  });

  it('should create cards')
});
