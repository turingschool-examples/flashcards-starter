class Turn {
  constructor(userGuess,card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.userGuess === this.card.correctAnswer) {
      return true
    } else {
      return false;
    }
  }

  giveFeedback() {
    return this.evaluateGuess() ?'correct!':'incorrect!'
 }
}

// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.




module.exports = Turn;