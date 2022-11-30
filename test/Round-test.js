const chai = require('chai');
const Deck = require('../src/Deck.js');
const expect = chai.expect;
const Round = require('../src/Round.js')
const Turn = require('../src/Turn.js')


describe('Round', function () {
it('Should be a function', function() {
    const deck = new Deck()
    const round = new Round(deck)
    expect(Round).to.be.a('function')
})
it('Should have a current card', function () {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round.currentCard).to.equal(deck.cards[0])
})
it('Should have the function to take turns', function () {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round.takeTurn).to.be.a('function')
})
it('Should increase turn count', function () {
    const deck = new Deck()
    const round = new Round(deck)
    round.takeTurn()
    expect(round.turnCount).to.equal(1)
})
it('Playing a turn should move the current card to next card', function () {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round.currentCard).to.equal(deck.cards[0])
    round.takeTurn()
    expect(round.currentCard).to.equal(deck.cards[1])
})
it('Should have an array of incorrect guesses', function () {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round.incorrectGuesses).to.have.lengthOf(0)
})
it('Should put incorrectGuesses into the incorrectGuesses array by id', function () {
    const deck = new Deck()
    const round = new Round(deck)
    round.takeTurn(deck.cards[round.turnCount].correctAnswer)
    expect(round.incorrectGuesses).to.have.lengthOf(0)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    expect(round.incorrectGuesses).to.have.lengthOf(1)
    expect(round.incorrectGuesses[0]).to.equal(deck.cards[round.turnCount-1].id)
})
it('Should give appropriate feedback', function () {
    const deck = new Deck()
    const round = new Round(deck)
    expect(round.takeTurn(deck.cards[round.turnCount].correctAnswer)).to.equal(`correct!`)
    expect(round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)).to.equal(`incorrect!`)
})
})