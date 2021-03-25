const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach( () => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a("function");
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should start the round count at zero when the game starts', () => {
    expect(game.roundCounter).to.equal(0);
  });

});