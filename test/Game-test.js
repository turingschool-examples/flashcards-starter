const chai = require('chai');
const expect = chai.expect
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {

  it('should keep track of current round', () => {
    let game = new Game()
    expect(game.currentRound).to.equal(0);
    game.startGame();
    expect(game.currentRound).to.equal(1);
  });

  it('should put cards in deck', () => {
    let game = new Game();
    game.createCards();
    expect(game.deck.length).to.deep.equal(30);
  });

  it('should be able to instantiate a deck of flash cards', () => {
    let game = new Game();
    game.createCards();
    expect(game.deck.length).to.deep.equal(30);
  });

});
