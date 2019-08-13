class Turn {
  constructor(userGuess,card) {
    this.userGuess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if(this.userGuess === this.card.correctAnswer) {
      return true
    } else {
      return false;
    }
  }

  giveFeedback() {
    return this.evaluateGuess() ?'correct!':'incorrect!'
 }
}






module.exports = Turn;