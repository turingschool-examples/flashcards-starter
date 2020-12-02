const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
       this.deck = deck;
       this.turns = 0;
       this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        this.currentCard = this.deck.cards[this.turns];
        return this.currentCard;
    }
    takeTurn() {
        
    }
}

module.exports = Round;