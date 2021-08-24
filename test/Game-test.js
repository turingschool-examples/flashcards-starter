const assert = require('chai').assert;
const data = require('../src/data');
const prototypeData = data.prototypeData;
const Game = require('../src/Game.js');
const Round = require('../src/Round.js');
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  })

  it('should be a function', function() {
    assert.isFunction(Game);
  })

  it('should be an instance of Game', function() {
    assert.instanceOf(game, Game);
  })

  it('should keep track of the current round', function() {
    assert.typeOf(game.currentRound, 'object');
  })

  it('should start a new Round with a Deck of Cards', function() {
    game.start();

    assert.instanceOf(game.currentRound, Round);
    assert.instanceOf(game.currentRound.deck, Deck);
    assert.instanceOf(game.currentRound.deck.cards[0], Card);
    assert.equal(game.currentRound.deck.cards.length, prototypeData.length);

  })
})
