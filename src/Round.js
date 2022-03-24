
const Turn = require('../src/Turn');

class Round{
 constructor(deck){
   this.deck = deck;
   this.turnCount = 0;
   this.incorrectGuesses = [];

 }
  returnCurrentCard(){
    let currentCard = this.deck.cards[this.turnCount];
    return currentCard;
  }

  takeTurn(guess){
    this.turnCount++;
    let currentTurn = new Turn(guess, this.returnCurrentCard())
    if(!currentTurn.evaluateGuess()){
      this.incorrectGuesses.push(currentTurn.card.id)
    }
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect(){
    const correctAnswers = this.turnCount - this.incorrectGuesses.length;
    const correctPercent = Math.ceil((correctAnswers / this.turnCount) * 100);
    return this.turnCount ? correctPercent : 0;
  }

  endRound(){
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
