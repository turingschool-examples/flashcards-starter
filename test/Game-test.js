const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it.skip('should keep track of the current round', function() {
    const game = new Game();
    game.startGame();
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  it.skip('should create cards from the prototype data', function() {
    const game = new Game();
    game.startGame();
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  })

  it.skip('should put the cards in a deck', function() {
    const game = new Game();
    game.startGame();
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  })
})