const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');


describe('Game', function() {

it('should keep track of the current round', () => {
    const game = new Game();
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round)
  });
});