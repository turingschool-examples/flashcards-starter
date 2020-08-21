class Deck {
    constructor(arrayOfCards) {
        this.deck = arrayOfCards;
    }
    countCards() {
        return this.deck.length;
    }
}

module.exports = Deck;