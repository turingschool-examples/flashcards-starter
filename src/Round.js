const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck[0];
        this.turns = 0;
        this.turn = new Turn;
        this.incorrectGuesses = [];
        this.totalGuesses = [];
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        var feedback;
        this.totalGuesses.push(this.currentCard.id);
        if (guess != this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id);
            feedback =  "Incorrect!";
        } else {feedback = "Correct!"};
        this.turn = new Turn;
        this.turns += 1;
        this.currentCard = deck[this.turns];
        return feedback;
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