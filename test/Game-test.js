const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')

describe('Game', function() {

  it('should have a start function', function() {
    const game = new Game()
    expect(game.start).to.be.a('function')
  });

  it('should keep track of current round', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck.cards.length).to.equal(30)
  });

})