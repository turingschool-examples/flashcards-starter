class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    switch (this.guess) {
    case this.currentCard.correctAnswer:
      return true;
    default:
      return false;
    }
    // if (this.guess === this.currentCard.correctAnswer) {
    //     return true;
    // }
    // return false;
    // return this.guess === this.currentCard.correctAnswer ? true : false
    // const isCorrect = this.guess === this.currentCard.correctAnswer
    // return isCorrect
  }

  giveFeedback() {
    switch (this.evaluateGuess()) {
    case true:
      return "Correct!!!";
    default:
      return "Incorrect!";
    }
  }

  handleGuess() {
    this.evaluateGuess();
    this.giveFeedback();
  }
}









module.exports = Turn;