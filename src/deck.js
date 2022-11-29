class Deck {
    constructor(deck){
        this.deck = deck;
    }

    countCards(){
        return this.deck.length;
    }
}

module.exports = Deck;