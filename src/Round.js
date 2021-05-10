class Round {
  constructor(deck) {
    this.currentCard = deck;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
  // When a guess is made, a new Turn instance is created.
  
    

  // The turns count is updated, regardless of whether the guess is correct or incorrect

  // The next card becomes current card

  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

  // Feedback is returned regarding whether the guess is incorrect or correct
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}


module.exports = Round;

// npm test test/Round-test.js
