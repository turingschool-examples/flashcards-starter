const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const dataArray = require('../src/data').prototypeData
const cardArray = dataArray.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))

describe('Round', function() {

    it('should store a deck of cards', () => {
        const deck = new Deck(cardArray)
        const round = new Round(deck)
        expect(round.deck.cards).to.deep.equal(cardArray)
    })

    it('should be able to return the current card', () =>{
        const deck = new Deck(cardArray)
        const round = new Round(deck)
        expect(round.returnCurrentCard()).to.equal(deck.cards[0])
    })

    it('should start turns at 0', () => {
        const round = new Round()
        expect(round.turns).to.equal(0)
    })

    it('should increase turns count by 1 when taking a turn', () => {
        const deck = new Deck(cardArray)
        const round = new Round(deck)
        round.takeTurn()
        expect(round.turns).to.equal(1)
    })

    it('should start with no incorrect guesses', () => {
        const round = new Round()
        expect(round.incorrectGuesses).to.deep.equal([])
    })

    it('should evaluate the guess and return correct or incorrect', () => {
        const deck = new Deck(cardArray)
        const round = new Round(deck)
        expect(round.takeTurn('object')).to.equal('correct!')
        expect(round.takeTurn('function')).to.equal('incorrect!')
    })

    it('should add the card id to incorrectGuesses when guessing incorrectly', () => {
        const deck = new Deck(cardArray)
        const round = new Round(deck)
        round.takeTurn('array')
        round.takeTurn('function')
        expect(round.incorrectGuesses).to.deep.equal([1, 2])
    })

    it('should be able to calculate the percentage of correct answers', () => {
        const deck = new Deck(cardArray)
        const round = new Round(deck)
        round.takeTurn('object')
        round.takeTurn('function')
        expect(round.calculatePercentCorrect()).to.equal(50)
    })
})