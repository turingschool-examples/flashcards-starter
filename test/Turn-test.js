const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
    let newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    beforeEach(() => {
        newTurn = new Turn('sea otter', newCard)
    })

    it('Should take in a user guess', function() {
        expect(newTurn.guess).to.equal('sea otter')
    })

    it('Should return the current card', function() {
        expect(newTurn.currentCard).to.equal(newCard)
    })

    it('Should have a method that returns the user guess', function() {
        expect(newTurn.returnGuess()).to.equal('sea otter')
    })

    it('Should have a method that returns the current card', function() {
        expect(newTurn.returnCard()).to.equal(newCard)
    })

    it('Should return true if the user guess is on the card', function() {
        expect(newTurn.evaluateGuess()).to.equal(true)
    })

    it('Should evaluate to false if the user guess is not on the card', function() {
        wrongTurn = new Turn('cat', newCard)
        expect(wrongTurn.evaluateGuess()).to.equal(false)
    })

    it('Should return correct if the guess is correct', function() {
        expect(newTurn.giveFeedback()).to.equal("Correct!")
    })

    it('Should return incorrect when the guess is incorrect', function() {
        wrongTurn = new Turn('Dog', newCard)
        expect(wrongTurn.giveFeedback()).to.equal("Incorrect!")
    })

})