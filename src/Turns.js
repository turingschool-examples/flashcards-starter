class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
    this.guessIsCorrect = "";
    console.log(this.currentCard)
    console.log()
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    if (this.guess === this.currentCard) {
      this.guessIsCorrect = true
      return true
    } else {
      this.guessIsCorrect = false
      return false
    }
  }

  giveFeedback() {
    if (this.guessIsCorrect === true) {
      return "correct!"
    } else {
      return "incorrect!"
    }
  }
}



module.exports = Turn
