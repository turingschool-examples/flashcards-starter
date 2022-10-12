class Deck {
    constructor(deckOfCards) {
        this.cards = deckOfCards || [];
    };

    countCards() {
        return this.cards.length
    }
}
module.exports = Deck;