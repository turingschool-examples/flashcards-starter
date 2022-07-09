const Turn = require('../src/Turn');
class Round {
    constructor(deck) {
       this.deck = deck;
       this.turnCount = 0;
       this.currentCard = this.deck[this.turnCount];
       this.incorrectGuesses = [];
    };
    returnCurrentCard() {
        return this.currentCard;
    };
   
    takeTurn(guess) { 
        this.turnCount++;
        this.newTurn = new Turn(guess, this.currentCard);
        if(!this.newTurn.evaluateGuess(guess)){
            this.incorrectGuesses.push(this.newTurn.currentCard.cardIdNumber);
        };
        return this.newTurn.giveFeedback();
    };
    calculatePercentCorrect() {
        return (this.incorrectGuesses.length / this.turnCount) * 100;
    };
    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    };
};
module.exports = Round;
