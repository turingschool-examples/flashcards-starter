const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const prototypeData = require('../src/data.js')

var card, deck, round, game;


describe('Game', function() {

  it('should be a function', () => {
    game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', () => {
    game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  describe('currentRound', () => { 
  it('should keep track of the current round', () => {
    game = new Game();

    game.startRound();
    expect(game.currentRound).to.eql(1);
  });
});
});