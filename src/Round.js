const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
       this.deck = deck;
       this.turns = 0;
       this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        this.currentCard = this.deck.cards[this.turns];
        return this.currentCard;
    }
    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard());
        this.turns++;
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.returnCurrentCard());
        }
        this.returnCurrentCard();
        return turn.giveFeedback();
    }
    calculatePercentCorrect() {
        const score = 100 * (this.incorrectGuesses.length / this.turns);
        return score;
    }
    endRound() {
        return '** Round Over! ** You answered ' + this.calculatePercentCorrect() + '% of the questions correctly!'
    }
}

module.exports = Round;