/* eslint-disable max-len */
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
  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    this.turns += 1;
    this.deck.cards.shift();
    newTurn.giveFeedback();
    if (newTurn.evaluateGuess()) {
      return "correct!";
    } else {
      this.incorrectGuesses.push(this.deck.cards.id);
      return "incorrect!";
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