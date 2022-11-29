class Deck {
    constructor(cards) {
        this.cards = cards
    }

    cardAmount = () => this.cards.length
}


module.exports = Deck;