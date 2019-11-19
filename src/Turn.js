class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.result;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      this.result = true;
    } else{
      this.result = false;
    }
    return this.result;
  }

  giveFeedback() {
    if(this.result) {
      return 'Correct!'
    } else return 'Incorrect!'
  }
}

module.exports = Turn;
