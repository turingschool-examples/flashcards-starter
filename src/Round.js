const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
   this.currentCard = this.deck[this.turns];
   return this.currentCard;
    
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns ++;
    if(turn.evaluateGuess()=== false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round(100-((this.incorrectGuesses.length/this.turns) * 100))

  }

  endRound() {
    return 'Round over! You answered ' + this.calculatePercentCorrect() + '%' + ' of the questions correctly!'
  }
}






module.exports = Round;

