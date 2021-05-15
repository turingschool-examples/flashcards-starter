const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();

    expect(Round).to.be.a('function');
  });
  it('should be an instance of Game class', function() {
    const game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });
  it('should track of the current played round', function() {
    const game = new Game();

    expect(game.currentRound).to.be.a('object');
  });
});
