class Turns {
  constructor(guess, question) {
    this.guess = guess;
    this.question = question;
  }

  returnGuess() {
    return this.guess;
  }
}

module.exports = Turns;
