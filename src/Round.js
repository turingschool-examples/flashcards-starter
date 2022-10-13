const Deck = require("./Deck");
class Round {
    constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
    };
    returnCurrentCard() {
        return this.deck[0]
    }
    takeTurn(currentTurn) {
        this.turn += 1 
        this.deck.cards.push(currentTurn.card);
        
        if(currentTurn.evaluateGuess() !== true) {
            this.incorrectGuesses.push(currentTurn.card.id)
            this.deck.cards.shift()
        }
         return currentTurn.giveFeedBack()
    }
    calculatePercentCorrect(){
      const total = this.turn;
      const incorrectNum = this.incorrectGuesses.length
      const CorrectAnswers =  total - incorrectNum;
      const winPercent = CorrectAnswers / total * 100;
      return Math.floor(winPercent)
        
        // console.log("HERE",total)
    }
     
};











module.exports = Round;