class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard()  {
    return this.currentCard;
  }
  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer)  {
      giveFeedback();
      return true;
    } else  {
      giveFeedback();
      return false;
    }
  }
  giveFeedback()  {
    if (this.guess === this.currentCard.correctAnswer)  {
      return "correct!";
    } else  {
      return "incorrect!";
    }
  }
}