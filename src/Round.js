const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }
  takeTurn(userGuess) {
  const currentTurn = new Turn(userGuess, this.currentCard);
  this.turns++;
// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
  }
  calculatePercentCorrect() {
// calculates and returns the percentage of correct guesses
  }
  endRound() {
// prints the following to the console:
// ‘** Round over! ** You answered <>% of the questions correctly!’
  }
}

module.exports = Round;
