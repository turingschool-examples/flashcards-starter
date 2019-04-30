class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess || null;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    // let answer;
    if (this.currentCard.correctAnswer === this.userGuess) {
      // answer = true;
      return true;
    } else {
      // answer = false;
      return false;
    }
    // giveFeedback(answer);
  }

  giveFeedback(answer) {
    if (answer) {
      return 'You got it!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;