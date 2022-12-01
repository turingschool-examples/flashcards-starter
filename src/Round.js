class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = 0;
    }
    returnCurrentCard() {
        return this.deck.cardDeck[this.currentCard];
    }
    takeTurn() {
        this.turns ++;
        this.currentCard ++;
    }
}

module.exports = Round;


// When takeTurn is called....I want the next card in the deck to become the 
// current card.  Right now returnCurrentCard is written so that it is hard
// coded to return the first element of deck.  I need this to be more 
// dynamic