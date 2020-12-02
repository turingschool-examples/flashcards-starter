const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard = this.deck[0];
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.currentCard;
    };
    takeTurn(attempt) {
        this.turns++;
        const turn = new Turn(attempt, this.deck[0]);
        this.deck.push(this.deck.shift());
        this.currentCard = this.deck[0];
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(attempt);
            return 'incorrect!';
        } else {
            return 'correct!';
        }
    }
}

module.exports = Round;