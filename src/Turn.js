const Card = require('../src/Card');

class Turn {
    constructor(userGuess, currentCard) {
        this.guess = userGuess;
        this.cardInPlay = currentCard;
        
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.cardInPlay;
    }

    evaluateGuess() {
        if (this.guess === this.cardInPlay.correctAnswer) {
            return true;
        }
    }

    giveFeedback() {
        if (this.guess === this.cardInPlay.correctAnswer) {
            return 'correct!';
        } else {
            return 'incorrect!';
        }
    }
}
module.exports = Turn;