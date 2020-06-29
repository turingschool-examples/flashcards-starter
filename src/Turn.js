class Turn {
    constructor(userGuess, currentCard) {
        this.userGuess = userGuess,
        this.currentCard = currentCard,
        this.guessCorrect = null;
    }
    returnGuess() {
        return this.userGuess;
    }
    returnCard() {
        return this.currentCard;
    }
    evaluateGuess() {
        if (this.userGuess === this.currentCard.correctAnswer) {
            this.guessCorrect = true;
            return true;
        } else {
            this.guessCorrect = false;
            return false;
        }
        //this.userGuess === this.currentCard.correctAnswer ? true : false;
    }
    giveFeedback() {
        if (this.guessCorrect === true) {
            return "correct!";
        } else {
            return "incorrect!";
        }
    }
}

module.exports = Turn;