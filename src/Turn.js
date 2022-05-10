class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.userGuess === this.card.correctAnswer){
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(result) {
    if(result) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
