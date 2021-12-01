class Round {
    constructor(deck = {}) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    };

    returnCurrentCard() {
        return this.deck.shift();
    };

    takeTurn() {
        this.turns++;
        this.returnCurrentCard()
    };
}

module.exports = Round;