const expect = require('chai').expect
const Game = require('../src/Game');
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game()
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function')
  })

  it('should be a new instance of game', function() {
    expect(game).to.be.a.instanceOf(Game)
  })

  it('should keep track of the current round', function() {
    expect(game.currentRound).to.deep.equal({})
  })

  it('should create a new round with a deck of cards', function() {
    game.start()
    expect(game.deck).to.be.an.instanceOf(Deck)
  })
  
})
