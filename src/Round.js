const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = {};
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++
    if (newTurn.evaluateGuess()) {
      this.correctGuesses.push(newTurn.card.id)
      return newTurn.giveFeedback(); 
    } else {
      this.incorrectGuesses.push(newTurn.card.id);
      return newTurn.giveFeedback();
    }

  }

  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length)
    / this.turns * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;