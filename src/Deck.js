const Card = require('../src/Card');

class Deck {
    constructor(gameDeck) {
        this.cards = gameDeck;
    }

    countCards() {
        return this.cards.length;
    }
}

module.exports = Deck;