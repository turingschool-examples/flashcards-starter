class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }
  returnGuess() {
    console.log(this.guess)
    return this.guess;
  }
}
module.exports = Turn;
