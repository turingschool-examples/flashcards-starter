class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer){
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    const guessEvaluation = this.evaluateGuess();
    if(guessEvaluation) {
      return 'correct!';
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
