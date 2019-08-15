const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards; 
    this.turn = 0; 
    this.incorrectGuess = [];
    // console.log(this.currentCard)
  }
  returnCurrentCard() {
    return this.deck[this.turnCount];
  }
  takeTurn(guess){
    var currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    console.log('turn.eval', turn.evaluateGuess())
    if (turn.evaluateGuess() === false){
      this.incorrectGuess.unshift(currentCard.id);
    }
    this.turn ++; 
    return turn.giveFeedback();
  };
};
module.exports = Round; 

