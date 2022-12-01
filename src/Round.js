class Round {
    constructor(deck) {
        this.deck = deck;
    }
    returnCurrentCard() {
        return this.deck.cardDeck[0];
    }
}

module.exports = Round;