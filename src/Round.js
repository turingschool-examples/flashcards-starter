const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
    };
    returnCurrentCard() {
        return this.deck.cards[0];
    };
    takeTurn(){
        return new Turn();
    }
}

module.exports = Round;

