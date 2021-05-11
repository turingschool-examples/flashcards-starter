//const Card = require('../src/Card');

class Turn {
  constructor(userAnswer, cardInPlay) {
    this.userGuess = userAnswer;
    this.currentCard = cardInPlay;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }


}

module.exports = Turn
