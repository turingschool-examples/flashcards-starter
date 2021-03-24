const Turn = require("../src/Turn");

class Round {
  constructor(deck, currentCard) {
    this.deck = deck;
    this.currentCard = currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    const currentTurn = new Turn(userGuess, this.currentCard);
    if (userGuess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push({id:this.turns, card: this.currentCard, guess: userGuess});
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

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
