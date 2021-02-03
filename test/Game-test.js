const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  it.skip('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it.skip('should instantiate our good friend, Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it.skip('should instantiate a deck of cards', function() {
    const game = new Game();
    expect(game.deck).to.be.an.instanceOf(Deck);
  });

  it.skip('should instantiate a round of play', function() {
    const game = new Game();
    expect(game.round).to.be.an.instanceOf(Round);
  });

  it.skip('should recognize the current round of play', function() {
    const game = new Game();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });



});
