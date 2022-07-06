class Turn {
    constructor(guess, card) {
        this.guess = guess
        this.card = card
        this.correct = false
    }
    returnGuess() {
        return this.guess
    }
    returnCard() {
        return this.card
    }
    evaluateGuess() {
        if (this.guess === this.card.correctAnswer) {
            this.correct = true
        }
        return this.correct
    }
}

module.exports = Turn