const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')

describe('Game', function() {

  it('game should be a function', function() {
    const game = new Game();
    game.start()
    expect(Game).to.be.a('function');
  });

  it('start should be a function', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });



});
