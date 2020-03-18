const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn')
const Game = require('../src/Game')

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game()

    expect(Game).to.be.a('function')
  })

  it.skip('should be an instance of Game', function() {
    const game = new Game()

    expect(game).to.be.an.instanceof(Game)
  })

  it.skip('should keep track of current round', function() {

  })

  it.skip('should create cards', function() {
    const game = new Game()

    game.start()

    // expect(game)
  })

  it.skip('should put cards in the deck', function() {

  })

  it.skip('should create a new round using the deck', function() {

  })

  it.skip('should invoke printMessage to dipslay message', function() {

  })

  it.skip('should invoke printQuestion', function() {

  })

})
