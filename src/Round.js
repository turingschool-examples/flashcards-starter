const Turn = require("./Turn");
const Card = require('../src/Card');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = this.deck.cards[0];
        this.percentage = 0
    };

    takeTurn(userGuess) {
        let turn = new Turn(userGuess, this.currentCard);
        this.turns++
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.currentCard = this.deck.cards[this.turns];
        this.calculatePercentCorrect();
        return turn.giveFeedback();
    };

    returnCurrentCard() {
        return this.currentCard;
    };

    calculatePercentCorrect() {
        // console.log('turns', this.turns)
        // console.log('array', this.incorrectGuesses.length)
        // console.log('math', (this.turns -
        // this.incorrectGuesses.length) / this.turns)
        this.percentage = Math.round((((this.turns -
            this.incorrectGuesses.length) / this.turns) * 100));
        return this.percentage;
    }

    endRound() {
        const endRoundMessage = `** Round over! ** You answered ${this.percentage} of the questions correctly!`;
        // console.log('where is it', endRoundMessage);
        return endRoundMessage;
    }
};
module.exports = Round;