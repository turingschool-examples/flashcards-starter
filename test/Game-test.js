const assert = require('chai').assert;

const Game = require('../src/Game');

describe('Game', function(){
  it('should be a function', function() {
    assert.deepEqual(typeof Game , 'function')
  })
  it('should create Cards with start', function() {
    const game = new Game();
    game.start()
    assert.deepEqual(typeof game.cards, 'object')
    assert.deepEqual(game.cards.length, 30)
  })
  // it('should keep track of the current round', function() {
  //   const game = new Game(round);
  //   assert.deepEqual(game.currentRound, )
  // })
});
