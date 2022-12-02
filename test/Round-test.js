const chai = require('chai')
const Deck = require('../src/Deck.js')
const expect = chai.expect
const Round = require('../src/Round.js')
const Turn = require('../src/Turn.js')


describe('Round', function () {
    let deck = new Deck()
    beforeEach(() => {
        round = new Round(deck)
})
it('Should be a function', function() {
    expect(Round).to.be.a('function')
})
it('Should have a current card', function () {
    expect(round.currentCard).to.equal(deck.cards[0])
})
it('Should return the current card', function () {
    expect(round.returnCurrentCard()).to.equal(deck.cards[round.turnCount])
})
it('Should have the function to take turns', function () {
    expect(round.takeTurn).to.be.a('function')
})
it('Should increase turn count', function () {
    round.takeTurn()
    expect(round.turnCount).to.equal(1)
})
it('Playing a turn should move the current card to next card', function () {
    expect(round.currentCard).to.equal(deck.cards[0])
    round.takeTurn()
    expect(round.currentCard).to.equal(deck.cards[1])
})
it('Should have an array of incorrect guesses', function () {
    expect(round.incorrectGuesses).to.have.lengthOf(0)
})
it('Should put incorrectGuesses into the incorrectGuesses array by id', function () {
    round.takeTurn(deck.cards[round.turnCount].correctAnswer)
    expect(round.incorrectGuesses).to.have.lengthOf(0)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    expect(round.incorrectGuesses).to.have.lengthOf(1)
    expect(round.incorrectGuesses[0]).to.equal(deck.cards[round.turnCount-1].id)
})
it('Should give appropriate feedback', function () {
    expect(round.takeTurn(deck.cards[round.turnCount].correctAnswer)).to.equal(`correct!`)
    expect(round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)).to.equal(`incorrect!`)
})
it('Should have a calculate correct percentage method', function () {
    expect(round.calculatePercentCorrect).to.be.a('function')
})
it('Should calculate and return the correct percentage', function () {
    round.takeTurn(deck.cards[round.turnCount].correctAnswer)
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    expect(round.calculatePercentCorrect()).to.equal(50)
})
it('Should have an end round method', function () {
    round.takeTurn(deck.cards[round.turnCount].correctAnswer)
    round.takeTurn(deck.cards[round.turnCount].correctAnswer)
    round.takeTurn(deck.cards[round.turnCount].correctAnswer)
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    round.takeTurn(`${deck.cards[round.turnCount].correctAnswer}!`)
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
})
})