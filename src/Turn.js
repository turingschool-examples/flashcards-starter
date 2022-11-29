const Card = require("./Card");

class Turn {
    constructor(guess, card) {
        this.userGuess = guess;
        this.card = card;
        this.guessedAnswer = null;
    }

    returnGuess() {
        return this.userGuess;
    };

    returnCard() {
        //should I create a new instance of card in here?
        return this.card;
    }
    
    evaluateGuess() {
        if(this.userGuess === this.card.correctAnswer) {
            this.guessedAnswer = true;
            return true;
        }
        if(this.userGuess !== this.card.correctAnswer) {
            this.guessedAnswer = false;
            return false;
        }
    }

    giveFeedback() {
        if (this.guessedAnswer === true) {
            return 'correct!';
        } else {
            return 'incorrect!';
        }
    }
}

module.exports = Turn;