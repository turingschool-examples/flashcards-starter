const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];
    };

    returnCurrentCard() {
        return this.currentCard;
    };    

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard);
        this.turns++;
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.currentCard = this.deck.cards[this.turns];
        return turn.giveFeedback();
    };

    calculatePercentCorrect() {
        let numberCorrect = this.deck.cards.length - this.incorrectGuesses.length;
        return Math.floor((numberCorrect / this.deck.cards.length) * 100);
    };

    endRound() {
        let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(message);
        return message;
    };
}

module.exports = Round;