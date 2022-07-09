const Turn = require('../src/Turn');
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
        this.turnCount++;
        const newTurn = new Turn(guess, this.currentCard);
        if(!newTurn.evaluateGuess(guess)){
            this.incorrectGuesses.push(newTurn.currentCard);
            console.log(this.incorrectGuesses)
        };
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
