const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');


describe('Game', function() {

  it('should create cards', function() {
    const game = new Game();

    expect(game.start()).to.equal(30);
  });
});
