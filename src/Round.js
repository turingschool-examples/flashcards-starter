const Turn = require('../src/Turn')

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }

    takeTurn(guess) {
        this.currentTurn = new Turn(guess, this.returnCurrentCard()) 
        if(!this.currentTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.returnCurrentCard().id)
        }
        this.turns += 1
        return this.currentTurn.giveFeedback()
    }

    calculatePercentCorrect() {
        return this.incorrectGuesses.length / this.turns * 100
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

module.exports = Round