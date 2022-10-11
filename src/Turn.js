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
    return this.currentCard.checkAnswer(this.guess);
  }
  giveFeedback() {
    return this.evaluateGuess() ? "correct" : "incorrect";
  }
}
module.exports = Turn;
