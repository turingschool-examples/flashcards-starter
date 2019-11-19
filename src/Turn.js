class Turn {
  contructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.guess === card.correctAnswer) {
      return true;
    } else{
      return false;
    }
  }

  giveFeedback() {
    if(this.guess === card.correctAnswer) {
      return 'Correct!'
    } else return 'Incorrect!'
  }
}

module.exports = Turn;
