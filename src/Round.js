const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
class Round {
    constructor(deck) {
       this.deck = deck;
       this.turnCount = 0;
       this.currentCard = this.deck.cards[this.turnCount];
       this.incorrectGuesses = [];
    };
    returnCurrentCard() {
        return this.currentCard;
    };
   
    takeTurn(guess) { 
        console.log(this.currentCard);
        this.turnCount++;
        const newTurn = new Turn(guess, this.currentCard.cardIdNumber);
        if(!newTurn.evaluateGuess(guess)) {
            this.incorrectGuesses.push(newTurn.currentCard.cardIdNumber)
        } if (this.turns === 30) {
            console.log(this.endRound())
        }
        return newTurn.giveFeedback();
    };
    calculatePercentCorrect() {
        return (this.incorrectGuesses.length / this.turnCount) * 100;
    };
    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    };
};
module.exports = Round;
