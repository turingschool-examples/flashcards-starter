class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  evaluateGuess(guess) {
    this.guess = guess;
    if (this.card.correctAnswer == this.guess) {
      console.log(this.card.correctAnswer);
      console.log(myGuess)
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    return this.evaluateGuess = true ? 'correct!' : 'incorrect!';
  }

  returnCard() {
    return this.card;
  }

  returnGuess() {
    return this.guess;
  }
  
}

module.exports = Turn