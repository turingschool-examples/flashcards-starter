const Card = require('../src/Card');
const chai = require('chai');
const data = require('../src/data').prototypeData;
const Deck = require('../src/Deck');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round');


describe('Game', function() {
  let game, cards, deck, round;
  beforeEach(function(){
    game = new Game();
    cards = data.map(card => new Card(...Object.values(card)));
    deck = new Deck(cards);
    round = new Round(deck);
  });

  describe('start', function() {
    it('should turn the data.js into cards', function() {
      game.start();
      expect(game.currentRound.deck.cards).to.deep.equal(cards);
    });

    it('should track the current round', function() {
      expect(game.currentRound).to.equal(undefined);
      game.start();
      expect(game.currentRound).to.deep.equal(round);
      game.currentRound.takeTurn('sea otter');
      round.takeTurn('sea otter');
      expect(game.currentRound).to.deep.equal(round);
      game = new Game();
      expect(game.currentRound).to.equal(undefined);
      expect(game.currentRound).to.not.equal(round);
    });
  });
});
