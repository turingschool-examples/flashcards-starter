class Deck {
    constructor(cards) {
        this.cards = cards;
    }

    countCards() {
        console.log(this.cards.length)
        return this.cards.length
    }
}

module.exports = Deck;