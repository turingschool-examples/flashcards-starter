const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Game = require('../src/Game')
const Round = require('../src/Round')

describe('Game', function() {

    it('should be able to create a new instance of round', () => {
        const game = new Game()
        game.newRound()
        expect(game.currentRound).to.be.an.instanceof(Round)
    }) 

    it('should have a deck stored in the current round', () => {
        const game = new Game()
        game.newRound()
        expect(game.currentRound.deck).to.be.an.instanceof(Deck)
    })

    it('should have a deck filled with cards', () => {
        const game = new Game()
        game.newRound()
        expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card)
    })
})