class Turn {
    constructor(guess, cardObj) {
        this.guess = guess;
        this.currentCard = cardObj;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.currentCard;
    }

    evaluateGuess(cardObj) {
        if (this.guess === cardObj.correctAnswer) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = Turn;