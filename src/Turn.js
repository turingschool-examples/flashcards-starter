class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    // return the player's guess
    return this.guess
  }

  returnCard() {
    // return the current card
    return this.currentCard
  }

  evaluateGuess() {
    // returns a boolean indicating if guess matches correct answer
    if (this.guess === this.currentCard.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    // returns 'incorrect!' or 'correct!' based on evaluateGuess
    if (evaluateGuess) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn

// Instantiated with two arguments -
//  a string (that represents a user’s guess to the question)
//  and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method, returns boolean indicating if the guess matches the correct answer
// giveFeedback: method, returns either ‘incorrect!’ or ‘correct!’ based on evaluateGuess