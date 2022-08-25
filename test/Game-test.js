const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round')


describe('Game', function() {

  it('should start a new Round with cards in a deck', function() {
    game = new Game();
    game.start();

    expect(game.currentRound).to.deep.an.instanceof(Round);
  });
});
