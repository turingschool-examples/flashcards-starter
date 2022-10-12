class Deck {
    constructor(cardArray) {
        this.cards = cardArray
    };

    countCards() {
       return this.cards.length
    }
};


module.exports = Deck;