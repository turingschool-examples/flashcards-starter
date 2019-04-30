class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess || null;
    this.currentCard = currentCard || new Card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {
    let answer;
    if (this.currentCard.answer === this.userGuess) {
      answer = true;
    } else {
      answer = false;
    }
    giveFeedback(answer);
  }

  giveFeedback(boolean) {
    if (boolean) {
      return 'You got it!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;