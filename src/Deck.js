class Deck {
    constructor(deckObject) {
        this.deck = deckObject;
        this.cardCount = []
    }
    storeCard(card) {
       this.cardCount.push(card);
    }
}

module.exports = Deck;