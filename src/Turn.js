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
        return this.guess === this.card.correctAnswer ? true : false;
    }

    giveFeedback(guess) {
        return this.evaluateGuess() ? 'correct!' : 'incorrect!';
    }
}

module.exports = Turn;