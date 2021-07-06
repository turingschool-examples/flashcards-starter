class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.playedCard = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.playedCard;
  }
  evaluateGuess(){
    if (this.guess === this.playedCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback(test) {
    if (this.guess === this.playedCard.correctAnswer) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
};
module.exports = Turn;
