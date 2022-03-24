const Turn = require('../src/Turn')

class Round {
    constructor(deck) {
        this.currentDeck = deck
        this.turns = 0
        this.incorrectGuesses = []
        this.currentTurn;
    }
    returnCurrentCard() {
        return this.currentDeck.cards[0]
    }
    takeTurn(userGuess) {
        this.turns++;
        this.currentTurn = new Turn(userGuess, this.returnCurrentCard())
        if (this.currentTurn.userGuess !== this.currentTurn.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentTurn.currentCard.id)
            return 'Incorrect!'
        }
        return 'Correct!'
    }
    calculatePercentCorrect() {
        return Math.round(100 - this.incorrectGuesses.length/this.currentDeck.cards.length * 100)
    }
    endRound() {
        return `**Round over!** You answered <${this.calculatePercentCorrect()}>% of the questions correctly!`
    }
}


module.exports = Round;     


