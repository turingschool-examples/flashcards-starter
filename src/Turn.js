const Card = require('../src/Card');
class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.currentCard = card;
    };
    returnCard() {
        return this.currentCard;
    };
    returnGuess(guess) {
        console.log(this.currentCard.correctAnswer)
        this.userGuess = guess;
        return this.userGuess;
    };
    evaluateGuess(guess) {
        this.userGuess = guess
        if(this.userGuess === this.currentCard.correctAnswer) {
            return true;
        } else {
            return false;
        };
    };
    giveFeedback(guess) {
        if(this.evaluateGuess(guess) === true) {
            return `correct!`;
        } else {
            return `incorrect!`;
        };
    };
};

module.exports = Turn;
