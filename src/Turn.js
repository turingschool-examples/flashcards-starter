class Turn {
    constructor(input, card) {
        this.input = input
        this.card = card
        this.evaluation = false
    }
    returnGuess(){
        return this.input
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if (this.input === this.card.correctAnswer) {
            return this.evaluation = true
        } else {
            return this.evaluation = false
        }
    }

    giveFeedback() {
        if (this.evaluation === true) {
            return 'Correct!'
        } else {
            return 'Sorry! Try again.'
        }
    }
}

module.exports = Turn