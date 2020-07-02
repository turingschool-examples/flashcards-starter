const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
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
});
