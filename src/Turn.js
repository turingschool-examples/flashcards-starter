const Card = require('../src/Card')

class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.cardInPlay = card;
    }
    returnGuess() {
        return this.guess
    }
    returnCard() {
        return this.CardinPlay
    }
    // evaluateGuess() {
    //     return this.guess === this.CardinPlay.correctAnswer
    // }
    giveFeedBack() {
        if(this.evaluateGuess()) {
            return 'correct!'
        } else {
            return 'incorrect'
        }
    }
}

module.exports = Turn;