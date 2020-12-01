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
  }
  giveFeedback() {
    //returns 'incorrect' or 'correct" '
  }
}
module.exports = Turn;
