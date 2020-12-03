class Deck {
    constructor() {
        this.cards = Object.values(arguments);
    }
    countCards() {
        return this.cards.length;
    }
}

module.exports = Deck;