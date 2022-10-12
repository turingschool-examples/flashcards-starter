const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.guesses = [];
        this.turnCount = 0;
        this.turns = [];
    };

    returnCurrentCard() {
        return this.deck.cards[0];
    };

    recordGuess(guess) {
        this.guesses.push(guess);
    };

    takeTurn() {
        this.turns.push(new Turn(this.guesses[0], this.deck.cards[0]));
        this.turnCount += 1;
    };
};





module.exports = Round;