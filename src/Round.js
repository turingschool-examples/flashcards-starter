class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.cards[0];
    }
}

module.exports = Round;