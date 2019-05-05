const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe ('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function')
  })

  it('should be an instance of game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should start a new game', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(game.currentRound)
  })

})