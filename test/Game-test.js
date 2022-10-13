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

})