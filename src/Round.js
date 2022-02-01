class Round {
    constructor(deck) {
        this.deck = deck.cards;
    }

    returnCurrentCard() {
        return this.deck[0];
    }
}


module.exports = Round;