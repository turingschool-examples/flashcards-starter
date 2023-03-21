
class Turn {
  constructor(guess, cardObj) {
    this.guess = guess
    this.card = cardObj
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {

  }
  giveFeedback() {

  }
}

module.exports = Turn