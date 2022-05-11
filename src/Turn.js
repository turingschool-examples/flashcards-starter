
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
    giveFeedback() {
      if (this.userGuess === this.card.correctAnswer) {
        return "You are Correct! 🌟 ";
      } else {
        return "Incorrect 😩 ";
      }
    }
  }

  
  module.exports = Turn;
