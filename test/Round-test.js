const chai = require('chai')
const expect = chai.expect

const data = require('../src/data')
const prototypeQuestions = data.prototypeData
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

var card1 = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]
var card2 = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]
var card3 = prototypeQuestions[Math.floor(Math.random() * prototypeQuestions.length)]


const array = [card1, card2, card3]
const myDeck = new Deck(array)

describe('Round', function() { 

    it('should be a function', function() {
        const round = new Round(myDeck)
        expect(Round).to.be.a('function')
    })

    it('should be an instance of round', function() {
        const round = new Round(myDeck)
        expect(round).to.be.an.instanceof(Round)
    })

    it('should have round counter defaulted to 0', function() {
        const round = new Round(myDeck)
        expect(round.countTurn).to.equal(0)
    })

    it('should count rounds', function() {
        const round = new Round(myDeck)
        round.takeTurn("answer")
        expect(round.countTurn).to.equal(1)
    })

    it('should add incorrect guesses to array', function() {
        const round = new Round(myDeck)
        round.takeTurn("answer")
        expect(round.incorrectGuesses[0]).to.deep.equal(array[0].id)
    })

    it('should make the next card the current card', function() {
        const round = new Round(myDeck)
        round.takeTurn("answer")
        expect(round.currentCard).to.equal(array[1])
    })

    it('should return feedback of wether the guess is correct or not', function() {
        const round = new Round(myDeck)
        round.takeTurn("answer")
        expect(round.takeTurn()).to.equal('Incorrect')
    })

    it('should return the percentage of questions correct', function() {
        const round = new Round(myDeck)

        round.takeTurn(array[0].correctAnswer)
        round.takeTurn("answer")
        round.takeTurn(array[2].correctAnswer)
        
        expect(round.correctPercent()).to.equal(66)
    })

    it('should print an end game message to the console', function() {
        const round = new Round(myDeck)
        
        round.takeTurn(array[0].correctAnswer)
        round.takeTurn("answer")
        round.takeTurn(array[2].correctAnswer)

        expect(round.endRound()).to.equal(`**Round over!**You answered ${round.correctPercent()}% of the questions correctly!`)
    })

});