const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
class Round {
    constructor(deck) {
       this.deck = deck;
       this.turnCount = 0;
       this.currentCard = this.deck[this.turnCount];
       this.newTurn = new Turn('userGuess', this.currentCard);
       this.incorrectGuesses = [];
       this.correctGuesses = [];
    };
    returnCurrentCard() {
        return this.currentCard;
    };
   
    takeTurn(guess) { 
        this.turnCount++;
        if(!this.newTurn.evaluateGuess(guess)){
            this.incorrectGuesses.push(this.newTurn.currentCard.cardIdNumber);
        };
        this.correctGuesses.push(this.newTurn.currentCard.cardIdNumber);
        return this.newTurn.giveFeedback();
    };
    calculatePercentCorrect(wrongAnswers) {
       return wrongAnswers
    };
};
module.exports = Round;
// module.exports = Turn; 