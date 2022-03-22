class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

evaluateGuess() {
  switch (this.userGuess) {
    case this.currentCard.correctAnswer:
    return true;
    break;
    default:
    return false;
  }
}

giveFeedback() {
  if (this.evaluateGuess()) {
    return 'correct!';
  } else {
    return 'incorrect!';
    }
  }
}


module.exports = Turn;
