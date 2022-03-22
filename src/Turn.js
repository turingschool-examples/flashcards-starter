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
}

module.exports = Turn;