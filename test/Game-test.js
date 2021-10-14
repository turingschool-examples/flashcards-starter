const expect = require('chai').expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
    game.start();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store current round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should create cards and add to new deck', function() {
    expect(game.currentRound.deck[0]).to.be.an.instanceof(Card);
  });

});
