const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

class Turn {
    constructor(userGuess, card) {
        this.userGuess = userGuess;
        this.currentCard  = card;
    };
    returnCard(card){
        return this.currentCard;
    };
    returnGuess(){
        return this.userGuess;
    };
};

module.exports = Turn;

