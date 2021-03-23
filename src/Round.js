class Round {
  constructor(currentCard) {
    this.currentCard = currentCard;
    this.turnsCount = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
// method that returns the current card being played
  }
  takeTurn() {
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
