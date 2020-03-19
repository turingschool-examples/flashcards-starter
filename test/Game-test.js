const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
// const Round = require('../src/Round');
// const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
// const Card = require('../src/Card');

describe('Game', function() {

  beforeEach('game instance', function() {
    game = new Game();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', function() {
    expect(game.currentRound).to.equal(0);
    game.start();
    // expect(game.currentRound).to.equal(30);
  });

  it('should start a game', function() {

  });

  it('should put cards in a deck', function() {

  });

  it('should create new Round using Deck', function() {

  });

  it('should display message in the CLI', function() {

  });

  it('should run helper function to interaction via the CLI', function() {
    // game.start();
  });

});
