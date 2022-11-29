class Turn {
    constructor(answer, card) {
        this.answer = answer
        this.card = card
    }
    returnGuess() {
        return this.answer
    }
    returnCard() {
        return this.card
    }
    evaluateGuess() {
        if (this.answer === this.card.correctAnswer) {
            return true
        } else {
            return false
        }
    }
    giveFeedback() {
        if (this.evaluateGuess()) {
            return `correct!`
        } else {
            return `incorrect!`
        }
    }
}
module.exports = Turn