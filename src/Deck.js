class Deck {
    constructor(cards) {
        this.cards = cards;
        this.count = 0;
    }

    countCards() {
        return this.count = this.cards.length;
    }
}


module.exports = Deck;