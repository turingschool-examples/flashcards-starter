class Round {
    constructor(deck) { 
        this.turns = 0;
        this.incorrectGuesses = [];
        this.deck = deck;

    }

    returnCurrentCard() {
        return this.deck.deck[0];
    }
    
    takeTurn() {
        this.turns++;
    }
}




module.exports = Round;