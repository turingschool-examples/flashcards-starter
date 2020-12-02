class Deck {
    constructor(deck) {
        this.currentDeck = deck;
    }
    countCards() {
        return this.currentDeck.length;
    }
}
module.exports = Deck;