class Deck { 
    constructor(cards){
        this.cards = cards
    }
    deckCountCards() {
        return this.cards.length
    }
}

module.exports = Deck;