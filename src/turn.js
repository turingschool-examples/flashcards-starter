class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.answer = card.correctAnswer;

  }

  returnGuess() {
    return this.answer;
  }

  evaluateGuess() {
    console.log(this.guess);
    if (this.guess === this.answer) {
      return true;
    }
    return false;
  }

  returnCard() {

  }


  giveFeedback() {
  }
}

module.exports = Turn;
