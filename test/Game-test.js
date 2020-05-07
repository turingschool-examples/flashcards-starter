const assert = require('chai').assert;

const Game = require('../src/Game');
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Game', function() {
  it('should be a function', function() {
    assert.deepEqual(typeof Game, 'function');
  })
  it('should create Cards with start', function() {
    const game = new Game();
    game.start();
    assert.deepEqual(typeof game.cards, 'object');
    assert.deepEqual(game.cards.length, 30);
  })
  it('should put created cards into a deck', function() {
    const game = new Game();
    game.start();
    assert.deepEqual(game.deck instanceof Deck, true);
  })
  it('should create a new round using the deck', function() {
    const game = new Game();
    game.start();
    assert.deepEqual(game.round instanceof Round, true);
  });
});
