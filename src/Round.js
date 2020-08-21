const Turn = require("./Turn");
const Deck = require("./Deck");

class Round {
    constructor(deck) {
        this.deck = deck.deck;
        this.currentCard = this.deck[0];
        this.turns = 0;
        this.incorrectGuesses = [];
        this.totalGuesses = [];
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess, card) {
        var turn = new Turn(guess, card);
        this.totalGuesses.push(this.currentCard.id);
        turn.evaluateGuess();
        turn.giveFeedback();
        if (guess != this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id);
        };
        this.turns += 1;
        this.deck.shift();
        this.currentCard = this.deck[0];
    }
    calculatePercentageCorrect() {
        var correctGuessesAmount = this.totalGuesses.length - this.incorrectGuesses.length;
        var decimalOfCorrectGuesses = correctGuessesAmount / this.totalGuesses.length;
        var percentageCorrect = decimalOfCorrectGuesses * 100;
        return percentageCorrect;
    };
    endRound() {
        return `Round over! You answered ${calculatePercentageCorrect()} of the questions correctly!`
    }
}

module.exports = Round;