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
        const score = 100 * ((this.deck.cards.length - this.incorrectGuesses.length)  / this.deck.cards.length);
        return score;
    }
    endRound() {
        const endMessage = '** Round Over! ** You answered ' + this.calculatePercentCorrect() + '% of the questions correctly!';
        console.log(endMessage);
        return endMessage;
    }
}

module.exports = Round;