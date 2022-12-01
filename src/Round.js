class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
    }
    returnCurrentCard() {
        return this.deck.cardDeck[0];
    }
    takeTurn() {
        this.turns ++;
    }
}

module.exports = Round;