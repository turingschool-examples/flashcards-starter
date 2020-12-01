class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
    this.response = "";
  }

  // return the player's guess
  returnGuess() {
    return this.guess
  }

  // return the current card
  returnCard() {
    return this.currentCard
  }

  // returns a boolean indicating if guess matches correct answer
  evaluateGuess(currentGuess) {
    if (this.guess === currentGuess) {
      this.response = true
      return true
    } else {
      this.response = false
      return false
    }
  }

  // returns 'incorrect!' or 'correct!' based on evaluateGuess
  giveFeedback() {
    if (this.response === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn