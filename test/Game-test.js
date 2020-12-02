const chai = require('chai')
const expect = chai.expect

// const Round = require('../src/Round')
// const Turn = require('../src/Turn')
// const Card = require('../src/Card')
// const Deck = require('../src/Deck')
const Game = require('../src/Game')

describe('Game', function () {
  let game

  beforeEach(function () {
    game = new Game()
  })

  it('should be a function', function () {
    expect(Game).to.be.a('function')
  })

  it('should be an instance of Game', function () {
    expect(game).to.be.an.instanceof(Game)
  })

  it.skip('should keep track of the current round', function () {})

  it.skip('should create cards', function () {})

  it.skip('should create the deck', function () {})

  it.skip('should create the round', function () {})

  it.skip('should print the game start message', function () {})

  it.skip('should start the game', function () {})
})