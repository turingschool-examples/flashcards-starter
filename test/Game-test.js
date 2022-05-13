const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
   const game = new Game();
  it('should be an instance of Game', () => {
   expect(game).to.be.an.instanceof(Game);
  })
  it('should have a start method to instantiate a Deck', () => {
    game.start()
    expect(game.currentRound.deck).to.be.an.instanceof(Deck)
  })
  it('should create all cards and put into the deck with the start method', () => {
    game.start()
    expect(game.currentRound.deck.countCards()).to.equal(30);
    expect(game.currentRound.returnCurrentCard().id).to.equal(1);
  })
  it.skip('should instantiate a Round and keep track of the currentRound', () => {
    game.start()
    game.currentRound.takeTurn('hi')
    game.currentRound.takeTurn('hi')
    game.currentRound.takeTurn('hi')
    expect(game.currentRound).to.be.an.instanceof(Round);
    expect(game.currentRound.turns).to.equal(3);
  })
})