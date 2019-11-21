const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');
const Round = require('../src/round');
const Turn = require('../src/turn.js');
const Game = require('../src/Game.js');

describe('Game', function() {
  var game = new Game();
  var round = new Round();

  it('should keep track of currentRound', function() {
    expect(game.currentGame).to.equal(null);
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });
});
