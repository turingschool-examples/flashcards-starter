const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a property to track the current round', function() {
    expect(game.currentRound).to.deep.equal({});
  });

  describe('start', function() {
    it('should create cards', function() {
      game.setupRound();
      expect(game.currentRound.deck.cards.length).to.equal(30);
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
    });

    it('should create a new round using the deck', function() {
      game.setupRound();
      expect(game.currentRound).to.be.an.instanceof(Round);
    });
  });
});
