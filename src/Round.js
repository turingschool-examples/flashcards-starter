const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
    constructor(deck) {
       this.deck = deck;
       this.turns = 0;
       this.currentCard = deck[this.turns];
    };
    returnCurrentCard() {
        return this.currentCard;
    };
   
    takeTurn() {
        this.turns++;
        this.currentCard = this.deck[this.turns];
        let turn = new Turn();
        return turn;
    };
};

module.exports = Turn;
module.exports = Card;
module.exports = Deck;
module.exports = Round;