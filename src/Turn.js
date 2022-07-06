class Turn {
    constructor(input, card) {
        this.input = input
        this.card = card
        this.evaluation = false
    }
    returnGuess() {
        return this.input
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if (this.input === this.card.correctAnswer) {
            this.evaluation = true
            return this.evaluation
        } else {
            this.evaluation = false
            return this.evaluation
        }
    }

    giveFeedback() {
        if (this.evaluation === true) {
            return 'Correct!'
        } else {
            return 'Incorrect!'
        }
    }
}

module.exports = Turn