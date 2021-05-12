const chai = require('chai')
const expect = chai.expect

const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('it should be a function', function() {
    expect(Game).to.be.a('function')
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game)
  });

  it('should have a property that keeps track of current round', function() {
    expect(game.currentRound).to.equal()
  });

  it('should instantiate a current round', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

})
