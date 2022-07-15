const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.currentCard = card;
    };
    returnCard() {
        console.log('SHOW CARD HERE', this.currentCard)
        return this.currentCard;
    };
    returnGuess() {
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
    giveFeedback() {
        if(this.evaluateGuess() === true) {
            return `correct!`;
        } else {
            return `incorrect!`;
        };
    };
};

module.exports = Turn;
