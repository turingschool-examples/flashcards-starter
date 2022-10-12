const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns++;
        this.currentCard = this.deck.cards[this.turns];
        return turn.giveFeedback();
    }

    calculatePercentCorrect() {
        const percent = (1 - this.incorrectGuesses.length / this.turns) * 100;
        return percent.toFixed(2) + '%';
    }

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
    }
}

module.exports = Round;