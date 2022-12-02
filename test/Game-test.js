const chai = require('chai')
const Game = require('../src/Game.js')
const expect = chai.expect
const Round = require('../src/Round.js')

describe('Game', function () {
    beforeEach(() => {
        game = new Game()
})
it('Should have currentRound', function () {
    expect(game).to.have.property('currentRound')
})
it('Should have a start method', function () {
    expect(game.start).to.be.a('function')
})
it('Should have a function to set up deck and round', function () {
    expect(game.setUpFunctions).to.be.a('function')
})
it('Should create an instance of Deck and Round', function () {
    expect(game).to.not.have.property('round')
    expect(game).to.not.have.property('deck')
    game.setUpFunctions()
    expect(game).to.have.property('round')
    expect(game).to.have.property('deck')
})
})