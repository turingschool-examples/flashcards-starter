class Turn {
  constructor (guess, card) {
    this.guess = card.answers;
    this.card = card.correctAnswer;
  }

  returnGuess();
  returnCard();
  evaluateGuess();
  giveFeedback();

}
