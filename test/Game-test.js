const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it.skip('should keep track of the current round', () => {
    expect(game.currentRound).to.be.undefined;

    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it.skip('should start the game and create the new card objects', () => {
    game.start();

    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);

    game.currentRound.deck.cards.forEach(card => {
      expect(card).to.be.an.instanceof(Card);
    });
  });
});
