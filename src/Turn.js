class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard()  {
    return this.card;
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer)  {
      this.giveFeedback();
      return true;
    } else  {
      this.giveFeedback();
      return false;
    }
  }
  giveFeedback()  {
    if (this.guess === this.card.correctAnswer)  {
      return "correct!";
    } else  {
      return "incorrect!";
    }
  }
}

module.exports = Turn;