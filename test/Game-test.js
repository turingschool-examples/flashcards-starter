const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should store a round', function() {
    const game = new Game();
    expect(game.round).to.be.a.instanceof(Round);
  })

  it('should create a deck', function() {
    const game = new Game();
    game.start();
    expect(game.round.deck.cards.length).to.equal(10);
  })

});
