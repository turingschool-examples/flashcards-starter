class Turn {
  constructor(userGuess, card) {
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
    //returns true/false indicating if the user's guess matches the correct answer on the card
    if(this.userGuess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    //returns 'incorrect' or 'correct" '
    if(this.userGuess === this.card.correctAnswer) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
}
module.exports = Turn;
