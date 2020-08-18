class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }
  returnGuess() {
    return `${this.guess}`;
  }
  // returnCard() {
  //   return `${}`;
  // }
}
module.exports = Turn;
