class Turn {
    constructor(guess, card) {
        this.guess = guess
        this.card = card
        this.correct = null
    }
    returnGuess() {
        return this.guess
    }
    returnCard() {
        return this.card
    }
    evaluateGuess() {
        if (this.guess === false && this.card === false || this.guess != this.card.correctAnswer) {
            return this.correct = false
        } else if (this.guess === this.card.correctAnswer) {
            return this.correct = true
        } 
    }
    giveFeedback() {
        this.evaluateGuess()
        if (this.correct === true) {
            return 'correct!'
        } else if (this.correct === false) {
            return 'incorrect!'
        }
    }
}

module.exports = Turn