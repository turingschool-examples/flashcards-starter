const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  let game;

  beforeEach('create a game', function() {
    game = new Game;
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should instantiate our good friend, Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a current round', function() {
    expect(game.currentRound).to.be.an('object');
  });

  describe('start', function() {

    beforeEach('start a game', function() {
      game.start();
    })

    it('should be a function', function() {
      expect(game.start).to.be.a('function');
    });

    it('should instantiate a deck of cards', function() {
      expect(game.deck).to.be.an.instanceOf(Deck);
    });

    it('should have a full deck of cards', function() {
      expect(Object.values(game.deck)[0].length).to.equal(30);
    });

    it('should instantiate a round of play', function() {
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });

    it('should recognize the current round of play', function() {
      expect(game.currentRound.deck).to.equal(game.deck.cards);
    });
  });
});
