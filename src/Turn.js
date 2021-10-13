/* eslint-disable no-console */
/* eslint-disable indent */
class Turn {
    constructor (guess, card) {
        this.guess = guess;
        this.card = card;
    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        if (this.guess === this.card.correctAnswer) {
            return true;
            } else { 
            return false;
            }
    }
    giveFeedback() {
        if (this.guess === this.card.correctAnswer) {
            var correct = 'correct!';
            return correct;
            
        } else {
            var incorrect = "incorrect!"
            return incorrect;
        }
    }
}

module.exports = Turn;