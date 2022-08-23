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
        let card = new Card;
        console.log('ayy', this.guess);
        if (this.guess === card.correctAnswer) {
            return true;
        }
    }
}
module.exports = Turn;