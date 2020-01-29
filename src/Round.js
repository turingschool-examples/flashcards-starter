const Turn = require('../src/Turn');

class Round{
  constructor(deck){
    this.turn = 0;
    this.deck = deck;
    this.incorrectGuesses = [];
    this.currentCardId = 1;
  }
  takeTurn(answer){
    var currentCard = this.currentCard();
    this.turn+=1;
    var currentTurn = new Turn(answer,currentCard);
    if(!currentTurn.evaluateGuess()){
      this.incorrectGuesses.push(currentCard.id);
    }
    return currentTurn.giveFeedback();
  }
  currentCard(){
    return this.deck.cards[this.turn];
  }
  calculatePercentCorrect(){
    return (this.incorrectGuesses.length/this.turn)*100;
  }

}
module.exports = Round;
