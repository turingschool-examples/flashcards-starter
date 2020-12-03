const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.currentCard = this.deck[0];
        this.incorrectGuesses = [];
        this.correctGuesses = [];
        this.percentCorrect = 0;
    }
    returnCurrentCard() {
        return this.currentCard;
    };
    takeTurn(attempt) {
        this.turns++;
        const turn = new Turn(attempt, this.deck[0]);
        this.deck.shift();
        this.currentCard = this.deck[0];
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(attempt);
            return 'incorrect!';
        } else {
            this.correctGuesses.push(attempt);
            return 'correct!';
        }
    };
    calculatePrecentCorrect() {
        const percent = (this.correctGuesses.length / (this.incorrectGuesses.length + this.correctGuesses.length)) * 100;
        this.percentCorrect = percent;
        return percent;
    };
    endRound() {
        console.log(`**Round over! ** You answered ${this.calculatePrecentCorrect()} % of the questions correctly!`);
    }
}

module.exports = Round;