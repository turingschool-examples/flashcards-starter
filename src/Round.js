const Turn = require("./Turn");
const Deck = require("./Deck");

class Round {
    constructor(deck) {
        this.deck = deck.deck;
        this.currentCard = this.deck[0];
        this.turns = 0;
        this.incorrectGuesses = [];
        this.totalGuesses = [];
        this.roundsEnded = 0;
        this.percentageCorrect;
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        var turn = new Turn(guess, this.currentCard);
        this.turns += 1;
        this.deck.shift();
        this.currentCard = this.deck[0];
        this.totalGuesses.push(1);
        //
        var isCorrect = turn.evaluateGuess();
        if (!isCorrect) {
            this.incorrectGuesses.push(1);
        };
        return turn.giveFeedback();
    }
    calculatePercentageCorrect() {
        var correctGuessesAmount = this.totalGuesses.length - this.incorrectGuesses.length;
        var decimalOfCorrectGuesses = correctGuessesAmount / this.totalGuesses.length;
        percentageCorrect = decimalOfCorrectGuesses * 100;
        return percentageCorrect;
    };
    endRound() {
        return `Round over! You answered ${this.percentageCorrect} of the questions correctly!`
    }
};

module.exports = Round;