const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {

    expect(Game).to.be.a('function');
  });

  it('should instantiate our good friend, Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a current round', function() {
    const game = new Game();
    expect(game.currentRound).to.be.an('object');
  });

  describe('start', function() {

    it('should be a function', function() {
      const game = new Game();

      expect(game.start).to.be.a('function');
    });

    it('should instantiate a deck of cards', function() {
      const game = new Game();
      game.start();
      expect(game.deck).to.be.an.instanceOf(Deck);
    });

    it('should have a full deck of cards', function() {
      const game = new Game();
      game.start();
      expect(Object.values(game.deck)[0].length).to.equal(30);
    });

    it('should instantiate a round of play', function() {
      const game = new Game();
      game.start();
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });

    it('should recognize the current round of play', function() {
      const game = new Game();
      game.start();
      expect(game.currentRound.deck).to.equal(game.deck.cards);
    });
  });
});
