const Card = require("./Card");

class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess(guess) {
        if (this.guess === this.card.correctAnswer) {
            return true;
        }
        return false;
    }

    giveFeedback(guess) {
        if (this.evaluateGuess()) {
            return 'correct!'
        }
        return 'incorrect!'
    }
}

module.exports = Turn;