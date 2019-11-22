const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
let game;

beforeEach(function() {
   game = new Game();
});

describe('Game', function() {

  it('should keep track of the current round', function() {

    game.start();
    expect(game.currentRound).to.equal(1);
  })

  it('should instantiate 30 cards when start is called', function() {

    game.start();
    expect(game.cards.length).to.equal(30);
  })

});
