const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards; 
    this.turn = 0; 
    this.incorrectGuess = [];
    // console.log(this.currentCard)
  }
  returnCurrentCard() {
    return this.deck[this.turn];
  }

  takeTurn(guess) {
    var currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuess.unshift(currentCard.id);  
    }
    this.turn ++; 
    return turn.giveFeedback();
  };
  calculatePercentageCorrect() {
    // const incorrect = this.incorrectGuess.length;
    // return Math.round(incorrect / this.turn * 100);
    let percent = (this.turn - this.incorrectGuess.length) / this.turn;
    return percent === 0 ? 0 : parseInt((percent * 100).toFixed(0)); 
  };
  endRound() {
    console.log(`You answered ${this.calculatePercentageCorrect()}% of the questions correctly`);
    return `You answered ${this.calculatePercentageCorrect()}% of the questions correctly`;
  }
};
module.exports = Round; 

