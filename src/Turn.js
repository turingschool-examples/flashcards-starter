class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess = () => this.guess; 
}

module.exports = Turn;