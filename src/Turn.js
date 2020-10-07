class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    // console.log(this.card)
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {

  }
  giveFeedback() {

  }
}


module.exports = Turn;
