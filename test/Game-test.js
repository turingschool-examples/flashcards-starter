const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('start game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should keep track of a round', function() {
    game.start();
    expect(game.currentRound).to.equal(round);
  });

  it.skip('should print a welcome message', function() {
    expect(game.start(deck, round)).to.equal(console.log('Welcome to FlashCards! You are playing with 3 cards.'));
  });

  it.skip('should print a question to allow interation with the CLI', function() {
    expect(game.start(deck, round)).to.equal(console.log(deck.cardsInDeck[0].question));
  });
});
