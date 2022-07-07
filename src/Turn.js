const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.currentCard  = card;
    };
    returnCard(){
        return this.currentCard;
    };
    returnGuess(){
        return this.userGuess;
    };
    evaluateGuess() {
        if(this.userGuess === this.currentCard.correctAnswer){
            return true;
        } else {
            return false;
        };
    };
    giveFeedback() {
        if(this.evaluateGuess() === true){
            return `correct!`;
        } else {
            return `incorrect!`;
        };
    };
};

module.exports = Turn;

