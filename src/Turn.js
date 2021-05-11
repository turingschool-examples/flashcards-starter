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

  evaluateGuess() {
    // console.log(this.currentCard)
    // console.log(this.currentCard.correctAnswer)
    // console.log(this.userGuess)
    if (this.currentCard.correctAnswer === this.userGuess) {
      return true
    } else {
      return false
    }
  }


}

module.exports = Turn
