const chai = require('chai')
const Game = require('../src/Game.js')
const expect = chai.expect
const Round = require('../src/Round.js')

describe('Game', function () {
it('Should have currentRound', function () {
    const game = new Game()
    expect(game).to.have.property('currentRound')
})
it('Should have a start method', function () {
    const game = new Game()
    expect(game.start).to.be.a('function')
})
it('Should have a function to set up deck and round', function () {
    const game = new Game()
    expect(game.setUpFunctions).to.be.a('function')
})
it('Should create an instance of Deck and Round', function () {
    const game = new Game()
    expect(game).to.not.have.property('round')
    expect(game).to.not.have.property('deck')
    game.setUpFunctions()
    expect(game).to.have.property('round')
    expect(game).to.have.property('deck')
})
//game.playGame will run game, then evaluate score to see if the user passes
it('Should have a function to play again', function () {
    const game = new Game()
    expect(game.playGame).to.be.a('function')
})
})