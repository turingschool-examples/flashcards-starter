const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn() {
    // method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
      // When a guess is made, a new Turn instance is created.
      // The turns count is updated, regardless of whether the guess is correct or incorrect
      // The next card becomes current card
      // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
      // Feedback is returned regarding whether the guess is incorrect or correct
  }

  calculatePercentCorrect() {
    // method that calculates and returns the percentage of correct guesses
  }

  endRound() {
    // method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
  }
}

module.exports = Round;
