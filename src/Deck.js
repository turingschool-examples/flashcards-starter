class Deck {
    constructor(newDeck) {
        this.deck = newDeck;
    }
    countCards() {
        return this.deck.length;
    }
}
module.exports = Deck;