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
    console.log("this",this.guess.length, this.currentCard.correctAnswer.length)
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback(feedback) {
    console.log("feedback:", feedback)
    console.log(this.guess, this.currentCard.correctAnswer)
    if (this.guess === this.currentCard.correctAnswer) {
      return 'correct!';
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;
