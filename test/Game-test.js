const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('should keep track of the current round', () => {
    expect(game.currentRound).to.be.a('number');
  });
});
