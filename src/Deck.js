class Deck {
    constructor(cards) {
        this.cards = cards
    }

    countCards = () => {
        let count = this.cards.length;
        return count
    }
}

module.exports = Deck