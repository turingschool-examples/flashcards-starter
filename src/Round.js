const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
let i

class Round {

    constructor(deck) {
       this.deck = deck
       this.turns = 0;
       this.currentCard = deck[0];
    };
    returnCurrentCard() {
        if(this.currentCard === this.deck[0]){
        return this.currentCard;
        } else {
        return this.currentCard = this.deck[i];
        };
    };
   
    takeTurn() {
        // i++
        const turn = new Turn();
        return turn;
        // return this.currentCard ++
    };
};

module.exports = Turn;
module.exports = Card;
module.exports = Deck;
module.exports = Round;