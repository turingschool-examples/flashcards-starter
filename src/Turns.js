class Turns {
    constructor(guess, card) {
        this.guess = guess
        this.card = card
    }
    
    returnGuess() {
        return this.guess
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if (this.guess != this.card.correctAnswer) {
            return false
        }
        else {
            return true
        }
    }

    giveFeedback() {
        if (this.guess != this.card.correctAnswer) {
            return 'Incorrect!'
        }
        else {
            return 'Correct!'
        }
    }

}

module.exports = Turns;