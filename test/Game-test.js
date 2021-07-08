const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();

    expect(Game).to.be.a('function');
  });

  it('should keep track of the current round and start off with no rounds', function() {
    const game = new Game();

    expect(game.currentRound).to.equal(null);
  });
});
