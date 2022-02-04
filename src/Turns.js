class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    if (this.guess === this.currentCard) {
      return true
    } else {
      return false
    }
  }
}



module.exports = Turn
