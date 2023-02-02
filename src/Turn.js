class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
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

    givesFeedback() {
        const guess = this.evaluateGuess()
        if (guess) {
            return 'correct'
        } else {
            return 'incorrect'
        }
    }
}


module.exports = Turn