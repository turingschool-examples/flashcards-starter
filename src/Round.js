const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }
  takeTurn(guess, card) {
    let newTurn = new Turn(guess, this.currentCard);
    if (newTurn.evaluateGuess()) {
      this.turns += 1;
      this.deck.cards.shift();
      newTurn.giveFeedback();
      return "true";
    } else {
      this.incorrectGuesses.push(this.deck.cards.id);
      this.turns += 1;
      this.deck.cards.shift();
      newTurn.giveFeedback();
      return "false";
    }
    
  }
  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === 0) {
      return 100;
    } else {
      var incorrect = this.incorrectGuesses.length / this.turns
      return (100 - incorrect * 100)                
    }
  }
  endRound() {
    if (this.deck.cards.length === 0) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
  }
}

module.exports = Round;