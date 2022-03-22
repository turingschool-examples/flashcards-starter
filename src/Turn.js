class Turn {
    constructor(userAnswer, card) {
        this.userGuess = userAnswer;
        this.currentCard = card;
    }
    returnGuess() {
        return this.userGuess
    }
    returnCard() {
        return this.currentCard
    }
    evaluateGuess() {
        if (this.userGuess !== this.currentCard.correctAnswer) {
            return false
        }
        return true
    }
    giveFeedback() {
        if (this.evaluateGuess() === false) {
            return 'Incorrect!'
        }
        if (this.evaluateGuess() === true) {
            return 'Correct!'
        }
    }
}

module.exports = Turn; 