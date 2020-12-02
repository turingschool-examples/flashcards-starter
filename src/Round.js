const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnCount = 0;
        this.currentCard = this.deck[0];
    }
    returnCurrentCard() {
        return this.currentCard;
    };
    takeTurn(attempt) {
        this.turnCount++;
        const turn = new Turn(attempt, this.deck[0]);
    }
}

module.exports = Round;