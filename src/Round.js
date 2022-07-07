const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
    constructor(deck) {
       this.deck = deck;
       this.turnCount = 0;
       this.currentCard = deck[this.turnCount];
    };
    returnCurrentCard() {
        return this.currentCard;
    };
   
    takeTurn(guess) {
        this.turnCount++;
        this.currentCard = this.deck[this.turnCount];
        let newTurn = new Turn();
        // newTurn.evaluateGuess();
        return newTurn.evaluateGuess();
    };
};

module.exports = Turn;
module.exports = Card;
module.exports = Deck;
module.exports = Round;