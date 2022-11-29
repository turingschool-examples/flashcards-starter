class Deck {
    constructor(cards) {
        this.cards = cards;
        this.cardCount = cards.length;
    }
    countCards() {
        return this.cardCount;
    }
}

module.exports = Deck;