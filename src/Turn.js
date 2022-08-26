const Card = require("./Card");

class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }
  returnGuess() {
    return this.userGuess
  }
  returnCard() {
    return this.card
  }
  evaluateGuess() {
    if (this.userGuess === this.card.correctAnswer) {
      return true;
    } else if (this.userGuess !== this.card.correctAnswer){
      return false;
    }
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return `Correct!`      
    } else {
      return `Incorrect!`
    }
  }

}

module.exports = Turn;