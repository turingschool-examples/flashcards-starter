const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');
const Round = require('../src/round');
const Turn = require('../src/turn.js');
const Game = require('../src/Game.js');

describe('Game', function() {
  var game = new Game();

  it('should keep track of currentRound', function() {
    expect(game.currentGame).to.equal(null);
  });

  it('should start the game', function() {
    expect(game.currentGame).to.equal(null);
    game.start();
    // expect(game.currentGame).to.equal(round);
  });




});
