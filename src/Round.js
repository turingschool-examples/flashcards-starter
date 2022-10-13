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
      const winPercentRounded = Math.floor(winPercent);
       
      return winPercentRounded  
    }
     endRound(num) {
        //  console.log("LOCATION", num)
        return `** Round Over! You answered ${num} % of the questions correctly!`
     }
};











module.exports = Round;