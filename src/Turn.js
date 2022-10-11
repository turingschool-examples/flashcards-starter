// const Card = require('../src/Card');

class Turn {
    constructor(userGuess, currentCard) {
        this.guess = userGuess;
        this.card = currentCard;
    };

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess() {

        if (this.guess === this.card.correctAnswer) {
            return true;
        }
    }

    giveFeedback() {
        if (this.guess === this.card.correctAnswer) {
            return 'correct!';
        } else {
            return 'incorrect!!'
        }
    }

}
module.exports = Turn;