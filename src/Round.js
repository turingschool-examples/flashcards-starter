const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.cards = deck.cards;
    this.turns = 0;
    this.incorrectGuess = [];
    this.currentTurn = '';
    this.currentCard = deck.cards[0];
    this.percentCorrect = '';
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(usersGuess) {
    this.currentTurn = new Turn(usersGuess, this.currentCard);
    this.turns += 1;
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuess.push(this.currentCard.id)
      // console.log('incorrect guess', this.incorrectGuess);
      // console.log('turns', this.turns)
    }
    this.currentCard = this.cards[this.turns];
    // console.log('currentCard', this.currentCard)
    return this.currentTurn.giveFeedback();
    // this.endRound();
  };

  calculatePercentCorrect() {
    
    this.percentCorrect = 100 - (this.incorrectGuess.length/this.turns * 100).toFixed(0) + '%';
    console.log(this.percentCorrect)
    return this.percentCorrect;
   
  };

  endRound() {
    this.calculatePercentCorrect()
    return `**Round over!**You answered ${this.percentCorrect} of the questions correctly!`
  };
};





module.exports = Round;