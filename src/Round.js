const Turn = require('../src/turns')

class Round {
    constructor(deck){
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
        this.correctGuesses = []

    }
    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }
    takeTurn(guess) {
        const turn1 = new Turn(guess, this.deck.cards[this.turns])
        if (turn1.evaluateGuess()) {
            this.correctGuesses.push(this.deck.cards[this.turns].id)
        } else {
            this.incorrectGuesses.push(this.deck.cards[this.turns].id)
        }
        this.turns++
        return turn1.giveFeedback()
    }
    calculatePercentCorrect() {
        let percentage = this.correctGuesses.length / this.turns * 100
        return Math.floor(percentage) 
    }
    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round;