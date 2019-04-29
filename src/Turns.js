class Turns {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess || null;
    this.currentCard = currentCard || new Card;
  }

  returnGuess() {
    return this.currentCard.possibleAnswers[i];
  }

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {
    if (this.currentCard.correctAnswer === this.userGuess) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(boolean) {
    if (boolean) {
      return 'You got it!';
    } else {
      return 'Incorrect!';
    }
  }
}