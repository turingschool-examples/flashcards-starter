class Deck{
    constructor(cards){
        this.deck = cards;
    }

    countCards = () => this.deck.length;
}

module.exports = Deck;