const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

// DON'T TEST GAME.START!!!!
  // Instead extract what you can out of game.start and into a separate function, and test those functions on their own.

describe('Game', () => {
  beforeEach(() => {
    game = new Game()
  })

  it('should be a function', () => expect(Game).to.be.a('function'));

  it('should keep track of the current round', () => {
    expect(game.currentRound()).to.equal(0);
    expect(game.currentRound()).to.equal(1);
    expect(game.currentRound()).to.equal(2);
  })

  it('should have a method that creates cards', () => {
    const cardDeck = game.createCards()
    expect(cardDeck).to.equal(30)
  })

  it('should have a method that creates a deck', () => {
    // expect(game.createDeck()).to.equal('idk')
  })

  it('should have a method that...', () => {
    expect().to.equal()
  })

  it('should have a method that...', () => {
    expect().to.equal()
  })

  it('should have a method that...', () => {
    expect().to.equal()
  })

  it('should have a method that...', () => {
    expect().to.equal()
  })

})