class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess
  }
  returnCard(newCard) {
    return newCard
  }
}




module.exports = Turn;
