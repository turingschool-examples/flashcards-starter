class Turn {
    constructor(card, guess) {
        this.card = card,
        this.guess = guess
    }

    returnGuess() {
        return this.guess
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if (this.guess === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    }

    giveFeedback() {
        if (this.evaluateGuess()) {
            return 'Correct!'
        } else {
            return 'Incorrect!'
        }
    }
}

module.exports = Turn